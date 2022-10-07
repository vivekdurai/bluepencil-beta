<script lang="ts">
	import { onMount } from 'svelte';
	import { documentStore } from '$lib/stores';
	import * as api from '$lib/api';
	import { variables } from '$lib/variables';
	export const base_url = variables.basePath;
	export const ws_base_url = variables.wsPath;
	import Fa from 'svelte-fa';
	import {
		faFilePdf,
		faFileDownload,
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

	import { Svroller } from 'svrollbar';
	let viewport: HTMLElement;
	let contents: HTMLElement;

</script>

<div bind:this={viewport} class="w-full h-screen">
	<div class="contents" bind:this={contents}>
        {#if $documentStore.length == 0}
		<div>No Documents</div>
		{:else}
			{#each $documentStore.reverse() as document, i}
				<a href="/documents/{document.id}" class="flex border-b bg-[#EDF2F7]  py-1 px-3">
						{#if document.content_type=='application/vnd.openxmlformats-officedocument.wordprocessingml.document'}
						<div class="flex-shrink-0 w-5 h-10">
							<Fa icon={faFileWord} secondaryOpacity={1} class="text-sky-700 text-xl mt-2 opacity-40" />
						</div>
						{/if}
						{#if document.content_type=='application/msword' }
						<div class="flex-shrink-0 w-5 h-10">
							<Fa icon={faFileWord} secondaryOpacity={1} class="text-sky-600 text-xl mt-2 opacity-40" />
						</div>
						{/if}
						{#if document.content_type=='application/pdf'}
						<div class="flex-shrink-0 w-5 h-10">
							<Fa icon={faFilePdf} secondaryOpacity={1} class="text-slate-400 text-red-800 text-xl mt-2 opacity-40" />
						</div>
						{/if}
						{#if document.content_type=='text/html'}
						<div class="flex-shrink-0 w-5 h-10">
							<Fa icon={faFileDownload} secondaryOpacity={1} class="text-slate-400 text-xl mt-2 opacity-40" />
						</div>
						{/if}
						<div class="ml-2 mt-1 flex-shrink truncate">
							<p class="truncate text-xs text-slate-500 break-all whitespace-no-wrap">
								{document.filename}
							</p>
							<p class="text-gray-400 text-xs whitespace-no-wrap">
								<TimeAgo src={document.created_at} /> 
							</p>
						</div>
					</a>							
				{/each}							
        {/if}

      {#if $documentStore.length == 0}
      <div class="h-screen bg-[#EDF2F7]  border border-slate-100 mt-2 w-auto">
        <div class="m-auto w-64 py-20 text-xs "><div class="text-lg font-bold">You have zero documents.</div> Start adding them by dragging them to the box above or click the browse link.</div>
      </div>
      {/if}

	</div>
</div>

{#key contents}
	<Svroller {viewport} {contents} />
{/key}