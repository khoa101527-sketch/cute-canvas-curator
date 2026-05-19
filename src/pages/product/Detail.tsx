import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Target, Users, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { findProductBySlug, PRODUCTS, PRODUCT_GROUP_META, getProductLogo } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? findProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 grid place-items-center px-6 py-40 text-center">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "#0b1736" }}>
              Không tìm thấy sản phẩm
            </h1>
            <p className="mt-3 text-slate-500">
              Sản phẩm bạn đang tìm có thể đã thay đổi đường dẫn.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold"
              style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}
            >
              <ArrowLeft size={16} /> Về trang chủ
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const groupMeta = PRODUCT_GROUP_META[product.group];
  const related = PRODUCTS.filter(
    (p) => p.group === product.group && p.slug !== product.slug,
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero — dark futuristic header for the product */}
      <section data-theme="dark" className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 600px at 80% 30%, rgba(48,110,242,0.45) 0%, rgba(102,79,199,0.28) 40%, transparent 70%)," +
              "radial-gradient(700px 500px at 15% 80%, rgba(102,79,199,0.18), transparent 70%)," +
              "linear-gradient(180deg,#0a0c24 0%, #10112a 60%, #1a1f4a 100%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(180,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(180,210,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at 50% 50%, #000 35%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 35%, transparent 80%)",
          }}
        />

        <div className="max-w-[1180px] mx-auto relative">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[12.5px] text-white/55 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <span>›</span>
            <span className="text-white/70">{groupMeta.title}</span>
            <span>›</span>
            <span className="text-white">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{
                  background: "rgba(94,140,255,0.12)",
                  border: "1px solid rgba(94,140,255,0.3)",
                  color: "#9bd6ff",
                }}
              >
                {groupMeta.eyebrow} · {groupMeta.title}
              </span>

              <h1
                className="mt-5 font-bold tracking-[-0.025em] leading-[1.05]"
                style={{ fontSize: "clamp(40px,5.4vw,72px)" }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(100deg,#9bd6ff 0%,#5ec0ff 45%,#7a5cff 100%)",
                  }}
                >
                  {product.name}
                </span>
              </h1>
              <p className="mt-4 text-[18px] leading-[1.55] text-white/75 max-w-[560px]">
                {product.tagline}
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-white/60 max-w-[560px]">
                {product.short}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@aipower.vn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] text-white transition-transform hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg,#1040A6,#1B8FD2)",
                    boxShadow:
                      "0 8px 18px -6px rgba(16,64,166,0.5), 0 1px 0 rgba(255,255,255,0.2) inset",
                  }}
                >
                  Liên hệ tư vấn <ArrowRight size={16} />
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14.5px] text-white/80 hover:text-white transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <ArrowLeft size={16} /> Quay lại trang chủ
                </Link>
              </div>
            </div>

            {/* Right — product visual card */}
            <div className="relative">
              <div
                className="relative mx-auto rounded-[28px] p-10 flex flex-col items-center text-center overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(18px)",
                  boxShadow: "0 30px 80px -30px rgba(8,12,40,0.6)",
                }}
              >
                <div
                  className="absolute -top-24 -right-20 w-64 h-64 rounded-full opacity-50 blur-3xl"
                  style={{ background: product.accent }}
                />
                <div
                  className="relative w-full h-[150px] rounded-2xl grid place-items-center px-6"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    boxShadow: "0 18px 40px -12px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src={getProductLogo(product.slug)}
                    alt={product.name}
                    className="max-w-full max-h-[110px] w-auto h-auto object-contain"
                  />
                </div>
                <div className="relative mt-6 text-[28px] font-bold tracking-[-0.02em]">
                  {product.name}
                </div>
                <div className="relative mt-2 text-[13px] text-white/60 max-w-[280px]">
                  {product.tagline}
                </div>

                <div className="relative mt-8 w-full grid grid-cols-2 gap-3">
                  <div
                    className="px-3 py-3 rounded-xl text-left"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-[10.5px] text-white/55 uppercase tracking-[0.15em] font-semibold">
                      Nhóm
                    </div>
                    <div className="text-[12.5px] text-white/85 mt-1 font-semibold">
                      {groupMeta.title}
                    </div>
                  </div>
                  <div
                    className="px-3 py-3 rounded-xl text-left"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-[10.5px] text-white/55 uppercase tracking-[0.15em] font-semibold">
                      Trạng thái
                    </div>
                    <div className="text-[12.5px] text-white/85 mt-1 font-semibold">
                      Live · Production
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body sections */}
      <section className="px-6 lg:px-8 py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problems */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl grid place-items-center text-white"
                style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}
              >
                <Target size={18} />
              </div>
              <div className="text-[15px] font-bold" style={{ color: "#0b1736" }}>
                Giải quyết vấn đề
              </div>
            </div>
            <ul className="mt-5 space-y-3">
              {product.problems.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-slate-600 leading-[1.55]">
                  <span
                    className="w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 text-[11px] font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}
                  >
                    {i + 1}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Customers */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl grid place-items-center text-white"
                style={{ background: "linear-gradient(135deg,#1B8FD2,#5ec0ff)" }}
              >
                <Users size={18} />
              </div>
              <div className="text-[15px] font-bold" style={{ color: "#0b1736" }}>
                Khách hàng phù hợp
              </div>
            </div>
            <p className="mt-5 text-[14px] text-slate-600 leading-[1.65]">{product.customers}</p>
          </div>

          {/* Results */}
          <div
            className="rounded-2xl p-7 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(140deg,#0f1c4d 0%,#16306c 60%,#1B8FD2 130%)" }}
          >
            <div
              className="absolute -top-20 -right-16 w-56 h-56 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(122,92,255,0.5), transparent 70%)" }}
            />
            <div className="relative flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl grid place-items-center"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <TrendingUp size={18} />
              </div>
              <div className="text-[15px] font-bold">Kết quả điển hình</div>
            </div>
            <ul className="relative mt-5 space-y-3">
              {product.results.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-white/85 leading-[1.55]">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#9bd6ff]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Role + features */}
      <section
        className="px-6 lg:px-8 py-24"
        style={{ background: "linear-gradient(180deg,#f7faff 0%, #ffffff 100%)" }}
      >
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold"
              style={{ color: "#1040A6" }}
            >
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
              Vai trò
            </span>
            <h2
              className="mt-3 font-bold tracking-[-0.02em] leading-[1.15]"
              style={{ fontSize: "clamp(26px,2.8vw,38px)", color: "#0b1736" }}
            >
              {product.name} làm gì cho doanh nghiệp?
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-slate-600">{product.role}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(16,64,166,0.25)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg grid place-items-center text-white shrink-0"
                    style={{ background: product.accent }}
                  >
                    <Sparkles size={15} />
                  </div>
                  <div className="text-[14px] font-semibold leading-[1.5]" style={{ color: "#0b1736" }}>
                    {f}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="px-6 lg:px-8 py-24" style={{ background: "#ffffff" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <span
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold"
                  style={{ color: "#1040A6" }}
                >
                  <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
                  Cùng nhóm giải pháp
                </span>
                <h2
                  className="mt-3 font-bold tracking-[-0.02em] leading-[1.15]"
                  style={{ fontSize: "clamp(24px,2.4vw,32px)", color: "#0b1736" }}
                >
                  Sản phẩm liên quan
                </h2>
              </div>
              <Link
                to="/"
                className="hidden md:inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1040A6] hover:underline"
              >
                Xem toàn bộ <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => {
                return (
                  <Link
                    key={p.slug}
                    to={`/product/${p.slug}`}
                    className="group rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_22px_50px_-20px_rgba(16,64,166,0.28)]"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className="w-14 h-14 rounded-xl grid place-items-center shrink-0 bg-white border border-slate-100 p-2"
                        style={{
                          boxShadow: "0 6px 14px -8px rgba(16,64,166,0.25)",
                        }}
                      >
                        <img
                          src={getProductLogo(p.slug)}
                          alt={p.name}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                        />
                      </span>
                      <div>
                        <div className="text-[16px] font-bold" style={{ color: "#0b1736" }}>
                          {p.name}
                        </div>
                        <div className="text-[12px] text-slate-500 mt-0.5 leading-[1.3]">
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-[13.5px] text-slate-600 leading-[1.6]">{p.short}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1040A6]">
                      Xem chi tiết
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
