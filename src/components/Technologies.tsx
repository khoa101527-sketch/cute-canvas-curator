const TECH = [
  ["Solidity", "Solidity.svg"],
  ["Python", "python.svg"],
  ["JavaScript", "JS.svg"],
  ["HTML", "HTML.svg"],
  ["CSS", "CSS.svg"],
  ["VB.NET", "VBnet.svg"],
  ["Dart", "Dart.svg"],
  ["C#", "C.svg"],
  ["AngularJS", "AngularJS.svg"],
  ["Node.js", "NodeJs.svg"],
  ["PHP", "php.svg"],
  ["Go", "golang.svg"],
  ["Swift", "Swift.svg"],
  ["Java", "Java.svg"],
  ["Odoo", "Odoo.svg"],
  ["React", "React.svg"],
  ["SQL Server", "SQLServer.svg"],
  ["PyTorch", "PyTorch.svg"],
  ["Keras", "Keras.svg"],
  ["Oracle", "Oracle.svg"],
  ["Django", "Django.svg"],
  ["TensorFlow", "TensorFlow.svg"],
  ["MXNet", "Mxnet.svg"],
  ["MySQL", "MySQL.svg"],
  ["PostgreSQL", "PostGreSQL.svg"],
  ["MongoDB", "mongoDB.svg"],
  ["BigQuery", "GGBigQuery.svg"],
] as const;

export default function Technologies() {
  return (
    <section id="technologies" className="relative bg-white py-24 px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 0%, rgba(27,143,210,0.07), transparent 70%)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-left max-w-[820px]">
          <h2
            className="font-bold tracking-[-0.025em] leading-[1.08] text-slate-900"
            style={{ fontSize: "clamp(34px,4.2vw,52px)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#1040A6,#1B8FD2,#7a5cff)" }}
            >
              Technologies
            </span>{" "}
            we work with
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-slate-600 max-w-[640px]">
            A modern, polyglot stack covering web, mobile, AI/ML, blockchain and data — chosen to deliver
            performance, scale and long-term maintainability.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-5">
          {TECH.map(([name, file]) => (
            <div
              key={name}
              className="group relative aspect-square rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center justify-center gap-2 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B8FD2]/40 hover:shadow-[0_18px_38px_-14px_rgba(27,143,210,0.25)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 14px -8px rgba(15,30,80,0.08)",
              }}
              title={name}
            >
              <img
                src={`https://aipower.vn/images/technologies/${file}`}
                alt={name}
                loading="lazy"
                className="max-h-[44px] max-w-[60%] object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-[11.5px] font-semibold text-slate-600 text-center leading-tight">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
