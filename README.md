# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Module Federation mode

```sh
npm ci
npm run serve:federation
```

Start `npm run start:mock-server` separately for the API on 7001. Stop the
standalone Vite server first: both modes use port 5000. The remote entry is
`http://localhost:5000/remoteEntry.js`, container `goals_tracker`, exposing
`./mount` to Angular host 4201 and React host 3001.

`npm run build:federation` emits `dist/federation`; publish the entry and all
chunks together with CORS allowing the host origins. The dedicated client-only
Webpack/Svelte build reuses the existing page while retaining SvelteKit's
standalone commands. Svelte's injected component CSS stays in each mount's
Shadow DOM. The asynchronous disposer unmounts the instance and removes its DOM.

Set `VITE_GOALS_API_URL` in the build process environment to change the API URL
(default `http://localhost:7001`). For PowerShell:
`$env:VITE_GOALS_API_URL = 'https://example.com'; npm run build:federation`.
Federation configuration reads process environment, not Vite's `.env` loader.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@1.1.1 create --template minimal --types ts --add prettier --install npm goals-tracker
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

For example, to add Tailwind CSS:

```sh
npx sv add tailwindcss
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The Svelte app runs on [http://localhost:5000](http://localhost:5000).

### Mock backend

Run the goals mock backend:

```sh
npm run start:mock-server
```

It runs on [http://localhost:7001](http://localhost:7001), loads default data from
`static-mock-server/mock-data/goals.json` at startup, and exposes:

- `GET /goals`
- `GET /goals/:id`
- `POST /goals`
- `PUT /goals/:id`
- `PATCH /goals/:id`

### Run frontend + backend together

```sh
npm run start-all-sv
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
