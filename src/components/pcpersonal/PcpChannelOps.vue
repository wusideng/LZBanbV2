<template>
  <div class="pcp-channel">
    <div class="sec-title">渠道运营区</div>
    <div class="data-matrix">
      <div class="dm-block"><span class="dm-title">手机银行</span><span class="dm-val">186.5<span class="dm-unit">万</span></span><span class="dm-label">开户数</span></div>
      <div class="dm-block"><span class="dm-title">月活用户</span><span class="dm-val">152.3<span class="dm-unit">万</span></span><span class="dm-label">MAU</span></div>
      <div class="dm-block"><span class="dm-title">月交易笔</span><span class="dm-val">3,856<span class="dm-unit">万</span></span><span class="dm-label">月交易</span></div>
      <div class="dm-block"><span class="dm-title">渠道转化率</span><span class="dm-val">72.5<span class="dm-unit">%</span></span><span class="dm-label">转化</span></div>
      <div class="dm-block"><span class="dm-title">日活跃率</span><span class="dm-val">38.6<span class="dm-unit">%</span></span><span class="dm-label">DAU/MAU</span></div>
      <div class="dm-block"><span class="dm-title">新增开户</span><span class="dm-val gold">28,500<span class="dm-unit">户</span></span><span class="dm-label">本月</span></div>
    </div>
    <div class="sec-title">渠道交易统计</div>
    <div class="ch-table">
      <div class="cht-header"><span class="cht-col">渠道</span><span class="cht-col num">交易金额</span><span class="cht-col num">交易笔数</span><span class="cht-col num">占比</span><span class="cht-col num">增长率</span></div>
      <div class="cht-row" v-for="c in channels" :key="c.name">
        <span class="cht-col">{{ c.name }}</span>
        <span class="cht-col num">{{ c.amount }}</span>
        <span class="cht-col num">{{ c.count }}</span>
        <span class="cht-col num">{{ c.share }}%</span>
        <span class="cht-col num growth">{{ c.growth }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const channels = [
  { name: '手机银行', amount: '286.5亿', count: '1,856万', share: 35.8, growth: 12.5 },
  { name: '企业网银', amount: '168.2亿', count: '856万', share: 21.0, growth: 8.2 },
  { name: '微信银行', amount: '125.6亿', count: '625万', share: 15.7, growth: 18.6 },
  { name: '网上银行', amount: '98.5亿', count: '385万', share: 12.3, growth: 5.2 },
  { name: '柜面', amount: '82.3亿', count: '186万', share: 10.3, growth: -2.5 },
  { name: '自助设备', amount: '38.5亿', count: '96万', share: 4.9, growth: -5.8 }
]
</script>

<style lang="scss" scoped>
.pcp-channel { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
.sec-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.data-matrix { display: flex; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.dm-block { flex: 1; text-align: center; padding: 6px 4px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .dm-title { display: block; font-size: 12px; color: #4a5a6a; } .dm-val { display: block; font-size: 20px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.gold { color: #FFD700; } .dm-unit { font-size: 13px; color: #4a5a6a; } } .dm-label { font-size: 12px; color: #4a5a6a; } }
.ch-table { flex: 1; display: flex; flex-direction: column; padding: 0 8px 6px; min-height: 0; }
.cht-header { display: flex; padding: 3px 6px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid #1a2a4a; flex-shrink: 0; }
.cht-row { display: flex; padding: 4px 6px; font-size: 13px; color: #8899aa; border-bottom: 1px solid rgba(26,42,74,0.3); align-items: center; }
.cht-col { flex: 1; &.num { flex: 0 0 80px; text-align: right; font-family: 'Courier New',monospace; font-size: 12px; &.growth { color: #4FD8FF; } } }
</style>