<script>
	export let links;
	export let title;
</script>

<div class="relative group">
	<div
		class="flex flex-row items-left w-full text-left rounded-lg md:w-auto md:inline 
		md:mt-0 md:ml-2 focus:outline-none cursor-pointer text-gray-600 hover:text-sky-900  font-semibold hover:bg-sky-100/40"
	>
		{title}
	</div>
	<div class="origin-top-left absolute z-10 hidden bg-grey-200  border border-slate-200 group-hover:block">
		<div class=" bg-white/30 left-300 w-44 py-0 mt-1 rounded">
			<ul>
				{#each links as link}
					<a href="/{link.path}" class="block border-b border-slate-100 px-4 py-2 hover: bg-white/10 hover:text-sky-900"
						>{link.title}</a
					>
				{/each}
			</ul>
		</div>
	</div>
</div>
