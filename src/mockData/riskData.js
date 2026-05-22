// ===== 风险预警与经营监控驾驶舱 Mock数据 =====

// 核心风险KPI
export const riskKpiData = [
  {
    id: 1,
    label: "不良贷款",
    value: 4.86,
    unit: "亿",
    change: -5.2,
    daily: -0.02,
    sparkData: [5.12, 5.08, 5.02, 4.98, 4.95, 4.92, 4.9, 4.88, 4.87, 4.86, 4.86, 4.86],
  },
  { id: 2, label: "不良率", value: 1.26, unit: "%", change: -0.08, daily: -0.002, threshold: 1.5 },
  { id: 3, label: "逾期率", value: 2.35, unit: "%", change: -0.12, daily: -0.005, threshold: 3.0 },
  { id: 4, label: "拨备覆盖率", value: 186.5, unit: "%", change: 8.6, daily: 0.3, threshold: 120 },
  { id: 5, label: "拨贷比", value: 2.85, unit: "%", change: 0.15, daily: 0.005, threshold: 2.5 },
];

// 风险雷达中枢数据
export const riskCenterData = {
  riskIndex: 32.6,
  riskLevel: "低风险",
  healthIndex: 86.5,
  spreadIndex: 28.3,
  // 围绕中心
  badRate: 1.26,
  overdueRate: 2.35,
  healthDegree: 86.5,
  spreadIndexVal: 28.3,
  warnLevel: "绿色",
  // 风险品类占比
  riskCategory: [
    { name: "正常", value: 93.8, color: "#00FF99" },
    { name: "关注", value: 3.6, color: "#FF9F43" },
    { name: "次级", value: 1.2, color: "#FF5B5B" },
    { name: "可疑", value: 0.8, color: "#FF2D2D" },
    { name: "损失", value: 0.6, color: "#CC0000" },
  ],
  // 风险趋势
  riskTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    values: [1.68, 1.65, 1.58, 1.52, 1.48, 1.42, 1.38, 1.35, 1.32, 1.3, 1.28, 1.26],
  },
  // 经营健康趋势
  healthTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    values: [72, 74, 76, 78, 80, 82, 83, 84, 85, 85.5, 86, 86.5],
  },
  // 雷达图
  radarData: {
    indicators: ["资产质量", "风险抵御", "流动性", "盈利能力", "经营效率"],
    current: [88, 82, 75, 78, 82],
    last: [82, 76, 72, 74, 78],
  },
};

// 风险迁徙数据
export const riskMigrationData = {
  // 五级分类
  fiveCategories: [
    { name: "正常", value: 362.5, pct: 93.8, color: "#00FF99" },
    { name: "关注", value: 13.9, pct: 3.6, color: "#FF9F43" },
    { name: "次级", value: 4.6, pct: 1.2, color: "#FF5B5B" },
    { name: "可疑", value: 3.1, pct: 0.8, color: "#FF2D2D" },
    { name: "损失", value: 2.3, pct: 0.6, color: "#CC0000" },
  ],
  // 迁徙矩阵
  migrationMatrix: [
    { from: "正常", to: "正常", value: 355.2 },
    { from: "正常", to: "关注", value: 6.5 },
    { from: "正常", to: "次级", value: 0.8 },
    { from: "关注", to: "正常", value: 2.8 },
    { from: "关注", to: "关注", value: 9.2 },
    { from: "关注", to: "次级", value: 1.5 },
    { from: "关注", to: "可疑", value: 0.4 },
    { from: "次级", to: "次级", value: 2.8 },
    { from: "次级", to: "可疑", value: 1.2 },
    { from: "次级", to: "损失", value: 0.6 },
    { from: "可疑", to: "可疑", value: 1.8 },
    { from: "可疑", to: "损失", value: 1.3 },
    { from: "损失", to: "损失", value: 2.3 },
  ],
  // 迁徙率趋势
  migrationTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    rate: [4.2, 4.0, 3.8, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 2.9, 2.85],
  },
};

