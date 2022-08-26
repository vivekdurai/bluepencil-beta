import { writable } from 'svelte/store';

export const base_url = 'http://localhost:8004';
export const ws_base_url = 'ws://localhost:8004';

export const obp = writable({
	company: {
		title: 'OneBigPicture',
		description: 'Powering Contract Intelligence across your organization'
	},
	hero: {
		headline: 'Sentient Contracts',
		description:
			'By getting your contracts to talk to you, we help accelerate your sales, buying and hiring cycles.',
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
