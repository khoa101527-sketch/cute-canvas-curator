import { PHILOSOPHY } from "@/data";

export default function Philosophy() {
  return (
    <section id="about" className="relative bg-[#f7faff] pt-28 pb-28 px-6 lg:px-8 overflow-hidden">
      {/* Ambient soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 20%, rgba(27,143,210,0.07), transparent 70%)," +
            "radial-gradient(800px 400px at 10% 80%, rgba(16,64,166,0.05), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Header — wide single-row title + description below */}
        <div className="text-left">
          <h2
            className="mt-4 font-bold tracking-[-0.025em] leading-[1.08] text-slate-900 whitespace-normal lg:whitespace-nowrap"
            style={{ fontSize: "clamp(34px,4.6vw,62px)" }}
          >
            Tầm nhìn. Sứ mệnh.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#1040A6 0%,#1B8FD2 50%,#7a5cff 100%)",
              }}
            >
              Giá trị cốt lõi.
            </span>
          </h2>
          <p className="mt-7 text-[17px] leading-[1.75] text-slate-500 max-w-[880px]">
            Triết lý của AIPOWER được dẫn dắt bởi cam kết mang lại giá trị bền vững cho khách hàng,
            trao quyền cho con người và đồng kiến tạo một tương lai tốt đẹp hơn cùng công nghệ AI.
          </p>
        </div>

        {/* Modern card grid — icon floating on top edge, content centered */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
          {PHILOSOPHY.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-10 text-center
                  transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40
                  hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]"
                style={{
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)",
                }}
              >
                {/* Floating icon — sits on the top edge of the card */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                  <div
                    className="w-[72px] h-[72px] rounded-full grid place-items-center text-white"
                    style={{
                      background:
                        "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
                      boxShadow:
                        "0 18px 36px -10px rgba(27,143,210,0.45), 0 8px 18px -6px rgba(94,192,255,0.28), 0 1px 0 rgba(255,255,255,0.3) inset",
                    }}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title — centered */}
                <h3 className="text-[24px] font-bold tracking-[-0.01em] text-slate-900">
                  {p.title}
                </h3>

                {/* Subtitle — centered uppercase */}
                <div
                  className="mt-2 text-[11.5px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: "#1B8FD2" }}
                >
                  {p.keyword}
                </div>

                {/* Description — centered, comfy max width */}
                <p className="mt-5 mx-auto text-[15px] leading-[1.75] text-slate-500 max-w-[300px]">
                  {p.text}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-9 right-9 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(90deg,#1040A6,#1B8FD2)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
