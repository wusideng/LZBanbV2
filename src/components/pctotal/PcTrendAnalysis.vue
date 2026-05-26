<template>
  <div class="pc-trend">
    <div class="section-title">趋势分析</div>
    <div class="trend-row">
      <BaseChart :option="depOpt" height="100%" width="100%" />
      <BaseChart :option="loanOpt" height="100%" width="100%" />
      <BaseChart :option="dailyDepOpt" height="100%" width="100%" />
      <BaseChart :option="dailyLoanOpt" height="100%" width="100%" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalTrendData } from '@/mockData/totalData.js'
const td = totalTrendData

const make = (title, data, color) => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  title: { text: title, textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 26, left: 36, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: td.depositTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'line', data, smooth: true, symbol: 'none', lineStyle: { color, width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: color + '20' },{ offset: 1, color: color + '05' }] } } }]
})

const depOpt = computed(() => make('存款余额', td.depositTrend.values, '#FFD700'))
const loanOpt = computed(() => make('贷款余额', td.loanTrend.values, '#4FD8FF'))
const dailyDepOpt = computed(() => make('日均存款', td.dailyDeposit.values, '#00FFC6'))
const dailyLoanOpt = computed(() => make('日均贷款', td.dailyLoan.values, '#6C7BFF'))
</script>

<style lang="scss" scoped>
.pc-trend { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.trend-row { flex: 1; display: flex; gap: 8px; min-height: 0; padding: 0 16px 8px; }
</style>