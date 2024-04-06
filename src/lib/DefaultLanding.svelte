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
