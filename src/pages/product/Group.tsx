import { useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  PRODUCTS_BY_GROUP,
  PRODUCT_GROUP_META,
  getProductLogo,
  type ProductGroupKey,
} from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VALID_GROUPS: ProductGroupKey[] = ["platform", "management", "training"];

// Per-logo tech-themed background, grouped by dominant logo color family.
// Each theme renders a layered radial+linear gradient + halo + subtle grid.
type ThemeKey = "red" | "orange" | "blue" | "teal";
const SLUG_THEME: Record<string, ThemeKey> = {
  lumina: "red",
  "dealer-pro": "red",
  "1shop": "orange",
  oraspa: "blue",
  vietcare: "blue",
  "demand-planning": "blue",
  aiautomate: "teal",
  aicamera: "teal",
  aicanteen: "teal",
  ailoyalty: "teal",
  aiconnect: "teal",
  aiacademy: "teal",
};
const THEME_BG: Record<ThemeKey, { bg: string; halo1: string; halo2: string; grid: string }> = {
  red: {
    bg:
      "radial-gradient(120% 80% at 100% 0%, rgba(120,160,255,0.18) 0%, rgba(0,0,0,0) 55%), radial-gradient(90% 70% at 0% 100%, rgba(255,110,130,0.22) 0%, rgba(0,0,0,0) 60%), linear-gradient(135deg,#0a1226 0%, #0f1a36 45%, #14224a 100%)",
    halo1: "radial-gradient(closest-side, rgba(255,120,140,0.45), transparent 70%)",
    halo2: "radial-gradient(closest-side, rgba(140,180,255,0.32), transparent 70%)",
    grid: "rgba(180,200,255,0.07)",
  },
  orange: {
    bg:
      "radial-gradient(120% 80% at 100% 0%, rgba(120,160,255,0.18) 0%, rgba(0,0,0,0) 55%), radial-gradient(90% 70% at 0% 100%, rgba(255,170,90,0.22) 0%, rgba(0,0,0,0) 60%), linear-gradient(135deg,#0a1226 0%, #0f1a36 45%, #142346 100%)",
    halo1: "radial-gradient(closest-side, rgba(255,180,110,0.45), transparent 70%)",
    halo2: "radial-gradient(closest-side, rgba(140,180,255,0.30), transparent 70%)",
    grid: "rgba(200,210,255,0.07)",
  },
  blue: {
    bg:
      "radial-gradient(120% 80% at 100% 0%, rgba(110,170,255,0.22) 0%, rgba(0,0,0,0) 55%), radial-gradient(90% 70% at 0% 100%, rgba(20,40,120,0.45) 0%, rgba(0,0,0,0) 60%), linear-gradient(135deg,#070b1f 0%, #0d1330 45%, #131a48 100%)",
    halo1: "radial-gradient(closest-side, rgba(80,150,255,0.50), transparent 70%)",
    halo2: "radial-gradient(closest-side, rgba(150,200,255,0.28), transparent 70%)",
    grid: "rgba(170,205,255,0.08)",
  },
  teal: {
    bg:
      "radial-gradient(120% 80% at 100% 0%, rgba(80,200,200,0.20) 0%, rgba(0,0,0,0) 55%), radial-gradient(90% 70% at 0% 100%, rgba(15,70,120,0.45) 0%, rgba(0,0,0,0) 60%), linear-gradient(135deg,#06121f 0%, #0a1b2c 45%, #0f2740 100%)",
    halo1: "radial-gradient(closest-side, rgba(90,210,205,0.45), transparent 70%)",
    halo2: "radial-gradient(closest-side, rgba(150,200,255,0.25), transparent 70%)",
    grid: "rgba(180,225,235,0.08)",
  },
};

