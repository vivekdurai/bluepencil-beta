const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

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

	plugins: []
};

module.exports = config;
