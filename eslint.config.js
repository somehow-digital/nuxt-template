import config from '@somehow-digital/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(config({
	vue: true,
	unocss: true,
}));
