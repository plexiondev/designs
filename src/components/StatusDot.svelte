<script lang="ts">
    export let status: 'online' | 'away' | 'dnd' | 'offline' = 'online';
    import status_match from '$generated/status.json';

    import { tippy } from 'svelte-tippy';
    import 'tippy.js/dist/tippy.css';
</script>

<div class="status-dot {status}" use:tippy={{content: status_match[status], arrow: false}}></div>

<style>
    .status-dot {
        display: block;
        width: 14px;
        aspect-ratio: 1 / 1;
        border: 4px solid currentColor;
        border-radius: 50%;
    }

    .status-dot.online  { color: var(--green);     }
    .status-dot.away    { color: var(--orange);    }
    .status-dot.dnd     { color: var(--red);       }
    .status-dot.offline { color: var(--text-alt);  }
</style>