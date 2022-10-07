<script>
	export let url;
	export let alt;

	import { base_url } from '$lib/stores';
    export let page;
    import { activeDocumentStore } from '$lib/stores';
	let loaded = false;
    let base64Image = '';
	let thisImage;
    let imgHeight;
    let imgWidth;
    let w;
    let h;
    let container;
    const img = new Image();
    import Paragraph from '$lib/Paragraph.svelte';

    import { getElementInfo } from "moveable";

  import {
    onMount,
    onDestroy,
    createEventDispatcher,
    beforeUpdate
  } from "svelte";

  const dispatch = createEventDispatcher();

  let selecto;
  let el;
  let options = {};

  export function getInstance() {
    return selecto;
  }


  onMount(() => {


    const opts = { method: 'GET', mode:'cors', headers: {} };
	    var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

            headers.append('Authorization', `Bearer ${localStorage.token}`);
            // for (let step = 0; step < page.ocr.length; step++) {
                // selecto.push(step);
            // }

            // console.log(page.ocr);
            // console.log(page_index, url, page_id);
            // console.log('selecto', selecto);
        opts.headers = headers;
        fetch(`${base_url}/${url}`, opts)
        .then((data) => {
            // IMP to convert your json or other response to blob ( for this you have to check your api response is file / binary 
            return data.blob()
        })
        .then((data) => {
            var reader = new FileReader();
            reader.onload = function() {                         
                var b64 = reader.result
                // console.log("This is base64", b64)
                base64Image = b64;
            }
            reader.readAsDataURL(data)
        })
        .catch((error) => {
            error.text().then( errorMessage => {
                console.log(errorMessage)
            })
        })

		thisImage.onload = () => {
			loaded = true;
            img.src = base64Image;
            imgWidth = img.naturalWidth;
            imgHeight = img.naturalHeight;
            
            // console.log('imgHeight: ', imgHeight);
            // console.log(base64Image)
		};   




       const elements = [...document.querySelectorAll(".target")];
       const elementindex = [];
       for (let step = 0; step < elements.length; step++) {
                elementindex.push(step);
            }
        // console.log('elements', elements);

  });



</script>


<div bind:clientWidth={w} bind:clientHeight={h}>
    <img src={base64Image} {alt} class="mb-10 shadow-[0_5px_35px_-15px_rgba(0,0,0,0.2)] mx-auto flex border rounded-md border-slate-200" class:loaded bind:this={thisImage} loading="lazy" />

    {#key selecto}
    {#if page.ocr}
    <div bind:this={container} class="page-container z-50 absolute top-0 bottom-0 left-0 right-0">
        {#each page.ocr as para, index}
        {#key h}
        {#key loaded}
        <div class="inline-block">
            <Paragraph {container} page_id={page.id} index={index} imgHeight={imgHeight} imgWidth={imgWidth} pageHeight={h} pageWidth={w} rect={para.rect} />
        </div>
        {/key}    
        {/key}
    {/each}
    </div>
    {/if}
    {/key}
</div>
<style>
	img {
		/* height: 1200px; */
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
