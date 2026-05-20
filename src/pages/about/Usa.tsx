import { Globe2, Cpu, Zap, Building2, Handshake, MapPin } from "lucide-react";
import AboutLayout from "./AboutLayout";

const PILLARS = [
  {
    icon: Cpu,
    eyebrow: "TECHNOLOGY",
    title: "Software Engineering · System Integration",
    text: "Năng lực kỹ thuật phần mềm sâu rộng và tích hợp hệ thống — nền tảng vững chắc cho các dự án quy mô doanh nghiệp.",
  },
  {
    icon: Zap,
    eyebrow: "DATA & AI",
    title: "Data · Artificial Intelligence",
    text: "Khai thác sức mạnh dữ liệu và AI để tinh gọn vận hành, nâng cao hiệu quả và tăng tốc chuyển đổi số.",
  },
  {
    icon: Globe2,
    eyebrow: "GLOBAL DELIVERY",
    title: "Hợp tác xuyên biên giới",
    text: "Kết hợp đội ngũ Việt Nam, Nhật Bản và Hoa Kỳ — mang đến mô hình phối hợp linh hoạt cho khách hàng Mỹ.",
  },
];

export default function AboutUsa() {
  return (
    <AboutLayout
      eyebrow="AIPOWER USA"
      title="Vươn ra thị trường Bắc Mỹ — chính thức hiện diện tại Austin, Texas"
      description="Sự ra đời của AIPOWER USA tại Austin, Texas đánh dấu bước tiến quan trọng trong chiến lược toàn cầu của AIPOWER, củng cố hiện diện tại thị trường Hoa Kỳ và gắn kết hơn với khách hàng trong các dự án công nghệ, phần mềm và AI."
    >
      {/* Strategy intro */}
      <section className="relative pt-24 pb-12 px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto text-center">
          <p className="text-[17px] leading-[1.8] text-slate-600">
            Tại AIPOWER, chúng tôi tập trung mang đến những giải pháp công nghệ thiết thực,
            hướng đến hiệu quả kinh doanh và phù hợp với nhu cầu không ngừng phát triển của doanh nghiệp hiện đại.
            Với năng lực vững chắc trong kỹ thuật phần mềm, tích hợp hệ thống, dữ liệu và trí tuệ nhân tạo,
            chúng tôi giúp các tổ chức tinh gọn vận hành, nâng cao hiệu quả và tăng tốc hành trình chuyển đổi số.
          </p>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              3 trụ cột năng lực phục vụ thị trường Mỹ
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                    <div className="w-[72px] h-[72px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.3) inset" }}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="text-[11.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#1B8FD2" }}>
                    {p.eyebrow}
                  </div>
                  <h3 className="mt-2 text-[20px] font-bold text-slate-900 leading-[1.3]">{p.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-slate-500">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestone & address */}
      <section className="relative py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className="rounded-[28px] p-10 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
            <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(420px 280px at 80% 20%, rgba(27,143,210,0.35), transparent 70%), radial-gradient(360px 240px at 10% 90%, rgba(122,92,255,0.25), transparent 70%)" }} />
            <div className="relative">
              <div className="w-[64px] h-[64px] rounded-full grid place-items-center" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.55)" }}>
                <Building2 size={28} strokeWidth={1.8} className="text-white" />
              </div>
              <div className="mt-6 text-[12px] tracking-[0.2em] uppercase font-semibold text-white/70">
                A Strategic Milestone
              </div>
              <h3 className="mt-2 text-[24px] font-bold leading-[1.25]">
                Củng cố vị thế của AIPOWER trên thị trường toàn cầu
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.75] text-white/75">
                Sự kiện này không chỉ là cột mốc mở rộng địa lý, mà còn phản ánh cam kết liên tục của AIPOWER trong việc nâng cao chất lượng dịch vụ
                và khẳng định hiện diện của một công ty công nghệ Việt Nam trên thị trường quốc tế.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-white border border-slate-200/80 p-10" style={{ boxShadow: "0 6px 24px -10px rgba(15,30,80,0.08)" }}>
            <div className="w-[64px] h-[64px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45)" }}>
              <MapPin size={26} strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 text-[22px] font-bold text-slate-900">AIPOWER USA · Austin, Texas</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-slate-500">
              7828 Big Wind Way, Austin, Texas 78724
            </p>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-slate-600">
              Vị trí tại Austin cho phép AIPOWER USA phối hợp chặt chẽ hơn với khách hàng Hoa Kỳ,
              tăng cường hợp tác trong các dự án quốc tế và xây dựng nền tảng cho quan hệ đối tác lâu dài.
            </p>
            <div className="mt-7 flex items-center gap-3 text-[13px] text-slate-500 font-medium">
              <Handshake size={16} className="text-[#1B8FD2]" />
              Sẵn sàng đồng hành cùng doanh nghiệp Mỹ
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
}
