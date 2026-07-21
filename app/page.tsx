import Image from "next/image";
import { ProjectShowcase } from "./project-showcase";

const projects = [
  {
    name: "Blood Donation Service",
    type: "Community platform (org repo)",
    stack: "Python, Django, JavaScript",
    description:
      "Backend and frontend of a community blood-donation platform, maintained under the blood-donation-service GitHub organization.",
    href: "https://github.com/blood-donation-service/Backend",
  },
  {
    name: "SchemaMind",
    type: "NL-to-SQL AI platform",
    stack: "Python, FastAPI, FAISS, Gemini, RAG",
    description:
      "Persian/English natural-language to validated SQLite queries with schema RAG, a strict SQL safety layer, JWT auth, and Prometheus + Grafana observability.",
    href: "https://github.com/MahdiAmrollahi/SchemaMind",
  },
  {
    name: "Agent-Builder DSL",
    type: "DSL compiler for AI agents",
    stack: "Python, ANTLR, Google Gemini, google-genai",
    description:
      "A custom DSL that compiles `.agent` files into runnable Python with Gemini-powered agents, declarative tools, memory strategies, and an interactive loop.",
    href: "https://github.com/MahdiAmrollahi/Agent-Builder-DSL",
  },
  {
    name: "BatBooks Backend",
    type: "Django backend platform",
    stack: "Python, Django, DevOps, architecture",
    description:
      "A production-minded books backend with full Django settings, clean architecture, and deployment-focused DevOps structure.",
    href: "https://github.com/batbooks/backend",
  },
  {
    name: "AI-Powered Classroom Analytics",
    type: "Real-time computer vision",
    stack: "RetinaFace, YOLO, ByteTrack, MediaPipe",
    description:
      "Smart classroom analysis that processes class videos for attendance, attention, gaze, and emotion recognition with a visual dashboard.",
    href: "https://github.com/MahdiAmrollahi/CV-Classroom-Analytics",
  },
  {
    name: "Self-Corrective RAG",
    type: "Adaptive retrieval agent",
    stack: "Python, LangGraph, LlamaIndex",
    description:
      "A cyclical RAG system that rewrites queries when retrieval quality drops, keeping answers resilient under weak context.",
    href: "https://github.com/MahdiAmrollahi/Self-Corrective-RAG",
  },
  {
    name: "Omni-Agent",
    type: "Multi-tool AI agent",
    stack: "Python, LangChain, tools",
    description:
      "An extensible agent that classifies user intent, chooses tools for code, search, database, planning, and returns readable results.",
    href: "https://github.com/MahdiAmrollahi/omni-agent",
  },
  {
    name: "Clipstash",
    type: "Secure pastebin API",
    stack: "Rust, Rocket, REST",
    description:
      "Password-protected pastes, expiration dates, hit tracking, and an API-first service shape for production-style practice.",
    href: "https://github.com/MahdiAmrollahi/clipstash",
  },
  {
    name: "NLP Language Modeling",
    type: "Applied NLP lab",
    stack: "PyTorch, Persian NLP, n-grams",
    description:
      "Spam classification, Persian text processing, tokenization, perplexity evaluation, word clouds, and generation workflows.",
    href: "https://github.com/MahdiAmrollahi/nlp-text-classification-and-language-modeling",
  },
  {
    name: "Design Patterns",
    type: "Python OOP reference",
    stack: "Python, OOP, patterns",
    description:
      "A clean, hands-on collection of classic design patterns implemented in Python as a reusable reference library.",
    href: "https://github.com/MahdiAmrollahi/design_patterns",
  },
  {
    name: "DRF Tracking Test",
    type: "Django REST Framework",
    stack: "Python, DRF, API tracking",
    description:
      "A practical DRF testbed exploring request tracking, observability, and API behavior patterns.",
    href: "https://github.com/MahdiAmrollahi/drf_tracking_test",
  },
  {
    name: "Regression & MLP Lab",
    type: "Beginner ML notebooks",
    stack: "Python, scikit-learn, NumPy, Pandas",
    description:
      "Step-by-step regression (linear and MLP) and decision tree examples for understanding core ML concepts.",
    href: "https://github.com/MahdiAmrollahi/Regression_DT_MLP",
  },
];

const skills = [
  [
    "Backend systems",
    "Python",
    "Django",
    "Django REST Framework",
    "Laravel",
    "Go",
    "Node.js",
    "REST APIs",
  ],
  [
    "Data & infrastructure",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Git",
    "Linux",
    "Web Scraping",
  ],
  [
    "AI engineering",
    "PyTorch",
    "Keras",
    "LangChain",
    "LangGraph",
    "LlamaIndex",
    "RAG",
    "LLMs",
    "Computer Vision",
  ],
  [
    "Research foundations",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "OpenCV",
    "Scikit-learn",
    "NLP",
    "Statistics",
    "Linear Algebra",
  ],
];

const signals = [
  { label: "Public repositories", value: "68" },
  { label: "Stars earned", value: "106" },
  { label: "GitHub followers", value: "13" },
  { label: "Active since", value: "2023" },
];

