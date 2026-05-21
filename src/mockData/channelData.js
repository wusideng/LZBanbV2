// ===== 客户经营与渠道运营驾驶舱 Mock数据 =====

// 渠道KPI数据
export const kpiData = [
  {
    id: 1,
    label: "手机银行累计开户",
    value: 1856200,
    unit: "户",
    change: 12.8,
    sparkData: [1520, 1580, 1650, 1720, 1680, 1820, 1780, 1920, 1880, 1980, 2050, 1856],
  },
  {
    id: 2,
    label: "月新增客户",
    value: 38500,
    unit: "户",
    change: 8.5,
    sparkData: [2200, 2500, 2800, 2600, 3200, 3500, 3100, 3800, 3600, 4000, 4200, 3850],
  },
  {
    id: 3,
    label: "激活客户数",
    value: 1268000,
    unit: "户",
    change: 6.2,
    sparkData: [1050, 1100, 1080, 1150, 1200, 1180, 1250, 1220, 1300, 1280, 1350, 1268],
  },
  {
    id: 4,
    label: "活跃客户数",
    value: 985600,
    unit: "户",
    change: 4.5,
    sparkData: [820, 850, 830, 880, 900, 920, 910, 950, 960, 980, 1000, 985],
  },
  {
    id: 5,
    label: "MAU",
    value: 568000,
    unit: "户",
    change: 7.2,
    sparkData: [480, 495, 510, 520, 535, 550, 540, 560, 555, 570, 575, 568],
  },
  {
    id: 6,
    label: "DAU",
    value: 125800,
    unit: "户",
    change: 3.8,
    sparkData: [112, 115, 118, 120, 122, 125, 123, 126, 128, 127, 130, 125.8],
  },
  {
    id: 7,
    label: "用户留存率",
    value: 68.5,
    unit: "%",
    change: 2.3,
    sparkData: [62.0, 62.8, 63.5, 64.2, 64.8, 65.5, 66.0, 66.8, 67.2, 67.8, 68.2, 68.5],
  },
  {
    id: 8,
    label: "用户流失率",
    value: 5.2,
    unit: "%",
    change: -1.5,
    sparkData: [6.8, 6.5, 6.2, 6.0, 5.8, 5.6, 5.5, 5.4, 5.3, 5.2, 5.2, 5.2],
  },
];

// 用户增长模块数据
export const userGrowthData = {
  funnelData: [
    { name: "潜在用户", value: 3200000 },
    { name: "注册客户", value: 2150000 },
    { name: "开户客户", value: 1856200 },
    { name: "激活客户", value: 1268000 },
    { name: "活跃客户", value: 985600 },
    { name: "交易客户", value: 725800 },
  ],
  activeTrend: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    mau: [480000, 495000, 510000, 520000, 535000, 550000, 540000, 560000, 555000, 570000, 575000, 568000],
    dau: [112000, 115000, 118000, 120000, 122000, 125000, 123000, 126000, 128000, 127000, 130000, 125800],
  },
  growthRate: 8.5,
  customerReturn: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    values: [42.5, 43.2, 44.8, 45.5, 46.2, 47.0, 46.5, 47.8, 48.2, 49.0, 49.5, 50.2],
  },
};

