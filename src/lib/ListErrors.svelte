<script>
	export let errors;
</script>

{#if errors}
	<ul class="text-xs font-normal text-red-600">
		{#each Object.keys(errors) as key}
			<li class="flex bg-red-50 px-2 py-1 rounded-md"><div class="flex flex-grow ">{errors[key]}</div></li>
		{/each}
	</ul>
{/if}
