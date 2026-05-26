<template>
  <div class="total-trend">
    <div class="section-title"><span class="gold">✦</span> 经营趋势分析 <span class="sub">DEPOSIT & LOAN TREND</span></div>
    <div class="trend-content">
      <div class="chart-box"><div class="c-label">存款余额趋势</div><BaseChart :option="depositOpt" height="100%" width="100%" /></div>
      <div class="chart-box"><div class="c-label">贷款余额趋势</div><BaseChart :option="loanOpt" height="100%" width="100%" /></div>
      <div class="chart-box"><div class="c-label">存贷比趋势 <span class="sub">(%)</span></div><BaseChart :option="ratioOpt" height="100%" width="100%" /></div>
      <div class="chart-box"><div class="c-label">日均趋势</div><BaseChart :option="dailyOpt" height="100%" width="100%" /></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalTrendData } from '@/mockData/totalData.js'
const td = totalTrendData

const makeOpt = (data, color) => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: td.depositTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(255,215,0,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(255,215,0,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data, smooth: true, symbol: 'none', lineStyle: { color, width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: color + '33' },{ offset: 1, color: color + '05' }] } } }]
})

const depositOpt = computed(() => makeOpt(td.depositTrend.values, '#FFD700'))
const loanOpt = computed(() => makeOpt(td.loanTrend.values, '#4FD8FF'))
const ratioOpt = computed(() => makeOpt(td.depositLoanRatio.values, '#00FFC6'))
const dailyOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  legend: { data: ['日均存款','日均贷款'], textStyle: { color: '#8899aa', fontSize: 11 }, top: 0, right: 0 },
  grid: { top: 22, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: td.dailyDeposit.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(255,215,0,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(255,215,0,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [
    { name: '日均存款', type: 'line', data: td.dailyDeposit.values, smooth: true, symbol: 'none', lineStyle: { color: '#FFD700', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,215,0,0.25)' },{ offset: 1, color: 'rgba(255,215,0,0.01)' }] } } },
    { name: '日均贷款', type: 'line', data: td.dailyLoan.values, smooth: true, symbol: 'none', lineStyle: { color: '#4FD8FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(79,216,255,0.2)' },{ offset: 1, color: 'rgba(79,216,255,0.01)' }] } } }
  ]
}))
</script>

<style lang="scss" scoped>
.total-trend { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 2px; letter-spacing: 2px; flex-shrink: 0; .gold { color: #FFD700; margin-right: 4px; } .sub { font-size: 13px; color: rgba(255,215,0,0.2); letter-spacing: 3px; margin-left: 6px; } }
.trend-content { flex: 1; display: flex; gap: 8px; padding: 2px 8px 8px; min-height: 0; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.c-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; .sub { color: #6a7a8a; font-size: 11px; } }
</style>