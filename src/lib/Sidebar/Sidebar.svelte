<script>
	import { beforeUpdate } from 'svelte';
	import {
		activeUrl as storeActiveUrl,
		onLinkClick as storeOnLinkClick,
		transitionEnabled as storeTransitionEnabled
	} from './SidebarStore';
	import NavigationLinkGroup from './NavigationLinkGroup.svelte';

	const defaultTheme = {
		backgroundColor_linkActive: '#F4442E',
		backgroundColor_nav: '#0f172a',
		color_link: '#F7F7F2',
		color_linkHover: '#FCA311',
		fontSize: '1.2rem',
		maxWidth_nav: '20vw',
		minWidth_nav: '320px',
		opacity_linkDisabled: '0.5',
		opacity_linkInactive: '0.75'
	};

	export let activeUrl = null;
	export let routes = [];
	export let onLinkClick = null;
	export let theme = {};
	export let open = true;
	export let transitionEnabled = true;
	export let collapseTree = false;

	// Initialise the shared store with the values passed to `Sidebar` as props.
	beforeUpdate(() => {
		storeActiveUrl.set(activeUrl);
		storeOnLinkClick.set(onLinkClick);
		storeTransitionEnabled.set(
			transitionEnabled && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
		);
	});

	$: combinedTheme = { ...defaultTheme, ...theme };
	// Not using custom property style directive, because compilation results in superfluous wrapper div, see:
	// https://svelte.dev/docs#template-syntax-component-directives---style-props
	$: styleString = [
		`--backgroundColor_linkActive: ${combinedTheme.backgroundColor_linkActive}`,
		`--backgroundColor_nav: ${combinedTheme.backgroundColor_nav}`,
		`--color_link: ${combinedTheme.color_link}`,
		`--color_linkHover: ${combinedTheme.color_linkHover}`,
		`--fontSize: ${combinedTheme.fontSize}`,
		`--maxWidth_nav: ${combinedTheme.maxWidth_nav}`,
		`--minWidth_nav: ${combinedTheme.minWidth_nav}`,
		`--opacity_linkDisabled: ${combinedTheme.opacity_linkDisabled}`,
		`--opacity_linkInactive: ${combinedTheme.opacity_linkInactive}`
	].join('; ');

	// const toggleOpen = () => (open = !open);
	const toggleOpen = () => false;
</script>

