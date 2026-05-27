import Image from "next/image";

const projects = [
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
];

const skills = [
  ["Backend systems", "Django", "Node.js", "Laravel", "REST APIs"],
  ["Data infrastructure", "PostgreSQL", "Redis", "Docker", "Linux"],
  ["AI engineering", "PyTorch", "LangChain", "LlamaIndex", "RAG"],
  ["Research foundations", "Statistics", "Clustering", "NLP", "Linear Algebra"],
];

const signals = [
  { label: "Public repositories", value: "63" },
  { label: "GitHub followers", value: "14" },
  { label: "Active since", value: "2023" },
  { label: "Core mode", value: "Build + research" },
];

const timeline = [
  {
    title: "Backend craft",
    text: "Designing API-centered systems with Django, Node, Laravel, PostgreSQL, Redis, Docker, and Linux deployment habits.",
  },
  {
    title: "AI systems",
    text: "Building RAG, agent, NLP, clustering, LSTM, Hopfield, Kohonen, RBF, and PyTorch learning projects as public labs.",
  },
  {
    title: "Production mindset",
    text: "Practicing secure services, reusable starter projects, reverse proxy notes, validation, pagination, auth-adjacent flows, and clean docs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2ea] text-[#11130f]">
      <section className="hero-grid relative min-h-[94vh] border-b border-black/10 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <nav className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/60">
            <span>Mahdi Amrollahi Biouki</span>
            <div className="flex gap-3 tracking-normal normal-case">
              <a className="nav-link" href="https://github.com/MahdiAmrollahi">
                GitHub
              </a>
              <a className="nav-link" href="/Mahdi_Amrollahi_Biouki_Resume.pdf">
                Resume PDF
              </a>
            </div>
          </nav>

          <div className="grid flex-1 gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="flex min-h-[70vh] flex-col justify-between gap-8 rounded-[28px] border border-black/10 bg-[#11130f] p-6 text-[#f8f4e8] shadow-2xl shadow-black/15 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="status-dot" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d5ff5f]">
                  Backend Developer / AI Researcher
                </span>
              </div>

              <div className="max-w-4xl">
                <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-white/45">
                  Tehran-time builder with a research engine
                </p>
                <h1 className="text-balance text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
                  Systems that think clearly, ship cleanly, and leave useful traces.
                </h1>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-2xl text-lg leading-8 text-white/70">
                  I build backend products and AI experiments where reliable APIs,
                  retrieval systems, and practical machine learning meet. The work
                  lives in public: agents, RAG pipelines, NLP labs, Rust services,
                  statistics notebooks, and production-minded backend practice.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a className="action action-primary" href="/Mahdi_Amrollahi_Biouki_Resume.pdf">
                    Download resume
                  </a>
                  <a className="action action-secondary" href="https://github.com/MahdiAmrollahi">
                    Explore code
                  </a>
                </div>
              </div>
            </div>

            <aside className="grid gap-5 lg:grid-rows-[auto_1fr]">
              <div className="rounded-[28px] border border-black/10 bg-[#d5ff5f] p-6 shadow-xl shadow-black/10">
                <div className="flex items-center gap-4">
                  <Image
                    src="/mahdi-avatar.jpg"
                    alt="Mahdi Amrollahi Biouki"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-2xl border border-black/20 object-cover"
                    priority
                  />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/55">
                      Current profile
                    </p>
                    <h2 className="text-3xl font-black">MahdiAmrollahi</h2>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
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

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
        <div>
          <p className="eyebrow">Selected repositories</p>
          <h2 className="section-title">Proof, not decoration.</h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-black/65">
            A portfolio should behave like evidence. These projects show the range:
            backend services, AI agents, retrieval systems, and learning labs.
          </p>
        </div>
        <div className="grid gap-3">
          {projects.map((project, index) => (
            <a className="project-row" href={project.href} key={project.name}>
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                  {project.type}
                </p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span className="stack">{project.stack}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#101820] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-[#d5ff5f]">Capability map</p>
            <h2 className="section-title text-white">Modern backend with AI depth.</h2>
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

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Working narrative</p>
            <h2 className="section-title">A resume that moves like a system diagram.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
