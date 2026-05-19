import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleSections from "@/components/ArticleSections";
import { CASE_STUDIES, getCaseBySlug, getRelatedCases } from "@/data/case-studies";

export default function CaseStudyDetail() {
  const { slug = "" } = useParams();
  const c = getCaseBySlug(slug);

  if (!c) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="pt-44 pb-32 px-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Case study not found</h1>
          <p className="mt-3 text-slate-500">The project you’re looking for doesn’t exist.</p>
          <Link to="/case-studies" className="mt-6 inline-flex items-center gap-2 text-[#1040A6] font-semibold">
            <ArrowLeft size={16} /> Back to all case studies
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const related = getRelatedCases(c.slug, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        data-theme="dark"
        className="relative overflow-hidden pt-40 pb-24 px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(1100px 520px at 12% 18%, rgba(27,143,210,0.32), transparent 70%)," +
            "radial-gradient(900px 480px at 88% 30%, rgba(122,92,255,0.22), transparent 72%)," +
            "linear-gradient(180deg,#0a0c24 0%,#10112a 55%,#1a1f4a 100%)",
        }}
      >
        <div className="relative max-w-[1180px] mx-auto">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[13px] font-medium transition-colors">
            <ArrowLeft size={15} /> All Case Studies
          </Link>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold text-white/85" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}>
                <Tag size={12} /> {c.category}
              </span>
              <h1 className="mt-5 font-bold tracking-[-0.025em] leading-[1.06] text-white" style={{ fontSize: "clamp(34px,4.6vw,58px)" }}>
                {c.title}
              </h1>
              {c.description && (
                <p className="mt-6 max-w-[640px] text-[16.5px] leading-[1.75] text-white/75">{c.description}</p>
              )}
            </div>
            <div className="lg:col-span-5">
              <div
                className="rounded-[26px] p-8 grid place-items-center aspect-[5/4]"
                style={{
                  background: "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 30px 60px -28px rgba(0,0,0,0.55)",
                }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="max-w-[78%] max-h-[78%] object-contain drop-shadow-[0_18px_36px_rgba(27,143,210,0.35)]"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="relative bg-white">
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-[920px] mx-auto">
            <ArticleSections sections={c.sections} />
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f4f8ff 100%)" }}>
            <div className="max-w-[1280px] mx-auto">
              <div className="flex items-end justify-between flex-wrap gap-4">
                <h2 className="font-bold tracking-[-0.02em] text-slate-900" style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>
                  Other projects
                </h2>
                <Link to="/case-studies" className="text-[#1040A6] font-semibold text-[14px] inline-flex items-center gap-1.5">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/case-studies/${r.slug}`}
                    className="group rounded-[22px] bg-white border border-slate-200/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_24px_50px_-20px_rgba(27,143,210,0.25)] flex flex-col"
                    style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}
                  >
                    <span className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold tracking-[0.08em] uppercase" style={{ background: "linear-gradient(135deg,rgba(16,64,166,0.08),rgba(27,143,210,0.10))", color: "#1040A6" }}>
                      {r.category}
                    </span>
                    <h3 className="mt-4 text-[18px] font-bold text-slate-900 leading-[1.3]">{r.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-slate-600 flex-1">{r.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1040A6]">
                      Learn more
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-[980px] mx-auto rounded-[28px] p-10 md:p-14 text-white relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
            <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(540px 320px at 88% 18%, rgba(27,143,210,0.32), transparent 70%), radial-gradient(420px 280px at 6% 92%, rgba(122,92,255,0.22), transparent 70%)" }} />
            <div className="relative">
              <h2 className="font-bold tracking-[-0.02em] leading-[1.18]" style={{ fontSize: "clamp(26px,2.8vw,38px)" }}>
                Have a similar project?
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-[15.5px] leading-[1.75] text-white/80">
                Tell us about your goals — we’ll help you turn them into a real, working solution.
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

export const __ALL_CASE_SLUGS__ = CASE_STUDIES.map((c) => c.slug);
