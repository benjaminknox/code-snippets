// .env
PUBLIC_CLIENT_TOKEN=clientTokenForApi
PRIVATE_SECRET=serverSideSecretForApi

// src/routes/+page.svelte (client-side)
<script lang="ts">
  import { PUBLIC_CLIENT_TOKEN } from '$env/static/public';

  console.log(PUBLIC_CLIENT_TOKEN); // clientTokenForApi
</script>

// src/routes/+page.ts (server-side)
import { PRIVATE_SECRET } from '$env/static/private';
import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
  console.log(PRIVATE_SECRET); // serverSideSecretForApi
	const res = await fetch('/my-server-route.json');
	return await res.json();
};