const education = {
  school: "Iran University of Science and Technology",
  degree: "B.Sc. in Computer Engineering",
  period: "09/2022 – present",
  location: "Tehran, Iran",
  coursework: [
    { name: "Natural Language Processing", grade: "20.00 / 20" },
    { name: "Advanced Software Engineering", grade: "19.20 / 20" },
    { name: "Data Structures", grade: "19.05 / 20" },
    { name: "Computer Vision", grade: "17.75 / 20" },
    { name: "Artificial Intelligence", grade: "17.65 / 20" },
  ],
};

const experience = [
  {
    role: "AI Developer",
    company: "Comfyuse",
    period: "07/2025 – Present",
    location: "Tehran, Iran",
    bullets: [
      "Designed and developed scalable backend systems and RESTful APIs using Python, Django, DRF, PostgreSQL, and Redis.",
      "Built and deployed containerized applications with Docker while maintaining CI/CD pipelines for automated testing and deployment.",
      "Developed AI-powered features using LangChain, LangGraph, and modern LLMs, including agent-based workflows and Retrieval-Augmented Generation (RAG) pipelines.",
      "Optimized deployment infrastructure across VPS and RunPod environments, improving reliability, scalability, and operational efficiency.",
      "Collaborated with cross-functional teams to integrate AI services into production-ready backend architectures.",
    ],
  },
  {
    role: "Backend Developer — AI-Powered",
    company: "Painfools Studio",
    period: "07/2025 – 11/2025",
    location: "Tehran, Iran",
    bullets: [
      "Developed backend services and RESTful APIs for a multiplayer game using Django and Django REST Framework.",
      "Designed scalable game logic, player interaction systems, and backend data management.",
      "Built AI-powered image processing pipelines using ControlNet for image enhancement and product-matching applications.",
      "Integrated AI models with backend services through modular and scalable APIs.",
      "Participated in system architecture design to improve maintainability and performance.",
    ],
  },
];

const interests = [
  "Backend Engineering & Distributed Systems",
  "Artificial Intelligence & Machine Learning",
  "Deep Learning, Computer Vision, and NLP",
  "Large Language Models (LLMs) & AI Agent Systems",
  "Scalable Software Architecture & Cloud Deployment",
];

