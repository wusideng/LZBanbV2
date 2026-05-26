<template>
  <div class="total-customer">
    <div class="section-title"><span class="gold">✦</span> 客户经营分析</div>
    <div class="customer-metrics">
      <div class="cm-card"><span class="cm-label">总客户数</span><span class="cm-value">{{ cd.totalCustomers }}<span class="cm-unit">万</span></span></div>
      <div class="cm-card"><span class="cm-label">新增客户</span><span class="cm-value gold">{{ cd.newCustomers }}<span class="cm-unit">万</span></span></div>
      <div class="cm-card"><span class="cm-label">活跃客户</span><span class="cm-value">{{ cd.activeCustomers }}<span class="cm-unit">万</span></span></div>
      <div class="cm-card"><span class="cm-label">AUM规模</span><span class="cm-value">{{ cd.aumScale }}<span class="cm-unit">亿</span></span></div>
    </div>
    <div class="charts-col">
      <div class="chart-box"><div class="c-label">客户增长趋势</div><BaseChart :option="growthOpt" height="100%" width="100%" /></div>
      <div class="chart-box"><div class="c-label">客户结构 <span class="sub">占比</span></div><BaseChart :option="structOpt" height="100%" width="100%" /></div>
      <div class="chart-box"><div class="c-label">AUM增长趋势</div><BaseChart :option="aumOpt" height="100%" width="100%" /></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalCustomerData } from '@/mockData/totalData.js'
const cd = totalCustomerData

const growthOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: cd.customerTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(255,215,0,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(255,215,0,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data: cd.customerTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#FFD700', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,215,0,0.3)' },{ offset: 1, color: 'rgba(255,215,0,0.01)' }] } } }]
}))

const structOpt = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 }, formatter: '{b}: {c}万 ({d}%)' },
  series: [{ type: 'pie', radius: ['30%','55%'], center: ['50%','50%'], data: cd.customerStructure.map(d => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })), label: { color: '#8899aa', fontSize: 11, formatter: '{b}' }, labelLine: { lineStyle: { color: 'rgba(255,215,0,0.15)' } }, itemStyle: { borderRadius: 3 }, animationType: 'scale', animationDuration: 1000 }]
}))

const aumOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: cd.aumTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(255,215,0,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(255,215,0,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data: cd.aumTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#4FD8FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(79,216,255,0.25)' },{ offset: 1, color: 'rgba(79,216,255,0.01)' }] } } }]
}))
</script>

<style lang="scss" scoped>
.total-customer { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 2px; letter-spacing: 2px; flex-shrink: 0; .gold { color: #FFD700; margin-right: 4px; } }
.customer-metrics { display: flex; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.cm-card { flex: 1; text-align: center; padding: 4px 2px; background: rgba(5,10,25,0.4); border: 1px solid rgba(255,215,0,0.06); border-radius: 4px; .cm-label { display: block; font-size: 13px; color: #4a5a6a; } .cm-value { font-size: 18px; font-weight: 700; color: #4FD8FF; font-family: 'Courier New',monospace; &.gold { color: #FFD700; text-shadow: 0 0 10px rgba(255,215,0,0.3); } .cm-unit { font-size: 13px; color: #4a5a6a; } } }
.charts-col { flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 4px 8px 8px; min-height: 0; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.c-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; .sub { color: #6a7a8a; font-size: 11px; } }
</style>