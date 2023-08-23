<script lang="ts">
import { base } from '$app/paths';
import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { fade } from 'svelte/transition';
	import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import {
		faBars,
		faBlog,
		faProjectDiagram,
		faAddressCard
	} from '@fortawesome/free-solid-svg-icons';

	const navId = 'collapse-navbar';
	const toggleNavbar = () => {
		document.getElementById(navId)?.classList.toggle('hidden');
		document.getElementById(navId)?.classList.toggle('block');
	};

	const hideLogo = () => {
		console.log('hideLogo');
	};
</script>

<nav
	class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
>
	<div class="container px-4 mx-auto flex flex-wrap items-center justify-between max-w-screen-lg">
		<div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
			<a
				class="text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
				class:md:inline-block={$page.url.pathname !== '/'}
				class:hidden={$page.url.pathname === '/'}
				class:animate-grow={$page.url.pathname === '/'}
				on:click={hideLogo}
				transition:fade={{ delay: 250, duration: 300 }}
				href="{base}/"
				><img src="{base}/cartoon-russell.jpg" alt="Logo" class="rounded-full logo" style="width:75px;height:75px;" /></a
			><button
				class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
				type="button"
				on:click={toggleNavbar}
			>
				<Fa icon={faBars} class="text-white" />
			</button>
		</div>
		<div
			class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
			id="collapse-navbar"
		>
			<ul class="flex flex-col lg:flex-row list-none mr-auto">
				<li class="flex items-center">
					<a
						class:selected={$page.url.pathname === '/projects'}
						class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
						href="{base}/projects"
						on:click={toggleNavbar}
						><Fa
							icon={faProjectDiagram}
							class="lg:text-gray-300 text-gray-500 text-lg leading-lg mr-2"
						/>
						Past Projects</a
					>
				</li>
			</ul>
			<ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
				<li class="flex items-center">
					<a
						class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
						target="_blank"
						href="https://linkedin.com/in/jonesrussell42"
						rel="noreferrer"
						><Fa icon={faLinkedin} class="lg:text-gray-300 text-gray-500 text-lg leading-lg" /><span
							class="lg:hidden inline-block ml-2">LinkedIn</span
						></a
					>
				</li>
				<li class="flex items-center">
					<a
						class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/jonesrussell42"
						><Fa icon={faTwitter} class="lg:text-gray-300 text-gray-500 text-lg leading-lg " /><span
							class="lg:hidden inline-block ml-2">Twitter</span
						></a
					>
				</li>
				<li class="flex items-center">
					<a
						class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/jonesrussell"
						><Fa icon={faGithub} class="lg:text-gray-300 text-gray-500 text-lg leading-lg " /><span
							class="lg:hidden inline-block ml-2">Github</span
						></a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
