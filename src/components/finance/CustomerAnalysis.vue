<template>
  <div class="customer-analysis">
    <div class="section-title">客户经营分析</div>
    <div class="ca-content">
      <!-- 第一行：漏斗 + 趋势 -->
      <div class="ca-row">
        <div class="ca-chart funnel-chart">
          <span class="chart-label">客户增长漏斗</span>
          <BaseChart :option="funnelOption" height="100%" width="100%" />
        </div>
        <div class="ca-chart trend-chart">
          <span class="chart-label">客户增长趋势</span>
          <BaseChart :option="customerTrendOption" height="100%" width="100%" />
        </div>
      </div>
      <!-- 第二行：分层 + 活跃率 -->
      <div class="ca-row">
        <div class="ca-chart level-chart">
          <span class="chart-label">客户分层分析</span>
          <BaseChart :option="levelOption" height="100%" width="100%" />
        </div>
        <div class="ca-chart active-chart">
          <span class="chart-label">客户活跃率</span>
          <div class="active-gauge-wrap">
            <BaseChart :option="activeOption" height="100%" width="100%" />
          </div>
          <div class="active-metrics">
            <div class="am-item">
              <span class="am-label">VIP占比</span>
              <span class="am-value cyan">15.8%</span>
            </div>
            <div class="am-item">
              <span class="am-label">私行占比</span>
              <span class="am-value green">1.2%</span>
            </div>
            <div class="am-item">
              <span class="am-label">高净值客户</span>
              <span class="am-value orange">71,850</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const funnelOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 },
    formatter: '{b}: {c}户'
  },
  series: [{
    type: 'funnel',
    left: '10%',
    right: '15%',
    top: 20,
    bottom: 10,
    minSize: '10%',
    maxSize: '100%',
    sort: 'descending',
    gap: 2,
    label: {
      show: true,
      position: 'inside',
      color: '#fff',
      fontSize: 12,
      formatter: '{b}'
    },
    labelLine: { length: 10, lineStyle: { color: 'rgba(0,198,255,0.2)' } },
    itemStyle: {
      borderColor: 'rgba(7,17,31,0.6)',
      borderWidth: 1
    },
    emphasis: { label: { fontSize: 14 } },
    data: [
      { value: 5000000, name: '潜在客户', itemStyle: { color: 'rgba(0,198,255,0.3)' } },
      { value: 3500000, name: '到店客户', itemStyle: { color: 'rgba(0,198,255,0.4)' } },
      { value: 2850000, name: '开户客户', itemStyle: { color: 'rgba(0,198,255,0.55)' } },
      { value: 1860000, name: '活跃客户', itemStyle: { color: 'rgba(0,198,255,0.7)' } },
      { value: 420000, name: 'VIP客户', itemStyle: { color: 'rgba(0,240,255,0.85)' } },
      { value: 3850, name: '私行客户', itemStyle: { color: '#ffb347' } }
    ],
    animationDuration: 1500
  }]
}))

const customerTrendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  legend: { data: ['新增','流失','净增'], textStyle: { color: '#8899aa', fontSize: 11 }, bottom: 0 },
  grid: { top: 8, left: 40, right: 8, bottom: 28 },
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
    { name: '新增', type: 'bar', barWidth: 6, data: [18000,16000,22000,20000,25000,24000,23000,26000,24000,28000,26000,28500], itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{offset:0,color:'rgba(0,198,255,0.8)'},{offset:1,color:'rgba(0,198,255,0.2)'}] } } },
    { name: '流失', type: 'bar', barWidth: 6, data: [3200,2800,3500,3000,3800,3600,3400,4000,3700,4200,3800,4500], itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{offset:0,color:'rgba(255,91,91,0.7)'},{offset:1,color:'rgba(255,91,91,0.2)'}] } } },
    { name: '净增', type: 'line', data: [14800,13200,18500,17000,21200,20400,19600,22000,20300,23800,22200,24000], smooth: true, symbol: 'none', lineStyle: { color: '#00ff95', width: 2 } }
  ]
}))

const levelOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 },
    formatter: '{b}: {c}户 ({d}%)'
  },
  series: [{
    type: 'pie',
    radius: ['40%','65%'],
    center: ['50%','50%'],
    roseType: 'radius',
    data: [
      { name: '普通客户', value: 1580000, itemStyle: { color: 'rgba(0,198,255,0.3)' } },
      { name: '黄金客户', value: 520000, itemStyle: { color: 'rgba(0,198,255,0.5)' } },
      { name: '白金客户', value: 185000, itemStyle: { color: 'rgba(0,198,255,0.7)' } },
      { name: '钻石客户', value: 68000, itemStyle: { color: '#33ddff' } },
      { name: '私行客户', value: 3850, itemStyle: { color: '#ffb347', shadowBlur: 10, shadowColor: 'rgba(255,179,71,0.5)' } }
    ],
    label: { color: '#8899aa', fontSize: 11, formatter: '{b}' },
    labelLine: { lineStyle: { color: 'rgba(0,198,255,0.15)' } },
    itemStyle: { borderRadius: 4 },
    animationType: 'scale',
    animationDuration: 1200
  }]
}))

const activeOption = computed(() => ({
  tooltip: {
    formatter: '活跃率: {c}%',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  series: [{
    type: 'gauge',
    center: ['50%', '55%'],
    radius: '80%',
    startAngle: 210,
    endAngle: -30,
    min: 0,
    max: 100,
    splitNumber: 5,
    progress: {
      show: true,
      width: 8,
      itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#00aaff' }, { offset: 1, color: '#33ddff' }] } }
    },
    axisLine: { lineStyle: { width: 8, color: [[0.628, 'rgba(0,198,255,0.15)']] } },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: { show: false },
    detail: {
      offsetCenter: [0, 35],
      valueAnimation: true,
      formatter: '{value}%',
      fontSize: 20,
      fontWeight: 700,
      color: '#33ddff',
      fontFamily: 'Courier New, monospace',
      textShadowColor: 'rgba(0,240,255,0.3)',
      textShadowBlur: 10
    },
    title: {
      offsetCenter: [0, 55],
      fontSize: 12,
      color: '#4a5a6a'
    },
    data: [{ value: 62.8, name: '活跃率' }]
  }]
}))
</script>

<style lang="scss" scoped>
.customer-analysis {
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

.ca-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 8px 6px;
  min-height: 0;
}

.ca-row {
  flex: 0 0 49%;
  display: flex;
  gap: 4px;
  min-height: 0;
}

.ca-chart {
  position: relative;
  min-height: 0;
  &.funnel-chart { flex: 0 0 48%; }
  &.trend-chart { flex: 0 0 50%; }
  &.level-chart { flex: 0 0 50%; }
  &.active-chart { flex: 0 0 48%; position: relative; }
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

.active-gauge-wrap {
  height: 100%;
  width: 100%;
}

.active-metrics {
  position: absolute;
  bottom: 4px;
  left: 4px;
  right: 4px;
  display: flex;
  gap: 4px;
}
.am-item {
  flex: 1;
  text-align: center;
  padding: 3px 2px;
  background: rgba(10, 30, 60, 0.4);
  border-radius: 4px;
  border: 1px solid rgba(0, 153, 255, 0.06);
}
.am-label {
  display: block;
  font-size: 11px;
  color: #4a5a6a;
  margin-bottom: 1px;
}
.am-value {
  font-size: 14px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  &.cyan { color: #33ddff; }
  &.green { color: #00ff95; }
  &.orange { color: #ffb347; }
}
</style>