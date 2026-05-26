<template>
  <div class="pc-branch">
    <div class="section-title">机构经营分析</div>
    <div class="metrics-row">
      <div class="metric"><span class="m-label">TOP1</span><span class="m-value gold">{{ bd.profitRanking[0].name }}</span><span class="m-sub">{{ bd.profitRanking[0].profit }}亿</span></div>
      <div class="metric"><span class="m-label">TOP2</span><span class="m-value">{{ bd.profitRanking[1].name }}</span><span class="m-sub">{{ bd.profitRanking[1].profit }}亿</span></div>
      <div class="metric"><span class="m-label">TOP3</span><span class="m-value">{{ bd.profitRanking[2].name }}</span><span class="m-sub">{{ bd.profitRanking[2].profit }}亿</span></div>
      <div class="metric"><span class="m-label">平均增长</span><span class="m-value up">7.8%</span></div>
    </div>
    <div class="chart-main">
      <BaseChart :option="chartOpt" height="100%" width="100%" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalBranchData } from '@/mockData/totalData.js'
const bd = totalBranchData

const chartOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  title: { text: '利润贡献TOP10', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 26, left: 60, right: 10, bottom: 8 },
  xAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  yAxis: { type: 'category', data: bd.profitRanking.map(d => d.name).reverse(), axisLabel: { color: '#8899aa', fontSize: 12 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  series: [{ type: 'bar', data: bd.profitRanking.map(d => ({ value: d.profit, itemStyle: { color: d.rank <= 3 ? '#FFD700' : (d.rank <= 5 ? '#4FD8FF' : '#1a3a5a') } })).reverse(), barWidth: 14, label: { show: true, position: 'right', color: '#e0e8f0', fontSize: 12, fontFamily: 'Courier New, monospace', formatter: p => p.value.toFixed(1) + '亿' }, itemStyle: { borderRadius: 0 } }]
}))
</script>

<style lang="scss" scoped>
.pc-branch { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 8px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.metrics-row { display: flex; gap: 4px; padding: 0 8px 4px; flex-shrink: 0; }
.metric { flex: 1; text-align: center; padding: 4px 2px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .m-label { display: block; font-size: 12px; color: #4a5a6a; } .m-value { font-size: 15px; font-weight: 700; font-family: 'Courier New',monospace; color: #4FD8FF; &.gold { color: #FFD700; } &.up { color: #4FD8FF; } } .m-sub { display: block; font-size: 12px; color: #4a5a6a; } }
.chart-main { flex: 1; min-height: 0; padding: 0 8px 6px; }
</style>