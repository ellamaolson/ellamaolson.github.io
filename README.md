# React NextJS Portfolio App

**How to build this app >> [A beginner’s guide to building a React NextJS app](https://medium.com/@elanaolson/a-beginners-guide-to-building-a-react-nextjs-app-7463120389f0)**

**Demo >> [elanaolson.com](https://elanaolson.com/)**

## Tech

- Framework: Next.js
- Library: React
- Language: TypeScript
- UI Library: Material UI
- Styling: Tailwind CSS
- Deployment: Github Pages

## Running Locally

This application requires Node.js v18.17+.

Serves to http://localhost:3000

```bash
<clone>
cd <clone folder>
yarn install
yarn build
yarn dev
```

## Configure Next.js

Navigate to `next.config.mjs` and add the following:

```
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  basePath: '<your-repo-name>',
  images: {
    unoptimized: true, // <==  disable server-based image optimization
  },
};
```

If you see a 404 error rendered locally, then comment out the `output` and `basepath` in the next config (DO NOT COMMIT THIS CHANGE). This will allow you to render locally until you're ready to deploy.

Navigate to `/public` folder and add a `.nojekyll` file to it disable GitHub Pages from trying to create a Jekyll website.

```.
├── app/
├── public/
│   └── .nojekyll
├── next.config.js
```

## Liscence

1. You are free to use this code as inspiration.
2. Please do not copy it directly, remove my blog posts, images, etc
3. Crediting the author is appreciated.

### Credit

Credit [Lee Rob](https://github.com/leerob/leerob.io) for inspiration for this project
