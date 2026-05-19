import { ArrowRight, Cpu, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PRODUCT_GROUP_META,
  PRODUCTS_BY_GROUP,
  type ProductGroupKey,
} from "@/data/products";

// Unified icon gradient — same blue → cyan family across all 3 groups
const UNIFIED_ICON_GRADIENT =
  "linear-gradient(135deg,#1040A6 0%,#1B8FD2 55%,#5ec0ff 100%)";

const GROUP_VISUAL: Record<
  ProductGroupKey,
  { icon: typeof Cpu; accent: string; tag: string }
> = {
  platform: {
    icon: Cpu,
    accent: UNIFIED_ICON_GRADIENT,
    tag: "Platform",
  },
  management: {
    icon: Briefcase,
    accent: UNIFIED_ICON_GRADIENT,
    tag: "Enterprise",
  },
  training: {
    icon: GraduationCap,
    accent: UNIFIED_ICON_GRADIENT,
    tag: "Education",
  },
};

export default function Products() {
  return (
    <section
      id="product"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#ffffff 0%, #f4f8ff 100%)" }}
    >
      {/* ambient blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(16,64,166,0.18), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-24 w-[520px] h-[520px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(27,143,210,0.14), transparent 70%)" }}
      />

      <div className="max-w-[1280px] mx-auto relative">
        {/* Section heading */}
        <div className="text-center max-w-[820px] mx-auto">
          <span
            className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.2em] uppercase font-semibold"
            style={{ color: "#1040A6" }}
          >
            <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1040A6] to-[#1B8FD2]" />
            Our Solutions
            <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#1B8FD2] to-[#7a5cff]" />
          </span>
          <h2
            className="mt-4 font-bold tracking-[-0.02em] leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(34px,4vw,52px)" }}
          >
            3 nhóm sản phẩm{" "}
            <span className="bg-gradient-to-r from-[#1040A6] via-[#1B8FD2] to-[#7a5cff] bg-clip-text text-transparent">
              AI ecosystem
            </span>
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground leading-[1.65] max-w-[680px] mx-auto">
            Hệ sinh thái AI toàn diện cho doanh nghiệp — từ tự động hoá vận hành,
            quản trị nội bộ đến đào tạo năng lực AI cho đội ngũ.
          </p>
        </div>

        {/* 3 group cards — icon floating on top edge, no chip */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
          {(["platform", "management", "training"] as ProductGroupKey[]).map(
            (groupKey) => {
              const meta = PRODUCT_GROUP_META[groupKey];
              const visual = GROUP_VISUAL[groupKey];
              const Icon = visual.icon;
              const count = PRODUCTS_BY_GROUP[groupKey].length;

              return (
                <Link
                  key={groupKey}
                  to={`/products/${groupKey}`}
                  className="group relative rounded-[28px] bg-white border border-slate-200/80 px-8 pt-14 pb-9 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1B8FD2]/40 hover:shadow-[0_30px_60px_-20px_rgba(27,143,210,0.28)]"
                  style={{
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px -10px rgba(15,30,80,0.08)",
                  }}
                >
                  {/* Floating icon — top edge */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9">
                    <div
                      className="w-[72px] h-[72px] rounded-full grid place-items-center text-white transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: visual.accent,
                        boxShadow:
                          "0 18px 36px -10px rgba(27,143,210,0.45), 0 8px 18px -6px rgba(94,192,255,0.28), 0 1px 0 rgba(255,255,255,0.3) inset",
                      }}
                    >
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3
                    className="text-[22px] font-bold leading-[1.25]"
                    style={{ color: "#0b1736" }}
                  >
                    {meta.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-slate-600">
                    {meta.desc}
                  </p>

                  <div className="mt-5 text-[12.5px] text-slate-500 font-medium">
                    {count} sản phẩm trong nhóm
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1040A6]">
                    Xem chi tiết
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    className="absolute bottom-0 left-9 right-9 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: visual.accent }}
                  />
                </Link>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
