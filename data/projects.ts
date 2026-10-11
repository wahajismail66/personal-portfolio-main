export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  featured: boolean;
  technologies: string[];
  image: string;
  gallery: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
  year: number;
  video?: string;
}

export const projects: Project[] = [
  {
    id: "the-pakbnb",
    title: "The Pakbnb",
    slug: "the-pakbnb",
    shortDescription: "A full-stack property rental and lodging marketplace platform inspired by Airbnb.",
    fullDescription: "The Pakbnb is a feature-rich, full-stack property rental platform designed to provide a seamless lodging marketplace experience for both guests and hosts. Built with React (Vite) on the frontend and Node.js/Express with MongoDB on the backend, it features dynamic property search, interactive maps, multi-language internationalization (i18n), real-time host-guest chat via Socket.IO, secure Stripe payments, and a multi-step hosting wizard with Cloudinary media management.",
    category: "Marketplace",
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Socket.IO",
      "i18next",
      "Cloudinary"
    ],
    image: "/pakbnb.png",
    video: "https://res.cloudinary.com/dh59264pg/video/upload/v1785086622/its_ThePakbnb_not_Airbnb_-_MERGE_-_Videobolt.net_qyjt0o.mp4",
    gallery: [
      "/pakbnb.png",
      "/pakbnb2.png"
    ],
    features: [
      "Dynamic property search, interactive maps (Leaflet/OpenLayers), and listing detail views.",
      "Multi-language support (i18n) for 7+ languages (English, Urdu, Arabic, French, German, Turkish, Chinese).",
      "Host onboarding with a multi-step property creation wizard and Cloudinary image processing.",
      "Real-time guest & host instant chat messaging powered by Socket.IO.",
      "Secure online booking reservations and payment processing integrated with Stripe.",
      "User authentication and security featuring JWT, bcrypt encryption, and Google OAuth 2.0."
    ],
    challenges: [
      "Synchronizing locale translations dynamically across complex multi-step guest and host user interfaces.",
      "Handling multi-image client-side compression and batch uploading to Cloudinary.",
      "Managing persistent real-time socket connections for instant host-guest chat communication."
    ],
    solutions: [
      "Integrated react-i18next with dedicated translation namespaces and browser language detection.",
      "Implemented client-side image optimization alongside Express Multer Cloudinary storage engine.",
      "Architected lightweight Socket.IO event channels paired with JWT-authenticated Express REST APIs."
    ],
    results: [
      "Successfully built and deployed a production-ready full-stack property marketplace.",
      "Delivered low-latency frontend experience on Vercel with real-time chat, payments, and multi-language support."
    ],
    liveUrl: "https://airbnb-frontend-zeta.vercel.app/",
    githubUrl: "https://github.com/wahajismail66",
    status: "Completed",
    year: 2025
  },
  {
    id: "zenpay",
    title: "ZenPay – Next-Gen Fintech & Digital Wallet Platform",
    slug: "zenpay",
    shortDescription: "Full-stack fintech & digital wallet application with real-time P2P transfers, budget tracking, QR payments, and AI financial advisor.",
    fullDescription: "ZenPay is an end-to-end digital wallet and fintech platform built with React (Vite) and a Node.js/Express REST backend backed by MongoDB Atlas. Features virtual debit cards, peer-to-peer (P2P) instant money transfers, QR code payment scanner/generation, real-time budget tracking, bank integration (ZenBank deposit & withdrawal workflows), AI-powered financial advisory chatbot (ZenAI powered by Google Gemini & LangChain), and JWT/bcrypt security.",
    category: "SaaS / Fintech",
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
      "LangChain",
      "Tailwind CSS",
      "JWT",
      "QR Code"
    ],
    image: "/zenpay-landing.png",
    gallery: [
      "/zenpay-landing.png",
      "/zenpay.png",
      "/zenpay2.png"
    ],
    features: [
      "Virtual Debit Card & Wallet Dashboard displaying real-time balance (PKR 30,000+), account number, and card details.",
      "Instant Money Transfer & Deposit engine with numeric keypad modal, balance validation, and transaction receipts.",
      "Interactive QR Code scanner and personal QR code generation for effortless merchant & P2P payments.",
      "ZenAI Financial Assistant integrated with Google Gemini & LangChain for intelligent spending advice and budget insights.",
      "Comprehensive Transaction History ledger with real-time credit/debit filters and status indicators.",
      "Enterprise Security & Auth with JWT authentication, bcrypt password hashing, and role-based access control."
    ],
    challenges: [
      "Ensuring atomic, race-condition-free wallet balance updates during concurrent P2P transfers.",
      "Integrating Google Gemini AI with customized financial context while keeping latency low.",
      "Building an intuitive, mobile-first fintech UI with interactive transfer modals and theme switching."
    ],
    solutions: [
      "Implemented MongoDB ACID transactions and session locks for atomic balance updates.",
      "Architected lightweight LangChain agent chains with context window compression for fast AI responses.",
      "Designed a custom Tailwind CSS component library with responsive dark/light mode toggling."
    ],
    results: [
      "Successfully deployed a full-fledged production-ready fintech wallet platform on Vercel.",
      "Enabled instant peer-to-peer transfers with under 200ms API response time.",
      "Enhanced user financial awareness through automated expense categorization and ZenAI chat advice."
    ],
    liveUrl: "https://zenpay-frontend-xn8h.vercel.app/",
    githubUrl: "https://github.com/wahajismail66",
    status: "Completed",
    year: 2025
  },

  {
    id: "needs-and-luxuries",
    title: "Needs & Luxuries – Luxury E-Commerce Platform",
    slug: "needs-and-luxuries",
    shortDescription: "Full-stack luxury e-commerce platform for luxury watches, accessories, apparel, and lifestyle products.",
    fullDescription: "Needs & Luxuries (needsandluxuries.pk) is an exclusive e-commerce platform dedicated to premium lifestyle products, luxury watches (Raymond Weil, TAG Heuer, Tissot), apparel, and accessories. Features responsive React architecture, dynamic multi-attribute product catalog filtering, multi-currency display (PKR/USD), wishlist management, dynamic search, and optimized checkout flow.",
    category: "E-Commerce",
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Material-UI",
      "RESTful API",
      "i18next"
    ],
    image: "/needsandluxuries.png",
    gallery: [
      "/needsandluxuries.png",
      "/needsandluxuries2.png"
    ],
    features: [
      "Interactive luxury catalog with dynamic brand, price range, and category filtering (Watches, Apparel, Accessories).",
      "Responsive shopping cart drawer with real-time subtotal calculation and free delivery indicator (over Rs 2,000).",
      "Multi-currency support (PKR/USD) with real-time price formatting.",
      "High-resolution image product gallery, stock indicators, and customer reviews.",
      "Streamlined guest checkout supporting Cash on Delivery (COD) and direct bank transfer."
    ],
    challenges: [
      "Optimizing catalog image load speeds for high-resolution luxury product photographs.",
      "Implementing fast multi-attribute filter queries across extensive watch and apparel inventories.",
      "Maintaining instant client-side cart state persistence across page transitions and reloads."
    ],
    solutions: [
      "Implemented responsive WebP image optimization and lazy-loading image galleries.",
      "Engineered memoized state hooks and custom multi-facet index queries on the backend.",
      "Built resilient LocalStorage state synchronization with server cart validation."
    ],
    results: [
      "Achieved fast initial render speed under 1.5 seconds for desktop and mobile shoppers.",
      "Created an elegant, high-conversion shopping experience tailored for luxury retail in Pakistan.",
      "Increased user engagement with smooth product search, filtering, and wishlist management."
    ],
    liveUrl: "https://www.needsandluxuries.pk/",
    githubUrl: "#",
    status: "Completed",
    year: 2025
  },
  {
    id: "dravanti-group",
    title: "Dravanti Group Middle East – Real-World Asset (RWA) Investment Platform",
    slug: "dravanti-group",
    shortDescription: "Full-stack institutional Real-World-Asset (RWA) investment platform providing tokenized real estate, private equity, and secure capital solutions.",
    fullDescription: "Dravanti Group Middle East (dravantigroup-two.vercel.app) is an institutional-grade investment platform focused on Real-World Asset (RWA) tokenization, wealth management, and capital asset allocation across the Middle East and international financial markets. Built with React (Vite / Next.js) and Tailwind CSS, it features secure investor authentication portals, strategic partnership showcases, asset portfolio transparency, executive leadership profiles, and institutional contact channels.",
    category: "Fintech / Enterprise",
    featured: true,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Web3 / RWA",
      "JWT Security",
      "Vercel"
    ],
    image: "/dravanti.png",
    gallery: [
      "/dravanti.png",
      "/dravanti2.png",
      "/dravanti3.png"
    ],
    features: [
      "Institutional Real-World Asset (RWA) investment portal displaying secure, stable, and scalable financial offerings.",
      "Investor Login & Authentication system with role-based access control for global asset partners.",
      "Interactive strategic partnership network showcasing Middle East financial hub integrations.",
      "Comprehensive corporate governance section detailing board of directors, advisors, and leadership team.",
      "Press & Media newsroom hub for institutional press releases, market updates, and regulatory filings.",
      "Fully responsive high-end dark corporate design with high-contrast glassmorphic elements."
    ],
    challenges: [
      "Architecting high-security data isolation for institutional investor portals.",
      "Structuring complex financial asset metadata into elegant, user-friendly UI components.",
      "Maintaining sub-second edge load times while serving high-resolution architectural background graphics."
    ],
    solutions: [
      "Engineered robust JWT authentication with encrypted payload validation.",
      "Designed a custom dark theme design system using Tailwind CSS utility tokens.",
      "Leveraged Vercel Edge Network image optimization to deliver crisp visuals with fast load speeds."
    ],
    results: [
      "Successfully launched a sleek, corporate-grade investment portal on Vercel.",
      "Delivered an intuitive user experience for global institutional investors and private wealth clients.",
      "Streamlined investor onboarding and partnership inquiry channels."
    ],
    liveUrl: "https://dravantigroup-two.vercel.app/",
    githubUrl: "#",
    status: "Completed",
    year: 2025
  },
  {
    id: "techlancers",
    title: "Techlancers – Full-Service IT Agency Platform",
    slug: "techlancers",
    shortDescription: "Full-stack IT agency platform showcasing software development, mobile apps, 2D/3D graphic assets, SEO, and enterprise IT services.",
    fullDescription: "Techlancers (my-techlancers-frontend.vercel.app) is an international IT services and digital software agency platform. Built with React (Next.js) and hosted on Vercel, it features a comprehensive agency showcase covering 13 core service verticals (Web Development, Mobile Apps, Google Ads, Branding, 2D/3D Animation, SEO Optimization, 2D/3D Architecture), an interactive slick-carousel portfolio gallery, automated quote consultation scheduling, client testimonial sliders, and agency team profiles.",
    category: "Enterprise / Agency",
    featured: true,
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "FontAwesome",
      "Slick Carousel",
      "Vercel"
    ],
    image: "/techlancers.png",
    gallery: [
      "/techlancers.png",
      "/techlancers2.png",
      "/techlancers3.png"
    ],
    features: [
      "Comprehensive 13-service portfolio showcase featuring Web Dev, Mobile App Dev, 2D/3D Asset Design, SEO, and Branding.",
      "Interactive multi-category portfolio gallery with slick carousels for Marketing, Websites, Gaming Assets, and 3D Characters.",
      "Instant 'Get A Quote NOW' modal and consultation booking system with email integration.",
      "Dynamic agency team directory highlighting executive leadership, project managers, and business development leads.",
      "Verified client testimonial slider featuring 5-star feedback and project ratings.",
      "Fully responsive dark/light theme section transitions with fast Vercel edge deployment."
    ],
    challenges: [
      "Designing a high-performance multi-category portfolio layout with large 2D/3D visual asset previews.",
      "Ensuring smooth touch-enabled carousel navigation across mobile viewports without layout shifts.",
      "Optimizing heavy graphic and video media rendering for fast initial page load."
    ],
    solutions: [
      "Implemented Next.js dynamic image optimization and lazy-loaded carousel slide components.",
      "Utilized React Slick sliders paired with responsive breakpoints for smooth touch gestures.",
      "Structured modular component architecture for effortless service card and project portfolio expansion."
    ],
    results: [
      "Delivered a slick, professional corporate IT agency web application deployed globally on Vercel.",
      "Achieved sub-second page transitions with optimized asset delivery.",
      "Streamlined client lead generation with integrated quote request and contact workflows."
    ],
    liveUrl: "https://my-techlancers-frontend.vercel.app/",
    githubUrl: "#",
    status: "Completed",
    year: 2025
  },

  {
    id: "fbr-digital-invoicing",
    title: "Digital Invoicing Integration – FBR (IRIS System)",
    slug: "fbr-digital-invoicing",
    shortDescription: "Integrated FBR’s IRIS digital invoicing API into a multi-tenant SaaS platform.",
    fullDescription: "A multi-tenant SaaS platform designed for real-time, tax-compliant e-invoice generation per Pakistan’s regulations. It integrates directly with the Federal Board of Revenue's IRIS system for seamless compliance.",
    category: "SaaS / Fintech",
    featured: true,
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Digital Signatures",
      "QR Codes"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    gallery: [],
    features: [
      "Integrated FBR’s IRIS digital invoicing API into a multi-tenant SaaS platform.",
      "Real-time, tax-compliant e-invoice generation.",
      "Scalable backend logic for tenant-specific auth, schema mapping, and isolated invoice storage.",
      "Automated workflows with digital signatures, QR codes, and IRIS schema validation (SRO 1852(1)/2023)."
    ],
    challenges: [
      "Handling complex schema validations required by FBR.",
      "Ensuring tenant data isolation in a multi-tenant environment.",
      "Generating dynamic QR codes and applying digital signatures securely."
    ],
    solutions: [
      "Built a robust middleware layer for schema validation and mapping.",
      "Implemented role-based access control and tenant-specific database schemas.",
      "Utilized optimized cryptographic libraries for real-time signature generation."
    ],
    results: [
      "Achieved 100% compliance with Pakistan Sales Tax regulations.",
      "Successfully processed hundreds of real-time e-invoices.",
      "Reduced manual compliance overhead for tenants significantly."
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    year: 2025
  },
  {
    id: "macalap",
    title: "Macalap – Chef & Rider System",
    slug: "macalap",
    shortDescription: "Full-stack food delivery platform with separate chef, customer, and rider interfaces.",
    fullDescription: "Macalap is an end-to-end food delivery ecosystem that connects customers, chefs, and riders in real-time. It uses event-driven architecture to ensure seamless order flow and real-time updates.",
    category: "Platform",
    featured: true,
    technologies: [
      "MERN Stack",
      "RabbitMQ",
      "WebSocket"
    ],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    gallery: [],
    features: [
      "Separate interfaces for chefs, customers, and riders.",
      "Real-time order tracking and status updates.",
      "Seamless communication between decoupled services."
    ],
    challenges: [
      "Synchronizing real-time state across three distinct user apps.",
      "Handling intermittent network connections for riders."
    ],
    solutions: [
      "Implemented RabbitMQ for reliable, asynchronous message passing.",
      "Used WebSockets for real-time bidirectional communication."
    ],
    results: [
      "Enabled seamless order flow from placement to delivery.",
      "Improved order fulfillment speed through real-time chef notifications."
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "In Progress",
    year: 2025
  },

  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A feature-rich e-commerce website with dynamic filtering and secure authentication.",
    fullDescription: "A modern, high-performance e-commerce storefront designed to provide a seamless shopping experience with dynamic product filtering, secure JWT-based authentication, and a fully responsive design.",
    category: "E-Commerce",
    featured: false,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Jenkins",
      "JWT"
    ],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    gallery: [],
    features: [
      "Dynamic product filtering and advanced search.",
      "JWT-based secure user authentication.",
      "Fully responsive front-end design."
    ],
    challenges: [
      "Building complex, multi-faceted filtering logic on the frontend.",
      "Automating the deployment process for frequent feature updates."
    ],
    solutions: [
      "Implemented an optimized state management solution for instant filtering.",
      "Configured a Jenkins-powered CI/CD pipeline for automated, zero-downtime deployments."
    ],
    results: [
      "Significantly improved product discovery speed.",
      "Reduced deployment time from hours to minutes."
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    year: 2024
  },
  {
    id: "crm-management-system",
    title: "CRM Management System",
    slug: "crm-management-system",
    shortDescription: "A CRM system with real-time WebSocket communication and RBAC.",
    fullDescription: "An internal enterprise CRM built to manage customer data, tasks, and leads efficiently. It features robust Role-Based Access Control and real-time updates to keep remote teams synchronized.",
    category: "Enterprise",
    featured: false,
    technologies: [
      "WebSocket",
      "Redis",
      "Node.js",
      "React.js"
    ],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    gallery: [],
    features: [
      "Real-time WebSocket communication for team collaboration.",
      "Role-Based Access Control (RBAC) for secure user management.",
      "Integrated Redis caching to streamline data retrieval."
    ],
    challenges: [
      "Ensuring strict data isolation and permission checks across all API endpoints.",
      "Handling real-time state synchronization for task management."
    ],
    solutions: [
      "Developed a custom RBAC middleware layer.",
      "Used Redis pub/sub alongside WebSockets for efficient real-time event broadcasting."
    ],
    results: [
      "Enhanced overall system performance and response times.",
      "Streamlined customer data and lead management workflows."
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    year: 2024
  }
];
