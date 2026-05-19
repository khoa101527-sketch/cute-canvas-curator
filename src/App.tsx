import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/home/Index";
import NotFound from "./pages/not-found/Index";
import ProductDetail from "./pages/product/Detail";
import ProductGroup from "./pages/product/Group";
import AboutUs from "./pages/about/Index";
import AboutJapan from "./pages/about/Japan";
import AboutAustralia from "./pages/about/Australia";
import AboutUsa from "./pages/about/Usa";
import AboutDanang from "./pages/about/Danang";
import CareersPage from "./pages/careers/Index";
import NewsPage from "./pages/news/Index";
import IndustriesPage from "./pages/industries/Index";
import CaseStudiesPage from "./pages/case-studies/Index";

const queryClient = new QueryClient();

function ScrollToTop(): null {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/japan" element={<AboutJapan />} />
          <Route path="/about/australia" element={<AboutAustralia />} />
          <Route path="/about/usa" element={<AboutUsa />} />
          <Route path="/about/danang" element={<AboutDanang />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/products/:group" element={<ProductGroup />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
