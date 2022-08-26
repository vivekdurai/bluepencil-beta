<script>
	export let params;
	import { onMount } from 'svelte';
	import { activeDocumentStore } from '$lib/stores';
	import * as api from '$lib/api';
	import { ws_base_url } from '$lib/stores';
	import Page from '$lib/Page.svelte';
	let message;
	let pages = [];
	let messages = [];
	console.log(params);
	const ws_document_url =
		ws_base_url +
		'/document/realtime?document=' +
		params.document +
		'&token=' +
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
		// const socket = new WebSocket(ws_document_url);

		// Connection opened
		// socket.addEventListener('open', function (event) {
		// 	console.log("It's open");
		// });

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
	class="h-screen flex">
	<div class="flex-1 flex overflow-hidden bg-slate-300">
		<div class="flex-1 overflow-y-scroll  py-10">
			<div class="max-w-8xl mx-auto">
			{#if pages}
				{#each pages as page}
					<div filename="{$activeDocumentStore.filename}" page={page.id} class="">
						<Page {page} document={$activeDocumentStore} />
					</div>
				{/each}
			{/if}
			</div>
		</div>
	</div>
	<div
		class="w-3/12 bg-white p-10 py-4">
		{#if $activeDocumentStore.filename}
			<div class="">
				{$activeDocumentStore.filename}
			</div>
			<div>{$activeDocumentStore.created_at}</div>
			<div>{$activeDocumentStore.content_type}</div>
			<div>{$activeDocumentStore.size}</div>
		{/if}
	</div>

</div>
