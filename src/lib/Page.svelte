<script>
    import * as api from '$lib/api';
    export let page;
    import ImageLoader from "./Image/ImageLoader.svelte";
</script>

<div class="p-20 py-0"> 
      <ImageLoader url="documents/pages/{page.id}" alt="Page number {page.number} {page.id}" />
</div>