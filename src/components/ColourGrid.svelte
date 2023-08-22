<script type="ts">
	import ColourGridRow from '../components/ColourGridRow.svelte';
	import colorPickerIcon from '../../static/ftcolorpicker.svg';

	const good = 'Good';
	const poor = 'Poor';

	let red = '#ff0200';
	let orange = '#ff6202';
	let yellow = '#ffff00';
	let green = '#01ff06';
	let blue = '#0401ff';
	let violet = '#ff00fe';
	let black = '#000000';
	let white = '#ffffff';
	let gray = '#6b606e';

	let currentFg = '';

	let bgRedFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: poor },
		{ color: green, see: poor },
		{ color: blue, see: poor },
		{ color: violet, see: poor },
		{ color: black, see: good },
		{ color: white, see: good },
		{ color: gray, see: poor }
	];

	let bgOrangeFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: poor },
		{ color: green, see: poor },
		{ color: blue, see: poor },
		{ color: violet, see: poor },
		{ color: black, see: good },
		{ color: white, see: good },
		{ color: gray, see: poor }
	];

	let bgYellowFg = [
		{ color: red, see: good },
		{ color: orange, see: good },
		{ color: yellow, see: poor },
		{ color: green, see: poor },
		{ color: blue, see: good },
		{ color: violet, see: good },
		{ color: black, see: good },
		{ color: white, see: good },
		{ color: gray, see: good }
	];

	let bgGreenFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: poor },
		{ color: green, see: poor },
		{ color: blue, see: good },
		{ color: violet, see: poor },
		{ color: black, see: good },
		{ color: white, see: poor },
		{ color: gray, see: good }
	];

	let bgBlueFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: good },
		{ color: green, see: good },
		{ color: blue, see: poor },
		{ color: violet, see: poor },
		{ color: black, see: poor },
		{ color: white, see: good },
		{ color: gray, see: poor }
	];

	let bgVioletFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: good },
		{ color: green, see: good },
		{ color: blue, see: poor },
		{ color: violet, see: poor },
		{ color: black, see: good },
		{ color: white, see: good },
		{ color: gray, see: poor }
	];

	let bgBlackFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: good },
		{ color: green, see: good },
		{ color: blue, see: poor },
		{ color: violet, see: good },
		{ color: black, see: poor },
		{ color: white, see: good },
		{ color: gray, see: poor }
	];

	let bgWhiteFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: good },
		{ color: green, see: good },
		{ color: blue, see: poor },
		{ color: violet, see: good },
		{ color: black, see: good },
		{ color: white, see: poor },
		{ color: gray, see: good }
	];

	let bgGrayFg = [
		{ color: red, see: poor },
		{ color: orange, see: poor },
		{ color: yellow, see: good },
		{ color: green, see: good },
		{ color: blue, see: poor },
		{ color: violet, see: poor },
		{ color: black, see: poor },
		{ color: white, see: good },
		{ color: gray, see: poor }
	];

	let updateFg = (e: any): void => {
		const newFg = e.target.value;
		updateColorText(e.target.parentNode, newFg);

		bgRedFg = changeColor(bgRedFg, newFg);
		bgOrangeFg = changeColor(bgOrangeFg, newFg);
		bgYellowFg = changeColor(bgYellowFg, newFg);
		bgGreenFg = changeColor(bgGreenFg, newFg);
		bgBlueFg = changeColor(bgBlueFg, newFg);
		bgVioletFg = changeColor(bgVioletFg, newFg);
		bgBlackFg = changeColor(bgBlackFg, newFg);
		bgWhiteFg = changeColor(bgWhiteFg, newFg);
		bgGrayFg = changeColor(bgGrayFg, newFg);
	};

	let updateColorText = (e: any, t): void => {
		e.querySelector('.uppercase').innerHTML = t;
	};

	let changeColor = (x: any, v: string): any => {
		let clone = structuredClone(x);
		clone.find((i) => i.color === currentFg).color = v;
		return clone;
	};

	/**
	 * Store the current foreground color before changing
	 * @param e
	 */
	let blurFg = (e: any): void => {
		currentFg = e.target.value;
	};
</script>

<div class="grid grid-rows-10 grid-flow-col gap-2 place-items-center">
	<div><img src={colorPickerIcon} alt="Colour picker" class="w-6 h-6" /></div>
	<div>
		<input type="color" class="px-1 py-1 block" on:blur={blurFg} on:change={updateFg} value={red} />
		<span class="uppercase">{red}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={orange}
		/>
		<span class="uppercase">{orange}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={yellow}
		/>
		<span class="uppercase">{yellow}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={green}
		/>
		<span class="uppercase">{green}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={blue}
		/>
		<span class="uppercase">{blue}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={violet}
		/>
		<span class="uppercase">{violet}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={black}
		/>
		<span class="uppercase">{black}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={white}
		/>
		<span class="uppercase">{white}</span>
	</div>
	<div>
		<input
			type="color"
			class="px-1 py-1 block"
			on:blur={blurFg}
			on:change={updateFg}
			value={gray}
		/>
		<span class="uppercase">{gray}</span>
	</div>

	<ColourGridRow bg={red} fg={bgRedFg} />
	<ColourGridRow bg={orange} fg={bgOrangeFg} />
	<ColourGridRow bg={yellow} fg={bgYellowFg} />
	<ColourGridRow bg={green} fg={bgGreenFg} />
	<ColourGridRow bg={blue} fg={bgBlueFg} />
	<ColourGridRow bg={violet} fg={bgVioletFg} />
	<ColourGridRow bg={black} fg={bgBlackFg} />
	<ColourGridRow bg={white} fg={bgWhiteFg} />
	<ColourGridRow bg={gray} fg={bgGrayFg} />
</div>
