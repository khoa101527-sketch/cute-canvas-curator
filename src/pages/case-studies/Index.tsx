import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Cpu, Workflow, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CASE_STUDIES, type CaseStudy } from "@/data/case-studies";

const ICONS: Record<string, typeof Globe> = {
  "Web Projects": Globe,
  "Mobile Projects": Smartphone,
  "AI, IoT & Cloud": Cpu,
  "Digital Transformation": Workflow,
  "Transformation": RefreshCw,
};

const GROUP_TITLES: Record<string, string> = {
  "Web Projects": "Web Projects",
  "Mobile Projects": "Mobile Projects",
  "AI, IoT & Cloud": "AI, IoT & Cloud Projects",
  "Digital Transformation": "Digital Transformation Projects",
  "Transformation": "Transformation Projects",
};

const GROUP_ORDER = ["Web Projects", "Mobile Projects", "AI, IoT & Cloud", "Digital Transformation", "Transformation"];

function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link
      to={`/case-studies/${c.slug}`}
      className="group relative rounded-[22px] bg-white border border-slate-200/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_24px_50px_-20px_rgba(27,143,210,0.25)] flex flex-col"
      style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}
    >
      <span
        className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold tracking-[0.08em] uppercase"
        style={{ background: "linear-gradient(135deg,rgba(16,64,166,0.08),rgba(27,143,210,0.10))", color: "#1040A6" }}
      >
        {c.category}
      </span>
      <h3 className="mt-4 text-[18px] font-bold text-slate-900 leading-[1.3]">{c.title}</h3>
      <p className="mt-2.5 text-[14px] leading-[1.65] text-slate-600 flex-1">{c.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold" style={{ color: "#1040A6" }}>
        Learn more
        <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        data-theme="dark"
        className="relative overflow-hidden pt-44 pb-32 px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(1100px 520px at 12% 18%, rgba(27,143,210,0.32), transparent 70%)," +
            "radial-gradient(900px 480px at 88% 30%, rgba(122,92,255,0.22), transparent 72%)," +
            "linear-gradient(180deg,#0a0c24 0%,#10112a 55%,#1a1f4a 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(1.2px 1.2px at 18% 32%, rgba(255,255,255,0.6) 50%, transparent 60%)," +
              "radial-gradient(1px 1px at 70% 22%, rgba(255,255,255,0.5) 50%, transparent 60%)," +
              "radial-gradient(1.4px 1.4px at 82% 70%, rgba(255,255,255,0.45) 50%, transparent 60%)," +
              "radial-gradient(1px 1px at 32% 78%, rgba(255,255,255,0.4) 50%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto text-center">          <h1 className="font-bold tracking-[-0.025em] leading-[1.06] text-white" style={{ fontSize: "clamp(40px,5.4vw,72px)" }}>
            More than 200 successful projects
          </h1>
          <p className="mt-7 mx-auto max-w-[820px] text-[17px] leading-[1.75] text-white/75">
            Across diverse industries — web, mobile, AI, IoT, cloud, and digital transformation.
            Explore how AIPOWER helps enterprises modernize, automate, and grow.
          </p>
        </div>
      </section>

      <main className="relative bg-white">
        {GROUP_ORDER.map((cat, idx) => {
          const cases = CASE_STUDIES.filter((c) => c.category === cat);
          if (cases.length === 0) return null;
          const Icon = ICONS[cat];
          const isAlt = idx % 2 === 1;
          return (
            <section
              key={cat}
              className="relative py-20 px-6 lg:px-8"
              style={isAlt ? { background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" } : undefined}
            >
              <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col items-center text-center max-w-[760px] mx-auto">
                  <div
                    className="w-[56px] h-[56px] rounded-2xl grid place-items-center text-white"
                    style={{
                      background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
                      boxShadow: "0 14px 28px -10px rgba(27,143,210,0.45)",
                    }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h2 className="mt-5 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(28px,3.2vw,42px)" }}>
                    {GROUP_TITLES[cat]}
                  </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cases.map((c) => (
                    <CaseCard key={c.slug} c={c} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#f7faff 0%, #ffffff 100%)" }}>
          <div className="max-w-[980px] mx-auto rounded-[28px] p-10 md:p-14 text-white relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
            <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(540px 320px at 88% 18%, rgba(27,143,210,0.32), transparent 70%), radial-gradient(420px 280px at 6% 92%, rgba(122,92,255,0.22), transparent 70%)" }} />
            <div className="relative">
              <h2 className="font-bold tracking-[-0.02em] leading-[1.18]" style={{ fontSize: "clamp(26px,2.8vw,38px)" }}>
                Have a project in mind?
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-[15.5px] leading-[1.75] text-white/80">
                Tell us about your goals — we'll help you turn them into a real, working solution.
              </p>
              <a
                href="mailto:contact@aipower.vn"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14.5px] font-semibold transition-all duration-200"
                style={{ background: "#ffffff", color: "#1040A6", boxShadow: "0 18px 36px -12px rgba(27,143,210,0.45)" }}
              >
                Start a project
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
