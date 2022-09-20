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
	let message;
	let pages = [];
	let messages = [];
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
		// socket.addEventListener('message', function (event) {
		// 	let row = JSON.parse(event.data).data;
		// 	console.log('row', row);
		// });

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
	class="h-screen flex bg-slate-400/20">
	<div class="absolute overflow-hidden">
		<div
		class="fixed break-all top-12 left-[70px] bottom-0 w-[180px]  bg-slate-100/20 rounded-sm m-2 mt-4 p-4 py-0">
		{#if $activeDocumentStore.filename}
			<div class="p-0 mt-0 rounded-sm">
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
		class="fixed break-all overflow-y-scroll  top-0 left-[270px] border bg-slate-300/20 border-slate-200 bg-slate-50 right-64 bottom-0 mt-4 px-3">

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
		class="fixed break-all top-10 border border-slate-200 right-0 bottom-0 w-60  bg-white m-2 mt-4 p-4 py-0">
		
		</div>
	</div>


</div>
