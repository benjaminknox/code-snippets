// .env
PUBLIC_CLIENT_TOKEN=clientTokenForApi
PRIVATE_SECRET=serverSideSecretForApi

// src/routes/+page.svelte (client-side)
<script lang="ts">
  import { env } from '$env/static/public';
  const { PUBLIC_CLIENT_TOKEN } = env;
  console.log(PUBLIC_CLIENT_TOKEN); // clientTokenForApi
</script>

// src/routes/+page.ts (server-side)
import { env } from '$env/static/private';
import type { PageLoad } from './$types';
export const prerender = true;
  
const { PRIVATE_SECRET } = env;

export const load: PageLoad = async ({ fetch }) => {
  console.log(PRIVATE_SECRET); // serverSideSecretForApi
	const res = await fetch('/my-server-route.json');
	return await res.json();
};
