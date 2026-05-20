import { Bot, Code2, Users, Handshake, Sparkles } from "lucide-react";
import AboutLayout from "./AboutLayout";

const SERVICES = [
  {
    icon: Bot,
    eyebrow: "RPA",
    title: "Tự động hoá quy trình nghiệp vụ",
    text: "Tinh gọn vận hành, giảm chi phí nhân sự và nâng cao độ chính xác cho doanh nghiệp Úc.",
  },
  {
    icon: Code2,
    eyebrow: "CUSTOM SOFTWARE",
    title: "Phát triển phần mềm theo yêu cầu",
    text: "Thiết kế và triển khai các hệ thống phù hợp với nhu cầu đặc thù của doanh nghiệp tại Australia.",
  },
  {
    icon: Users,
    eyebrow: "IT ENGINEERS",
    title: "Cung cấp kỹ sư IT chất lượng cao",
    text: "Đội ngũ kỹ sư giàu kinh nghiệm có thể hỗ trợ dự án từ xa hoặc trực tiếp tại văn phòng khách hàng.",
  },
];

export default function AboutAustralia() {
  return (
    <AboutLayout
      eyebrow="AIPOWER AUSTRALIA"
      title="Đối tác công nghệ đáng tin cậy tại Australia"
      description="AIPOWER AUSTRALIA — thành viên của tập đoàn AIPOWER, được thành lập tại Melbourne với mục tiêu mở rộng vào thị trường Úc và mang đến các giải pháp công nghệ chất lượng cao cho doanh nghiệp địa phương."
    >
      {/* Intro */}
      <section className="relative pt-24 pb-12 px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto text-center">
          <p className="text-[17px] leading-[1.8] text-slate-600">
            Với nền tảng công nghệ vững chắc và đội ngũ kỹ sư giàu kinh nghiệm đến từ Việt Nam và Nhật Bản,
            AIPOWER AUSTRALIA cung cấp các dịch vụ đổi mới giúp doanh nghiệp nâng cao hiệu quả vận hành
            và thích ứng hiệu quả với xu hướng chuyển đổi số.
          </p>
        </div>
      </section>

      {/* 3 Services */}
      <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              3 dịch vụ cốt lõi tại Australia
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                    <div className="w-[72px] h-[72px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.3) inset" }}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="text-[11.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#1B8FD2" }}>
                    {s.eyebrow}
                  </div>
                  <h3 className="mt-2 text-[20px] font-bold text-slate-900 leading-[1.3]">{s.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-slate-500">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted partner statement */}
      <section className="relative py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1080px] mx-auto rounded-[32px] p-10 md:p-14 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(540px 320px at 88% 18%, rgba(27,143,210,0.32), transparent 70%), radial-gradient(420px 280px at 6% 92%, rgba(122,92,255,0.22), transparent 70%)" }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="w-[72px] h-[72px] rounded-full grid place-items-center" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.55)" }}>
                <Handshake size={30} strokeWidth={1.8} className="text-white" />
              </div>
            </div>
            <div className="lg:col-span-10 text-center lg:text-left">
              <div className="text-[12px] tracking-[0.2em] uppercase font-semibold text-white/70">
                Trusted Technology Partner
              </div>
              <h2 className="mt-2 font-bold tracking-[-0.02em] leading-[1.18]" style={{ fontSize: "clamp(26px,2.8vw,38px)" }}>
                Hơn cả một nhà cung cấp dịch vụ — chúng tôi là đối tác đồng hành
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-white/80">
                AIPOWER AUSTRALIA cam kết đồng hành cùng doanh nghiệp trên hành trình đổi mới và tăng trưởng bền vững tại thị trường Úc — kết hợp chiều sâu kỹ thuật, am hiểu địa phương và chất lượng chuẩn quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Sparkles, title: "Đổi mới liên tục", text: "Áp dụng công nghệ AI và tự động hoá hiện đại nhất vào từng dự án." },
            { icon: Users, title: "Đội ngũ đa quốc gia", text: "Kỹ sư giàu kinh nghiệm từ Việt Nam và Nhật Bản, am hiểu thị trường Úc." },
            { icon: Handshake, title: "Đồng hành dài hạn", text: "Quan hệ đối tác bền vững thay vì giao dịch một chiều." },
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
