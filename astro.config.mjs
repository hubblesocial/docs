import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
 build: {
  assetsPrefix: './assets/'
 },
	site: 'https://hubbledocs.omgrod.me',
	integrations: [
		starlight({
			title: 'Hubble Docs',
			social: {
				github: 'https://github.com/hubble-sm',
				blueSky: 'https://bsky.app/profile/omgrod.bsky.social',
				twitter: 'https://twitter.com/0mgRod',
				email: 'mailto:omgrod1000@proton.me',
				youtube: 'https://youtube.com/@OmgRodYT',
				tiktok: 'https://tiktok.com/@therealomgrod',
				reddit: 'https://reddit.com/u/omgrod'
			},
			sidebar: [
				{
					label: 'Getting Started',
					slug: 'docs'
				},
				{
					label: 'Bots',
					items: [
						{ label: 'Making Bots', slug: 'docs/bots' },
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'Contributing', slug: 'docs/contributing' },
					],
				},
				{
					label: 'Navigating the Website',
					items: [
						{ label: 'Navigating the Website', slug: 'docs/website' },
					],
				},
			],
		}),
	],
	devToolbar: {
		enabled: false
	}
});
