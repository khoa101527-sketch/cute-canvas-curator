import { Cpu, Globe2, Smartphone, Building2, MapPin, Sparkles, Users } from "lucide-react";
import AboutLayout from "./AboutLayout";

const COMPANY_INFO = [
  { label: "Tên công ty", value: "AIPOWER DA NANG Co., LTD" },
  { label: "Vốn điều lệ", value: "$19,000" },
  { label: "Người đại diện", value: "Dao Trong Hieu" },
  { label: "Thành lập", value: "Tháng 04 / 2026" },
];

const FOCUS_AREAS = [
  {
    icon: Cpu,
    eyebrow: "AI R&D",
    title: "Nghiên cứu & Phát triển AI",
    text: "Tập trung phát triển các giải pháp trí tuệ nhân tạo phục vụ doanh nghiệp khu vực và quốc tế.",
  },
  {
    icon: Globe2,
    eyebrow: "WEB SOLUTIONS",
    title: "Giải pháp Web hiện đại",
    text: "Thiết kế và phát triển các nền tảng web đáp ứng nhu cầu đa dạng của khách hàng toàn cầu.",
  },
  {
    icon: Smartphone,
    eyebrow: "MOBILE APP",
    title: "Phát triển ứng dụng Mobile",
    text: "Xây dựng ứng dụng di động đa nền tảng — hỗ trợ và vận hành cho các đối tác trong và ngoài nước.",
  },
];

export default function AboutDanang() {
  return (
    <AboutLayout
      eyebrow="AIPOWER DA NANG"
      title="Trung tâm công nghệ tại trái tim miền Trung"
      description="Toạ lạc tại thành phố biển năng động Đà Nẵng, văn phòng AIPOWER Da Nang là cột mốc quan trọng trong chiến lược mở rộng hiện diện tại miền Trung Việt Nam — khai thác đội ngũ trẻ, tài năng và đầy nhiệt huyết để cung cấp giải pháp công nghệ tối ưu cho khách hàng."
    >
      {/* Company Info */}
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 rounded-[24px] border border-slate-200/80 bg-white p-6 md:p-8 shadow-[0_6px_24px_-10px_rgba(15,30,80,0.08)]">
            {COMPANY_INFO.map((c) => (
              <div key={c.label} className="text-center md:text-left">
                <div className="text-[11.5px] tracking-[0.18em] uppercase font-semibold text-slate-400">
                  {c.label}
                </div>
                <div className="mt-2 text-[15.5px] font-bold text-slate-900">
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic focus */}
      <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              Trung tâm R&D — AI · Web · Mobile App
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
              Văn phòng Đà Nẵng đóng vai trò trung tâm hỗ trợ kỹ thuật và vận hành cho các đối tác trong khu vực và quốc tế.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
            {FOCUS_AREAS.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                    <div className="w-[72px] h-[72px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.3) inset" }}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="text-[11.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#1B8FD2" }}>
                    {f.eyebrow}
                  </div>
                  <h3 className="mt-2 text-[20px] font-bold text-slate-900 leading-[1.3]">{f.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-slate-500">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office card */}
      <section className="relative py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1080px] mx-auto rounded-[32px] p-10 md:p-14 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(540px 320px at 88% 18%, rgba(27,143,210,0.32), transparent 70%), radial-gradient(420px 280px at 6% 92%, rgba(122,92,255,0.22), transparent 70%)" }} />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-[72px] h-[72px] rounded-full grid place-items-center" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.55)" }}>
                <MapPin size={30} strokeWidth={1.8} className="text-white" />
              </div>
            </div>
            <div className="md:col-span-10 text-center md:text-left">
              <div className="text-[12px] tracking-[0.2em] uppercase font-semibold text-white/70">
                Office Address
              </div>
              <h2 className="mt-2 font-bold tracking-[-0.02em] leading-[1.18]" style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>
                AIPOWER DA NANG
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-white/85">
                Tầng 2, 69 Quang Trung, Phường Hải Châu, Thành phố Đà Nẵng, Việt Nam
              </p>
              <p className="mt-4 text-[14.5px] leading-[1.75] text-white/65">
                Vị trí trung tâm cho phép văn phòng dễ dàng kết nối với các đối tác công nghệ tại miền Trung,
                đồng thời thu hút nguồn nhân lực chất lượng cao từ các trường đại học và cộng đồng IT năng động.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Da Nang */}
      <section className="relative pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Users, title: "Nhân lực trẻ tài năng", text: "Đội ngũ kỹ sư trẻ, đầy nhiệt huyết và có nền tảng kỹ thuật vững chắc." },
            { icon: Sparkles, title: "Năng lực R&D", text: "Tập trung phát triển sản phẩm AI, Web và Mobile cho thị trường quốc tế." },
            { icon: Building2, title: "Hub miền Trung", text: "Trung tâm hỗ trợ kỹ thuật và vận hành cho đối tác khu vực và toàn cầu." },
          ].map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="rounded-[22px] bg-white border border-slate-200/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_24px_50px_-20px_rgba(27,143,210,0.22)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}>
                <div className="w-[52px] h-[52px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)" }}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-[17px] font-bold text-slate-900">{h.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-slate-500">{h.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </AboutLayout>
  );
}
