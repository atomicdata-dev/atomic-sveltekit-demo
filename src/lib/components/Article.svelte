<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import ArticleWidthConstraint from './ArticleWidthConstraint.svelte';
	import Fragment from './DynamicFragment.svelte';
	export let title: string;
	export let markdown = '';
	export let constrain = true;

	let ConstrainComponent = constrain ? ArticleWidthConstraint : Fragment;
</script>

<article>
	<svelte:component this={ConstrainComponent}>
		<h1>
			{title}
		</h1>
	</svelte:component>

	<div class="divider" />
	<svelte:component this={ConstrainComponent}>
		<Markdown md={markdown} />
	</svelte:component>
</article>

<style>
	@import 'open-props/media';

	article {
		--article-spacing: var(--size-4);
	}
	h1 {
		font-size: var(--font-size-fluid-2);
		margin-bottom: 1rem;
		line-height: 1em;
		color: var(--t-text-heading);
	}
	@media (--sm-n-below) {
		h1 {
			font-size: 1.8rem;
		}
	}
	.divider {
		border-bottom: 1px solid var(--gray-3);
		margin-bottom: 1.5rem;
	}

	article :global(h2),
	article :global(h3),
	article :global(h4),
	article :global(h5),
	article :global(h6) {
		color: var(--t-text-heading);
		margin-bottom: var(--size-2);
		margin-top: 0;
	}

	article :global(p) {
		font-size: 1.2rem;
		line-height: 1.7em;
		margin-bottom: var(--article-spacing);
	}

	article :global(ul),
	article :global(ol) {
		margin-block-start: 0;
	}

	article :global(li) {
		font-size: 1.2rem;
	}

	article :global(a) {
		color: var(--blue-9);
	}

	article :global(a:hover),
	article :global(a:focus) {
		text-decoration: underline;
	}

	article :global(img) {
		border-radius: var(--t-radius);
		margin-bottom: 1rem;
		max-width: 100%;
	}
</style>
