import { siteData } from "@/data/site";
import { skillsData } from "@/data/skills";
import { experienceData } from "@/data/experience";
import { projects } from "@/data/projects";
import { servicesData } from "@/data/services";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export function processUserQuery(input: string): { reply: string; suggestions?: string[] } {
  const query = input.toLowerCase().trim();

  // 1. Greetings / Intro
  if (
    query.match(/\b(hi|hello|hey|greetings|hola|good morning|good afternoon|good evening|who are you|what can you do)\b/)
  ) {
    return {
      reply: `Hello! 👋 I'm **${siteData.name}'s AI Assistant**.\n\nI can help you explore Wahaj's experience, technical skills, enterprise projects, services, or guide you on how to get in touch or hire him!\n\nWhat would you like to know today?`,
      suggestions: [
        "💼 Tell me about Wahaj's experience",
        "🛠️ What technologies does he use?",
        "🚀 Show me his top projects",
        "📩 How can I contact him?"
      ]
    };
  }

  // 2. Who is Wahaj / Bio / About
  if (
    query.match(/\b(who is|about|bio|background|summary|overview|philosophy|experience level|location|where)\b/)
  ) {
    return {
      reply: `**${siteData.name}** is a **${siteData.professionalTitle}** based in **${siteData.location}**.\n\n` +
        `• **Experience:** Equivalent to 2 Years of Experience in Full Stack Engineering\n` +
        `• **Delivered:** 40+ Projects & 25+ Production Systems\n` +
        `• **Bio:** ${siteData.fullBio}\n\n` +
        `💡 *Philosophy:* "${siteData.developmentPhilosophy}"`,
      suggestions: [
        "🏢 Recent Work History",
        "⚙️ Core Technical Stack",
        "📩 Contact Wahaj"
      ]
    };
  }

  // 3. Work Experience & Companies
  if (
    query.match(/\b(experience|history|companies|work|jobs|innovative|roles|career)\b/)
  ) {
    const expsList = experienceData
      .map(
        (exp) =>
          `• **${exp.position}** at **${exp.company}** (${exp.startDate} - ${exp.endDate})\n  *Key Tech:* ${exp.technologies.slice(0, 4).join(", ")}\n  *Summary:* ${exp.description}`
      )
      .join("\n\n");

    return {
      reply: `Here is a summary of **${siteData.name}'s** professional experience:\n\n${expsList}\n\nFor more details, check out the full [Experience page](/experience)!`,
      suggestions: [
        "🛠️ Full Skill Set",
        "📂 Featured Projects",
        "📩 Contact Wahaj"
      ]
    };
  }

  // 4. Skills & Stack
  if (
    query.match(/\b(skill|skills|stack|technologies|tech|frontend|backend|database|devops|mcp|node|next|react|nest|postgres|aws|docker)\b/)
  ) {
    const skillsGrouped = skillsData
      .map((cat) => `• **${cat.category}:** ${cat.skills.join(", ")}`)
      .join("\n");

    return {
      reply: `**${siteData.name}** specializes in enterprise full-stack development and distributed systems:\n\n${skillsGrouped}\n\nHe has extensive expertise building high-throughput REST/GraphQL APIs, microservices, real-time WebSocket applications, and multi-tenant SaaS architectures.`,
      suggestions: [
        "🚀 View Projects built with Next.js",
        "🏢 Work Experience",
        "💼 Services offered"
      ]
    };
  }

  // 5. Projects
  if (
    query.match(/\b(project|projects|work|portfolio|built|apps|gfs|saas|case study|featured)\b/)
  ) {
    const featuredProjects = projects.slice(0, 3);
    const projList = featuredProjects
      .map((p) => `• **${p.title}** (${p.category}): ${p.shortDescription}`)
      .join("\n\n");

    return {
      reply: `Wahaj has delivered over **40+ projects**. Here are a few notable highlights:\n\n${projList}\n\nExplore all cases and technical architecture on the [Projects page](/projects)!`,
      suggestions: [
        "🌐 Enterprise Web Architecture",
        "⚙️ Systems Architecture",
        "📩 Discuss a Project"
      ]
    };
  }

  // 6. Services & Consulting
  if (
    query.match(/\b(service|services|offer|consulting|hire|freelance|enterprise|saas|erp|architecture|multi-tenant|contract)\b/)
  ) {
    const servList = servicesData.slice(0, 4).map((s) => `• **${s.title}:** ${s.description}`).join("\n");

    return {
      reply: `**Services Offered by ${siteData.name}:**\n\n${servList}\n\nStatus: **${siteData.availability}**! Feel free to visit the [Services page](/services) or reach out directly to start a collaboration.`,
      suggestions: [
        "📩 Book a Consultation",
        "📄 Download Resume",
        "🔗 Connect on LinkedIn"
      ]
    };
  }

  // 7. Contact / Resume / Hire
  if (
    query.match(/\b(contact|email|phone|hire|resume|cv|reach|linkedin|github|message|availability|get in touch)\b/)
  ) {
    return {
      reply: `You can reach out to **${siteData.name}** directly through multiple channels:\n\n` +
        `• 📧 **Email:** [${siteData.email}](mailto:${siteData.email})\n` +
        `• 📍 **Location:** ${siteData.location}\n` +
        `• 💼 **Status:** ${siteData.availability}\n` +
        `• 🐙 **GitHub:** [${siteData.socialLinks.github.replace('https://', '')}](${siteData.socialLinks.github})\n` +
        `• 👔 **LinkedIn:** [${siteData.socialLinks.linkedin.replace('https://', '')}](${siteData.socialLinks.linkedin})\n\n` +
        `You can also send a direct message via the [Contact Form](/contact)!`,
      suggestions: [
        "💼 Services Offered",
        "🚀 Top Projects",
        "🏢 Work History"
      ]
    };
  }

  // 8. Specific tech query matches (e.g. NextJS, NestJS, Docker, MCP)
  if (query.includes("mcp") || query.includes("ai")) {
    return {
      reply: `**AI & MCP Integration:**\nWahaj integrates AI automation tools into workflows and backend applications, including Model Context Protocol (MCP) servers, OpenWebUI, and AI agent extensions for workflow acceleration.`,
      suggestions: ["🛠️ Technical Skills", "🚀 Projects", "📩 Contact"]
    };
  }

  // Fallback
  return {
    reply: `I'm here to help! I can answer questions about **${siteData.name}'s** software engineering background, technical stack, featured projects, services, or contact details.\n\nTry selecting one of the suggested topics below:`,
    suggestions: [
      "💼 Tell me about Wahaj's experience",
      "🛠️ What technologies does he use?",
      "🚀 Show me his top projects",
      "📩 How can I contact him?"
    ]
  };
}
