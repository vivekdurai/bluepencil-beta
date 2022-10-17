<script>
	import { onMount } from 'svelte';
	import { documentStore } from '$lib/stores';
	import * as api from '$lib/api';
	import { variables } from '$lib/variables';
	export const base_url = variables.basePath;
	export const ws_base_url = variables.wsPath;
	import Fa from 'svelte-fa';
	import {
		faFilePdf,
		faFileContract,
		faFileWord,
		faFileText,
		faFileCode
	} from '@fortawesome/free-solid-svg-icons';

  import TimeAgo from '$lib/TimeAgo.svelte';
  
import Doc from './Doc.svelte';
	let message;
	let messages = [];

	const ws_document_url =
		ws_base_url + '/documents/realtime?token=' + localStorage.getItem('token');
	
    const addToDocuments = (document) => {
		$documentStore = [...$documentStore, document];
	};

  const updateDocuments = (document) => {
    console.log(document.id)
    $documentStore = $documentStore.filter(doc => doc.id !== document.id);
    $documentStore = [...$documentStore, document];
   	};

	async function deleteDocument(document_id){
		$documentStore = $documentStore.filter(doc => doc.id !== document_id).reverse();
	}

	async function handleDeleteDocument(document){
		console.log(document);
		const response = await api.del(`documents/`+document.id, localStorage.getItem('token'));
	}

	async function getDocuments() {
		const response = await api.get(`documents/`, localStorage.getItem('token'));
		if (!response.errors) {
			$documentStore = response;
		}
	}
	onMount(() => {
		getDocuments();
		const socket = new WebSocket(ws_document_url);

		// Connection opened
		socket.addEventListener('open', function (event) {
			console.log("Listening to Documents");
		});

		// Listen for messages
		socket.addEventListener('message', function (event) {
			console.log(event.data);
			var b = event.data.replace(/'/g, '"');
			let row = JSON.parse(b);
			console.log('row', row, row.action);
			if (row.action == 'addfile'){
				console.log('row after', row)
					addToDocuments(row);} 
			if (row.action == 'updatefile'){
					updateDocuments(row);
				}
			if (row.action == 'removefile'){
				deleteDocument(row.id);
			}
		});


		// documentStore.subscribe((currentMessage) => {
		// 	message = [...messages, currentMessage];
		// });

		const sendDocumentMessage = (message) => {
			if (socket.readyState <= 1) {
				socket.send(message);
			}
		};

		function onSendMessage() {
			if (message.length > 0) {
				sendDocumentMessage(message);
				message = '';
			}
		}
	});

	function formatBytes(bytes, decimals = 2) {
		if (bytes === 0) return '0 Bytes';

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	}
</script>

<div
class=" bg-[#EDF2F7] break-all">
<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 pt-0">
		<div class="inline-block min-w-full border-1 border-slate-300 p-0 rounded-md overflow-hidden">
			<div class="min-w-full border border-gray-100 leading-normal">
				<div>

				</div>
        {#if $documentStore.length == 0}
        <div></div>
        {:else}
				<div class="mt-2">
					{#each $documentStore.reverse() as document, i}
					<div class="inline-block m-5 rounded-sm shadow-sm hover:shadow:lg border border-gray-200">
						<div class=" bg-white p-4 py-2 w-[240px] hover:bg-white  last-of-type:border-0">
							<div class="flex w-[200px] truncate text-sm">
								<div class="flex pt-1">
								{#if document.content_type=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
								<div class="flex-shrink-0 w-15 h-20">
									<Fa icon={faFileWord} secondaryOpacity={1} class="text-sky-700 text-xl mt-2" />
								</div>
								{/if}
								{#if document.content_type=='application/msword' }
								<div class="flex-shrink-0 w-15 h-20">
									<Fa icon={faFileWord} secondaryOpacity={1} class="text-sky-600 text-xl mt-2" />
								</div>
								{/if}
								{#if document.content_type=='application/pdf'}
								<div class="flex-shrink-0 w-15 h-20">
									<Fa icon={faFilePdf} secondaryOpacity={1} class="text-red-900 text-xl mt-2" />
								</div>
								{/if}
								</div>

								<a href="/documents/{document.id}" class="flex">
									<div class="ml-3 mt-2">
										<p class="text-blue-800 font-normal text-base break-all whitespace-no-wrap">
											{document.filename}
										</p>
										<div class="bg-transparent text-sm">
											<span class="text-gray-500 whitespace-no-wrap">{formatBytes(document.size)}</span>
											{#if document.content_type=='application/msword' }Word document{/if}
												{#if document.content_type=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'}Word document{/if}	
												{#if document.content_type=='application/pdf'}PDF document{/if}	
										</div>
										
										<div class=" bg-transparent text-sm">
											<span
												class="relative inline-block font-normal leading-tight"
											>
											<p class="text-gray-500 whitespace-no-wrap">
												Added <TimeAgo src={document.created_at} /> 
											</p>
										</div>
									</div>
								</a>
								
							</div>
                            

							
							<div class="px-5 hidden py-4 border-r border-gray-100 bg-transparent text-sm text-right">
								<button type="button" class="inline-block text-gray-500 hover:text-gray-700">
									<svg class="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
										<path
											d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div class="flex px-2 py-2 border-r border-gray-100 bg-slate-100 text-sm">

							<div class="flex pt-1">
								{#if document.images_extracted == true }
									{#if document.ocr_complete == true }
										{#if document.ner_complete == true}
										Parse complete
										{:else}
										<span class="relative inline-block px-2 py-0 font-semibold text-slate-300 leading-tight">
											<span class="flex rounded-full h-1 w-3">
												<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
												<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-300"></span>
											</span>
										</span> 
										<span class="text-slate-600 text-xs align-top">Extracting Information</span> 					
										{/if}

									{:else}
									<span class="relative inline-block px-2 py-0 font-semibold text-slate-300 leading-tight">
										<span class="flex rounded-full h-1 w-3">
										<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75"></span>
										<span class="relative inline-flex rounded-full h-3 w-3 bg-orange-300"></span>
										</span>
									</span> 

									<span class="text-slate-600 text-xs align-top">Recognizing Text</span> 
									{/if}

								{:else}
								<span class="relative inline-block px-2 py-0 font-semibold text-slate-300 leading-tight">
									<span class="flex rounded-full h-1 w-3">
									<span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
									<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-300"></span>
									</span>
								</span> 
								<span class="text-slate-600 text-xs align-top">Converting</span> 
								{/if}
							</div>

						<div class="flex-grow text-right">
							<ul>
								<li>
									<span on:click={handleDeleteDocument(document)} class="cursor-pointer text-xs">delete</span>
								</li>
								<li>
									<a href="{base_url}/documents/{document.id}/pdf?token={localStorage.token}" class="cursor-pointer text-xs">download</a>
								</li>
							</ul>
						</div>

						</div>

					</div>
					{/each}

					</div>
        {/if}
		
				</div>

      {#if $documentStore.length == 0}
      <div class="h-screen bg-slate-400/20 border border-slate-100 mt-2 w-auto">
        <div class="m-auto w-64 py-20 text-xs "><div class="text-lg font-bold">You have zero documents.</div> Start adding them by dragging them to the box above or click the browse link.</div>
      </div>
      {/if}
		</div>
	</div>
</div>
