<script>
    export let container;
    export let rect;
    export let page_id;
    export let imgHeight;
    export let imgWidth;
    export let index;
    export let pageWidth;
    export let pageHeight;
    // let el;
	import { onMount } from 'svelte';
    // import Bbox from "$lib/Bbox.svelte";
    let new_rect = {'x1':0, 'x2':0, 'y1':0, 'y2':0};
    function recalculate_coordinate(coordinate){
        return parseInt(coordinate * pageHeight/imgHeight);
    }
    // let percentage = pageHeight/imgHeight * 100;
    // console.log(percentage);
    function word_bbox(start,end){

    }
    // let selecto;
    onMount(() => {
        // console.log(el);
        // let a;
    });
    // let character_list;
    // let word_list;

</script>
<div class="absolute target border hover:border-yellow-800 hover:cursor-pointer hover:bg-yellow-300/20" style="top:{recalculate_coordinate(rect.y1)}px;left:{recalculate_coordinate(rect.x1)}px;width:{recalculate_coordinate(rect.x2)-recalculate_coordinate(rect.x1)}px;height:{recalculate_coordinate(rect.y2)-recalculate_coordinate(rect.y1)}px"></div>

