import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { HERO_STATS } from "@/data";
import poster1 from "@/assets/posters/1shop.png";
import poster2 from "@/assets/posters/vietcare.png";
import poster3 from "@/assets/posters/dealerpro.png";
import poster4 from "@/assets/posters/aicamera.png";
import poster5 from "@/assets/posters/ailoyalty.png";
import mPoster1 from "@/assets/posters/mobile/1shop.png";
import mPoster2 from "@/assets/posters/mobile/vietcare.png";
import mPoster3 from "@/assets/posters/mobile/dealerpro.png";
import mPoster4 from "@/assets/posters/mobile/aicamera.png";
import mPoster5 from "@/assets/posters/mobile/ailoyalty.png";

const POSTERS = [
  { src: poster1, mobileSrc: mPoster1, alt: "1Shop - Nền tảng bán hàng toàn diện" },
  { src: poster2, mobileSrc: mPoster2, alt: "VietCare - Chăm sóc sức khoẻ toàn diện" },
  { src: poster3, mobileSrc: mPoster3, alt: "Dealer Pro - Quản lý đại lý chuyên sâu" },
  { src: poster4, mobileSrc: mPoster4, alt: "AI Camera - Giải pháp camera AI" },
  { src: poster5, mobileSrc: mPoster5, alt: "AILoyalty - Nền tảng Loyalty thông minh" },
];


const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const n = POSTERS.length;

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  const go = useCallback((dir: 1 | -1) => {
    setActive((p) => (p + dir + n) % n);
  }, [n]);

  const jumpTo = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((p) => (p + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, n]);

  // Drag
  const dragStart = useRef<number | null>(null);
  function onPointerDown(e: React.PointerEvent) {
    dragStart.current = e.clientX;
  }
  function onPointerUp(e: React.PointerEvent) {
    if (dragStart.current == null) return;
    const dx = e.clientX - dragStart.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    dragStart.current = null;
  }

  function offsetOf(i: number) {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }

  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden text-white pb-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 50% 35%, rgba(48,110,242,0.4) 0%, rgba(102,79,199,0.2) 40%, transparent 70%)," +
            "linear-gradient(180deg,#0a0c24 0%, #10112a 40%, #161a3e 80%, #1a1f4a 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(180,210,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 40%, #000 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, #000 35%, transparent 80%)",
        }}
      />

      {/* Center glow behind active poster */}
      <div
        className="absolute left-1/2 top-[26%] -translate-x-1/2 -z-10 w-[900px] h-[520px] rounded-full blur-[60px] opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(48,110,242,0.45) 0%, rgba(102,79,199,0.22) 45%, transparent 75%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 pt-36">
        {/* Poster Showcase */}
        <div
          className="relative h-[460px] sm:h-[520px] md:h-[560px] lg:h-[600px] select-none"
          style={{ perspective: "1800px" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {POSTERS.map((p, i) => {
            const off = offsetOf(i);
            const abs = Math.abs(off);
            const visible = abs <= 2;
            const isCenter = off === 0;

            // Mobile shows 1 banner at a time; desktop keeps 3D carousel
            const scale = isCenter ? 1 : abs === 1 ? 0.78 : 0.6;
            const translateX = off * (isMobile ? 320 : 360);
            const rotateY = isMobile ? 0 : -off * 22;
            const opacity = isMobile ? (isCenter ? 1 : 0) : isCenter ? 1 : abs === 1 ? 0.75 : 0.35;
            const blur = isCenter ? 0 : abs === 1 ? 1.5 : 3;
            const z = 100 - abs * 10;

            const imgSrc = isMobile ? p.mobileSrc : p.src;
            const widthCss = isMobile ? "min(74vw, 360px)" : "min(78vw, 980px)";
            const aspect = isMobile ? "3/4" : "16/9";
            const objectFit = isMobile ? "contain" : "cover";

            return (
              <button
                key={i}
                type="button"
                aria-label={p.alt}
                onClick={() => {
                  if (isCenter) setLightbox(i);
                  else jumpTo(i);
                }}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  width: widthCss,
                  aspectRatio: aspect,
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                  opacity: visible ? opacity : 0,
                  filter: `blur(${blur}px)`,
                  zIndex: z,
                  transition:
                    "transform 1000ms cubic-bezier(0.22,1,0.36,1), opacity 900ms ease, filter 900ms ease",
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden border border-white/10"
                  style={{
                    boxShadow: isCenter
                      ? "0 40px 90px -20px rgba(16,64,166,0.55), 0 10px 30px rgba(0,0,0,0.45)"
                      : "0 20px 50px -10px rgba(0,0,0,0.5)",
                    background: "#0b1024",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={p.alt}
                    className="w-full h-full"
                    style={{ objectFit }}
                    draggable={false}
                  />
                </div>
                {/* Per-poster reflection */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 top-full overflow-hidden pointer-events-none"
                  style={{
                    height: "55%",
                    transform: "scaleY(-1)",
                    transformOrigin: "top",
                    opacity: isCenter ? 0.32 : 0.18,
                    filter: "blur(10px) saturate(0.9)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-full rounded-2xl"
                    style={{ objectFit }}
                    draggable={false}
                  />
                </div>


              </button>
            );
          })}

          {/* Reflection */}
          <div
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[70%] h-[80px] pointer-events-none opacity-50 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(94,192,255,0.35), transparent 70%)",
            }}
          />

          {/* Controls bottom-right */}
          <div className="absolute right-2 lg:right-6 bottom-2 flex items-center gap-2 z-[200]">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full grid place-items-center text-white/90
                bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md
                transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full grid place-items-center text-white/90
                bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md
                transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Text content */}
        <div className="mt-20 text-center max-w-[860px] mx-auto px-4">
          <h1
            className="font-bold tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(40px, 5.4vw, 72px)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg,#7cc6ff 0%,#1B8FD2 40%,#1040A6 100%)",
              }}
            >
              AI Power
            </span>{" "}
            <span className="text-white">your work</span>

          </h1>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.65] text-white/70 mx-auto max-w-[680px]">
            Hệ sinh thái AI giúp doanh nghiệp tự động hoá vận hành, quản trị thông minh
            và tăng trưởng bền vững trong kỷ nguyên trí tuệ nhân tạo.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <button
              className="group inline-flex items-center gap-2 whitespace-nowrap px-7 py-3.5 rounded-full font-semibold text-[15px] text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 100%)",
                boxShadow:
                  "0 8px 18px -6px rgba(16,64,166,0.5), 0 1px 0 rgba(255,255,255,0.18) inset",
              }}
            >
              <span>Contact Us</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {HERO_STATS.map((s) => (
              <div
                key={s.lbl}
                className="px-5 py-3 rounded-2xl bg-white/[0.08] border border-white/[0.18] backdrop-blur-md min-w-[130px]"
                style={{
                  boxShadow:
                    "0 8px 24px -12px rgba(16,64,166,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="font-bold text-[22px] leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg,#ffffff,#bfe2ff)" }}
                >
                  {s.num}
                </div>
                <div className="mt-1.5 text-[12px] font-medium text-white">{s.lbl}</div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[260px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,31,74,0) 0%, rgba(60,80,160,0.18) 45%, rgba(225,235,250,0.7) 82%, #ffffff 100%)",
        }}
      />

      {/* Lightbox modal */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={isMobile ? POSTERS[lightbox].mobileSrc : POSTERS[lightbox].src}
            alt={POSTERS[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            style={{ maxHeight: "90vh", maxWidth: "min(1200px, 95vw)" }}
            draggable={false}
          />
        </div>
      )}
    </section>
  );
}
