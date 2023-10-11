# Origin
Originally a [question from Reddit](https://web.archive.org/web/https://old.reddit.com/r/nextjs/comments/174m3xf/how_to_stop_intercepting_routes_for_some_specific/)

TLDR: We only want to select which routes to have intercepting routes, i.e. some pages should show a modal inline, some pages should show the standalone page

# Live demo

The inline previews don't show the full path in both editors. Use "open preview in new window" option to see the URL changes

* [StackBlitz](https://stackblitz.com/github/EdmondChuiHW/Selective-Intercept-Parallel-Route-Modal-Demo)
* [CodeSandbox](https://codesandbox.io/p/sandbox/github/EdmondChuiHW/Selective-Intercept-Parallel-Route-Modal-Demo)

<img width="305" alt="screenshot of the demo showing inline intercept and parallel route" src="https://github.com/EdmondChuiHW/Selective-Intercept-Parallel-Route-Modal-Demo/assets/1967998/95d05b7c-08d4-419c-b4ff-36f094119d82">

# Expected behaviours

## Inline modal
1. `/`: home page
1. `/photo/3`: shows modal
1. `/`: dismiss modal
1. `/photo/4`: shows modal
1. Refresh page: shows standalone `/photo/4`

## Opt-out of inline modal in some routes
1. `/`: home page
1. `/upload`: shows standalone page
1. `/photo/4`: shows standalone page <-- what you want
1. `/`: home page
1. `/photo/4`: shows modal

## Bug
There's a bug where if you hard-nav to a `/photo/3` page, the router cache will "remember" it, e.g.
1. `/photo/3`: shows standalone detail page
1. `/`: home page
1. `/photo/3`: should show modal in home page but shows the standalone detail page instead

Play around a see if you can fix it.

# Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
