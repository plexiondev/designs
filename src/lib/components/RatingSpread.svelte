<script lang="ts">
    import type { Rating } from './types';

    export let maximum = 100;
    export let ratings: Rating[] = [];

    for (let rating in ratings)
        ratings[rating].progress = (ratings[rating].value / maximum) * 100;
</script>

<div class="rating-spread">
    {#each ratings as rating}
    <span class="rating" style="height: {rating.progress}%" />
    {/each}
</div>

<style>
    .rating-spread {
        display: flex;
        justify-content: space-evenly;
        align-items: end;
        gap: 2px;
        height: 60px;
        /* TODO: fix gradient */
        mask-image: linear-gradient(90deg, var(--red) 0%, var(--green) 100%);
    }
    .rating-spread .rating {
        display: block;
        width: 100%;
        background-color: var(--green);
        border-radius: 2px;
    }
</style>