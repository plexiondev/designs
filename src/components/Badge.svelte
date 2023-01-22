<script lang="ts">
    import loader_match from '$generated/loaders.json';

    import { TrophyIcon, BoxIcon, BrushIcon, GlobeIcon, ScrollIcon } from 'lucide-svelte';

    export let label = '';
    export let colour = 'default';
    export let style: 'badge' | 'tag' | 'tag-mono' | 'loader' = 'badge';

    // loader only
    export let loader: string = '';
</script>

{#if style === 'loader'}
<div class="loader {loader}">
    <span class="icon">
        {#if loader == 'datapack' || loader == 'minecraft'}
        <BoxIcon />
        {:else if loader == 'event'}
        <TrophyIcon />
        {:else if loader == 'resourcepack'}
        <BrushIcon />
        {:else if loader == 'map'}
        <GlobeIcon />
        {:else if loader == 'fabric'}
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="none" stroke="currentColor" stroke-width="23" d="m820 761-85.6-87.6c-4.6-4.7-10.4-9.6-25.9 1-19.9 13.6-8.4 21.9-5.2 25.4 8.2 9 84.1 89 97.2 104 2.5 2.8-20.3-22.5-6.5-39.7 5.4-7 18-12 26-3 6.5 7.3 10.7 18-3.4 29.7-24.7 20.4-102 82.4-127 103-12.5 10.3-28.5 2.3-35.8-6-7.5-8.9-30.6-34.6-51.3-58.2-5.5-6.3-4.1-19.6 2.3-25 35-30.3 91.9-73.8 111.9-90.8" transform="matrix(.08671 0 0 .0867 -49.8 -56)"></path>
        </svg>
        {:else if loader == 'forge'}
        <svg xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="none" stroke="currentColor" stroke-width="2" d="M2 7.5h8v-2h12v2s-7 3.4-7 6 3.1 3.1 3.1 3.1l.9 3.9H5l1-4.1s3.8.1 4-2.9c.2-2.7-6.5-.7-8-6Z"></path>
        </svg>
        {:else if loader == 'quilt'}
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24">
            <defs>
                <path id="quilt" fill="none" stroke="currentColor" stroke-width="65.6" d="M442.5 233.9c0-6.4-5.2-11.6-11.6-11.6h-197c-6.4 0-11.6 5.2-11.6 11.6v197c0 6.4 5.2 11.6 11.6 11.6h197c6.4 0 11.6-5.2 11.6-11.7v-197Z"></path>
            </defs>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 -3.2)"></use>
            <use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 -3.2 7)"></use>
            <use xlink:href="#quilt" stroke-width="65.6" transform="matrix(.03053 0 0 .03046 6.9 -3.2)"></use>
            <path fill="none" stroke="currentColor" stroke-width="70.4" d="M442.5 234.8c0-7-5.6-12.5-12.5-12.5H234.7c-6.8 0-12.4 5.6-12.4 12.5V430c0 6.9 5.6 12.5 12.4 12.5H430c6.9 0 12.5-5.6 12.5-12.5V234.8Z" transform="rotate(45 3.5 24) scale(.02843 .02835)"></path>
        </svg>
        {:else}
        ?
        {/if}
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
    :is(.badge, .tag-mono).pink    { color: var(--pink);    }

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
    .tag.pink    { background-color: var(--pink);    }

    .tag-mono {
        background-color: rgba(0,0,0,90%);
        color: var(--text-main);
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