<template>
  <div class="loan-risk-monitor">
    <div class="section-title">风险监控中心 <span class="title-sub">RISK COMMAND CENTER</span></div>
    <div class="risk-content">
      <!-- 风险核心指标 -->
      <div class="risk-metrics">
        <div class="metric-item">
          <span class="metric-label">不良率</span>
          <span class="metric-value warn">{{ riskData.nonPerformingRate }}%</span>
          <span class="metric-change down">↓ {{ Math.abs(riskData.npRateChange) }}%</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">逾期率</span>
          <span class="metric-value warn">{{ riskData.overdueRate }}%</span>
          <span class="metric-change down">↓ {{ Math.abs(riskData.odRateChange) }}%</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">风险迁徙</span>
          <span class="metric-value">{{ riskData.riskMigration }}%</span>
          <span class="metric-change down">↓ {{ Math.abs(riskData.riskMigrationChange) }}%</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">风险客户占比</span>
          <span class="metric-value danger">{{ riskData.riskClientRatio }}%</span>
          <span class="metric-change down">↓ {{ Math.abs(riskData.riskClientChange) }}%</span>
        </div>
      </div>
      <!-- 风险雷达图 -->
      <div class="chart-section">
        <div class="chart-section-title">风险指标雷达</div>
        <div class="chart-wrap">
          <BaseChart :option="radarOption" height="100%" width="100%" />
        </div>
      </div>
      <!-- 风险分布热力图 -->
      <div class="chart-section">
        <div class="chart-section-title">风险分布热力</div>
        <div class="heat-chart">
          <BaseChart :option="heatmapOption" height="100%" width="100%" />
        </div>
      </div>
      <!-- 风险告警墙 -->
      <div class="alert-section">
        <div class="chart-section-title">
          风险告警墙
          <span class="alert-badge">{{ alerts.length }}</span>
        </div>
        <div class="alert-scroll" ref="alertRef">
          <div
            v-for="alert in alerts"
            :key="alert.id"
            class="alert-item"
            :class="'level-' + alert.level"
          >
            <span class="alert-dot" :class="'dot-' + alert.level"></span>
            <span class="alert-product">{{ alert.product }}</span>
            <span class="alert-branch">{{ alert.branch }}</span>
            <span class="alert-value">{{ alert.value }}</span>
            <span class="alert-desc">{{ alert.desc }}</span>
            <span class="alert-time">{{ alert.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { loanRiskData } from '@/mockData/loanData.js'

const riskData = loanRiskData
const alerts = riskData.alerts

const radarOption = computed(() => ({
  radar: {
    indicator: riskData.riskRadar.indicators.map((name, i) => ({ name, max: riskData.riskRadar.max[i] })),
    center: ['50%', '50%'],
    radius: '60%',
    axisName: { color: '#8899aa', fontSize: 11 },
    splitArea: { areaStyle: { color: ['rgba(255,91,91,0.02)', 'rgba(255,91,91,0.01)'] } },
    axisLine: { lineStyle: { color: 'rgba(255,91,91,0.15)' } },
    splitLine: { lineStyle: { color: 'rgba(255,91,91,0.1)' } }
  },
  series: [{
    type: 'radar',
    data: [{
      value: riskData.riskRadar.current,
      name: '当前',
      areaStyle: { color: 'rgba(255,91,91,0.15)' },
      lineStyle: { color: '#FF5B5B', width: 2 },
      itemStyle: { color: '#FF5B5B' }
    }],
    symbol: 'circle',
    symbolSize: 4,
    animationDuration: 1500
  }]
}))

const heatmapOption = computed(() => {
  const categories = ['正常', '关注', '次级', '可疑', '损失']
  const products = riskData.riskHeatmap.map(d => d.name)
  const data = []
  riskData.riskHeatmap.forEach((d, i) => {
    data.push([i, 0, d.normal])
    data.push([i, 1, d.concern])
    data.push([i, 2, d.secondary])
    data.push([i, 3, d.suspicious])
    data.push([i, 4, d.loss])
  })
  return {
    tooltip: {
      position: 'top',
      backgroundColor: 'rgba(11,34,53,0.95)',
      borderColor: 'rgba(255,91,91,0.3)',
      textStyle: { color: '#e0e8f0', fontSize: 12 },
      formatter: params => `${params.value[0]} - ${params.value[1]}: ${params.value[2]}%`
    },
    grid: { top: 5, left: 55, right: 10, bottom: 25 },
    xAxis: {
      type: 'category',
      data: products,
      axisLabel: { color: '#4a5a6a', fontSize: 11 },
      axisLine: { lineStyle: { color: 'rgba(255,91,91,0.08)' } },
      splitArea: { show: true }
    },
    yAxis: {
      type: 'category',
      data: categories,
      axisLabel: { color: '#4a5a6a', fontSize: 11 },
      axisLine: { lineStyle: { color: 'rgba(255,91,91,0.08)' } },
      splitArea: { show: true }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: false,
      inRange: {
        color: ['rgba(0,255,198,0.1)', 'rgba(255,179,71,0.3)', 'rgba(255,91,91,0.5)', 'rgba(255,45,45,0.7)']
      },
      show: false
    },
    series: [{
      type: 'heatmap',
      data,
      label: {
        show: true,
        color: '#8899aa',
        fontSize: 11,
        formatter: params => params.value[2] + '%'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
})

// 计算用于heatmap的二维数组（备用显示）
</script>

<style lang="scss" scoped>
.loan-risk-monitor {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 17px;
  font-weight: 600;
  color: #FFB347;
  padding: 6px 12px 3px;
  text-shadow: 0 0 10px rgba(255, 179, 71, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  &::before { content: '◆ '; color: #FF8A34; }
  .title-sub {
    font-size: 13px;
    color: rgba(255, 179, 71, 0.2);
    letter-spacing: 3px;
    margin-left: 6px;
  }
}

.risk-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 8px 8px;
  min-height: 0;
}

.risk-metrics {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.metric-item {
  flex: 1;
  padding: 5px 6px;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 91, 91, 0.1);
  border-radius: 6px;
  text-align: center;
  .metric-label {
    display: block;
    font-size: 13px;
    color: #4a5a6a;
    margin-bottom: 1px;
  }
  .metric-value {
    display: block;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Courier New', monospace;
    color: #FFB347;
    text-shadow: 0 0 10px rgba(255, 179, 71, 0.3);
    &.warn { color: #FF8A34; text-shadow: 0 0 10px rgba(255, 138, 52, 0.4); }
    &.danger { color: #FF5B5B; text-shadow: 0 0 10px rgba(255, 91, 91, 0.4); }
  }
  .metric-change {
    font-size: 13px;
    font-weight: 600;
    &.down { color: #00FFC6; }
  }
}

.chart-section {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.chart-section-title {
  font-size: 14px;
  color: #4a5a6a;
  padding: 2px 4px;
  letter-spacing: 1px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  .alert-badge {
    font-size: 12px;
    padding: 1px 6px;
    background: rgba(255, 91, 91, 0.2);
    color: #FF5B5B;
    border-radius: 8px;
  }
}

.chart-wrap, .heat-chart {
  flex: 1;
  min-height: 0;
}

.alert-section {
  flex: 0 0 28%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.alert-scroll {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  &::-webkit-scrollbar { width: 2px; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 91, 91, 0.3); border-radius: 1px; }
}

.alert-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px;
  font-size: 13px;
  border-radius: 3px;
  animation: alertSlideIn 0.3s ease-out;
  border-left: 2px solid transparent;

  &.level-high {
    border-left-color: #FF5B5B;
    background: rgba(255, 91, 91, 0.05);
    animation: alertBlink 2s ease-in-out infinite;
  }
  &.level-medium {
    border-left-color: #FF8A34;
    background: rgba(255, 138, 52, 0.03);
  }
  &.level-low {
    border-left-color: #FFB347;
    background: transparent;
  }
}

@keyframes alertBlink {
  0%, 100% { background: rgba(255, 91, 91, 0.05); }
  50% { background: rgba(255, 91, 91, 0.12); }
}

@keyframes alertSlideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.alert-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  &.dot-high { background: #FF5B5B; box-shadow: 0 0 6px rgba(255, 91, 91, 0.6); animation: breathe 1s ease-in-out infinite; }
  &.dot-medium { background: #FF8A34; box-shadow: 0 0 6px rgba(255, 138, 52, 0.4); }
  &.dot-low { background: #FFB347; }
}

@keyframes breathe {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.alert-product { color: #00CFFF; font-weight: 600; flex: 0 0 40px; }
.alert-branch { color: #8899aa; flex: 0 0 50px; }
.alert-value { color: #FF5B5B; font-weight: 600; font-family: 'Courier New', monospace; flex: 0 0 50px; }
.alert-desc { color: #8899aa; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.alert-time { color: #4a5a6a; flex: 0 0 50px; text-align: right; font-size: 12px; }
</style>