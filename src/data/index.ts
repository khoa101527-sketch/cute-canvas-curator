import {
  Eye, Target, Gem, Cpu, Briefcase, GraduationCap,
  Linkedin, Facebook, Youtube, Phone, Mail, MapPin,
  Zap, ShieldCheck, Sparkles,
  ClipboardCheck, FileSearch, PenTool, Code2, BadgeCheck, Rocket, Activity, RefreshCw,
  Bot, UserCheck, Package,
  ShieldCheck as ShieldIcon, Gauge, PiggyBank, Layers,
} from "lucide-react";

export const SHOWCASE_FEATURE = {
  eyebrow: "Giải pháp của chúng tôi",
  title: "AIPOWER",
  highlight: "Công ty phần mềm ứng dụng AI",
  tail: "dẫn đầu xu hướng công nghệ",
  desc: "Kết hợp AI, dữ liệu và kỹ thuật chuẩn Nhật Bản để mang đến giải pháp doanh nghiệp toàn diện.",
};

export const SHOWCASE_CARDS = [
  {
    icon: ShieldIcon,
    title: "Cam kết chất lượng",
    desc: "Quy trình kiểm duyệt nghiêm ngặt trong từng khâu vận hành, đảm bảo sản phẩm đầu ra hoàn thiện ở mức cao nhất.",
  },
  {
    icon: Gauge,
    title: "Tốc độ AI",
    desc: "AI được tích hợp vào từng bước sản xuất giúp bàn giao đúng hạn, tối ưu hoá tiến độ và độ chính xác.",
  },
  {
    icon: PiggyBank,
    title: "Chi phí tối ưu",
    desc: "Đầu tư thấp hơn, giá trị cao hơn so với việc tự xây dựng đội ngũ nội bộ cồng kềnh.",
  },
  {
    icon: Layers,
    title: "Ứng dụng cao",
    desc: "Thấu hiểu sâu nhu cầu nghiệp vụ — đồng hành chặt chẽ để cung cấp hỗ trợ toàn diện, đúng mục tiêu doanh nghiệp.",
  },
];

export const ABOUT_DROPDOWN = [
  { label: "About us", href: "/about" },
  { label: "AIPOWER JAPAN", href: "/about/japan" },
  { label: "AIPOWER AUSTRALIA", href: "/about/australia" },
  { label: "AIPOWER USA", href: "/about/usa" },
  { label: "AIPOWER DANANG", href: "/about/danang" },
];

export const NAV_ITEMS = [
  { label: "About", id: "about", dropdown: ABOUT_DROPDOWN },
  { label: "Product", id: "product" },
  { label: "Team", id: "team" },
  { label: "Careers", id: "careers", href: "/careers" },
  { label: "News", id: "news", href: "/news" },
];

export const HERO_STATS = [
  { num: "7+", lbl: "Years of Experience" },
  { num: "150+", lbl: "AI & IT Engineers" },
  { num: "200+", lbl: "Successful Projects" },
];

export const FLOAT_CARDS = [
  { icon: Sparkles, title: "Neural Engine", sub: "Live · Processing data", pos: "fc-1", delay: 0 },
  { icon: ShieldCheck, title: "99.8% Accuracy", sub: "Real-time inference", pos: "fc-2", delay: 1.2 },
  { icon: Zap, title: "x10 Productivity", sub: "AI Automation", pos: "fc-3", delay: 2.4 },
];

export const PHILOSOPHY = [
  {
    icon: Eye,
    title: "Tầm nhìn",
    keyword: "Leading AI · Sustainable Growth",
    text: "Trở thành công ty phần mềm AI hàng đầu, tạo ra những bứt phá công nghệ giúp doanh nghiệp phát triển bền vững trong kỷ nguyên số.",
  },
  {
    icon: Target,
    title: "Sứ mệnh",
    keyword: "Japanese Standard · Optimize",
    text: "Ứng dụng AI và công nghệ hiện đại để xây dựng giải pháp phần mềm chuẩn Nhật Bản, tối ưu vận hành và nâng cao hiệu suất doanh nghiệp.",
  },
  {
    icon: Gem,
    title: "Giá trị cốt lõi",
    keyword: "Quality · Integrity · Innovation",
    text: "Chất lượng & Tốc độ · Chính trực & Minh bạch · Đổi mới & Dám thử thách · Lấy khách hàng làm trung tâm · Tôn trọng & Hợp tác.",
  },
];

