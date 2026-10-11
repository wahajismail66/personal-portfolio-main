import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteData } from "@/data/site";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wahajismail.dev';

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Engineering Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [post.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wahajismail.dev';

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: [{
      "@type": "Person",
      name: siteData.name,
      url: baseUrl,
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-32 relative bg-slate-50 dark:bg-[#03030a] transition-colors duration-300">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          {/* Top Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 mb-16 group shadow-sm dark:shadow-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Publications
          </Link>

          {/* Header Section */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-8 leading-tight text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light border-l-2 border-blue-500 pl-6 transition-colors duration-300">
              {post.excerpt}
            </p>
          </div>

          {/* Massive Hero Image */}
          <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-[#0a0a1a] mb-20 relative shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/50 border border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="absolute inset-0 bg-white/10 dark:bg-[#060611]/10 z-10 transition-colors duration-300" />
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Post Content */}
          <article 
            className="prose dark:prose-invert prose-lg md:prose-xl max-w-none mb-20 
              prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-slate-200
              prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
              prose-li:text-slate-700 dark:prose-li:text-slate-300
              prose-blockquote:border-blue-500 prose-blockquote:bg-slate-200 dark:prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:font-light prose-blockquote:italic transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="pt-10 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mr-2">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <Link href="/blog" className="group">
              <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative px-8 py-4 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-medium flex items-center justify-center gap-3 transition-colors duration-300">
                  View all publications
                </div>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
