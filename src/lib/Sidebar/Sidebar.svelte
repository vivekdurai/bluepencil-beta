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
		class="ml-5 mb-5" width="52" height="19" viewBox="0 0 52 19" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M26.8151 16.5326C25.5074 16.5326 24.5588 16.3392 23.9694 15.9524C23.3984 15.5656 23.0208 14.8933 22.8366 13.9355C22.6708 12.9778 22.588 11.4306 22.588 9.29395C22.588 7.13892 22.6708 5.58251 22.8366 4.62472C23.0208 3.66692 23.3984 2.99463 23.9694 2.60783C24.5588 2.20261 25.5074 2 26.8151 2C28.1413 2 29.0899 2.20261 29.6609 2.60783C30.2503 2.99463 30.6279 3.66692 30.7936 4.62472C30.9778 5.58251 31.0699 7.13892 31.0699 9.29395C31.0699 11.4306 30.9778 12.9778 30.7936 13.9355C30.6279 14.8933 30.2503 15.5656 29.6609 15.9524C29.0899 16.3392 28.1413 16.5326 26.8151 16.5326ZM26.8151 14.6263C27.4966 14.6263 27.9663 14.5065 28.2242 14.2671C28.5005 14.0276 28.6754 13.5672 28.7491 12.8857C28.8228 12.2042 28.8596 11.0069 28.8596 9.29395C28.8596 7.56256 28.8228 6.35611 28.7491 5.6746C28.6754 4.97468 28.5005 4.50499 28.2242 4.26554C27.9479 4.0261 27.4782 3.90637 26.8151 3.90637C26.152 3.90637 25.6824 4.0261 25.4061 4.26554C25.1482 4.50499 24.9824 4.97468 24.9088 5.6746C24.8351 6.35611 24.7982 7.56256 24.7982 9.29395C24.7982 11.0069 24.8351 12.2042 24.9088 12.8857C24.9824 13.5672 25.1482 14.0276 25.4061 14.2671C25.6824 14.5065 26.152 14.6263 26.8151 14.6263Z" fill="black"/>
			<path d="M39.3835 8.07829C39.3835 6.80737 39.3375 5.90484 39.2454 5.37069C39.1717 4.81812 39.0059 4.45894 38.7481 4.29317C38.5086 4.10898 38.1126 4.01689 37.56 4.01689C36.9338 4.01689 36.4825 4.19187 36.2062 4.54183C35.93 4.89179 35.755 5.39832 35.6813 6.0614C35.626 6.70607 35.5984 7.73753 35.5984 9.1558V16.3116H33.3881V2.22103H35.405L35.5155 4.09977H35.6813C36.0497 2.69993 37.0167 2 38.5823 2C39.448 2 40.0927 2.17498 40.5163 2.52494C40.9399 2.85649 41.2254 3.38143 41.3728 4.09977C41.5201 4.7997 41.5938 5.82195 41.5938 7.16654V16.3116H39.3835V8.07829Z" fill="black"/>
			<path d="M52.0001 9.95703H46.0323C46.0323 11.3753 46.0783 12.3976 46.1704 13.0238C46.281 13.6316 46.5112 14.0553 46.8612 14.2947C47.2295 14.5157 47.8282 14.6263 48.657 14.6263C49.5227 14.6263 50.545 14.5342 51.7238 14.35V16.1735C51.3001 16.2656 50.7568 16.3484 50.0937 16.4221C49.4306 16.4958 48.7952 16.5326 48.1873 16.5326C46.8612 16.5326 45.8942 16.3116 45.2863 15.8695C44.6785 15.4091 44.2825 14.6999 44.0983 13.7421C43.9141 12.7659 43.822 11.2832 43.822 9.29395C43.822 7.28627 43.8957 5.80354 44.043 4.84574C44.2088 3.88795 44.5864 3.17882 45.1758 2.71834C45.7836 2.23945 46.7598 2 48.1044 2C49.3385 2 50.2226 2.22103 50.7568 2.66309C51.3094 3.10514 51.6501 3.79586 51.779 4.73523C51.9264 5.6746 52.0001 7.18496 52.0001 9.26632V9.95703ZM48.0492 3.90637C47.4229 3.90637 46.9717 4.00768 46.6954 4.21029C46.4375 4.39448 46.2625 4.78128 46.1704 5.37069C46.0783 5.9601 46.0323 6.94552 46.0323 8.32694H49.9279V7.9954C49.9279 6.74291 49.8727 5.84037 49.7622 5.2878C49.6701 4.71681 49.4951 4.34843 49.2372 4.18266C48.9978 3.99847 48.6018 3.90637 48.0492 3.90637Z" fill="black"/>
			<path d="M14.6696 1.53683L14.6796 1.54011L14.6895 1.5436C15.9219 1.97716 16.7488 2.86665 17.0997 4.12606C17.4052 5.19942 17.5326 6.96148 17.5326 9.30377C17.5326 11.6247 17.4049 13.3748 17.0988 14.4473C16.7443 15.6898 15.9116 16.5591 14.6895 16.989L14.6796 16.9925L14.6696 16.9958C13.516 17.3746 11.6938 17.5326 9.31574 17.5326C6.89095 17.5326 5.05543 17.3778 3.95193 16.9925C2.68428 16.5734 1.79613 15.7171 1.43382 14.4473C1.12776 13.3748 0.99999 11.6247 0.99999 9.30377C0.99999 6.96148 1.12737 5.19941 1.43287 4.12606C1.79247 2.83582 2.67821 1.95831 3.96184 1.53683C5.1155 1.15802 6.93763 1 9.31574 1C11.6938 1 13.516 1.15802 14.6696 1.53683Z" stroke="black" stroke-width="2"/>
			<path d="M3.7583 6.92241C1.28864 6.66582 5.2809 12.4156 6.62385 11.5645C6.89815 12.4212 7.22661 13.1736 7.76429 13.5819C8.2094 13.9199 9.44569 14.7311 9.83737 14.5782C10.7702 14.2141 9.0735 11.1179 9.83737 10.325C9.9811 10.1758 10.2671 9.9896 10.6305 9.80182C11.1785 11.5014 12.4269 13.5848 14.1078 10.8212C15.8355 7.98074 12.3579 8.90919 10.6305 9.80182C10.4967 9.38708 10.4047 8.9952 10.3582 8.7022C10.3217 8.47136 10.3064 8.117 10.3128 7.69521C11.6953 7.58413 13.6624 6.36837 12.4418 3.90457C11.0336 1.06212 10.348 5.38768 10.3128 7.69521C9.80878 7.7357 9.38246 7.62938 9.21662 7.38317C8.59587 6.46164 5.86005 4.63074 5.7077 4.86668C5.53874 5.12832 7.02722 10.7912 6.94886 11.0629C6.87682 11.3127 6.76496 11.4751 6.62385 11.5645C5.99886 9.61257 5.655 7.11947 3.7583 6.92241Z" fill="#202020"/>
			<path d="M8.81981 3.92412C8.81981 3.92412 7.15813 7.42849 8.20842 8.44844C8.40457 10.3041 9.74377 9.70091 11.092 8.81758C12.8373 8.64187 14.562 8.04415 13.9544 7.36614C13.5836 6.95234 12.334 8.00384 11.092 8.81758C10.0681 8.92066 9.03706 8.87849 8.46585 8.62205C8.36618 8.57731 8.28085 8.51878 8.20842 8.44844C8.11549 7.56936 8.2791 6.13846 8.81981 3.92412Z" fill="#151515"/>
			<path d="M4.3264 7.82916C3.66741 7.51619 5.57753 11.2408 6.7563 11.7034C7.23146 12.468 7.72524 13.1583 8.19889 13.5639C8.5772 13.8878 8.94267 14.0301 9.27556 13.8836C10.0684 13.5346 9.31162 11.9096 9.96085 11.1498C10.2027 10.8668 10.6974 10.5884 11.2112 10.3792C11.7045 10.7783 12.3139 10.8488 12.7378 10.3835C13.2394 9.833 12.1906 9.98045 11.2112 10.3792C10.8147 10.0584 10.4932 9.52529 10.4036 8.88739C10.3567 8.55403 10.4042 8.05005 10.5101 7.49083C11.6142 6.43337 12.514 5.39465 12.1744 4.28959C11.8417 3.20702 10.8589 5.64868 10.5101 7.49083C9.75454 8.21445 8.90335 8.94685 8.28821 9.71528C8.11243 9.93487 7.36248 6.97133 7.23299 7.19744C7.08938 7.44818 7.57244 10.8894 7.50584 11.1498C7.36399 11.7045 7.08934 11.8341 6.7563 11.7034C5.72852 10.0496 4.78784 8.04832 4.3264 7.82916Z" fill="#2D8DFF"/>
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
