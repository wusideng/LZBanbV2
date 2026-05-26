<template>
  <div class="total-risk">
    <div class="section-title"><span class="gold">✦</span> 风险监控</div>
    <div class="risk-metrics">
      <div class="rm-card warn"><span class="rm-label">不良率</span><span class="rm-value">{{ rd.badRate }}%</span></div>
      <div class="rm-card warn"><span class="rm-label">逾期率</span><span class="rm-value">{{ rd.overdueRate }}%</span></div>
      <div class="rm-card"><span class="rm-label">风险预警客户</span><span class="rm-value danger">{{ rd.riskWarnClients }}<span class="rm-unit">户</span></span></div>
      <div class="rm-card"><span class="rm-label">高风险资产</span><span class="rm-value danger">{{ rd.highRiskAssets }}<span class="rm-unit">亿</span></span></div>
    </div>
    <div class="risk-charts">
      <div class="chart-row">
        <div class="chart-box"><div class="c-label">风险雷达</div><BaseChart :option="radarOpt" height="100%" width="100%" /></div>
        <div class="chart-box"><div class="c-label">风险等级</div><BaseChart :option="catOpt" height="100%" width="100%" /></div>
      </div>
      <div class="chart-box"><div class="c-label">风险趋势</div><BaseChart :option="trendOpt" height="100%" width="100%" /></div>
    </div>
    <div class="alert-section">
      <div class="as-title">实时告警 <span class="count">{{ rd.alerts.length }}</span></div>
      <div class="as-body">
        <div v-for="alert in rd.alerts" :key="alert.id" class="as-item" :class="'lv-' + alert.level">
          <span class="as-dot" :class="'dot-' + alert.level"></span>
          <span class="as-msg">{{ alert.msg }}</span>
          <span class="as-time">{{ alert.time }}</span>
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

const radarOpt = computed(() => ({
  radar: { indicator: rd.riskRadar.indicators.map((n,i) => ({ name: n, max: rd.riskRadar.max[i] })), center: ['50%','50%'], radius: '55%', axisName: { color: '#8899aa', fontSize: 11 }, splitArea: { areaStyle: { color: ['rgba(255,91,91,0.02)','rgba(255,91,91,0.01)'] } }, axisLine: { lineStyle: { color: 'rgba(255,91,91,0.15)' } }, splitLine: { lineStyle: { color: 'rgba(255,91,91,0.1)' } } },
  series: [{ type: 'radar', data: [{ value: rd.riskRadar.current, name: '当前', areaStyle: { color: 'rgba(255,91,91,0.12)' }, lineStyle: { color: '#FF5B5B', width: 2 }, itemStyle: { color: '#FF5B5B' } }], symbol: 'circle', symbolSize: 4, animationDuration: 1500 }]
}))

const catOpt = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 }, formatter: '{b}: {c}%' },
  series: [{ type: 'pie', radius: ['30%','55%'], center: ['50%','50%'], data: rd.riskCategories.map(d => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })), label: { color: '#8899aa', fontSize: 11, formatter: '{b}' }, labelLine: { lineStyle: { color: 'rgba(255,215,0,0.15)' } }, itemStyle: { borderRadius: 3 }, animationType: 'scale', animationDuration: 1000 }]
}))

const trendOpt = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  legend: { data: ['不良率(%)','拨备覆盖率(%)'], textStyle: { color: '#8899aa', fontSize: 11 }, top: 0, right: 0 },
  grid: { top: 22, left: 32, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: rd.riskTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(255,215,0,0.08)' } }, axisTick: { show: false } },
  yAxis: [{ type: 'value', splitLine: { lineStyle: { color: 'rgba(255,215,0,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },{ type: 'value', splitLine: { show: false }, axisLabel: { color: '#4a5a6a', fontSize: 10 } }],
  series: [
    { name: '不良率(%)', type: 'line', data: rd.riskTrend.badRate, smooth: true, symbol: 'none', lineStyle: { color: '#FF5B5B', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,91,91,0.2)' },{ offset: 1, color: 'rgba(255,91,91,0.01)' }] } } },
    { name: '拨备覆盖率(%)', type: 'line', yAxisIndex: 1, data: rd.riskTrend.reserveRate, smooth: true, symbol: 'none', lineStyle: { color: '#FFD700', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,215,0,0.2)' },{ offset: 1, color: 'rgba(255,215,0,0.01)' }] } } }
  ]
}))
</script>

<style lang="scss" scoped>
.total-risk { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 2px; letter-spacing: 2px; flex-shrink: 0; .gold { color: #FFD700; margin-right: 4px; } }
.risk-metrics { display: flex; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.rm-card { flex: 1; text-align: center; padding: 4px 2px; background: rgba(5,10,25,0.4); border: 1px solid rgba(255,215,0,0.06); border-radius: 4px; &.warn { border-left: 2px solid #FF9F43; } .rm-label { display: block; font-size: 13px; color: #4a5a6a; } .rm-value { font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.danger { color: #FF5B5B; } .rm-unit { font-size: 13px; color: #4a5a6a; } } }
.risk-charts { flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 4px 8px; min-height: 0; }
.chart-row { flex: 1; display: flex; gap: 6px; min-height: 0; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.c-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; }
.alert-section { flex: 0 0 auto; padding: 2px 8px 6px; }
.as-title { font-size: 14px; color: #FF5B5B; font-weight: 600; padding: 2px 4px; .count { font-size: 11px; background: rgba(255,91,91,0.15); padding: 0 5px; border-radius: 6px; margin-left: 4px; } }
.as-body { display: flex; flex-direction: column; gap: 1px; }
.as-item { display: flex; align-items: center; gap: 4px; padding: 2px 6px; font-size: 13px; border-radius: 3px; &.lv-high { background: rgba(255,91,91,0.04); } &.lv-medium { background: rgba(255,159,67,0.03); } &.lv-low { background: transparent; } }
.as-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; &.dot-high { background: #FF5B5B; box-shadow: 0 0 4px rgba(255,91,91,0.6); } &.dot-medium { background: #FF9F43; } &.dot-low { background: #1DBF73; } }
.as-msg { flex: 1; color: #8899aa; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.as-time { color: #4a5a6a; font-size: 12px; flex-shrink: 0; }
</style>