import { siteData } from "@/data/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteData.name}`,
  description: "Privacy Policy and data handling practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 bg-[#03030a] relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="mb-16 border-b border-white/5 pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-slate-100 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-400 font-light tracking-wide">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-200 prose-a:text-blue-400 hover:prose-a:text-blue-300">
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">1. Information Collection</h2>
            <p className="text-slate-400 leading-relaxed font-light mb-4">
              We collect information that you provide directly to us when using our services. This may include personal information such as your name, email address, and any other information you choose to provide through our contact forms or scheduling tools.
            </p>
            <p className="text-slate-400 leading-relaxed font-light">
              We also automatically collect certain information about your device and how you interact with our website, including IP addresses, browser types, and usage patterns to optimize our digital infrastructure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">2. Use of Information</h2>
            <p className="text-slate-400 leading-relaxed font-light mb-4">
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 font-light">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about technical updates, security alerts, and administrative messages</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">3. Data Security</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              We implement enterprise-grade security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the Internet or electronic storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">4. Third-Party Services</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              Our website may contain links to third-party services (such as GitHub, LinkedIn, or Calendly). We are not responsible for the privacy practices or the content of these third-party sites. Please review the privacy policies of those platforms before interacting with them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6 text-slate-200">5. Contact Us</h2>
            <p className="text-slate-400 leading-relaxed font-light">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
