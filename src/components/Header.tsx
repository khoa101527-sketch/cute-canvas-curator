import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronDown, Menu, X, Globe, Check, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/data";
import { PRODUCT_GROUP_META, PRODUCTS_BY_GROUP, PRODUCTS, type ProductGroupKey } from "@/data/products";

const PRODUCT_GROUP_KEYS: ProductGroupKey[] = ["platform", "management", "training"];

// Subtitle clamped to 2 lines; on hover shows full text only when truncated.
function ClampedSubtitle({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [truncated, setTruncated] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTruncated(el.scrollHeight - el.clientHeight > 1);
  }, [text]);
  return (
    <span className="relative block" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span
        ref={ref}
        className="block text-[12.5px] leading-[1.45] text-slate-500 overflow-hidden"
        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
      >
        {text}
      </span>
      {truncated && hover && (
        <span className="absolute left-0 top-full mt-1 z-[60] max-w-[280px] rounded-lg bg-slate-900 text-white text-[12px] leading-[1.5] p-2.5 shadow-xl whitespace-normal">
          {text}
        </span>
      )}
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<"vi" | "ja" | "en">("vi");
  const langRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const LANGS: { code: "vi" | "ja" | "en"; label: string; flag: string }[] = [
    { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
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

      {/* Nav — absolutely centered so logo stays left and nav stays visually centered */}
      <nav
        className="hidden md:flex items-center gap-12 text-[14.5px] font-medium absolute left-1/2 -translate-x-1/2"
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
              onMouseEnter={() => { if (hasDropdown) { cancelClose(); setOpenMenu(item.label); } }}
              onMouseLeave={() => { if (hasDropdown) scheduleClose(); }}
            >
              <button
                type="button"
                className="flex items-center gap-1 py-2 transition-colors relative group"
                style={{ color: isActive ? textHoverColor : "inherit", fontWeight: isActive ? 600 : undefined }}
                onClick={() => {
                  if (itemHref && !hasDropdown) navigate(itemHref);
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = textHoverColor; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? textHoverColor : "inherit"; }}
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
            </div>
          );
        })}
      </nav>

      {/* Mega dropdown panels — span full header width */}
      {openMenu === "Product" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full pt-3 z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="rounded-3xl bg-white/98 backdrop-blur-xl border border-black/5 shadow-[0_30px_60px_-15px_rgba(15,30,80,0.28)] overflow-hidden">
            <div className="grid grid-cols-3 gap-x-6 gap-y-2 px-7 py-7">
              {PRODUCT_GROUP_KEYS.map((key) => (
                <div key={key}>
                  <button
                    type="button"
                    onClick={() => { navigate(`/products/${key}`); setOpenMenu(null); }}
                    className="group/cta inline-flex items-center gap-1.5 mb-3 px-3 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase font-bold text-white transition-all hover:gap-2.5 hover:shadow-[0_10px_24px_-8px_rgba(27,143,210,0.55)]"
                    style={{ background: "linear-gradient(135deg,#1040A6 0%,#1B8FD2 60%,#34d3a4 100%)" }}
                  >
                    <span>{PRODUCT_GROUP_META[key].title}</span>
                    <ArrowRight size={12} className="transition-transform group-hover/cta:translate-x-0.5" />
                  </button>
                  <ul className="space-y-1">
                    {PRODUCTS_BY_GROUP[key].map((p) => (
                      <li key={p.slug}>
                        <button
                          type="button"
                          onClick={() => { navigate(`/product/${p.slug}`); setOpenMenu(null); }}
                          className="block w-full text-left px-3 py-2 rounded-xl hover:bg-blue-50/70 transition-colors group"
                        >
                          <div className="text-[14px] font-semibold text-slate-900 group-hover:text-[#1040A6]">{p.name}</div>
                          <span className="block mt-0.5 text-[12.5px] leading-[1.45] text-slate-500">{p.short}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {openMenu === "About" && (
        <div
          className="hidden md:block absolute left-0 right-0 top-full pt-3 z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="rounded-3xl bg-white/98 backdrop-blur-xl border border-black/5 shadow-[0_30px_60px_-15px_rgba(15,30,80,0.28)] overflow-hidden">
            <div className="grid grid-cols-3 gap-x-6 gap-y-2 px-7 py-7">
              {(NAV_ITEMS.find(n => n.id === "about")?.dropdown ?? []).map((d) => (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => { if (d.href.startsWith("/")) navigate(d.href); setOpenMenu(null); }}
                  className="text-left px-3 py-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                >
                  <div className="text-[14px] font-semibold text-slate-900 group-hover:text-[#1040A6]">{d.label}</div>
                  {d.subtitle && <ClampedSubtitle text={d.subtitle} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* Right cluster: language switcher + mobile hamburger */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Language switcher (UI only) */}
        <div className="relative" ref={langRef}>
          <button
            type="button"
            aria-label="Change language"
            onClick={() => setLangOpen((v) => !v)}
            className="flex items-center gap-1.5 h-10 px-3 rounded-full text-[13px] font-semibold transition-colors"
            style={{
              color: textColor,
              background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,30,80,0.04)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(15,30,80,0.08)"}`,
            }}
          >
            <Globe size={15} />
            <span className="uppercase tracking-wide">{lang}</span>
            <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-2 min-w-[180px] rounded-2xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_20px_50px_-10px_rgba(15,30,80,0.25)] overflow-hidden py-1.5 z-50">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => { setLang(l.code); setLangOpen(false); }}
                  className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-[13.5px] text-slate-700 font-medium hover:bg-blue-50/80 hover:text-[#1040A6] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[15px] leading-none">{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  {lang === l.code && <Check size={14} className="text-[#1040A6]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full"
          style={{ color: textColor, background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,30,80,0.04)" }}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[calc(100%+10px)] left-0 right-0 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_20px_50px_-10px_rgba(15,30,80,0.25)] overflow-hidden">
          <div className="py-2 max-h-[70vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const isProduct = item.id === "product";
              const hasDropdown = !!item.dropdown || isProduct;
              const itemHref = (item as { href?: string }).href;
              const subOpen = mobileSub === item.label;
              return (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (hasDropdown) {
                        setMobileSub(subOpen ? null : item.label);
                      } else if (itemHref) {
                        navigate(itemHref);
                        setMobileOpen(false);
                      }
                    }}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-[15px] font-semibold text-slate-800"
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown size={16} className={`transition-transform ${subOpen ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  {hasDropdown && subOpen && (
                    <div className="bg-slate-50/60 pb-2">
                      {(isProduct ? PRODUCT_GROUP_KEYS.map((key) => ({ label: PRODUCT_GROUP_META[key].title, href: `/products/${key}` })) : (item.dropdown ?? [])).map((d) => (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => {
                            if (d.href && d.href.startsWith("/")) navigate(d.href);
                            setMobileOpen(false);
                            setMobileSub(null);
                          }}
                          className="block w-full text-left px-8 py-2.5 text-[14px] text-slate-600 hover:text-[#1040A6]"
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
