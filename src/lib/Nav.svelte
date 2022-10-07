<script>
	import DropDown from './DropDown.svelte';
	export let props;
	export let userStore;
	import Fa from 'svelte-fa';
	import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
	import {
		faFileLines,
		faSignOut,
		faFilePdf,
		faFileContract,
		faFileWord,
		faFileText,
		faCog,
		faFileCode
	} from '@fortawesome/free-solid-svg-icons';

</script>

{#if $userStore}

<div
		class="fixed flex top-0 h-[50px] z-40 w-full border-sky-800/20 border-b  bg-white flex-none lg:z-50"
	>
		<a href="/" class="flex py-1 pt-2 pb-3 top-0 z-60 bg-white border-r border-gray-300 -ml-[2px] left-0 px-[16px] pr-[13px]">
			<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.5503 0L17.2178 20.399H23.7818L20.5503 0Z" fill="#40478A"/>
							<path d="M20.5503 41L17.2178 20.601H23.7818L20.5503 41Z" fill="#40478A"/>
							<path d="M40.9985 20.5004L20.5995 17.1678V23.7319L40.9985 20.5004Z" fill="#40478A"/>
							<path d="M0 20.5004L20.399 17.1678V23.7319L0 20.5004Z" fill="#40478A"/>
							<path d="M20.4382 9.57678L18.6768 20.3587H22.1462L20.4382 9.57678Z" fill="white"/>
							<path d="M20.4382 31.2468L18.6768 20.4649H22.1462L20.4382 31.2468Z" fill="white"/>
							<path d="M31.2468 20.4109L20.4649 18.6495V22.119L31.2468 20.4109Z" fill="white"/>
							<path d="M9.57678 20.4109L20.3587 18.6495V22.119L9.57678 20.4109Z" fill="white"/>
							<path d="M26.4081 11.8087L26.4276 11.8148L26.4469 11.8214C28.0017 12.3488 29.1042 13.4704 29.5643 15.0593C29.9264 16.2885 30.0533 18.181 30.0533 20.5124C30.0533 22.8256 29.9256 24.7069 29.5622 25.9349C29.0949 27.5142 27.9809 28.6083 26.4469 29.1287L26.4276 29.1353L26.4081 29.1414C25.0656 29.5665 23.0542 29.7202 20.591 29.7202C18.0952 29.7202 16.0585 29.5722 14.7546 29.1353C13.1947 28.6358 12.0008 27.5684 11.5175 25.9349C11.1541 24.7069 11.0263 22.8256 11.0263 20.5124C11.0263 18.1811 11.1533 16.2886 11.5154 15.0594C11.9933 13.4091 13.1829 12.3124 14.7738 11.8087C16.1163 11.3836 18.1277 11.2299 20.591 11.2299C23.0542 11.2299 25.0656 11.3836 26.4081 11.8087Z" stroke="#373D76" stroke-width="4"/>
							<path d="M26.7399 12.7561L26.7529 12.7597L26.766 12.7635C28.2367 13.1947 29.3649 14.1246 29.8569 15.594C30.2547 16.7601 30.4008 18.5874 30.4008 20.881C30.4008 23.1559 30.2539 24.9719 29.855 26.1369C29.3572 27.5908 28.2212 28.4984 26.766 28.925L26.7529 28.9288L26.7399 28.9324C25.3656 29.3084 23.2112 29.4626 20.4169 29.4626C17.5699 29.4626 15.3985 29.3119 14.0809 28.9289C12.5856 28.5165 11.3738 27.6301 10.8625 26.1369C10.4636 24.9719 10.3168 23.1559 10.3168 20.881C10.3168 18.5875 10.4629 16.7602 10.8606 15.5941C11.3675 14.0805 12.5768 13.1713 14.0939 12.7561C15.4681 12.3801 17.6226 12.226 20.4169 12.226C23.2112 12.226 25.3656 12.3801 26.7399 12.7561Z" stroke="white" stroke-width="3"/>
							</svg>
		</a>
		<div class="flex flex-grow">
			<div class="p-2 lg:px-2 flex flex-grow dark:border-slate-300 mx-0 lg:mx-0">
				<div class="relative flex w-full items-center">
					
					<div class="flex items-left">
						<form method="GET">
						  <div class="relative text-gray-200 focus-within:text-gray-400">
							<span class="absolute inset-y-0 left-0 flex items-center pl-2">
							  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
							  </button>
							</span>
							<input type="search" name="q" class="py-2 lg:w-[950px] md:w-[500px] sm:w-[340px] text-sm text-white bg-slate-100/70 border border-slate-300 rounded-sm pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
						  </div>
						</form>
					  </div>
					
					<div class="relative flex-grow">
						<nav class="text-sm float-right border-left border-slate-100 inline-block leading-6 font-semibold text-black">
							<ul class="flex">
									
									<li>
										<span
											class="text-xs text-sky-900/80 font-normal font- p-0.5 py-0 px-0 m-0 -mt-1"
											>Signed in as {$userStore.email}</span
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

	<div
	class="fixed top-12 bottom-[0px] z-40 right-auto  w-[69px]  border-r border-gray-300  bg-white flex-none lg:z-50"
>
<a href="/documents" class="flex px-6 py-2">
	<Fa icon={faFileLines} secondaryOpacity={1} class="text-gray-600 text-xl mt-2" />
</a>


</div>	
<div
class="fixed bottom-5 h-auto z-40 right-auto left-0 w-[68px] border-slate-600  bg-white flex-none lg:z-50"
>
<a href="/settings" class="flex px-6 py-2">
	<Fa icon={faCog} secondaryOpacity={1} class="text-gray-600 text-xl mt-2" />
</a>

<a href="/logout" class="flex px-6 py-2">
	<Fa icon={faSignOut} secondaryOpacity={1} class="text-gray-600 text-xl mt-2" />
</a>
</div>
{:else}
	<div
		class="w-full h-18 backdrop-blur bg-white/20 border-gray-200 flex-none transition-colors duration-500 z-50"
	>
		<div class="max-w-7xl mx-auto">
			<div class="py-4 border-slate-900 lg:px-8 border-0 dark:border-slate-300 mx-4 lg:mx-0">
				<div class="relative flex items-center">
					<a class="mr-6 flex-none overflow-hidden" href="/">
						<span class="sr-only font-extrabold">{props.company.title}</span>
						<svg class="inline-block -mt-[8px]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.5503 0L17.2178 20.399H23.7818L20.5503 0Z" fill="#08C"/>
							<path d="M20.5503 41L17.2178 20.601H23.7818L20.5503 41Z" fill="#08C"/>
							<path d="M40.9985 20.5004L20.5995 17.1678V23.7319L40.9985 20.5004Z" fill="#08C"/>
							<path d="M0 20.5004L20.399 17.1678V23.7319L0 20.5004Z" fill="#08C"/>
							<path d="M20.4382 9.57678L18.6768 20.3587H22.1462L20.4382 9.57678Z" fill="#08C"/>
							<path d="M20.4382 31.2468L18.6768 20.4649H22.1462L20.4382 31.2468Z" fill="#08C"/>
							<path d="M31.2468 20.4109L20.4649 18.6495V22.119L31.2468 20.4109Z" fill="#08C"/>
							<path d="M9.57678 20.4109L20.3587 18.6495V22.119L9.57678 20.4109Z" fill="#08C"/>
							<path d="M26.4081 11.8087L26.4276 11.8148L26.4469 11.8214C28.0017 12.3488 29.1042 13.4704 29.5643 15.0593C29.9264 16.2885 30.0533 18.181 30.0533 20.5124C30.0533 22.8256 29.9256 24.7069 29.5622 25.9349C29.0949 27.5142 27.9809 28.6083 26.4469 29.1287L26.4276 29.1353L26.4081 29.1414C25.0656 29.5665 23.0542 29.7202 20.591 29.7202C18.0952 29.7202 16.0585 29.5722 14.7546 29.1353C13.1947 28.6358 12.0008 27.5684 11.5175 25.9349C11.1541 24.7069 11.0263 22.8256 11.0263 20.5124C11.0263 18.1811 11.1533 16.2886 11.5154 15.0594C11.9933 13.4091 13.1829 12.3124 14.7738 11.8087C16.1163 11.3836 18.1277 11.2299 20.591 11.2299C23.0542 11.2299 25.0656 11.3836 26.4081 11.8087Z" stroke="#08C" stroke-width="4"/>
							<path d="M26.7399 12.7561L26.7529 12.7597L26.766 12.7635C28.2367 13.1947 29.3649 14.1246 29.8569 15.594C30.2547 16.7601 30.4008 18.5874 30.4008 20.881C30.4008 23.1559 30.2539 24.9719 29.855 26.1369C29.3572 27.5908 28.2212 28.4984 26.766 28.925L26.7529 28.9288L26.7399 28.9324C25.3656 29.3084 23.2112 29.4626 20.4169 29.4626C17.5699 29.4626 15.3985 29.3119 14.0809 28.9289C12.5856 28.5165 11.3738 27.6301 10.8625 26.1369C10.4636 24.9719 10.3168 23.1559 10.3168 20.881C10.3168 18.5875 10.4629 16.7602 10.8606 15.5941C11.3675 14.0805 12.5768 13.1713 14.0939 12.7561C15.4681 12.3801 17.6226 12.226 20.4169 12.226C23.2112 12.226 25.3656 12.3801 26.7399 12.7561Z" stroke="white" stroke-width="3"/>
							</svg>
							
							
						<div class="inline-block font-bold text-black text-3xl">One</div>
							
							
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
											<a class="font-semibold text-black" href="{link.link}">{link.title}</a>
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
										class="rounded-md font-semibold text-slate-600 hover:bg-blue-300 hover:text-sky-900 bg-slate-100 py-2 px-8 hover:text-black "
										href="https://calendly.com/obp-one/30min">Request a demo</a
									>
								</li>
								<li>
									<a
										class="rounded-md font-semibold text-white hover:bg-blue-200 hover:text-sky-900 bg-blue-600 py-2 px-8 hover:text-black "
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
