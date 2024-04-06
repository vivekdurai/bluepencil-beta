<script>
	export let userStore;
	export let props;
</script>
{#if !$userStore}
<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
	<div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
	  <div class="sm:col-span-2">
		<a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
		  <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
			<rect x="3" y="1" width="7" height="12"></rect>
			<rect x="3" y="17" width="7" height="6"></rect>
			<rect x="14" y="1" width="7" height="6"></rect>
			<rect x="14" y="11" width="7" height="12"></rect>
		  </svg>
		  <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">OneBigPicture</span>
		</a>
		<div class="mt-6 lg:max-w-sm">
		  <p class="text-sm text-gray-800">
			Document Automation
		  </p>
		  <p class="mt-4 text-sm text-gray-800">
		  </p>
		</div>
	  </div>
	  <div class="space-y-2 text-sm">
		<p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
		<div class="flex">
		  <p class="mr-1 text-gray-800">Phone:</p>
		  <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+91 9600045913</a>
		</div>
		<div class="flex">
		  <p class="mr-1 text-gray-800">Email:</p>
		  <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">team@obp.one</a>
		</div>
		<div class="flex">
		  <p class="mr-1 text-gray-800">Address:</p>
		  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
			63, Solomon Chs Ltd, Sherly Rajan Road, Bandra West, Mumbai - 400050
		  </a>
		</div>
	  </div>
	  <div>
		<span class="text-base font-bold tracking-wide text-gray-900">Social</span>
		<div class="flex items-center mt-1 space-x-3">
		  <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
			<svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
			  <path
				d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
			  ></path>
			</svg>
		  </a>
		  <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
			<svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
			  <circle cx="15" cy="15" r="4"></circle>
			  <path
				d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
			  ></path>
			</svg>
		  </a>
		  <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
			<svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
			  <path
				d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
			  ></path>
			</svg>
		  </a>
		</div>
		<p class="mt-4 text-sm text-gray-500">
		 
		</p>
	  </div>
	</div>
	<div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
	  <p class="text-sm text-gray-600">
		© Copyright 2024 OBP AI Technologies LLP. All rights reserved.
	  </p>
	  <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
		<!-- <li>
		  <a href="/" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
		</li> -->
		<li>
		  <a href="/privacy" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
		</li>
		<li>
		  <a href="/terns" class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
		</li>
	  </ul>
	</div>
  </div>
<!-- <div class="pb-16 w-full text-sm leading-6">
	<div
		class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700"
	>
		<div class="flex">
			<div class="flex-none w-full space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
				<div class="flex-none w-6/12">
					<a class="mr-6 flex-none overflow-hidden" href="/">
						<span class="sr-only font-extrabold">{props.company.title}</span>
						<svg class="inline-block opacity-50 -mt-[11px]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.5503 0L17.2178 20.399H23.7818L20.5503 0Z" fill="#000000"/>
							<path d="M20.5503 41L17.2178 20.601H23.7818L20.5503 41Z" fill="#000000"/>
							<path d="M40.9985 20.5004L20.5995 17.1678V23.7319L40.9985 20.5004Z" fill="#000000"/>
							<path d="M0 20.5004L20.399 17.1678V23.7319L0 20.5004Z" fill="#000000"/>
							<path d="M20.4382 9.57678L18.6768 20.3587H22.1462L20.4382 9.57678Z" fill="#000000"/>
							<path d="M20.4382 31.2468L18.6768 20.4649H22.1462L20.4382 31.2468Z" fill="#000000"/>
							<path d="M31.2468 20.4109L20.4649 18.6495V22.119L31.2468 20.4109Z" fill="#000000"/>
							<path d="M9.57678 20.4109L20.3587 18.6495V22.119L9.57678 20.4109Z" fill="#000000"/>
							<path d="M26.4081 11.8087L26.4276 11.8148L26.4469 11.8214C28.0017 12.3488 29.1042 13.4704 29.5643 15.0593C29.9264 16.2885 30.0533 18.181 30.0533 20.5124C30.0533 22.8256 29.9256 24.7069 29.5622 25.9349C29.0949 27.5142 27.9809 28.6083 26.4469 29.1287L26.4276 29.1353L26.4081 29.1414C25.0656 29.5665 23.0542 29.7202 20.591 29.7202C18.0952 29.7202 16.0585 29.5722 14.7546 29.1353C13.1947 28.6358 12.0008 27.5684 11.5175 25.9349C11.1541 24.7069 11.0263 22.8256 11.0263 20.5124C11.0263 18.1811 11.1533 16.2886 11.5154 15.0594C11.9933 13.4091 13.1829 12.3124 14.7738 11.8087C16.1163 11.3836 18.1277 11.2299 20.591 11.2299C23.0542 11.2299 25.0656 11.3836 26.4081 11.8087Z" stroke="#000000" stroke-width="4"/>
							<path d="M26.7399 12.7561L26.7529 12.7597L26.766 12.7635C28.2367 13.1947 29.3649 14.1246 29.8569 15.594C30.2547 16.7601 30.4008 18.5874 30.4008 20.881C30.4008 23.1559 30.2539 24.9719 29.855 26.1369C29.3572 27.5908 28.2212 28.4984 26.766 28.925L26.7529 28.9288L26.7399 28.9324C25.3656 29.3084 23.2112 29.4626 20.4169 29.4626C17.5699 29.4626 15.3985 29.3119 14.0809 28.9289C12.5856 28.5165 11.3738 27.6301 10.8625 26.1369C10.4636 24.9719 10.3168 23.1559 10.3168 20.881C10.3168 18.5875 10.4629 16.7602 10.8606 15.5941C11.3675 14.0805 12.5768 13.1713 14.0939 12.7561C15.4681 12.3801 17.6226 12.226 20.4169 12.226C23.2112 12.226 25.3656 12.3801 26.7399 12.7561Z" stroke="white" stroke-width="3"/>
							</svg>							
						<div class="inline-block opacity-50 font-bold text-gray-700 text-3xl">ONE</div>	
					</a>
				</div>
				<div class="flex-none w-6/12">
					<ul class="mt-2 float-right space-x-2">
						<li class="inline-block">
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/terms"
								>Terms of Use</a
							>
						</li>
						<li class="inline-block">
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/privacy-policy"
								>Privacy Policy</a
							>
						</li>
						<li class="inline-block">
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="mailto:team@obp.one"
								>Email us</a
							>
						</li>
					</ul>
				</div>
						
				

			</div>
		</div>
	</div>
</div> -->
{/if}