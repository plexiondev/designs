<script lang="ts">
	import { onMount } from 'svelte';
	import { classCombine } from '../utils/classCombine';

    // image source
	export let src: string;

    // sizes
	export let size: 'extra-small' | 'small' | 'medium' | 'large';

    // circular
	export let circle = false;

    // combine classes
	let className: string;
	$: className = classCombine([
		'avatar',
		circle && 'circular',
		size
	]);

	let img: HTMLImageElement;
	onMount(() => {
		if (img && img.naturalWidth) {
			const isPixelated = () => {
				if (img.naturalWidth < 96 && img.naturalWidth > 0) {
					img.style.imageRendering = 'pixelated'
				}
			}
			if (img.naturalWidth) {
				isPixelated()
			} else {
				img.onload = isPixelated
			}
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
        border-radius: 5%;
    }

    /* sizes */
    .avatar.extra-small {
        --size: 48px;
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

    /* circular */
    .avatar.circular {
        border-radius: 50%;
    }
</style>