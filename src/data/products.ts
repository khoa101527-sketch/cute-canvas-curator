import {
  Brain,
  Bot,
  Camera,
  Utensils,
  Heart,
  LineChart,
  Network,
  Car,
  Sparkles,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type ProductGroupKey = "platform" | "management" | "training";

export interface ProductItem {
  slug: string;
  name: string;
  short: string; // 1 dòng giới thiệu
  tagline: string; // dòng phụ trên detail page
  group: ProductGroupKey;
  icon: LucideIcon;
  accent: string; // gradient stops "from → to"
  problems: string[];
  role: string;
  features: string[];
  customers: string;
  results: string[];
}

export const PRODUCT_GROUP_META: Record<
  ProductGroupKey,
  { id: string; eyebrow: string; title: string; desc: string }
> = {
  platform: {
    id: "group-platform",
    eyebrow: "Group 01",
    title: "Nền tảng & Vận hành thông minh",
    desc: "Các nền tảng AI cốt lõi và giải pháp tự động hoá vận hành toàn doanh nghiệp.",
  },
  management: {
    id: "group-management",
    eyebrow: "Group 02",
    title: "Quản trị",
    desc: "Hệ thống quản lý chuyên ngành — đồng bộ dữ liệu, vận hành liền mạch.",
  },
  training: {
    id: "group-training",
    eyebrow: "Group 03",
    title: "Đào tạo",
    desc: "Nền tảng đào tạo AI thực chiến cho đội ngũ và tổ chức.",
  },
};

export const PRODUCTS: ProductItem[] = [
  // ========== Group 1 — Platform & Operations ==========
  {
    slug: "lumina",
    name: "Lumina",
    short: "Nền tảng AI cho toàn doanh nghiệp – Lãnh đạo quyết định đúng, nhân viên làm nhanh, AI agents làm tự động.",
    tagline: "One AI Platform for the Entire Enterprise",
    group: "platform",
    icon: Brain,
    accent: "linear-gradient(135deg,#1040A6,#1B8FD2)",
    problems: [
      "Lãnh đạo quyết định sai do thông tin chậm, rời rạc, thiếu toàn cảnh.",
      "Công việc thủ công, lặp lại, hiệu suất thấp.",
    ],
    role: "Lumina là nền tảng AI cho toàn bộ doanh nghiệp: giúp Lãnh đạo quyết định đúng, Nhân viên làm nhanh, AI Agents làm tự động.",
    features: [
      "Lumina Core: Trợ lý 24/7 – Dashboard – Cảnh báo – Dự báo",
      "Lumina Apps: Kho ứng dụng tác vụ",
      "Lumina Plus: AI Agents làm tự động",
    ],
    customers: "Doanh nghiệp vừa & lớn, đặc biệt phù hợp mô hình chuỗi, bán lẻ.",
    results: [
      "Lãnh đạo tiết kiệm 3.6h/tuần · Mỗi nhân viên 4.9h/tuần",
      "Giảm hao hụt vận hành 5–15%",
      "Doanh nghiệp 200 nhân sự: giải phóng 11.760 giờ/năm",
    ],
  },
  {
    slug: "aiautomate",
    name: "AIAutomate",
    short: "Tự động hóa quy trình – Thay thủ công, tăng hiệu suất.",
    tagline: "Giải pháp Tự động hoá Quy trình Vận hành Doanh nghiệp",
    group: "platform",
    icon: Bot,
    accent: "linear-gradient(135deg,#1B5FD2,#5ec0ff)",
    problems: [
      "Nhân viên sao chép và dán dữ liệu hàng trăm lần mỗi ngày.",
      "Năng suất thấp, sai sót do xử lý thủ công.",
    ],
    role: "Đội ngũ \"nhân viên ảo\" vận hành trực tiếp trên máy tính, thực hiện chính xác các tác vụ thủ công lặp lại theo logic NẾU…THÌ…, 24/7.",
    features: [
      "Vận hành 24/7 không nghỉ",
      "Logic NẾU…THÌ… mở rộng linh hoạt",
      "Tích hợp với SAP, ERP, CRM, Excel",
      "Audit log đầy đủ mọi thao tác",
    ],
    customers:
      "Doanh nghiệp ngành có tác vụ thủ công: Sản xuất & Chế tạo, Dịch vụ Khách hàng, Logistics & Chuỗi cung ứng, Bán lẻ & TMĐT, Y tế.",
    results: [
      "R-PAC Vietnam (SAP B1): tự động hoá 100% thao tác điều hướng & nhập liệu",
      "Giảm 30–50% chi phí nhân sự",
      "Chính xác 100% · Xử lý nhanh hơn ×5",
    ],
  },
  {
    slug: "aicamera",
    name: "AICamera",
    short: "Camera AI – Tự động giám sát, cảnh báo tức thì 24/7.",
    tagline: "Camera AI giám sát & cảnh báo tuân thủ tức thì",
    group: "platform",
    icon: Camera,
    accent: "linear-gradient(135deg,#0F4FB8,#2EA1E8)",
    problems: [
      "Thiếu giám sát, không có bằng chứng vi phạm.",
      "Tốn kém nhân lực kiểm tra, giám sát thủ công.",
    ],
    role: "Hệ thống giám sát tích hợp AI — tự động phát hiện vi phạm và cảnh báo tức thì 24/7 không cần người trực.",
    features: [
      "AI phân tích video real-time",
      "Cảnh báo real-time đa tầng",
      "Ghi nhận tuân thủ tự động",
      "Dashboard & Báo cáo",
    ],
    customers:
      "Nhà máy Thực phẩm, Đồ uống, Dược phẩm & Y tế, Mỹ phẩm & FMCG, Điện tử, Cơ khí — yêu cầu audit ISO/HACCP/BRC/FSSC/GMP.",
    results: [
      "Trung Nguyên Legend: tỷ lệ tuân thủ rửa tay tăng rõ rệt",
      "Lần đầu có dữ liệu định lượng tuân thủ",
      "Bằng chứng sẵn sàng cho mọi kỳ audit",
    ],
  },
  {
    slug: "aicanteen",
    name: "AICanteen",
    short: "Bếp thông minh – Vận hành gọn, tối ưu từng suất ăn.",
    tagline: "Số hoá toàn diện nhà ăn doanh nghiệp",
    group: "platform",
    icon: Utensils,
    accent: "linear-gradient(135deg,#1546B5,#3FA9E5)",
    problems: [
      "Nhân viên chờ đợi suất ăn lâu.",
      "Lãng phí thức ăn lớn.",
      "Đối soát thủ công cuối tháng.",
    ],
    role: "Giải pháp chuyển đổi số toàn diện cho nhà ăn doanh nghiệp — tự động hoá 100% từ đặt món đến giao suất.",
    features: [
      "Web quản trị: đặt, huỷ, đặt bổ sung – quản lý món ăn, phân quyền",
      "Web/Mobile App đặt suất ăn cho nhân viên",
      "Kiosk nhận suất ăn",
      "Camera AI thanh toán",
      "Báo cáo toàn diện",
    ],
    customers:
      "Nhà máy & Khu công nghiệp (1.000+ suất/ngày), nhà ăn công ty, toà nhà văn phòng, trường học, bệnh viện.",
    results: [
      "Doanh nghiệp Phân bón hàng đầu VN: tiết kiệm 30% thời gian",
      "Lãng phí suất ăn = 0",
      "Tự động hoá 100% toàn bộ quy trình",
    ],
  },
  {
    slug: "ailoyalty",
    name: "AILoyalty",
    short: "Hiểu để chăm sóc khách hàng – Cá nhân hóa từng trải nghiệm.",
    tagline: "Nền tảng chăm sóc khách hàng thân thiết",
    group: "platform",
    icon: Heart,
    accent: "linear-gradient(135deg,#1040A6,#7a5cff)",
    problems: [
      "Mất dấu khách hàng sau khi bán — thiếu dữ liệu để tái tiếp thị.",
      "Chi phí tìm khách mới cao gấp 5–7 lần so với giữ chân khách hàng.",
      "80% doanh thu đến từ 20% khách trung thành.",
    ],
    role: "Nền tảng công nghệ giúp doanh nghiệp thu thập dữ liệu, cá nhân hoá ưu đãi và vận hành chương trình chăm sóc khách hàng thân thiết tự động.",
    features: [
      "Tích điểm đa kênh",
      "Thăng hạng thành viên",
      "Kho Quà & Đổi thưởng",
      "Truyền thông & Tương tác",
      "Truy xuất sản phẩm chính hãng",
    ],
    customers: "Bán lẻ · F&B · Thương mại điện tử · Mỹ phẩm · Nha khoa.",
    results: [
      "Tổng Công ty Phân bón: thu thập dữ liệu hàng chục nghìn nông dân, xác thực chính hãng qua QR",
      "Chuỗi Nha khoa Quốc tế: tự động hoá đặt hẹn 100% · đồng bộ 30+ chi nhánh",
    ],
  },
  {
    slug: "demand-planning",
    name: "Demand Planning",
    short: "S&OP tự động – Dự báo nhu cầu chính xác.",
    tagline: "Nền tảng S&OP tích hợp – Từ dữ liệu rời rạc đến kế hoạch chính xác",
    group: "platform",
    icon: LineChart,
    accent: "linear-gradient(135deg,#163A8C,#3AA0E5)",
    problems: [
      "Dữ liệu dự báo rời rạc.",
      "Tính toán thủ công, sai số cao.",
      "Không theo dõi được tiến độ từng bộ phận trong chu kỳ S&OP.",
    ],
    role: "Nền tảng S&OP số hoá toàn bộ quy trình lập kế hoạch nhu cầu, kết nối các bộ phận, tự động tính baseline và ước tính chính xác nhu cầu.",
    features: [
      "Master Data tập trung",
      "Quy trình S&OP 4 phiên bản",
      "Baseline thống kê tự động",
      "Cảnh báo tự động",
      "Import / Export linh hoạt",
    ],
    customers: "Doanh nghiệp sản xuất & phân phối đa kênh.",
    results: [
      "Doanh nghiệp sản xuất sữa hàng đầu VN: 6 bộ phận kết nối đồng thời",
      "14 quy tắc kinh doanh tự động",
      "4 phiên bản S&OP mỗi tháng",
    ],
  },

  // ========== Group 2 — Management ==========
  {
    slug: "aiconnect",
    name: "AIConnect",
    short: "Kết nối hệ thống – Hợp nhất dữ liệu, vận hành liền mạch.",
    tagline: "Nền tảng kết nối và tích hợp hệ thống",
    group: "management",
    icon: Network,
    accent: "linear-gradient(135deg,#1040A6,#1B8FD2)",
    problems: [
      "Hệ thống rời rạc.",
      "Tích hợp công nghệ mới vào hạ tầng cũ — không có hệ thống thống nhất.",
    ],
    role: "Nền tảng kết dữ liệu doanh nghiệp (ERP, CRM, Kế toán, HRM…) thành một khối thống nhất, dữ liệu xuyên suốt, liên tục, chính xác, real-time.",
    features: [
      "Hợp nhất dữ liệu thông minh",
      "Tự động hoá quy trình",
      "Thư viện Connector phong phú",
      "Tối ưu chi phí",
      "Phân tích & báo cáo",
    ],
    customers: "Doanh nghiệp có nhiều hệ thống riêng lẻ không kết nối được.",
    results: [
      "Biến ERP, CRM, Kế toán, HR thành một khối thống nhất",
      "Luồng dữ liệu xuyên suốt, liên tục, chính xác theo thời gian thực",
    ],
  },
  {
    slug: "dealer-pro",
    name: "Dealer Pro",
    short: "Quản lý đại lý ô tô – Đồng bộ, chuyên sâu, hiệu quả.",
    tagline: "Phần mềm quản lý đại lý ô tô thông minh tích hợp AI",
    group: "management",
    icon: Car,
    accent: "linear-gradient(135deg,#0F3F9A,#3B9BE0)",
    problems: [
      "Phần mềm ERP cho Showroom Ô tô đắt đỏ, nhiều khâu thủ công.",
      "Dữ liệu phân mảnh giữa bán hàng – dịch vụ – phụ tùng – kế toán.",
    ],
    role: "Hệ thống DMS thiết kế chuyên biệt cho đại lý ô tô — số hoá toàn bộ từ bán hàng, dịch vụ, kho phụ tùng đến kế toán trong một nền tảng duy nhất.",
    features: [
      "5 phân hệ: Bán hàng (17) · Dịch vụ (20) · Phụ tùng (14) · Kế toán (15) · Báo cáo",
      "AI Search",
      "Nhắc lịch bảo trì thông minh AI",
      "Kế toán tự động",
      "Báo cáo real-time",
    ],
    customers:
      "Đại lý uỷ quyền chính hãng, Showroom Ô tô đa thương hiệu, Trung tâm dịch vụ & Garage.",
    results: [
      "Honda Ô tô Cộng Hoà: dữ liệu đồng bộ toàn đại lý",
      "Tỷ lệ khách quay lại tăng nhờ AI Reminder",
    ],
  },
  {
    slug: "oraspa",
    name: "ORASPA",
    short: "Quản lý Spa và Nha khoa – Tinh gọn vận hành, nâng tầm dịch vụ.",
    tagline: "Phần mềm quản lý Spa và Nha khoa thông minh tích hợp AI",
    group: "management",
    icon: Sparkles,
    accent: "linear-gradient(135deg,#1846A6,#7a5cff)",
    problems: [
      "Vận hành bằng 3–5 phần mềm rời rạc — đặt lịch, kho, kế toán, bán hàng không kết nối.",
      "Dữ liệu khách hàng phân mảnh — không theo dõi được hành trình.",
      "Báo cáo chậm trễ — cuối tháng mới có số liệu, ra quyết định trên thông tin lỗi thời.",
    ],
    role: "Phần mềm quản lý toàn diện dành riêng cho Spa & Nha khoa — một nền tảng, toàn bộ vận hành.",
    features: [
      "CRM 360°",
      "Bệnh án điện tử",
      "Bán hàng & Kho",
      "Kế toán",
      "Nhân sự",
      "BI Dashboard tích hợp AI",
    ],
    customers:
      "Chuỗi Spa & thẩm mỹ viện · Chuỗi Phòng khám Nha khoa · Cơ sở chăm sóc sức khoẻ & làm đẹp.",
    results: [
      "Sciderm Spa & Dentix Nha khoa đã go-live thành công",
      "Tìm hồ sơ: 5–10 phút → 10 giây",
      "Lỗi thanh toán: ~10% → <0.5%",
    ],
  },
  {
    slug: "vietcare",
    name: "VietCare",
    short: "Quản lý bệnh viện – quản lý toàn diện, chăm sóc tối ưu.",
    tagline: "Phần mềm quản lý bệnh viện toàn diện",
    group: "management",
    icon: Stethoscope,
    accent: "linear-gradient(135deg,#0E3FA0,#2A9DE5)",
    problems: [
      "Nhiều phân hệ rời rạc không liên thông, phải nhập lại thông tin nhiều lần.",
      "Tuân thủ pháp lý phức tạp — đòi hỏi nền tảng thống nhất, bảo mật cao.",
    ],
    role: "VietCare là phần mềm quản lý bệnh viện toàn diện trên nền web — tích hợp 5 phân hệ HIS, LIS, PACS, EMR, IVF trên một hồ sơ bệnh nhân duy nhất, chuẩn hoá theo quy định Bộ Y tế.",
    features: [
      "HIS (OPD/IPD/Dược/Billing): tiếp nhận, khám, kê đơn, thanh toán, hoá đơn điện tử",
      "LIS (Xét nghiệm)",
      "EMR (Bệnh án điện tử)",
      "IVF (Hỗ trợ sinh sản)",
      "Tích hợp: Cổng BHYT, HĐĐT, VNPay/MoMo/ZaloPay, SMS/Zalo Notification",
    ],
    customers:
      "Bệnh viện tư nhân đa khoa và chuyên khoa — đặc biệt bệnh viện có Trung tâm IVF, phòng khám nâng chuẩn vận hành.",
    results: [
      "Bệnh viện Việt Mỹ: triển khai 5 phân hệ theo 5 phase, Phase 1 IVF go-live trong 3–4 tháng",
      "Giảm thời gian chờ OPD xuống dưới 30 phút",
      "Hoá đơn điện tử thành công ngay lần đầu trên 99%",
    ],
  },
  {
    slug: "1shop",
    name: "1Shop",
    short: "Quản lý bán hàng đa kênh – tất cả trong một nền tảng.",
    tagline: "Phần mềm quản lý bán hàng đa sàn TMĐT",
    group: "management",
    icon: ShoppingBag,
    accent: "linear-gradient(135deg,#1846A6,#3FA9E5)",
    problems: [
      "Phụ thuộc nền tảng bên thứ ba — không hỗ trợ nhiều nhà bán hàng trên cùng một hệ thống.",
      "Thiếu công cụ cho đối tác bán hàng tự quản lý gian hàng, tồn kho và doanh thu.",
    ],
    role: "1Shop là nền tảng thương mại điện tử đa nhà bán hàng — tích hợp gian hàng đối tác, AI Chatbot tư vấn, tiếp thị liên kết và quản trị toàn sàn trong một nền tảng duy nhất.",
    features: [
      "Gian hàng đa Vendor",
      "AI Chatbot tư vấn",
      "Thanh toán đa phương thức",
      "Tiếp thị liên kết (Affiliate)",
      "Super Admin toàn sàn",
    ],
    customers:
      "Doanh nghiệp mỹ phẩm, thời trang và FMCG muốn xây dựng kênh bán hàng Online độc lập với mô hình đa đối tác.",
    results: [
      "Hannah Olala: nền tảng độc lập thay thế web tĩnh, cho phép đối tác mở gian hàng",
      "AI Chatbot tư vấn 24/7",
      "Tăng trưởng GMV, giảm thời gian xử lý đơn hàng và tối ưu tồn kho toàn sàn",
    ],
  },

  // ========== Group 3 — Training ==========
  {
    slug: "aiacademy",
    name: "AIAcademy",
    short: "Học AI thông minh – lộ trình cá nhân hoá, AI agents hỗ trợ.",
    tagline: "Nền tảng đào tạo AI thực chiến",
    group: "training",
    icon: GraduationCap,
    accent: "linear-gradient(135deg,#1040A6,#5ec0ff)",
    problems: [
      "Chưa biết dùng AI hỗ trợ, tự động công việc.",
      "Đào tạo truyền thống: không cá nhân hoá, không đo lường được kết quả.",
    ],
    role: "Nền tảng đào tạo AI tích hợp — micro-learning 5–10 phút theo ngành thực tế, kèm AI Agent 24/7 và chứng chỉ năng lực.",
    features: [
      "API tích hợp",
      "Micro-learning 5–10 phút",
      "AI Agent 24/7",
      "Dashboard AI Skill Index",
    ],
    customers:
      "Doanh nghiệp (B2B): quy mô 100+ nhân sự, chuỗi & nhiều chi nhánh cần quản trị tập trung. Đối tác Giáo dục (EDU): trung tâm đào tạo AI.",
    results: [
      "Trainficient: 600+ học viên · 20+ lĩnh vực",
      "80% học viên cải thiện sự nghiệp",
    ],
  },
];

export const PRODUCTS_BY_GROUP: Record<ProductGroupKey, ProductItem[]> = {
  platform: PRODUCTS.filter((p) => p.group === "platform"),
  management: PRODUCTS.filter((p) => p.group === "management"),
  training: PRODUCTS.filter((p) => p.group === "training"),
};

export function findProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

// Logo manifest — prefers SVG over PNG. Update here when adding new logos.
// Add or override entries when new logo files are uploaded.
export const PRODUCT_LOGOS: Record<string, string> = {
  lumina: "/images/products/lumina.svg",
  aiautomate: "/images/products/aiautomate.svg",
  ailoyalty: "/images/products/ailoyalty.svg",
  aiconnect: "/images/products/aiconnect.svg",
  oraspa: "/images/products/oraspa.svg",
  vietcare: "/images/products/vietcare.svg",
  "1shop": "/images/products/1shop.svg",
  "dealer-pro": "/images/products/dealer-pro.png",
  aiacademy: "/images/products/aiacademy.png",
  aicamera: "/images/products/aicamera.png",
  aicanteen: "/images/products/aicanteen.png",
  "demand-planning": "/images/products/demand-planning.png",
};

export function getProductLogo(slug: string): string {
  return PRODUCT_LOGOS[slug] ?? `/images/products/${slug}.png`;
}
