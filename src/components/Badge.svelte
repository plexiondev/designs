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
        margin-right: 7px;
    }

    .badge.red    { color: var(--red);    }
    .badge.orange { color: var(--orange); }
    .badge.green  { color: var(--green);  }
    .badge.blue   { color: var(--blue);   }
</style>