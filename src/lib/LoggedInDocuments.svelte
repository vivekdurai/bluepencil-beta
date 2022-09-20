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
	<div class="max-w-8xl mx-auto">
		<div class="py-4 border-slate-900 lg:px-8 border-0 dark:border-slate-300 mx-4 lg:mx-0">
			<div class="">
				<FileUploader />
			</div>
			<div class="">
				<Documents />
			</div>
		</div>
	</div>
