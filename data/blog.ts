export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Building Scalable Architectures with Node.js and Redis",
    slug: "building-scalable-architectures-nodejs-redis",
    excerpt: "Discover how to handle high-traffic spikes by implementing an event-driven architecture using Node.js and Redis caching.",
    content: `
<h2>The Challenge of Scale</h2>
<p>When your application hits a certain threshold of traffic, traditional synchronous REST APIs begin to struggle under the load. Database bottlenecks become the primary reason for service degradation.</p>

<h2>Implementing Redis Caching</h2>
<p>By placing Redis in front of our database queries, we can reduce latency significantly. We cache the most frequently accessed data and use intelligent cache invalidation strategies.</p>

<h2>Event-Driven Systems</h2>
<p>Instead of waiting for processing to complete, we can use Redis Pub/Sub or message brokers to decouple our services. This allows the API layer to respond immediately while background workers handle the heavy lifting.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    category: "Architecture",
    tags: ["Node.js", "Redis", "System Design"],
    publishedAt: "2026-06-15",
    readingTime: "5 min read",
    featured: true,
  },
  {
    id: "post-2",
    title: "Mastering Next.js 15 Server Components",
    slug: "mastering-nextjs-server-components",
    excerpt: "A deep dive into how Server Components can reduce your JavaScript bundle size and improve Core Web Vitals.",
    content: `
<h2>What are Server Components?</h2>
<p>Server components allow you to render components on the server without sending their JavaScript to the client. This paradigm shift means faster page loads and less work for the browser.</p>

<h2>Performance Benefits</h2>
<p>By keeping heavy dependencies on the server (like markdown parsers or database clients), we drastically improve our load times and achieve near-perfect Lighthouse scores.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    category: "Frontend",
    tags: ["Next.js", "React", "Performance"],
    publishedAt: "2026-07-02",
    readingTime: "8 min read",
    featured: false,
  },
  {
    id: "post-3",
    title: "Multi-Tenant Database Design Strategies",
    slug: "multi-tenant-database-design-strategies",
    excerpt: "Comparing shared-database vs separate-database approaches for modern SaaS applications.",
    content: `
<h2>Introduction to Multi-Tenancy</h2>
<p>When building a SaaS, you must decide how to isolate tenant data. You can use separate databases, separate schemas, or a shared schema with tenant IDs.</p>

<h2>Row-Level Security (RLS)</h2>
<p>Using PostgreSQL RLS gives you a great balance of simplicity and security in a shared-schema model. You configure policies at the database level that automatically filter rows based on the current context.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    category: "Database",
    tags: ["PostgreSQL", "SaaS", "Architecture"],
    publishedAt: "2026-07-10",
    readingTime: "6 min read",
    featured: false,
  },
  {
    id: "post-4",
    title: "GraphQL vs REST: Making the Right Choice for Your API",
    slug: "graphql-vs-rest-making-the-right-choice",
    excerpt: "An objective comparison of GraphQL and REST architectures, and when to use each for enterprise applications.",
    content: `
<h2>The Over-fetching Problem</h2>
<p>Traditional REST APIs often return more data than a client needs, or require multiple round trips to fetch related resources. GraphQL solves this by allowing clients to specify exactly what they need.</p>

<h2>When REST is Still Better</h2>
<p>Despite the hype, REST is often a better choice for simple CRUD applications, services that rely heavily on HTTP caching, or public APIs where you want strict control over access patterns and query complexity.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    category: "Architecture",
    tags: ["GraphQL", "REST", "API Design"],
    publishedAt: "2026-07-15",
    readingTime: "7 min read",
    featured: false,
  },
  {
    id: "post-5",
    title: "The Reality of Microservices in 2026",
    slug: "reality-of-microservices-in-2026",
    excerpt: "Why many companies are returning to modular monoliths after struggling with the complexity of distributed systems.",
    content: `
<h2>The Microservices Hype Cycle</h2>
<p>For years, microservices were touted as the ultimate architecture. However, many teams discovered that they accidentally created a distributed monolith—inheriting all the complexity of network calls without the promised independence.</p>

<h2>The Modular Monolith</h2>
<p>A modular monolith enforces strict domain boundaries within a single deployable unit. It provides the organizational scaling benefits of microservices without the operational overhead of managing dozens of deployments and distributed tracing.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    category: "System Design",
    tags: ["Microservices", "Monolith", "DevOps"],
    publishedAt: "2026-07-20",
    readingTime: "6 min read",
    featured: false,
  },
  {
    id: "post-6",
    title: "Securing Next.js Applications in Production",
    slug: "securing-nextjs-applications-production",
    excerpt: "Essential security headers, middleware patterns, and authentication strategies for enterprise Next.js deployments.",
    content: `
<h2>Implementing Security Headers</h2>
<p>Your first line of defense is a strong Content Security Policy (CSP). Using Next.js middleware, you can dynamically inject nonce values and enforce strict headers across your entire application.</p>

<h2>Authentication & Session Management</h2>
<p>Moving session validation to the Edge using Next.js Middleware allows you to protect routes before they even reach your serverless functions, saving compute costs and reducing latency for unauthorized requests.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    category: "Security",
    tags: ["Next.js", "Security", "Authentication"],
    publishedAt: "2026-07-24",
    readingTime: "9 min read",
    featured: true,
  },
  {
    id: "post-7",
    title: "Understanding Serverless Infrastructure and Event-Driven Design",
    slug: "understanding-serverless-infrastructure",
    excerpt: "Explore the benefits and challenges of running production workloads on serverless architectures like AWS Lambda and Vercel.",
    content: `
<h2>The Serverless Paradigm</h2>
<p>Serverless computing lets you build and run applications and services without thinking about servers. It removes infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning.</p>

<h2>Event-Driven Architecture</h2>
<p>Modern serverless applications are highly event-driven. They rely heavily on triggers (like HTTP requests, database events, or message queues) to execute code in small, isolated functions.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    category: "Architecture",
    tags: ["Serverless", "Cloud", "AWS"],
    publishedAt: "2026-07-27",
    readingTime: "7 min read",
    featured: false,
  },
  {
    id: "post-8",
    title: "Optimizing Web Fonts for Core Web Vitals",
    slug: "optimizing-web-fonts-core-web-vitals",
    excerpt: "Learn how to eliminate layout shifts (CLS) and improve First Contentful Paint (FCP) by loading fonts effectively.",
    content: `
<h2>The Font Loading Problem</h2>
<p>Fonts are often large, blocking resources that prevent text from rendering (FOIT) or cause layout shifts when they finally load and swap out the fallback font (FOUT).</p>

<h2>Solutions in Next.js</h2>
<p>Next.js provides the <code>next/font</code> module out of the box, which automatically optimizes your fonts (including custom ones) and removes external network requests for improved privacy and performance. It also sets up a size-adjust CSS property to minimize layout shifts.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
    category: "Frontend",
    tags: ["Typography", "Performance", "CSS"],
    publishedAt: "2026-07-30",
    readingTime: "5 min read",
    featured: false,
  }
];
