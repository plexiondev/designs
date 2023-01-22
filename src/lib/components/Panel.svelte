<script lang="ts">
    // libraryv2 essentially
    export let grid_container = false;
</script>

<section class="panel" class:grid_container>
    <slot />
</section>

<style>
    .panel {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 18px;
        border-radius: 10px;
        background-color: var(--b5);
        box-shadow: var(--raise-0);
    }

    .panel.grid_container {
        background-color: var(--b4);
    }
</style>