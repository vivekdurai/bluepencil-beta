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
    // let selecto = [];
    import Paragraph from '$lib/Paragraph.svelte';
    // import Selecto from "selecto";

    import { getElementInfo } from "moveable";
import VanillaSelecto, {
    OPTIONS,
    PROPERTIES,
    EVENTS,
    CLASS_NAME
  } from "selecto";

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

  beforeUpdate(() => {
    if (!selecto) {
      return;
    }
    const nextOptions = {};

    PROPERTIES.forEach(name => {
      nextOptions[name] = $$props[name];

      if (options[name] !== nextOptions[name]) {
        selecto[name] = nextOptions[name];
      }
    });

    options = nextOptions;
  });


  onMount(() => {


    const opts = { method: 'GET', mode:'cors', headers: {} };
	    var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

            headers.append('Authorization', `Bearer ${localStorage.token}`);
            // for (let step = 0; step < page.ocr.length; step++) {
            //     selecto.push(step);
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


    OPTIONS.forEach(name => {
      if (name in $$props) {
        options[name] = $$props[name];
      }
    });

    
    // selecto = new VanillaSelecto({
    //   ...options,
    //   portalContainer: container
    // });

       const elements = [...document.querySelectorAll(".target")];
        // console.log('elements', elements);

        let selecto = new VanillaSelecto({
            // getElementRect: getElementInfo,
            // The container to add a selection element
            container: container,
            // Selecto's root container (No transformed container. (default: null)
            rootContainer: container,
            // The area to drag selection element (default: container)
            dragContainer: null,
            // Targets to select. You can register a queryselector or an Element.
            selectableTargets: elements,
            // Whether to select by click (default: true)
            selectByClick: true,
            // Whether to select from the target inside (default: true)
            selectFromInside: true,
            // After the select, whether to select the next target with the selected target (deselected if the target is selected again).
            continueSelect: false,
            // Determines which key to continue selecting the next target via keydown and keyup.
            toggleContinueSelect: "shift",
            // The container for keydown and keyup events
            keyContainer: window,
            // The rate at which the target overlaps the drag area to be selected. (default: 100)
            hitRate: 100,
        });

        console.log(selecto);

        selecto.on("select", e => {
            e.added.forEach(el => {
                el.classList.add("selected");
            });
            e.removed.forEach(el => {
                el.classList.remove("selected");
            });
        }); 

    EVENTS.forEach((name, i) => {
      selecto.on(name, e => {
        const result = dispatch(name, e);

        if (result === false) {
          e.stop();
        }
      });
    });
  });
  onDestroy(() => {
    selecto && selecto.destroy();
  });



</script>

<div bind:clientWidth={w} bind:clientHeight={h}>
    <img src={base64Image} {alt} class="mb-10 mx-auto flex border border-slate-200" class:loaded bind:this={thisImage} loading="lazy" />

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
