<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { classCombine } from '../utils/classCombine';

    import Avatar from './Avatar.svelte';
	import StatusDot from './StatusDot.svelte';

    // element
    export let href = '';

    export let avatar = '';
    export let name = '';

    // sizes
    export let size: 'default' | 'list' | 'brick' | 'brick-min' | 'forum' = 'default';

    // disabled
    export let disabled = false;

    // bottom row
    export let extra_info = false;
    export let status: 'online' | 'away' | 'dnd' | 'offline' = 'online';

    // combine classes
    let className: string;
    $: className = classCombine([
        'avatar-card',
        size,
        extra_info && 'extra-info'
    ]);

    const dispatch = createEventDispatcher();

    function dispatchClick() {
        if (!disabled) dispatch('click');
    }
</script>

<a class={className} {href} on:click={dispatchClick}>
    <span class="top">
        <span class="icon">
            <Avatar size="kinda-small" src="{avatar}" shadow={false} />
        </span>
        <span class="info">
            <strong>{name}</strong>
        </span>
    </span>
    <span class="bottom">
        <span class="icon">
            <StatusDot status={status} />
        </span>
        <span class="info">
            <strong>Online</strong>
        </span>
    </span>
</a>

<style>
    .avatar-card {
        display: flex;
        flex-direction: column;
        background-color: var(--b4);
        border-radius: 13px;
        text-decoration: none;
    }

    .avatar-card .top {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 8px;
        border-radius: 13px;
        background-color: var(--b3);
    }
    .avatar-card .bottom {
        display: flex;
        gap: 16px;
        padding: 8px;
    }

    /* avatar */
    .avatar-card .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -8px -8px -10px;
        border-radius: 13px;
        width: 64px;
    }
</style>