<div class="panel-container">
    <slot />
</div>

<style>
    .panel-container {
        display: flex;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: var(--b5);
        box-shadow: var(--raise-1);
        max-width: var(--panel);
        width: 100%;
        z-index: 25;
    }
</style>