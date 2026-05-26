<template>
  <div class="pc-trend-chart">
    <div class="trend-half">
      <div class="section-title">存款趋势</div>
      <div class="trend-stats">
        <span class="ts-item"><span class="ts-label">当月</span><span class="ts-value">523.5亿</span></span>
        <span class="ts-item"><span class="ts-label">月增</span><span class="ts-value up">+1.2亿</span></span>
        <span class="ts-item"><span class="ts-label">同比</span><span class="ts-value up">+4.8%</span></span>
        <span class="ts-item"><span class="ts-label">日均</span><span class="ts-value">16.8亿</span></span>
      </div>
      <BaseChart :option="depOpt" height="100%" width="100%" />
    </div>
    <div class="trend-half">
      <div class="section-title">贷款趋势</div>
      <div class="trend-stats">
        <span class="ts-item"><span class="ts-label">当月</span><span class="ts-value">386.2亿</span></span>
        <span class="ts-item"><span class="ts-label">月增</span><span class="ts-value up">+0.8亿</span></span>
        <span class="ts-item"><span class="ts-label">同比</span><span class="ts-value up">+7.5%</span></span>
        <span class="ts-item"><span class="ts-label">日均</span><span class="ts-value">12.5亿</span></span>
      </div>
      <BaseChart :option="loanOpt" height="100%" width="100%" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalTrendData } from '@/mockData/totalData.js'
const td = totalTrendData

const depOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  grid: { top: 6, left: 36, right: 10, bottom: 16 },
  xAxis: { type: 'category', data: td.depositTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'line', data: td.depositTrend.values, smooth: false, symbol: 'circle', symbolSize: 4, lineStyle: { color: '#4FD8FF', width: 2 }, itemStyle: { color: '#4FD8FF' } }]
}))

const loanOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  grid: { top: 6, left: 36, right: 10, bottom: 16 },
  xAxis: { type: 'category', data: td.loanTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'line', data: td.loanTrend.values, smooth: false, symbol: 'circle', symbolSize: 4, lineStyle: { color: '#6C7BFF', width: 2 }, itemStyle: { color: '#6C7BFF' } }]
}))
</script>

<style lang="scss" scoped>
.pc-trend-chart { height: 100%; display: flex; gap: 8px; padding: 0 8px 6px; }
.trend-half { flex: 1; display: flex; flex-direction: column; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; padding: 4px 8px; }
.section-title { font-size: 14px; font-weight: 600; color: #e0e8f0; letter-spacing: 1px; flex-shrink: 0; }
.trend-stats { display: flex; gap: 8px; padding: 3px 0; flex-shrink: 0; border-bottom: 1px solid #1a2a4a; margin-bottom: 2px; }
.ts-item { flex: 1; text-align: center; .ts-label { display: block; font-size: 11px; color: #4a5a6a; } .ts-value { font-size: 15px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.up { color: #4FD8FF; } } }
</style>