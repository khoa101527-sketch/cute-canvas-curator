import { useState } from "react";
import {
  Target,
  Eye,
  Users,
  Shield,
  Lightbulb,
  Heart,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import AboutLayout from "./AboutLayout";

const COMPANY_INFO = [
  { label: "Tên công ty", value: "AIPOWER Co., LTD" },
  { label: "Vốn điều lệ", value: "$373,514.42" },
  { label: "Người đại diện", value: "Ly Vinh Nhan Liem" },
  { label: "Số nhân sự", value: "150+" },
  { label: "Thành lập", value: "Tháng 8 / 2019" },
];

type Office = {
  key: string;
  name: string;
  addr: string;
  query: string;
};

const OFFICES: Office[] = [
  {
    key: "hcmc-head",
    name: "AIPOWER HCMC – Head Office",
    addr: "25/1 Cuu Long Street, Tan Son Hoa Ward, Ho Chi Minh City, Vietnam",
    query: "25/1 Cuu Long Street, Tan Son Hoa Ward, Ho Chi Minh City, Vietnam",
  },
  {
    key: "hcmc",
    name: "AIPOWER HCMC",
    addr: "3A Dong Nai Street, Tan Son Hoa Ward, Ho Chi Minh City, Vietnam",
    query: "3A Dong Nai Street, Tan Son Hoa Ward, Ho Chi Minh City, Vietnam",
  },
  {
    key: "hanoi",
    name: "AIPOWER HA NOI",
    addr: "No. 07, Alley 151B/88 Thai Ha, Lang Ha Ward, Dong Da, Hanoi, Vietnam",
    query: "151 Thai Ha, Lang Ha, Dong Da, Hanoi, Vietnam",
  },
  {
    key: "danang",
    name: "AIPOWER DA NANG",
    addr: "Floor 2, 69 Quang Trung Street, Hai Chau Ward, Da Nang City, Vietnam",
    query: "69 Quang Trung, Hai Chau, Da Nang, Vietnam",
  },
  {
    key: "japan",
    name: "AIPOWER JAPAN",
    addr: "Tokyo city, Japan",
    query: "Tokyo, Japan",
  },
  {
    key: "australia",
    name: "AIPOWER AUSTRALIA",
    addr: "Melbourne, Australia",
    query: "Melbourne, Australia",
  },
  {
    key: "usa",
    name: "AIPOWER USA",
    addr: "7828 Big Wind Way, Austin, Texas 78724",
    query: "7828 Big Wind Way, Austin, Texas 78724",
  },
];

const MVC = [
  {
    icon: Target,
    eyebrow: "MISSION",
    title: "Sứ mệnh",
    text: "Mang đến những phần mềm sáng tạo và đáng tin cậy cho thế giới, dựa trên sự chính xác và chính trực của chất lượng Nhật Bản. Chúng tôi thấu hiểu sâu sắc thách thức của khách hàng và tạo ra giá trị bền vững đóng góp cho xã hội.",
  },
  {
    icon: Eye,
    eyebrow: "VISION",
    title: "Tầm nhìn",
    text: "Trở thành công ty phần mềm đẳng cấp quốc tế, tự hào mang chất lượng Nhật Bản và liên tục kiến tạo giá trị thực sự.",
  },
  {
    icon: Users,
    eyebrow: "CULTURE",
    title: "Văn hóa doanh nghiệp",
    text: "Hợp tác và làm việc nhóm · Học tập và phát triển liên tục · Đa dạng và hòa nhập · Minh bạch và chính trực — bốn nền tảng tạo nên môi trường mọi cá nhân đều có thể phát triển.",
  },
];

const CORE_VALUES = [
  { icon: Shield, title: "Cam kết chất lượng", text: "Theo đuổi không ngừng sự chính xác và độ tin cậy theo chuẩn Nhật Bản." },
  { icon: Heart, title: "Chính trực & Minh bạch", text: "Đề cao sự trung thực và cởi mở trong mọi mối quan hệ." },
  { icon: Lightbulb, title: "Đổi mới & Dũng cảm", text: "Đón nhận thay đổi, thách thức lối mòn, phát triển bằng những ý tưởng táo bạo." },
  { icon: Users, title: "Lấy khách hàng làm trung tâm", text: "Lắng nghe sâu sắc, mang đến giải pháp thực sự đáp ứng nhu cầu." },
  { icon: Sparkles, title: "Tôn trọng & Hợp tác", text: "Xây dựng văn hóa làm việc nhóm và tôn vinh sự đa dạng." },
];

const MILESTONES = [
  { year: "2019", title: "Thành lập AIPOWER tại TP.HCM", text: "AIPOWER chính thức được thành lập tại Thành phố Hồ Chí Minh, đánh dấu khởi đầu hành trình đổi mới và dẫn dắt trong lĩnh vực công nghệ." },
  { year: "2024", title: "Đạt mốc 100+ nhân sự", text: "Đội ngũ phát triển vượt 100 nhân sự với kinh nghiệm và thành tựu nổi bật, mở rộng đáng kể tệp khách hàng." },
  { year: "04/2024", title: "Thành lập AIPOWER Japan", text: "Mở rộng phạm vi toàn cầu, cung cấp giải pháp chất lượng cao phù hợp với từng thị trường quốc tế." },
  { year: "06/2024", title: "Thành lập AIPOWER Hà Nội", text: "Nâng cao chất lượng thiết kế và dịch vụ, đưa giải pháp công nghệ tiên tiến đến gần hơn với khách hàng trong nước." },
  { year: "05/2025", title: "Thành lập AIPOWER Australia", text: "Cung cấp giải pháp công nghệ chất lượng cao, điều chỉnh phù hợp với thị trường Úc." },
  { year: "03/2026", title: "Thành lập AIPOWER USA", text: "Chính thức gia nhập thị trường Bắc Mỹ, phục vụ doanh nghiệp Hoa Kỳ." },
  { year: "04/2026", title: "Thành lập AIPOWER Đà Nẵng", text: "Khai thác nguồn nhân lực chất lượng cao tại miền Trung, nâng cao năng lực phát triển sản phẩm." },
];

export default function AboutUs() {
  const [activeOffice, setActiveOffice] = useState<string>(OFFICES[0].key);
  const current = OFFICES.find((o) => o.key === activeOffice) ?? OFFICES[0];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(current.query)}&output=embed`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.query)}`;

  return (
    <AboutLayout
      eyebrow="About Us"
      title="Công ty công nghệ AI — chuẩn Nhật, tầm nhìn toàn cầu"
      description="AIPOWER được thành lập năm 2019 tại TP.HCM, đến nay đã mở rộng tới Nhật Bản, Australia, Hoa Kỳ và nhiều thành phố lớn tại Việt Nam — với đội ngũ 150+ kỹ sư AI & IT, cam kết mang đến giải pháp phần mềm chất lượng Nhật Bản cho doanh nghiệp toàn cầu."
    >
      {/* Company info strip */}
      <section className="relative pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 rounded-[24px] border border-slate-200/80 bg-white p-6 md:p-8 shadow-[0_6px_24px_-10px_rgba(15,30,80,0.08)]">
            {COMPANY_INFO.map((c) => (
              <div key={c.label} className="text-center md:text-left">
                <div className="text-[11.5px] tracking-[0.18em] uppercase font-semibold text-slate-400">
                  {c.label}
                </div>
                <div className="mt-2 text-[16px] font-bold text-slate-900">
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission · Vision · Culture */}
      <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              Đổi mới và thích ứng — chìa khoá kiến tạo giải pháp AI tiên tiến
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
              Tại AIPOWER, chúng tôi tin rằng đổi mới và thích ứng là chìa khoá để tạo ra giải pháp AI dẫn đầu xu hướng trong kỷ nguyên công nghệ thay đổi từng ngày.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
            {MVC.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-10 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                    <div className="w-[72px] h-[72px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.3) inset" }}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-bold text-slate-900">{m.title}</h3>
                  <div className="mt-2 text-[11.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#1B8FD2" }}>
                    {m.eyebrow}
                  </div>
                  <p className="mt-5 text-[15px] leading-[1.75] text-slate-500">{m.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="relative py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              5 giá trị cốt lõi của AIPOWER
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
              Mỗi quyết định tại AIPOWER đều dựa trên sự minh bạch và rõ ràng — sự chính trực là chuẩn mực cao nhất trong mọi mối quan hệ với khách hàng, đối tác và nội bộ.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-[22px] bg-white border border-slate-200/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_24px_50px_-20px_rgba(27,143,210,0.22)]" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}>
                  <div className="w-[52px] h-[52px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 12px 24px -8px rgba(27,143,210,0.4)" }}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="mt-4 text-[12px] font-bold tracking-[0.16em] uppercase" style={{ color: "#1B8FD2" }}>
                    0{i + 1}
                  </div>
                  <h3 className="mt-1 text-[17px] font-bold text-slate-900 leading-[1.3]">{v.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.65] text-slate-500">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones — modern alternating vertical timeline */}
      <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#f7faff 0%, #ffffff 100%)" }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              Hành trình 7+ năm phát triển
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
              Những cột mốc quan trọng đánh dấu hành trình mở rộng của AIPOWER từ TP.HCM ra toàn cầu.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* center vertical line — desktop centered, mobile left at x=20 */}
            <div
              className="absolute top-0 bottom-0 w-[2px] left-5 lg:left-1/2 lg:-translate-x-1/2 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg,#9bd6ff 0%,#5ec0ff 30%,#1B8FD2 65%,#1040A6 100%)",
                opacity: 0.55,
              }}
            />

            <ul className="space-y-12 lg:space-y-14">
              {MILESTONES.map((m, i) => {
                const cardOnLeft = i % 2 === 0; // item đầu card bên trái → năm bên phải
                return (
                  <li key={m.year} className="relative">
                    {/* Dot — always centered on the line */}
                    <span
                      className="absolute top-6 left-5 lg:left-1/2 -translate-x-1/2 z-10 grid place-items-center"
                      aria-hidden
                    >
                      <span
                        className="w-3 h-3 rounded-full block"
                        style={{
                          background: "#1040A6",
                          boxShadow:
                            "0 0 0 4px #ffffff, 0 0 0 7px rgba(27,143,210,0.25)",
                        }}
                      />
                    </span>

                    {/* Mobile (single column): card on right of line */}
                    <div className="lg:hidden pl-14">
                      <div className="text-[12px] tracking-[0.18em] uppercase font-bold mb-2" style={{ color: "#1040A6" }}>
                        {m.year}
                      </div>
                      <div
                        className="rounded-[20px] bg-white border border-[#E5E7EB] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-20px_rgba(15,30,80,0.18)]"
                        style={{ boxShadow: "0 6px 22px -16px rgba(15,30,80,0.08)" }}
                      >
                        <h3 className="text-[18px] font-bold text-slate-900 leading-[1.3]">{m.title}</h3>
                        <p className="mt-2 text-[14px] leading-[1.65] text-slate-500">{m.text}</p>
                      </div>
                    </div>

                    {/* Desktop alternating layout */}
                    <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                      {cardOnLeft ? (
                        <>
                          {/* card LEFT */}
                          <div className="flex justify-end pr-12">
                            <div
                              className="rounded-[20px] bg-white border border-[#E5E7EB] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_18px_36px_-20px_rgba(15,30,80,0.18)] w-full max-w-[420px]"
                              style={{ boxShadow: "0 6px 22px -16px rgba(15,30,80,0.08)" }}
                            >
                              <h3 className="text-[18px] font-bold text-slate-900 leading-[1.3]">{m.title}</h3>
                              <p className="mt-2 text-[14px] leading-[1.65] text-slate-500">{m.text}</p>
                            </div>
                          </div>
                          {/* year RIGHT */}
                          <div className="pl-12">
                            <div
                              className="font-bold leading-none bg-clip-text text-transparent"
                              style={{
                                fontSize: "clamp(34px,3.4vw,46px)",
                                letterSpacing: "-0.01em",
                                backgroundImage: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 60%,#5ec0ff 100%)",
                              }}
                            >
                              {m.year}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* year LEFT */}
                          <div className="pr-12 text-right">
                            <div
                              className="font-bold leading-none bg-clip-text text-transparent inline-block"
                              style={{
                                fontSize: "clamp(34px,3.4vw,46px)",
                                letterSpacing: "-0.01em",
                                backgroundImage: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 60%,#5ec0ff 100%)",
                              }}
                            >
                              {m.year}
                            </div>
                          </div>
                          {/* card RIGHT */}
                          <div className="pl-12">
                            <div
                              className="rounded-[20px] bg-white border border-[#E5E7EB] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_18px_36px_-20px_rgba(15,30,80,0.18)] w-full max-w-[420px]"
                              style={{ boxShadow: "0 6px 22px -16px rgba(15,30,80,0.08)" }}
                            >
                              <h3 className="text-[18px] font-bold text-slate-900 leading-[1.3]">{m.title}</h3>
                              <p className="mt-2 text-[14px] leading-[1.65] text-slate-500">{m.text}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Offices — map embed + active office locator */}
      <section className="relative py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[760px] mx-auto">            <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
              Hệ thống văn phòng AIPOWER toàn cầu
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
              Chọn một văn phòng để xem vị trí trên bản đồ.
            </p>
          </div>

          {/* Map preview */}
          <div className="relative mt-12 rounded-[24px] overflow-hidden border border-[#E5E7EB] bg-slate-100" style={{ boxShadow: "0 6px 28px -16px rgba(15,30,80,0.18)" }}>
            <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-slate-100">
              <iframe
                key={current.key}
                title={`Map · ${current.name}`}
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", width: "100%", height: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Floating active label */}
            <div className="absolute top-4 left-4 max-w-[78%] sm:max-w-[60%] bg-white/95 backdrop-blur-sm rounded-full pl-3 pr-4 py-2 flex items-center gap-2 border border-[#E5E7EB] shadow-[0_8px_24px_-12px_rgba(15,30,80,0.18)]">
              <span className="w-7 h-7 rounded-full grid place-items-center text-white shrink-0" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)" }}>
                <MapPin size={14} strokeWidth={2} />
              </span>
              <span className="text-[13px] font-semibold text-slate-900 truncate">
                {current.name}
              </span>
            </div>

            {/* Open in Google Maps button */}
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12.5px] font-semibold border transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "#1B8FD2",
                color: "#1040A6",
                backdropFilter: "blur(6px)",
                boxShadow: "0 8px 24px -12px rgba(27,143,210,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1040A6";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                e.currentTarget.style.color = "#1040A6";
              }}
            >
              Mở trong Google Maps
              <ExternalLink size={13} strokeWidth={2} />
            </a>
          </div>

          {/* Office cards grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICES.map((o) => {
              const isActive = o.key === activeOffice;
              return (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setActiveOffice(o.key)}
                  className="text-left rounded-[20px] p-5 transition-all duration-300 group focus:outline-none"
                  style={{
                    background: isActive ? "#f0f7ff" : "#ffffff",
                    border: `1px solid ${isActive ? "#1040A6" : "#E5E7EB"}`,
                    boxShadow: isActive
                      ? "0 18px 40px -20px rgba(27,143,210,0.35), 0 0 0 3px rgba(27,143,210,0.08)"
                      : "0 6px 22px -16px rgba(15,30,80,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#1B8FD2";
                      e.currentTarget.style.boxShadow =
                        "0 14px 30px -18px rgba(27,143,210,0.25)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.boxShadow =
                        "0 6px 22px -16px rgba(15,30,80,0.08)";
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-[44px] h-[44px] rounded-full grid place-items-center text-white shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
                        boxShadow: isActive
                          ? "0 12px 24px -8px rgba(27,143,210,0.5)"
                          : "0 8px 18px -8px rgba(27,143,210,0.35)",
                      }}
                    >
                      <MapPin size={20} strokeWidth={1.9} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[15.5px] font-bold text-slate-900 leading-[1.3] truncate">
                          {o.name}
                        </h3>
                        {isActive && (
                          <span
                            className="shrink-0 inline-flex items-center gap-1 text-[10.5px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                            style={{
                              background: "#1040A6",
                              color: "#ffffff",
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-[13.5px] leading-[1.6] text-slate-500">
                        {o.addr}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </AboutLayout>
  );
}
