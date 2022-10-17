<script>
	import userStore from '$lib/user.js';
	import Button from '$lib/Button.svelte';
	import { obp } from '$lib/stores.js';
	import Footer from '$lib/Footer.svelte';
	import SvelteSeo from "svelte-seo";

	// Local state containing the active route in the app.
	let pathname = `${window.location.pathname}${window.location.hash}`;

	let useDarkTheme = null;

</script>

<svelte:head>
	<title>{$obp.company.title}: {$obp.company.description}</title>
</svelte:head>

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
    
    <div class="py-0 sm:px-6 md:px-8">
        <div class="relative md:max-w mx-auto pt-24 sm:pt-24 lg:pt-32">
            <div class="w-full items-center sm:w-full md:w-full">
                <div class="items-center text-center align-center px-48 w-full mb-40">		
                    <h1
                    class="text-slate-900 
                    font-sans
                    mb-10
                    shadow-slate-900
                    font-bold 
                    text-6xl 
                    sm:text-4xl 
                    lg:text-8xl 
                    leading-relaxed
                    lg:tracking-relaxed 
                    sm:tracking-relaxed 
                    sm:leading-tight 
                    text-center
                     dark:text-black"
                >
                    Accelerate Sales
                </h1>
                <div class="mt-3 text-2xl font-light text-slate-600 font-normal text-center mb-14">
                    <p class="mx-auto font-medium w-6/12">Accelerate sales, buying, hiring and other critical business functions with a <span class="pb-2 border-slate-200">contract intelligence platform <span class="bg-white">built for humans.</span></span></p>
                </div>
           
            </div>
    
            </div>
    
        </div>
    </div>
    

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

