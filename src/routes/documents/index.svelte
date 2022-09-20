
<script>
	
	export let userStore;
	import Button from '$lib/Button.svelte';
	import { obp } from '$lib/stores.js';
	import DefaultLanding from '$lib/DefaultLanding.svelte';
	import LoggedInHome from '$lib/LoggedInHome.svelte';
    import Documents from '$lib/Documents.svelte';
    import Error from '../__error.svelte';
    import LoggedInDocuments from '$lib/LoggedInDocuments.svelte';
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
    <div class="flex flex-wrap flex-grow flex-shrink-1 basis-40 overflow-y-auto">
        <LoggedInDocuments {$userStore} />
    </div>
</div>