<script lang="ts">
    import { classCombine } from '../utils/classCombine';

    import Avatar from './Avatar.svelte';
	import StatusDot from './StatusDot.svelte';
    import RoleList from './RoleList.svelte';
    import status_match from '$generated/status.json';
    import role_match from '$generated/roles.json';
    import type { Role } from './types';

    export let roles: Role[] = [];

    // element
    export let href = '';

    export let avatar = '';
    export let name = '';

    // sizes
    export let size: 'default' | 'list' | 'brick' | 'forum' = 'default';

    // bottom row
    export let extra_info = false;
    export let status: '' | 'online' | 'away' | 'dnd' | 'offline' = '';
    // alternative to status
    export let member_type = '';

    // combine classes
    let className: string;
    $: className = classCombine([
        'avatar-card',
        size,
        extra_info && 'extra-info'
    ]);
</script>

<a class={className} {href}>
    <span class="top">
        <span class="icon">
            {#if size == 'list' || size == 'brick'}
            <Avatar size="extra-small" src="{avatar}" shadow={false} />
            {:else}
            <Avatar size="kinda-small" src="{avatar}" shadow={false} />
            {/if}
        </span>
        <span class="info">
            <span class="base">
                <span class="inner">
                    <strong>{name}</strong>
                </span>
                <span class="inner">
                    {#if size == 'list'}
                    <RoleList acronym={true} roles={roles} />
                    {:else if size != 'brick'}
                    <RoleList roles={roles} />
                    {/if}
                </span>
            </span>
        </span>
    </span>
    <span class="bottom">
        {#if status != ''}
        <span class="icon">
            <StatusDot status={status} />
        </span>
        <span class="info">
            <strong>{status_match[status]}</strong>
        </span>
        {:else}
        <span class="info member">
            <strong>{role_match[member_type].name}</strong>
        </span>
        {/if}
    </span>
</a>

<style>
    .avatar-card {
        display: flex;
        flex-direction: column;
        background-color: var(--b3);
        box-shadow: var(--raise-0);
        border-radius: 13px;
        text-decoration: none;
        --gap: 20px;
    }

    .avatar-card .top {
        display: flex;
        align-items: center;
        gap: var(--gap);
        padding: 8px;
        border-radius: 13px;
        background-color: var(--b4);
    }
    .avatar-card .bottom {
        display: flex;
        align-items: center;
        line-height: 14px;
        gap: var(--gap);
        padding: 8px;
        font-size: 14px;
    }

    .avatar-card .base {
        display: flex;
        flex-direction: column;
        gap: calc(var(--gap) / 3);
    }
    .avatar-card .base .inner {
        display: flex;
        gap: calc(var(--gap) / 2);
    }

    /* avatar */
    .avatar-card .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -8px;
        border-radius: 13px;
    }
    .avatar-card:not(:is(.list, .brick)) .icon {
        width: 64px;
    }

    /* list */
    .avatar-card:is(.list, .brick), .avatar-card.list .base {
        flex-direction: row;
    }
    .avatar-card:is(.list, .brick) .top {
        background-color: transparent;
        flex: 1;
    }
    .avatar-card.list .bottom .icon {
        order: 1;
        margin-right: 8px;
    }

    .avatar-card:is(.list, .brick) .bottom .info.member {
        margin-right: 8px;
    }

    /* brick */
    .avatar-card.brick :is(.bottom, .top .info .inner:nth-child(2)) {
        display: none;
    }
</style>