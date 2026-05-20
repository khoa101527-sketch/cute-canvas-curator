import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function AboutLayout({
  eyebrow,
  title,
  description,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero / banner */}
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
        {/* subtle starfield */}
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

        <div className="relative max-w-[1100px] mx-auto text-center">          <h1
            className="font-bold tracking-[-0.025em] leading-[1.06] text-white"
            style={{ fontSize: "clamp(40px,5.4vw,72px)" }}
          >
            {title}
          </h1>
          <p className="mt-7 mx-auto max-w-[820px] text-[17px] leading-[1.75] text-white/75">
            {description}
          </p>
        </div>
      </section>

      {/* Content body */}
      <main className="relative bg-white">{children}</main>

      <Footer />
    </div>
  );
}
