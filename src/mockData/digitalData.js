// ===== 手机银行与线上运营驾驶舱 Mock数据 =====

// 核心线上运营KPI
export const digitalKpiData = [
  {
    id: 1,
    label: "手机银行开户数",
    value: 186.5,
    unit: "万",
    change: 8.6,
    daily: 2850,
    sparkData: [168, 172, 175, 178, 180, 182, 183, 185, 186, 186, 186.5, 186.5],
  },
  {
    id: 2,
    label: "手机银行激活数",
    value: 152.3,
    unit: "万",
    change: 10.2,
    daily: 2180,
    sparkData: [135, 138, 142, 145, 148, 150, 150, 151, 152, 152, 152.3, 152.3],
  },
  {
    id: 3,
    label: "企业手机银行开户",
    value: 28.6,
    unit: "万",
    change: 15.8,
    daily: 520,
    sparkData: [22, 23, 24, 25, 26, 27, 27.5, 28, 28.2, 28.5, 28.6, 28.6],
  },
  {
    id: 4,
    label: "企业网银开户数",
    value: 18.2,
    unit: "万",
    change: 5.2,
    daily: 320,
    sparkData: [16.5, 16.8, 17, 17.2, 17.5, 17.8, 18, 18, 18.1, 18.2, 18.2, 18.2],
  },
  {
    id: 5,
    label: "月交易金额",
    value: 286.5,
    unit: "亿",
    change: 12.5,
    daily: 8.6,
    sparkData: [245, 252, 258, 265, 272, 278, 280, 282, 285, 286, 286.5, 286.5],
  },
  {
    id: 6,
    label: "月交易笔数",
    value: 3856,
    unit: "万笔",
    change: 9.8,
    daily: 125,
    sparkData: [3400, 3480, 3550, 3620, 3680, 3750, 3780, 3820, 3850, 3855, 3856, 3856],
  },
  {
    id: 7,
    label: "年累计交易金额",
    value: 3258.6,
    unit: "亿",
    change: 18.5,
    daily: 9.2,
    sparkData: [2680, 2750, 2820, 2900, 2980, 3050, 3100, 3150, 3200, 3230, 3250, 3258.6],
  },
  {
    id: 8,
    label: "年累计交易笔数",
    value: 42560,
    unit: "万笔",
    change: 15.2,
    daily: 128,
    sparkData: [35200, 36200, 37200, 38200, 39200, 40200, 41000, 41800, 42200, 42400, 42500, 42560],
  },
];

// 数字运营中枢数据
export const digitalCenterData = {
  onlineActiveUsers: 68.5,
  activeChange: 6.8,
  currentTxCount: 2856,
  currentPayCount: 1832,
  currentOpenCount: 328,
  growthIndex: 86.5,
  channelIndex: 78.2,
  // 渠道热度
  channelHeat: [
    { name: "手机银行", value: 95 },
    { name: "企业手机银行", value: 62 },
    { name: "企业网银", value: 55 },
    { name: "微信银行", value: 78 },
    { name: "网上银行", value: 70 },
  ],
  // 支付热度
  payHeat: [
    { name: "微信支付", value: 92 },
    { name: "支付宝", value: 85 },
    { name: "银联支付", value: 65 },
    { name: "本行转账", value: 72 },
    { name: "跨行转账", value: 58 },
  ],
  // 平台增长趋势
  growthTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    values: [45, 48, 50, 52, 55, 58, 60, 62, 64, 66, 67, 68.5],
  },
  // 雷达图指标
  radarData: {
    indicators: ["活跃度", "交易量", "转化率", "覆盖率", "留存率"],
    current: [92, 85, 78, 82, 88],
    last: [85, 78, 72, 75, 82],
  },
};

// 数字用户数据
export const digitalUserData = {
  mobileBankUsers: 186.5,
  activeUsers: 152.3,
  enterpriseUsers: 28.6,
  corpEbankUsers: 18.2,
  // 用户增长趋势
  userGrowth: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    mobile: [168, 172, 175, 178, 180, 182, 183, 185, 186, 186, 186.5, 186.5],
    enterprise: [22, 23, 24, 25, 26, 27, 27.5, 28, 28.2, 28.5, 28.6, 28.6],
  },
  // 开户趋势
  openTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    values: [18500, 16800, 22000, 20800, 25000, 23500, 22800, 26000, 24500, 28000, 26500, 28500],
  },
  // 渠道分布
  channelDist: [
    { name: "手机银行", value: 186.5, color: "#00E5FF" },
    { name: "企业手机银行", value: 28.6, color: "#33D1FF" },
    { name: "企业网银", value: 18.2, color: "#4FD8FF" },
    { name: "微信银行", value: 52.3, color: "#6C7BFF" },
    { name: "网上银行", value: 65.8, color: "#00FFC6" },
  ],
};

