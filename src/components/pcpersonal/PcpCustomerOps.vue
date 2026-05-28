<template>
  <div class="pcp-customer">
    <div class="sec-title">客户经营区</div>
    <div class="metric-grid">
      <div class="m-card"><span class="m-label">个人客户总数</span><span class="m-value">328.6<span class="m-unit">万</span></span><span class="m-change up">↑ 5.8%</span></div>
      <div class="m-card"><span class="m-label">活跃客户数</span><span class="m-value">186.2<span class="m-unit">万</span></span><span class="m-change up">↑ 3.5%</span></div>
      <div class="m-card"><span class="m-label">本月新增</span><span class="m-value gold">28,500<span class="m-unit">户</span></span><span class="m-change up">↑ 8.2%</span></div>
      <div class="m-card"><span class="m-label">客户增长率</span><span class="m-value gold">8.6<span class="m-unit">%</span></span><span class="m-change up">↑ 1.2%</span></div>
      <div class="m-card"><span class="m-label">客户留存率</span><span class="m-value">92.5<span class="m-unit">%</span></span><span class="m-change up">↑ 0.8%</span></div>
      <div class="m-card"><span class="m-label">户均AUM</span><span class="m-value">26.1<span class="m-unit">万</span></span><span class="m-change up">↑ 3.2%</span></div>
    </div>
    <div class="sec-title">客户等级分布</div>
    <div class="level-table">
      <div class="lt-header"><span class="lt-col">等级</span><span class="lt-col num">户数</span><span class="lt-col num">占比</span><span class="lt-col">资产规模</span><span class="lt-col num">户均</span></div>
      <div class="lt-row" v-for="l in levels" :key="l.name">
        <span class="lt-col">{{ l.name }}</span>
        <span class="lt-col num">{{ l.count }}</span>
        <span class="lt-col num">{{ l.pct }}%</span>
        <span class="lt-col"><div class="bar"><div class="fill" :style="{ width: l.pct + '%' }" :style2="{ background: l.color }"></div></div></span>
        <span class="lt-col num">{{ l.avg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const levels = [
  { name: '普通客户', count: '158.0万', pct: 48.1, avg: '5.2万' },
  { name: '黄金客户', count: '68.5万', pct: 20.8, avg: '18.6万' },
  { name: '白金客户', count: '38.5万', pct: 11.7, avg: '45.2万' },
  { name: '钻石客户', count: '16.5万', pct: 5.0, avg: '128.5万' },
  { name: '私行客户', count: '4,800', pct: 1.5, avg: '856.2万' }
]
</script>

<style lang="scss" scoped>
.pcp-customer { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
.sec-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.m-card { padding: 5px 8px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .m-label { display: block; font-size: 12px; color: #4a5a6a; } .m-value { font-size: 18px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.gold { color: #FFD700; } .m-unit { font-size: 13px; color: #4a5a6a; } } .m-change { font-size: 12px; font-weight: 600; &.up { color: #4FD8FF; } } }
.level-table { flex: 1; display: flex; flex-direction: column; padding: 0 8px 6px; min-height: 0; }
.lt-header { display: flex; padding: 3px 6px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid #1a2a4a; flex-shrink: 0; }
.lt-row { display: flex; padding: 4px 6px; font-size: 13px; color: #8899aa; border-bottom: 1px solid rgba(26,42,74,0.3); align-items: center; }
.lt-col { flex: 1; &.num { flex: 0 0 60px; text-align: right; font-family: 'Courier New',monospace; font-size: 12px; } }
.bar { height: 6px; background: #0a1a2a; border-radius: 3px; overflow: hidden; }
.fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg,#4FD8FF,#6C7BFF); }
</style>