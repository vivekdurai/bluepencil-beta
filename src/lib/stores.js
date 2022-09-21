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
			'AI powered contract intelligence that can accelerate your sales, buying and hiring cycles.',
		call_to_action: 'Schedule a call'
	},
	navigation: {
		links: [
			{
				title: 'Product',
				items: [
					{ title: 'One Contract', path: '/ ' },
					{ title: 'One Finance', path: '/ ' },
					{ title: 'One Resume', path: '/ ' },
					{ title: 'One Text', path: '/ ' }
				]
			},
			{
				title: 'Solutions',
				items: [
					{ title: 'Sales teams', path: '/ ' },
					{ title: 'Finance teams', path: '/ ' },
					{ title: 'Legal teams', path: '/ ' },
					{ title: 'Procurement teams', path: '/ ' },
					{ title: 'HR teams', path: '/ ' }
				]
			},
			{
				title: 'Resources',
				items: [
					{ title: 'API Documentation', path: '/ ' },
					{ title: 'How-tos', path: '/ ' }
				]
			},
			{
				title: 'About',
				items: [
					{ title: 'Company', path: '/ ' },
					{ title: 'Careers', path: '/ ' }
				]
			}
		]
	}
});

export const documentStore = writable([]);
export const activeDocumentStore = writable([]);
