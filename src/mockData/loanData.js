// ===== 个贷与消费金融驾驶舱 Mock数据 =====

// 贷款核心KPI数据
export const loanKpiData = [
  {
    id: 1,
    label: '贷款总余额',
    value: 386.2,
    unit: '亿',
    change: 7.5,
    daily: 1.8,
    monthly: 28.6,
    sparkData: [360, 365, 370, 368, 375, 380, 378, 385, 388, 382, 390, 386.2]
  },
  {
    id: 2,
    label: '房贷余额',
    value: 168.5,
    unit: '亿',
    change: 4.2,
    daily: 0.6,
    monthly: 9.8,
    sparkData: [160, 162, 161, 163, 165, 166, 164, 167, 168, 167, 169, 168.5]
  },
  {
    id: 3,
    label: '消费贷余额',
    value: 98.6,
    unit: '亿',
    change: 12.8,
    daily: 0.8,
    monthly: 12.5,
    sparkData: [85, 88, 90, 92, 93, 95, 94, 96, 97, 97.5, 98.2, 98.6]
  },
  {
    id: 4,
    label: '信用贷余额',
    value: 72.3,
    unit: '亿',
    change: 15.6,
    daily: 0.5,
    monthly: 8.2,
    sparkData: [60, 62, 64, 65, 67, 68, 69, 70, 70.5, 71, 71.8, 72.3]
  },
  {
    id: 5,
    label: '经营贷余额',
    value: 46.8,
    unit: '亿',
    change: -2.3,
    daily: -0.1,
    monthly: -0.8,
    sparkData: [48, 47.5, 47.8, 47.2, 47, 46.5, 46.8, 46.5, 46.2, 46.5, 46.6, 46.8]
  }
]

// 放款核心中枢数据
export const loanCenterData = {
  totalBalance: 386.2,
  totalChange: 7.5,
  dailyNew: 1.8,
  monthlyNew: 28.6,
  loanUsers: 286500,
  avgLoanPerUser: 13.5,
  growthIndex: 86.5,
  // 放款结构
  loanStructure: [
    { name: '房贷', value: 168.5, color: '#FF8A34' },
    { name: '消费贷', value: 98.6, color: '#00CFFF' },
    { name: '信用贷', value: 72.3, color: '#FFB347' },
    { name: '经营贷', value: 46.8, color: '#33D1FF' }
  ],
  // 产品投放热度
  productHeat: [
    { name: '百合随意贷', value: 95 },
    { name: '综合消费贷', value: 82 },
    { name: '住房贷', value: 68 },
    { name: '信用贷', value: 75 },
    { name: '经营贷', value: 45 }
  ],
  // 放款增长趋势
  loanTrend: {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    values: [320, 335, 340, 348, 355, 362, 365, 370, 375, 378, 382, 386.2]
  },
  // 雷达图指标
  radarData: {
    indicators: ['贷款规模', '放款能力', '客户覆盖', '收益贡献', '增长潜力'],
    current: [92, 88, 85, 78, 86],
    last: [80, 82, 78, 72, 75]
  }
}

// 客户经营数据
export const loanCustomerData = {
  totalCustomers: 286500,
  customerChange: 8.6,
  avgLoan: 13.5,
  avgLoanChange: 3.2,
  newCredit: 32500,
  newCreditChange: 12.5,
  // 客户增长趋势
  customerTrend: {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    newUsers: [18000, 16000, 22000, 20000, 25000, 24000, 23000, 26000, 24000, 28000, 26000, 28500],
    totalUsers: [220, 236, 248, 260, 275, 288, 298, 310, 322, 336, 350, 286.5]
  },
  // 授信漏斗
  funnelData: [
    { name: '申请授信', value: 58500 },
    { name: '通过审批', value: 42500 },
    { name: '已签约', value: 38000 },
    { name: '已授信', value: 32500 },
    { name: '已放款', value: 26800 }
  ],
  // 客户等级分布
  customerLevels: [
    { name: '普通客户', value: 158000 },
    { name: '黄金客户', value: 68500 },
    { name: '白金客户', value: 38500 },
    { name: '钻石客户', value: 16500 },
    { name: '私行客户', value: 4800 }
  ]
}

