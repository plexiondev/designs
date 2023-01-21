import type { SvelteComponentDev } from 'svelte/internal';

export interface Option {
	label: string,
	value: string | number,
	icon?: SvelteComponentDev | string | any
}

export interface FileType {
	filename: String,
	indicator: String,
	primary: Boolean,
	download: String
}

export interface Role {
	id: string
}