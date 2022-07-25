<script>
	let hero = {
		headline: 'Accelerate your transactions with document intelligence.',
		description:
			'Use our AI powered document platform to power insights, workflows and dashboards across your organization',
		call_to_action: 'Schedule a call'
	};
</script>

<div class="px-4 sm:px-6 md:px-8">
	<div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
		<h1
			class="text-slate-900 font-sans font-extrabold text-5xl sm:text-6xl lg:text-7xl lg:tracking-relaxed sm:tracking-tight dark:leading-relaxed sm:leading-tight text-center dark:text-black"
		>
			{hero.headline}
		</h1>
		<p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
			{hero.description}
		</p>
		<div class="mt-8 sm:mt-7 flex justify-center space-x-6 text-sm">
			<a
				class="text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-orange-600 border-orange-200 font-semibold h-14 px-10 rounded-md w-full flex items-center justify-center sm:w-auto py-6  hover:bg-gradient-to-tr bg-gradient-to-r from-transparent  to-transparent border-2 border-solid  to-white-300 dark:highlight-white/20 dark:hover:border-black-300 dark:hover:bg-orange-100"
				href="/docs/installation">{hero.call_to_action}</a
			>
		</div>
	</div>
</div>
