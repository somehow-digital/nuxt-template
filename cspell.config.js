export default {
	dictionaries: ['project'],
	dictionaryDefinitions: [
		{
			addWords: true,
			name: 'project',
			path: './dictionary.txt',
		},
	],
	ignorePaths: ['.nuxt', '.output/'],
	import: ['@somehow-digital/cspell-dictionary'],
	language: 'en',
	version: '0.2',
};
