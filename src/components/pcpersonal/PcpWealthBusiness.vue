<template>
  <div class="pcp-wealth">
    <div class="sec-title">财富业务区</div>
    <div class="wealth-grid">
      <div class="w-card"><span class="w-label">理财余额</span><span class="w-value">286.5<span class="w-unit">亿</span></span><span class="w-change up">↑ 8.6%</span></div>
      <div class="w-card"><span class="w-label">基金销量(月)</span><span class="w-value">12.8<span class="w-unit">亿</span></span><span class="w-change up">↑ 15.2%</span></div>
      <div class="w-card"><span class="w-label">保险销量(月)</span><span class="w-value">5.6<span class="w-unit">亿</span></span><span class="w-change up">↑ 22.5%</span></div>
      <div class="w-card"><span class="w-label">贵金属销量</span><span class="w-value">1.2<span class="w-unit">亿</span></span><span class="w-change up">↑ 35.8%</span></div>
    </div>
    <div class="sec-title">产品销量排行</div>
    <div class="prod-table">
      <div class="pt-header"><span class="pt-col rank">#</span><span class="pt-col name">产品名称</span><span class="pt-col num">销量</span><span class="pt-col num">增长</span><span class="pt-col">占比</span></div>
      <div class="pt-row" v-for="(p, i) in products" :key="p.name" :class="{ top3: i < 3 }">
        <span class="pt-col rank">{{ ['🥇','🥈','🥉'][i] || p.rank }}</span>
        <span class="pt-col name">{{ p.name }}</span>
        <span class="pt-col num">{{ p.amount }}<span class="unit">亿</span></span>
        <span class="pt-col num growth">{{ p.growth }}%</span>
        <span class="pt-col"><div class="bar"><div class="fill" :style="{ width: p.share + '%' }"></div></div></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  { rank: 1, name: '天天利理财', amount: '85.6', growth: 12.5, share: 35 },
  { rank: 2, name: '薪金宝货币', amount: '52.3', growth: 8.2, share: 22 },
  { rank: 3, name: '瑞鑫保险', amount: '28.5', growth: 22.5, share: 15 },
  { rank: 4, name: '黄金积存', amount: '18.6', growth: 35.8, share: 10 },
  { rank: 5, name: '基金定投', amount: '12.8', growth: 15.2, share: 8 },
  { rank: 6, name: '大额存单', amount: '8.5', growth: 5.6, share: 6 },
  { rank: 7, name: '结构性存款', amount: '5.2', growth: 3.8, share: 4 }
]
</script>

<style lang="scss" scoped>
.pcp-wealth { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
.sec-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 5px 12px 3px; letter-spacing: 1px; flex-shrink: 0; }
.wealth-grid { display: flex; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.w-card { flex: 1; text-align: center; padding: 5px 4px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .w-label { display: block; font-size: 12px; color: #4a5a6a; } .w-value { display: block; font-size: 18px; font-weight: 700; font-family: 'Courier New',monospace; color: #FFD700; .w-unit { font-size: 12px; color: #4a5a6a; } } .w-change { font-size: 12px; font-weight: 600; &.up { color: #4FD8FF; } } }
.prod-table { flex: 1; display: flex; flex-direction: column; padding: 0 8px 6px; min-height: 0; }
.pt-header { display: flex; padding: 2px 6px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid #1a2a4a; flex-shrink: 0; }
.pt-row { display: flex; padding: 3px 6px; font-size: 12px; color: #8899aa; border-bottom: 1px solid rgba(26,42,74,0.3); align-items: center; &.top3 { color: #e0e8f0; } }
.pt-col { flex: 1; &.rank { flex: 0 0 28px; text-align: center; } &.name { flex: 1.5; } &.num { flex: 0 0 55px; text-align: right; font-family: 'Courier New',monospace; font-size: 12px; &.growth { color: #4FD8FF; } } }
.unit { color: #4a5a6a; font-size: 11px; margin-left: 1px; }
.bar { height: 6px; background: #0a1a2a; border-radius: 3px; overflow: hidden; }
.fill { height: 100%; background: linear-gradient(90deg,#FFD700,#FFB347); border-radius: 3px; }
</style>