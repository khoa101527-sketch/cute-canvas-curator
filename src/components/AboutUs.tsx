import { useEffect, useState } from "react";
import { Play, X, ArrowRight } from "lucide-react";

const STATS = [
  { num: "7+", lbl: "Years of Experience" },
  { num: "7", lbl: "Branch Offices" },
  { num: "150+", lbl: "Employees" },
  { num: "20+", lbl: "Clients" },
  { num: "200+", lbl: "Projects" },
  { num: "100%", lbl: "Renewal Rate" },
];

const YT_ID = "GWxEkLq0sg0";

export default function AboutUs() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="about-us" className="relative bg-white pt-24 pb-16 px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 20%, rgba(16,64,166,0.06), transparent 70%)," +
            "radial-gradient(800px 400px at 90% 80%, rgba(27,143,210,0.07), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Section title */}
        <h2
          className="font-bold tracking-[-0.025em] leading-[1.1] text-slate-900"
          style={{ fontSize: "clamp(30px,3.6vw,44px)" }}
        >
          Về chúng tôi
        </h2>
        <div
          className="mt-2 h-[3px] w-[56px] rounded-full"
          style={{ background: "linear-gradient(90deg,#1040A6,#1B8FD2)" }}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left — content */}
          <div>
            <p
              className="font-semibold tracking-[-0.01em] leading-[1.35] text-slate-800"
              style={{ fontSize: "clamp(18px,1.6vw,22px)" }}
            >
              Building Trust.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#1040A6 0%,#1B8FD2 55%,#7a5cff 100%)" }}
              >
                Driving Innovation.
              </span>{" "}
              Contributing to Society.
            </p>

            <p className="mt-5 text-[16px] leading-[1.75] text-slate-600 max-w-[620px]">
              Established in 2019 in Ho Chi Minh City, AIPOWER delivers cutting-edge technology solutions
              to optimize business operations. Specializing in enterprise management software, AI, digital
              transformation and Fintech–Web3, we continuously expand our reach to deliver optimal solutions.
            </p>
            <p className="mt-3 text-[15px] leading-[1.75] text-slate-500 max-w-[620px]">
              With a highly experienced team and offices in Japan and Hanoi, we are committed to supporting
              businesses in overcoming challenges and achieving sustainable success.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14.5px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 100%)",
                  boxShadow: "0 16px 32px -10px rgba(27,143,210,0.45)",
                }}
              >
                Read more <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right — video thumbnail */}
          <div className="lg:pt-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative block w-full rounded-[24px] overflow-hidden cursor-pointer max-w-[520px] ml-auto"
              style={{
                aspectRatio: "16/10",
                boxShadow: "0 24px 60px -22px rgba(16,64,166,0.32)",
              }}
              aria-label="Play AIPOWER company introduction video"
            >
              <img
                src={`https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`;
                }}
                alt="AIP Company Introduction"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,20,50,0) 0%, rgba(10,20,50,0.55) 100%)",
                }}
              />
              {/* play button */}
              <div className="absolute inset-0 grid place-items-center">
                <div
                  className="w-[84px] h-[84px] rounded-full grid place-items-center text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg,#1040A6,#1B8FD2)",
                    boxShadow: "0 20px 40px -10px rgba(27,143,210,0.6), 0 0 0 8px rgba(255,255,255,0.18)",
                  }}
                >
                  <Play size={32} fill="white" className="ml-1" />
                </div>
              </div>
              <div className="absolute left-6 bottom-5 text-white text-left">
                <div className="text-[11.5px] tracking-[0.22em] uppercase opacity-80 font-semibold">Watch</div>
                <div className="mt-1 text-[18px] font-bold">AIP Company Introduction</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center px-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close video"
          >
            <X size={22} />
          </button>
          <div
            className="relative w-full"
            style={{ maxWidth: "min(1100px,95vw)", aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0`}
              title="AIP Company Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
