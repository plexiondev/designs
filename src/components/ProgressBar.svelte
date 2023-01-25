<script lang="ts">
    export let maximum = 100;
    export let current = 75;

    export let title = 'Value'; // tooltip title

    import { tippy } from 'svelte-tippy';
    import 'tippy.js/dist/tippy.css';

    export let style: string | 'default' | 'rating1' | 'rating2' = 'default';

    let progress = (current / maximum) * 100;
</script>

<div class="progress-bar {style}">
    <span class="progress" style="width: {progress}%" use:tippy={{content: `<strong>${title}</strong> ${current}`, arrow: false, allowHTML: true}} />
</div>

<style>
    .progress-bar {
        --height: 8px;
        display: flex;
        background-color: var(--b6);
        width: 100%;
        height: var(--height);
        border-radius: 10px;
    }
    .progress-bar .progress {
        --background: var(--l2);
        background-color: var(--background);
        display: block;
        height: var(--height);
        border-radius: 10px;
        transition: box-shadow 0.15s;
    }
    .progress-bar .progress:hover {
        box-shadow: 0px 0px 6px 0px var(--background);
    }

    /* rating1 */
    .progress-bar:is(.rating1, .rating2) {
        background-color: var(--red);
    }
    .progress-bar:is(.rating1, .rating2) .progress {
        --background: var(--green);
    }

    /* rating2 */
    .progress-bar.rating2 {
        justify-content: right;
    }
</style>