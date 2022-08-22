<script context="module">
	export async function load({ userStore }) {
		if (userStore!=undefined) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import SignInForm from '$lib/SignInForm.svelte';
	import userStore from '$lib/user.js';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>OneBigPicture: Powering Document Intelligence across your organization</title>
</svelte:head>

<div class="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
	<SignInForm />
</div>
