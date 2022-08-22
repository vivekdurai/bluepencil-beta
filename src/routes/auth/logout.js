import * as api from '$lib/api.js';
import userStore from '$lib/user.js';
import { session } from '$app/stores';
export async function GET() {
	const body = await api.post('auth/logout', {}, session.token);
	if (!body.errors) {
		$userStore = undefined;
	}
	return {
		status: 301,
		redirect: '/login'
	};
}
