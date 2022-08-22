<!-- <script context="module">
	export async function load({ userStore }) {
		if (userStore == undefined) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		return {};
	}
</script> -->

<script>
	import userStore from '$lib/user.js';
	import { goto } from '$app/navigation';
	import * as api from '$lib/api.js';
	const body = api.post('auth/logout', {}, localStorage.getItem('token'));
    console.log(body)
	if (!body.errors) {
		$userStore = undefined;
        localStorage.removeItem('token')
		goto('/');
	} else {
        goto('/');
    }

</script>

<svelte:head>
	<title>OneBigPicture: Powering Document Intelligence across your organization</title>
</svelte:head>

<div class="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
	Logging out
</div>
