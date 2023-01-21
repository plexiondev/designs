<script lang="ts">
    import { classCombine } from '../utils/classCombine';
    import Button from './Button.svelte';

    import { FileIcon } from 'lucide-svelte';

    export let filename = '';
    export let indicator = '';

    export let download = '';
    export let primary = false;

    if (primary) indicator = 'Primary';

    // combine classes
	let className: string;
	$: className = classCombine([
		'file',
		primary && 'primary'
	]);
</script>

<div class={className}>
    <span class="icon">
        <FileIcon size={20} strokeWidth={2.3} />
    </span>
    <span class="info">
        <strong>{filename}</strong>
        <i class="indicator">{indicator}</i>
    </span>
    <span class="action">
        <Button as="a" href="{download}" size="small">Download</Button>
    </span>
</div>

<style>
    .file {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 14px;
        border-radius: 7px;
        background-color: var(--b3);
        margin: 0;
    }
    .file.primary {
        background-color: var(--l5);
    }
    .file:before {
        display: none !important;
    }

    /* icon */
    .file .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* info */
    .file:not(.primary) strong {
        color: var(--text-main);
    }
    .file .info {
        display: flex;
        gap: 10px;
        color: var(--text-alt);
    }
    .file.primary .info {
        color: var(--text-main);
    }
    .file .info .indicator {
        font-style: initial;
    }

    /* action */
    .file .action {
        display: flex;
        justify-content: right;
        flex: 1;
    }

    @media (max-width: 460px) {
        .file {
            padding-top: 12px;
            padding-bottom: 12px;
            position: relative;
        }
        .file {
            flex-direction: column;
            text-align: center;
        }

        /* icon */
        .file .icon {
            position: absolute;
            top: 20px;
            left: 10px;
        }

        /* info */
        .file .info {
            flex-direction: column;
            gap: 0;
        }

        /* action */
        .file .action {
            width: 100%;
            display: block;
        }
        .file .action .button {
            margin: 0 !important;
        }
    }
</style>