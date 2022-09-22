<script>
	import DropDown from './DropDown.svelte';
	export let props;
	export let userStore;
	import Fa from 'svelte-fa';
	import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
	import {
		faFileLines,
		faFilePdf,
		faFileContract,
		faFileWord,
		faFileText,
		faFileCode
	} from '@fortawesome/free-solid-svg-icons';

</script>

{#if $userStore}

<div
		class="fixed flex top-0 z-40 w-full border-slate-200 border-b  bg-white flex-none lg:z-50"
	>
		<a href="/" class="flex py-2 pb-3 top-0 z-60 bg-slate-600 left-0 border-r px-[20px]">
			<svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18.5349 11.603H15.887L12.3566 13.8017V16.2752L15.887 13.8017V24.795H18.5349V11.603Z" fill="black"/>
				<path d="M2.56605 11.7121C3.27067 10.496 4.9068 9.65115 4.9068 9.65115C4.9068 9.65115 4.16644 10.1373 3.92703 11.3421C3.68762 12.5468 3.82944 15.0725 3.82944 15.0725C3.82944 15.0725 4.04753 17.8623 5.61594 22.2794C6.35683 24.366 8.18622 28.1336 9.92846 29.0846C11.6707 30.0355 13.3802 29.8557 17.5394 29.0098L21.3502 27.9738C21.3502 27.9738 22.7112 27.6038 25.0848 26.6736C27.4583 25.7434 28.1987 25.2572 28.1987 25.2572C28.1987 25.2572 27.6625 25.9125 27.5346 26.0076C27.4067 26.1026 26.7648 26.9855 24.0288 28.1003C21.2927 29.2151 19.7498 29.5485 19.7498 29.5485C16.9043 30.3221 13.8564 31.3072 10.8869 31.3882C7.88789 31.4701 5.26827 29.2118 3.43833 22.8714C2.61833 20.0303 0.819352 14.7266 2.56605 11.7121Z" fill="#2D0A44"/>
				<path d="M11.6569 5.1748C11.6569 5.1748 19.6177 2.44617 23.0907 5.28884C33.4541 6.46785 28.6632 11.2276 26.9409 14.9247C27.9853 18.2185 28.444 20.2836 26.7414 17.8836C26.1748 17.0849 26.4146 16.0544 26.9409 14.9247C26.2052 12.6045 25.1789 9.67455 24.4128 7.26597C24.1431 6.41816 23.6819 5.77277 23.0907 5.28884C20.4039 4.98317 16.6985 4.91818 11.6569 5.1748Z" fill="black"/>
				</svg>
				
		</a>
		<div class="flex flex-grow">
			<div class="p-3 lg:px-8 flex flex-grow dark:border-slate-300 mx-4 lg:mx-0">
				<div class="relative flex items-center">
					
					<div class="hidden relative">
						<button
							class="text-xs leading-5 font-semibold rounded-full py-0 px-0 -mt-3 flex items-center space-x-2 hover:bg-slate-400/20"
							type="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							trial
						</button>
					</div>
					
					<div class="relative lg:flex float-right ml-auto">
						<nav class="text-sm leading-6 font-semibold text-black">
							<ul class="flex space-x-8">
									
									<li>
										<span
											class="text-xs text-sky-900/80 font-normal font- p-0.5 py-0 px-2 m-2 -mt-1"
											>{$userStore.email}</span
										>
									</li>
									<li>
										<a
											class=" text-sky-500/90 dark:text-sky-500 hover:text-black-500 dark:hover:text-black-400"
											href="/logout"
										>
											<Fa class="mt-1" icon={faArrowRightFromBracket} />
										</a>
									</li>
								
							</ul>
						</nav>
					</div>

					<div class="ml-2 -my-1 hidden">
						<button
							type="button"
							class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
						>
							<span class="sr-only">Navigation</span><svg
								width="24"
								height="24"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
	class="fixed top-12 bottom-[0px] z-40 right-auto  w-[70px] border-slate-200 border-b  bg-slate-500 flex-none lg:z-50"
>
<a href="/documents" class="flex px-5 py-2">
	<Fa icon={faFileLines} secondaryOpacity={1} class="text-slate-300 text-3xl mt-2" />
</a>
<a href="/contracts" class="flex px-5 py-2">
	<Fa icon={faFileContract} secondaryOpacity={1} class="text-slate-300 text-3xl mt-2" />
</a>


</div>	

{:else}
	<div
		class="fixed w-full h-18 backdrop-blur bg-white/20 border-gray-200 flex-none transition-colors duration-500 z-50"
	>
		<div class="max-w-8xl mx-auto">
			<div class="py-4 border-slate-900 lg:px-8 border-0 dark:border-slate-300 mx-4 lg:mx-0">
				<div class="relative flex items-center">
					<a class="mr-3 flex-none overflow-hidden" href="/">
						<span class="sr-only font-extrabold">{props.company.title}</span>
						<svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.5349 11.603H15.887L12.3566 13.8017V16.2752L15.887 13.8017V24.795H18.5349V11.603Z" fill="black"/>
							<path d="M2.56605 11.7121C3.27067 10.496 4.9068 9.65115 4.9068 9.65115C4.9068 9.65115 4.16644 10.1373 3.92703 11.3421C3.68762 12.5468 3.82944 15.0725 3.82944 15.0725C3.82944 15.0725 4.04753 17.8623 5.61594 22.2794C6.35683 24.366 8.18622 28.1336 9.92846 29.0846C11.6707 30.0355 13.3802 29.8557 17.5394 29.0098L21.3502 27.9738C21.3502 27.9738 22.7112 27.6038 25.0848 26.6736C27.4583 25.7434 28.1987 25.2572 28.1987 25.2572C28.1987 25.2572 27.6625 25.9125 27.5346 26.0076C27.4067 26.1026 26.7648 26.9855 24.0288 28.1003C21.2927 29.2151 19.7498 29.5485 19.7498 29.5485C16.9043 30.3221 13.8564 31.3072 10.8869 31.3882C7.88789 31.4701 5.26827 29.2118 3.43833 22.8714C2.61833 20.0303 0.819352 14.7266 2.56605 11.7121Z" fill="#2D0A44"/>
							<path d="M11.6569 5.1748C11.6569 5.1748 19.6177 2.44617 23.0907 5.28884C33.4541 6.46785 28.6632 11.2276 26.9409 14.9247C27.9853 18.2185 28.444 20.2836 26.7414 17.8836C26.1748 17.0849 26.4146 16.0544 26.9409 14.9247C26.2052 12.6045 25.1789 9.67455 24.4128 7.26597C24.1431 6.41816 23.6819 5.77277 23.0907 5.28884C20.4039 4.98317 16.6985 4.91818 11.6569 5.1748Z" fill="black"/>
							</svg>
							
					</a>
					<div class="hidden relative">
						<button
							class="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5"
							id="headlessui-menu-button-6"
							type="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							v1
						</button>
					</div>
					<nav class="text-base ml-4 flex-none leading-6 text-gray-600">
						<ul class="flex space-x-8">
								{#each props.navigation.links as link}
									<li>
										{#if link.items.length > 0}								
											<DropDown links={link.items} title={link.title} />
										{:else}
											<a class="font-semibold" href="{link.link}">{link.title}</a>
										{/if}
									</li>
								{/each}
						</ul>
					</nav>
					<div class="relative lg:flex ml-auto">
						<nav class="text-sm leading-6 font-semibold text-black">
							<ul class="flex space-x-4">
								<li>
									<a
										class="rounded-md font-semibold text-green-600 hover:bg-green-300 hover:text-sky-900 bg-green-100 py-3 px-8 hover:text-black "
										href="https://calendly.com/obp-one/30min">Request a demo</a
									>
								</li>
								<li>
									<a
										class="rounded-md font-semibold text-purple-600 hover:bg-purple-200 hover:text-sky-900 bg-purple-100 py-3 px-8 hover:text-black "
										href="/login">Sign In</a
									>
								</li>
							</ul>
						</nav>
					</div>

					<div class="ml-2 -my-1 hidden">
						<button
							type="button"
							class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
						>
							<span class="sr-only">Navigation</span><svg
								width="24"
								height="24"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex w-full h-20 mb-18"></div>
{/if}
