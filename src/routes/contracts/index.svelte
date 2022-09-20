<script>
	import userStore from '$lib/user.js';
	import Nav from '$lib/Nav.svelte/';
	import Hero from '$lib/Hero.svelte';
	import Button from '$lib/Button.svelte';

	import { obp } from '$lib/stores.js';
	import DefaultLanding from '$lib/DefaultLanding.svelte';
	import LoggedInHome from '$lib/LoggedInHome.svelte';

	// Local state containing the active route in the app.
	let pathname = `${window.location.pathname}${window.location.hash}`;

	let useDarkTheme = null;

	// Triggered when link is clicked in `Sidebar`
	const onLinkClick = (event) => {
		const { text: pageName, href } = event.target;
		// Build relative URL from clicked link's event target href attribute.
		const url = href.replace(window.location.origin, '');
		// Prevent standard navigation.
		event.preventDefault();
		// Push new route to browser history, update local routing state.
		history.pushState(null, `Svelte Sidebar - ${pageName}`, url);
		pathname = url;
	};
</script>

<svelte:head>
	<title>{$obp.company.title}: {$obp.company.description}</title>
</svelte:head>
<svelte:window on:popstate={() => (pathname = window.location.pathname)} />
{#if !$userStore}
	<DefaultLanding {obp} />
{:else}
	<div class="flex">
		<div class="flex flex-wrap flex-grow flex-shrink-1 basis-40 overflow-y-auto ">
            My contracts
        </div>
	</div>
{/if}
