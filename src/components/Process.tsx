import { PROCESS_STEPS, PROCESS_BLOCKS } from "@/data";

const ACCENT = {
  blue: {
    grad: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
    glow: "rgba(27,143,210,0.45)",
  },
  green: {
    grad: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
    glow: "rgba(27,143,210,0.45)",
  },
  cyan: {
    grad: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
    glow: "rgba(27,143,210,0.45)",
  },
};

export default function Process() {
  return (
    <section id="news" className="relative py-28 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-50"
        style={{ background: "radial-gradient(ellipse, rgba(16,64,166,0.1), transparent 70%)" }} />

      <div className="max-w-[1280px] mx-auto relative">
        <div className="text-center max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.2em] uppercase font-semibold mx-auto"
            style={{ color: "#1040A6" }}>
            <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
            Quy trình sản xuất AI-Driven
            <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1B8FD2] to-[#1040A6]" />
          </span>
          <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(34px,4vw,52px)" }}>
            Kỹ sư xuất sắc{" "}
            <span className="bg-gradient-to-r from-[#1040A6] via-[#1B8FD2] to-[#7a5cff] bg-clip-text text-transparent">
              × AI
            </span>{" "}
            = Sản phẩm vượt trội
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground leading-[1.6]">
            Quy trình 8 bước kết hợp năng lực AI Agent và tinh anh kỹ sư, tạo ra sản phẩm chất lượng,
            tài liệu hoá đầy đủ và bàn giao rõ ràng.
          </p>
        </div>

        {/* Zigzag wave timeline — desktop. SVG path threads all 8 steps:
            steps 1,3,5,7 (i=0,2,4,6) sit LOW at y≎160; steps 2,4,6,8 (i=1,3,5,7) sit HIGH at y≎40.
            Column centers x ∈ {80, 240, 400, 560, 720, 880, 1040, 1200}. */}
        <div className="relative mt-24 hidden lg:block">
          {/* SVG wave line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1280 260"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="zigzagGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1040A6" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#1B8FD2" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#5ec0ff" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            {/* Smooth wave alternating between low (160) and high (40)
                using cubic Beziers for graceful S-curves between consecutive icons. */}
            <path
              d="M 80 160
                 C 140 160, 180 40, 240 40
                 C 300 40, 340 160, 400 160
                 C 460 160, 500 40, 560 40
                 C 620 40, 660 160, 720 160
                 C 780 160, 820 40, 880 40
                 C 940 40, 980 160, 1040 160
                 C 1100 160, 1140 40, 1200 40"
              stroke="url(#zigzagGrad)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid grid-cols-8 gap-3 min-h-[260px]">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = s.icon;
              const isUp = i % 2 === 1; // step 2,4,6,8 cao
              return (
                <div
                  key={s.title}
                  className="flex flex-col items-center text-center group"
                  style={{ paddingTop: isUp ? "0px" : "120px" }}
                >
                  <div className="relative">
                    {/* circular white card with icon */}
                    <div
                      className="w-[80px] h-[80px] rounded-full bg-white grid place-items-center relative z-10
                        border border-slate-200/80
                        shadow-[0_14px_30px_-10px_rgba(16,64,166,0.25),0_2px_6px_-2px_rgba(15,30,80,0.06)]
                        group-hover:scale-105 transition-transform duration-300"
                    >
                      <Icon size={28} strokeWidth={1.8} style={{ color: "#1040A6" }} />
                    </div>
                    {/* number badge — top-right corner */}
                    <div
                      className="absolute -top-1.5 -right-1.5 px-2 h-6 rounded-full grid place-items-center text-[10.5px] font-bold text-white z-20"
                      style={{
                        background: "linear-gradient(135deg,#1040A6,#7a5cff)",
                        boxShadow: "0 6px 14px -4px rgba(16,64,166,0.45)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="mt-4 text-[13px] font-semibold leading-[1.35] text-slate-700 px-1 max-w-[140px]">
                    {s.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical timeline — mobile / tablet */}
        <div className="relative mt-16 lg:hidden">
          <div
            className="absolute left-[39px] top-2 bottom-2 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg,#1040A6 0%,#1B8FD2 50%,#7a5cff 100%)",
              opacity: 0.35,
            }}
          />
          <div className="space-y-6">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex items-center gap-5">
                  <div className="relative shrink-0">
                    <div
                      className="w-20 h-20 rounded-full bg-white grid place-items-center
                        border border-slate-200/80
                        shadow-[0_10px_24px_-10px_rgba(16,64,166,0.25)]"
                    >
                      <Icon size={26} strokeWidth={1.8} style={{ color: "#1040A6" }} />
                    </div>
                    <div
                      className="absolute -top-1.5 -right-1.5 px-2 h-6 rounded-full grid place-items-center text-[10.5px] font-bold text-white"
                      style={{
                        background: "linear-gradient(135deg,#1040A6,#7a5cff)",
                        boxShadow: "0 6px 14px -4px rgba(16,64,166,0.45)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="text-[14.5px] font-semibold leading-[1.4] text-slate-700">
                    {s.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Three blocks — synced with new style */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-7 px-2 pt-6">
          {PROCESS_BLOCKS.map((b) => {
            const Icon = b.icon;
            const a = ACCENT[b.accent as keyof typeof ACCENT];
            return (
              <div
                key={b.title}
                className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-14 pb-9
                  hover:-translate-y-1.5 hover:border-[#1B8FD2]/40
                  hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]
                  transition-all duration-300"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)",
                }}
              >
                {/* Floating icon — top edge, unified circle + blue→cyan gradient */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                  <div
                    className="w-[72px] h-[72px] rounded-full grid place-items-center text-white"
                    style={{
                      background: a.grad,
                      boxShadow: `0 18px 36px -10px ${a.glow}, 0 8px 18px -6px rgba(94,192,255,0.28), 0 1px 0 rgba(255,255,255,0.3) inset`,
                    }}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-[20px] font-bold text-slate-900 text-center">{b.title}</h3>

                <ul className="mt-5 space-y-3">
                  {b.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-slate-600"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: a.grad }}
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute bottom-0 left-9 right-9 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: a.grad }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
