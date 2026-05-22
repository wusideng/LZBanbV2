<template>
  <div class="risk-abnormal-ops">
    <div class="abnormal-section">
      <div class="section-title">异常经营监控</div>
      <div class="abnormal-content">
        <div class="alert-wall">
          <div class="aw-header">实时异常告警</div>
          <div class="aw-body" ref="alertRef">
            <div class="aw-scroll" :style="{ transform: `translateY(-${alertOffset}px)` }">
              <div v-for="(alert, idx) in displayAlerts" :key="alert.id + '-' + idx" class="aw-item" :class="'lv-' + alert.level">
                <span class="aw-dot" :class="'dot-' + alert.level"></span>
                <span class="aw-type">{{ alert.type }}</span>
                <span class="aw-desc">{{ alert.desc }}</span>
                <span class="aw-branch">{{ alert.branch }}</span>
                <span class="aw-time">{{ alert.time }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-box">
          <div class="chart-label">异常资金波动</div>
          <BaseChart :option="fundOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
    <div class="health-section">
      <div class="section-title">经营健康度</div>
      <div class="health-content">
        <div class="health-metrics">
          <div class="hm-card"><span class="hm-label">成本收入比</span><span class="hm-value">{{ health.costIncomeRatio }}%</span></div>
          <div class="hm-card"><span class="hm-label">存贷比</span><span class="hm-value">{{ health.depositLoanRatio }}%</span></div>
          <div class="hm-card"><span class="hm-label">收益率</span><span class="hm-value">{{ health.yield }}%</span></div>
          <div class="hm-card"><span class="hm-label">净息差</span><span class="hm-value">{{ health.netInterestMargin }}%</span></div>
        </div>
        <div class="health-gauges">
          <div v-for="h in health.healthDashboard" :key="h.name" class="hg-card">
            <div class="hg-name">{{ h.name }}</div>
            <div class="hg-track"><div class="hg-fill" :style="{ width: h.value + '%' }" :class="h.status"></div></div>
            <div class="hg-value" :class="h.status">{{ h.value }}</div>
          </div>
        </div>
        <div class="chart-box">
          <div class="chart-label">资产质量趋势</div>
          <BaseChart :option="qualityOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { abnormalOpsData, healthData } from '@/mockData/riskData.js'

const health = healthData
const alerts = ref([...abnormalOpsData.abnormalAlerts])
const alertOffset = ref(0)
const displayAlerts = computed(() => [...alerts.value, ...alerts.value])

const fundOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(6,20,15,0.95)', borderColor: 'rgba(0,255,153,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  legend: { data: ['正常指数','异常波动','预警阈值'], textStyle: { color: '#8899aa', fontSize: 11 }, top: 0, right: 0 },
  grid: { top: 22, left: 32, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: abnormalOpsData.fundVolatility.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(0,255,153,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,255,153,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [
    { name: '正常指数', type: 'line', data: abnormalOpsData.fundVolatility.normal, smooth: true, symbol: 'none', lineStyle: { color: '#00FF99', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,255,153,0.25)' },{ offset: 1, color: 'rgba(0,255,153,0.01)' }] } } },
    { name: '异常波动', type: 'bar', data: abnormalOpsData.fundVolatility.abnormal, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FF5B5B' },{ offset: 1, color: 'rgba(255,91,91,0.3)' }] }, borderRadius: [3,3,0,0] }, barWidth: 8 },
    { name: '预警阈值', type: 'line', data: abnormalOpsData.fundVolatility.threshold, smooth: false, symbol: 'none', lineStyle: { color: '#FF9F43', width: 1, type: 'dashed' } }
  ]
}))

const qualityOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(6,20,15,0.95)', borderColor: 'rgba(0,255,153,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  legend: { data: ['不良率(%)','拨备覆盖率(%)'], textStyle: { color: '#8899aa', fontSize: 11 }, top: 0, right: 0 },
  grid: { top: 22, left: 32, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: health.assetQualityTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 9 }, axisLine: { lineStyle: { color: 'rgba(0,255,153,0.08)' } }, axisTick: { show: false } },
  yAxis: [
    { type: 'value', name: '不良率', nameTextStyle: { color: '#4a5a6a', fontSize: 10 }, splitLine: { lineStyle: { color: 'rgba(0,255,153,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
    { type: 'value', name: '覆盖率', nameTextStyle: { color: '#4a5a6a', fontSize: 10 }, splitLine: { show: false }, axisLabel: { color: '#4a5a6a', fontSize: 10 } }
  ],
  series: [
    { name: '不良率(%)', type: 'line', data: health.assetQualityTrend.badRate, smooth: true, symbol: 'none', lineStyle: { color: '#FF5B5B', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,91,91,0.2)' },{ offset: 1, color: 'rgba(255,91,91,0.01)' }] } } },
    { name: '拨备覆盖率(%)', type: 'line', yAxisIndex: 1, data: health.assetQualityTrend.reserveRate, smooth: true, symbol: 'none', lineStyle: { color: '#00FF99', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,255,153,0.2)' },{ offset: 1, color: 'rgba(0,255,153,0.01)' }] } } }
  ]
}))

let timer
onMounted(() => {
  const h = alerts.value.length * 30
  timer = setInterval(() => { alertOffset.value += 1; if (alertOffset.value >= h) alertOffset.value = 0 }, 70)
})
onUnmounted(() => { clearInterval(timer) })
</script>

<style lang="scss" scoped>
.risk-abnormal-ops { display: flex; gap: 8px; padding: 0 16px 4px; height: 100%; }
.abnormal-section, .health-section { display: flex; flex-direction: column; background: rgba(10,42,32,0.4); border: 1px solid rgba(0,255,153,0.08); border-radius: 8px; overflow: hidden; }
.abnormal-section { flex: 1.2; }
.health-section { flex: 1; }
.section-title { font-size: 16px; font-weight: 600; color: #00FF99; padding: 5px 10px; text-shadow: 0 0 10px rgba(0,255,153,0.3); letter-spacing: 2px; flex-shrink: 0; border-bottom: 1px solid rgba(0,255,153,0.06); &::before { content: '◆ '; color: #00CC7A; } }
.abnormal-content { flex: 1; display: flex; gap: 6px; padding: 4px 8px; min-height: 0; }
.alert-wall { flex: 1; display: flex; flex-direction: column; min-height: 0; }
.aw-header { font-size: 13px; color: #FF5B5B; padding: 2px 4px; font-weight: 600; letter-spacing: 1px; flex-shrink: 0; }
.aw-body { flex: 1; overflow: hidden; position: relative; }
.aw-scroll { transition: none; }
.aw-item { display: flex; align-items: center; gap: 4px; padding: 4px 6px; height: 30px; font-size: 13px; border-bottom: 1px solid rgba(0,255,153,0.02); transition: background 0.3s; &:hover { background: rgba(0,255,153,0.03); } &.lv-high { border-left: 2px solid #FF5B5B; background: rgba(255,91,91,0.04); } &.lv-medium { border-left: 2px solid #FF9F43; } &.lv-low { border-left: 2px solid #1DBF73; } }
.aw-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; &.dot-high { background: #FF5B5B; box-shadow: 0 0 6px rgba(255,91,91,0.6); animation: pulse 1.5s ease-in-out infinite; } &.dot-medium { background: #FF9F43; } &.dot-low { background: #1DBF73; } }
@keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
.aw-type { flex: 0 0 60px; color: #00FF99; font-weight: 600; }
.aw-desc { flex: 1; color: #e0e8f0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.aw-branch { flex: 0 0 52px; color: #8899aa; text-align: center; font-size: 12px; }
.aw-time { flex: 0 0 50px; color: #4a5a6a; text-align: right; font-size: 12px; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.chart-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.health-content { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 4px 8px; min-height: 0; }
.health-metrics { display: flex; gap: 4px; flex-shrink: 0; }
.hm-card { flex: 1; text-align: center; padding: 3px 4px; background: rgba(10,42,32,0.5); border: 1px solid rgba(0,255,153,0.08); border-radius: 4px; .hm-label { display: block; font-size: 13px; color: #4a5a6a; } .hm-value { font-size: 18px; font-weight: 700; color: #00FF99; font-family: 'Courier New',monospace; text-shadow: 0 0 10px rgba(0,255,153,0.3); } }
.health-gauges { display: flex; gap: 4px; flex-shrink: 0; }
.hg-card { flex: 1; padding: 3px 6px; background: rgba(10,42,32,0.4); border: 1px solid rgba(0,255,153,0.06); border-radius: 4px; text-align: center; .hg-name { font-size: 12px; color: #4a5a6a; } .hg-track { height: 6px; background: rgba(0,255,153,0.06); border-radius: 3px; overflow: hidden; margin: 2px 0; .hg-fill { height: 100%; border-radius: 3px; transition: width 1s ease; &.good { background: #00FF99; } &.normal { background: #FF9F43; } } } .hg-value { font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; &.good { color: #00FF99; } &.normal { color: #FF9F43; } } }
</style>