<nav id="svelte-sidebar" class:open style={styleString}>
	<svg
		class="ml-5 mb-5" width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6.72791 23.1959C9.45807 23.732 14.4309 24 21.6463 24C28.6667 24 33.6395 23.732 36.5647 23.1959C39.2948 22.6598 41.0499 21.6289 41.83 20.1031C42.61 18.5773 43 15.8969 43 12.0618C43 8.18556 42.61 5.48453 41.83 3.95876C41.0499 2.39175 39.2948 1.34021 36.5647 0.804131C33.6395 0.268049 28.6667 0 21.6463 0C14.6259 0 9.65308 0.268049 6.72791 0.804131C3.80274 1.34021 1.95012 2.39175 1.17008 3.95876C0.390031 5.48453 1.01328e-05 8.18556 1.01328e-05 12.0618C1.01328e-05 15.8969 0.390031 18.5773 1.17008 20.1031C1.95012 21.6289 3.80274 22.6598 6.72791 23.1959Z" fill="#0A1F33"/>
			<path d="M25.3684 11.019C25.3684 9.96954 25.3303 9.2243 25.2543 8.78324C25.1935 8.32697 25.0566 8.0304 24.8437 7.89351C24.6459 7.74143 24.319 7.66538 23.8627 7.66538C23.3456 7.66538 22.973 7.80987 22.7448 8.09884C22.5167 8.38781 22.3722 8.80605 22.3114 9.35358C22.2657 9.88589 22.2429 10.7376 22.2429 11.9087V17.8174H20.4179V6.18251H22.0832L22.1745 7.73382H22.3114C22.6156 6.57794 23.414 6 24.7068 6C25.4216 6 25.9539 6.14449 26.3037 6.43346C26.6535 6.70722 26.8893 7.14067 27.0109 7.73382C27.1326 8.31176 27.1934 9.15586 27.1934 10.2661V17.8174H25.3684V11.019Z" fill="white"/>
			<path d="M35.7861 12.5703H30.8584C30.8584 13.7414 30.8964 14.5855 30.9724 15.1026C31.0637 15.6045 31.2538 15.9543 31.5428 16.152C31.847 16.3345 32.3412 16.4257 33.0256 16.4257C33.7405 16.4257 34.5846 16.3497 35.5579 16.1976V17.7033C35.2081 17.7793 34.7595 17.8478 34.2119 17.9086C33.6644 17.9695 33.1397 17.9999 32.6378 17.9999C31.5428 17.9999 30.7443 17.8174 30.2424 17.4523C29.7405 17.0721 29.4135 16.4866 29.2614 15.6957C29.1093 14.8896 29.0333 13.6653 29.0333 12.0227C29.0333 10.365 29.0941 9.14065 29.2158 8.34978C29.3527 7.55892 29.6645 6.97337 30.1512 6.59315C30.6531 6.19772 31.4591 6 32.5694 6C33.5884 6 34.3184 6.18251 34.7595 6.54752C35.2157 6.91254 35.4971 7.48287 35.6036 8.25853C35.7252 9.03419 35.7861 10.2813 35.7861 11.9999V12.5703ZM32.5238 7.57413C32.0066 7.57413 31.634 7.65778 31.4059 7.82508C31.193 7.97716 31.0485 8.29655 30.9724 8.78324C30.8964 9.26993 30.8584 10.0836 30.8584 11.2243H34.0751V10.9505C34.0751 9.91631 34.0294 9.17107 33.9382 8.7148C33.8621 8.24332 33.7177 7.93914 33.5047 7.80226C33.307 7.65017 32.98 7.57413 32.5238 7.57413Z" fill="white"/>
			<path d="M16.6594 6.86004L16.6594 6.85993L16.6693 6.86342C17.4591 7.14127 17.9841 7.7058 18.2092 8.51399C18.4115 9.22449 18.5 10.4132 18.5 12.0258C18.5 13.6231 18.4113 14.8034 18.2087 15.5135C17.9818 16.3085 17.454 16.8606 16.6693 17.1366L16.6694 17.1367L16.6594 17.14C15.8966 17.3905 14.6694 17.5 13.034 17.5C11.3631 17.5 10.1291 17.3921 9.40369 17.1384C8.58395 16.8678 8.02205 16.3222 7.7913 15.5135C7.58868 14.8034 7.5 13.6231 7.5 12.0258C7.5 10.4132 7.58848 9.22448 7.79083 8.51398C8.02021 7.69037 8.58087 7.13184 9.40864 6.86004C10.1714 6.60957 11.3986 6.50003 13.034 6.50003C14.6694 6.50003 15.8966 6.60957 16.6594 6.86004Z" stroke="white"/>
			<rect x="15" y="17" width="18" height="1" fill="white"/>
			</svg>
			
			
			
			

	<slot name="header" />
	<button
		class="sidebar-toggle"
		class:open
		on:click={toggleOpen}
		aria-expanded={open}
		aria-controls="svelte-sidebar"
		title="Toggle the navigation sidebar"
		aria-label="Toggle the navigation sidebar"
	/>
	{#if open}
		<NavigationLinkGroup {routes} {collapseTree} />
		<slot name="footer" />
	{/if}
</nav>

<style>
	nav {
		height: 100vh;
		position: relative;
		box-sizing: border-box;
		overflow-y: auto;
		z-index: 2;
		padding-block-start: calc(var(--fontSize) + 10px);
		padding-inline-end: calc(var(--fontSize) * 2 + 10px);
		padding-block-end: calc(var(--fontSize) + 10px);
		padding-inline-start: 0;
		background-color: var(--backgroundColor_nav);
		font-size: var(--fontSize);
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}

	nav.open {
		min-width: var(--minWidth_nav);
		max-width: var(--maxWidth_nav);
	}

	nav:not(.open) {
		max-width: 3rem;
	}

	.sidebar-toggle {
		position: absolute;
		top: calc(var(--fontSize) + 5px);
		right: calc(var(--fontSize) + 5px);
		display: inline-block;
		width: calc(var(--fontSize) + 5px);
		height: calc(var(--fontSize) + 5px);
		font-size: inherit;
		background-color: transparent;
		color: var(--color_link);
		border: none;
		outline: none;
		cursor: pointer;
	}

	.sidebar-toggle::-moz-focus-inner {
		border: 0;
	}

	.sidebar-toggle.open {
		transform: rotate(180deg);
	}

	.sidebar-toggle:hover,
	.sidebar-toggle:focus {
		font-weight: bold;
		color: var(--backgroundColor_linkActive);
	}
</style>
