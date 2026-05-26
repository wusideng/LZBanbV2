<template>
  <div class="pc-overview">
    <div class="section-title">经营总览分析</div>
    <div class="metrics-row">
      <div class="metric"><span class="m-label">存款余额</span><span class="m-value">{{ td.depositTrend.values[11] }}亿</span><span class="m-change up">↑ 2.1%</span></div>
      <div class="metric"><span class="m-label">贷款余额</span><span class="m-value">{{ td.loanTrend.values[11] }}亿</span><span class="m-change up">↑ 3.5%</span></div>
      <div class="metric"><span class="m-label">存贷比</span><span class="m-value">{{ td.depositLoanRatio.values[11] }}%</span><span class="m-change up">↑ 0.3%</span></div>
      <div class="metric"><span class="m-label">日均存款</span><span class="m-value">{{ td.dailyDeposit.values[11] }}亿</span><span class="m-change up">↑ 0.5%</span></div>
      <div class="metric"><span class="m-label">日均贷款</span><span class="m-value">{{ td.dailyLoan.values[11] }}亿</span><span class="m-change up">↑ 0.8%</span></div>
    </div>
    <div class="chart-main">
      <BaseChart :option="mainOpt" height="100%" width="100%" />
    </div>
    <div class="charts-row">
      <BaseChart :option="ratioOpt" height="100%" width="100%" />
      <div class="health-panel">
        <div class="hp-title">经营健康</div>
        <div class="hp-value">{{ healthData.healthIndex }}<span class="hp-unit">分</span></div>
        <div class="hp-metrics">
          <div class="hp-item"><span class="hp-label">成本收入比</span><span class="hp-val">{{ healthData.costIncomeRatio }}%</span></div>
          <div class="hp-item"><span class="hp-label">存贷比</span><span class="hp-val">{{ healthData.depositLoanRatio }}%</span></div>
          <div class="hp-item"><span class="hp-label">收益率</span><span class="hp-val">{{ healthData.yield }}%</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalTrendData, totalMapData } from '@/mockData/totalData.js'
const td = totalTrendData
const healthData = totalMapData

const mainOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  legend: { data: ['存款余额','贷款余额'], textStyle: { color: '#8899aa', fontSize: 12 }, top: 0, right: 10 },
  title: { text: '存贷款趋势', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 28, left: 40, right: 10, bottom: 16 },
  xAxis: { type: 'category', data: td.depositTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [
    { name: '存款余额', type: 'line', data: td.depositTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#FFD700', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,215,0,0.15)' },{ offset: 1, color: 'rgba(255,215,0,0.01)' }] } } },
    { name: '贷款余额', type: 'line', data: td.loanTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#4FD8FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(79,216,255,0.15)' },{ offset: 1, color: 'rgba(79,216,255,0.01)' }] } } }
  ]
}))

const ratioOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  title: { text: '存贷比趋势', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 26, left: 36, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: td.depositLoanRatio.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'line', data: td.depositLoanRatio.values, smooth: true, symbol: 'none', lineStyle: { color: '#00FFC6', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,255,198,0.15)' },{ offset: 1, color: 'rgba(0,255,198,0.01)' }] } } }]
}))
</script>

<style lang="scss" scoped>
.pc-overview { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 8px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.metrics-row { display: flex; gap: 4px; padding: 0 8px 4px; flex-shrink: 0; }
.metric { flex: 1; text-align: center; padding: 4px 2px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .m-label { display: block; font-size: 12px; color: #4a5a6a; } .m-value { font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; color: #FFD700; } .m-change { font-size: 12px; font-weight: 600; display: block; &.up { color: #4FD8FF; } } }
.chart-main { flex: 1; min-height: 0; padding: 0 8px 2px; }
.charts-row { flex: 0 0 44%; display: flex; gap: 8px; min-height: 0; padding: 0 8px 6px; }
.health-panel { flex: 1; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.hp-title { font-size: 13px; color: #4a5a6a; }
.hp-value { font-size: 32px; font-weight: 700; color: #FFD700; font-family: 'Courier New',monospace; .hp-unit { font-size: 14px; color: #4a5a6a; } }
.hp-metrics { display: flex; gap: 12px; margin-top: 4px; }
.hp-item { text-align: center; .hp-label { display: block; font-size: 12px; color: #4a5a6a; } .hp-val { font-size: 14px; font-weight: 600; color: #e0e8f0; font-family: 'Courier New',monospace; } }
</style>