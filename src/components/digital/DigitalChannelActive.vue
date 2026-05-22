<template>
  <div class="digital-channel-active">
    <div class="section-title">渠道活跃区 <span class="title-sub">CHANNEL ACTIVITY CENTER</span></div>
    <div class="channel-content">
      <div class="channel-metrics">
        <div class="metric"><span class="m-label">渠道活跃率</span><span class="m-value">{{ activeData.activeRate }}%<span class="m-change up">↑ {{ activeData.activeRateChange }}%</span></span></div>
        <div class="metric"><span class="m-label">登录频率/日</span><span class="m-value">{{ activeData.loginFreq }}次<span class="m-sub">高峰 {{ activeData.peakHour }}</span></span></div>
      </div>
      <div class="charts-grid">
        <div class="chart-box">
          <div class="chart-label">24h活跃热力</div>
          <BaseChart :option="heatOption" height="100%" width="100%" />
        </div>
        <div class="chart-box">
          <div class="chart-label">热门功能TOP8</div>
          <div class="top-list">
            <div v-for="(item,idx) in activeData.hotFunctions" :key="item.rank" class="top-item" :class="{ top3: item.rank <= 3 }">
              <span class="t-rank">{{ idx < 3 ? ['🥇','🥈','🥉'][idx] : item.rank }}</span>
              <span class="t-name">{{ item.name }}</span>
              <span class="t-bar"><span class="t-fill" :style="{ width: (item.count / activeData.hotFunctions[0].count) * 100 + '%' }"></span></span>
              <span class="t-count">{{ (item.count/10000).toFixed(1) }}万</span>
              <span class="t-change" :class="item.change >= 0 ? 'up' : 'down'">{{ item.change >= 0 ? '+' : '' }}{{ item.change }}%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-box behavior-box">
        <div class="chart-label">用户行为图谱</div>
        <BaseChart :option="behaviorOption" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { channelActiveData } from '@/mockData/digitalData.js'
const activeData = channelActiveData

const heatOption = computed(() => {
  const data = []
  activeData.hourHeat.forEach((row, i) => {
    row.forEach((v, j) => data.push([j, i, v]))
  })
  return {
    tooltip: { position: 'top', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 12 }, formatter: p => `${activeData.hours[p.value[0]]}<br/>渠道${['手机银行','企业手机银行','企业网银','微信银行'][p.value[1]]}: ${p.value[2]}K` },
    grid: { top: 5, left: 65, right: 15, bottom: 25 },
    xAxis: { type: 'category', data: activeData.hours, axisLabel: { color: '#4a5a6a', fontSize: 10, rotate: 30 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } } },
    yAxis: { type: 'category', data: ['手机银行','企业手机银行','企业网银','微信银行'], axisLabel: { color: '#8899aa', fontSize: 11 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } } },
    visualMap: { min: 0, max: 65, calculable: false, inRange: { color: ['rgba(0,229,255,0.05)','rgba(0,229,255,0.2)','rgba(0,229,255,0.4)','#00E5FF','#6C7BFF'] }, show: false },
    series: [{ type: 'heatmap', data, label: { show: true, color: '#8899aa', fontSize: 11, formatter: p => p.value[2] }, emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.5)' } } }]
  }
})

const behaviorOption = computed(() => ({
  tooltip: { trigger: 'item', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 }, formatter: '{b}' },
  radar: { indicator: activeData.behaviorData.map(d => ({ name: d.name, max: 100 })), center: ['50%','50%'], radius: '55%', axisName: { color: '#8899aa', fontSize: 12 }, splitArea: { areaStyle: { color: ['rgba(0,229,255,0.02)','rgba(0,229,255,0.01)'] } }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.12)' } }, splitLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } } },
  series: [{ type: 'radar', data: [{ value: activeData.behaviorData.map(d => d.value), name: '行为指数', areaStyle: { color: 'rgba(0,229,255,0.12)' }, lineStyle: { color: '#00E5FF', width: 2 }, itemStyle: { color: '#00E5FF' } }], symbol: 'circle', symbolSize: 4, animationDuration: 1500 }]
}))
</script>

<style lang="scss" scoped>
.digital-channel-active { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #00E5FF; padding: 6px 12px 3px; text-shadow: 0 0 10px rgba(0,229,255,0.3); letter-spacing: 2px; flex-shrink: 0; &::before { content: '◆ '; color: #00CFFF; } .title-sub { font-size: 13px; color: rgba(0,229,255,0.2); letter-spacing: 3px; margin-left: 6px; } }
.channel-content { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 2px 8px 8px; min-height: 0; }
.channel-metrics { display: flex; gap: 4px; flex-shrink: 0; }
.metric { flex: 1; padding: 4px 6px; background: rgba(8,24,38,0.5); border: 1px solid rgba(0,229,255,0.08); border-radius: 6px; text-align: center; .m-label { display: block; font-size: 13px; color: #4a5a6a; } .m-value { font-size: 18px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; text-shadow: 0 0 10px rgba(0,229,255,0.3); .m-change { font-size: 14px; font-weight: 600; margin-left: 8px; &.up { color: #00FFC6; } } .m-sub { display: inline-block; font-size: 14px; color: #4a5a6a; margin-left: 6px; font-weight: 400; } } }
.charts-grid { flex: 1; display: flex; gap: 8px; min-height: 0; }
.chart-box { flex: 1; min-height: 0; position: relative; }
.chart-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.top-list { position: absolute; top: 20px; left: 4px; right: 4px; bottom: 4px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.3); border-radius: 1px; } }
.top-item { display: flex; align-items: center; gap: 4px; padding: 3px 6px; font-size: 14px; border-radius: 4px; transition: background 0.3s; cursor: pointer; &:hover { background: rgba(0,229,255,0.05); } &.top3 { background: rgba(0,229,255,0.04); } }
.t-rank { flex: 0 0 24px; text-align: center; font-size: 16px; }
.t-name { flex: 0 0 56px; color: #e0e8f0; font-weight: 500; white-space: nowrap; }
.t-bar { flex: 1; height: 6px; background: rgba(0,229,255,0.08); border-radius: 3px; overflow: hidden; }
.t-fill { display: block; height: 100%; background: linear-gradient(90deg,#00E5FF,#33D1FF); border-radius: 3px; transition: width 1s ease; }
.t-count { flex: 0 0 48px; text-align: right; color: #00E5FF; font-family: 'Courier New',monospace; font-weight: 600; font-size: 14px; }
.t-change { flex: 0 0 44px; text-align: right; font-size: 14px; font-weight: 600; &.up { color: #00FFC6; } &.down { color: #FF5B5B; } }
.behavior-box { flex: 0 0 35%; min-height: 0; }
</style>