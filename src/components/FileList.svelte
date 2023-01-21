<script lang="ts">
    import File from './File.svelte';
    import type { File } from './types';

    export let value = [];
    export let files: File[] = [];

    const handleChange = (event: any, key: string | number) => {
		if (event.target.checked) {
			if (!value) value = []
			value = [key, ...value]
		} else {
			value = value.filter((it) => key !== it)
		}
	}
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