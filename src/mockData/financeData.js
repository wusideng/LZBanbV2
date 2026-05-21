// ===== 个人金融经营驾驶舱 Mock数据 =====

// 经营核心KPI数据
export const kpiData = [
  {
    id: 1,
    label: "零售客户总数",
    value: 3286500,
    unit: "户",
    suffix: "",
    change: 5.8,
    yoy: 12.3,
    mom: 2.1,
    daily: 1280,
    monthly: 28500,
    sparkData: [3200, 3400, 3100, 3600, 3800, 3500, 4100, 3900, 4200, 3800, 4500, 4280],
  },
  {
    id: 2,
    label: "本年新增客户",
    value: 285000,
    unit: "户",
    suffix: "",
    change: 8.2,
    yoy: 18.5,
    mom: 3.2,
    daily: 1560,
    monthly: 32500,
    sparkData: [1200, 1500, 1800, 1600, 2000, 2200, 1900, 2400, 2100, 2600, 2300, 2850],
  },
  {
    id: 3,
    label: "活跃客户数",
    value: 1862000,
    unit: "户",
    suffix: "",
    change: 3.5,
    yoy: 8.9,
    mom: 1.5,
    daily: 680,
    monthly: 15200,
    sparkData: [1800, 1750, 1900, 1850, 2000, 1950, 2100, 2050, 2200, 2150, 2250, 1862],
  },
  {
    id: 4,
    label: "AUM总资产",
    value: 856.8,
    unit: "亿元",
    suffix: "亿",
    change: 6.2,
    yoy: 15.6,
    mom: 2.8,
    daily: 2.3,
    monthly: 48.5,
    sparkData: [820, 830, 840, 838, 845, 850, 848, 855, 860, 858, 862, 856.8],
  },
  {
    id: 5,
    label: "存款总余额",
    value: 523.5,
    unit: "亿元",
    suffix: "亿",
    change: 4.1,
    yoy: 10.2,
    mom: 1.8,
    daily: 1.2,
    monthly: 22.8,
    sparkData: [505, 510, 508, 515, 518, 520, 516, 522, 525, 520, 528, 523.5],
  },
  {
    id: 6,
    label: "贷款总余额",
    value: 386.2,
    unit: "亿元",
    suffix: "亿",
    change: 7.5,
    yoy: 18.8,
    mom: 3.5,
    daily: 1.8,
    monthly: 28.6,
    sparkData: [360, 365, 370, 368, 375, 380, 378, 385, 388, 382, 390, 386.2],
  },
  {
    id: 7,
    label: "财富客户数",
    value: 286500,
    unit: "户",
    suffix: "",
    change: 9.8,
    yoy: 22.6,
    mom: 4.2,
    daily: 380,
    monthly: 8200,
    sparkData: [260, 275, 280, 290, 285, 300, 310, 295, 320, 315, 330, 286.5],
  },
  {
    id: 8,
    label: "私行客户数",
    value: 3850,
    unit: "户",
    suffix: "",
    change: 12.5,
    yoy: 28.3,
    mom: 5.8,
    daily: 8,
    monthly: 185,
    sparkData: [3.4, 3.5, 3.5, 3.6, 3.6, 3.7, 3.7, 3.8, 3.8, 3.9, 3.9, 3.85],
  },
  {
    id: 9,
    label: "零售营收",
    value: 36.8,
    unit: "亿元",
    suffix: "亿",
    change: 5.5,
    yoy: 13.8,
    mom: 2.5,
    daily: 0.15,
    monthly: 3.2,
    sparkData: [34, 34.5, 35, 35.2, 35.8, 36, 35.5, 36.2, 36.5, 36.8, 36.5, 36.8],
  },
  {
    id: 10,
    label: "中间业务收入",
    value: 8.6,
    unit: "亿元",
    suffix: "亿",
    change: 15.2,
    yoy: 32.5,
    mom: 6.8,
    daily: 0.05,
    monthly: 0.85,
    sparkData: [7.2, 7.5, 7.6, 7.8, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5, 8.5, 8.6],
  },
  {
    id: 11,
    label: "本年累计利润",
    value: 15.2,
    unit: "亿元",
    suffix: "亿",
    change: 10.8,
    yoy: 25.6,
    mom: 4.5,
    daily: 0.08,
    monthly: 1.5,
    sparkData: [12.5, 13.0, 13.2, 13.8, 14.0, 14.2, 14.5, 14.8, 15.0, 15.1, 15.2, 15.2],
  },
  {
    id: 12,
    label: "客户增长率",
    value: 8.6,
    unit: "%",
    suffix: "%",
    change: 1.2,
    yoy: 3.5,
    mom: 0.8,
    daily: 0.04,
    monthly: 0.72,
    sparkData: [7.0, 7.2, 7.5, 7.4, 7.8, 8.0, 7.9, 8.2, 8.4, 8.3, 8.5, 8.6],
  },
];

