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
    

</div>