export const PRODUCT_GROUPS = [
  {
    icon: Cpu,
    label: "Platform",
    title: "Nền tảng & Vận hành thông minh",
    desc: "Các nền tảng AI và giải pháp tự động hoá giúp tối ưu quy trình vận hành, nâng cao năng suất toàn doanh nghiệp.",
    tags: ["AI Automate", "AI Camera", "AI Canteen", "AI Loyalty", "Demand Planning"],
  },
  {
    icon: Briefcase,
    label: "Enterprise",
    title: "Quản trị doanh nghiệp",
    desc: "Hệ thống quản lý end-to-end giúp đồng bộ vận hành, tối ưu dữ liệu và thúc đẩy tăng trưởng ổn định.",
    tags: ["AI Connect", "Dealer Pro", "OraSpa", "VietCare", "1Shop"],
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "Đào tạo AI",
    desc: "Nền tảng học tập và huấn luyện AI giúp nâng cao năng lực đội ngũ và tổ chức, bắt kịp chuyển đổi số.",
    tags: ["AI Academy", "AI Bootcamp", "Enterprise Training"],
  },
];

export const PROCESS_STEPS = [
  { icon: ClipboardCheck, title: "Lập kế hoạch & Đánh giá khả thi" },
  { icon: FileSearch, title: "Phân tích yêu cầu" },
  { icon: PenTool, title: "Thiết kế" },
  { icon: Code2, title: "Phát triển" },
  { icon: BadgeCheck, title: "Kiểm tra chất lượng" },
  { icon: Rocket, title: "Triển khai" },
  { icon: Activity, title: "Giám sát & Bảo trì" },
  { icon: RefreshCw, title: "Phản hồi & Cải tiến" },
];

export const PROCESS_BLOCKS = [
  {
    icon: Bot,
    title: "AI Agent thực hiện",
    items: [
      "Tạo bản thảo & gợi ý kiến trúc",
      "Cung cấp tự động hóa quy trình",
      "Nhận diện mẫu & giải pháp tối ưu",
    ],
    accent: "blue",
  },
  {
    icon: UserCheck,
    title: "Kỹ sư kiểm tra",
    items: [
      "Rà soát & tinh chỉnh chi tiết",
      "Đưa ra quyết định cuối cùng",
      "Xác nhận chất lượng đầu ra",
    ],
    accent: "green",
  },
  {
    icon: Package,
    title: "Mỗi bước tạo ra",
    items: [
      "Output rõ ràng cho bước tiếp theo",
      "Sản phẩm bàn giao cụ thể",
      "Tài liệu hóa đầy đủ hệ thống",
    ],
    accent: "cyan",
  },
];

export const PARTNERS = [
  // Existing reference partners (Screenshot9453 — Japan listed companies & enterprises)
  "SCSK", "SHIMIZU", "FUJI ELECTRIC", "NIPPON STEEL", "DDI", "VINGROUP",
  // Major tech enterprise to boost trust feeling
  "AWS", "Microsoft", "Google Cloud", "Oracle", "NVIDIA",
  "Fujitsu", "Hitachi", "NEC", "Panasonic", "Toshiba", "SoftBank", "NTT Data",
];

export const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const CONTACT_INFO = [
  { icon: Phone, value: "(+84) 28-3636-0406" },
  { icon: Mail, value: "contact@aipower.vn" },
  { icon: MapPin, value: "Ho Chi Minh City, Vietnam" },
];

export const FOOTER_LINKS = {
  Company: ["About Us", "Team", "Careers", "News"],
  Products: [
    "AI Platform & Automation",
    "Enterprise Solutions",
    "AI Education Solutions",
    "All Products",
  ],
};
