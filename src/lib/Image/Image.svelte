<script>
	export let url;
	export let alt;

	import { onMount } from 'svelte';
	import { base_url } from '$lib/stores';
	let loaded = false;
    let base64Image = '';
	let thisImage;

	onMount(() => {
        const opts = { method: 'GET', mode:'cors', headers: {} };
	    var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

            headers.append('Authorization', `Bearer ${localStorage.token}`);
        
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
            // console.log(base64Image)
		};
	    
    });
</script>

<img src={base64Image} {alt} class="mb-10 mx-auto shadow-md flex border border-slate-200" class:loaded bind:this={thisImage} loading="lazy" />

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
