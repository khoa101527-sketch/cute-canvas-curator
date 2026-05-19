import type { Section } from "@/data/news";

export default function ArticleSections({ sections, accent = "#1040A6" }: { sections: Section[]; accent?: string }) {
  return (
    <div className="space-y-10">
      {sections.map((s, i) => (
        <section key={i}>
          {s.heading && (
            <h2 className="font-bold tracking-[-0.015em] leading-[1.2] text-slate-900 text-[22px] md:text-[26px]">
              <span className="inline-block w-1.5 h-5 rounded-sm mr-3 align-[-2px]" style={{ background: `linear-gradient(180deg,${accent},#1B8FD2)` }} />
              {s.heading}
            </h2>
          )}
          <div className="mt-5 space-y-5">
            {s.blocks.map((b, j) => {
              if (b.type === "p") {
                return (
                  <p key={j} className="text-[15.5px] md:text-[16px] leading-[1.85] text-slate-600">
                    {b.text}
                  </p>
                );
              }
              return (
                <ul key={j} className="space-y-3">
                  {b.items.map((it, k) => {
                    const m = /^\s*([^:]{2,60}):\s*(.*)$/.exec(it);
                    return (
                      <li key={k} className="relative pl-7 text-[15.5px] leading-[1.8] text-slate-600">
                        <span
                          className="absolute left-0 top-[10px] w-3.5 h-3.5 rounded-full"
                          style={{ background: "linear-gradient(135deg,#1040A6,#1B8FD2)", boxShadow: "0 0 0 4px rgba(27,143,210,0.10)" }}
                        />
                        {m ? (
                          <>
                            <span className="font-semibold text-slate-900">{m[1]}:</span> {m[2]}
                          </>
                        ) : it}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
