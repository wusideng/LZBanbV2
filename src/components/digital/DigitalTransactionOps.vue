<template>
  <div class="digital-tx-ops">
    <div class="tx-section">
      <div class="section-title">交易运营分析</div>
      <div class="tx-content">
        <div class="tx-summary">
          <div class="s-item"><span class="s-label">月交易金额</span><span class="s-value">{{ txData.monthlyAmount }}<span class="s-unit">亿</span></span></div>
          <div class="s-divider"></div>
          <div class="s-item"><span class="s-label">月交易笔数</span><span class="s-value">{{ txData.monthlyCount }}<span class="s-unit">万笔</span></span></div>
          <div class="s-divider"></div>
          <div class="s-item"><span class="s-label">年累计金额</span><span class="s-value">{{ txData.yearlyAmount }}<span class="s-unit">亿</span></span></div>
          <div class="s-divider"></div>
          <div class="s-item"><span class="s-label">年累计笔数</span><span class="s-value">{{ txData.yearlyCount }}<span class="s-unit">万笔</span></span></div>
        </div>
        <div class="tx-charts">
          <div class="chart-box"><div class="chart-label">交易金额趋势</div><BaseChart :option="amtOption" height="100%" width="100%" /></div>
          <div class="chart-box"><div class="chart-label">交易笔数趋势</div><BaseChart :option="cntOption" height="100%" width="100%" /></div>
          <div class="chart-box"><div class="chart-label">交易类型分布</div><BaseChart :option="distOption" height="100%" width="100%" /></div>
        </div>
      </div>
    </div>
    <div class="pay-section">
      <div class="section-title">支付生态分析</div>
      <div class="pay-content">
        <div class="pay-grid">
          <div v-for="item in txData.payEcosystem" :key="item.name" class="pay-card">
            <div class="pc-name">{{ item.name }}</div>
            <div class="pc-value">{{ item.value }}<span class="pc-unit">亿</span></div>
            <div class="pc-bar"><div class="pc-fill" :style="{ width: item.share + '%' }"></div></div>
            <div class="pc-extras"><span class="pc-share">占比 {{ item.share }}%</span><span class="pc-change" :class="item.growth >= 0 ? 'up' : 'down'">{{ item.growth >= 0 ? '↑' : '↓' }}{{ Math.abs(item.growth) }}%</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { transactionData } from '@/mockData/digitalData.js'
const txData = transactionData

const amtOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: txData.txTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data: txData.txTrend.amount, smooth: true, symbol: 'none', lineStyle: { color: '#00E5FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,229,255,0.3)' },{ offset: 1, color: 'rgba(0,229,255,0.01)' }] } } }]
}))

const cntOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 36, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: txData.txTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'bar', data: txData.txTrend.count, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#6C7BFF' },{ offset: 1, color: 'rgba(108,123,255,0.2)' }] }, borderRadius: [3,3,0,0] }, barWidth: 10 }]
}))

const distOption = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 }, formatter: '{b}: {c}%' },
  series: [{ type: 'pie', radius: ['35%','60%'], center: ['50%','50%'], data: txData.txTypeDist.map(d => ({ name: d.name, value: d.value, itemStyle: { color: d.color } })), label: { color: '#8899aa', fontSize: 11, formatter: '{b}\n{d}%' }, labelLine: { lineStyle: { color: 'rgba(0,229,255,0.15)' } }, itemStyle: { borderRadius: 3 }, animationType: 'scale', animationDuration: 1000 }]
}))
</script>

<style lang="scss" scoped>
.digital-tx-ops { display: flex; gap: 8px; padding: 0 16px 4px; height: 100%; }
.tx-section, .pay-section { display: flex; flex-direction: column; background: rgba(8,24,38,0.4); border: 1px solid rgba(0,229,255,0.08); border-radius: 8px; overflow: hidden; }
.tx-section { flex: 1.5; }
.pay-section { flex: 1; }
.section-title { font-size: 16px; font-weight: 600; color: #00E5FF; padding: 5px 10px; text-shadow: 0 0 10px rgba(0,229,255,0.3); letter-spacing: 2px; flex-shrink: 0; border-bottom: 1px solid rgba(0,229,255,0.06); &::before { content: '◆ '; color: #00CFFF; } }
.tx-content { flex: 1; display: flex; flex-direction: column; padding: 4px 8px; min-height: 0; }
.tx-summary { display: flex; align-items: center; gap: 0; margin-bottom: 4px; flex-shrink: 0; }
.s-item { flex: 1; text-align: center; padding: 4px 0; .s-label { display: block; font-size: 13px; color: #4a5a6a; } .s-value { font-size: 20px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; text-shadow: 0 0 10px rgba(0,229,255,0.3); .s-unit { font-size: 14px; color: #4a5a6a; margin-left: 2px; } } }
.s-divider { width: 1px; height: 30px; background: linear-gradient(180deg, transparent, rgba(0,229,255,0.15), transparent); }
.tx-charts { flex: 1; display: flex; gap: 8px; min-height: 0; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.chart-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.pay-content { flex: 1; padding: 6px 10px; min-height: 0; overflow-y: auto; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.3); border-radius: 1px; } }
.pay-grid { display: flex; flex-direction: column; gap: 6px; }
.pay-card { padding: 8px 10px; background: rgba(8,24,38,0.5); border: 1px solid rgba(0,229,255,0.08); border-radius: 6px; transition: all 0.3s; &:hover { border-color: rgba(0,229,255,0.25); box-shadow: 0 0 12px rgba(0,229,255,0.08); } }
.pc-name { font-size: 15px; font-weight: 600; color: #e0e8f0; margin-bottom: 3px; }
.pc-value { font-size: 22px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; text-shadow: 0 0 10px rgba(0,229,255,0.3); .pc-unit { font-size: 14px; color: #4a5a6a; margin-left: 2px; } }
.pc-bar { height: 4px; background: rgba(0,229,255,0.08); border-radius: 2px; overflow: hidden; margin: 4px 0; }
.pc-fill { height: 100%; background: linear-gradient(90deg,#00E5FF,#33D1FF); border-radius: 2px; transition: width 1s ease; }
.pc-extras { display: flex; justify-content: space-between; font-size: 14px; .pc-share { color: #4a5a6a; } .pc-change { font-weight: 600; &.up { color: #00FFC6; } &.down { color: #FF5B5B; } } }
</style>