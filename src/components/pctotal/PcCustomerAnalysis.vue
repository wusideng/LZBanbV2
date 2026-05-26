<template>
  <div class="pc-customer">
    <div class="section-title">客户经营分析</div>
    <div class="metrics-row">
      <div class="metric"><span class="m-label">总客户</span><span class="m-value">{{ cd.totalCustomers }}万</span></div>
      <div class="metric"><span class="m-label">新增</span><span class="m-value gold">{{ cd.newCustomers }}万</span></div>
      <div class="metric"><span class="m-label">活跃</span><span class="m-value">{{ cd.activeCustomers }}万</span></div>
      <div class="metric"><span class="m-label">AUM</span><span class="m-value">{{ cd.aumScale }}亿</span></div>
      <div class="metric"><span class="m-label">增长率</span><span class="m-value gold">{{ cd.growthRate }}%</span></div>
    </div>
    <div class="charts-col">
      <BaseChart :option="growthOpt" height="100%" width="100%" />
    </div>
    <div class="charts-row">
      <BaseChart :option="structOpt" height="100%" width="100%" />
      <BaseChart :option="aumOpt" height="100%" width="100%" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalCustomerData } from '@/mockData/totalData.js'
const cd = totalCustomerData

const growthOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  title: { text: '客户增长趋势', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 26, left: 36, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: cd.customerTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'line', data: cd.customerTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#4FD8FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(79,216,255,0.2)' },{ offset: 1, color: 'rgba(79,216,255,0.02)' }] } } }]
}))

const structOpt = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 }, formatter: '{b}: {c}万 ({d}%)' },
  title: { text: '客户结构', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  series: [{ type: 'pie', radius: ['35%','55%'], center: ['50%','55%'], data: cd.customerStructure.map(d => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })), label: { color: '#8899aa', fontSize: 11, formatter: '{b}' }, labelLine: { lineStyle: { color: '#1a2a4a' } }, itemStyle: { borderRadius: 0 }, animationDuration: 800 }]
}))

const aumOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  title: { text: 'AUM趋势', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 26, left: 36, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: cd.aumTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'line', data: cd.aumTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#FFD700', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,215,0,0.15)' },{ offset: 1, color: 'rgba(255,215,0,0.01)' }] } } }]
}))
</script>

<style lang="scss" scoped>
.pc-customer { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 8px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.metrics-row { display: flex; gap: 4px; padding: 0 8px 4px; flex-shrink: 0; }
.metric { flex: 1; text-align: center; padding: 4px 2px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .m-label { display: block; font-size: 12px; color: #4a5a6a; } .m-value { font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; color: #4FD8FF; &.gold { color: #FFD700; } } }
.charts-col, .charts-row { flex: 1; min-height: 0; padding: 0 8px 4px; }
.charts-row { display: flex; gap: 8px; flex: 0 0 48%; }
</style>