// 零售经营中枢数据
export const centerData = {
  totalAum: 856.8,
  depositBalance: 523.5,
  loanBalance: 386.2,
  retailRevenue: 36.8,
  annualProfit: 15.2,
  totalAssets: 1256.3,
  totalLiability: 732.8,
  depositLoanRatio: 73.8,
  costIncomeRatio: 32.5,
  netInterestIncome: 28.5,
  netFeeIncome: 8.6,
  // 双轴趋势
  dualAxisTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    revenue: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    profit: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  // 经营结构
  structureData: [
    { name: "利息收入", value: 285 },
    { name: "手续费收入", value: 86 },
    { name: "投资收益", value: 45 },
    { name: "其他收入", value: 22 },
  ],
  // 资产负债能量数据
  assetLiabilityEnergy: [
    { name: "企业贷款", value: 386 },
    { name: "个人贷款", value: 245 },
    { name: "国债投资", value: 186 },
    { name: "同业资产", value: 124 },
    { name: "其他资产", value: 98 },
  ],
  // 雷达图数据
  radarData: {
    indicators: ["资产规模", "盈利能力", "客户基础", "资产质量", "发展潜力"],
    current: [92, 85, 88, 78, 82],
    last: [80, 78, 82, 75, 76],
  },
};

// 资产负债经营区数据
export const assetLiabilityData = {
  // 资产总额趋势
  assetTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    totalAssets: [1150, 1168, 1180, 1195, 1205, 1218, 1225, 1235, 1240, 1248, 1252, 1256.3],
    totalLiability: [680, 690, 698, 705, 712, 718, 722, 726, 728, 730, 731, 732.8],
  },
  // 存款贷款趋势
  depositLoanTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    deposit: [480, 488, 492, 498, 502, 508, 510, 515, 518, 520, 522, 523.5],
    loan: [340, 348, 352, 358, 362, 368, 372, 376, 380, 382, 385, 386.2],
  },
  // 存贷比
  depositLoanRatio: 73.8,
  costIncomeRatio: 32.5,
  // 资产结构
  assetStructure: [
    { name: "企业贷款", value: 386 },
    { name: "个人贷款", value: 245 },
    { name: "国债投资", value: 186 },
    { name: "同业资产", value: 124 },
    { name: "其他资产", value: 98 },
  ],
  // 负债结构
  liabilityStructure: [
    { name: "企业存款", value: 328 },
    { name: "个人存款", value: 195 },
    { name: "同业负债", value: 120 },
    { name: "应付债券", value: 56 },
    { name: "其他负债", value: 34 },
  ],
  // 经营收益占比
  incomeStructure: [
    { name: "利息净收入", value: 28.5 },
    { name: "手续费净收入", value: 8.6 },
    { name: "投资收益", value: 4.5 },
    { name: "其他收入", value: 2.2 },
  ],
};

// 客户经营分析区数据
export const customerData = {
  // 客户增长漏斗
  funnelData: [
    { name: "潜在客户", value: 5000000 },
    { name: "到店客户", value: 3500000 },
    { name: "开户客户", value: 2850000 },
    { name: "活跃客户", value: 1860000 },
    { name: "VIP客户", value: 420000 },
    { name: "私行客户", value: 3850 },
  ],
  // 客户增长趋势
  customerTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    newCustomers: [18000, 16000, 22000, 20000, 25000, 24000, 23000, 26000, 24000, 28000, 26000, 28500],
    lostCustomers: [3200, 2800, 3500, 3000, 3800, 3600, 3400, 4000, 3700, 4200, 3800, 4500],
    netGrowth: [14800, 13200, 18500, 17000, 21200, 20400, 19600, 22000, 20300, 23800, 22200, 24000],
  },
  // 客户等级分布
  customerLevels: [
    { name: "普通客户", value: 1580000 },
    { name: "黄金客户", value: 520000 },
    { name: "白金客户", value: 185000 },
    { name: "钻石客户", value: 68000 },
    { name: "私行客户", value: 3850 },
  ],
  // VIP客户占比
  vipRatio: 15.8,
  // 私行客户占比
  pbRatio: 1.2,
  // 高净值客户数量
  highNetWorth: 71850,
  // 客户活跃率
  activeRate: 62.8,
  // 客户活跃率历史
  activeRateHistory: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    rates: [58.2, 57.5, 59.0, 58.8, 60.2, 60.5, 60.8, 61.2, 61.5, 62.0, 62.5, 62.8],
  },
};

