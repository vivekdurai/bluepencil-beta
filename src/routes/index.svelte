<script>
	import userStore from '$lib/user.js';
	import Nav from '$lib/Nav.svelte/';
	import Hero from '$lib/Hero.svelte';
	import Button from '$lib/Button.svelte';
	import { obp } from '$lib/stores.js';
	import DefaultLanding from '$lib/DefaultLanding.svelte';
	import LoggedInHome from '$lib/LoggedInHome.svelte';
	import Sidebar from '$lib/Sidebar';
	import Documents from '$lib/Documents.svelte';
	import DropDown from '$lib/DropDown.svelte';
	import Error from './__error.svelte';
	import FileUploader from '$lib/FileUploader.svelte';
	import Footer from '$lib/Footer.svelte';
	import {sidebarConfig} from '$lib/Sidebar/config.js'

	// Local state containing the active route in the app.
	let pathname = `${window.location.pathname}${window.location.hash}`;

	let useDarkTheme = null;

</script>

<svelte:head>
	<title>{$obp.company.title}: {$obp.company.description}</title>
</svelte:head>
{#if !$userStore}
	<DefaultLanding {obp} />
{:else}
	<div class="flex">
		<Sidebar {...sidebarConfig} />
		<div class="flex flex-wrap flex-grow flex-shrink-1 basis-40 overflow-y-auto ">
			<LoggedInHome {userStore} />
		</div>
	</div>
{/if}
