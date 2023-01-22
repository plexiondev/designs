<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Avatar from '$lib/components/Avatar.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import File from '$lib/components/File.svelte';
    import FileList from '$lib/components/FileList.svelte';

    import { DownloadIcon, HeartIcon, MoreHorizontalIcon } from 'lucide-svelte';
	import AvatarCard from '$lib/components/AvatarCard.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
	import StatusDot from '$lib/components/StatusDot.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import RatingSpread from '$lib/components/RatingSpread.svelte';
	import InfoRow from '$lib/components/InfoRow.svelte';
	import InfoColumn from '$lib/components/InfoColumn.svelte';
	import StatisticItem from '$lib/components/StatisticItem.svelte';
	import Panel from '$lib/components/Panel.svelte';
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

            <h5>Icon Buttons</h5>
            <div class="small-grid">
                <Button as="a" size="medium" colour="primary"><DownloadIcon />Download</Button>
                <Button as="a" size="medium"><HeartIcon />Follow</Button>
                <Button as="a" size="medium"><MoreHorizontalIcon /></Button>
            </div>
        </span>
        <span>
            <h4>ProjectCard</h4>

            <h5>Default</h5>
            <ProjectCard
            size="default"
            cover="https://avatars.githubusercontent.com/u/46572320?v=4"
            icon="https://avatars.githubusercontent.com/u/46572320?v=4"
            name="flyte"
            bio="This is just a sample test description to fill up the space of 2 lines (hopefullyyyyyyyyyyyyyyyy)."
            href="https://osu.ppy.sh/u/flyte"
            loader="datapack"
            />

            <h5>List</h5>
            <ProjectCard
            size="list"
            cover="https://avatars.githubusercontent.com/u/46572320?v=4"
            icon="https://avatars.githubusercontent.com/u/46572320?v=4"
            name="flyte"
            bio="This is just a sample test description to fill up the space of 2 lines (hopefullyyyyyyyyyyyyyyyy)."
            href="https://osu.ppy.sh/u/flyte"
            loader="datapack"
            />

            <h5>Brick</h5>
            <ProjectCard
            size="brick"
            cover="https://avatars.githubusercontent.com/u/46572320?v=4"
            icon="https://avatars.githubusercontent.com/u/46572320?v=4"
            name="flyte"
            bio="This is just a sample test description to fill up the space of 2 lines (hopefullyyyyyyyyyyyyyyyy)."
            href="https://osu.ppy.sh/u/flyte"
            loader="datapack"
            />
        </span>
        <span>
            <h4>ProgressBar</h4>

            <h5>Default</h5>
            <ProgressBar current={75} maximum={100} />

            <h5>Rating1</h5>
            <ProgressBar style="rating1" current={85} maximum={100} />

            <h5>Rating2</h5>
            <ProgressBar style="rating2" current={93} maximum={100} />
        </span>
        <span>
            <h4>RatingSpread</h4>

            <h5>Default</h5>
            <RatingSpread maximum={60} ratings={[
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 4 },
                { value: 4 },
                { value: 10 },
                { value: 20 },
                { value: 35 },
                { value: 19 }
            ]}
            />
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
        <span>
            <h4>AvatarCard</h4>

            <h5>Default</h5>
            <AvatarCard
            avatar="https://avatars.githubusercontent.com/u/46572320?v=4"
            name="plexion"
            href="https://github.com/plexiondev"
            status="online"
            roles={['member','dev','cool']}
            />
            <AvatarCard
            avatar="https://a.ppy.sh/15364179?1674304618.jpeg"
            name="plexion"
            href="https://osu.ppy.sh/u/plexion"
            status="away"
            roles={['member','supporter']}
            />
            <AvatarCard
            avatar="https://a.ppy.sh/1040328?1658716691.png"
            name="smoogipoo"
            href="https://osu.ppy.sh/u/smoogipoo"
            status="dnd"
            roles={['member']}
            />
            <AvatarCard
            avatar="https://a.ppy.sh/3103765?1570514091.jpeg"
            name="flyte"
            href="https://osu.ppy.sh/u/flyte"
            status="offline"
            roles={['member','supporter']}
            />

            <h5>List</h5>
            <AvatarCard
            size="list"
            avatar="https://avatars.githubusercontent.com/u/46572320?v=4"
            name="plexion"
            href="https://github.com/plexiondev"
            status="online"
            roles={['member','dev','cool']}
            />
            <AvatarCard
            size="list"
            avatar="https://a.ppy.sh/15364179?1674304618.jpeg"
            name="plexion"
            href="https://osu.ppy.sh/u/plexion"
            status="away"
            roles={['member','supporter']}
            />
            <AvatarCard
            size="list"
            avatar="https://a.ppy.sh/1040328?1658716691.png"
            name="smoogipoo"
            href="https://osu.ppy.sh/u/smoogipoo"
            status="dnd"
            roles={['member']}
            />
            <AvatarCard
            size="list"
            avatar="https://a.ppy.sh/3103765?1570514091.jpeg"
            name="flyte"
            href="https://osu.ppy.sh/u/flyte"
            status="offline"
            roles={['member','supporter']}
            />

            <h5>Brick</h5>
            <AvatarCard
            size="brick"
            avatar="https://avatars.githubusercontent.com/u/46572320?v=4"
            name="plexion"
            href="https://github.com/plexiondev"
            status="online"
            roles={['member','dev','cool']}
            />
            <AvatarCard
            size="brick"
            avatar="https://a.ppy.sh/15364179?1674304618.jpeg"
            name="plexion"
            href="https://osu.ppy.sh/u/plexion"
            status="away"
            roles={['member','supporter']}
            />
            <AvatarCard
            size="brick"
            avatar="https://a.ppy.sh/1040328?1658716691.png"
            name="smoogipoo"
            href="https://osu.ppy.sh/u/smoogipoo"
            status="dnd"
            roles={['member']}
            />
            <AvatarCard
            size="brick"
            avatar="https://a.ppy.sh/3103765?1570514091.jpeg"
            name="flyte"
            href="https://osu.ppy.sh/u/flyte"
            status="offline"
            roles={['member','supporter']}
            />
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
                <Badge label="Badge" colour="magenta"></Badge>
                <Badge label="Badge" colour="pink"></Badge>
            </div>

            <h5>Tag</h5>
            <div class="small-grid">
                <Badge style="tag" label="Badge"></Badge>
                <Badge style="tag" label="Badge" colour="red"></Badge>
                <Badge style="tag" label="Badge" colour="orange"></Badge>
                <Badge style="tag" label="Badge" colour="green"></Badge>
                <Badge style="tag" label="Badge" colour="blue"></Badge>
                <Badge style="tag" label="Badge" colour="magenta"></Badge>
                <Badge style="tag" label="Badge" colour="pink"></Badge>
            </div>

            <h5>Tag-Mono</h5>
            <div class="small-grid">
                <Badge style="tag-mono" label="Badge"></Badge>
                <Badge style="tag-mono" label="Badge" colour="red"></Badge>
                <Badge style="tag-mono" label="Badge" colour="orange"></Badge>
                <Badge style="tag-mono" label="Badge" colour="green"></Badge>
                <Badge style="tag-mono" label="Badge" colour="blue"></Badge>
                <Badge style="tag-mono" label="Badge" colour="magenta"></Badge>
                <Badge style="tag-mono" label="Badge" colour="pink"></Badge>
            </div>

            <h5>Loader</h5>
            <div class="small-grid">
                <Badge style="loader" loader="datapack"></Badge>
                <Badge style="loader" loader="minecraft"></Badge>
                <Badge style="loader" loader="fabric"></Badge>
                <Badge style="loader" loader="forge"></Badge>
                <Badge style="loader" loader="quilt"></Badge>
            </div>
        </span>
        <span>
            <h4>StatusDot</h4>

            <h5>Default (online / away / dnd / offline)</h5>
            <div class="small-grid">
                <StatusDot status="online" />
                <StatusDot status="away" />
                <StatusDot status="dnd" />
                <StatusDot status="offline" />
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
        <span>
            <h4>InfoRow</h4>

            <h5>Default</h5>
            <InfoRow label="Label" value="Value" />
        </span>
        <span>
            <h4>InfoColumn</h4>

            <h5>Default</h5>
            <InfoColumn>
                <InfoRow label="Label" value="Value" />
                <InfoRow label="Label" value="Value" />
                <InfoRow label="Label" value="Value" />
            </InfoColumn>
        </span>
        <span>
            <h4>StatisticItem</h4>

            <h5>Default</h5>
            <div class="small-grid">
                <StatisticItem value={500}><DownloadIcon /></StatisticItem>
                <StatisticItem value={300}><HeartIcon /></StatisticItem>
            </div>

            <h5>Hover</h5>
            <div class="small-grid">
                <StatisticItem hover value={500}><DownloadIcon /></StatisticItem>
                <StatisticItem hover value={300}><HeartIcon /></StatisticItem>
            </div>
        </span>
        <span>
            <h4>Panel</h4>
            <p>Can be placed inside a <strong>PanelContainer</strong> when passing <strong>GridContainer</strong>.</p>

            <h5>Default</h5>
            <Panel>
                <p>hi</p>
            </Panel>

            <h5>GridContainer</h5>
            <Panel grid_container>
                <p>hi</p>
            </Panel>
            <Panel grid_container>
                <h5 class="text-17">Members</h5>
                <AvatarCard
                size="list"
                avatar="https://avatars.githubusercontent.com/u/46572320?v=4"
                name="plexion"
                href="https://github.com/plexiondev"
                member_type="owner"
                />
                <AvatarCard
                size="list"
                avatar="https://a.ppy.sh/15364179?1674304618.jpeg"
                name="plexion"
                href="https://osu.ppy.sh/u/plexion"
                member_type="owner"
                />
                <AvatarCard
                size="list"
                avatar="https://a.ppy.sh/1040328?1658716691.png"
                name="smoogipoo"
                href="https://osu.ppy.sh/u/smoogipoo"
                member_type="contributor"
                />
                <AvatarCard
                size="list"
                avatar="https://a.ppy.sh/3103765?1570514091.jpeg"
                name="flyte"
                href="https://osu.ppy.sh/u/flyte"
                member_type="contributor"
                />
            </Panel>
        </span>
    </span>
</div>

<style>
    center {
        margin: 20px 0 10px;
    }

    .big-grid {
        background-color: var(--b5);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        padding: 20px;
        gap: 20px;
        margin-bottom: 200px;
    }
    .big-grid > span {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .big-grid > span > span {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 40px;
        border-bottom: 1px solid var(--b3);
    }

    .small-grid {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>