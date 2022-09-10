import { writable } from 'svelte/store';
import { variables } from '$lib/variables';
export const base_url = variables.basePath;
export const ws_base_url = variables.wsPath;

export const obp = writable({
	company: {
		title: 'OneBigPicture',
		description: 'Powering Contract Intelligence across your organization'
	},
	hero: {
		headline: 'Accelerate Contracts',
		description:
			'AI powered document intelligence to understand your contracts, so we help accelerate your sales, buying and hiring cycles.',
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
