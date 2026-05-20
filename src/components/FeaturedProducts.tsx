import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, getProductLogo } from "@/data/products";

const FEATURED = ["lumina", "aiautomate", "aicamera", "ailoyalty", "vietcare", "1shop", "dealer-pro", "oraspa", "aiacademy"]
  .map((s) => PRODUCTS.find((p) => p.slug === s))
  .filter((x): x is NonNullable<typeof x> => !!x);

const VISIBLE = 3;
const INTERVAL = 4000;

export default function FeaturedProducts() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);

  // Loop infinite: extend list
  const loop = [...FEATURED, ...FEATURED.slice(0, VISIBLE)];

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setIndex((i) => i + 1), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused]);

  // When we hit the cloned tail, snap back without animation
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [enableTransition, setEnableTransition] = useState(true);
  useEffect(() => {
    if (index === FEATURED.length) {
      const t = window.setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
        requestAnimationFrame(() => requestAnimationFrame(() => setEnableTransition(true)));
      }, 600);
      return () => window.clearTimeout(t);
    }
  }, [index]);

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(900px 400px at 50% 0%, rgba(27,143,210,0.07), transparent 70%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2
            className="font-bold tracking-[-0.025em] leading-[1.08] text-slate-900"
            style={{ fontSize: "clamp(34px,4.2vw,52px)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#1040A6,#1B8FD2,#7a5cff)" }}
            >
              Sản phẩm
            </span>{" "}
            nổi bật
          </h2>
          <Link
            to="/products/platform"
            className="hidden md:inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#1040A6] hover:underline"
          >
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(-${(index * 100) / VISIBLE}%)`,
              transition: enableTransition ? "transform 650ms cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
          >
            {loop.map((p, i) => (
              <div
                key={`${p.slug}-${i}`}
                className="shrink-0 px-3"
                style={{ width: `${100 / VISIBLE}%` }}
              >
                <Link
                  to={`/product/${p.slug}`}
                  className="group relative block rounded-2xl bg-white border border-slate-200 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_22px_50px_-20px_rgba(16,64,166,0.28)]"
                  onMouseEnter={() => setHoverSlug(`${p.slug}-${i}`)}
                  onMouseLeave={() => setHoverSlug(null)}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className="w-14 h-14 rounded-xl grid place-items-center shrink-0 bg-white border border-slate-100 p-2"
                      style={{ boxShadow: "0 6px 14px -8px rgba(16,64,166,0.25)" }}
                    >
                      <img
                        src={getProductLogo(p.slug)}
                        alt={p.name}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[16px] font-bold truncate" style={{ color: "#0b1736" }}>
                        {p.name}
                      </div>
                      <div className="text-[12px] text-slate-500 mt-0.5 leading-[1.3] line-clamp-1">
                        {p.tagline}
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-4 text-[13.5px] text-slate-600 leading-[1.6] overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      minHeight: "2.6em",
                    }}
                  >
                    {p.short}
                  </p>

                  {/* Hover popover with full content */}
                  {hoverSlug === `${p.slug}-${i}` && (
                    <div
                      className="absolute left-4 right-4 top-full mt-2 z-20 rounded-xl bg-slate-900 text-white text-[12.5px] leading-[1.55] p-3.5 shadow-2xl"
                      style={{ pointerEvents: "none" }}
                    >
                      <div className="font-semibold text-white mb-1">{p.tagline}</div>
                      <div className="text-white/85">{p.short}</div>
                    </div>
                  )}

                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1040A6]">
                    Xem chi tiết{" "}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