const timeline = [
  {
    title: "Backend craft",
    text: "Designing API-centered systems with Django, DRF, Node, Laravel, Go, PostgreSQL, Redis, Docker, and Linux deployment habits.",
  },
  {
    title: "AI systems",
    text: "Building RAG, agents, NLP, CV, and PyTorch learning projects as public labs — from classroom analytics to self-corrective RAG and DSL compilers.",
  },
  {
    title: "Production mindset",
    text: "Practicing secure services, reusable starters, reverse proxy notes, validation, pagination, CI/CD, observability, and clean docs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2ea] text-[#11130f]">
      <section className="hero-grid relative min-h-[94vh] border-b border-black/10 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-6">
          <nav className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/60">
            <span>Mahdi Amrollahi Biouki</span>
            <div className="flex flex-wrap gap-3 tracking-normal normal-case">
              <a className="nav-link" href="https://github.com/MahdiAmrollahi">
                GitHub
              </a>
              <a className="nav-link" href="https://www.linkedin.com/in/mahdi-amrollahi-248442254">
                LinkedIn
              </a>
              <a className="nav-link" href="mailto:mahdiamr83@gmail.com">
                Email
              </a>
              <a className="nav-link" href="/Mahdi_Amrollahi_Biouki_Resume.pdf">
                Resume PDF
              </a>
            </div>
          </nav>

          <div className="profile-header">
            <Image
              src="/mahdi-avatar.jpg"
              alt="Mahdi Amrollahi Biouki"
              width={112}
              height={112}
              className="profile-avatar"
              priority
            />
            <div className="profile-meta">
              <p className="profile-eyebrow">Mahdi Amrollahi Biouki</p>
              <h2 className="profile-role">Backend Developer / AI Researcher</h2>
              <p className="profile-sub">
                Tehran, Iran · Computer Engineering at IUST · Open to backend
                and AI engineering roles.
              </p>
            </div>
            <div className="profile-actions">
              <a
                className="action action-primary"
                href="/Mahdi_Amrollahi_Biouki_Resume.pdf"
              >
                Download resume
              </a>
              <a
                className="action action-secondary profile-action-dark"
                href="https://github.com/MahdiAmrollahi"
              >
                Explore code
              </a>
            </div>
          </div>

          <div className="grid flex-1 gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
            <div className="flex min-h-[60vh] flex-col justify-between gap-8 rounded-[28px] border border-black/10 bg-[#11130f] p-6 text-[#f8f4e8] shadow-2xl shadow-black/15 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="status-dot" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d5ff5f]">
                  Available for new work
                </span>
              </div>

              <div className="max-w-4xl">
                <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-white/45">
                  Tehran-time builder with a research engine
                </p>
                <h1 className="hero-title">
                  Systems that think clearly, ship cleanly, and leave useful traces.
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-white/70">
                Computer Engineering student building production-minded backend
                products and AI experiments where reliable APIs, retrieval
                systems, and practical machine learning meet. Currently working
                on agent-based AI features and scalable Django backends.
              </p>
            </div>

            <aside className="grid gap-5 lg:grid-rows-[1fr_1fr]">
              <div className="flex h-full flex-col rounded-[28px] border border-black/10 bg-[#d5ff5f] p-6 shadow-xl shadow-black/10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/55">
                    Current profile
                  </p>
                  <h2 className="mt-2 text-3xl font-black">MahdiAmrollahi</h2>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                  {signals.map((item) => (
                    <div className="metric" key={item.label}>
                      <span>{item.value}</span>
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="terminal-panel">
                <div className="terminal-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="space-y-5 font-mono text-sm">
                  <p className="text-[#d5ff5f]">$ focus --now</p>
                  <p>backend: APIs, data stores, deployment literacy</p>
                  <p>ai: RAG, agents, NLP, neural network notebooks</p>
                  <p>style: public learning, clean docs, practical systems</p>
                  <p className="text-white/45">output: useful software with research depth</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid items-center gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Selected repositories</p>
            <h2 className="section-title">Proof, not decoration.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-black/65">
              A portfolio should behave like evidence. These projects show the range:
              backend services, AI agents, retrieval systems, and learning labs.
            </p>
          </div>
          <ProjectShowcase projects={projects} variant="light" />
        </div>
      </section>

      <section className="section-dark border-y border-white/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[92rem] items-center gap-10 lg:grid-cols-[0.9fr_1.5fr] lg:px-2">
          <div>
            <p className="eyebrow text-[#d5ff5f]">Capability map</p>
            <h2 className="section-title text-white">Modern backend with AI depth.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/70">
              Languages, frameworks, and tools I reach for when shipping
              production services, data pipelines, and AI features.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(([title, ...items]) => (
              <div className="skill-block" key={title}>
                <h3>{title}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="eyebrow">Professional experience</p>
            <h2 className="section-title">Roles where the work shipped.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-black/65">
              Backend and AI work in production-minded teams — Django services,
              RAG pipelines, AI-powered features, and infrastructure tuning.
            </p>
          </div>
          <div className="grid gap-4">
            {experience.map((job) => (
              <article className="experience-card" key={`${job.company}-${job.role}`}>
                <header className="experience-header">
                  <div>
                    <p className="experience-eyebrow">{job.role}</p>
                    <h3 className="experience-title">{job.company}</h3>
                  </div>
                  <div className="experience-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </header>
                <ul className="experience-list">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-y border-white/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[92rem] items-center gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:px-2">
          <div>
            <p className="eyebrow text-[#d5ff5f]">Education</p>
            <h2 className="section-title text-white">Where the foundations were built.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/70">
              A computer engineering program where AI, computer vision, NLP, and
              advanced software engineering are taken seriously.
            </p>
          </div>
          <div className="education-card-on-dark">
            <header className="experience-header">
              <div>
                <p className="education-eyebrow">{education.degree}</p>
                <h3 className="education-school">{education.school}</h3>
              </div>
              <div className="education-meta">
                <span>{education.period}</span>
                <span>{education.location}</span>
              </div>
            </header>
            <div className="education-courses">
              <p className="education-section-title">Relevant coursework</p>
              <ul>
                {education.coursework.map((course) => (
                  <li key={course.name}>
                    <span>{course.name}</span>
                    <span className="education-grade">{course.grade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="eyebrow">Interests</p>
            <h2 className="section-title">What keeps the engines warm.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-black/65">
              The themes I keep returning to between paid work, side projects,
              and late-night notebooks.
            </p>
          </div>
          <div className="interests-grid">
            {interests.map((item) => (
              <span className="interest-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark border-y border-white/10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[92rem] items-center gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:px-2">
          <div>
            <p className="eyebrow text-[#d5ff5f]">Working narrative</p>
            <h2 className="section-title text-white">A resume that moves like a system diagram.</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/70">
              How the day-to-day thinking is wired together — backend craft,
              AI systems, and a production mindset.
            </p>
          </div>
          <div className="timeline timeline-dark">
            {timeline.map((item) => (
              <div className="timeline-item timeline-item-dark" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#11130f] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-[0.2em] text-white/45">
            © {new Date().getFullYear()} Mahdi Amrollahi Biouki
          </p>
          <div className="flex flex-wrap gap-3 text-white/70">
            <a className="footer-link" href="https://github.com/MahdiAmrollahi">
              GitHub
            </a>
            <a className="footer-link" href="https://www.linkedin.com/in/mahdi-amrollahi-248442254">
              LinkedIn
            </a>
            <a className="footer-link" href="mailto:mahdiamr83@gmail.com">
              mahdiamr83@gmail.com
            </a>
            <a className="footer-link" href="/Mahdi_Amrollahi_Biouki_Resume.pdf">
              Resume PDF
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
