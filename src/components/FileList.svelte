<script lang="ts">
    import File from './File.svelte';
    import type { FileType } from './types';

    export let files: File[] = [];
</script>

<div class="file-list">
    {#each files as file}
        <File filename={file.filename} indicator={file.indicator} primary={file.primary} download={file.download} />
    {/each}
</div>

<style>
    .file-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 5px;
    }
</style>