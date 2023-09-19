# SaaS AI Companion with Next.js 13, React, Tailwind, Prisma, Stripe 

This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe 

[INSPIRATION @codewithantonio](https://www.codewithantonio.com/projects/ai-companion)

Technologies: 

- Next 13 (App Router)
- React
- Tailwind (Shadcn UI)
- Prisma
- MySQL
- Stripe
- Clerk
- Pinecone (Vector DB)
- Upstash (Redis DB)

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/alecanutto/next13-ai-companion.git
```

### Install packages

```shell
bun install
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
PINECONE_INDEX=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

Seed categories:
```shell
node scripts/seed.ts
```

### Start the app

```shell
bun run dev
```

## Available commands

Running commands with bun `bun run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |