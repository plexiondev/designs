<script lang="ts">
    export let status: 'online' | 'away' | 'dnd' | 'offline' = 'online';
</script>

<div class="status-dot {status}"></div>

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
    .status-dot.offline { color: var(--text-main); }
</style>