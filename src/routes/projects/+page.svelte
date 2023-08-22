<script context="module" lang="ts">
	import { variables } from '$lib/variables';

	export function load(): { props: { href: string } } {
		const href: string = variables.bellCreekUrl;

		return { props: { href } };
	}
</script>

<script lang="ts">
	import ContentBrowser from '../../components/tails/content-browser.svelte';

	export let href: string;
</script>

<svelte:head>
	<title>Past Projects | Full Stack Developer</title>
</svelte:head>

<header>
	<h1>Past Projects</h1>
</header>

<section>
	<ContentBrowser title="Interactive Animation" subtitle="Beautiful SVG" cta="Enlarge" {href}>
		<span slot="media"
			><iframe src={href} title="SVG Animation" class="w-full h-64 overflow-hidden" /></span
		>
		Learn how gold is processed from ore into dore bars in this interacive animation with embedded video.
	</ContentBrowser>
</section>
