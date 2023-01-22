import type { SvelteComponentDev } from 'svelte/internal';

export interface Option {
	label: string,
	value: string | number,
	icon?: SvelteComponentDev | string | any
}

export interface FileType {
	filename: string,
	indicator: string,
	primary: boolean,
	download: string
}

export interface Project {
	cover: string,
	icon: string,
	name: string,
	bio: string,
	href: string,
	loader: string
}

export interface Rating {
	value: number,
	progress?: number
}

export interface Role {
	id: string
}