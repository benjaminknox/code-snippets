// .env
VITE_API_URL=https://api.example.com
PRIVATE_SECRET=abc123

// src/routes/+page.svelte (client-side)
<script>
  import { env } from '$env/static/public';
  console.log(env.VITE_API_URL); // https://api.example.com
</script>

// src/routes/api/+server.js (server-side)
import { env } from '$env/static/private';
export async function GET() {
  console.log(env.PRIVATE_SECRET); // abc123
  return new Response('Server data');
}
