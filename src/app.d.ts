/// <reference types="@sveltejs/kit/types" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {}
	interface Platform {}
	interface Session {}
	interface Stuff {}
	interface User {
		id: number;
		email: string;
		is_active: boolean;
		is_verified: boolean;
		is_superuser: boolean;
	}
}
declare module 'luxon';
declare module 'cross-blob';
declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
  }