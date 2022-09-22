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
				title: 'Products',
				items: [
					{
						icon: 'contract',
						title: 'One Contract',
						path: '/products/one-contract ',
						help: 'Extract key terms, counterparties, dates and other data from contracts'
					},
					{
						icon: 'finance',
						title: 'One Finance',
						path: '/ ',
						help: 'Get visibility on your cashflows, payables and receivables by bulk parsing invoices and receipts'
					},
					{
						icon: 'resume',
						title: 'One Resume',
						path: '/ ',
						help: 'Your resume pile as a searchable, filterable, sortable, database'
					},
					{
						icon: 'text',
						title: 'One Text',
						path: '/ ',
						help: 'Convert scanned business documents to text'
					}
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
