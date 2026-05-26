<template>
  <div class="total-branch">
    <div class="section-title"><span class="gold">✦</span> 机构经营分析</div>
    <div class="branch-content">
      <div class="chart-box">
        <div class="c-label">TOP10利润贡献 <span class="sub">(亿)</span></div>
        <BaseChart :option="chartOpt" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalBranchData } from '@/mockData/totalData.js'
const bd = totalBranchData

const chartOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 55, right: 10, bottom: 8 },
  xAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(255,215,0,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  yAxis: { type: 'category', data: bd.profitRanking.map(d => d.name).reverse(), axisLabel: { color: '#8899aa', fontSize: 13 }, axisLine: { lineStyle: { color: 'rgba(255,215,0,0.08)' } }, axisTick: { show: false } },
  series: [{ type: 'bar', data: bd.profitRanking.map(d => ({ value: d.profit, itemStyle: { color: d.rank <= 3 ? '#FFD700' : (d.rank <= 5 ? '#4FD8FF' : 'rgba(79,216,255,0.4)') } })).reverse(), barWidth: 14, label: { show: true, position: 'right', color: '#e0e8f0', fontSize: 12, fontFamily: 'Courier New, monospace', formatter: p => p.value.toFixed(1) + '亿' }, itemStyle: { borderRadius: [0,3,3,0] } }]
}))
</script>

<style lang="scss" scoped>
.total-branch { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 2px; letter-spacing: 2px; flex-shrink: 0; .gold { color: #FFD700; margin-right: 4px; } }
.branch-content { flex: 1; padding: 4px 8px 8px; min-height: 0; }
.chart-box { height: 100%; position: relative; }
.c-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; .sub { color: #6a7a8a; font-size: 11px; } }
</style>