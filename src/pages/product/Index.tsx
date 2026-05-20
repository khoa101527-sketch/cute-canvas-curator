import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PRODUCT_GROUP_META,
  PRODUCTS_BY_GROUP,
  PRODUCTS,
  getProductLogo,
  type ProductGroupKey,
} from "@/data/products";

const GROUP_ORDER: ProductGroupKey[] = ["platform", "management", "training"];

export default function ProductsLanding() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section
        className="relative px-6 lg:px-8 pt-32 pb-12"
        style={{ background: "linear-gradient(180deg,#ffffff 0%, #f7faff 100%)" }}
      >
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center gap-2 text-[12.5px] text-slate-500 mb-5">
            <Link to="/" className="hover:text-[#1040A6] transition-colors">Trang chủ</Link>
            <span>›</span>
            <span className="text-slate-700 font-medium">Products</span>
          </div>
          <h1
            className="font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ fontSize: "clamp(32px,4vw,52px)", color: "#0b1736" }}
          >
            Hệ sinh thái sản phẩm AIPOWER
          </h1>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-slate-500 max-w-[680px]">
            {PRODUCTS.length} sản phẩm được nhóm theo 3 trụ cột: nền tảng AI, quản trị
            chuyên ngành và đào tạo — phục vụ toàn bộ vòng đời chuyển đổi số.
          </p>
        </div>
      </section>

      {/* Group sections */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-[1180px] mx-auto space-y-14">
          {GROUP_ORDER.map((key) => {
            const meta = PRODUCT_GROUP_META[key];
            const items = PRODUCTS_BY_GROUP[key];
            return (
              <div
                key={key}
                className="rounded-[28px] bg-white border border-slate-200 p-7 lg:p-10 transition-shadow hover:shadow-[0_30px_70px_-30px_rgba(16,64,166,0.18)]"
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] tracking-[0.16em] uppercase font-bold text-white mb-3"
                      style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 60%,#34d3a4 100%)" }}
                    >
                      {meta.eyebrow}
                    </div>
                    <h2
                      className="font-bold tracking-[-0.01em] leading-[1.2]"
                      style={{ fontSize: "clamp(22px,2.4vw,30px)", color: "#0b1736" }}
                    >
                      {meta.title}
                    </h2>
                    <p className="mt-2 text-[14px] text-slate-500 max-w-[620px] leading-[1.6]">
                      {meta.desc}
                    </p>
                  </div>
                  <Link
                    to={`/products/${key}`}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-[13.5px] text-white whitespace-nowrap transition-all hover:gap-3"
                    style={{
                      background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 100%)",
                      boxShadow: "0 10px 24px -10px rgba(27,143,210,0.55)",
                    }}
                  >
                    Xem tất cả sản phẩm nhóm này
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/product/${p.slug}`}
                      aria-label={p.name}
                      title={p.name}
                      className="group flex items-center justify-center p-4 h-[124px] rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_-18px_rgba(16,64,166,0.28)]"
                    >
                      <img
                        src={getProductLogo(p.slug)}
                        alt={p.name}
                        loading="lazy"
                        className="max-w-[80%] max-h-[72px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