// 风险质量数据
export const loanRiskData = {
  nonPerformingRate: 1.26,
  npRateChange: -0.08,
  overdueRate: 2.35,
  odRateChange: -0.12,
  riskMigration: 3.8,
  riskMigrationChange: -0.5,
  riskClientRatio: 5.2,
  riskClientChange: -0.3,
  // 风险雷达图
  riskRadar: {
    indicators: ['不良率', '逾期率', '迁徙率', '关注类占比', '损失率'],
    current: [1.26, 2.35, 3.8, 4.2, 0.85],
    max: [5, 8, 10, 10, 3]
  },
  // 风险热力图(各产品)
  riskHeatmap: [
    { name: '房贷', normal: 95.2, concern: 3.5, secondary: 0.8, suspicious: 0.3, loss: 0.2 },
    { name: '消费贷', normal: 93.5, concern: 4.2, secondary: 1.2, suspicious: 0.6, loss: 0.5 },
    { name: '信用贷', normal: 91.8, concern: 5.0, secondary: 1.8, suspicious: 0.8, loss: 0.6 },
    { name: '经营贷', normal: 94.0, concern: 3.8, secondary: 1.0, suspicious: 0.7, loss: 0.5 }
  ],
  // 风险分类
  riskCategories: [
    { name: '正常', value: 93.8, color: '#00FFC6' },
    { name: '关注', value: 3.6, color: '#FFB347' },
    { name: '次级', value: 1.2, color: '#FF8A34' },
    { name: '可疑', value: 0.8, color: '#FF5B5B' },
    { name: '损失', value: 0.6, color: '#FF2D2D' }
  ],
  // 风险告警
  alerts: [
    { id: 1, level: 'high', product: '信用贷', branch: '白银分行', value: '逾期率4.8%', time: '2分钟前', desc: '信用贷逾期率超过预警阈值' },
    { id: 2, level: 'medium', product: '消费贷', branch: '庆阳分行', value: '迁徙率上升1.2%', time: '5分钟前', desc: '消费贷关注类向次级迁徙加快' },
    { id: 3, level: 'high', product: '经营贷', branch: '武威分行', value: '不良率3.2%', time: '8分钟前', desc: '经营贷不良率超过警戒线' },
    { id: 4, level: 'low', product: '房贷', branch: '天水分行', value: '关注类占比4.5%', time: '12分钟前', desc: '房贷关注类占比略有上升' },
    { id: 5, level: 'medium', product: '信用贷', branch: '张掖分行', value: '高风险客户新增15户', time: '15分钟前', desc: '信用贷高风险客户数量增加' },
    { id: 6, level: 'high', product: '消费贷', branch: '酒泉分行', value: '损失率0.8%', time: '20分钟前', desc: '消费贷损失率突破警戒线' },
    { id: 7, level: 'low', product: '经营贷', branch: '临夏分行', value: '逾期率3.5%', time: '25分钟前', desc: '经营贷逾期率小幅上升' },
    { id: 8, level: 'medium', product: '房贷', branch: '金昌分行', value: '风险客户占比6.2%', time: '30分钟前', desc: '房贷风险客户占比上升' }
  ]
}

