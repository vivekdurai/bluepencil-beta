<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import PageTransition from '$lib/PageTransition.svelte';
	export let url;
	import '../app.css';
	import userStore from '$lib/user.js';
	import * as api from '$lib/api.js';
	let loading = true;
	import { onMount } from 'svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import { goto } from '$app/navigation';
	import { obp } from '$lib/stores.js';
	import { navigating } from '$app/stores';
	import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';

	onMount(async () => {
		if (!localStorage.getItem('token')) {
			loading = false;
			return { props: { user: null } };
		}
		const res = await api.get('users/me', localStorage.getItem('token'));
			if (res.detail=='Unauthorized'){
				loading = false;
				goto('/login')
			} else {
				console.log(res)
					loading = false;
					$userStore = res;
					return { props: { user: res } };
			}
	});

	console.log(userStore);
</script>


{#if $navigating}
	<PreloadingIndicator />
{/if}
{#if !loading}
	<Nav {userStore} props={$obp} />
{/if}
<PageTransition {url}>
	{#if !loading}
	{#if userStore}
		<slot {userStore} />
	{:else}
		<slot {userStore} />
	{/if}
	{/if}
</PageTransition>
{#if !loading}
<Footer props={$obp} {userStore} />
{/if}