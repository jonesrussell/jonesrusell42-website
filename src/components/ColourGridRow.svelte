<script type="ts">
	export let bg: string;
	export let fg: any[];

	let updateColour = (e: any): void => {
		bg = e.target.value;
	};
</script>

<div>
	<div>
		<input type="color" value={bg} class="px-1 py-1" on:change={updateColour} />
	</div>
	<span class="uppercase">{bg}</span>
</div>

{#each fg as item}
	<div
		style="background-color:{bg};color:{item.color};"
		class="w-20 px-4 py-2 rounded-md text-center align-middle border-dashed border border-slate-500"
	>
		{item.see}
	</div>
{/each}
