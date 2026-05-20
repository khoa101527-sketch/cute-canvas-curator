import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO, FOOTER_LINKS } from "@/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-white pt-24 pb-10 px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg,#05070f 0%, #0a1028 100%)" }}
    >
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 10% 0%, rgba(16,64,166,0.18), transparent 70%)," +
            "radial-gradient(600px 300px at 90% 100%, rgba(27,143,210,0.16), transparent 70%)",
        }} />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <img src="/images/aipower-logo.svg" alt="AIPOWER" className="h-14 md:h-16 w-auto brightness-110" />
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[360px]">
              Xây dựng các giải pháp AI giúp doanh nghiệp tự động hoá, tối ưu và tăng trưởng trong kỷ nguyên số.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 grid place-items-center
                      hover:border-transparent transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundImage: "linear-gradient(135deg, transparent, transparent)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #1040A6, #1B8FD2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <p className="mt-7 text-[13px] text-white/45">© 2026 AIPOWER. All rights reserved.</p>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-[15px] mb-5 tracking-[0.02em]">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Company.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[14px] text-white/65 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-[15px] mb-5 tracking-[0.02em]">Products</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Products.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[14px] text-white/65 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-[15px] mb-5 tracking-[0.02em]">Contact</h4>
            <ul className="space-y-3.5">
              {CONTACT_INFO.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.value} className="flex items-start gap-2.5 text-[14px] text-white/75">
                    <Icon size={16} className="mt-0.5 text-[#5ec0ff] shrink-0" />
                    <span>{c.value}</span>
                  </li>
                );
              })}
            </ul>
            <button
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-semibold whitespace-nowrap
                shadow-[0_10px_28px_-6px_rgba(16,64,166,0.5)] hover:scale-[1.03] transition-all"
              style={{
                background: "linear-gradient(135deg, #1040A6 0%, #1B8FD2 50%, #1B8FD2 100%)",
              }}
            >
              Contact Us
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-7 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[13px] text-white/50">
          <div>AI powers your work · Built for enterprise · 2026</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
