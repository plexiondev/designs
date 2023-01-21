<script lang="ts">
    import Button from '../components/Button.svelte';
    import Avatar from '../components/Avatar.svelte';
	import Badge from '../components/Badge.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="big-grid">
    <span>
        <span>
            <h3>Buttons</h3>

            <h4>Default</h4>
            <div class="small-grid">
                <Button as="a" href="https://plexion.dev" size="small">Button</Button>
                <Button as="a" size="medium">Button</Button>
                <Button as="a" size="large">Button</Button>
                <Button as="a" size="hero">Button</Button>
            </div>

            <h4>Primary</h4>
            <div class="small-grid">
                <Button as="a" size="small" colour="primary">Button</Button>
                <Button as="a" size="medium" colour="primary">Button</Button>
                <Button as="a" size="large" colour="primary">Button</Button>
                <Button as="a" size="hero" colour="primary">Button</Button>
            </div>

            <h4>Danger</h4>
            <div class="small-grid">
                <Button as="a" size="small" colour="danger">Button</Button>
                <Button as="a" size="medium" colour="danger">Button</Button>
                <Button as="a" size="large" colour="danger">Button</Button>
                <Button as="a" size="hero" colour="danger">Button</Button>
            </div>

            <h4>Outline</h4>
            <div class="small-grid">
                <Button as="a" size="small" colour="outline">Button</Button>
                <Button as="a" size="medium" colour="outline">Button</Button>
                <Button as="a" size="large" colour="outline">Button</Button>
                <Button as="a" size="hero" colour="outline">Button</Button>
            </div>
        </span>
    </span>
    <span>
        <span>
            <h3>Avatar</h3>

            <h4>Default</h4>
            <div class="small-grid">
                <Avatar size="large" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="medium" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="small" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="extra-small" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
            </div>

            <h4>Circular</h4>
            <div class="small-grid">
                <Avatar size="large" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="medium" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="small" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="extra-small" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
            </div>
        </span>
    </span>
    <span>
        <span>
            <h3>Badge</h3>

            <div class="small-grid">
                <Badge label="Badge"></Badge>
                <Badge label="Badge" colour="green"></Badge>
                <Badge label="Badge" colour="red"></Badge>
            </div>
        </span>
    </span>
</div>

<style>
    .big-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        padding: 0 20px;
        gap: 20px 0;
    }
    .big-grid > span {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .small-grid {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>