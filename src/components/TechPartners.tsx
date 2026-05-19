const PARTNERS = [
  {
    name: "AWS",
    logo: "https://aipower.vn/images/logos/amazon.png",
    desc: "Amazon Web Services — a leading global cloud platform with 200+ services. Trusted by millions of startups, enterprises and governments to reduce costs, increase agility and accelerate innovation.",
  },
  {
    name: "Microsoft",
    logo: "https://aipower.vn/images/logos/microsoft.png",
    desc: "Microsoft is a global technology company providing software, hardware and cloud services. Its ecosystem — Windows, Office, Azure — powers digital transformation and productivity worldwide.",
  },
  {
    name: "MongoDB",
    logo: "https://aipower.vn/images/logos/mongodb.png",
    desc: "MongoDB is a leading NoSQL database used by thousands of enterprises. Flexible document model, high performance and strong scalability for building modern data‑driven applications.",
  },
];

export default function TechPartners() {
  return (
    <section
      id="partners"
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#f7faff 0%,#f0f5fc 100%)" }}
    >
      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-left max-w-[820px]">
          <h2
            className="font-bold tracking-[-0.025em] leading-[1.08] text-slate-900"
            style={{ fontSize: "clamp(34px,4.2vw,52px)" }}
          >
            Technology{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#1040A6,#1B8FD2,#7a5cff)" }}
            >
              Partners
            </span>
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-slate-600 max-w-[640px]">
            We collaborate with world-class technology leaders to deliver reliable, secure and scalable
            solutions for our enterprise customers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-[28px] bg-white border border-slate-200/80 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.25)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)",
              }}
            >
              <div className="h-[64px] flex items-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-[52px] max-w-[180px] object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-[20px] font-bold tracking-[-0.01em] text-slate-900">
                {p.name}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-slate-500">{p.desc}</p>
              <div
                className="absolute bottom-0 left-9 right-9 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg,#1040A6,#1B8FD2)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