// 区域风险数据
export const regionalRiskData = [
  { rank: 1, branch: "兰州分行", badRate: 1.85, overdueRate: 3.12, riskIndex: 72.5, level: "中风险" },
  { rank: 2, branch: "天水分行", badRate: 1.56, overdueRate: 2.85, riskIndex: 65.8, level: "中风险" },
  { rank: 3, branch: "酒泉分行", badRate: 1.32, overdueRate: 2.56, riskIndex: 58.2, level: "低风险" },
  { rank: 4, branch: "庆阳分行", badRate: 1.28, overdueRate: 2.48, riskIndex: 55.6, level: "低风险" },
  { rank: 5, branch: "张掖分行", badRate: 1.15, overdueRate: 2.25, riskIndex: 48.5, level: "低风险" },
  { rank: 6, branch: "武威分行", badRate: 1.08, overdueRate: 2.18, riskIndex: 45.2, level: "低风险" },
  { rank: 7, branch: "白银分行", badRate: 0.95, overdueRate: 1.95, riskIndex: 42.8, level: "低风险" },
  { rank: 8, branch: "临夏分行", badRate: 0.82, overdueRate: 1.72, riskIndex: 38.5, level: "低风险" },
  { rank: 9, branch: "金昌分行", badRate: 0.68, overdueRate: 1.55, riskIndex: 32.6, level: "安全" },
  { rank: 10, branch: "嘉峪关分行", badRate: 0.55, overdueRate: 1.38, riskIndex: 28.2, level: "安全" },
];

// 异常经营监控数据
export const abnormalOpsData = {
  // 异常交易告警
  abnormalAlerts: [
    { id: 1, level: "high", type: "大额异常", desc: "单笔转账¥520,000 至异常账户", branch: "兰州分行", time: "30秒前" },
    { id: 2, level: "medium", type: "资金波动", desc: "夜间频繁交易 累计¥185,000", branch: "天水分行", time: "1分钟前" },
    { id: 3, level: "high", type: "客户风险", desc: "客户张伟风险等级提升至高风险", branch: "酒泉分行", time: "2分钟前" },
    { id: 4, level: "low", type: "系统异常", desc: "大额交易频率超出阈值3倍", branch: "庆阳分行", time: "3分钟前" },
    { id: 5, level: "medium", type: "资金波动", desc: "对公账户异常大额流入¥800,000", branch: "张掖分行", time: "5分钟前" },
    { id: 6, level: "high", type: "大额异常", desc: "快进快出交易¥350,000 涉嫌洗钱", branch: "武威分行", time: "7分钟前" },
    { id: 7, level: "low", type: "逾期预警", desc: "房贷逾期30天客户新增8户", branch: "白银分行", time: "10分钟前" },
    { id: 8, level: "medium", type: "客户风险", desc: "信用卡套现嫌疑 涉及¥42,000", branch: "临夏分行", time: "12分钟前" },
  ],
  // 资金波动
  fundVolatility: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    normal: [85, 82, 88, 84, 86, 82, 85, 80, 83, 82, 84, 82],
    abnormal: [3.2, 2.8, 3.5, 3.0, 3.8, 3.2, 3.6, 4.2, 3.5, 3.8, 3.2, 3.5],
    threshold: [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0],
  },
};

// 经营健康数据
export const healthData = {
  costIncomeRatio: 32.5,
  depositLoanRatio: 73.8,
  yield: 4.85,
  netInterestMargin: 2.35,
  // 资产质量趋势
  assetQualityTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    badRate: [1.68, 1.65, 1.58, 1.52, 1.48, 1.42, 1.38, 1.35, 1.32, 1.3, 1.28, 1.26],
    reserveRate: [168, 172, 175, 178, 180, 182, 183, 185, 186, 186.5, 186.5, 186.5],
  },
  // 健康度仪表盘
  healthDashboard: [
    { name: "资产质量", value: 88, max: 100, status: "good" },
    { name: "流动性", value: 75, max: 100, status: "normal" },
    { name: "盈利能力", value: 78, max: 100, status: "normal" },
    { name: "风险抵御", value: 82, max: 100, status: "good" },
  ],
};

