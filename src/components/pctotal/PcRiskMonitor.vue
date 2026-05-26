<template>
  <div class="pc-risk">
    <div class="section-title">风险监控</div>
    <div class="metrics-row">
      <div class="metric"><span class="m-label">不良率</span><span class="m-value warn">{{ rd.badRate }}%</span></div>
      <div class="metric"><span class="m-label">逾期率</span><span class="m-value warn">{{ rd.overdueRate }}%</span></div>
      <div class="metric"><span class="m-label">预警客户</span><span class="m-value danger">{{ rd.riskWarnClients }}</span></div>
      <div class="metric"><span class="m-label">高风险资产</span><span class="m-value danger">{{ rd.highRiskAssets }}亿</span></div>
    </div>
    <div class="chart-row">
      <BaseChart :option="trendOpt" height="100%" width="100%" />
    </div>
    <div class="chart-row-small">
      <BaseChart :option="catOpt" height="100%" width="100%" />
      <div class="alert-list">
        <div class="al-title">预警列表 <span class="al-count">{{ rd.alerts.length }}</span></div>
        <div class="al-body">
          <div v-for="a in rd.alerts" :key="a.id" class="al-item">
            <span class="al-dot" :class="'d-'+a.level"></span>
            <span class="al-msg">{{ a.msg }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalRiskData } from '@/mockData/totalData.js'
const rd = totalRiskData

const trendOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 } },
  legend: { data: ['不良率(%)','拨备覆盖率(%)'], textStyle: { color: '#8899aa', fontSize: 11 }, top: 0, right: 0 },
  title: { text: '风险趋势', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  grid: { top: 26, left: 36, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: rd.riskTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: '#1a2a4a' } }, axisTick: { show: false } },
  yAxis: [{ type: 'value', splitLine: { lineStyle: { color: '#1a2a4a', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },{ type: 'value', splitLine: { show: false }, axisLabel: { color: '#4a5a6a', fontSize: 11 } }],
  series: [
    { name: '不良率(%)', type: 'line', data: rd.riskTrend.badRate, smooth: true, symbol: 'none', lineStyle: { color: '#FF5B5B', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,91,91,0.15)' },{ offset: 1, color: 'rgba(255,91,91,0.01)' }] } } },
    { name: '拨备覆盖率(%)', type: 'line', yAxisIndex: 1, data: rd.riskTrend.reserveRate, smooth: true, symbol: 'none', lineStyle: { color: '#FFD700', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,215,0,0.15)' },{ offset: 1, color: 'rgba(255,215,0,0.01)' }] } } }
  ]
}))

const catOpt = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: '#0a1628', borderColor: '#1a2a4a', textStyle: { color: '#e0e8f0', fontSize: 12 }, formatter: '{b}: {c}%' },
  title: { text: '等级分布', textStyle: { color: '#8899aa', fontSize: 13, fontWeight: 'normal' }, left: 4, top: 2 },
  series: [{ type: 'pie', radius: ['30%','50%'], center: ['50%','55%'], data: rd.riskCategories.map(d => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })), label: { color: '#8899aa', fontSize: 11, formatter: '{b}' }, labelLine: { lineStyle: { color: '#1a2a4a' } }, itemStyle: { borderRadius: 0 }, animationDuration: 800 }]
}))
</script>

<style lang="scss" scoped>
.pc-risk { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 8px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.metrics-row { display: flex; gap: 4px; padding: 0 8px 4px; flex-shrink: 0; }
.metric { flex: 1; text-align: center; padding: 4px 2px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; .m-label { display: block; font-size: 12px; color: #4a5a6a; } .m-value { font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.warn { color: #FF9F43; } &.danger { color: #FF5B5B; } } }
.chart-row, .chart-row-small { flex: 1; min-height: 0; padding: 0 8px 2px; }
.chart-row-small { flex: 0 0 42%; display: flex; gap: 6px; padding-bottom: 6px; }
.alert-list { flex: 1; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; display: flex; flex-direction: column; }
.al-title { font-size: 13px; color: #FF5B5B; padding: 4px 8px; font-weight: 600; border-bottom: 1px solid #1a2a4a; .al-count { font-size: 11px; background: rgba(255,91,91,0.1); padding: 0 5px; border-radius: 4px; margin-left: 4px; } }
.al-body { flex: 1; overflow-y: auto; padding: 2px 0; display: flex; flex-direction: column; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: #1a2a4a; border-radius: 1px; } }
.al-item { display: flex; align-items: center; gap: 4px; padding: 3px 8px; font-size: 12px; color: #8899aa; }
.al-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; &.d-high { background: #FF5B5B; } &.d-medium { background: #FF9F43; } &.d-low { background: #4FD8FF; } }
.al-msg { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
</style>