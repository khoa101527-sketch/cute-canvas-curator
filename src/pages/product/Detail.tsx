import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Target, Users, TrendingUp, Building2, Zap, BarChart3, Calendar, MessageCircle, Layers } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { findProductBySlug, PRODUCTS, PRODUCT_GROUP_META, getProductLogo } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MODULE_ICONS = [Layers, Zap, BarChart3, Sparkles, Target, Building2];

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? findProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 grid place-items-center px-6 py-40 text-center">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "#0b1736" }}>Không tìm thấy sản phẩm</h1>
            <Link to="/" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold" style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}>
              <ArrowLeft size={16} /> Về trang chủ
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const groupMeta = PRODUCT_GROUP_META[product.group];
  const related = PRODUCTS.filter((p) => p.group === product.group && p.slug !== product.slug).slice(0, 3);

  // Split customers string into chips (by · , or ;)
  const customerChips = product.customers
    .split(/[·,;]| - /)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && s.length < 80);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* [2] Hero — light, brand gradient */}
      <section className="relative pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 500px at 85% 15%, rgba(27,143,210,0.18) 0%, transparent 65%)," +
              "radial-gradient(700px 500px at 10% 90%, rgba(16,64,166,0.10), transparent 70%)," +
              "linear-gradient(180deg,#ffffff 0%,#f5f9ff 100%)",
          }}
        />
        <div className="max-w-[1180px] mx-auto">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[12.5px] text-slate-500 mb-8">
            <Link to="/" className="hover:text-slate-900 transition-colors">Trang chủ</Link>
            <span>›</span>
            <span>{groupMeta.title}</span>
            <span>›</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="h-16 md:h-20 mb-6 flex items-center">
                <img src={getProductLogo(product.slug)} alt={product.name} className="max-h-full w-auto object-contain" />
              </div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ background: "rgba(16,64,166,0.08)", border: "1px solid rgba(16,64,166,0.15)", color: "#1040A6" }}
              >
                {groupMeta.eyebrow} · {groupMeta.title}
              </span>
              <h1
                className="mt-5 font-bold tracking-[-0.025em] leading-[1.05]"
                style={{ fontSize: "clamp(36px,4.8vw,60px)", color: "#0b1736" }}
              >
                {product.name}
              </h1>
              <p className="mt-4 text-[18px] leading-[1.55] font-semibold" style={{ color: "#1040A6" }}>
                {product.tagline}
              </p>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-slate-600 max-w-[560px]">
                {product.short}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@aipower.vn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] text-white transition-transform hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg,#1040A6,#1B8FD2)",
                    boxShadow: "0 10px 24px -10px rgba(16,64,166,0.55)",
                  }}
                >
                  Đặt lịch Demo <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:contact@aipower.vn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] text-slate-700 hover:text-slate-900 transition-colors bg-white border border-slate-200"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>

            {/* RIGHT — floating composition */}
            <div className="relative">
              <div
                className="relative mx-auto rounded-[28px] p-8 overflow-hidden"
                style={{
                  background: "linear-gradient(160deg,#0a0c24 0%,#16306c 100%)",
                  boxShadow: "0 40px 90px -30px rgba(16,64,166,0.45)",
                }}
              >
                <div
                  className="absolute -top-24 -right-20 w-72 h-72 rounded-full opacity-60 blur-3xl"
                  style={{ background: product.accent }}
                />
                {/* mock dashboard */}
                <div className="relative rounded-2xl bg-white/95 p-5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="h-6 w-auto flex items-center">
                      <img src={getProductLogo(product.slug)} alt="" className="h-5 w-auto object-contain" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[0,1,2].map(i => (
                      <div key={i} className="rounded-lg p-2.5" style={{ background: "linear-gradient(135deg,#f5f9ff,#eef4ff)" }}>
                        <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Metric {i+1}</div>
                        <div className="text-[14px] font-bold mt-1" style={{ color: "#1040A6" }}>+{[24,38,12][i]}%</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 h-20 rounded-lg relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f8fbff,#eef4ff)" }}>
                    <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <path d="M0,60 Q40,40 60,45 T120,30 T200,15" fill="none" stroke="#1B8FD2" strokeWidth="2" />
                      <path d="M0,70 Q40,55 60,58 T120,48 T200,35" fill="none" stroke="#1040A6" strokeWidth="2" opacity="0.6" />
                    </svg>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {[0,1].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md" style={{ background: product.accent, opacity: 0.85 }} />
                        <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${[70,45][i]}%`, background: "linear-gradient(90deg,#1040A6,#1B8FD2)" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* float chip */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 bg-white shadow-2xl border border-slate-100 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl grid place-items-center text-white" style={{ background: product.accent }}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Powered by</div>
                    <div className="text-[12.5px] font-bold" style={{ color: "#0b1736" }}>AIPOWER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [3] Problem → Solution */}
      <section className="px-6 lg:px-8 py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#dc2626,#f97316)" }}>
                <Target size={18} />
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-500">Vấn đề</div>
                <div className="text-[20px] font-bold" style={{ color: "#0b1736" }}>Giải quyết vấn đề gì?</div>
              </div>
            </div>
            <div className="space-y-3">
              {product.problems.map((p, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 flex items-start gap-3.5 transition-all hover:shadow-[0_18px_40px_-22px_rgba(220,38,38,0.3)]">
                  <span className="w-7 h-7 rounded-lg grid place-items-center shrink-0 text-[12px] font-bold text-white" style={{ background: "linear-gradient(135deg,#dc2626,#f97316)" }}>
                    {i + 1}
                  </span>
                  <p className="text-[14.5px] text-slate-600 leading-[1.6]">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}>
                <Sparkles size={18} />
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#1040A6" }}>Giải pháp</div>
                <div className="text-[20px] font-bold" style={{ color: "#0b1736" }}>AIPOWER giải quyết như thế nào</div>
              </div>
            </div>
            <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{ background: "linear-gradient(140deg,#0f1c4d 0%,#16306c 60%,#1B8FD2 130%)" }}>
              <div className="absolute -top-16 -right-12 w-48 h-48 rounded-full opacity-40 blur-3xl" style={{ background: product.accent }} />
              <p className="relative text-[15px] leading-[1.7] text-white/90">{product.role}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {product.features.slice(0, 4).map((f, i) => (
                <div key={i} className="rounded-xl bg-slate-50 border border-slate-100 p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "#1040A6" }} />
                  <span className="text-[13px] font-medium text-slate-700 leading-[1.45]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [4] Core Modules / Capabilities */}
      <section className="px-6 lg:px-8 py-20" style={{ background: "linear-gradient(180deg,#f7faff 0%, #ffffff 100%)" }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#1040A6" }}>
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
              Tính năng cốt lõi
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1B8FD2] to-[#1040A6]" />
            </span>
            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: "clamp(26px,2.8vw,38px)", color: "#0b1736" }}>
              Modules & Capabilities
            </h2>
            <p className="mt-3 text-[15px] text-slate-500">Bộ tính năng được thiết kế sẵn cho doanh nghiệp triển khai nhanh.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((f, i) => {
              const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
              const [title, ...rest] = f.split(/:\s|\s—\s|\s-\s/);
              const desc = rest.join(": ").trim();
              return (
                <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-22px_rgba(16,64,166,0.28)]">
                  <div className="w-11 h-11 rounded-xl grid place-items-center text-white mb-4" style={{ background: product.accent }}>
                    <Icon size={18} />
                  </div>
                  <div className="text-[15.5px] font-bold leading-[1.4]" style={{ color: "#0b1736" }}>{title}</div>
                  {desc && (
                    <p className="mt-2 text-[13.5px] text-slate-500 leading-[1.6]">{desc}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* [5] Target Customers + Use Cases */}
      <section className="px-6 lg:px-8 py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 border border-slate-200 bg-gradient-to-br from-white to-slate-50">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1B8FD2,#5ec0ff)" }}>
                <Users size={18} />
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-500">Khách hàng</div>
                <div className="text-[20px] font-bold" style={{ color: "#0b1736" }}>Đối tượng phù hợp</div>
              </div>
            </div>
            <p className="text-[14.5px] text-slate-600 leading-[1.7]">{product.customers}</p>
          </div>

          <div className="rounded-3xl p-8 border border-slate-200 bg-gradient-to-br from-white to-blue-50/40">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6,#7a5cff)" }}>
                <Building2 size={18} />
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-500">Ngành & Use Case</div>
                <div className="text-[20px] font-bold" style={{ color: "#0b1736" }}>Lĩnh vực ứng dụng</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {customerChips.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(16,64,166,0.05)",
                    borderColor: "rgba(16,64,166,0.18)",
                    color: "#1040A6",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [6] Results / Metrics — dark section */}
      <section data-theme="dark" className="px-6 lg:px-8 py-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 600px at 80% 30%, rgba(48,110,242,0.45) 0%, transparent 60%)," +
              "radial-gradient(700px 500px at 15% 80%, rgba(122,92,255,0.25), transparent 70%)," +
              "linear-gradient(180deg,#0a0c24 0%, #10112a 60%, #1a1f4a 100%)",
          }}
        />
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ background: "rgba(94,140,255,0.12)", border: "1px solid rgba(94,140,255,0.3)", color: "#9bd6ff" }}>
              <TrendingUp size={12} /> Kết quả đo lường
            </span>
            <h2 className="mt-4 font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: "clamp(28px,3vw,42px)" }}>
              Tác động thực tế từ khách hàng
            </h2>
            <p className="mt-3 text-[15px] text-white/60">KPI và business outcomes đo lường được sau khi triển khai {product.name}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {product.results.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="w-10 h-10 rounded-xl grid place-items-center mb-4" style={{ background: "rgba(155,214,255,0.15)", border: "1px solid rgba(155,214,255,0.25)" }}>
                  <CheckCircle2 size={16} className="text-[#9bd6ff]" />
                </div>
                <div className="text-[14.5px] text-white/85 leading-[1.6]">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [8] Related products */}
      {related.length > 0 && (
        <section className="px-6 lg:px-8 py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#1040A6" }}>
                  <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
                  Cùng nhóm giải pháp
                </span>
                <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.15]" style={{ fontSize: "clamp(24px,2.4vw,32px)", color: "#0b1736" }}>
                  Sản phẩm liên quan
                </h2>
              </div>
              <Link to={`/products/${product.group}`} className="hidden md:inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1040A6] hover:underline">
                Xem toàn bộ <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/product/${p.slug}`}
                  className="group rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_22px_50px_-20px_rgba(16,64,166,0.28)]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-14 h-14 rounded-xl grid place-items-center shrink-0 bg-white border border-slate-100 p-2" style={{ boxShadow: "0 6px 14px -8px rgba(16,64,166,0.25)" }}>
                      <img src={getProductLogo(p.slug)} alt={p.name} className="max-w-full max-h-full w-auto h-auto object-contain" />
                    </span>
                    <div>
                      <div className="text-[16px] font-bold" style={{ color: "#0b1736" }}>{p.name}</div>
                      <div className="text-[12px] text-slate-500 mt-0.5 leading-[1.3]">{p.tagline}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-[13.5px] text-slate-600 leading-[1.6]">{p.short}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1040A6]">
                    Xem chi tiết <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* [9] Final CTA */}
      <section className="px-6 lg:px-8 py-20" style={{ background: "linear-gradient(180deg,#f7faff 0%,#ffffff 100%)" }}>
        <div className="max-w-[1100px] mx-auto rounded-[32px] p-10 lg:p-14 text-white text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f1c4d 0%,#1040A6 60%,#1B8FD2 130%)", boxShadow: "0 40px 90px -30px rgba(16,64,166,0.55)" }}>
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full opacity-50 blur-3xl" style={{ background: "radial-gradient(circle,rgba(122,92,255,0.6),transparent 70%)" }} />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle,rgba(94,192,255,0.6),transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-bold tracking-[-0.02em] leading-[1.1]" style={{ fontSize: "clamp(28px,3.4vw,44px)" }}>
              Sẵn sàng đưa {product.name} vào vận hành?
            </h2>
            <p className="mt-4 text-[16px] text-white/75 max-w-[620px] mx-auto">
              Đặt lịch demo trực tiếp với chuyên gia AIPOWER hoặc khám phá thêm các giải pháp khác trong hệ sinh thái.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:contact@aipower.vn" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] bg-white text-[#1040A6] hover:scale-[1.02] transition-transform">
                <Calendar size={16} /> Đặt lịch Demo
              </a>
              <a href="mailto:contact@aipower.vn" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] text-white" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)" }}>
                <MessageCircle size={16} /> Liên hệ
              </a>
              <Link to={`/products/${product.group}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] text-white" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.18)" }}>
                Khám phá sản phẩm <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
