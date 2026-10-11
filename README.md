# Wahaj Ismail - Premium SaaS Engineer Portfolio

A high-performance, modern personal portfolio website built for a Full Stack Software Engineer specializing in SaaS architectures.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## Features

- **SEO Optimized**: Fully dynamic Open Graph, Twitter Cards, Sitemap, Robots.txt, and JSON-LD structured data.
- **Fast & Performant**: Implements `next/image`, Server Components by default, and Next.js static generation (`generateStaticParams`).
- **Premium Design**: Smooth Framer Motion page transitions, scroll reveals, grid backgrounds, and staggered list animations.
- **Data-Driven**: Content is driven from typed local files (`data/projects.ts`, `data/blog.ts`, `data/site.ts`) making updates instantaneous without needing a database.

## Local Development

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Setup Instructions

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up environment variables:
Copy the example environment file and update the variables if necessary.
```bash
cp .env.example .env.local
```
*(By default, `NEXT_PUBLIC_BASE_URL` is set to `http://localhost:3000`)*

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Production Build

To test the optimized production build locally:

```bash
npm run build
npm run start
```
This will compile all Next.js Server Components, optimize images, and generate the static routes and metadata.

## Adding Content

- **Projects**: Add new projects to `data/projects.ts`. Place cover images in the `public/` directory (e.g., `public/projects/my-project.jpg`) and reference them in the data file.
- **Blog Posts**: Add new blog entries to `data/blog.ts`.
- **Site Info**: Update global site information, bio, and social links in `data/site.ts`.

## Deployment Instructions

This project is optimized for deployment on Vercel.

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and create a "New Project".
3. Import your repository. Vercel will automatically detect the Next.js framework.
4. Open the "Environment Variables" tab in Vercel before deploying and add:
   - `NEXT_PUBLIC_BASE_URL` (set to your production domain, e.g., `https://wahajismail.dev`)
5. Click **Deploy**.

### Manual Deployment / Docker
The application outputs a standard Node.js server build. You can deploy it via Docker or any VPS (e.g., DigitalOcean, AWS EC2) using standard `next start` inside a PM2 process.
