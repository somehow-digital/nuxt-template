<script setup lang="ts">
import '@unocss/reset/tailwind.css';
import { useHead, useAppConfig } from '#imports';

const config = useAppConfig();

useHead({
	titleTemplate: '%s %separator %siteName',
	templateParams: {
		separator: '·',
		siteName: config.meta.title,
	},
	meta: [
		{
			name: 'description',
			content: config.meta.description,
		},
	],
});
</script>

<template>
	<NuxtPage />
</template>
