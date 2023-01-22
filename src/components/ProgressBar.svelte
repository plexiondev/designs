<script lang="ts">
    export let maximum = 100;
    export let current = 75;

    export let style: string | 'default' | 'rating1' | 'rating2' = 'default';

    let progress = (current / maximum) * 100;
</script>

<div class="progress-bar {style}">
    <span class="progress" style="width: {progress}%" />
</div>

<style>
    .progress-bar {
        --height: 6px;
        display: flex;
        background-color: var(--b6);
        width: 100%;
        height: var(--height);
        border-radius: 10px;
    }
    .progress-bar .progress {
        background-color: var(--l2);
        display: block;
        height: var(--height);
        border-radius: 10px;
    }

    /* rating1 */
    .progress-bar:is(.rating1, .rating2) {
        background-color: var(--red);
    }
    .progress-bar:is(.rating1, .rating2) .progress {
        background-color: var(--green);
    }

    /* rating2 */
    .progress-bar.rating2 {
        justify-content: right;
    }
</style>