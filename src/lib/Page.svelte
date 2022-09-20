<script>
    import * as api from '$lib/api';
    export let page;
    export let document;
    import ImageLoader from "./Image/ImageLoader.svelte";
</script>
<div class="document-page p-2 py-0 relative"> 
      <ImageLoader  {page} url="documents/pages/{page.id}" alt="Page number {page.number} {page.id}" />
    </div>
