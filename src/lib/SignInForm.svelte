<script>
	import Input from '$lib/Input.svelte';
	import Button from '$lib/Button.svelte';

	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';
	import userStore from '$lib/user.js';
	import { base } from '$lib/api.js';
	import * as api from '$lib/api.js';
    import user from '$lib/user';
	import ListErrors from '$lib/ListErrors.svelte';

	let username = '';
	let password = '';
	let errors = null;

	async function submit() {
		const response = await api.post(`auth/login`, { username, password });
		console.log(response)
		if (response.detail=='LOGIN_BAD_CREDENTIALS'){
			errors = {'login':'The username and password provided by you are incorrect'};
			console.log(errors);
		} else {
            sessionStorage.setItem('user',username);
			localStorage.setItem('token', response.access_token);
            $session.token = response.access_token;
            const resp = await api.get(`users/me`, localStorage.getItem('token'));
			if (!resp.errors){
				$userStore = resp;
				goto('/');
			} else {
				goto('/login');
			}
		}
	}
</script>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full bg-white/60 border-white/60 border-2 p-10 rounded-md">
		<div class="font-bold text-center text-black text-3xl">Sign in to your account</div>
		<div class="text-gray-800 font-light text-sm mt-2 mb-10 text-center">
			or <a
				href="#!"
				class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition 
                duration-200 ease-in-out">request access to a trial account</a
			>
		</div>

		<form class="mt-8 space-y-6 pt-0" on:submit|preventDefault={submit}>
			<input type="hidden" name="remember" value="true" />
			<div class=" rounded-md shadow-sm  -space-y-px">
				<div class="form-group mb-0">
					<label for="exampleInputEmail2" class="form-label sr-only inline-block mb-2 text-gray-700"
						>Email address</label
					>
					<input
						type="email"
						autocomplete="email"
						class="form-control
          block
          w-full
          px-3
          py-2
          text-base
          font-normal
          appearance-none
          rounded-none
          text-gray-700
          bg-white
          border
          border-slate-300
          rounded-t
          transition
          ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-blue-600 
          focus:border-b-1
          focus:outline-none
          focus:z-10 
          sm:text-sm
          "
						id="exampleInputEmail2"
						aria-describedby="emailHelp"
						placeholder="Email address"
						bind:value={username}
					/>
				</div>
				<div class="form-group mb-6">
					<label
						for="exampleInputPassword2"
						class="form-label hidden inline-block mb-2 text-gray-700">Password</label
					>
					<input
						type="password"
						class="form-control block
          w-full
          px-3
          py-2
          text-base
          font-normal
          text-gray-700
          rounded-none
          bg-white bg-clip-padding
          border border-solid border-gray-300
          border-t-1 
          rounded-b
          transition
          ease-in-out
          focus:ouline-none
          focus:z-10
          sm:text-sm
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						id="exampleInputPassword2"
						placeholder="Password"
						bind:value={password}
					/>
				</div>
			</div>
			<div class="flex justify-between items-center mb-6">
				<div class="form-group form-check">
					<input
						type="checkbox"
						class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
						id="exampleCheck2"
					/>
					<label
						class="form-check-label text-sm inline-block text-gray-800 font-light"
						for="exampleCheck2">Remember me</label
					>
				</div>
				<a
					href="#!"
					class="text-blue-600 hover:text-blue-700 focus:text-blue-700 text-sm font-light transition duration-200 ease-in-out"
					>Forgot your password?</a
				>
			</div>
			<button
				type="submit"
				class="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-base
        leading-tight
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Sign in</button
			>


			<ListErrors {errors} />
		</form>
	</div>
</div>
