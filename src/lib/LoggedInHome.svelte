<script>
    export let userStore;
	import FileUploader from '$lib/FileUploader.svelte';
	import Documents from '$lib/Documents.svelte';
</script>
<script context="module">
	export async function load({ userStore }) {
		if (userStore == undefined) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		return {};
	}
</script>
	<div class="fixed bg-[#EDF2F7] top-12 overflow-auto  left-[70px] bottom-0 right-0">
		
			<div class="p-2 pb-0">
				<FileUploader />
			</div>
			<div class="">
				<Documents />
			</div>
	</div>
