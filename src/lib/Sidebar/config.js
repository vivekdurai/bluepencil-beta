export const sidebarConfig = {
	routes: [
		{
			name: 'Dashboard',
			route: '/'
		},
		{
			name: 'Documents',
			route: '/documents'
		},
		{
			name: 'Contracts',
			route: '/contracts'
		},
		{
			name: 'Search',
			route: '/search'
		},
		{
			name: 'Settings',
			route: '/settings'
		},
		{
			name: 'Logout',
			route: '/logout'
		}
	],
	open: true,
	activeUrl: '/',
	theme: {
		backgroundColor_linkActive: '#ffffff00',
		backgroundColor_nav: '#ffffff00',
		color_link: '#000000',
		color_linkHover: '#dddddd',
		fontSize: '0.85rem',
		maxWidth_nav: '20vw',
		minWidth_nav: '124px',
		opacity_linkDisabled: '0.5',
		opacity_linkInactive: '0.45'
	}
};