export default function ProductGroup() {
  const { group } = useParams<{ group: string }>();
  const navigate = useNavigate();
  const isValid = VALID_GROUPS.includes(group as ProductGroupKey);
  const groupKey = (isValid ? group : "platform") as ProductGroupKey;
  const meta = PRODUCT_GROUP_META[groupKey];
  const items = PRODUCTS_BY_GROUP[groupKey];
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!isValid) navigate("/", { replace: true });
  }, [isValid, navigate]);

  function scrollToProduct(slug: string) {
    const el = cardRefs.current[slug];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Quick navigation cards row — now the page opener, sits right under header */}
      <section
        className="relative px-6 lg:px-8 pt-32 pb-12"
        style={{ background: "linear-gradient(180deg,#ffffff 0%, #f7faff 100%)" }}
      >
        <div className="max-w-[1180px] mx-auto">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[12.5px] text-slate-500 mb-5">
            <Link to="/" className="hover:text-[#1040A6] transition-colors">
              Trang chủ
            </Link>
            <span>›</span>
            <Link to="/products" className="hover:text-[#1040A6] transition-colors">Products</Link>
            <span>›</span>
            <span className="text-slate-700 font-medium">{meta.title}</span>
          </div>

          <div className="flex items-end justify-between gap-6 mb-7">
            <div>              <h2
                className="mt-2 font-bold tracking-[-0.02em] leading-[1.15]"
                style={{ fontSize: "clamp(26px,2.8vw,36px)", color: "#0b1736" }}
              >
                Khám phá nhanh từng sản phẩm
              </h2>
              <p className="mt-2 text-[14.5px] text-slate-500 leading-[1.55] max-w-[640px]">
                {meta.title} · {items.length} sản phẩm
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {items.map((p) => {
              return (
                <button
                  key={p.slug}
                  onClick={() => scrollToProduct(p.slug)}
                  aria-label={p.name}
                  className="group flex items-center justify-center p-4 h-[104px] rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_-18px_rgba(16,64,166,0.28)]"
                >
                  <img
                    src={getProductLogo(p.slug)}
                    alt={p.name}
                    loading="lazy"
                    className="max-w-[80%] max-h-[68px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ imageRendering: "auto" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Big product cards */}
      <section
        className="relative px-6 lg:px-8 py-16"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-[1180px] mx-auto space-y-12">
          {items.map((p, i) => {
            const reverse = i % 2 === 1;
            const themeKey = SLUG_THEME[p.slug] ?? "blue";
            const theme = THEME_BG[themeKey];
            return (
              <div
                key={p.slug}
                ref={(el) => {
                  cardRefs.current[p.slug] = el;
                }}
                className="rounded-[28px] bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-[0_30px_70px_-30px_rgba(16,64,166,0.25)]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Left — content */}
                  <div className="p-9 lg:p-12 flex flex-col">
                    <div>
                      <div
                        className="text-[24px] font-bold leading-[1.2] tracking-[-0.01em]"
                        style={{ color: "#0b1736" }}
                      >
                        {p.name}
                      </div>
                      <div className="text-[13px] text-slate-500 mt-1">
                        {p.tagline}
                      </div>
                    </div>

                    <p className="mt-6 text-[15.5px] leading-[1.7] text-slate-600">
                      {p.short}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {p.features.slice(0, 4).map((f, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-[14px] text-slate-700 leading-[1.5]"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 mt-0.5"
                            style={{ color: "#1B8FD2" }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        to={`/product/${p.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-[14px] text-white transition-transform hover:scale-[1.02]"
                        style={{
                          background: p.accent,
                          boxShadow:
                            "0 8px 18px -6px rgba(16,64,166,0.45), 0 1px 0 rgba(255,255,255,0.18) inset",
                        }}
                      >
                        Xem chi tiết
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Right — visual: tech-themed background + real product logo */}
                  <div
                    className="relative min-h-[280px] lg:min-h-[420px] flex items-center justify-center overflow-hidden"
                    style={{ background: theme.bg }}
                  >
                    {/* halos */}
                    <div
                      className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-80 pointer-events-none"
                      style={{ background: theme.halo1 }}
                    />
                    <div
                      className="absolute -bottom-28 -left-24 w-72 h-72 rounded-full blur-3xl opacity-70 pointer-events-none"
                      style={{ background: theme.halo2 }}
                    />
                    {/* subtle tech grid */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(${theme.grid} 1px, transparent 1px), linear-gradient(90deg, ${theme.grid} 1px, transparent 1px)`,
                        backgroundSize: "44px 44px",
                        maskImage:
                          "radial-gradient(ellipse at 50% 50%, #000 30%, transparent 78%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at 50% 50%, #000 30%, transparent 78%)",
                      }}
                    />
                    {/* faint circuit dots */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.5px)",
                        backgroundSize: "26px 26px",
                        maskImage:
                          "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 70%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 70%)",
                      }}
                    />
                    {/* logo */}
                    <div className="relative flex items-center justify-center px-8 w-full">
                      <img
                        src={getProductLogo(p.slug)}
                        alt={p.name}
                        className={`object-contain w-auto h-auto ${
                          p.slug === "aicamera"
                            ? "max-w-[52%] max-h-[140px]"
                            : "max-w-[78%] max-h-[200px]"
                        }`}
                        style={{
                          filter:
                            "drop-shadow(0 18px 30px rgba(0,0,0,0.45)) drop-shadow(0 0 18px rgba(255,255,255,0.08))",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-10 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] text-slate-700 bg-white border border-slate-200 hover:border-[#1040A6] hover:text-[#1040A6] transition-colors"
            >
              <ArrowLeft size={15} /> Quay lại trang chủ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
