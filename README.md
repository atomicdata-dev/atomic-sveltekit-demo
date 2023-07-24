# Atomic-Sveltekit-Demno

- Built with `@tomic/svelte` + `sveltekit`.
- Content can be easily managed using the [`Atomic-Server CMS`](https://github.com/atomicdata-dev/atomic-server/).

## Example sites

- [argu.nl](https://argu.nl)
- [argu.co](https://argu.co)
- [denkmee.drechtstedenenergie.nl](https://denkmee.drechtstedenenergie.nl)
- [edamvolendam](https://edamvolendam.netlify.app/)

## Launching a website and managing content

- Create a new drive on Atomic Server.
  - Create a new [`Argu Site`](https://atomicdata.dev/Folder/wp8ame4nqf/MYJkFKGEKz). This serves as an entrypoint.
  - Make sure the site is publicly available: context menu, share, public, save.
  - Modify the `siteConfigs.ts` file, set the links to the drive + site + home resource.
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

- Install netlify cli `pnpm install netlify-cli -g`
- Authenticate `netlify login`
- Run locally, test `netlify dev`
- Create site `netlify unlink && netlify sites:create`
- Deploy `netlify deploy --build -s <site-name>`
