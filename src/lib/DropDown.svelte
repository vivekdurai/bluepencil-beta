<script>
	export let links;
	export let title;
	import Fa from 'svelte-fa';
	import {
		faFileInvoiceDollar,
		faFileLines,
		faArrowRightFromBracket,
		faFilePdf,
		faFileContract,
		faFileWord,
		faFileText,
		faFileCode
	} from '@fortawesome/free-solid-svg-icons';
</script>

<div class="relative group">
	<div
		class="flex flex-row items-left w-full text-left rounded-lg md:w-auto md:inline 
		md:mt-0 md:ml-2 focus:outline-none cursor-pointer text-black hover:text-sky-900  font-semibold"
	>
		{title}
	</div>
	<div class="origin-top-left absolute z-10 hidden bg-grey-200  border-0 border-slate-200 group-hover:block">
		<div class=" bg-white shadow-lg left-300 w-max p-1 py-3 rounded-lg">
			<ul class="grid grid-cols-1 gap-0 md:grid-cols-2">
				{#each links as link}
					<a href="{link.path}" class="bg-white flex m-2 border-slate-100 px-4 py-2 hover:bg-white/10 hover:text-sky-900"
						>
						<div class="flex-shrink mr-4">
							{#if link.icon == 'contract'}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"/></svg>							
							{/if}
							{#if link.icon == 'finance'}
							<svg class="text-slate-900 text-3xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"/></svg>
							{/if}
							{#if link.icon == 'resume'}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"/></svg>							{/if}
							{#if link.icon == 'text'}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 3h6v5h-2V5h-4V3zM9 3v2H5v3H3V3h6zm6 18v-2h4v-3h2v5h-6zm-6 0H3v-5h2v3h4v2zM3 11h18v2H3v-2z"/></svg>
							{/if}
						</div>
						<div class="flex-grow">
							<h2 class="font-semibold text-base text-black">{link.title}</h2>
							<p class="w-[200px] mt-1 text-sm text-black font-normal">{link.help}</p>
						</div>
						</a
					>
				{/each}
			</ul>
		</div>
	</div>
</div>
