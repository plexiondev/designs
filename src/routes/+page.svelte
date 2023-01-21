<script lang="ts">
    import Button from '../components/Button.svelte';
    import Avatar from '../components/Avatar.svelte';
	import Badge from '../components/Badge.svelte';
	import File from '../components/File.svelte';
    import FileList from '../components/FileList.svelte';
</script>

<center>
    <h2>designs</h2>
    <p><strong>ComponentName</strong> -> <strong>Style</strong></p>
</center>

<div class="big-grid">
    <span>
        <span>
            <h4>Button</h4>

            <h5>Default</h5>
            <div class="small-grid">
                <Button as="a" href="https://plexion.dev" size="small">Button</Button>
                <Button as="a" size="medium">Button</Button>
                <Button as="a" size="large">Button</Button>
                <Button as="a" size="hero">Button</Button>
            </div>

            <h5>Primary</h5>
            <div class="small-grid">
                <Button as="a" size="small" colour="primary">Button</Button>
                <Button as="a" size="medium" colour="primary">Button</Button>
                <Button as="a" size="large" colour="primary">Button</Button>
                <Button as="a" size="hero" colour="primary">Button</Button>
            </div>

            <h5>Danger</h5>
            <div class="small-grid">
                <Button as="a" size="small" colour="danger">Button</Button>
                <Button as="a" size="medium" colour="danger">Button</Button>
                <Button as="a" size="large" colour="danger">Button</Button>
                <Button as="a" size="hero" colour="danger">Button</Button>
            </div>

            <h5>Outline</h5>
            <div class="small-grid">
                <Button as="a" size="small" colour="outline">Button</Button>
                <Button as="a" size="medium" colour="outline">Button</Button>
                <Button as="a" size="large" colour="outline">Button</Button>
                <Button as="a" size="hero" colour="outline">Button</Button>
            </div>

            <h5>Shine</h5>
            <div class="small-grid">
                <Button as="a" shine>Button</Button>
                <Button as="a" shine colour="primary">Button</Button>
                <Button as="a" shine colour="danger">Button</Button>
                <Button as="a" shine colour="outline">Button</Button>
            </div>
        </span>
    </span>
    <span>
        <span>
            <h4>Avatar</h4>

            <h5>Default</h5>
            <div class="small-grid">
                <Avatar size="large" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="medium" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="small" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="extra-small" src="https://avatars.githubusercontent.com/u/46572320?v=4" />
            </div>

            <h5>Circular</h5>
            <div class="small-grid">
                <Avatar size="large" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="medium" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="small" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
                <Avatar size="extra-small" circle src="https://avatars.githubusercontent.com/u/46572320?v=4" />
            </div>

            <h5>Manga / Long</h5>
            <div class="small-grid">
                <Avatar size="extra-large" long src="https://plexion.s-ul.eu/Es5vvUXy" />
                <Avatar size="large-2" long src="https://plexion.s-ul.eu/Es5vvUXy" />
                <Avatar size="large" long src="https://plexion.s-ul.eu/Es5vvUXy" />
                <Avatar size="medium" long src="https://plexion.s-ul.eu/Es5vvUXy" />
            </div>
        </span>
    </span>
    <span>
        <span>
            <h4>Badge</h4>

            <h5>Default</h5>
            <div class="small-grid">
                <Badge label="Badge"></Badge>
                <Badge label="Badge" colour="red"></Badge>
                <Badge label="Badge" colour="orange"></Badge>
                <Badge label="Badge" colour="green"></Badge>
                <Badge label="Badge" colour="blue"></Badge>
            </div>

            <h5>Tag</h5>
            <div class="small-grid">
                <Badge style="tag" label="Badge"></Badge>
                <Badge style="tag" label="Badge" colour="red"></Badge>
                <Badge style="tag" label="Badge" colour="orange"></Badge>
                <Badge style="tag" label="Badge" colour="green"></Badge>
                <Badge style="tag" label="Badge" colour="blue"></Badge>
            </div>
        </span>
        <span>
            <h4>File</h4>

            <h5>Default</h5>
            <div class="small-grid">
                <File filename="Playtime-Tracker.zip" indicator="yeah" download="https://github.com/plex1on/playtime-tracker/releases/latest/download/playtime-tracker.zip" />
            </div>

            <h5>Primary</h5>
            <div class="small-grid">
                <File filename="Playtime-Tracker.zip" primary download="https://github.com/plex1on/playtime-tracker/releases/latest/download/playtime-tracker.zip" />
            </div>
        </span>
        <span>
            <h4>FileList</h4>

            <h5>Default</h5>
            <div class="small-grid">
                <FileList
                files={[
                    {
                        filename: 'Playtime-Tracker.zip',
                        indicator: 'yeah',
                        download: 'https://github.com/plex1on/playtime-tracker/releases/latest/download/playtime-tracker.zip',
                        primary: false
                    },
                    {
                        filename: 'Playtime-Tracker.zip',
                        indicator: 'yeah',
                        download: 'https://github.com/plex1on/playtime-tracker/releases/latest/download/playtime-tracker.zip',
                        primary: true
                    }
                ]}
                />
            </div>
        </span>
    </span>
</div>

<style>
    center {
        margin: 20px 0 10px;
    }

    .big-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        padding: 0 20px;
        gap: 20px 0;
    }
    .big-grid span {
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