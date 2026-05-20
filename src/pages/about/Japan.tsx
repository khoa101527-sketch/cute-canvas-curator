import { ShieldCheck, Lock, Users, Calendar, UserCheck } from "lucide-react";
import AboutLayout from "./AboutLayout";

const COMPANY_INFO = [
  { label: "Tên công ty", value: "AIPOWER JAPAN Co., Ltd." },
  { label: "Người đại diện", value: "Mr. Takeshi Suzuki" },
  { label: "Ngày thành lập", value: "01 / 04 / 2024" },
  { label: "Vị trí", value: "Tokyo, Japan" },
];

const QUALITY_POLICY = [
  "Hoạch định và đề xuất chiến lược đảm bảo chất lượng sản phẩm và dịch vụ.",
  "Thúc đẩy đào tạo và phát triển đội ngũ nhân sự.",
  "Phản hồi nhanh chóng các yêu cầu từ khách hàng.",
  "Liên tục cải tiến quy trình và công nghệ.",
  "Tuân thủ các tiêu chuẩn quốc tế và quy định pháp luật.",
];

const SECURITY_POLICY = [
  "Tăng cường bảo mật thông tin thông qua cải tiến có hệ thống và liên tục, dẫn dắt bởi Ban điều hành.",
  "Thiết lập các quy định nội bộ chính thức về biện pháp bảo mật thông tin.",
  "Đảm bảo nhân sự có đủ kiến thức và kỹ năng kỹ thuật cần thiết về bảo mật thông tin.",
  "Tuân thủ pháp luật, quy định, tiêu chuẩn ngành và các nghĩa vụ hợp đồng liên quan.",
  "Hành động và áp dụng biện pháp phòng ngừa kịp thời khi có vi phạm pháp luật, hợp đồng hoặc sự cố bảo mật.",
];

const PRIVACY_POLICY = [
  "Thu thập thông tin cá nhân thông qua các phương thức hợp pháp và công bằng.",
  "Chỉ thu thập và sử dụng thông tin cá nhân trong phạm vi cần thiết.",
  "Triển khai các biện pháp bảo mật phù hợp.",
  "Phản hồi kịp thời các yêu cầu ngừng sử dụng hoặc câu hỏi liên quan.",
  "Liên tục rà soát và cải tiến chính sách bảo vệ thông tin cá nhân.",
];

