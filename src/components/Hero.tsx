import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { HERO_STATS, FLOAT_CARDS } from "@/data";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - r.left - r.width / 2) / r.width;
    const cy = (e.clientY - r.top - r.height / 2) / r.height;
    if (stageRef.current) {
      stageRef.current.style.transform = `translate(${cx * 12}px, ${cy * 12}px)`;
    }
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${cx * 24}px, ${cy * 24}px)`;
    }
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll<HTMLElement>("[data-float]");
      cards.forEach((c, i) => {
        const k = (i + 1) * 6;
        c.style.transform = `translate(${cx * -k}px, ${cy * -k}px)`;
      });
    }
  }

  function handleLeave() {
    if (stageRef.current) stageRef.current.style.transform = "";
    if (glowRef.current) glowRef.current.style.transform = "";
    if (cardsRef.current) {
      cardsRef.current.querySelectorAll<HTMLElement>("[data-float]").forEach((c) => {
        c.style.transform = "";
      });
    }
  }

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-theme="dark"
      className="relative min-h-[112vh] overflow-hidden text-white pb-32"
    >
      {/* Deep navy + blue + subtle purple background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 720px at 75% 45%, rgba(48,110,242,0.55) 0%, rgba(102,79,199,0.35) 35%, transparent 65%)," +
            "radial-gradient(900px 600px at 18% 70%, rgba(102,79,199,0.22), transparent 65%)," +
            "radial-gradient(800px 500px at 50% 0%, rgba(94,140,255,0.16), transparent 70%)," +
            "linear-gradient(180deg,#0a0c24 0%, #10112a 35%, #161a3e 70%, #1a1f4a 100%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.32] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(180,210,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 45%, #000 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, #000 35%, transparent 80%)",
        }}
      />
      {/* Twinkles — blue + subtle purple */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none animate-[twinkle_6s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.55), transparent 50%)," +
            "radial-gradient(1px 1px at 70% 20%, rgba(190,210,255,0.6), transparent 50%)," +
            "radial-gradient(1.4px 1.4px at 85% 70%, rgba(94,192,255,0.7), transparent 50%)," +
            "radial-gradient(1.5px 1.5px at 30% 80%, rgba(255,255,255,0.5), transparent 50%)," +
            "radial-gradient(1px 1px at 60% 50%, rgba(140,120,230,0.65), transparent 50%)," +
            "radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.45), transparent 50%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-44 pb-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 items-center min-h-[100vh]">
        {/* Left */}
        <div>
          <h1
            className="font-bold tracking-[-0.03em] leading-[1.02]"
            style={{ fontSize: "clamp(48px, 6vw, 86px)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg,#5ec0ff 0%,#1B8FD2 45%,#1040A6 100%)" }}
            >
              AI Power
            </span>
            <br />
            your work.
          </h1>
          <p className="mt-6 text-[17.5px] leading-[1.65] text-white/70 max-w-[540px]">
            Hệ sinh thái AI dành cho doanh nghiệp — nền tảng tự động hoá vận hành, giải pháp quản trị
            thông minh và đào tạo AI, giúp doanh nghiệp chuyển đổi số toàn diện và tăng trưởng bền vững
            trong kỷ nguyên trí tuệ nhân tạo.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <button
              className="group inline-flex items-center gap-2 whitespace-nowrap px-7 py-4 rounded-full font-semibold text-[15.5px] text-white
                transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 100%)",
                boxShadow:
                  "0 8px 18px -6px rgba(16,64,166,0.45), 0 1px 0 rgba(255,255,255,0.18) inset",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 26px -8px rgba(16,64,166,0.55), 0 1px 0 rgba(255,255,255,0.22) inset";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 18px -6px rgba(16,64,166,0.45), 0 1px 0 rgba(255,255,255,0.18) inset";
              }}
            >
              <span className="whitespace-nowrap">Contact Us</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {HERO_STATS.map((s) => (
              <div
                key={s.lbl}
                className="px-5 py-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.11] backdrop-blur-md min-w-[140px]"
              >
                <div
                  className="font-bold text-[26px] leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg,#9bd6ff,#5ec0ff)" }}
                >
                  {s.num}
                </div>
                <div className="mt-1.5 text-[12.5px] font-medium text-white/85">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – AI face */}
        <div className="relative h-full min-h-[560px]">
          <div
            ref={stageRef}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
          >
            {/* glow follows cursor — blue + subtle purple */}
            <div
              ref={glowRef}
              className="absolute w-[640px] h-[640px] rounded-full blur-[30px] animate-[pulseGlow_5s_ease-in-out_infinite_alternate] transition-transform duration-500 ease-out"
              style={{
                background:
                  "radial-gradient(circle, rgba(48,110,242,0.6) 0%, rgba(102,79,199,0.32) 40%, transparent 72%)",
              }}
            />
            {/* rings */}
            <div className="absolute w-[780px] h-[780px] rounded-full border border-white/5" />
            <div className="absolute w-[660px] h-[660px] rounded-full border border-dashed border-[rgba(27,143,210,0.18)] animate-[spin_80s_linear_infinite_reverse]" />
            <div className="absolute w-[540px] h-[540px] rounded-full border border-[rgba(94,192,255,0.2)] animate-[spin_40s_linear_infinite]" />

            {/* AI face image */}
            <div
              className="relative w-[560px] max-w-[95%] aspect-square"
              style={{
                backgroundImage: "url('/images/ai-face.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "screen",
                filter: "contrast(1.12) saturate(1.1) brightness(1.05) hue-rotate(-10deg)",
                maskImage:
                  "radial-gradient(ellipse 55% 65% at 50% 50%, #000 40%, rgba(0,0,0,0.6) 62%, transparent 85%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 55% 65% at 50% 50%, #000 40%, rgba(0,0,0,0.6) 62%, transparent 85%)",
              }}
              aria-hidden
            />

            {/* nodes (blue tones only) */}
            <span
              className="absolute top-[22%] right-[14%] w-1.5 h-1.5 rounded-full animate-[twinkle_3s_ease-in-out_infinite]"
              style={{ background: "#5ec0ff", boxShadow: "0 0 12px #5ec0ff" }}
            />
            <span
              className="absolute top-[70%] right-[20%] w-1.5 h-1.5 rounded-full animate-[twinkle_3s_ease-in-out_infinite_1s]"
              style={{ background: "#1B8FD2", boxShadow: "0 0 12px #1B8FD2" }}
            />
            <span
              className="absolute top-[40%] left-[10%] w-1.5 h-1.5 rounded-full animate-[twinkle_3s_ease-in-out_infinite_.5s]"
              style={{ background: "#5ec0ff", boxShadow: "0 0 12px #5ec0ff" }}
            />
            <span
              className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 rounded-full animate-[twinkle_3s_ease-in-out_infinite_1.5s]"
              style={{ background: "#1040A6", boxShadow: "0 0 12px #1B8FD2" }}
            />
          </div>

          {/* Floating glass cards — all 3 share identical style */}
          <div ref={cardsRef}>
            {FLOAT_CARDS.map((c) => {
              const Icon = c.icon;
              const posClass =
                c.pos === "fc-1"
                  ? "top-[12%] left-[-4%]"
                  : c.pos === "fc-2"
                  ? "top-[50%] right-[-6%]"
                  : "bottom-[10%] left-[6%]";
              return (
                <div
                  key={c.title}
                  data-float
                  className={`hidden md:flex absolute ${posClass} items-center gap-3 px-3.5 py-3 rounded-2xl
                    bg-white/[0.07] border border-white/[0.13] backdrop-blur-xl
                    shadow-[0_12px_34px_rgba(0,0,0,0.3)] animate-[float_6s_ease-in-out_infinite]
                    transition-transform duration-300 ease-out min-w-[176px]`}
                  style={{ animationDelay: `${c.delay}s` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl grid place-items-center text-white shrink-0"
                    style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold text-white leading-[1.2]">{c.title}</div>
                    <div className="text-[11px] text-white/65 mt-0.5 leading-[1.2]">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Long, soft transition fade — premium dark → white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[380px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, " +
            "rgba(26,31,74,0) 0%, " +
            "rgba(26,31,74,0.18) 22%, " +
            "rgba(60,80,160,0.18) 42%, " +
            "rgba(160,185,235,0.32) 65%, " +
            "rgba(225,235,250,0.7) 82%, " +
            "rgba(245,250,255,0.92) 94%, " +
            "#ffffff 100%)",
        }}
      />
      {/* extra ambient glow at fade zone */}
      <div
        className="absolute bottom-[160px] left-1/2 -translate-x-1/2 w-[1100px] h-[280px] pointer-events-none opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(94,192,255,0.22), rgba(122,92,255,0.12) 55%, transparent 75%)",
        }}
      />
    </section>
  );
}
