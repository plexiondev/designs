<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { classCombine } from '../utils/classCombine';

    // element
    export let as: 'button' | 'a' | 'summary' | 'input' | 'file' = 'button';
    export let href = '';
    if (href) as = 'a';

    // use value if input
    export let value = '';

    // sizes
    export let size: 'small' | 'medium' | 'large' | 'hero' = 'medium';
    // colours
    export let colour: '' | 'primary' | 'danger' | 'outline' = '';

    // raised
    export let raised = false;

    // shine
    export let shine = false;

    // disabled
    export let disabled = false;

    // link target
    export let target = '';

    // combine classes
    let className: string;
    $: className = classCombine([
        'button',
        size,
        colour,
        shine && 'shine',
        raised && 'raised'
    ])

    const dispatch = createEventDispatcher();

    function dispatchClick() {
        if (!disabled) dispatch('click');
    }

    // handle file input
    function handleChangeFiles(event: Event) {
        if (!disabled) dispatch('files', (event.target as HTMLInputElement).files || new FileList());
    }
    function handleDropFiles(event: DragEvent) {
		event.preventDefault()
		if (!disabled) dispatch('files', event.dataTransfer.files || new FileList())
	}
</script>

{#if as === 'a'}
	<a class={className} {href} {target} on:click={dispatchClick}>
		<slot />
	</a>
{:else if as === 'input'}
	<input class={className} {value} {disabled} on:click={dispatchClick} />
{:else if as === 'file'}
	<label
		class={className}
		on:drop={handleDropFiles}
		on:dragover={(event) => event.preventDefault()}>
		<input type="file" on:change={handleChangeFiles} />
		<slot />
	</label>
{:else}
	<svelte:element this={as} class={className} {disabled} on:click={dispatchClick}>
		<slot />
	</svelte:element>
{/if}

<style>
    .button {
        /* padding/sizing */
        padding: var(--top) var(--sides);
        /* appearance */
        background-color: var(--b2);
        border-radius: var(--button-round);
        /* text */
        font-family: var(--font-main);
        color: var(--text-head);
        font-weight: 600;
        text-decoration: none;
        font-size: 16px;
        line-height: 20px;
        text-shadow: 0px 2px 4px var(--bb5);
        user-select: none;
        -webkit-user-select: none;
        /* display */
        border: none;
        box-shadow: var(--raise-0);
        display: inline-block;
        transition: background-color 0.2s, transform 0.2s, filter 0.2s, opacity 0.2s, box-shadow 0.2s, top 0.2s;
        /* centre for mobile */
        text-align: center;
        overflow: visible;
    }
    .button:is(:hover, :focus-visible) {
        background-color: var(--b3);
    }
    .button:active {
        transform: scale(0.97);
    }

    /* sizes */
    .button.small {
        --top: 6px;
        --sides: 18px;
    }
    .button.medium {
        --top: 10px;
        --sides: 22px;
    }
    .button.large {
        --top: 12px;
        --sides: 26px;
    }
    .button.hero {
        --top: 14px;
        --sides: 24px;
        border-radius: 12px;
    }

    /* colours */
    .button.primary {
        --border: var(--l4);
        background-color: var(--l4);
        color: var(--text-raised);
    }
    .button.primary:is(:hover, :focus-visible) {
        background-color: var(--accent);
    }
    .button.danger {
        --border: var(--dangerous-raise);
        background-color: var(--dangerous-raise);
        color: var(--text-raised);
    }
    .button.danger:is(:hover, :focus) {
        background-color: var(--dangerous);
    }
    .button.outline {
        --border-col: var(--text-head);
        background-color: transparent !important;
        box-shadow: inset -0.2px 0 0 1px var(--border-col) !important;
    }
    .button.outline:is(:hover, :focus) {
        --border-col: var(--text-main);
    }

    /* shine */
    .button:not(.outline).shine {
        box-shadow: 0px 0px 20px 3px var(--b2) !important;
    }
    .button.primary.shine {
        box-shadow: 0px 0px 20px 3px var(--l4) !important;
    }
    .button.danger.shine {
        box-shadow: 0px 0px 20px 3px var(--dangerous-raise) !important;
    }
</style>