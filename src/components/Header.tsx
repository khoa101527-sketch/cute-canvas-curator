import { useState, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/data";
import { PRODUCT_GROUP_META, type ProductGroupKey } from "@/data/products";

const PRODUCT_DROPDOWN: { key: ProductGroupKey; label: string }[] = [
  { key: "platform", label: "Nền tảng & Vận hành thông minh" },
  { key: "management", label: "Quản trị" },
  { key: "training", label: "Đào tạo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Detect background under the header by sampling a point just below it.
  const detectTheme = useCallback(() => {
    if (typeof document === "undefined") return;
    // Sample point: horizontal center, just below the floating header (header sits at top:20px, ~h:64-72px)
    const x = window.innerWidth / 2;
    const y = 110; // a bit below the header bottom edge
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    if (!el) return;
    // Walk up the DOM looking for an explicit data-theme marker first
    let node: HTMLElement | null = el;
    let resolved: "dark" | "light" | null = null;
    while (node) {
      const t = node.getAttribute?.("data-theme");
      if (t === "dark" || t === "light") {
        resolved = t;
        break;
      }
      node = node.parentElement;
    }
    if (resolved) {
      setTheme(resolved);
      return;
    }
    // Fallback: probe computed background-color luminance up the tree
    let probe: HTMLElement | null = el;
    let luminance = 1; // assume light if nothing found
    while (probe) {
      const bg = getComputedStyle(probe).backgroundColor;
      const m = bg.match(/rgba?\(([^)]+)\)/);
      if (m) {
        const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
        const [r, g, b, a = 1] = parts;
        if (a > 0.05) {
          luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          break;
        }
      }
      probe = probe.parentElement;
    }
    setTheme(luminance < 0.5 ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      detectTheme();
    };
    onScroll();
    // Re-run detection shortly after route change since DOM has just rendered.
    const t = window.setTimeout(detectTheme, 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", detectTheme);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", detectTheme);
    };
  }, [detectTheme, pathname]);

  const isDark = theme === "dark";

  // Theme tokens
  const headerBg = isDark
    ? scrolled
      ? "rgba(12,16,40,0.78)"
      : "rgba(12,16,40,0.55)"
    : scrolled
    ? "rgba(255,255,255,0.85)"
    : "rgba(255,255,255,0.78)";

  const headerBorder = isDark
    ? scrolled
      ? "rgba(255,255,255,0.15)"
      : "rgba(255,255,255,0.10)"
    : "rgba(15,30,80,0.08)";

  const headerShadow = isDark
    ? "0 10px 40px rgba(8,12,40,0.45), 0 0 0 1px rgba(120,140,220,0.08) inset, inset 0 1px 0 rgba(255,255,255,0.08)"
    : "0 8px 28px -10px rgba(15,30,80,0.18), 0 0 0 1px rgba(15,30,80,0.04) inset, inset 0 1px 0 rgba(255,255,255,0.6)";

  const textColor = isDark ? "rgba(255,255,255,0.85)" : "#111827";
  const textHoverColor = isDark ? "#ffffff" : "#1040A6";
  const chevronColor = isDark ? "rgba(255,255,255,0.85)" : "#111827";

  return (
    <header
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(1280px,calc(100%-32px))]
        flex items-center justify-between px-6 py-3 rounded-full
        border"
      style={{
        background: headerBg,
        borderColor: headerBorder,
        boxShadow: headerShadow,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        transition:
          "background-color 300ms ease, background 300ms ease, border-color 300ms ease, box-shadow 300ms ease, color 300ms ease",
      }}
    >
      {/* Logo — keep original colors regardless of theme */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        className="flex items-center shrink-0"
      >
        <img
          key={isDark ? "white" : "black"}
          src={isDark ? "/images/aipower-logo-white.svg" : "/images/aipower-logo-black.svg"}
          alt="AIPOWER"
          className="block w-auto"
          style={{ height: 36, transition: "opacity 300ms ease" }}
        />
      </a>

      {/* Nav */}
      <nav
        className="hidden md:flex items-center gap-12 text-[14.5px] font-medium"
        style={{
          color: textColor,
          transition: "color 300ms ease",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isProduct = item.id === "product";
          const hasDropdown = !!item.dropdown || isProduct;
          const itemHref = (item as { href?: string }).href;
          const isActive =
            (itemHref && pathname === itemHref) ||
            (item.id === "about" && pathname.startsWith("/about")) ||
            (isProduct && (pathname.startsWith("/products") || pathname.startsWith("/product/")));

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                // Plain hover state only — no scroll/jump behavior for non-dropdown items.
                className="flex items-center gap-1 py-2 transition-colors relative group"
                style={{ color: isActive ? textHoverColor : "inherit", fontWeight: isActive ? 600 : undefined }}
                onClick={() => {
                  if (itemHref && !hasDropdown) {
                    navigate(itemHref);
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = textHoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? textHoverColor : "inherit";
                }}
              >
                {item.label}
                {hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                    style={{ color: chevronColor, transition: "color 300ms ease, transform 200ms ease" }}
                  />
                )}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-transform origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  style={{ background: "linear-gradient(90deg,#1040A6,#1B8FD2)" }}
                />
              </button>

              {/* About dropdown */}
              {item.dropdown && openMenu === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[240px] z-50">
                  <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_20px_50px_-10px_rgba(15,30,80,0.25)] overflow-hidden py-2">
                    {item.dropdown.map((d) => (
                      <button
                        type="button"
                        key={d.label}
                        onClick={() => {
                          if (d.href && d.href.startsWith("/")) {
                            navigate(d.href);
                          }
                          setOpenMenu(null);
                        }}
                        className="block w-full text-left px-5 py-2.5 text-[14px] text-slate-700 font-medium hover:bg-blue-50/80 hover:text-[#1040A6] transition-colors"
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Product dropdown — same style as About */}
              {isProduct && openMenu === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[300px] z-50">
                  <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_20px_50px_-10px_rgba(15,30,80,0.25)] overflow-hidden py-2">
                    {PRODUCT_DROPDOWN.map((g) => (
                      <button
                        key={g.key}
                        onClick={() => {
                          navigate(`/products/${g.key}`);
                          setOpenMenu(null);
                        }}
                        className="block w-full text-left px-5 py-2.5 text-[14px] text-slate-700 font-medium hover:bg-blue-50/80 hover:text-[#1040A6] transition-colors"
                      >
                        {PRODUCT_GROUP_META[g.key].title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="w-9 md:w-10" aria-hidden />
    </header>
  );
}
