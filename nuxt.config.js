import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	compatibilityDate: '2025-02-01',
	devtools: {
		enabled: true,
	},
	modules: ['@unocss/nuxt', '@nuxt/eslint'],
	eslint: {
		config: {
			standalone: false,
			autoInit: false,
		},
	},
});
