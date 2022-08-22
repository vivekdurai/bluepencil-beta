<script>
	import { onMount } from 'svelte';
	import { documentStore } from '$lib/stores';
	import * as api from '$lib/api';
	import { ws_base_url } from '$lib/stores';
	import Fa from 'svelte-fa';
	import {
		faFilePdf,
		faFileContract,
		faFileWord,
		faFileText,
		faFileCode
	} from '@fortawesome/free-solid-svg-icons';
	let message;
	let messages = [];

	const ws_document_url =
		ws_base_url + '/documents/realtime?token=' + localStorage.getItem('token');
	const addToDocuments = (document) => {
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
			let row = JSON.parse(event.data).data;
			console.log('row', row);
			addToDocuments(row);
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
	<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
		<div class="inline-block min-w-full border-1 border-slate-300 p-0 rounded-md overflow-hidden">
			<table class="min-w-full leading-normal">
				<thead>
					<tr>
						<th
							class="px-5 py-5 border-b-1  border-gray-300 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							File Name
						</th>
						<th
							class="px-5 py-5 border-b-1  border-gray-300 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							Size
						</th>
						<th
							class="px-5 py-5 border-b-1  border-gray-300 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							File Format
						</th>
						<th
							class="px-5 py-5 border-b-1  border-gray-300 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							Parse Status
						</th>
						<th
							class="px-5 py-5 border-b-1  border-gray-300 bg-white/90 text-left text-xs font-light text-gray-700 uppercase tracking-wider"
						>
							Document Type
						</th>
						<th class="px-5 py-5 border-1  border-gray-500 bg-white/90" />
					</tr>
				</thead>
        {#if $documentStore.length == 0}
        <tbody></tbody>
        {:else}
				<tbody class="mt-2">
					{#each $documentStore as document, i}
						<tr class="even:bg-slate-100 odd:bg-slate-100 hover:bg-white border-b-1 border-gray-500 last-of-type:border-0">
							<td class="px-5 p4 text-sm">
								<a href="/documents/{document.id}" class="flex">
									<div class="flex-shrink-0 w-5 h-10">
										<Fa icon={faFilePdf} secondaryOpacity={1} class="text-slate-400 text-xl mt-2" />
									</div>
									<div class="ml-3 mt-2">
										<p class="text-sky-600 whitespace-no-wrap">
											{document.filename}
										</p>
									</div>
								</a>
							</td>
                            
							<td class="px-5 py-4  bg-transparent text-sm">
								<p class="text-gray-500 whitespace-no-wrap">{formatBytes(document.size)}</p>
								<!-- <p class="text-gray-600 whitespace-no-wrap">bytes</p> -->
							</td>
							<td class="px-5 py-4  bg-transparent text-sm">
								<p class="text-gray-500 whitespace-no-wrap">{document.content_type}</p>
								<!-- <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> -->
							</td>
							<td class="px-5 py-4 bg-transparent text-sm">
								<span
									class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
								>
									<span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
									<span class="relative">processing</span>
								</span>
							</td>
							<td class="px-5 py-4 bg-transparent text-sm">
								<span
									class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
								>
									<span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
									<span class="relative">Contract</span>
								</span>
							</td>
							<td class="px-5 py-4 bg-transparent text-sm text-right">
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
