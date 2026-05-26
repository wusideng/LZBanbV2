// ===== 全行经营总览驾驶舱 Mock数据 =====

export const totalKpiData = [
  { id: 1, label: '总资产', value: 1256.8, unit: '亿', change: 6.2, yoy: 12.5, changeType: 'up', sparkData: [1150,1168,1180,1195,1205,1218,1225,1235,1240,1248,1252,1256.8] },
  { id: 2, label: '总负债', value: 732.5, unit: '亿', change: 4.8, yoy: 9.2, changeType: 'up', sparkData: [680,690,698,705,712,718,722,726,728,730,731,732.5] },
  { id: 3, label: '营业收入', value: 56.8, unit: '亿', change: 8.5, yoy: 15.6, changeType: 'up', sparkData: [48,50,51,52,53,54,54.5,55,55.5,56,56.5,56.8] },
  { id: 4, label: '利润总额', value: 18.6, unit: '亿', change: 10.2, yoy: 22.8, changeType: 'up', sparkData: [15,15.5,16,16.2,16.8,17,17.2,17.5,17.8,18,18.3,18.6] },
  { id: 5, label: 'ROA', value: 1.48, unit: '%', change: 0.12, yoy: 0.08, changeType: 'up', sparkData: [1.32,1.35,1.36,1.38,1.40,1.42,1.42,1.44,1.45,1.46,1.47,1.48] },
  { id: 6, label: 'ROE', value: 12.8, unit: '%', change: 1.5, yoy: 2.8, changeType: 'up', sparkData: [11.2,11.5,11.6,11.8,12.0,12.2,12.3,12.4,12.5,12.6,12.7,12.8] },
  { id: 7, label: '成本收入比', value: 32.5, unit: '%', change: -1.8, yoy: -3.2, changeType: 'down', sparkData: [35.2,34.8,34.5,34.0,33.6,33.2,33.0,32.8,32.6,32.6,32.5,32.5] }
]

export const totalCustomerData = {
  totalCustomers: 328.6, newCustomers: 28.5, activeCustomers: 186.2, aumScale: 856.8, growthRate: 8.6,
  customerTrend: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [220,228,238,248,258,268,278,288,298,308,318,328.6] },
  customerStructure: [{ name: '零售客户', value: 186.5, color: '#FFD700' },{ name: '财富客户', value: 68.5, color: '#4FD8FF' },{ name: '私行客户', value: 3.85, color: '#7CFFB2' },{ name: '企业客户', value: 52.3, color: '#6C7BFF' },{ name: '机构客户', value: 17.6, color: '#FF9F43' }],
  aumTrend: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [720,735,750,768,782,798,812,825,838,845,852,856.8] }
}

export const totalMapData = {
  healthIndex: 86.5, totalBranches: 42, healthyBranches: 36, warningBranches: 6, costIncomeRatio: 32.5, depositLoanRatio: 73.8, yield: 4.85,
  regionData: [{ name: '兰州', value: 186.5, status: 'healthy' },{ name: '天水', value: 142.8, status: 'healthy' },{ name: '酒泉', value: 98.6, status: 'healthy' },{ name: '张掖', value: 82.3, status: 'healthy' },{ name: '庆阳', value: 68.5, status: 'warning' },{ name: '武威', value: 55.2, status: 'healthy' },{ name: '白银', value: 48.6, status: 'warning' },{ name: '临夏', value: 36.8, status: 'healthy' },{ name: '金昌', value: 28.5, status: 'warning' },{ name: '嘉峪关', value: 22.6, status: 'healthy' },{ name: '平凉', value: 18.5, status: 'healthy' },{ name: '定西', value: 15.2, status: 'warning' }],
  regionRanking: [{ rank: 1, name: '兰州分行', aum: 186.5, growth: 12.5, score: 95 },{ rank: 2, name: '天水分行', aum: 142.8, growth: 10.8, score: 88 },{ rank: 3, name: '酒泉分行', aum: 98.6, growth: 9.2, score: 82 },{ rank: 4, name: '张掖分行', aum: 82.3, growth: 8.6, score: 78 },{ rank: 5, name: '庆阳分行', aum: 68.5, growth: 7.8, score: 72 },{ rank: 6, name: '武威分行', aum: 55.2, growth: 7.2, score: 68 },{ rank: 7, name: '白银分行', aum: 48.6, growth: 6.5, score: 62 },{ rank: 8, name: '临夏分行', aum: 36.8, growth: 5.8, score: 56 },{ rank: 9, name: '金昌分行', aum: 28.5, growth: 5.2, score: 50 },{ rank: 10, name: '嘉峪关分行', aum: 22.6, growth: 4.5, score: 45 }]
}