// 放款经营数据
export const loanOperationsData = {
  newLoan: 28.6,
  newLoanChange: 12.5,
  dailyLoan: 1.8,
  // 放款趋势
  loanTrend: {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    values: [18, 16, 22, 20, 24, 23, 22, 26, 24, 27, 25, 28.6]
  },
  // 机构放款排名
  branchRanking: [
    { rank: 1, branch: '兰州分行', loanAmount: 85.6, newLoan: 6.8, growth: 12.5, share: 22.2 },
    { rank: 2, branch: '天水分行', loanAmount: 65.2, newLoan: 5.2, growth: 10.8, share: 16.9 },
    { rank: 3, branch: '酒泉分行', loanAmount: 48.5, newLoan: 3.8, growth: 9.2, share: 12.6 },
    { rank: 4, branch: '张掖分行', loanAmount: 38.2, newLoan: 3.2, growth: 8.6, share: 9.9 },
    { rank: 5, branch: '庆阳分行', loanAmount: 32.5, newLoan: 2.6, growth: 7.8, share: 8.4 },
    { rank: 6, branch: '武威分行', loanAmount: 26.8, newLoan: 2.1, growth: 7.2, share: 6.9 },
    { rank: 7, branch: '白银分行', loanAmount: 22.5, newLoan: 1.8, growth: 6.5, share: 5.8 },
    { rank: 8, branch: '临夏分行', loanAmount: 16.8, newLoan: 1.3, growth: 5.8, share: 4.4 },
    { rank: 9, branch: '金昌分行', loanAmount: 12.5, newLoan: 1.0, growth: 5.2, share: 3.2 },
    { rank: 10, branch: '嘉峪关分行', loanAmount: 10.2, newLoan: 0.8, growth: 4.5, share: 2.6 }
  ],
  // 产品投放结构
  productStructure: [
    { name: '百合随意贷', value: 42.5, color: '#FF8A34' },
    { name: '综合消费贷', value: 35.8, color: '#00CFFF' },
    { name: '住房贷', value: 28.6, color: '#FFB347' },
    { name: '信用贷', value: 22.3, color: '#33D1FF' },
    { name: '经营贷', value: 18.6, color: '#4FD8FF' }
  ],
  // 放款流向(按月)
  loanFlow: {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    房贷: [12, 11, 13, 12, 14, 13, 12, 14, 13, 14, 13, 14.5],
    消费贷: [8, 7, 9, 10, 11, 11, 12, 13, 12, 13, 13, 14],
    信用贷: [5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10.5],
    经营贷: [3, 3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3.5]
  }
}

// 产品经营数据
export const loanProductData = [
  {
    id: 1,
    name: '百合随意贷',
    balance: 42.5,
    newAdded: 5.8,
    growth: 15.8,
    interestRate: 5.8,
    users: 68500,
    riskLevel: 'low',
    hot: 95
  },
  {
    id: 2,
    name: '综合消费贷',
    balance: 35.8,
    newAdded: 4.5,
    growth: 14.2,
    interestRate: 6.2,
    users: 52500,
    riskLevel: 'low',
    hot: 88
  },
  {
    id: 3,
    name: '住房贷',
    balance: 168.5,
    newAdded: 8.6,
    growth: 5.8,
    interestRate: 4.5,
    users: 86500,
    riskLevel: 'low',
    hot: 72
  },
  {
    id: 4,
    name: '信用贷',
    balance: 72.3,
    newAdded: 6.2,
    growth: 18.5,
    interestRate: 7.2,
    users: 45600,
    riskLevel: 'medium',
    hot: 82
  },
  {
    id: 5,
    name: '经营贷',
    balance: 46.8,
    newAdded: 3.5,
    growth: -2.3,
    interestRate: 5.2,
    users: 28500,
    riskLevel: 'medium',
    hot: 45
  }
]

// 实时监控数据
export const realtimeLoanData = {
  realtimeLoan: 286.5,
  realtimeCredit: 425.8,
  loanPeak: 528.6,
  highRiskClients: 186,
  todayLoanCount: 568,
  todayCreditCount: 328
}

// 实时告警消息
export const loanAlerts = [
  { id: 1, level: 'high', message: '信用贷逾期率4.8% - 白银分行，超过预警阈值', time: '刚刚' },
  { id: 2, level: 'medium', message: '消费贷迁徙率上升1.2% - 庆阳分行，关注类向次级迁徙加快', time: '2分钟前' },
  { id: 3, level: 'high', message: '经营贷不良率3.2% - 武威分行，超过警戒线', time: '5分钟前' },
  { id: 4, level: 'low', message: '房贷关注类占比4.5% - 天水分行，略有上升', time: '8分钟前' },
  { id: 5, level: 'medium', message: '信用贷高风险客户新增15户 - 张掖分行', time: '12分钟前' },
  { id: 6, level: 'high', message: '消费贷损失率0.8% - 酒泉分行，突破警戒线', time: '15分钟前' },
  { id: 7, level: 'low', message: '经营贷逾期率3.5% - 临夏分行，小幅上升', time: '20分钟前' },
  { id: 8, level: 'medium', message: '房贷风险客户占比6.2% - 金昌分行', time: '25分钟前' }
]

