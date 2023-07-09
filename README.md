# Envelope (Web)

## Introduction

Envelope is an open source Neobank starter kit using [Column Bank's API](https://column.com/). This monorepo is composed of the Web client (soon to come) and backend API. The iOS client repo can be found [here](https://github.com/khalea/envelope-mobile).

This project uses:

- [NextJS](https://nextjs.org/) - React web framework
- [NextAuth with Google](https://next-auth.js.org/providers/google) - Authentication for Next.js
- [Prisma](https://www.prisma.io/) - Object Relational Mapper (ORM) for interfacing with DB
- [Column Bank](https://column.com/) - Banking API tools
- [Planetscale](https://planetscale.com/) - Scalable MySQL Database
- [Vercel]() - Cloud / Deployments

---

## Setup

### Install & Run

**Clone repo**

`git clone https://github.com/khalea/envelope-web.git`

**Install packages**

`npm install`

**Run on localhost**

`npm run dev`

### Environment Variables

All relevant environment variables are in `.env.example`. Create an `.env.local` and fill in your secrets (this file will be ignored by Git).

**NextAuth**

[Reference](https://authjs.dev/guides/basics/deployment)

`NEXTAUTH_SECRET`

`NEXTAUTH_URL`

**Google**

[Reference](https://next-auth.js.org/providers/google)

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

**PlanetScale**

[Reference](https://planetscale.com/docs/tutorials/deploy-to-vercel#manually-connect-to-vercel)

`DATABASE_URL`

`PLANETSCALE_USERNAME`

`PLANETSCALE_PASSWORD`

**Column Bank**

[Reference](https://column.com/)

`COLUMN_KEY`

`COLUMN_AUTH`

`COLUMN_TEST_BANK_ACCOUNT_ID` (optional)

---

## Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
