<script>
	export let userStore;
	export let props;
</script>
{#if !$userStore}
<div class="pb-16 w-full text-sm leading-6">
	<div
		class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700"
	>
		<div class="flex">
			<div class="flex-none w-full space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
				<div class="lg:flex-none lg:w-2/12">
					<a class="mr-6 flex-none overflow-hidden" href="/">
						<span class="sr-only font-extrabold">{props.company.title}</span>
						<svg class="inline-block -mt-[11px]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.5503 0L17.2178 20.399H23.7818L20.5503 0Z" fill="#0066FF"/>
							<path d="M20.5503 41L17.2178 20.601H23.7818L20.5503 41Z" fill="#0066FF"/>
							<path d="M40.9985 20.5004L20.5995 17.1678V23.7319L40.9985 20.5004Z" fill="#0066FF"/>
							<path d="M0 20.5004L20.399 17.1678V23.7319L0 20.5004Z" fill="#0066FF"/>
							<path d="M20.4382 9.57678L18.6768 20.3587H22.1462L20.4382 9.57678Z" fill="#0066FF"/>
							<path d="M20.4382 31.2468L18.6768 20.4649H22.1462L20.4382 31.2468Z" fill="#0066FF"/>
							<path d="M31.2468 20.4109L20.4649 18.6495V22.119L31.2468 20.4109Z" fill="#0066FF"/>
							<path d="M9.57678 20.4109L20.3587 18.6495V22.119L9.57678 20.4109Z" fill="#0066FF"/>
							<path d="M26.4081 11.8087L26.4276 11.8148L26.4469 11.8214C28.0017 12.3488 29.1042 13.4704 29.5643 15.0593C29.9264 16.2885 30.0533 18.181 30.0533 20.5124C30.0533 22.8256 29.9256 24.7069 29.5622 25.9349C29.0949 27.5142 27.9809 28.6083 26.4469 29.1287L26.4276 29.1353L26.4081 29.1414C25.0656 29.5665 23.0542 29.7202 20.591 29.7202C18.0952 29.7202 16.0585 29.5722 14.7546 29.1353C13.1947 28.6358 12.0008 27.5684 11.5175 25.9349C11.1541 24.7069 11.0263 22.8256 11.0263 20.5124C11.0263 18.1811 11.1533 16.2886 11.5154 15.0594C11.9933 13.4091 13.1829 12.3124 14.7738 11.8087C16.1163 11.3836 18.1277 11.2299 20.591 11.2299C23.0542 11.2299 25.0656 11.3836 26.4081 11.8087Z" stroke="#0066FF" stroke-width="4"/>
							<path d="M26.7399 12.7561L26.7529 12.7597L26.766 12.7635C28.2367 13.1947 29.3649 14.1246 29.8569 15.594C30.2547 16.7601 30.4008 18.5874 30.4008 20.881C30.4008 23.1559 30.2539 24.9719 29.855 26.1369C29.3572 27.5908 28.2212 28.4984 26.766 28.925L26.7529 28.9288L26.7399 28.9324C25.3656 29.3084 23.2112 29.4626 20.4169 29.4626C17.5699 29.4626 15.3985 29.3119 14.0809 28.9289C12.5856 28.5165 11.3738 27.6301 10.8625 26.1369C10.4636 24.9719 10.3168 23.1559 10.3168 20.881C10.3168 18.5875 10.4629 16.7602 10.8606 15.5941C11.3675 14.0805 12.5768 13.1713 14.0939 12.7561C15.4681 12.3801 17.6226 12.226 20.4169 12.226C23.2112 12.226 25.3656 12.3801 26.7399 12.7561Z" stroke="white" stroke-width="3"/>
							</svg>							
						<div class="inline-block font-bold text-gray-700 text-3xl">ONE</div>	
					</a>
				</div>

					{#each props.navigation.links as link}
					<div class="lg:flex-none w-2/12 lg:w-2/12">
						{#if link.items.length > 0}								
							<h2 class="font-semibold text-black">{link.title}</h2>
							<ul class="mt-3 space-y-2">
								{#each link.items as sublink}
								<li>
									<a class="hover:text-slate-900 dark:hover:text-slate-300" href="{sublink.path}"
										>{sublink.title}</a
									>
								</li>
								{/each}
							</ul>
						{:else}
						{/if}
					</div>
					{/each}

					<div class="lg:flex-none w-2/12">
						<h2 class="font-semibold text-black">Contact Us</h2>
						<ul class="mt-3 space-y-2">
							<li>Email</li>
						</ul>
					
					</div>


			</div>
		</div>
	</div>
</div>
{/if}