// 实时放款消息
export const realtimeLoanMessages = [
  {
    id: 1, branch: '兰州分行', product: '百合随意贷', amount: 58, unit: '万', customer: '张伟',
    term: '12期', rate: '5.8%', status: '放款成功', time: '刚刚'
  },
  {
    id: 2, branch: '手机银行', product: '综合消费贷', amount: 28, unit: '万', customer: '李娜',
    term: '24期', rate: '6.2%', status: '放款成功', time: '30秒前'
  },
  {
    id: 3, branch: '天水分行', product: '住房贷', amount: 120, unit: '万', customer: '王强',
    term: '360期', rate: '4.5%', status: '放款成功', time: '1分钟前'
  },
  {
    id: 4, branch: '酒泉分行', product: '信用贷', amount: 15, unit: '万', customer: '赵明',
    term: '36期', rate: '7.2%', status: '审核中', time: '1.5分钟前'
  },
  {
    id: 5, branch: '张掖分行', product: '经营贷', amount: 85, unit: '万', customer: '陈芳',
    term: '60期', rate: '5.2%', status: '放款成功', time: '2分钟前'
  },
  {
    id: 6, branch: '庆阳分行', product: '百合随意贷', amount: 35, unit: '万', customer: '刘洋',
    term: '12期', rate: '5.8%', status: '放款成功', time: '2.5分钟前'
  },
  {
    id: 7, branch: '武威分行', product: '综合消费贷', amount: 20, unit: '万', customer: '孙丽',
    term: '24期', rate: '6.2%', status: '审核中', time: '3分钟前'
  },
  {
    id: 8, branch: '手机银行', product: '信用贷', amount: 10, unit: '万', customer: '周斌',
    term: '36期', rate: '7.2%', status: '放款成功', time: '3.5分钟前'
  }
]

export function generateMockLoanRealtime() {
  const branches = ['兰州分行', '天水分行', '酒泉分行', '张掖分行', '庆阳分行', '武威分行', '白银分行', '手机银行']
  const products = ['百合随意贷', '综合消费贷', '住房贷', '信用贷', '经营贷']
  const customers = ['张伟', '李娜', '王强', '赵明', '陈芳', '刘洋', '孙丽', '周斌']
  const product = products[Math.floor(Math.random() * products.length)]
  const amountRanges = { '百合随意贷': [10, 80], '综合消费贷': [5, 50], '住房贷': [50, 200], '信用贷': [5, 30], '经营贷': [20, 150] }
  const range = amountRanges[product]
  const amount = Math.floor(Math.random() * (range[1] - range[0]) + range[0])
  const rates = { '百合随意贷': '5.8%', '综合消费贷': '6.2%', '住房贷': '4.5%', '信用贷': '7.2%', '经营贷': '5.2%' }
  const terms = { '百合随意贷': '12期', '综合消费贷': '24期', '住房贷': '360期', '信用贷': '36期', '经营贷': '60期' }
  return {
    id: Date.now(),
    branch: branches[Math.floor(Math.random() * branches.length)],
    product,
    amount,
    unit: '万',
    customer: customers[Math.floor(Math.random() * customers.length)],
    term: terms[product],
    rate: rates[product],
    status: Math.random() > 0.25 ? '放款成功' : '审核中',
    time: '刚刚'
  }
}

export function generateMockAlert() {
  const levels = ['high', 'medium', 'low']
  const products = ['信用贷', '消费贷', '经营贷', '房贷']
  const branches = ['白银分行', '庆阳分行', '武威分行', '张掖分行', '酒泉分行', '临夏分行', '金昌分行', '天水分行']
  const p = products[Math.floor(Math.random() * products.length)]
  const b = branches[Math.floor(Math.random() * branches.length)]
  const l = levels[Math.floor(Math.random() * levels.length)]
  const messages = {
    high: `高风险告警 - ${p} - ${b}，需立即关注`,
    medium: `风险提示 - ${p} - ${b}，请持续监控`,
    low: `预警信息 - ${p} - ${b}，请留意变化`
  }
  return {
    id: Date.now(),
    level: l,
    message: messages[l],
    time: '刚刚'
  }
}