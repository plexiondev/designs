<script lang="ts">
    import Badge from './Badge.svelte';
    import type { Role } from './types';
    import role_match from '$generated/roles.json';

    export let roles: Role[] = [];
</script>

<div class="role-list">
    {#each roles as role}
    <Badge
    style="tag-mono"
    colour={role_match[role].colour}
    label={role_match[role].name}
    />
{/each}
</div>

<style>
    .role-list {
        display: flex;
        gap: 6px;
    }
</style>