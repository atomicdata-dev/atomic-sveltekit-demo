# Atomic-Sveltekit-Template

- Simple boilerplate / template for a blog, portfolio, sales page, documentation page, knowledge base
- Built with `@tomic/svelte` + `sveltekit`.
- Content can be easily managed using [AtomicServer](https://github.com/atomicdata-dev/atomic-server/) CMS, open source alternative to Notion.

## Features

- 🚀  **Fast**: both static pages and dynamic pages are incredibly fast.
- 🔎  **Full-text search**: fuzzy search and various operators, often <3ms responses.
- 🍞  **Breadcrumbs**: hierarchical content, editable navigation bar menu items.
- 🔄  **Synchronization using websockets**: build collaborative, real-time apps.
- 🌐  **SEO-friendly**: with social previews, sitemap.
- 🔧  **Custom data models**: create your own classes and forms. All verified and sharable using [Atomic Schema](https://docs.atomicdata.dev/schema/intro.html).
- 📂  **File management**: support for files / attachments.
- 💻  **Deploy using Netlify**: fast, cheap (often free) and very easy to use.

## Example sites

- [argu.nl](https://argu.nl)
- [argu.co](https://argu.co)
- [denkmee.drechtstedenenergie.nl](https://denkmee.drechtstedenenergie.nl)
- [edamvolendam](https://edamvolendam.netlify.app/)

## Launching a website and managing content

- Create a new drive on Atomic Server.
  - Create a new [`Argu Site`](https://atomicdata.dev/Folder/wp8ame4nqf/MYJkFKGEKz). This serves as an entrypoint.
  - Make sure the site is publicly available: context menu, share, public, save.
  - Modify the `siteConfigs.ts` file, set the link to the `siteResource` using the URL of the `Argu Site` created above.
  - You might need to restart the local front-end `pnpm dev`
- Managing content
  - Press `cmd+e` or `ctrl+e` to open the editor for an article.

## Dev info

### Developing

(replace `pnpm` with [`bun`](https://bun.sh/) if you like speed)

```bash
pnpm i
pnpm run dev
```

### Building static pages

```bash
pnpm build
```

### Deploy using Netlify

- Create a free account on [netlify](https://www.netlify.com/)
- Install netlify cli `pnpm install netlify-cli -g`
- Authenticate `netlify login`
- Run locally, test `netlify dev`
- Create site `netlify unlink && netlify sites:create`
- Deploy `netlify deploy --build -s <site-name>`

### Deploy using Cloudflare
- Create account on Cloudflare 
- install wrangler v3 `npm install wrangler -g` or `pnpm install wrangler -g`
- run `wrangler login`
- add or uncommend cloudflare adapter `import adapter from '@sveltejs/adapter-cloudflare';` in svelte.config.js
- configure adapter:
```
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
```
- build locally `pnpm run build`
- run locally `wrangler pages dev .svelte-kit/cloudflare`
- deploy  `wrangler pages publish`
