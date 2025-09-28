import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import webSocketServer from './src/lib/websockets/dev-server';

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
