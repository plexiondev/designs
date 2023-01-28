<script lang="ts">
    export let label = '';
    export let value = '';
</script>

<dl>
    <dt>{label}</dt>
    <dd>{value}</dd>
</dl>

<style>
    dl {
        display: flex;
    }

    dt {
        min-width: 120px;
        color: var(--text-alt);
    }
    dd {
        flex: 1;
        text-align: right;
    }
</style>