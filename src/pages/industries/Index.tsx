import {
  Briefcase,
  ShoppingCart,
  Landmark,
  HeartPulse,
  GraduationCap,
  Truck,
  Factory,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const INDUSTRIES = [
  {
    icon: Briefcase,
    title: "Business & Operations Management",
    items: [
      "ERP systems for enterprise resource management.",
      "CRM software for customer relationship management.",
      "Process automation solutions (BPM).",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    items: [
      "E-commerce websites and mobile applications.",
      "Payment gateway integration and POS systems.",
      "Inventory and order management solutions.",
    ],
  },
  {
    icon: Landmark,
    title: "Finance – Banking – Insurance",
    items: [
      "Fintech applications for personal financial management.",
      "Risk management and financial transaction systems.",
      "Blockchain integration and data security.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Services",
    items: [
      "Hospital Information Systems (HIS) and clinic management.",
      "Telemedicine applications for remote healthcare.",
      "Electronic Medical Records (EMR/EHR) management.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    items: [
      "E-learning platforms and LMS.",
      "Online training applications & exam management.",
      "Assessment and student progress tracking solutions.",
    ],
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    items: [
      "Fleet management and real-time tracking applications.",
      "Smart vehicle dispatching systems.",
      "Supply chain optimization solutions.",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    items: [
      "Factory and production line management software.",
      "IoT monitoring & predictive maintenance applications.",
      "AI-driven failure prediction and performance optimization.",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate & Construction",
    items: [
      "Project management & bidding platforms.",
      "Customer & real estate agent interaction applications.",
      "Digital mapping, VR/AR technology.",
    ],
  },
];

export default function IndustriesPage() {
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
        <div className="relative max-w-[1100px] mx-auto text-center">          <h1 className="mt-5 font-bold tracking-[-0.025em] leading-[1.06] text-white" style={{ fontSize: "clamp(40px,5.4vw,72px)" }}>
            AI solutions across every industry
          </h1>
          <p className="mt-7 mx-auto max-w-[820px] text-[17px] leading-[1.75] text-white/75">
            From enterprise operations to manufacturing and healthcare — AIPOWER delivers
            tailored AI, software, and digital transformation solutions for businesses in
            every sector.
          </p>
        </div>
      </section>

      <main className="relative bg-white">
        <section className="relative pt-24 pb-24 px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-[760px] mx-auto">              <h2 className="mt-3 font-bold tracking-[-0.02em] leading-[1.1] text-slate-900" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
                Industries we empower
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 leading-[1.7]">
                Deep domain expertise and proven solutions across 8 core industries.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {INDUSTRIES.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="group relative rounded-[24px] bg-white border border-slate-200/80 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_28px_56px_-22px_rgba(27,143,210,0.28)]"
                    style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -12px rgba(15,30,80,0.08)" }}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="w-[60px] h-[60px] rounded-2xl grid place-items-center text-white shrink-0"
                        style={{
                          background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)",
                          boxShadow: "0 14px 28px -10px rgba(27,143,210,0.45)",
                        }}
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[19px] font-bold text-slate-900 leading-[1.3]">{ind.title}</h3>
                        <ul className="mt-4 space-y-2.5">
                          {ind.items.map((it) => (
                            <li key={it} className="flex items-start gap-2.5 text-[14.5px] leading-[1.65] text-slate-600">
                              <CheckCircle2 size={17} strokeWidth={2} className="shrink-0 mt-0.5" style={{ color: "#1B8FD2" }} />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
              <h2 className="font-bold tracking-[-0.02em] leading-[1.18]" style={{ fontSize: "clamp(26px,2.8vw,38px)" }}>
                Looking for a solution for your industry?
              </h2>
              <p className="mt-4 mx-auto max-w-[640px] text-[15.5px] leading-[1.75] text-white/80">
                Let's talk about how AIPOWER can help your business with AI, automation, and tailored software solutions.
              </p>
              <a
                href="mailto:contact@aipower.vn"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14.5px] font-semibold transition-all duration-200"
                style={{ background: "#ffffff", color: "#1040A6", boxShadow: "0 18px 36px -12px rgba(27,143,210,0.45)" }}
              >
                Contact us
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
