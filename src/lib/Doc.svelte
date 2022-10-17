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
// {'action': 'updateocr', 'ocr': "[{'word_list': [[0, 12], [13, 15], [16, 19], [20, 38], [39, 59], [60, 70]], 'rect': {'x1': 202.89857482910156, 'x2': 1858.421630859375, 'y1': 215.34934997558594, 'y2': 343.87725830078125}, 'character_list': [['H', 36, 58, 100, 72], ['H', 61, 83, 100, 72], ['H', 86, 108, 100, 72], ['H', 111, 133, 100, 72], ['H', 136, 158, 100, 72], ['H', 161, 183, 100, 72], ['H', 186, 208, 100, 72], ['H', 211, 233, 100, 72], ['H', 236, 258, 100, 72], ['H', 261, 283, 100, 72], ['A', 286, 308, 100, 72], ['N', 313, 331, 100, 72], ['H', 336, 355, 100, 72], ['O', 362, 382, 94, 72], ['F', 386, 408, 100, 72], ['T', 414, 430, 94, 72], ['A', 436, 458, 100, 72], ['m', 462, 482, 94, 72], ['a', 486, 533, 100, 72], ['t', 536, 554, 100, 72], ['L', 565, 582, 102, 72], ['H', 586, 608, 100, 72], ['H', 611, 633, 100, 72], ['A', 636, 658, 100, 72], ['H', 661, 683, 100, 72], ['H', 686, 708, 100, 72], ['A', 711, 733, 100, 72], ['H', 736, 758, 100, 72], ['H', 761, 783, 100, 72], ['S', 786, 808, 102, 69], ['H', 811, 833, 100, 72], ['H', 836, 858, 100, 72], ['O', 861, 883, 109, 69], ['O', 886, 908, 109, 69], ['H', 911, 933, 100, 72], ['H', 936, 958, 100, 72], ['O', 961, 983, 109, 69], ['O', 986, 1008, 109, 69], ['s', 1011, 1033, 100, 72], ['O', 1047, 1083, 109, 69], ['O', 1086, 1108, 109, 69], ['H', 1111, 1133, 100, 72], ['a', 1137, 1158, 94, 72], ['S', 1161, 1183, 102, 69], ['H', 1186, 1208, 100, 72], ['H', 1211, 1233, 100, 72], ['H', 1236, 1258, 100, 72], ['C', 1262, 1282, 100, 72], ['I', 1288, 1305, 100, 72], ['#', 1311, 1333, 100, 72], ['H', 1336, 1358, 100, 72], ['_', 1359, 1385, 70, 67], ['H', 1388, 1406, 100, 72], ['#', 1411, 1433, 100, 72], ['#', 1436, 1458, 100, 72], ['M', 1462, 1482, 94, 72], ['H', 1488, 1506, 100, 72], ['#', 1513, 1535, 100, 72], ['S', 1540, 1558, 94, 72], ['H', 1565, 1583, 100, 72], ['#', 184, 206, 53, 25], ['<', 210, 230, 49, 28], ['H', 234, 256, 53, 25], ['H', 259, 281, 53, 25], ['@', 283, 307, 55, 19], ['H', 309, 331, 53, 25], ['H', 334, 356, 53, 25], ['H', 359, 381, 53, 25], ['H', 384, 406, 53, 25], ['<', 410, 430, 49, 28], ['#', 434, 456, 53, 25]], 'characters': 71, 'words': 6}]"}
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
			console.log(event.data);
			var b = event.data.replace(/'/g, '"');
			console.log(b)
			let row = JSON.parse(b);
			console.log('row', row, row.action);
			if (row.action=='updateocr'){
				console.log(row.ocr);
			}
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