export const totalRiskData = {
  badRate: 1.26, overdueRate: 2.35, riskWarnClients: 186, highRiskAssets: 12.5,
  riskRadar: { indicators: ['不良率','逾期率','迁徙率','关注类占比','损失率'], current: [1.26, 2.35, 3.8, 4.2, 0.85], max: [5, 8, 10, 10, 3] },
  riskTrend: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], badRate: [1.68,1.65,1.58,1.52,1.48,1.42,1.38,1.35,1.32,1.30,1.28,1.26], reserveRate: [168,172,175,178,180,182,183,185,186,186.5,186.5,186.5] },
  riskCategories: [{ name: '正常', value: 93.8, color: '#00FF99' },{ name: '关注', value: 3.6, color: '#FFD700' },{ name: '次级', value: 1.2, color: '#FF9F43' },{ name: '可疑', value: 0.8, color: '#FF5B5B' },{ name: '损失', value: 0.6, color: '#CC0000' }],
  alerts: [{ id: 1, level: 'high', msg: '不良率1.26% 环比下降0.08%', time: '刚刚' },{ id: 2, level: 'medium', msg: '关注类贷款迁徙率上升0.5%', time: '2分钟前' },{ id: 3, level: 'low', msg: '白银分行不良率1.85%需关注', time: '5分钟前' },{ id: 4, level: 'high', msg: '高风险客户新增15户', time: '8分钟前' },{ id: 5, level: 'medium', msg: '逾期率2.35% 较上月下降', time: '12分钟前' },{ id: 6, level: 'low', msg: '拨备覆盖率186.5%运行正常', time: '15分钟前' }]
}

export const totalBranchData = {
  profitRanking: [{ rank: 1, name: '兰州分行', profit: 8.2, growth: 12.5 },{ rank: 2, name: '天水分行', profit: 6.5, growth: 10.8 },{ rank: 3, name: '酒泉分行', profit: 4.8, growth: 9.2 },{ rank: 4, name: '张掖分行', profit: 3.8, growth: 8.6 },{ rank: 5, name: '庆阳分行', profit: 3.2, growth: 7.8 },{ rank: 6, name: '武威分行', profit: 2.6, growth: 7.2 },{ rank: 7, name: '白银分行', profit: 2.2, growth: 6.5 },{ rank: 8, name: '临夏分行', profit: 1.8, growth: 5.8 },{ rank: 9, name: '金昌分行', profit: 1.4, growth: 5.2 },{ rank: 10, name: '嘉峪关分行', profit: 1.1, growth: 4.5 }]
}

export const totalTrendData = {
  depositTrend: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [480,488,492,498,502,508,510,515,518,520,522,523.5] },
  loanTrend: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [340,348,352,358,362,368,372,376,380,382,385,386.2] },
  depositLoanRatio: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [70.8,71.3,71.5,71.9,72.1,72.4,72.9,73.0,73.3,73.5,73.7,73.8] },
  dailyDeposit: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [15.2,15.5,15.8,16.0,16.2,16.5,16.3,16.6,16.8,16.7,16.9,16.8] },
  dailyLoan: { months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], values: [10.8,11.0,11.2,11.5,11.6,11.8,11.9,12.0,12.2,12.1,12.3,12.5] }
}