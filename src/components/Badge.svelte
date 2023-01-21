<script lang="ts">
    export let label = '';
    export let colour = 'default';
    export let style: 'badge' | 'tag' = 'badge';
</script>

<div class="{style} {colour}">
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

    .tag {
        background-color: var(--text-main);
        color: rgba(0,0,0,90%);
        padding: 0 12px;
        line-height: 19px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 700;
    }

    .tag.red    { background-color: var(--red);    }
    .tag.orange { background-color: var(--orange); }
    .tag.green  { background-color: var(--green);  }
    .tag.blue   { background-color: var(--blue);   }
</style>