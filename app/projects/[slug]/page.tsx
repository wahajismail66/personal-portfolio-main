import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, PlayCircle } from "lucide-react";
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
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wahajismail.dev';

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Enterprise Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
    alternates: {
      canonical: `${baseUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wahajismail.dev';

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: siteData.name,
      url: baseUrl,
    },
    image: project.image,
    url: project.liveUrl || `${baseUrl}/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-32 relative bg-slate-50 dark:bg-[#03030a] transition-colors duration-300">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          {/* Top Navigation */}
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 mb-16 group shadow-sm dark:shadow-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Header Section */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-slate-500 text-sm font-bold tracking-widest uppercase">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light border-l-2 border-blue-500 pl-6 max-w-4xl transition-colors duration-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mb-20">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn"
              >
                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform hover:scale-105 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur opacity-40 dark:opacity-60 group-hover/btn:opacity-100 transition duration-500" />
                  <div className="relative px-8 py-3.5 rounded-xl bg-white dark:bg-[#03030a] text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-center gap-3 transition-colors">
                    Launch Live Application
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            )}
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] lg:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-[#0a0a1a] mb-24 relative shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/50 border border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="absolute inset-0 bg-white/10 dark:bg-[#060611]/10 z-10 transition-colors duration-300" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-20">

              {project.video && (
                <section>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                    <PlayCircle className="w-5 h-5 text-blue-500" />
                    Video Presentation
                  </h2>
                  <div className="aspect-video w-full rounded-3xl overflow-hidden bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl relative group transition-colors duration-300">
                    <video controls className="w-full h-full object-cover rounded-3xl">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </section>
              )}

              {project.features.length > 0 && (
                <section>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">System Capabilities</h2>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300 text-lg font-light leading-relaxed transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.challenges.length > 0 && (
                <section>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Architectural Challenges</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, i) => (
                      <div key={i} className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/5 shadow-xl transition-colors duration-300">
                        <p className="text-slate-700 dark:text-slate-300 text-lg font-light leading-relaxed transition-colors duration-300">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.solutions.length > 0 && (
                <section>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Engineered Solutions</h2>
                  <div className="space-y-6">
                    {project.solutions.map((solution, i) => (
                      <div key={i} className="p-8 lg:p-10 rounded-3xl bg-blue-900/10 border border-blue-500/20 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                        <p className="text-slate-700 dark:text-slate-300 text-lg font-light leading-relaxed transition-colors duration-300">{solution}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.results.length > 0 && (
                <section>
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Business Impact</h2>
                  <ul className="space-y-6 p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/5 shadow-xl transition-colors duration-300">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        <span className="text-slate-700 dark:text-slate-300 text-lg font-light transition-colors duration-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}



            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-10">
              <div className="p-8 rounded-3xl bg-white dark:bg-[#060611] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl sticky top-32 transition-colors duration-300">

                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Core Stack</h3>
                <div className="flex flex-wrap gap-2 mb-12">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-[#0a0a1a] border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-blue-500/30 dark:hover:border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Project Status</h3>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors duration-300">
                    <div className={`w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] ${project.status === 'Completed' ? 'bg-emerald-500 text-emerald-500' : 'bg-blue-500 text-blue-500 animate-pulse'}`} />
                    <span className="font-medium text-lg">{project.status}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
