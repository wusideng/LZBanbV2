<template>
  <div class="risk-migration-area">
    <div class="section-title">风险迁徙区 <span class="title-sub">RISK MIGRATION</span></div>
    <div class="migration-content">
      <div class="five-cards">
        <div v-for="c in data.fiveCategories" :key="c.name" class="five-card" :style="{ borderColor: c.color + '40' }">
          <span class="fc-name" :style="{ color: c.color }">{{ c.name }}</span>
          <span class="fc-value">{{ c.value }}<span class="fc-unit">亿</span></span>
          <span class="fc-pct">{{ c.pct }}%</span>
          <div class="fc-bar"><div class="fc-fill" :style="{ width: c.pct + '%', background: c.color }"></div></div>
        </div>
      </div>
      <div class="chart-section">
        <div class="chart-label">迁徙率趋势</div>
        <div class="chart-wrap"><BaseChart :option="trendOption" height="100%" width="100%" /></div>
      </div>
      <div class="chart-section">
        <div class="chart-label">迁徙矩阵</div>
        <div class="matrix-wrap">
          <div class="matrix-header">
            <span class="mh-empty"></span>
            <span v-for="h in ['正常','关注','次级','可疑','损失']" :key="h" class="mh-cell">{{ h }}</span>
          </div>
          <div v-for="row in ['正常','关注','次级','可疑','损失']" :key="row" class="matrix-row">
            <span class="mr-label">{{ row }}</span>
            <span v-for="col in ['正常','关注','次级','可疑','损失']" :key="col" class="mr-cell" :class="{ highlight: row === col, flow: getMatrixValue(row,col) > 0 && row !== col }">
              {{ getMatrixValue(row, col) }}亿
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { riskMigrationData } from '@/mockData/riskData.js'
const data = riskMigrationData

function getMatrixValue(from, to) {
  const item = data.migrationMatrix.find(m => m.from === from && m.to === to)
  return item ? item.value : 0
}

const trendOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(6,20,15,0.95)', borderColor: 'rgba(0,255,153,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 32, right: 10, bottom: 14 },
  xAxis: { type: 'category', data: data.migrationTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(0,255,153,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,255,153,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data: data.migrationTrend.rate, smooth: true, symbol: 'none', lineStyle: { color: '#00FF99', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,255,153,0.3)' },{ offset: 1, color: 'rgba(0,255,153,0.01)' }] } } }]
}))
</script>

<style lang="scss" scoped>
.risk-migration-area { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #00FF99; padding: 6px 12px 3px; text-shadow: 0 0 10px rgba(0,255,153,0.3); letter-spacing: 2px; flex-shrink: 0; &::before { content: '◆ '; color: #00CC7A; } .title-sub { font-size: 13px; color: rgba(0,255,153,0.2); letter-spacing: 3px; margin-left: 6px; } }
.migration-content { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 2px 8px 8px; min-height: 0; }
.five-cards { display: flex; gap: 4px; flex-shrink: 0; }
.five-card { flex: 1; padding: 4px 6px; background: rgba(10,42,32,0.4); border: 1px solid; border-radius: 6px; text-align: center; .fc-name { display: block; font-size: 13px; font-weight: 600; margin-bottom: 1px; } .fc-value { display: block; font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; .fc-unit { font-size: 12px; color: #4a5a6a; margin-left: 1px; } } .fc-pct { font-size: 13px; color: #8899aa; } .fc-bar { height: 3px; background: rgba(0,255,153,0.06); border-radius: 2px; margin-top: 2px; overflow: hidden; .fc-fill { height: 100%; border-radius: 2px; transition: width 1s ease; } } }
.chart-section { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.chart-label { font-size: 13px; color: #4a5a6a; padding: 2px 4px; letter-spacing: 1px; flex-shrink: 0; }
.chart-wrap { flex: 1; min-height: 0; }
.matrix-wrap { flex: 1; min-height: 0; padding: 2px 0; font-size: 13px; overflow-x: auto; }
.matrix-header { display: flex; height: 24px; align-items: center; .mh-empty { flex: 0 0 44px; } .mh-cell { flex: 1; text-align: center; color: #4a5a6a; font-size: 12px; } }
.matrix-row { display: flex; height: 28px; align-items: center; border-bottom: 1px solid rgba(0,255,153,0.03); .mr-label { flex: 0 0 44px; color: #8899aa; font-size: 13px; } .mr-cell { flex: 1; text-align: center; font-family: 'Courier New',monospace; color: #4a5a6a; font-size: 12px; &.highlight { color: #00FF99; font-weight: 600; } &.flow { color: #FF9F43; } } }
</style>