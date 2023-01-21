<script lang="ts">
    import Button from '../components/Button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

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
