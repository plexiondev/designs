<script lang="ts">
    export let label = '';
    export let colour = 'default';
</script>

<div class="badge {colour}">
    {label}
</div>

<style>
    .badge {
        display: inline-flex;
        align-items: center;
        font-weight: 500;
    }
    .badge:before {
        content: '';
        display: inline-flex;
        background-color: currentColor;
        width: 7px;
        height: 7px;
        border-radius: 50px;
        margin-right: 5px;
    }

    .badge.green { color: var(--green); }
    .badge.red   { color: var(--red);   }
</style>