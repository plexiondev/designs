<script lang="ts">
	import { onMount } from 'svelte';
	import { classCombine } from '../utils/classCombine';

    // image source
	export let src: string;

    // sizes
	export let size: 'extra-small' | 'kinda-small' | 'small' | 'medium' | 'large' | 'large-2' | 'extra-large';

    // circular
	export let circle = false;

    // manga
    export let long = false;

    // shadow
    export let shadow = true;

    // combine classes
	let className: string;
	$: className = classCombine([
		'avatar',
		circle && 'circular',
        long && 'long',
        shadow && 'shadow',
		size
	]);

	let img: HTMLImageElement;
	onMount(() => {
		if (img && img.naturalWidth) {
			const isPixelated = () => {
				if (img.naturalWidth < 96 && img.naturalWidth > 0)
					img.style.imageRendering = 'pixelated';
			}

			if (img.naturalWidth)
				isPixelated();
			else
				img.onload = isPixelated;
		}
	});
</script>

<!-- TODO: make src optional -->
<img {src} bind:this={img} class={className} alt="" />

<style>
    .avatar {
        width: var(--size);
        height: var(--size);
        background-color: var(--b4);
        object-fit: contain;
        border-radius: 30%;
    }

    /* sizes */
    .avatar.extra-small {
        --size: 48px;
    }
    .avatar.kinda-small {
        --size: 64px;
    }
    .avatar.small {
        --size: 80px;
    }
    .avatar.medium {
        --size: 96px;
    }
    .avatar.large {
        --size: 148px;
    }
    .avatar.large-2 {
        --size: 190px;
    }
    .avatar.extra-large {
        --size: 240px;
    }

    /* manga */
    .avatar.long {
        width: initial;
        aspect-ratio: 7 / 10; /* ref. 133x190 */
        object-fit: cover;
        border-radius: 5%;
    }

    /* circular */
    .avatar.circular {
        border-radius: 50%;
    }

    /* shadow */
    .avatar.shadow {
        box-shadow: var(--raise-0);
    }
</style>