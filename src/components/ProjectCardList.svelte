<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import type { Project } from './types';

    export let padding = false;

    export let projects: Project[] = [];
</script>

<div class="project-card-list" class:padding>
    {#each projects as project}
        <ProjectCard
        size="default"
        cover={project.cover}
        icon={project.icon}
        name={project.name}
        bio={project.bio}
        href={project.href}
        loader={project.loader}
        />
    {/each}
</div>

<style>
    .project-card-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
        gap: 15px;
    }
    .project-card-list.padding {
        padding: 20px;
    }
</style>