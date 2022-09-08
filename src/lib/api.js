import { variables } from '$lib/variables';
export const base = variables.basePath;

async function send({ method, path, data, token }) {
	console.log('send', method, path, data, token);
	const opts = { method: method, headers: {} };
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');

	if (token) {
		headers.append('Authorization', `Bearer ${token}`);
	}
	if (data) {
		const urlencoded = Object.entries(data)
			.map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
			.join('&');
		opts.body = urlencoded;
		opts.redirect = 'follow';
	}

	opts.headers = headers;
	var url = `${base}/${path}`;

	// var urlencoded = new URLSearchParams();
	// urlencoded.append('username', data['username']);
	// urlencoded.append('password', data['password']);

	// var requestOptions = {
	// 	method: 'POST',
	// 	headers: headers,
	// 	body: urlencoded,
	// 	redirect: 'follow'
	// };
	// var resParsed;
	// console.log(url);
	// return fetch(url, opts)
	// 	.then((response) => response.text())
	// 	.then((result) => {

	// 			console.log('fetched in api', result);
	// 			resParsed = JSON.parse(result);
	// 			return resParsed;

	// 	})
	// 	.catch((error) => console.log('error', error));

	// console.log('returning', resParsed);
	// return resParsed;
	return fetch(url, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				var resParsed = JSON.parse(json);

				if (resParsed?.status === 'error') {
					console.log(`API response error from ${base}/${path}: ${json}`);
				}

				return resParsed;
			} catch (err) {
				return json;
			}
		});
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	console.log('api post', path, data, token);
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