// 机构排名数据
export const rankingData = [
  { rank: 1, branch: "兰州分行", aum: 186.5, deposit: 112.3, loan: 85.6, growth: 12.5, revenue: 8.2, isTop3: true },
  { rank: 2, branch: "天水分行", aum: 142.8, deposit: 88.5, loan: 65.2, growth: 10.8, revenue: 6.5, isTop3: true },
  { rank: 3, branch: "酒泉分行", aum: 98.6, deposit: 62.8, loan: 48.5, growth: 9.2, revenue: 4.8, isTop3: true },
  { rank: 4, branch: "张掖分行", aum: 82.3, deposit: 52.6, loan: 38.2, growth: 8.6, revenue: 3.8, isTop3: false },
  { rank: 5, branch: "庆阳分行", aum: 68.5, deposit: 42.8, loan: 32.5, growth: 7.8, revenue: 3.2, isTop3: false },
  { rank: 6, branch: "武威分行", aum: 55.2, deposit: 35.6, loan: 26.8, growth: 7.2, revenue: 2.6, isTop3: false },
  { rank: 7, branch: "白银分行", aum: 48.6, deposit: 30.2, loan: 22.5, growth: 6.5, revenue: 2.2, isTop3: false },
  { rank: 8, branch: "临夏分行", aum: 36.8, deposit: 22.5, loan: 16.8, growth: 5.8, revenue: 1.8, isTop3: false },
  { rank: 9, branch: "金昌分行", aum: 28.5, deposit: 18.2, loan: 12.5, growth: 5.2, revenue: 1.4, isTop3: false },
  { rank: 10, branch: "嘉峪关分行", aum: 22.6, deposit: 14.8, loan: 10.2, growth: 4.5, revenue: 1.1, isTop3: false },
];

// 区域热力数据（模拟甘肃省各地市）
export const regionHeatData = [
  { name: "兰州", value: 186.5 },
  { name: "天水", value: 142.8 },
  { name: "酒泉", value: 98.6 },
  { name: "张掖", value: 82.3 },
  { name: "庆阳", value: 68.5 },
  { name: "武威", value: 55.2 },
  { name: "白银", value: 48.6 },
  { name: "临夏", value: 36.8 },
  { name: "金昌", value: 28.5 },
  { name: "嘉峪关", value: 22.6 },
  { name: "平凉", value: 18.5 },
  { name: "定西", value: 15.2 },
];