export default function AboutJapan() {
  return (
    <AboutLayout
      eyebrow="AIPOWER JAPAN"
      title="Cánh tay nối dài tại Nhật Bản — chuẩn chất lượng vượt mong đợi"
      description="AIPOWER JAPAN, thành viên của AIPOWER, được thành lập tháng 04/2024 tại Tokyo. Dẫn dắt bởi ông Takeshi Suzuki — chuyên gia với hơn 25 năm kinh nghiệm trong scratch development và phát triển sản phẩm tại các công ty IT Nhật Bản — chúng tôi đồng hành cùng khách hàng bằng những giải pháp IT tiên tiến."
    >
      {/* Company Info */}
      <section className="relative pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-[1180px] mx-auto">
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

      {/* Representative Director story */}
      <section className="relative py-16 px-6 lg:px-8">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-[28px] p-10 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
              <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(420px 280px at 80% 20%, rgba(27,143,210,0.35), transparent 70%), radial-gradient(360px 240px at 10% 90%, rgba(122,92,255,0.25), transparent 70%)" }} />
              <div className="relative">
                <div className="w-[64px] h-[64px] rounded-full grid place-items-center" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.55)" }}>
                  <UserCheck size={28} strokeWidth={1.8} className="text-white" />
                </div>
                <div className="mt-6 text-[12px] tracking-[0.2em] uppercase font-semibold text-white/70">
                  Representative Director
                </div>
                <h3 className="mt-2 text-[26px] font-bold leading-[1.25]">Mr. Takeshi Suzuki</h3>
                <p className="mt-4 text-[14.5px] leading-[1.7] text-white/75">
                  Hơn 25 năm kinh nghiệm trong phát triển scratch và phát triển sản phẩm tại các công ty IT Nhật Bản. Từng làm việc ở cả phía khách hàng và phía nhà cung cấp dịch vụ offshore, ông thấu hiểu sâu sắc sản phẩm và quy trình mà khách hàng yêu cầu.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.12] text-slate-900" style={{ fontSize: "clamp(28px,3.4vw,42px)" }}>
              Hỗ trợ tăng trưởng cho khách hàng bằng những giải pháp IT tiên tiến
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-slate-600">
              AIPOWER JAPAN cam kết đồng hành cùng khách hàng đạt được mục tiêu kinh doanh bằng các giải pháp công nghệ thông tin tiên tiến. Để thực hiện điều này, chúng tôi tuân thủ nghiêm ngặt <span className="font-semibold text-slate-900">Chính sách Chất lượng</span>, <span className="font-semibold text-slate-900">Chính sách Bảo mật Thông tin</span> và <span className="font-semibold text-slate-900">Chính sách Bảo vệ Thông tin Cá nhân</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 3 policy columns */}
      <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              3 chính sách định hướng hoạt động
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
            {[
              { icon: ShieldCheck, eyebrow: "QUALITY POLICY", title: "Chính sách Chất lượng", intro: "AIPOWER JAPAN cam kết mang đến sản phẩm và dịch vụ chất lượng cao, không chỉ đáp ứng mà còn vượt qua kỳ vọng của khách hàng. Chúng tôi liên tục cải tiến quy trình và quản trị chất lượng để mang lại giá trị bền vững.", items: QUALITY_POLICY },
              { icon: Lock, eyebrow: "SECURITY POLICY", title: "Chính sách Bảo mật Thông tin", intro: "AIPOWER JAPAN cam kết bảo vệ tài sản thông tin xử lý trong hoạt động kinh doanh — bao gồm dữ liệu khách hàng — trước các nguy cơ như sự cố, thiên tai và tội phạm mạng, nhằm duy trì niềm tin với khách hàng và xã hội.", items: SECURITY_POLICY },
              { icon: Users, eyebrow: "PRIVACY POLICY", title: "Chính sách Bảo vệ Thông tin Cá nhân", intro: "AIPOWER JAPAN cam kết bảo vệ thông tin cá nhân của khách hàng và đối tác kinh doanh theo các nguyên tắc dưới đây.", items: PRIVACY_POLICY },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                    <div className="w-[72px] h-[72px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.3) inset" }}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-center" style={{ color: "#1B8FD2" }}>
                    {p.eyebrow}
                  </div>
                  <h3 className="mt-2 text-[20px] font-bold text-slate-900 text-center leading-[1.3]">{p.title}</h3>
                  <p className="mt-4 text-[14px] leading-[1.7] text-slate-500 text-center">{p.intro}</p>

                  <ul className="mt-6 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[14px] leading-[1.6] text-slate-600">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)" }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Establishment footer card */}
      <section className="relative py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[900px] mx-auto rounded-[28px] border border-slate-200/80 p-10 md:p-12 text-center" style={{ background: "linear-gradient(180deg,#f7faff 0%, #ffffff 100%)", boxShadow: "0 6px 24px -10px rgba(15,30,80,0.08)" }}>
          <div className="mx-auto w-[64px] h-[64px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45)" }}>
            <Calendar size={26} strokeWidth={1.8} />
          </div>
          <h3 className="mt-6 text-[22px] font-bold text-slate-900">Thành lập ngày 01 tháng 04 năm 2024</h3>
          <p className="mt-3 text-[15px] leading-[1.7] text-slate-500">
            AIPOWER JAPAN Co., Ltd. — Đại diện pháp luật: Mr. Takeshi Suzuki
          </p>
        </div>
      </section>
    </AboutLayout>
  );
}