// 渠道活跃数据
export const channelActiveData = {
  activeRate: 72.5,
  activeRateChange: 3.8,
  loginFreq: 3.6,
  peakHour: "20:00",
  // 24小时活跃热力图
  hourHeat: [
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 28, 35, 30, 25, 20, 18, 22, 30, 42, 55, 62, 58, 40, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 12, 22, 28, 25, 20, 18, 15, 18, 25, 35, 48, 52, 45, 32, 15],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 10, 18, 25, 22, 18, 15, 12, 15, 22, 30, 42, 48, 42, 28, 12],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 18, 32, 40, 35, 28, 22, 20, 25, 35, 48, 58, 65, 60, 45, 25],
  ],
  // 热门功能TOP
  hotFunctions: [
    { rank: 1, name: "转账汇款", count: 285600, change: 12.5 },
    { rank: 2, name: "账户查询", count: 256800, change: 8.2 },
    { rank: 3, name: "生活缴费", count: 185600, change: 18.6 },
    { rank: 4, name: "信用卡还款", count: 156200, change: 5.8 },
    { rank: 5, name: "理财购买", count: 128500, change: 15.2 },
    { rank: 6, name: "贷款申请", count: 85600, change: 22.5 },
    { rank: 7, name: "扫码支付", count: 75200, change: 35.8 },
    { rank: 8, name: "定期存款", count: 52300, change: -2.3 },
  ],
  // 用户行为图谱数据
  behaviorData: [
    { name: "登录", value: 95 },
    { name: "查余额", value: 88 },
    { name: "转账", value: 82 },
    { name: "缴费", value: 72 },
    { name: "理财", value: 58 },
    { name: "贷款", value: 42 },
    { name: "信用卡", value: 65 },
    { name: "支付", value: 78 },
  ],
  hours: ["0-2", "2-4", "4-6", "6-8", "8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22", "22-24"],
};

// 交易运营数据
export const transactionData = {
  monthlyAmount: 286.5,
  monthlyCount: 3856,
  yearlyAmount: 3258.6,
  yearlyCount: 42560,
  // 交易趋势
  txTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    amount: [245, 252, 258, 265, 272, 278, 280, 282, 285, 286, 286.5, 286.5],
    count: [3400, 3480, 3550, 3620, 3680, 3750, 3780, 3820, 3850, 3855, 3856, 3856],
  },
  // 支付生态
  payEcosystem: [
    { name: "微信支付", value: 125.6, growth: 22.5, share: 35.8 },
    { name: "支付宝", value: 98.5, growth: 18.2, share: 28.2 },
    { name: "银联支付", value: 42.8, growth: 8.5, share: 12.2 },
    { name: "本行转账", value: 52.3, growth: 5.6, share: 14.9 },
    { name: "跨行转账", value: 31.2, growth: 6.8, share: 8.9 },
  ],
  // 交易类型分布
  txTypeDist: [
    { name: "转账", value: 42.5, color: "#00E5FF" },
    { name: "支付", value: 28.3, color: "#33D1FF" },
    { name: "缴费", value: 15.2, color: "#4FD8FF" },
    { name: "理财", value: 8.6, color: "#6C7BFF" },
    { name: "其他", value: 5.4, color: "#00FFC6" },
  ],
};

// 实时运营数据
export const realtimeOpsData = {
  currentOnline: 68520,
  todayActive: 258600,
  todayTx: 125600,
  todayPay: 85600,
  txPeak: 286500,
  activePeak: 328500,
};

