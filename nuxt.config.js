export default defineNuxtConfig({
	compatibilityDate: '2025-02-01',
	devtools: {
		enabled: true,
	},
	imports: {
		autoImport: false,
	},
	modules: ['@unocss/nuxt'],
	srcDir: 'src/',
});
