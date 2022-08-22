import * as api from '$lib/api.js';
import { respond } from './_respond';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	const json = await request.json();
	console.log('login endpoint', json);
	const body = await api.post('auth/jwt/login', json);
	return respond(body);
}
