<script lang="ts">
	import { properties } from '@tomic/lib';
	import { getResource, getValue } from '@tomic/svelte';

	export let subject: string;
	$: resource = getResource(subject);
	$: name = getValue<string>(resource, properties.file.filename);
	$: download = getValue<string>(resource, properties.file.downloadUrl);
</script>

<a class="attachment" href={$download}>{$name}</a>

<style>
	.attachment {
		border: 1px solid #ccc;
		padding: 0.3rem;
		border-radius: var(--t-radius);
		display: inline-flex;
	}
	.attachment:hover {
		background-color: var(--t-bg-body);
	}
	.attachment:active {
		background-color: var(--t-bg-light);
	}
</style>
