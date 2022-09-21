const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			fontFamily: {
				serif: ['Oregano', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
			}
		}
	},
	variants: {
		display: ['responsive', 'group-hover', 'group-focus']
	},
	plugins: [
		require('flowbite/plugin')
	]	
};

module.exports = config;
