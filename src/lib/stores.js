import { writable } from 'svelte/store';

export const base_url = 'http://localhost:8004';
export const ws_base_url = 'ws://localhost:8004';

export const obp = writable({
	company: {
		title: 'OneBigPicture',
		description: 'Powering Contract Intelligence across your organization'
	},
	hero: {
		headline: 'We make contracts human',
		description:
			'By simplifying contracts, we make it easy for you to accelerate sales, buying and hiring across your organization',
		call_to_action: 'Schedule a call'
	},
	navigation: {
		links: [
			{
				title: 'Solutions',
				items: [
					{ title: 'Contracts', path: '/ ' },
					{ title: 'Litigation', path: '/ ' },
					{ title: 'Finance', path: '/ ' },
					{ title: 'Governance', path: '/ ' },
					{ title: 'Healthcare', path: '/ ' },
					{ title: 'Real Estate', path: '/ ' }
				]
			},
			{
				title: 'Features',
				link: 'features',
				items: []
			}
		]
	}
});

export const documentStore = writable([]);
export const activeDocumentStore = writable([]);
