import { PARTNERS } from "@/data";

// Define floating logo card sizes and positions for organic feel
type Variant = "lg" | "md" | "sm";
const VARIANT_CLASS: Record<Variant, string> = {
  lg: "h-[120px] text-[18px]",
  md: "h-[96px] text-[15.5px]",
  sm: "h-[80px] text-[14px]",
};

// Map each partner to a card variant — large for the "main" centerpiece, others mixed
function variantFor(i: number): Variant {
  // Make a few visually larger to create hierarchy, rest mixed for organic look
  if (i === 0 || i === 5) return "lg";
  if (i % 3 === 0) return "md";
  if (i % 3 === 1) return "sm";
  return "md";
}

export default function Partners() {
  return (
    <section
      id="team"
      className="relative py-28 px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg,#f7faff 0%, #f0f5fc 60%, #f7faff 100%)",
      }}
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(800px 400px at 18% 30%, rgba(16,64,166,0.07), transparent 70%)," +
            "radial-gradient(700px 350px at 82% 75%, rgba(122,92,255,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          {/* Left — title + description */}
          <div className="lg:sticky lg:top-32">            <h2
              className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900"
              style={{ fontSize: "clamp(34px,4vw,52px)" }}
            >
              Khách hàng{" "}
              <span className="bg-gradient-to-r from-[#1040A6] via-[#1B8FD2] to-[#7a5cff] bg-clip-text text-transparent">
                & đối tác
              </span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-slate-600 max-w-[480px]">
              Chúng tôi tự hào đồng hành cùng các doanh nghiệp đổi mới sáng tạo tại
              Nhật Bản, Việt Nam và khu vực — từ tập đoàn niêm yết đến hệ sinh thái
              công nghệ toàn cầu.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-[13px] text-slate-500">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }}
              />
              {PARTNERS.length}+ partners worldwide
            </div>
          </div>

          {/* Right — floating logo card cluster (organic, varying sizes) */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {PARTNERS.map((p, i) => {
                const v = variantFor(i);
                return (
                  <div
                    key={p}
                    className={`group relative ${VARIANT_CLASS[v]} rounded-[22px] bg-white border border-slate-200/80
                      grid place-items-center font-bold tracking-[0.04em] text-slate-600
                      transition-all duration-300 cursor-default overflow-hidden
                      hover:-translate-y-1.5 hover:bg-white
                      hover:shadow-[0_22px_44px_-14px_rgba(16,64,166,0.22)]`}
                    style={{
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 22px -12px rgba(15,30,80,0.12)",
                      // gentle vertical offset to break grid stiffness
                      transform: `translateY(${(i % 3) * 4}px)`,
                    }}
                  >
                    {/* hover gradient bg */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "linear-gradient(135deg,#f7faff 0%, #ffffff 50%, #eef4ff 100%)",
                      }}
                    />
                    {/* top accent line on hover */}
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-[55%] h-[2px] rounded-full transition-all duration-300"
                      style={{
                        background: "linear-gradient(90deg,#1040A6,#1B8FD2)",
                      }}
                    />
                    <span className="relative z-10 group-hover:text-[#1040A6] transition-colors text-center px-3 leading-[1.2]">
                      {p}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
