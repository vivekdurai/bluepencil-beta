<script>
    export let userStore;
    import { page } from '$app/stores';
	import { obp } from '$lib/stores.js';
    import Error from '../../__error.svelte';
    import LoggedInDocument from '$lib/Doc.svelte';
    import RedirectifNotLoggedIn from '$lib/RedirectifNotLoggedIn.svelte';
	// Local state containing the active route in the app.
	let pathname = `${window.location.pathname}${window.location.hash}`;

	let useDarkTheme = null;

</script>

<svelte:head>
	<title>{$obp.company.title}: Documents</title>
</svelte:head>

<RedirectifNotLoggedIn {$userStore} />

	<div class="flex">
		<div class="w-full">
			<LoggedInDocument params={$page.params} />
		</div>
	</div>