<script lang="ts">
    export let value = 0;
    export let hover = false;
</script>

<div class="statistic" class:hover>
    <slot />
    {value}
</div>

<style>
    .statistic {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 7px 10px;
        border-radius: 10px;
        transition: background-color 0.2s, transform 0.2s;
    }

    .statistic.hover {
        cursor: pointer;
    }
    .statistic.hover:is(:hover, :focus-visible) {
        background-color: var(--b4);
    }
    .statistic.hover:active {
        transform: scale(0.97);
    }
</style>