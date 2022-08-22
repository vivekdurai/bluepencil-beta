<script>
    export let obp;
    import Hero from '$lib/Hero.svelte';
</script>
<div class="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
	<Hero hero={$obp.hero} />
	<div
		class="pt-10 mb-10 space-y-10 overflow-hidden sm:pt-12 sm:mb-12 sm:space-y-32 md:pt-10 md:mb-10 md:space-y-10"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
			<h2 class="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">Developer-first</h2>
			<p
				class="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-black-50 "
			>
				An API for your Documents.
			</p>
		</div>
	</div>
</div>
