<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let year: number = new Date().getFullYear();
</script>

<Nav />

<section class="relative block hero-home" />

<main class="relative sasquatch">
	<div class="container mx-auto px-4 max-w-screen-lg m-10 py-10">
		<div
			class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
		>
			<div class="px-6 py-6">
				<slot />
			</div>
		</div>
	</div>
</main>

<Footer {year} />
