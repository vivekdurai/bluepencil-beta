import * as api from '$lib/api.js';
import { session } from '$app/stores';
export async function respond(body) {
	if (body == undefined) {
		return {};
	} else {
		// console.log('body', body);
		if (body.errors) {
			return { status: 401, body };
		}

		const token = body.access_token;
		const resp = await api.get(`users/me`, token);

		const json = JSON.stringify(body.access_token);
		const value = Buffer.from(json).toString('base64');

		console.log(value)
		console.log(body)

		const res = { body, resp}
		console.log(res)
		session.user = resp.email;
		return {
			headers: {
				'set-cookie': `user=${value}; Path=/; HttpOnly`
			},
			res
		};
	}
}
