<script lang="ts">
    import Badge from './Badge.svelte';
    import type { Role } from './types';
    import role_match from '$generated/roles.json';

    // acronym roles
    export let acronym = false;

    export let roles: Role[] = [];
</script>

<div class="role-list">
{#each roles as role}
    <Badge
    style="tag-mono"
    colour={role_match[role].colour}
    label={(acronym) ? role_match[role].acronym : role_match[role].name}
    full_label={role_match[role].name}
    />
{/each}
</div>

<style>
    .role-list {
        display: flex;
        gap: 6px;
    }
</style>