// 用户运营中枢数据
export const centerData = {
  currentMau: 568000,
  currentDau: 125800,
  indicators: [
    { name: "DAU实时活跃", value: 92 },
    { name: "渠道交易热度", value: 78 },
    { name: "客户增长指数", value: 85 },
    { name: "用户活跃指数", value: 72 },
    { name: "运营热度指数", value: 88 },
  ],
  realtimeFlow: [
    { action: "客户完成转账", amount: 5200, unit: "元" },
    { action: "客户完成缴费", amount: 860, unit: "元" },
    { action: "客户购买理财", amount: 50000, unit: "元" },
    { action: "客户申请贷款", amount: 200000, unit: "元" },
    { action: "客户完成还款", amount: 3800, unit: "元" },
    { action: "客户开通手机银行", amount: 1, unit: "户" },
  ],
  flowMessages: [
    { id: 1, channel: "手机银行", action: "新增开户", value: 58, unit: "户", status: "success", time: "5秒前" },
    { id: 2, channel: "柜面", action: "大额存款", value: 320, unit: "万", status: "success", time: "12秒前" },
    { id: 3, channel: "企业网银", action: "批量转账", value: 186, unit: "笔", status: "processing", time: "28秒前" },
    { id: 4, channel: "微信支付", action: "商户收款", value: 15.6, unit: "万", status: "success", time: "35秒前" },
    { id: 5, channel: "支付宝", action: "基金申购", value: 50, unit: "万", status: "success", time: "42秒前" },
    { id: 6, channel: "信贷系统", action: "贷款放款", value: 1200, unit: "万", status: "processing", time: "55秒前" },
    { id: 7, channel: "手机银行", action: "理财赎回", value: 28, unit: "万", status: "success", time: "1.1分钟前" },
    { id: 8, channel: "柜面", action: "大额取款", value: 15, unit: "万", status: "warning", time: "1.5分钟前" },
  ],
};

// 渠道转化漏斗数据
export const channelConversionData = {
  funnelData: [
    { name: "开户", value: 1856200 },
    { name: "激活", value: 1268000 },
    { name: "登录", value: 985600 },
    { name: "浏览", value: 826500 },
    { name: "交易", value: 725800 },
    { name: "留存", value: 568000 },
    { name: "流失预警", value: 85600 },
  ],
  sankeyData: {
    links: [
      { source: "手机银行", target: "开户", value: 856000 },
      { source: "柜面", target: "开户", value: 420000 },
      { source: "企业网银", target: "开户", value: 280000 },
      { source: "微信小程序", target: "开户", value: 186200 },
      { source: "支付宝小程序", target: "开户", value: 114000 },
      { source: "手机银行", target: "交易", value: 425000 },
      { source: "企业网银", target: "交易", value: 186500 },
      { source: "柜面", target: "交易", value: 114300 },
      { source: "手机银行", target: "留存", value: 352000 },
      { source: "企业网银", target: "留存", value: 128000 },
      { source: "柜面", target: "留存", value: 88000 },
      { source: "开户", target: "激活", value: 1268000 },
      { source: "激活", target: "登录", value: 985600 },
      { source: "登录", target: "浏览", value: 826500 },
      { source: "浏览", target: "交易", value: 725800 },
      { source: "交易", target: "留存", value: 568000 },
      { source: "交易", target: "流失预警", value: 85600 },
    ],
  },
  churnData: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    highRisk: [12500, 11800, 13200, 12800, 14200, 13800, 14500, 15200, 14800, 15500, 16200, 15800],
    silent: [28000, 26500, 29500, 28200, 31000, 30500, 32000, 33500, 32800, 34500, 35200, 34800],
    noLogin: [18500, 17200, 19500, 18800, 20500, 19800, 21500, 22500, 21800, 23200, 23800, 23500],
    tradeDown: [8500, 7800, 9200, 8800, 9800, 9500, 10200, 10800, 10500, 11200, 11500, 11200],
  },
};

// 渠道运营与行为分析数据
export const channelBehaviorData = {
  channelMetrics: [
    { name: "手机银行", amount: 856000, count: 425000 },
    { name: "企业网银", amount: 420000, count: 186500 },
    { name: "微信支付", amount: 280000, count: 158200 },
    { name: "支付宝", amount: 186200, count: 125800 },
    { name: "特约商户", amount: 114000, count: 85600 },
  ],
  behaviorData: {
    loginFreq: [25, 30, 28, 35, 32, 38, 36, 42, 40, 45, 43, 48],
    tradeFreq: [12, 15, 14, 18, 16, 20, 19, 22, 21, 25, 23, 26],
    activeHours: [8, 6, 4, 3, 5, 8, 15, 35, 55, 68, 72, 65, 58, 48, 38, 32, 28, 35, 42, 50, 48, 38, 25, 12],
    stayDuration: [45, 52, 48, 58, 55, 62, 60, 68, 65, 72, 70, 75],
  },
  topFunctions: [
    { name: "账户查询", count: 285600 },
    { name: "转账汇款", count: 245800 },
    { name: "交易明细", count: 215600 },
    { name: "理财购买", count: 168500 },
    { name: "信用卡还款", count: 142300 },
    { name: "生活缴费", count: 125800 },
    { name: "贷款申请", count: 98500 },
    { name: "定期存款", count: 85600 },
    { name: "基金申购", count: 72500 },
    { name: "保险服务", count: 58600 },
  ],
};

