import {
  Sparkles,
  Rocket,
  Wallet,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  FileText,
  Search,
  Code2,
  Users,
  PartyPopper,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const REASONS = [
  {
    icon: Sparkles,
    eyebrow: "PROFESSIONAL & CREATIVE",
    title: "Môi trường chuyên nghiệp & sáng tạo",
    items: [
      "Văn hoá cởi mở, khuyến khích sáng tạo và chia sẻ ý tưởng.",
      "Làm việc cùng đội ngũ chuyên gia giàu kinh nghiệm.",
      "Không gian làm việc hiện đại và thân thiện.",
    ],
  },
  {
    icon: Rocket,
    eyebrow: "CAREER GROWTH",
    title: "Cơ hội phát triển nghề nghiệp",
    items: [
      "Đào tạo nội bộ và bên ngoài để nâng cao kỹ năng chuyên môn.",
      "Lộ trình thăng tiến rõ ràng, đánh giá hiệu suất định kỳ.",
      "Cơ hội làm việc với các công nghệ mới nhất: AI, IoT, Big Data.",
    ],
  },
  {
    icon: Wallet,
    eyebrow: "BENEFITS",
    title: "Phúc lợi & đãi ngộ hấp dẫn",
    items: [
      "Lương cạnh tranh, thưởng theo hiệu suất và thưởng dự án.",
      "Đầy đủ các chế độ bảo hiểm theo quy định.",
      "Hoạt động team-building và company trip thường niên.",
    ],
  },
];

const POSITIONS = [
  { title: "Intern Developer", location: "Ho Chi Minh City" },
  { title: "Intern AI Engineer", location: "Ho Chi Minh City" },
  { title: "Intern Frontend Developer", location: "Ho Chi Minh City" },
  { title: "Intern Tester", location: "Ho Chi Minh City" },
];

const PROCESS = [
  { icon: FileText, title: "Nộp hồ sơ", text: "Gửi CV qua email hr@aipower.com.vn hoặc ứng tuyển trực tiếp qua tin tuyển dụng của công ty." },
  { icon: Search, title: "Sàng lọc hồ sơ", text: "Đánh giá và sàng lọc hồ sơ ứng viên." },
  { icon: Code2, title: "Bài kiểm tra lập trình", text: "Đánh giá kỹ năng giải quyết vấn đề trên máy tính." },
  { icon: Users, title: "Phỏng vấn", text: "Phỏng vấn trực tiếp với HR và bộ phận kỹ thuật." },
  { icon: PartyPopper, title: "Onboarding", text: "Phê duyệt cuối cùng và chào đón bạn đến với AIPOWER." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        data-theme="dark"
        className="relative overflow-hidden pt-44 pb-32 px-6 lg:px-8"
        style={{
          background:
            "radial-gradient(1100px 520px at 12% 18%, rgba(27,143,210,0.32), transparent 70%)," +
            "radial-gradient(900px 480px at 88% 30%, rgba(122,92,255,0.22), transparent 72%)," +
            "linear-gradient(180deg,#0a0c24 0%,#10112a 55%,#1a1f4a 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(1.2px 1.2px at 18% 32%, rgba(255,255,255,0.6) 50%, transparent 60%)," +
              "radial-gradient(1px 1px at 70% 22%, rgba(255,255,255,0.5) 50%, transparent 60%)," +
              "radial-gradient(1.4px 1.4px at 82% 70%, rgba(255,255,255,0.45) 50%, transparent 60%)," +
              "radial-gradient(1px 1px at 32% 78%, rgba(255,255,255,0.4) 50%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto text-center">          <h1 className="font-bold tracking-[-0.025em] leading-[1.06] text-white" style={{ fontSize: "clamp(40px,5.4vw,72px)" }}>
            Cùng AIPOWER kiến tạo tương lai công nghệ
          </h1>
          <p className="mt-7 mx-auto max-w-[820px] text-[17px] leading-[1.75] text-white/75">
            Gia nhập đội ngũ AIPOWER để làm việc cùng các chuyên gia trong môi trường chuyên nghiệp,
            sáng tạo và đầy cơ hội phát triển — với những công nghệ tiên tiến nhất như AI, IoT và Big Data.
          </p>
        </div>
      </section>

      <main className="relative bg-white">
        {/* Why Choose AIPOWER */}
        <section className="relative pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[760px] mx-auto">              <h2 className="font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
                3 lý do để gia nhập AIPOWER
              </h2>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
              {REASONS.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-16 pb-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]"
                    style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)" }}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                      <div className="w-[72px] h-[72px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.45), 0 1px 0 rgba(255,255,255,0.3) inset" }}>
                        <Icon size={30} strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="text-[11.5px] font-semibold tracking-[0.18em] uppercase text-center" style={{ color: "#1B8FD2" }}>
                      {r.eyebrow}
                    </div>
                    <h3 className="mt-2 text-[20px] font-bold text-slate-900 text-center leading-[1.3]">{r.title}</h3>
                    <ul className="mt-6 space-y-3">
                      {r.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-[14.5px] leading-[1.65] text-slate-600">
                          <CheckCircle2 size={18} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: "#1B8FD2" }} />
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

        {/* Open Positions */}
        <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center max-w-[760px] mx-auto">              <h2 className="font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
                Open Positions
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
                Các vị trí đang tuyển dụng tại AIPOWER. Gửi CV qua <span className="font-semibold text-slate-900">hr@aipower.com.vn</span> để ứng tuyển.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {POSITIONS.map((p) => (
                <a
                  key={p.title}
                  href={`mailto:hr@aipower.com.vn?subject=Application%20-%20${encodeURIComponent(p.title)}`}
                  className="group rounded-[22px] bg-white border border-[#E5E7EB] p-6 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_24px_50px_-20px_rgba(27,143,210,0.22)]"
                  style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}
                >
                  <div className="w-[56px] h-[56px] rounded-full grid place-items-center text-white shrink-0" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 12px 24px -8px rgba(27,143,210,0.4)" }}>
                    <Rocket size={22} strokeWidth={1.9} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] font-bold text-slate-900 leading-[1.3]">{p.title}</h3>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] text-slate-500">
                      <MapPin size={13} strokeWidth={2} />
                      {p.location}
                    </div>
                  </div>
                  <ArrowRight size={18} strokeWidth={2} className="shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "#1040A6" }} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="relative py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[760px] mx-auto">              <h2 className="font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
                Quy trình ứng tuyển 5 bước
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {PROCESS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-[22px] bg-white border border-[#E5E7EB] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_24px_50px_-20px_rgba(27,143,210,0.22)]"
                    style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}
                  >
                    <div className="w-[52px] h-[52px] rounded-full grid place-items-center text-white" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 12px 24px -8px rgba(27,143,210,0.4)" }}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div className="mt-4 text-[12px] font-bold tracking-[0.16em] uppercase" style={{ color: "#1B8FD2" }}>
                      0{i + 1}
                    </div>
                    <h3 className="mt-1 text-[17px] font-bold text-slate-900 leading-[1.3]">{p.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.65] text-slate-500">{p.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#f7faff 0%, #ffffff 100%)" }}>
          <div className="max-w-[980px] mx-auto rounded-[28px] p-10 md:p-14 text-white relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg,#0a0c24 0%,#10112a 50%,#1a1f4a 100%)" }}>
            <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(540px 320px at 88% 18%, rgba(27,143,210,0.32), transparent 70%), radial-gradient(420px 280px at 6% 92%, rgba(122,92,255,0.22), transparent 70%)" }} />
            <div className="relative">
              <div className="mx-auto w-[64px] h-[64px] rounded-full grid place-items-center" style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)", boxShadow: "0 18px 36px -10px rgba(27,143,210,0.55)" }}>
                <Mail size={26} strokeWidth={1.8} className="text-white" />
              </div>
              <h2 className="mt-6 font-bold tracking-[-0.02em] leading-[1.18]" style={{ fontSize: "clamp(26px,2.8vw,38px)" }}>
                Sẵn sàng cùng AIPOWER?
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-[15.5px] leading-[1.75] text-white/80">
                Gửi CV của bạn về <span className="font-semibold text-white">hr@aipower.com.vn</span> hoặc ứng tuyển trực tiếp tại các vị trí phía trên.
              </p>
              <a
                href="mailto:hr@aipower.com.vn"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14.5px] font-semibold transition-all duration-200"
                style={{ background: "#ffffff", color: "#1040A6", boxShadow: "0 18px 36px -12px rgba(27,143,210,0.45)" }}
              >
                Gửi CV ngay
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
