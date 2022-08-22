<script>
	export let hero;
</script>

<div class="px-4 py-20 sm:px-6 md:px-8 ">
	<div class="relative max-w-6xl mx-auto pt-24 sm:pt-24 lg:pt-32">
		<h1
			class="text-slate-900 
			font-sans 
			drop-shadow-lg
			shadow-white-900
			font-extrabold 
			text-5xl 
			sm:text-6xl 
			lg:text-7xl 
			leading-relaxed
			lg:tracking-relaxed 
			sm:tracking-relaxed 
			sm:leading-tight 
			text-center
			 dark:text-black"
		>
			{hero.headline}
		</h1>
		<p class="mt-6 text-lg text-slate-800 font-normal text-center max-w-3xl mx-auto">
			{hero.description}
		</p>
		<div class="mt-8 sm:mt-7 flex justify-center space-x-6 text-sm">
			<a
				class="text-lg focus:outline-none focus:ring-2 focus:ring-sky-400 
				focus:ring-offset-2 focus:ring-offset-slate-50 bg-slate-700
				 text-white
				 font-semibold h-14 px-10 
				 rounded-md w-full 
				 flex items-center 
				 justify-center sm:w-auto py-6  border-1
				hover:bg-green-400
				hover:text-green-900
				"
				href="/">{hero.call_to_action}</a
			>
		</div>
	</div>
</div>
