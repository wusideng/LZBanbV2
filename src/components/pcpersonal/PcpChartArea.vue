<template>
  <div class="pcp-chart-area">
    <div class="sec-title">经营趋势 <span class="sub">存款走势</span></div>
    <div class="chart-stats">
      <span class="cs-item"><span class="cs-label">当月</span><span class="cs-value">523.5亿</span></span>
      <span class="cs-item"><span class="cs-label">月增</span><span class="cs-value up">+1.2亿</span></span>
      <span class="cs-item"><span class="cs-label">同比</span><span class="cs-value up">+4.8%</span></span>
      <span class="cs-item"><span class="cs-label">日均</span><span class="cs-value">16.8亿</span></span>
    </div>
    <div class="chart-main"><BaseChart :option="chartOpt" height="100%" width="100%" /></div>
    <div class="sec-title" style="margin-top:2px;">高净值客户TOP5</div>
    <div class="top-row">
      <div class="top-item" v-for="(t, i) in topClients" :key="t.name" :class="{ first: i === 0 }">
        <span class="t-rank">{{ i + 1 }}</span>
        <span class="t-avatar">{{ t.name[0] }}</span>
        <span class="t-name">{{ t.name }}</span>
        <span class="t-asset">{{ t.asset }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalTrendData } from '@/mockData/totalData.js'

const topClients = [
  { name: '张明远', asset: '2,856万' },
  { name: '李慧芳', asset: '2,256万' },
  { name: '王建国', asset: '1,886万' },
  { name: '陈嘉华', asset: '1,652万' },
  { name: '刘玉琴', asset: '1,286万' }
]

const chartOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 11 } },
  grid: { top: 6, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: totalTrendData.depositTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data: totalTrendData.depositTrend.values, smooth: false, symbol: 'circle', symbolSize: 3, lineStyle: { color: '#4FD8FF', width: 2 }, itemStyle: { color: '#4FD8FF' } }]
}))
</script>

<style lang="scss" scoped>
.pcp-chart-area { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
.sec-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 2px; letter-spacing: 1px; flex-shrink: 0; .sub { font-size: 12px; color: #4a5a6a; margin-left: 6px; } }
.chart-stats { display: flex; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.cs-item { flex: 1; text-align: center; padding: 2px 0; .cs-label { display: block; font-size: 11px; color: #4a5a6a; } .cs-value { font-size: 15px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.up { color: #4FD8FF; } } }
.chart-main { flex: 1; min-height: 0; padding: 0 8px; }
.top-row { display: flex; gap: 4px; padding: 2px 8px 6px; flex-shrink: 0; }
.top-item { flex: 1; display: flex; align-items: center; gap: 3px; padding: 3px 6px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; &.first { border-color: rgba(255,215,0,0.3); } }
.t-rank { flex: 0 0 16px; font-size: 12px; font-weight: 700; color: #FFD700; }
.t-avatar { width: 20px; height: 20px; background: #1a2a4a; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #8899aa; flex-shrink: 0; }
.t-name { flex: 1; font-size: 12px; color: #e0e8f0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.t-asset { font-size: 12px; font-family: 'Courier New',monospace; color: #4FD8FF; font-weight: 600; }
</style>