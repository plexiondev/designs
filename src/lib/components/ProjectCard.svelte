<script lang="ts">
    import { classCombine } from '../utils/classCombine';

    import Avatar from './Avatar.svelte';
	import Badge from './Badge.svelte';

    // element
    export let href = '';

    export let icon = '';
    export let cover = '';
    export let name = '';
    export let bio = '';
    export let updated = '';
    export let loader: string | 'unknown' | 'event' | 'datapack' | 'resourcepack' | 'map' = 'unknown';

    // sizes
    export let size: 'default' | 'brick' | 'list' = 'default';

    // combine classes
    let className: string;
    $: className = classCombine([
        'project-card',
        size
    ]);
</script>

<a class={className} href={href}>
    {#if size == 'default'}
    <span class="cover">
        <img src={cover} alt="Project cover">
    </span>
    {/if}
    <span class="info">
        <span class="icon-cont">
            {#if size == 'default'}
            <Avatar size="small" src={icon} />
            {:else if size == 'list'}
            <Avatar size="medium" src={icon} />
            {:else}
            <Avatar size="extra-small" src={icon} shadow={false} />
            {/if}
        </span>
        <span class="info-cont">
            <h4>{name}</h4>
            {#if size != 'brick'}
            <p>{bio}</p>
            {/if}
            <div class="extra">
                <Badge style="loader" loader={loader} />
                {#if size != 'brick'}
                <p>{updated} (wip)</p>
                {/if}
            </div>
        </span>
    </span>
</a>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        background-color: var(--b4);
        box-shadow: var(--raise-0);
        border-radius: 10px;
        overflow: hidden;
        text-decoration: none;
        transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
    }
    .project-card:is(:hover, :focus) {
        background-color: var(--b3);
        box-shadow: var(--raise-1);
    }
    .project-card:active {
        transform: scale(0.985);
    }

    /* cover */
    .project-card .cover {
        max-width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--b4);
        max-height: 190px;
        border-radius: 10px;
        image-rendering: initial !important;
    }
    .project-card .cover img {
        aspect-ratio: 16 / 9;
        width: 100%;
        transition: 0.3s;
    }
    .project-card:is(:hover, :focus) .cover img {
        transform: scale(1.09);
        filter: brightness(110%);
    }

    /* info */
    .project-card > .info {
        padding: 15px; /* accomodate for date's absolute positioning */
        border-radius: 0 0 10px 10px;
        min-height: 110px;
    }
    .project-card > .info :is(h1, h2, h3, h4) {
        padding-top: 0;
        padding-bottom: 0;
    }
    .project-card > .info :is(.over, .overl) {
        padding: 0;
    }
    /* truncate (2 lines) */
    .project-card > .info :not(.extra) p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding-top: 3px;
        /* scuffed to make sure text is cut off */
        padding-bottom: 4px;
        margin-bottom: 1px;
    }

    /* icon */
    .project-card .icon-cont {
        display: block; /* for margin */
        position: relative;
        bottom: 54px;
        margin-bottom: -44px;
    }

    /* extra info */
    .project-card .extra {
        /*position: absolute;
        left: 15px;
        right: 15px;
        bottom: 15px;*/
        display: flex;
        gap: 12px;
    }
    .project-card .extra p {
        font-size: 14px;
        flex: 1;
        text-align: right;
    }

    /* tags */
    .tag.project_type {
        display: inline-flex;
        padding: 1px 10px !important;
        text-align: center;
        justify-content: center;
        align-items: center;
        min-width: 82px;
    }
    .tag.gsot {
        --tag-hue: #000000 !important;
        color: #FFFFFF !important;
    }

    /* list */
    .project-card.list > .info {
        display: flex;
        gap: 20px;
    }
    .project-card.list > .info .info-cont {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .project-card:is(.list, .brick) .icon-cont {
        position: static;
        margin-bottom: initial;
    }

    /* brick */
    .project-card.brick {
        transform: none !important;
        box-shadow: var(--raise-0) !important;
        background-color: var(--b3) !important;
        border-radius: 13px;
    }
    .project-card.brick .icon-cont {
        margin: -8px;
        height: 48px;
        border-radius: 13px;
    }
    .project-card.brick > .info {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 8px;
        min-height: initial;
    }
    .project-card.brick .extra {
        padding-right: 8px;
        align-items: center;
    }
    .project-card.brick > .info .info-cont {
        display: flex;
        width: 100%;
    }
    .project-card.brick h4 {
        flex: 1;
    }
</style>