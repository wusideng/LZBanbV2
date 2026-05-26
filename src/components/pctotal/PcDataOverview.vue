<template>
  <div class="pc-data-overview">
    <div class="section-title">经营数据总览</div>
    <div class="overview-grid">
      <!-- 今日数据 -->
      <div class="data-block">
        <div class="db-title">今日经营</div>
        <div class="db-row"><span class="db-label">存款净增</span><span class="db-value up">+1.2亿</span><span class="db-pct">完成率 65%</span></div>
        <div class="db-row"><span class="db-label">贷款净增</span><span class="db-value up">+0.8亿</span><span class="db-pct">完成率 58%</span></div>
        <div class="db-row"><span class="db-label">新增客户</span><span class="db-value up">+1,280户</span><span class="db-pct">完成率 72%</span></div>
        <div class="db-row"><span class="db-label">交易笔数</span><span class="db-value">12.6万笔</span><span class="db-pct">日均 11.2万</span></div>
      </div>
      <!-- 本月数据 -->
      <div class="data-block">
        <div class="db-title">本月累计</div>
        <div class="db-row"><span class="db-label">存款净增</span><span class="db-value up">+28.5亿</span><span class="db-pct">月目标 92%</span></div>
        <div class="db-row"><span class="db-label">贷款净增</span><span class="db-value up">+18.6亿</span><span class="db-pct">月目标 85%</span></div>
        <div class="db-row"><span class="db-label">新增客户</span><span class="db-value up">+28,500户</span><span class="db-pct">月目标 95%</span></div>
        <div class="db-row"><span class="db-label">中间业务收入</span><span class="db-value up">+8.6亿</span><span class="db-pct">月目标 78%</span></div>
      </div>
      <!-- 年度数据 -->
      <div class="data-block">
        <div class="db-title">年度累计</div>
        <div class="db-row"><span class="db-label">营业收入</span><span class="db-value up">56.8亿</span><span class="db-pct">年目标 68%</span></div>
        <div class="db-row"><span class="db-label">利润总额</span><span class="db-value up">18.6亿</span><span class="db-pct">年目标 72%</span></div>
        <div class="db-row"><span class="db-label">资产规模</span><span class="db-value up">1,256.8亿</span><span class="db-pct">较年初 +6.2%</span></div>
        <div class="db-row"><span class="db-label">ROA</span><span class="db-value up">1.48%</span><span class="db-pct">年目标 1.5%</span></div>
      </div>
    </div>
    <div class="section-title" style="margin-top:4px;">分行经营汇总</div>
    <div class="branch-table">
      <div class="bt-header">
        <span class="bt-col col-rank">排名</span>
        <span class="bt-col col-name">分行</span>
        <span class="bt-col col-num">存款(亿)</span>
        <span class="bt-col col-num">贷款(亿)</span>
        <span class="bt-col col-num">营收(亿)</span>
        <span class="bt-col col-num">增长率</span>
        <span class="bt-col col-num">完成率</span>
      </div>
      <div class="bt-body">
        <div v-for="(b, i) in branches" :key="b.rank" class="bt-row" :class="{ top3: i < 3 }">
          <span class="bt-col col-rank">{{ i < 3 ? ['🥇','🥈','🥉'][i] : b.rank }}</span>
          <span class="bt-col col-name">{{ b.name }}</span>
          <span class="bt-col col-num">{{ b.deposit }}</span>
          <span class="bt-col col-num">{{ b.loan }}</span>
          <span class="bt-col col-num">{{ b.revenue }}</span>
          <span class="bt-col col-num growth">{{ b.growth }}%</span>
          <span class="bt-col col-pct"><div class="pct-bar"><div class="pct-fill" :style="{ width: (b.rate / 100) * 100 + '%' }" :class="b.rate >= 90 ? 'good' : b.rate >= 70 ? 'normal' : 'warn'"></div></div><span class="pct-val">{{ b.rate }}%</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const branches = [
  { rank: 1, name: '兰州分行', deposit: '112.3', loan: '85.6', revenue: '8.2', growth: 12.5, rate: 98 },
  { rank: 2, name: '天水分行', deposit: '88.5', loan: '65.2', revenue: '6.5', growth: 10.8, rate: 92 },
  { rank: 3, name: '酒泉分行', deposit: '62.8', loan: '48.5', revenue: '4.8', growth: 9.2, rate: 86 },
  { rank: 4, name: '张掖分行', deposit: '52.6', loan: '38.2', revenue: '3.8', growth: 8.6, rate: 78 },
  { rank: 5, name: '庆阳分行', deposit: '42.8', loan: '32.5', revenue: '3.2', growth: 7.8, rate: 72 },
  { rank: 6, name: '武威分行', deposit: '35.6', loan: '26.8', revenue: '2.6', growth: 7.2, rate: 65 }
]
</script>

<style lang="scss" scoped>
.pc-data-overview { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.overview-grid { display: flex; gap: 6px; padding: 0 8px; flex-shrink: 0; }
.data-block { flex: 1; padding: 6px 10px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; }
.db-title { font-size: 14px; font-weight: 600; color: #e0e8f0; margin-bottom: 4px; padding-bottom: 3px; border-bottom: 1px solid #1a2a4a; }
.db-row { display: flex; align-items: center; padding: 3px 0; font-size: 13px; }
.db-label { flex: 0 0 70px; color: #4a5a6a; }
.db-value { flex: 0 0 70px; font-weight: 600; font-family: 'Courier New',monospace; color: #e0e8f0; &.up { color: #4FD8FF; } }
.db-pct { flex: 1; text-align: right; color: #4a5a6a; font-size: 12px; }
.branch-table { flex: 1; display: flex; flex-direction: column; padding: 0 8px 6px; min-height: 0; }
.bt-header { display: flex; padding: 4px 6px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid #1a2a4a; flex-shrink: 0; }
.bt-body { flex: 1; min-height: 0; overflow-y: auto; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: #1a2a4a; border-radius: 1px; } }
.bt-row { display: flex; padding: 4px 6px; font-size: 13px; color: #8899aa; border-bottom: 1px solid rgba(26,42,74,0.4); align-items: center; &.top3 { color: #e0e8f0; background: rgba(26,42,74,0.15); } }
.bt-col { &.col-rank { flex: 0 0 32px; text-align: center; } &.col-name { flex: 1; } &.col-num { flex: 0 0 72px; text-align: right; font-family: 'Courier New',monospace; font-size: 12px; &.growth { color: #4FD8FF; } } &.col-pct { flex: 0 0 80px; display: flex; align-items: center; gap: 4px; } }
.pct-bar { flex: 1; height: 6px; background: #0a1a2a; border-radius: 3px; overflow: hidden; }
.pct-fill { height: 100%; border-radius: 3px; &.good { background: #4FD8FF; } &.normal { background: #6C7BFF; } &.warn { background: #FF9F43; } }
.pct-val { font-size: 11px; color: #4a5a6a; font-family: 'Courier New',monospace; }
</style>