import { Sparkles } from "lucide-react";
import { SHOWCASE_FEATURE, SHOWCASE_CARDS } from "@/data";

export default function Showcase() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-white">
      {/* Ambient blurs */}
      <div
        className="pointer-events-none absolute top-1/3 -left-20 w-[480px] h-[480px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(27,143,210,0.18), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 w-[520px] h-[520px] rounded-full opacity-55 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,64,166,0.14), transparent 70%)" }}
      />

      <div className="relative max-w-[1280px] mx-auto">

        {/* Showcase grid: featured big card (left) + 4 small (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured card (big) */}
          <div className="lg:col-span-5 relative rounded-[32px] overflow-hidden min-h-[440px]
              text-white p-9 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg,#0a1432 0%,#0f2255 35%,#1040A6 75%,#1B8FD2 100%)",
              boxShadow: "0 30px 70px -20px rgba(16,64,166,0.5)",
            }}
          >
            {/* Decorative orbs */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(94,192,255,0.6), transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[260px] opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at bottom left, rgba(94,192,255,0.35), transparent 70%)",
              }}
            />
            {/* Decorative dotted grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage:
                  "radial-gradient(ellipse at 70% 30%, #000 30%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 70% 30%, #000 30%, transparent 70%)",
              }}
            />

            {/* AI workflow visual — circle network */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11.5px] tracking-[0.16em] uppercase font-semibold border border-white/15 bg-white/[0.06] backdrop-blur">
                <Sparkles size={13} />
                AI Solution
              </div>

              {/* Abstract AI visual */}
              <div className="relative mt-7 h-[180px]">
                <svg viewBox="0 0 400 180" className="absolute inset-0 w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5ec0ff" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1B8FD2" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  {/* connection lines */}
                  <path d="M40,90 C120,30 200,150 320,60" stroke="url(#line)" strokeWidth="1.5" />
                  <path d="M60,140 C140,80 240,170 350,110" stroke="url(#line)" strokeWidth="1" opacity="0.5" />
                  <path d="M30,40 L350,140" stroke="url(#line)" strokeWidth="0.8" opacity="0.35" />
                  {/* nodes */}
                  {[
                    [40, 90, 9],
                    [120, 50, 7],
                    [200, 100, 8],
                    [260, 40, 6],
                    [320, 60, 10],
                    [350, 130, 7],
                    [80, 145, 6],
                  ].map(([x, y, r], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r={r} fill="rgba(94,192,255,0.18)" />
                      <circle cx={x} cy={y} r={(r as number) - 3} fill="#5ec0ff" />
                    </g>
                  ))}
                </svg>
                {/* center glowing core */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full grid place-items-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(94,192,255,0.4), rgba(27,143,210,0.2) 60%, transparent 75%)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#5ec0ff,#1B8FD2)",
                      boxShadow: "0 0 30px rgba(94,192,255,0.7)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="relative z-10">
              <h3 className="text-[26px] font-bold leading-[1.25] tracking-[-0.01em]">
                {SHOWCASE_FEATURE.title} – {SHOWCASE_FEATURE.highlight}{" "}
                <span className="text-[#9ed4ff]">{SHOWCASE_FEATURE.tail}</span>
              </h3>
              <p className="mt-3 text-[14.5px] text-white/70 leading-[1.6]">
                {SHOWCASE_FEATURE.desc}
              </p>
            </div>
          </div>

          {/* 4 small cards on the right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SHOWCASE_CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group relative rounded-[24px] bg-white border border-slate-200/80 p-7 overflow-hidden
                    transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40
                    hover:shadow-[0_22px_50px_-18px_rgba(27,143,210,0.3)]"
                >
                  {/* abstract background circle */}
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full
                      bg-slate-100/70 transition-all duration-500 group-hover:scale-110"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -left-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(27,143,210,0.18), transparent 70%)",
                    }}
                  />

                  <div
                    className="relative z-10 w-12 h-12 rounded-2xl grid place-items-center text-white"
                    style={{
                      background: "linear-gradient(135deg,#1040A6,#1B8FD2)",
                      boxShadow:
                        "0 10px 24px -6px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.25) inset",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </div>

                  <h4 className="relative z-10 mt-5 text-[18px] font-bold tracking-[-0.01em] text-slate-900">
                    {c.title}
                  </h4>
                  <p className="relative z-10 mt-2 text-[14px] leading-[1.6] text-slate-500">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
