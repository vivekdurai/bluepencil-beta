<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import userStore from '$lib/user.js';
	import * as api from '$lib/api.js';
    
	onMount(async () => {
		if (!localStorage.getItem('token')) {
            $userStore = undefined;
            goto('/login');
		}
		const res = await api.get('users/me', localStorage.getItem('token'));
			if (res.detailed=='unauthorized'){
				localStorage.removeItem('token')
				$userStore = undefined;
				goto('/login');
			} else {
                $userStore = res;
			}

	});
</script>