// 实时告警消息
export const realtimeAlerts = [
  {
    id: 1,
    level: "critical",
    type: "异常交易",
    message: "发现异常交易 ¥520,000",
    amount: "52万",
    product: "对公存款",
    status: "待处理",
    branch: "兰州分行",
    time: "刚刚",
  },
  {
    id: 2,
    level: "warning",
    type: "客户风险",
    message: "客户风险等级提升",
    amount: "-",
    product: "信用贷",
    status: "处理中",
    branch: "天水分行",
    time: "15秒前",
  },
  {
    id: 3,
    level: "critical",
    type: "资金波动",
    message: "检测到异常资金波动",
    amount: "18.5万",
    product: "活期存款",
    status: "待处理",
    branch: "酒泉分行",
    time: "35秒前",
  },
  {
    id: 4,
    level: "warning",
    type: "区域风险",
    message: "区域逾期率异常上升",
    amount: "-",
    product: "房贷",
    status: "处理中",
    branch: "庆阳分行",
    time: "50秒前",
  },
  {
    id: 5,
    level: "info",
    type: "系统异常",
    message: "大额交易频次超阈值",
    amount: "-",
    product: "综合业务",
    status: "已完成",
    branch: "张掖分行",
    time: "1分钟前",
  },
  {
    id: 6,
    level: "critical",
    type: "异常交易",
    message: "快进快出交易 ¥350,000",
    amount: "35万",
    product: "信用卡",
    status: "待处理",
    branch: "武威分行",
    time: "1.5分钟前",
  },
  {
    id: 7,
    level: "warning",
    type: "客户风险",
    message: "信用卡套现嫌疑 ¥42,000",
    amount: "4.2万",
    product: "信用卡",
    status: "处理中",
    branch: "白银分行",
    time: "2分钟前",
  },
  {
    id: 8,
    level: "info",
    type: "逾期预警",
    message: "房贷逾期30天新增8户",
    amount: "-",
    product: "房贷",
    status: "已完成",
    branch: "临夏分行",
    time: "2.5分钟前",
  },
];

export function generateMockAlert() {
  const levels = ["critical", "warning", "info"];
  const types = ["异常交易", "客户风险", "资金波动", "区域风险", "系统异常", "逾期预警"];
  const branches = ["兰州分行", "天水分行", "酒泉分行", "庆阳分行", "张掖分行", "武威分行", "白银分行", "临夏分行", "金昌分行"];
  const products = ["信用贷", "房贷", "消费贷", "经营贷", "活期存款", "对公存款", "信用卡", "综合业务"];
  const statuses = ["待处理", "处理中", "已完成"];
  const amounts = ["52万", "18.5万", "35万", "4.2万", "80万", "12万", "6.8万", "-"];
  const msgTemplates = {
    异常交易: ["发现异常交易 ¥" + (Math.floor(Math.random() * 900) + 100) + ",000"],
    客户风险: ["客户风险等级提升", "检测到高风险客户新增"],
    资金波动: ["检测到异常资金波动", "夜间频繁交易累计¥" + (Math.floor(Math.random() * 500) + 50) + ",000"],
    区域风险: ["区域逾期率异常上升", "区域不良率超过阈值"],
    系统异常: ["大额交易频次超阈值", "系统检测到异常流量"],
    逾期预警: ["房贷逾期30天新增" + Math.floor(Math.random() * 15 + 1) + "户", "经营贷逾期率上升"],
  };
  const t = types[Math.floor(Math.random() * types.length)];
  const msgs = msgTemplates[t];
  return {
    id: Date.now(),
    level: levels[Math.floor(Math.random() * levels.length)],
    type: t,
    message: msgs[Math.floor(Math.random() * msgs.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    product: products[Math.floor(Math.random() * products.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    branch: branches[Math.floor(Math.random() * branches.length)],
    time: "刚刚",
  };
}
