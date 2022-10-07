<script>
    export let obp;
    import Hero from '$lib/Hero.svelte';
	import SvelteSeo from "svelte-seo";
</script>
<SvelteSeo
  title="One: Intelligent Document Platform"
  description="Accelerate sales, buying, hiring and other critical business functions with an intelligent document platform designed for humans"
  twitter={{
    site: "@username",
    title: "One by OneBigPicture",
    description: "Accelerate business with an intelligent document platform designed for humans",
    image: "https://www.obp.one/obp_one_preview.png",
    imageAlt: "One: designed for humans",
  }}
  openGraph={{
    title: 'One: Intelligent Document Platform',
    description: 'Accelerate sales, buying, hiring and other critical business functions with an intelligent document platform designed for humans',
    url: 'https://www.obp.one',
    type: 'website',
    images: [
      {
        url: "https://www.obp.one/obp_one_preview.png",
        width: 909,
        height: 90,
        alt: 'One by OneBigPicture'
      }
     ]
  }}
/>
<div class="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
	<Hero hero={$obp.hero} />
	<div class="hidden bg-sky-100 rounded-lg w-full lg:p-10 p-4 mt-10 lg:-mt-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
			<h2 class="mt-8 font-semibold text-sky-700 dark:text-sky-400">Simple and powerful</h2>
			<p
				class="mt-4 mb-10 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-black-50 "
			>
				Documents as data
			</p>
			<img alt="contract preview" src="doc.png" />
		</div>
	</div>
	<div
		class="hidden pt-10 mb-10 space-y-10 overflow-hidden sm:pt-12 sm:mb-12 sm:space-y-32 md:pt-10 md:mb-10 md:space-y-10"
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
