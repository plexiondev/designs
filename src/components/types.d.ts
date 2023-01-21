import type { SvelteComponentDev } from 'svelte/internal';

export interface Option {
	label: string,
	value: string | number,
	icon?: SvelteComponentDev | string | any
}

export interface File {
	filename: String,
	indicator: String,
	primary: Boolean,
	download: String
}