<script lang="ts">
    import Button from '../components/Button.svelte';
    import Avatar from '../components/Avatar.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="big-grid">
    <span>
        <h3>Buttons</h3>

        <h4>Default</h4>
        <Button as="a" href="https://plexion.dev" size="small">Button</Button>
        <Button as="a" size="medium">Button</Button>
        <Button as="a" size="large">Button</Button>
        <Button as="a" size="hero">Button</Button>

        <h4>Primary</h4>
        <Button as="a" size="small" colour="primary">Button</Button>
        <Button as="a" size="medium" colour="primary">Button</Button>
        <Button as="a" size="large" colour="primary">Button</Button>
        <Button as="a" size="hero" colour="primary">Button</Button>

        <h4>Danger</h4>
        <Button as="a" size="small" colour="danger">Button</Button>
        <Button as="a" size="medium" colour="danger">Button</Button>
        <Button as="a" size="large" colour="danger">Button</Button>
        <Button as="a" size="hero" colour="danger">Button</Button>

        <h4>Outline</h4>
        <Button as="a" size="small" colour="outline">Button</Button>
        <Button as="a" size="medium" colour="outline">Button</Button>
        <Button as="a" size="large" colour="outline">Button</Button>
        <Button as="a" size="hero" colour="outline">Button</Button>
    </span>
    <span>
        <h3>Avatar</h3>

        <h4>Default</h4>
        <Avatar size="large" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
        <Avatar size="medium" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
        <Avatar size="small" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
        <Avatar size="extra-small" src="https://avatars.githubusercontent.com/u/46572320?v=4" />

        <h4>Circular</h4>
        <Avatar size="large" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
        <Avatar size="medium" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
        <Avatar size="small" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
        <Avatar size="extra-small" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
    </span>
</div>

<style>
    .big-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        padding: 0 20px;
        gap: 20px;
    }
</style>