<template>
  <div class="digital-user-center">
    <div class="section-title">数字用户区 <span class="title-sub">DIGITAL USER GROWTH</span></div>
    <div class="user-content">
      <div class="user-metrics">
        <div class="metric"><span class="m-label">手机银行开户</span><span class="m-value">{{ userData.mobileBankUsers }}万</span><span class="m-change up">↑ 8.6%</span></div>
        <div class="metric"><span class="m-label">手机银行激活</span><span class="m-value">{{ userData.activeUsers }}万</span><span class="m-change up">↑ 10.2%</span></div>
        <div class="metric"><span class="m-label">企业手机银行</span><span class="m-value">{{ userData.enterpriseUsers }}万</span><span class="m-change up">↑ 15.8%</span></div>
        <div class="metric"><span class="m-label">企业网银</span><span class="m-value">{{ userData.corpEbankUsers }}万</span><span class="m-change up">↑ 5.2%</span></div>
      </div>
      <div class="charts-row">
        <div class="chart-box">
          <div class="chart-label">用户增长趋势</div>
          <BaseChart :option="growthOption" height="100%" width="100%" />
        </div>
        <div class="chart-box">
          <div class="chart-label">开户趋势</div>
          <BaseChart :option="openOption" height="100%" width="100%" />
        </div>
      </div>
      <div class="chart-box dist-box">
        <div class="chart-label">渠道分布</div>
        <BaseChart :option="distOption" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { digitalUserData } from '@/mockData/digitalData.js'
const userData = digitalUserData

const growthOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  legend: { data: ['手机银行(万)','企业银行(万)'], textStyle: { color: '#8899aa', fontSize: 11 }, top: 0, right: 0 },
  grid: { top: 24, left: 36, right: 10, bottom: 16 },
  xAxis: { type: 'category', data: userData.userGrowth.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [
    { name: '手机银行(万)', type: 'line', data: userData.userGrowth.mobile, smooth: true, symbol: 'none', lineStyle: { color: '#00E5FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,229,255,0.3)' },{ offset: 1, color: 'rgba(0,229,255,0.01)' }] } } },
    { name: '企业银行(万)', type: 'line', data: userData.userGrowth.enterprise, smooth: true, symbol: 'none', lineStyle: { color: '#6C7BFF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(108,123,255,0.2)' },{ offset: 1, color: 'rgba(108,123,255,0.01)' }] } } }
  ]
}))

const openOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 10, left: 36, right: 10, bottom: 16 },
  xAxis: { type: 'category', data: userData.openTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 11 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  series: [{ type: 'bar', data: userData.openTrend.values, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#00E5FF' },{ offset: 1, color: 'rgba(0,229,255,0.2)' }] }, borderRadius: [3,3,0,0] }, barWidth: 10 }]
}))

const distOption = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 }, formatter: '{b}: {c}万 ({d}%)' },
  series: [{ type: 'pie', radius: ['35%','60%'], center: ['50%','50%'], data: userData.channelDist.map(d => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })), label: { color: '#8899aa', fontSize: 11, formatter: '{b}\n{d}%' }, labelLine: { lineStyle: { color: 'rgba(0,229,255,0.15)' } }, itemStyle: { borderRadius: 3 }, animationType: 'scale', animationDuration: 1000 }]
}))
</script>

<style lang="scss" scoped>
.digital-user-center { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #00E5FF; padding: 6px 12px 3px; text-shadow: 0 0 10px rgba(0,229,255,0.3); letter-spacing: 2px; flex-shrink: 0; &::before { content: '◆ '; color: #00CFFF; } .title-sub { font-size: 13px; color: rgba(0,229,255,0.2); letter-spacing: 3px; margin-left: 6px; } }
.user-content { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 2px 8px 8px; min-height: 0; }
.user-metrics { display: flex; gap: 4px; flex-shrink: 0; }
.metric { flex: 1; padding: 4px 6px; background: rgba(8,24,38,0.5); border: 1px solid rgba(0,229,255,0.08); border-radius: 6px; text-align: center; .m-label { display: block; font-size: 13px; color: #4a5a6a; } .m-value { display: block; font-size: 18px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; text-shadow: 0 0 10px rgba(0,229,255,0.3); } .m-change { font-size: 13px; font-weight: 600; &.up { color: #00FFC6; } } }
.charts-row { flex: 1; display: flex; gap: 8px; min-height: 0; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.chart-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.dist-box { flex: 0 0 35%; min-height: 0; }
</style>