// 实时动态播报
export const realtimeMessages = [
  {
    id: 1,
    branch: "兰州分行",
    action: "新增客户",
    value: 128,
    unit: "户",
    channel: "手机银行",
    product: "借记卡",
    customer: "张伟",
    level: "黄金",
    rate: "-",
    term: "-",
    status: "success",
    time: "10秒前",
  },
  {
    id: 2,
    branch: "新区支行",
    action: "新增AUM",
    value: 320,
    unit: "万",
    channel: "柜面",
    product: "定期存款",
    customer: "李娜",
    level: "白金",
    rate: "2.65%",
    term: "1年",
    status: "success",
    time: "23秒前",
  },
  {
    id: 3,
    branch: "手机银行",
    action: "财富销售",
    value: 58,
    unit: "万",
    channel: "线上",
    product: "理财基金",
    customer: "王强",
    level: "黄金",
    rate: "3.85%",
    term: "90天",
    status: "success",
    time: "35秒前",
  },
  {
    id: 4,
    branch: "酒泉分行",
    action: "实时放款",
    value: 1200,
    unit: "万",
    channel: "信贷",
    product: "经营贷",
    customer: "赵明",
    level: "钻石",
    rate: "4.35%",
    term: "3年",
    status: "processing",
    time: "48秒前",
  },
  {
    id: 5,
    branch: "天水分行",
    action: "新增存款",
    value: 580,
    unit: "万",
    channel: "柜面",
    product: "活期存款",
    customer: "陈芳",
    level: "普通",
    rate: "0.35%",
    term: "-",
    status: "success",
    time: "52秒前",
  },
  {
    id: 6,
    branch: "张掖分行",
    action: "新增客户",
    value: 86,
    unit: "户",
    channel: "网银",
    product: "信用卡",
    customer: "刘洋",
    level: "普通",
    rate: "-",
    term: "-",
    status: "success",
    time: "1分钟前",
  },
  {
    id: 7,
    branch: "庆阳分行",
    action: "财富销售",
    value: 125,
    unit: "万",
    channel: "手机银行",
    product: "保险",
    customer: "孙丽",
    level: "白金",
    rate: "4.20%",
    term: "5年",
    status: "success",
    time: "1.2分钟前",
  },
  {
    id: 8,
    branch: "武威分行",
    action: "新增AUM",
    value: 280,
    unit: "万",
    channel: "自助",
    product: "大额存单",
    customer: "周斌",
    level: "钻石",
    rate: "3.15%",
    term: "2年",
    status: "success",
    time: "1.5分钟前",
  },
  {
    id: 9,
    branch: "白银分行",
    action: "实时放款",
    value: 850,
    unit: "万",
    channel: "信贷",
    product: "房贷",
    customer: "吴敏",
    level: "黄金",
    rate: "3.95%",
    term: "30年",
    status: "processing",
    time: "1.8分钟前",
  },
  {
    id: 10,
    branch: "金昌分行",
    action: "新增存款",
    value: 360,
    unit: "万",
    channel: "手机银行",
    product: "通知存款",
    customer: "郑涛",
    level: "白金",
    rate: "1.85%",
    term: "7天",
    status: "success",
    time: "2分钟前",
  },
];

// 模拟数据刷新
export function generateMockRealtime() {
  const branches = ["兰州分行", "天水分行", "酒泉分行", "张掖分行", "庆阳分行", "武威分行", "白银分行", "临夏分行"];
  const channels = ["手机银行", "柜面", "网银", "自助", "线上", "信贷"];
  const products = ["借记卡", "信用卡", "定期存款", "活期存款", "理财基金", "保险", "经营贷", "房贷", "大额存单", "通知存款"];
  const customers = ["张伟", "李娜", "王强", "赵明", "陈芳", "刘洋", "孙丽", "周斌", "吴敏", "郑涛"];
  const levels = ["普通", "黄金", "白金", "钻石"];
  const actions = [
    { action: "新增客户", unit: "户", type: "customer" },
    { action: "新增AUM", unit: "万", type: "aum" },
    { action: "财富销售", unit: "万", type: "wealth" },
    { action: "实时放款", unit: "万", type: "loan" },
    { action: "新增存款", unit: "万", type: "deposit" },
  ];
  const act = actions[Math.floor(Math.random() * actions.length)];
  const value = Math.floor(Math.random() * 500) + 20;
  const isLoan = act.type === "loan";
  return {
    id: Date.now(),
    branch: branches[Math.floor(Math.random() * branches.length)],
    action: act.action,
    value,
    unit: act.unit,
    type: act.type,
    channel: channels[Math.floor(Math.random() * channels.length)],
    product: products[Math.floor(Math.random() * products.length)],
    customer: customers[Math.floor(Math.random() * customers.length)],
    level: levels[Math.floor(Math.random() * levels.length)],
    rate: isLoan ? (3.5 + Math.random() * 1.5).toFixed(2) + "%" : Math.random() > 0.5 ? (1 + Math.random() * 3).toFixed(2) + "%" : "-",
    term: isLoan
      ? Math.floor(Math.random() * 30) + 1 + "年"
      : Math.random() > 0.5
      ? ["7天", "30天", "90天", "1年", "2年", "3年"][Math.floor(Math.random() * 6)]
      : "-",
    status: Math.random() > 0.2 ? "success" : "processing",
    time: "刚刚",
  };
}
