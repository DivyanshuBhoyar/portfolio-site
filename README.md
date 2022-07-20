# Using Astro Boilerplate with TypeScript and Tailwind CSS 


Run the following command on your local environment:

``` bash
git clone --depth=1 https://github.com/ixartz/Astro-boilerplate
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

``` bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your favorite browser
to see your project.

### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Astro-boilerplate)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run clean`   | Remove `./dist` folder                       |
| `npm run lint`    | Run ESLint and report styling error          |
