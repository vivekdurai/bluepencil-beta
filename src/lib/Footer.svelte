<script>
	export let userStore;
</script>
{#if !$userStore}
<div class="pb-16 text-sm leading-6">
	<div
		class="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700"
	>
		<div class="flex">
			<div class="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
				<div class="lg:flex-none lg:w-1/2">
					<h2 class="font-semibold text-slate-900 dark:text-slate-100">Getting Started</h2>
					<ul class="mt-3 space-y-2">
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/installation"
								>Installation</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/editor-setup"
								>Editor Setup</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/using-with-preprocessors">Using with Preprocessors</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/optimizing-for-production">Optimizing for Production</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/browser-support"
								>Browser Support</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/upgrade-guide"
								>Upgrade Guide</a
							>
						</li>
					</ul>
				</div>
				<div class="lg:flex-none lg:w-1/2">
					<h2 class="font-semibold text-slate-900 dark:text-slate-100">Core Concepts</h2>
					<ul class="mt-3 space-y-2">
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/utility-first"
								>Utility-First Fundamentals</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/hover-focus-and-other-states">Handling Hover, Focus, and Other States</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/responsive-design">Responsive Design</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/dark-mode"
								>Dark Mode</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/reusing-styles"
								>Reusing Styles</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/adding-custom-styles">Adding Custom Styles</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/functions-and-directives">Functions &amp; Directives</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
				<div class="lg:flex-none lg:w-1/2">
					<h2 class="font-semibold text-slate-900 dark:text-slate-100">Customization</h2>
					<ul class="mt-3 space-y-2">
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/configuration"
								>Configuration</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/content-configuration">Content Configuration</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/theme"
								>Theme Configuration</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/screens"
								>Customizing Screens</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/customizing-colors">Customizing Colors</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="/docs/customizing-spacing">Customizing Spacing</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/plugins"
								>Plugins</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/docs/presets"
								>Presets</a
							>
						</li>
					</ul>
				</div>
				<div class="lg:flex-none lg:w-1/2">
					<h2 class="font-semibold text-slate-900 dark:text-slate-100">Community</h2>
					<ul class="mt-3 space-y-2">
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="https://github.com/tailwindlabs/tailwindcss">GitHub</a
							>
						</li>
						<li>
							<a class="hover:text-slate-900 dark:hover:text-slate-300" href="/discord">Discord</a>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="https://twitter.com/tailwindcss">Twitter</a
							>
						</li>
						<li>
							<a
								class="hover:text-slate-900 dark:hover:text-slate-300"
								href="https://www.youtube.com/tailwindlabs">YouTube</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}