<template>
  <div class="pcp-value">
    <div class="sec-title">客户价值分析</div>
    <div class="value-cards">
      <div class="v-card big"><span class="v-label">AUM总规模</span><span class="v-value large">856.8<span class="v-unit">亿</span></span><span class="v-change up">↑ 6.2%</span></div>
      <div class="v-card"><span class="v-label">高净值客户</span><span class="v-value">21.3<span class="v-unit">万</span></span><span class="v-change up">↑ 9.8%</span></div>
      <div class="v-card"><span class="v-label">客户贡献度</span><span class="v-value">26.1<span class="v-unit">万/户</span></span><span class="v-change up">↑ 3.2%</span></div>
    </div>
    <div class="sec-title">客户分层统计</div>
    <div class="layer-table">
      <div class="lay-header"><span class="lay-col">层级</span><span class="lay-col num">客户数</span><span class="lay-col num">AUM(亿)</span><span class="lay-col num">占比</span></div>
      <div class="lay-row" v-for="l in layers" :key="l.name">
        <span class="lay-col">{{ l.name }}</span>
        <span class="lay-col num">{{ l.count }}</span>
        <span class="lay-col num">{{ l.aum }}</span>
        <span class="lay-col num">{{ l.share }}%</span>
      </div>
    </div>
    <div class="sec-title">客户贡献排行</div>
    <div class="contrib-list">
      <div class="ci-row" v-for="(c, i) in contributions" :key="c.name">
        <span class="ci-rank">{{ i + 1 }}</span>
        <span class="ci-bar"><div class="ci-fill" :style="{ width: c.pct + '%' }"></div></span>
        <span class="ci-val">{{ c.pct }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const layers = [
  { name: '私行', count: '4,800', aum: '856.2', share: 35.2 },
  { name: '钻石', count: '16.5万', aum: '285.6', share: 22.8 },
  { name: '白金', count: '38.5万', aum: '186.5', share: 18.5 },
  { name: '黄金', count: '68.5万', aum: '98.6', share: 15.2 },
  { name: '普通', count: '158.0万', aum: '52.3', share: 8.3 }
]
const contributions = [
  { name: '私行客户', pct: 35 }, { name: '钻石客户', pct: 23 },
  { name: '白金客户', pct: 18 }, { name: '黄金客户', pct: 15 },
  { name: '普通客户', pct: 9 }
]
</script>

<style lang="scss" scoped>
.pcp-value { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
.sec-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 5px 12px 3px; letter-spacing: 1px; flex-shrink: 0; }
.value-cards { display: flex; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.v-card { flex: 1; text-align: center; padding: 5px 4px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; &.big { background: rgba(255,215,0,0.05); border-color: rgba(255,215,0,0.2); } .v-label { display: block; font-size: 12px; color: #4a5a6a; } .v-value { display: block; font-size: 18px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.large { font-size: 22px; color: #FFD700; } .v-unit { font-size: 12px; color: #4a5a6a; } } .v-change { font-size: 12px; font-weight: 600; &.up { color: #4FD8FF; } } }
.layer-table { display: flex; flex-direction: column; padding: 0 8px; flex-shrink: 0; }
.lay-header { display: flex; padding: 2px 6px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid #1a2a4a; }
.lay-row { display: flex; padding: 2px 6px; font-size: 12px; color: #8899aa; border-bottom: 1px solid rgba(26,42,74,0.3); align-items: center; }
.lay-col { flex: 1; &.num { flex: 0 0 65px; text-align: right; font-family: 'Courier New',monospace; font-size: 12px; } }
.contrib-list { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0 12px 6px; gap: 3px; min-height: 0; }
.ci-row { display: flex; align-items: center; gap: 6px; }
.ci-rank { flex: 0 0 16px; font-size: 12px; color: #4a5a6a; font-weight: 600; }
.ci-bar { flex: 1; height: 8px; background: #0a1a2a; border-radius: 4px; overflow: hidden; }
.ci-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg,#4FD8FF,#6C7BFF); }
.ci-val { flex: 0 0 30px; text-align: right; font-size: 12px; color: #e0e8f0; font-family: 'Courier New',monospace; font-weight: 600; }
</style>