<script>
	export let params;
	import { onMount } from 'svelte';
	import { activeDocumentStore } from '$lib/stores';
	import * as api from '$lib/api';
	import { ws_base_url } from '$lib/stores';
	import Page from '$lib/Page.svelte';
	import TimeAgo from '$lib/TimeAgo.svelte';
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
	<div class="flex overflow-hidden bg-slate-500/20">
		<div class="flex overflow-y-scroll py-10">
			<div class="flex flex-1 flex-col">
			{#if pages}
				{#each pages as page}
					<div filename="{$activeDocumentStore.filename}" page={page.id} class="">
						<Page {page} document={$activeDocumentStore} />
					</div>
				{/each}
			{/if}
			</div>
			<div
			class="flex top-0 right-0 bottom-0 w-3/12 p-10 py-4"></div>
		</div>
		<div
		class="fixed break-all top-0 right-0 bottom-0 w-3/12 bg-slate-400/20 p-10 py-4">
		{#if $activeDocumentStore.filename}
			<div class="bg-white/20 p-5 mt-5 rounded-sm">
				<div class="text-lg font-bold min-w-full">
					{$activeDocumentStore.filename}
				</div>
				<div class="min-w-full">
					<div>Added <TimeAgo src={$activeDocumentStore.created_at} /></div>
					<div>{$activeDocumentStore.content_type}</div>
					<div>{$activeDocumentStore.size}</div>
				</div>
			</div>
		{/if}
	</div>	
	</div>


</div>
