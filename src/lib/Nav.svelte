<script>
	import DropDown from './DropDown.svelte';
	export let props;
	export let userStore;
	import Fa from 'svelte-fa';
	import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
</script>

{#if $userStore}
	<div />
{:else}
	<div
		class="sticky absolute top-0 z-40 w-full backdrop-blur bg-white/20 flex-none transition-colors duration-500 lg:z-50"
	>
		<div class="max-w-8xl mx-auto">
			<div class="py-4 border-slate-900 lg:px-8 border-0 dark:border-slate-300 mx-4 lg:mx-0">
				<div class="relative flex items-center">
					<a class="mr-3 flex-none overflow-hidden" href="/">
						<span class="sr-only font-extrabold">{props.company.title}</span>
						<svg width="71" height="40" viewBox="0 0 71 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.1089 38.3002C15.6168 39.1853 23.8277 39.6279 35.7415 39.6279C47.3334 39.6279 55.5442 39.1853 60.3742 38.3002C64.8821 37.415 67.7801 35.7128 69.0681 33.1935C70.356 30.6742 71 26.2484 71 19.9161C71 13.5157 70.356 9.05586 69.0681 6.53656C67.7801 3.94917 64.8821 2.21291 60.3742 1.32775C55.5442 0.442592 47.3334 0 35.7415 0C24.1497 0 15.9388 0.442592 11.1089 1.32775C6.27895 2.21291 3.21999 3.94917 1.93201 6.53656C0.644021 9.05586 3.29794e-05 13.5157 3.29794e-05 19.9161C3.29794e-05 26.2484 0.644021 30.6742 1.93201 33.1935C3.21999 35.7128 6.27895 37.415 11.1089 38.3002Z" fill="#0A1F33"/>
							<path d="M41.8873 18.1941C41.8873 16.4613 41.8245 15.2308 41.6989 14.5025C41.5985 13.7492 41.3724 13.2595 41.0209 13.0335C40.6944 12.7823 40.1545 12.6568 39.4011 12.6568C38.5473 12.6568 37.932 12.8954 37.5554 13.3725C37.1787 13.8496 36.9401 14.5402 36.8397 15.4443C36.7643 16.3232 36.7267 17.7295 36.7267 19.6632V29.4193H33.7132V10.2083H36.463L36.6136 12.7698H36.8397C37.3419 10.8612 38.6603 9.90697 40.7949 9.90697C41.9751 9.90697 42.8541 10.1455 43.4317 10.6227C44.0093 11.0747 44.3985 11.7904 44.5994 12.7698C44.8003 13.7241 44.9007 15.1178 44.9007 16.951V29.4193H41.8873V18.1941Z" fill="white"/>
							<path d="M59.0886 20.7555H50.9521C50.9521 22.6892 51.0149 24.083 51.1405 24.9368C51.2912 25.7655 51.6051 26.3431 52.0822 26.6695C52.5844 26.9709 53.4006 27.1216 54.5307 27.1216C55.7109 27.1216 57.1047 26.996 58.7119 26.7449V29.231C58.1343 29.3566 57.3935 29.4696 56.4894 29.57C55.5854 29.6705 54.719 29.7207 53.8903 29.7207C52.0822 29.7207 50.7638 29.4193 49.9351 28.8166C49.1064 28.1888 48.5665 27.222 48.3153 25.9162C48.0642 24.5852 47.9387 22.5636 47.9387 19.8515C47.9387 17.1142 48.0391 15.0927 48.24 13.7868C48.466 12.481 48.9808 11.5142 49.7844 10.8864C50.6131 10.2334 51.9441 9.90697 53.7773 9.90697C55.4598 9.90697 56.6652 10.2083 57.3935 10.811C58.1468 11.4137 58.6114 12.3554 58.7872 13.6362C58.9881 14.9169 59.0886 16.9761 59.0886 19.8138V20.7555ZM53.702 12.5061C52.8481 12.5061 52.2329 12.6442 51.8562 12.9205C51.5046 13.1716 51.266 13.6989 51.1405 14.5025C51.0149 15.3061 50.9521 16.6497 50.9521 18.5331H56.2634V18.0811C56.2634 16.3734 56.1881 15.1429 56.0374 14.3895C55.9118 13.6111 55.6733 13.1088 55.3217 12.8828C54.9952 12.6317 54.4553 12.5061 53.702 12.5061Z" fill="white"/>
							<path d="M27.4058 11.6363L27.4058 11.6362L27.4157 11.6397C28.6189 12.063 29.4097 12.9128 29.7529 14.1462C30.0734 15.2707 30.2209 17.1922 30.2209 19.8565C30.2209 22.4943 30.0732 24.4019 29.7524 25.5259C29.4074 26.7349 28.6138 27.5667 27.4157 27.9882L27.4158 27.9883L27.4058 27.9916C26.2 28.3875 24.2198 28.5698 21.5213 28.5698C18.7579 28.5698 16.7708 28.3891 15.6318 27.9899C14.3692 27.5739 13.5267 26.7486 13.1778 25.5259C12.857 24.4019 12.7093 22.4943 12.7093 19.8565C12.7093 17.1922 12.8568 15.2707 13.1773 14.1462C13.5248 12.8974 14.366 12.0536 15.6368 11.6363C16.8425 11.2404 18.8228 11.0581 21.5213 11.0581C24.2198 11.0581 26.2 11.2404 27.4058 11.6363Z" stroke="white"/>
							<rect x="24.7674" y="28.0697" width="29.7209" height="1.65116" fill="white"/>
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
						<nav class="text-sm leading-6 font-semibold text-black">
							<ul class="flex space-x-8">
								{#if !$userStore}
									{#each props.navigation.links as link}
										<li class="dropdown relative">
											{#if link.items.length > 0}
												<DropDown links={link.items} title={link.title} />
											{:else}
												<a href="/{link.link}">{link.title}</a>
											{/if}
										</li>
									{/each}
								{/if}
								{#if $userStore}
									<li>
										<span
											class="text-sm text-slate-500 font-normal font- bg-slate-200 rounded-md p-0.5 px-2 m-2"
											>{$userStore.email}</span
										>
									</li>
									<li>
										<a
											class=" text-sky-500 dark:text-sky-500 hover:text-black-500 dark:hover:text-black-400"
											href="/logout"
										>
											<Fa class="mt-1" icon={faArrowRightFromBracket} />
										</a>
									</li>
								{:else}
									<li>
										<a
											class="text-sky-700 dark:text-sky-500 hover:text-black-500 dark:hover:text-black-400"
											href="/login">Sign In</a
										>
									</li>
								{/if}
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
