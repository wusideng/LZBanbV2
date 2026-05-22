<template>
  <div class="asset-liability">
    <div class="section-title">资产负债经营</div>
    <div class="al-content">
      <!-- 资产负债趋势 -->
      <div class="al-chart">
        <span class="chart-label">资产负债趋势</span>
        <BaseChart :option="alTrendOption" height="100%" width="100%" />
      </div>
      <!-- 存贷趋势 -->
      <div class="al-chart">
        <span class="chart-label">存贷趋势</span>
        <BaseChart :option="depLoanOption" height="100%" width="100%" />
      </div>
      <!-- 资产结构 -->
      <div class="al-chart-row">
        <div class="mini-chart">
          <span class="chart-label">资产结构</span>
          <BaseChart :option="assetStructureOption" height="100%" width="100%" />
        </div>
        <div class="mini-chart">
          <span class="chart-label">负债结构</span>
          <BaseChart :option="liabilityStructureOption" height="100%" width="100%" />
        </div>
        <div class="mini-chart">
          <span class="chart-label">收益占比</span>
          <BaseChart :option="incomeOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const alTrendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  legend: { data: ['总资产','总负债'], textStyle: { color: '#8899aa', fontSize: 12 }, bottom: 0 },
  grid: { top: 8, left: 40, right: 8, bottom: 30 },
  xAxis: {
    type: 'category',
    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    axisLabel: { color: '#4a5a6a', fontSize: 10, interval: 1 },
    axisLine: { lineStyle: { color: 'rgba(0,198,255,0.08)' } }
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: 'rgba(0,198,255,0.04)', type: 'dashed' } },
    axisLabel: { color: '#4a5a6a', fontSize: 10 }
  },
  series: [
    { name: '总资产', type: 'line', data: [1150,1168,1180,1195,1205,1218,1225,1235,1240,1248,1252,1256.3], smooth: true, symbol: 'none', lineStyle: { color: '#0099ff', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,198,255,0.25)' }, { offset: 1, color: 'rgba(0,198,255,0.01)' }] } } },
    { name: '总负债', type: 'line', data: [680,690,698,705,712,718,722,726,728,730,731,732.8], smooth: true, symbol: 'none', lineStyle: { color: '#ffb347', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(255,179,71,0.15)' }, { offset: 1, color: 'rgba(255,179,71,0.01)' }] } } }
  ]
}))

const depLoanOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  legend: { data: ['存款余额','贷款余额'], textStyle: { color: '#8899aa', fontSize: 12 }, bottom: 0 },
  grid: { top: 8, left: 40, right: 8, bottom: 30 },
  xAxis: {
    type: 'category',
    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    axisLabel: { color: '#4a5a6a', fontSize: 10, interval: 1 },
    axisLine: { lineStyle: { color: 'rgba(0,198,255,0.08)' } }
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: 'rgba(0,198,255,0.04)', type: 'dashed' } },
    axisLabel: { color: '#4a5a6a', fontSize: 10 }
  },
  series: [
    { name: '存款余额', type: 'line', data: [480,488,492,498,502,508,510,515,518,520,522,523.5], smooth: true, symbol: 'none', lineStyle: { color: '#0099ff', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,198,255,0.25)' }, { offset: 1, color: 'rgba(0,198,255,0.01)' }] } } },
    { name: '贷款余额', type: 'line', data: [340,348,352,358,362,368,372,376,380,382,385,386.2], smooth: true, symbol: 'none', lineStyle: { color: '#00ff95', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,255,149,0.15)' }, { offset: 1, color: 'rgba(0,255,149,0.01)' }] } } }
  ]
}))

function makeRingOption(data, colors) {
  return {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(7,17,31,0.9)',
      borderColor: 'rgba(0,198,255,0.3)',
      textStyle: { color: '#e0e8f0', fontSize: 12 },
      formatter: '{b}: {c}亿 ({d}%)'
    },
    series: [{
      type: 'pie',
      radius: ['55%','75%'],
      center: ['50%','50%'],
      data: data.map((d, i) => ({
        ...d,
        itemStyle: { color: colors[i % colors.length] }
      })),
      label: { color: '#4a5a6a', fontSize: 10, formatter: '{b}' },
      labelLine: { lineStyle: { color: 'rgba(0,198,255,0.1)' } },
      animationDuration: 1000,
      animationType: 'scale'
    }]
  }
}

const chartColors = ['#0099ff','#00aaff','#ffb347','#00ff95','#4a5a6a']

const assetStructureOption = computed(() => makeRingOption(
  [{name:'企业贷款',value:386},{name:'个人贷款',value:245},{name:'国债投资',value:186},{name:'同业资产',value:124},{name:'其他',value:98}],
  chartColors
))

const liabilityStructureOption = computed(() => makeRingOption(
  [{name:'企业存款',value:328},{name:'个人存款',value:195},{name:'同业负债',value:120},{name:'应付债券',value:56},{name:'其他',value:34}],
  ['#ffb347','#0099ff','#00aaff','#00ff95','#4a5a6a']
))

const incomeOption = computed(() => makeRingOption(
  [{name:'利息净收入',value:28.5},{name:'手续费净收入',value:8.6},{name:'投资收益',value:4.5},{name:'其他收入',value:2.2}],
  ['#0099ff','#00ff95','#ffb347','#4a5a6a']
))
</script>

<style lang="scss" scoped>
.asset-liability {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #33ddff;
  padding: 8px 12px 2px;
  text-shadow: 0 0 10px rgba(51, 221, 255, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  &::before { content: '◆ '; color: #0099ff; }
}

.al-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 8px 6px;
  min-height: 0;
}

.al-chart {
  flex: 0 0 32%;
  position: relative;
  min-height: 0;
}

.al-chart-row {
  flex: 0 0 30%;
  display: flex;
  gap: 4px;
  min-height: 0;
  .mini-chart { flex: 1; position: relative; min-height: 0; }
}

.chart-label {
  position: absolute;
  top: 2px;
  left: 6px;
  font-size: 12px;
  color: #4a5a6a;
  z-index: 10;
  letter-spacing: 1px;
}
</style>