// 实时数据流消息
export const realtimeOpsMessages = [
  {
    id: "TR20260522001",
    type: "transaction",
    bizType: "转账",
    action: "完成转账",
    amount: 5200,
    unit: "元",
    customer: "张伟",
    channel: "手机银行",
    product: "活期存款",
    status: "成功",
    time: "刚刚",
  },
  {
    id: "PY20260522002",
    type: "payment",
    bizType: "支付",
    action: "完成支付",
    amount: 860,
    unit: "元",
    customer: "李娜",
    channel: "扫码支付",
    product: "借记卡",
    status: "成功",
    time: "10秒前",
  },
  {
    id: "PY20260522003",
    type: "payment",
    bizType: "缴费",
    action: "完成缴费",
    amount: 230,
    unit: "元",
    customer: "王强",
    channel: "生活缴费",
    product: "水电气",
    status: "成功",
    time: "20秒前",
  },
  {
    id: "OP20260522004",
    type: "open",
    bizType: "开户",
    action: "完成开户",
    amount: 0,
    unit: "",
    customer: "赵明",
    channel: "手机银行",
    product: "Ⅱ类账户",
    status: "成功",
    time: "30秒前",
  },
  {
    id: "AC20260522005",
    type: "active",
    bizType: "激活",
    action: "激活手机银行",
    amount: 0,
    unit: "",
    customer: "陈芳",
    channel: "线上",
    product: "手机银行",
    status: "成功",
    time: "40秒前",
  },
  {
    id: "TR20260522006",
    type: "transaction",
    bizType: "转账",
    action: "完成转账",
    amount: 12800,
    unit: "元",
    customer: "兰州科技",
    channel: "企业网银",
    product: "对公账户",
    status: "成功",
    time: "50秒前",
  },
  {
    id: "PY20260522007",
    type: "payment",
    bizType: "支付",
    action: "完成支付",
    amount: 3560,
    unit: "元",
    customer: "刘洋",
    channel: "支付宝",
    product: "信用卡",
    status: "处理中",
    time: "1分钟前",
  },
  {
    id: "OP20260522008",
    type: "open",
    bizType: "开户",
    action: "开通企业手机银行",
    amount: 0,
    unit: "",
    customer: "兰州科技公司",
    channel: "柜面",
    product: "企业银行",
    status: "成功",
    time: "1.2分钟前",
  },
  {
    id: "TR20260522009",
    type: "transaction",
    bizType: "理财",
    action: "购买理财",
    amount: 50000,
    unit: "元",
    customer: "孙丽",
    channel: "手机银行",
    product: "天天盈",
    status: "成功",
    time: "1.5分钟前",
  },
  {
    id: "AC20260522010",
    type: "active",
    bizType: "活跃",
    action: "登录手机银行",
    amount: 0,
    unit: "",
    customer: "周斌",
    channel: "APP",
    product: "手机银行",
    status: "成功",
    time: "1.8分钟前",
  },
];

export function generateMockRealtimeMsg() {
  const types = ["transaction", "payment", "payment", "open", "active", "transaction", "payment"];
  const t = types[Math.floor(Math.random() * types.length)];
  const bizTypes = { transaction: "转账", payment: "支付", open: "开户", active: "活跃" };
  const actions = {
    transaction: ["完成转账", "完成转账", "购买理财", "基金定投"],
    payment: ["完成支付", "完成缴费", "扫码支付", "完成还款"],
    open: ["完成开户", "开通企业手机银行", "注册网银", "激活手机银行"],
    active: ["登录手机银行", "登录企业网银", "活跃用户", "首次登录"],
  };
  const channels = ["手机银行", "扫码支付", "生活缴费", "企业网银", "支付宝", "微信支付", "柜面", "APP", "线上"];
  const customers = ["张伟", "李娜", "王强", "赵明", "陈芳", "刘洋", "孙丽", "周斌", "吴敏", "郑涛"];
  const products = ["活期存款", "定期存款", "借记卡", "信用卡", "天天盈", "薪金宝", "Ⅱ类账户", "企业银行", "对公账户", "水电气", "手机银行"];
  const amounts = [5200, 860, 230, 12800, 3560, 50000, 18500, 680, 2500, 9500, 3200, 16800, 4500, 2800, 15000];
  const now = new Date();
  const idPrefix = { transaction: "TR", payment: "PY", open: "OP", active: "AC" };
  const seq = String(Math.floor(Math.random() * 99999)).padStart(5, "0");
  return {
    id: `${idPrefix[t]}${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}${seq}`,
    type: t,
    bizType: bizTypes[t],
    action: actions[t][Math.floor(Math.random() * actions[t].length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    unit: "元",
    customer: Math.random() > 0.3 ? customers[Math.floor(Math.random() * customers.length)] : "-",
    channel: channels[Math.floor(Math.random() * channels.length)],
    product: products[Math.floor(Math.random() * products.length)],
    status: Math.random() > 0.2 ? "成功" : "处理中",
    time: "刚刚",
  };
}
