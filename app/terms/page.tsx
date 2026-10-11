import { siteData } from "@/data/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteData.name}`,
  description: "Terms of Service and usage conditions.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-32 bg-[#03030a] relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="mb-16 border-b border-white/5 pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-slate-100 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-400 font-light tracking-wide">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-200 prose-a:text-blue-400 hover:prose-a:text-blue-300">
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">1. Acceptance of Terms</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">2. Intellectual Property Rights</h2>
            <p className="text-slate-400 leading-relaxed font-light mb-4">
              All content included on this site, such as code, text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of {siteData.name} or its content suppliers and protected by international copyright laws.
            </p>
            <p className="text-slate-400 leading-relaxed font-light">
              The compilation of all content on this site is the exclusive property of {siteData.name}, with copyright authorship for this collection by {siteData.name}.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">3. Use License</h2>
            <p className="text-slate-400 leading-relaxed font-light mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 font-light">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose, or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">4. Disclaimer</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">5. Limitations</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              In no event shall {siteData.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">6. Contact Information</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              For any questions regarding these Terms of Service, please contact:
              <br />
              <a href={`mailto:${siteData.email}`} className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
                {siteData.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
