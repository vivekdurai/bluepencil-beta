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
					{ icon: 'faFileLines', title: 'One Contract', path: '/ ', help: 'dadasdasd' },
					{ icon: 'faFileLines', title: 'One Finance', path: '/ ', help: 'dsadsaddsad' },
					{ icon: 'faFileLines', title: 'One Resume', path: '/ ', help: 'dsadsda' },
					{ icon: 'faFileLines', title: 'One Text', path: '/ ', help: 'dasdadasd' }
				]
			},
			{
				title: 'Solutions',
				items: [
					{ icon: 'faFileLines', title: 'Sales teams', path: '/ ', help: 'dasdadasd' },
					{ icon: 'faFileLines', title: 'Finance teams', path: '/ ', help: 'dasdadasd' },
					{ icon: 'faFileLines', title: 'Legal teams', path: '/ ', help: 'dasdadasd' },
					{ icon: 'faFileLines', title: 'Procurement teams', path: '/ ', help: 'dasdadasd' },
					{ icon: 'faFileLines', title: 'HR teams', path: '/ ', help: 'dasdadasd' }
				]
			},
			{
				title: 'Resources',
				items: [
					{ icon: 'faFileLines', title: 'API Documentation', path: '/ ', help: 'dasdadasd' },
					{ icon: 'faFileLines', title: 'How-tos', path: '/ ', help: 'dasdadasd' }
				]
			},
			{
				title: 'About',
				items: [
					{ icon: 'faFileLines', title: 'Company', path: '/ ', help: 'dasdadasd' },
					{ icon: 'faFileLines', title: 'Careers', path: '/ ', help: 'dasdadasd' }
				]
			}
		]
	}
});

export const documentStore = writable([]);
export const activeDocumentStore = writable([]);
