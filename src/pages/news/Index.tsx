import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NEWS_ARTICLES } from "@/data/news";

export default function NewsPage() {
  const featured = NEWS_ARTICLES[0];
  const rest = NEWS_ARTICLES.slice(1);

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
        <div className="relative max-w-[1100px] mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.24em] uppercase font-semibold text-white/75">
            <span className="w-7 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg,#1B8FD2,#5ec0ff)" }} />
            News
            <span className="w-7 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg,#5ec0ff,#7a5cff)" }} />
          </span>
          <h1 className="mt-5 font-bold tracking-[-0.025em] leading-[1.06] text-white" style={{ fontSize: "clamp(40px,5.4vw,72px)" }}>
            Insight &amp; xu hướng công nghệ
          </h1>
          <p className="mt-7 mx-auto max-w-[820px] text-[17px] leading-[1.75] text-white/75">
            Cập nhật những góc nhìn mới nhất về chuyển đổi số, AI, eKYC, Web 3.0 và các best practice trong phát triển phần mềm
            từ đội ngũ chuyên gia AIPOWER.
          </p>
        </div>
      </section>

      <main className="relative bg-white">
        {/* Featured */}
        {featured && (
          <section className="relative pt-24 pb-12 px-6 lg:px-8">
            <div className="max-w-[1280px] mx-auto">
              <Link to={`/news/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group">
                <div className="lg:col-span-7">
                  <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB] bg-slate-100 aspect-[16/10]" style={{ boxShadow: "0 6px 28px -16px rgba(15,30,80,0.18)" }}>
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 flex">
                  <div className="rounded-[24px] bg-white border border-[#E5E7EB] p-7 md:p-8 flex flex-col" style={{ boxShadow: "0 6px 24px -10px rgba(15,30,80,0.08)" }}>
                    <div className="inline-flex items-center gap-2 text-[11.5px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#1040A6" }}>
                      <span className="px-2.5 py-0.5 rounded-full text-white" style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)", letterSpacing: "0.14em" }}>
                        Featured
                      </span>
                      <span className="text-slate-400">{featured.category}</span>
                    </div>
                    <h2 className="mt-4 text-[24px] md:text-[26px] font-bold tracking-[-0.01em] leading-[1.25] text-slate-900">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-[14.5px] leading-[1.7] text-slate-500">{featured.excerpt}</p>
                    <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1040A6]">
                      Đọc bài viết
                      <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Articles grid */}
        <section className="relative py-14 px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#1040A6" }}>
                  <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
                  Latest Articles
                </span>
                <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(28px,3.2vw,40px)" }}>
                  Bài viết mới nhất
                </h2>
              </div>
              <div className="text-[13.5px] text-slate-500 inline-flex items-center gap-2">
                <Newspaper size={15} strokeWidth={2} className="text-[#1B8FD2]" />
                {NEWS_ARTICLES.length} bài viết
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {rest.map((a) => (
                <Link
                  key={a.slug}
                  to={`/news/${a.slug}`}
                  className="group rounded-[22px] bg-white border border-[#E5E7EB] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_28px_56px_-22px_rgba(27,143,210,0.22)]"
                  style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -16px rgba(15,30,80,0.08)" }}
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-[0.14em] uppercase text-white" style={{ background: "rgba(16,64,166,0.92)", backdropFilter: "blur(6px)" }}>
                      {a.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="inline-flex items-center gap-2 text-[12px] text-slate-400">
                      <Calendar size={13} strokeWidth={2} />
                      {a.date || "AIPOWER Insights"}
                    </div>
                    <h3 className="mt-3 text-[17px] font-bold leading-[1.32] text-slate-900 line-clamp-3">{a.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-[1.65] text-slate-500 line-clamp-3">{a.excerpt}</p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1040A6]">
                      Đọc thêm
                      <ArrowRight size={14} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
