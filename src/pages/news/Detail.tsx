import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleSections from "@/components/ArticleSections";
import { getArticleBySlug, getRelatedArticles } from "@/data/news";

export default function NewsDetail() {
  const { slug = "" } = useParams();
  const a = getArticleBySlug(slug);

  if (!a) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="pt-44 pb-32 px-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Article not found</h1>
          <Link to="/news" className="mt-6 inline-flex items-center gap-2 text-[#1040A6] font-semibold">
            <ArrowLeft size={16} /> Back to News
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const related = getRelatedArticles(a.slug, 3);

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
        <div className="relative max-w-[920px] mx-auto">
          <Link to="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[13px] font-medium transition-colors">
            <ArrowLeft size={15} /> All News
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-white/70">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold tracking-[0.14em] uppercase text-white" style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}>
              <Tag size={11} /> {a.category}
            </span>
            {a.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} /> {a.date}
              </span>
            )}
          </div>
          <h1 className="mt-5 font-bold tracking-[-0.025em] leading-[1.1] text-white" style={{ fontSize: "clamp(30px,4.2vw,52px)" }}>
            {a.title}
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative px-6 lg:px-8 -mt-12">
        <div className="max-w-[1080px] mx-auto rounded-[24px] overflow-hidden bg-slate-100 border border-white shadow-[0_30px_60px_-24px_rgba(15,30,80,0.25)] aspect-[16/8]">
          <img
            src={a.image}
            alt={a.title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          />
        </div>
      </section>

      {/* Body */}
      <main className="relative bg-white">
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-[820px] mx-auto">
            <ArticleSections sections={a.sections} />
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f4f8ff 100%)" }}>
            <div className="max-w-[1280px] mx-auto">
              <div className="flex items-end justify-between flex-wrap gap-4">
                <h2 className="font-bold tracking-[-0.02em] text-slate-900" style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>
                  Related articles
                </h2>
                <Link to="/news" className="text-[#1040A6] font-semibold text-[14px] inline-flex items-center gap-1.5">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/news/${r.slug}`}
                    className="group rounded-[22px] bg-white border border-[#E5E7EB] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_28px_56px_-22px_rgba(27,143,210,0.22)]"
                  >
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-[0.14em] uppercase text-white" style={{ background: "rgba(16,64,166,0.92)", backdropFilter: "blur(6px)" }}>
                        {r.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="inline-flex items-center gap-2 text-[12px] text-slate-400">
                        <Calendar size={13} /> {r.date}
                      </div>
                      <h3 className="mt-3 text-[17px] font-bold leading-[1.32] text-slate-900 line-clamp-3">{r.title}</h3>
                      <p className="mt-3 text-[13.5px] leading-[1.65] text-slate-500 line-clamp-3">{r.excerpt}</p>
                      <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1040A6]">
                        Read more
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
