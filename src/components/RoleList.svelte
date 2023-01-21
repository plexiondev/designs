<script lang="ts">
    import Badge from './Badge.svelte';
    import type { Role } from './types';

    export let roles: Role[] = [];
</script>

{#each roles as role}
    <Badge
    style="tag-mono"
    colour="red"
    label={role.id}
    />
{/each}