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
			console.log("It's open");
		});

		// Listen for messages
		socket.addEventListener('message', function (event) {
			let row = JSON.parse(event.data);
			console.log('row', row, row.action);
      if (row.action == 'addfile'){
        console.log('row after', row)
			addToDocuments(row);} 
      if (row.action == 'updatefile'){
			updateDocuments(row);} 
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

<div class="py-0">
	<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
		<div class="inline-block min-w-full border-1 border-slate-300 p-0 rounded-md overflow-hidden">
			<table class="min-w-full border border-gray-100 leading-normal">
				<thead>
					<tr class="border-b border-gray-100">
						<th
							class="px-5 py-5 border-b-1 w-[200px] border-r border-gray-100 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							File Name
						</th>
						<th
							class="px-5 py-5 border-b-1 border-r border-gray-100 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							Size
						</th>
						<th
							class="px-5 py-5 border-b-1 border-r border-gray-100 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							File Format
						</th>
						<th
							class="px-5 py-5 border-b-1 border-r border-gray-100 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							Added
						</th>
						<th
							class="px-5 py-5 border-b-1  border-r border-gray-100 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							Status
						</th>
						<th class="px-5 py-5 border-1 border-r border-gray-100 bg-white/90" />
					</tr>
				</thead>
        {#if $documentStore.length == 0}
        <tbody></tbody>
        {:else}
				<tbody class="mt-2">
					{#each $documentStore.reverse() as document, i}
						<tr class="even:bg-white odd:bg-white hover:bg-white border-b border-gray-100 last-of-type:border-0">
							<td class="px-5 p4 w-[200px] truncate border-r border-gray-100 text-sm">
								<a href="/documents/{document.id}" class="flex">
									{#if document.content_type=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
									<div class="flex-shrink-0 w-5 h-10">
										<Fa icon={faFileWord} secondaryOpacity={1} class="text-sky-700 text-xl mt-2" />
									</div>
									{/if}
									{#if document.content_type=='application/msword' }
									<div class="flex-shrink-0 w-5 h-10">
										<Fa icon={faFileWord} secondaryOpacity={1} class="text-sky-600 text-xl mt-2" />
									</div>
									{/if}
									{#if document.content_type=='application/pdf'}
									<div class="flex-shrink-0 w-5 h-10">
										<Fa icon={faFilePdf} secondaryOpacity={1} class="text-slate-400 text-xl mt-2" />
									</div>
									{/if}
									<div class="ml-3 mt-2">
										<p class="text-sky-600 break-all whitespace-no-wrap">
											{document.filename}
										</p>
									</div>
								</a>
							</td>
                            
							<td class="px-5 py-4 border-r border-gray-100 bg-transparent text-sm">
								<p class="text-gray-500 whitespace-no-wrap">{formatBytes(document.size)}</p>
								<!-- <p class="text-gray-600 whitespace-no-wrap">bytes</p> -->
							</td>
							<td class="px-5 py-4 border-r border-gray-100 bg-transparent text-sm">
								<p class="text-gray-500 whitespace-no-wrap">{document.content_type}</p>
								<!-- <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> -->
							</td>
							<td class="px-5 py-4 border-r border-gray-100 bg-transparent text-sm">
								<span
									class="relative inline-block px-3 py-1 font-normal leading-tight"
								>
                <p class="text-gray-500 whitespace-no-wrap">
									<TimeAgo src={document.created_at} /> 
								</p>
							</td>
							<td class="px-5 py-4 w-48 border-r border-gray-100 bg-transparent text-sm">
                {#if document.images_extracted == true }
                  {#if document.ocr_complete == true }
                    {#if document.ner_complete == true}
                    Parse complete
                    {:else}
                    <span
                    class="relative inline-block px-2 py-0 font-semibold text-slate-300 leading-tight"
                  >
                  <span class="flex rounded-full h-1 w-3">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-300"></span>
                  </span>
                  </span> 
                  <span class="text-slate-400 text-xs align-top">Extracting Information</span> 
               
                    {/if}
                  {:else}
                  <span
									class="relative inline-block px-2 py-0 font-semibold text-slate-300 leading-tight"
								>
                <span class="flex rounded-full h-1 w-3">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-300"></span>
                </span>
								</span> 
                <span class="text-slate-400 text-xs align-top">Recognizing Text</span> 
                  {/if}

                {:else}
								<span
									class="relative inline-block px-2 py-0 font-semibold text-slate-300 leading-tight"
								>
                <span class="flex rounded-full h-1 w-3">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-300"></span>
                </span>
								</span> 
                <span class="text-slate-400 text-xs align-top">Converting</span> 
                {/if}
							</td>
							<td class="px-5 py-4 border-r border-gray-100 bg-transparent text-sm text-right">
								<button type="button" class="inline-block text-gray-500 hover:text-gray-700">
									<svg class="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
										<path
											d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
										/>
									</svg>
								</button>
							</td>
						</tr>
					{/each}

				</tbody>
        {/if}
			</table>

      {#if $documentStore.length == 0}
      <div class="h-screen bg-slate-400/20 border border-slate-100 mt-2 w-auto">
        <div class="m-auto w-64 py-20 text-xs "><div class="text-lg font-bold">You have zero documents.</div> Start adding them by dragging them to the box above or click the browse link.</div>
      </div>
      {/if}
		</div>
	</div>
</div>
