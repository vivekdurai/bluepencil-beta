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
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.1724 9.99998H14.7192L11.4483 12.037V14.3287L14.7192 12.037V22.2222H17.1724V9.99998Z" fill="white"/>
				<path d="M2.37742 10.1012C3.03024 8.97453 4.54609 8.19178 4.54609 8.19178C4.54609 8.19178 3.86016 8.64223 3.63835 9.7584C3.41654 10.8746 3.54794 13.2146 3.54794 13.2146C3.54794 13.2146 3.75 15.7993 5.2031 19.8917C5.88953 21.8249 7.58445 25.3156 9.19861 26.1966C10.8128 27.0776 12.3966 26.911 16.25 26.1274L19.7807 25.1675C19.7807 25.1675 21.0417 24.8247 23.2408 23.9629C25.4398 23.1011 26.1258 22.6506 26.1258 22.6506C26.1258 22.6506 25.629 23.2577 25.5105 23.3458C25.392 23.4339 24.7973 24.2519 22.2624 25.2847C19.7275 26.3176 18.2979 26.6265 18.2979 26.6265C15.6616 27.3432 12.8378 28.2558 10.0866 28.3309C7.30805 28.4068 4.88099 26.3145 3.18558 20.4402C2.42586 17.8079 0.759121 12.8941 2.37742 10.1012Z" fill="#D0D0D0"/>
				<path d="M11.1524 4.7944C11.1524 4.7944 18.528 2.26635 21.7457 4.90005C31.3472 5.99239 26.9086 10.4023 25.3128 13.8275C26.2804 16.8793 26.7055 18.7925 25.128 16.569C24.603 15.8289 24.8252 14.8742 25.3128 13.8275C24.6312 11.6779 23.6804 8.96336 22.9706 6.73184C22.7207 5.94636 22.2934 5.34841 21.7457 4.90005C19.2564 4.61685 15.8233 4.55664 11.1524 4.7944Z" fill="white"/>
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
		class="sticky absolute top-0 z-40 w-full backdrop-blur bg-white/20 border-b border-gray-200 flex-none transition-colors duration-500 lg:z-50"
	>
		<div class="max-w-8xl mx-auto">
			<div class="py-4 border-slate-900 lg:px-8 border-0 dark:border-slate-300 mx-4 lg:mx-0">
				<div class="relative flex items-center">
					<a class="mr-3 flex-none overflow-hidden" href="/">
						<span class="sr-only font-extrabold">{props.company.title}</span>
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.1724 10H14.7192L11.4483 12.037V14.3287L14.7192 12.037V22.2222H17.1724V10Z" fill="#5E5E5E"/>
							<path d="M2.37742 10.1012C3.03024 8.97453 4.54609 8.19178 4.54609 8.19178C4.54609 8.19178 3.86016 8.64223 3.63835 9.7584C3.41654 10.8746 3.54794 13.2146 3.54794 13.2146C3.54794 13.2146 3.75 15.7993 5.2031 19.8917C5.88953 21.8249 7.58445 25.3156 9.19861 26.1966C10.8128 27.0776 12.3966 26.911 16.25 26.1274L19.7807 25.1675C19.7807 25.1675 21.0417 24.8247 23.2408 23.9629C25.4398 23.1011 26.1258 22.6506 26.1258 22.6506C26.1258 22.6506 25.629 23.2577 25.5105 23.3458C25.392 23.4339 24.7973 24.2519 22.2624 25.2847C19.7275 26.3176 18.2979 26.6265 18.2979 26.6265C15.6616 27.3432 12.8378 28.2558 10.0866 28.3309C7.30805 28.4068 4.88099 26.3145 3.18558 20.4402C2.42586 17.8079 0.759121 12.8941 2.37742 10.1012Z" fill="#7A7A7A"/>
							<path d="M11.1524 4.7944C11.1524 4.7944 18.528 2.26635 21.7457 4.90005C31.3472 5.99239 26.9086 10.4023 25.3128 13.8275C26.2804 16.8793 26.7055 18.7925 25.128 16.569C24.603 15.8289 24.8252 14.8742 25.3128 13.8275C24.6312 11.6779 23.6804 8.96336 22.9706 6.73184C22.7207 5.94636 22.2934 5.34841 21.7457 4.90005C19.2564 4.61685 15.8233 4.55664 11.1524 4.7944Z" fill="#818181"/>
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

					<div class="relative lg:flex items-center ml-auto">
						<nav class="text-xs leading-6 font-semibold text-black">
							<ul class="flex space-x-8">
									{#each props.navigation.links as link}
										<li class="dropdown relative">
											{#if link.items.length > 0}
												<DropDown links={link.items} title={link.title} />
											{:else}
												<a href="{link.link}">{link.title}</a>
											{/if}
										</li>
									{/each}
									<li>
										<a
											class="text-sky-700 dark:text-sky-500 hover:text-black-500 dark:hover:text-black-400"
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
{/if}