// 实时运营数据
export const realtimeOps = {
  realtimeCounters: [
    { label: "实时开户", value: 286, unit: "户" },
    { label: "实时交易", value: 1856, unit: "笔" },
    { label: "实时支付", value: 428.6, unit: "万元" },
  ],
  channelPeak: {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    values: [5200, 4800, 5600, 5400, 6200, 6000, 6500, 6800, 6600, 7200, 7500, 7200],
  },
  hotFunctions: [
    { name: "账户查询", count: 12580 },
    { name: "转账汇款", count: 11250 },
    { name: "交易明细", count: 9850 },
    { name: "理财购买", count: 7680 },
    { name: "信用卡还款", count: 6520 },
    { name: "生活缴费", count: 5860 },
    { name: "贷款申请", count: 4250 },
    { name: "定期存款", count: 3860 },
  ],
  alerts: [
    { level: "warning", title: "手机银行交易量异常波动，较昨日同期增长35%", time: "2分钟前" },
    { level: "info", title: "企业网银批量转账通道延迟，平均响应时间8.5秒", time: "5分钟前" },
    { level: "critical", title: "渠道系统CPU负载超过85%，需关注扩容", time: "8分钟前" },
    { level: "info", title: "微信小程序开户转化率提升12%，达到行业领先水平", time: "12分钟前" },
    { level: "warning", title: "特约商户交易失败率升至3.2%，超过预警阈值", time: "18分钟前" },
    { level: "info", title: "支付宝渠道夜间交易活跃，环比增长22%", time: "25分钟前" },
  ],
};

// 模拟实时日志生成
export function generateMockRealtime() {
  const actions = [
    { action: "开户", unit: "户", type: "open" },
    { action: "交易", unit: "笔", type: "trade" },
    { action: "支付", unit: "万元", type: "payment" },
    { action: "转账", unit: "万元", type: "transfer" },
    { action: "理财申购", unit: "万元", type: "wealth" },
    { action: "贷款申请", unit: "万元", type: "loan" },
    { action: "生活缴费", unit: "笔", type: "bill" },
    { action: "信用卡还款", unit: "笔", type: "credit" },
  ];
  const channels = ["手机银行", "企业网银", "柜面", "微信支付", "支付宝", "特约商户", "自助终端"];
  const customers = ["张伟", "李娜", "王强", "赵明", "陈芳", "刘洋", "孙丽", "周斌", "吴敏", "郑涛"];
  const levels = ["普通", "黄金", "白金", "钻石", "私行"];
  const act = actions[Math.floor(Math.random() * actions.length)];
  const value = act.type === "open" ? Math.floor(Math.random() * 20) + 1 : act.type === "bill" || act.type === "credit" ? Math.floor(Math.random() * 50) + 1 : (Math.random() * 200 + 0.5).toFixed(1);
  const isAmount = act.type === "payment" || act.type === "transfer" || act.type === "wealth" || act.type === "loan";
  return {
    id: Date.now(),
    channel: channels[Math.floor(Math.random() * channels.length)],
    action: act.action,
    value: isAmount ? parseFloat(value) : Math.floor(parseFloat(value)),
    unit: act.unit,
    type: act.type,
    customer: customers[Math.floor(Math.random() * customers.length)],
    level: levels[Math.floor(Math.random() * levels.length)],
    status: Math.random() > 0.15 ? "success" : Math.random() > 0.5 ? "warning" : "processing",
    time: "刚刚",
  };
}