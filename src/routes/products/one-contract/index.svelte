<script>
    export let obp;
    import HeroContract from '$lib/HeroContract.svelte';
	import SvelteSeo from "svelte-seo";
    import Fa from 'svelte-fa';
	import { faArrowRightFromBracket, faBrain, faBezierCurve, faBatteryFull, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

</script>
<SvelteSeo
  title="Contract One: The Intelligent Contract Platform"
  description="Protect your business and accelerate sales, buying, hiring and other critical business functions with an intelligent contract automation tool"
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
<div class="mb-20 overflow-hidden sm:mb-32 md:mb-40 ">
	<HeroContract />

    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-3">
            <div class="col-span-1 text-center">
                <div class="font-bold inline-block text-black">
                    <Fa class="text-3xl text-slate-300 mb-1" icon={faCircleHalfStroke} />
                </div>
                <div class="font-bold text-sm text-black">Flexible</div>
                <div class="font-normal text-sm text-black mx-24">Tailor it to meet your specific needs with a system that learns from you</div>
            </div>
            <div class="col-span-1"></div>
            <div class="col-span-1"></div>
        </div>
    </div>
	<div class="bg-red-100 rounded-lg w-full lg:p-10 p-4 mt-40 lg:mt-40">
		<div class="max-w-7xl mx-auto">
            <div class="flex">
                <div class="w-5/12">
                    <h2 class="flex-none mt-8 font-semibold text-sky-700 dark:text-sky-400">The business enabler</h2>
                    <p
                        class="flex-none mt-4 mb-10 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-black-50 "
                    >
                        Realtime Visibility
                    </p>
                    <p class="mr-10">Contract One analyses your contracts and extracts important information from them so that you can access a realtime picture of your business transactions</p>
                </div>
                <div class="w-7/12">
                    <div class="float-right">
                        <img class="lg:w-[580px] md:w-[300px]" alt="contract preview" src="/doc.png" />
                    </div>
                </div>
            </div>
		</div>
	</div>
    <div class="bg-white border-t border-slate-200 py-20">
        <div class="max-w-7xl mx-auto text-center text-3xl">
            <div class="grid grid-cols-12">
                <div class="col-span-6">
                    <div class="text-left w-8/12 float-right mr-10 font-normal text-black text-lg">Do you really need a manually updated MIS system to tell you how much revenue your sales team is recognizing this quarter?</div>
                </div>
                <div class="col-span-6">
                    
                </div>
            </div>
        </div>
    </div>
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
