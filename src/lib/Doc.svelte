<script>
	export let params;
	import { onMount } from 'svelte';
	import { activeDocumentStore } from '$lib/stores';
	import * as api from '$lib/api';
	import { variables } from '$lib/variables';
	export const ws_base_url = variables.wsPath;
	import _ from 'lodash';
	import Page from '$lib/Page.svelte';
	import TimeAgo from '$lib/TimeAgo.svelte';
	import DocumentsEmbed from '$lib/DocumentsEmbed.svelte'
	let message;
	let pages = [];
	let messages = [];
	let extractingText = false;
	console.log(params);
	const ws_document_url =
		ws_base_url +
		'/documents/realtime/' +
		params.document +
		'?token=' +
		localStorage.getItem('token');

	async function getDocument() {
		const response = await api.get(`documents/${params.document}`, localStorage.getItem('token'));
		if (!response.errors) {
			$activeDocumentStore = response;
			pages = $activeDocumentStore.pages;
			
		}
	}

	async function extractText() {
		extractingText = true;
		const response = await api.post(`documents/process-ocr/${params.document}`, {}, localStorage.getItem('token'));
	}

	onMount(() => {
		// if ($activeDocumentStore.id==params.document){}else{
		// 	$activeDocumentStore={'pages':[]};
		// }
		getDocument();
		const socket = new WebSocket(ws_document_url);

		// Connection opened
		socket.addEventListener('open', function (event) {
			console.log("Document "+params.document+" It's open");
		});



		// Listen for messages
		socket.addEventListener('message', function (event) {
			let row = JSON.parse(event.data).data;
			console.log('row', row);
		});

		// const sendDocumentMessage = (message) => {
		// 	if (socket.readyState <= 1) {
		// 		socket.send(message);
		// 	}
		// };

		// function onSendMessage() {
		// 	if (message.length > 0) {
		// 		sendDocumentMessage(message);
		// 		message = '';
		// 	}
		// }
	});
</script>

<div
	class="flex bg-white">
	<div class="">
		<!-- <div
		class="fixed break-all  bg-transparent top-12 border-r border-slate-200 left-[70px] bottom-0 w-[240px] ">
			<DocumentsEmbed />
		</div> -->
		<div
		class="fixed bg-[#EDF2F7] break-all top-12 left-[70px] bottom-0 w-[220px] ">
		{#if $activeDocumentStore.filename}
			<div class="p-4 mt-0 rounded-sm">
				<div class="text-sm tracking-tight font-bold">
					{$activeDocumentStore.filename}
				</div>
				<div class="mt-2 min-w-full text-xs">
					<div>Added <TimeAgo src={$activeDocumentStore.created_at} /></div>
					<div>{$activeDocumentStore.content_type}</div>
					<div>{$activeDocumentStore.size}</div>
				</div>
			</div>
		{/if}
		</div>
		<div
		class="fixed break-all overflow-y-scroll top-12 left-[500px] right-0 bg-[#EDF2F7] border-slate-200 bottom-0 py-2 px-2">

			<div class="flex py-4">
				<div class="flex flex-1 flex-col">
				{#if pages}
					{#each _.orderBy(pages, ['number'], ['asc']) as page, index}
						<div filename="{$activeDocumentStore.filename}" page={page.id} class="">
							<Page page={page}  document={$activeDocumentStore} />
						</div>
					{/each}
				{/if}
				</div>
			</div>
		</div>
		<div
		class="fixed break-all  bottom-0 bg-white border z-80 border-slate-200 right-0 left-[300px] h-[40px]">
			<ul class="flex">
				<li class="flex">
					<div on:click={extractText} class="m-2 text-xs cursor-pointer font-semibold shadow-lg py-1 px-4 rounded-lg text-slate-500 bg-slate-50 border border-slate-300 inline-block hover:bg-sky-600 hover:border-sky-600 hover:text-white">Extract Text
						{#if extractingText}
						<svg class="animate-spin inline-block ml-2 -mt-1 mr-0 h-3 w-3 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						  </svg>
						{/if}
					</div>
				</li>
				<li class="flex">
					<div class="m-2 text-xs font-semibold shadow-lg py-1 px-4 rounded-lg text-slate-500 bg-slate-50 border border-slate-300 inline-block">Classify paragraphs</div>
				</li>
				<li class="flex">
					<div class="m-2 text-xs font-semibold shadow-lg py-1 px-4 rounded-lg text-slate-500 bg-slate-50 border border-slate-300 inline-block">Classify document</div>
				</li>
				<li class="flex">
					<div class="m-2 text-xs font-semibold shadow-lg py-1 px-4 rounded-lg text-slate-500 bg-slate-50 border border-slate-300 inline-block">Key Information</div>
				</li>
			</ul>
		</div>

	</div>


</div>
