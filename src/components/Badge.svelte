<script lang="ts">
    import loader_match from '$generated/loaders.json';

    export let label = '';
    export let colour = 'default';
    export let style: 'badge' | 'tag' | 'tag-mono' | 'loader' = 'badge';

    // loader only
    export let loader: string = '';
</script>

{#if style === 'loader'}
<div class="loader {loader}">
    <span class="icon">

    </span>
    <span class="info">
        {loader_match[loader].name}
    </span>
</div>
{:else}
<div class="{style} {colour}">
    {label}
</div>
{/if}

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

    :is(.badge, .tag-mono).red     { color: var(--red);     }
    :is(.badge, .tag-mono).orange  { color: var(--orange);  }
    :is(.badge, .tag-mono).green   { color: var(--green);   }
    :is(.badge, .tag-mono).blue    { color: var(--blue);    }
    :is(.badge, .tag-mono).magenta { color: var(--magenta); }

    .tag, .tag-mono {
        background-color: var(--text-main);
        color: rgba(0,0,0,90%);
        padding: 0 12px;
        line-height: 19px;
        border-radius: 50px;
        font-size: 12px;
        font-weight: 600;
    }

    .tag.red     { background-color: var(--red);     }
    .tag.orange  { background-color: var(--orange);  }
    .tag.green   { background-color: var(--green);   }
    .tag.blue    { background-color: var(--blue);    }
    .tag.magenta { background-color: var(--magenta); }

    .tag-mono {
        background-color: rgba(0,0,0,90%);
        color: var(--c1);
    }

    .loader {
        display: flex;
        gap: 5px;
        line-height: 20px;
        font-weight: 500;
        color: var(--text-main);
    }

    .loader.extra .info {
        display: none;
    }
</style>