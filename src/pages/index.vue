<script setup lang="ts">
import { definePageMeta, useAppConfig, useHead } from '#imports';

const config = useAppConfig();

useHead({
	title: config.meta.title,
	titleTemplate: null,
});

definePageMeta({
	layout: 'default',
});
</script>

<template>
	<NuxtLayout>
		<h1>Nuxt</h1>
	</NuxtLayout>
</template>
