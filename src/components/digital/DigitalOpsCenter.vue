<template>
  <div class="digital-ops-center">
    <div class="section-title">数字运营中枢 <span class="title-sub">DIGITAL OPERATIONS HUB</span></div>
    <div class="center-content">
      <div class="center-left">
        <div class="chart-label">数字运营雷达</div>
        <div class="radar-wrap"><BaseChart :option="radarOption" height="100%" width="100%" /></div>
        <div class="radar-metrics">
          <div class="rm-item"><span class="rm-label">线上增长指数</span><span class="rm-value">{{ centerData.growthIndex }}</span></div>
          <div class="rm-item"><span class="rm-label">渠道活跃指数</span><span class="rm-value">{{ centerData.channelIndex }}</span></div>
        </div>
      </div>
      <div class="center-mid">
        <div class="energy-core">
          <div class="core-ring outer-ring"></div>
          <div class="core-ring middle-ring"></div>
          <div class="core-ring inner-ring"></div>
          <div class="core-particles"><span v-for="i in 12" :key="i" class="particle" :style="getParticleStyle(i)"></span></div>
          <div class="scan-beam"></div>
          <div class="ripple r1"></div><div class="ripple r2"></div><div class="ripple r3"></div>
          <div class="core-content">
            <div class="core-label">当前线上活跃用户</div>
            <div class="core-value">{{ centerData.onlineActiveUsers }}<span class="unit">万</span></div>
            <div class="core-change up"><i class="arrow">↑</i>{{ centerData.activeChange }}% 较昨日</div>
            <div class="core-divider"></div>
            <div class="core-subs">
              <div class="sub-item"><span class="sub-label">当前交易笔数</span><span class="sub-value">{{ (centerData.currentTxCount/1000).toFixed(1) }}K</span></div>
              <div class="sub-item"><span class="sub-label">当前支付笔数</span><span class="sub-value">{{ (centerData.currentPayCount/1000).toFixed(1) }}K</span></div>
              <div class="sub-item"><span class="sub-label">当前开户数</span><span class="sub-value">{{ centerData.currentOpenCount }}</span></div>
              <div class="sub-item"><span class="sub-label">线上增长指数</span><span class="sub-value">{{ centerData.growthIndex }}</span></div>
            </div>
          </div>
        </div>
        <div class="core-metrics">
          <div class="metric"><span class="m-label">交易笔数</span><span class="m-value">{{ (centerData.currentTxCount/10000).toFixed(1) }}万</span></div>
          <div class="metric"><span class="m-label">支付笔数</span><span class="m-value">{{ (centerData.currentPayCount/10000).toFixed(1) }}万</span></div>
          <div class="metric"><span class="m-label">开户数</span><span class="m-value">{{ centerData.currentOpenCount }}</span></div>
          <div class="metric"><span class="m-label">活跃指数</span><span class="m-value">{{ centerData.growthIndex }}</span></div>
        </div>
      </div>
      <div class="center-right">
        <div class="chart-box"><div class="chart-label">渠道热度</div><BaseChart :option="channelOption" height="100%" width="100%" /></div>
        <div class="chart-box"><div class="chart-label">平台增长趋势</div><BaseChart :option="trendOption" height="100%" width="100%" /></div>
        <div class="chart-box"><div class="chart-label">支付热度</div><BaseChart :option="payOption" height="100%" width="100%" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { digitalCenterData } from '@/mockData/digitalData.js'
const centerData = digitalCenterData
function getParticleStyle(i) { const angle = (i-1)*30; return { transform: `rotate(${angle}deg) translateY(-62px)`, animationDelay: `${i*0.25}s` } }

const radarOption = computed(() => ({
  radar: { indicator: centerData.radarData.indicators.map(n => ({ name: n, max: 100 })), center: ['50%','50%'], radius: '60%', axisName: { color: '#8899aa', fontSize: 13 }, splitArea: { areaStyle: { color: ['rgba(0,229,255,0.02)','rgba(0,229,255,0.01)'] } }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.15)' } }, splitLine: { lineStyle: { color: 'rgba(0,229,255,0.1)' } } },
  series: [{ type: 'radar', data: [{ value: centerData.radarData.current, name: '本期', areaStyle: { color: 'rgba(0,229,255,0.15)' }, lineStyle: { color: '#00E5FF', width: 2 }, itemStyle: { color: '#00E5FF' } },{ value: centerData.radarData.last, name: '上期', areaStyle: { color: 'rgba(108,123,255,0.08)' }, lineStyle: { color: 'rgba(108,123,255,0.4)', width: 1, type: 'dashed' }, itemStyle: { color: 'rgba(108,123,255,0.4)' } }], symbol: 'circle', symbolSize: 4, animationDuration: 1500 }]
}))

const channelOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 60, right: 8, bottom: 8 },
  xAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  yAxis: { type: 'category', data: centerData.channelHeat.map(d => d.name).reverse(), axisLabel: { color: '#8899aa', fontSize: 12 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  series: [{ type: 'bar', data: centerData.channelHeat.map(d => d.value).reverse(), barWidth: 12, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'rgba(0,229,255,0.3)' },{ offset: 1, color: '#00E5FF' }] }, borderRadius: [0,3,3,0] }, label: { show: true, position: 'right', color: '#00E5FF', fontSize: 12, fontFamily: 'Courier New, monospace', fontWeight: 600 } }]
}))

const trendOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 32, right: 8, bottom: 14 },
  xAxis: { type: 'category', data: centerData.growthTrend.months, axisLabel: { color: '#4a5a6a', fontSize: 10 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  yAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 10 } },
  series: [{ type: 'line', data: centerData.growthTrend.values, smooth: true, symbol: 'none', lineStyle: { color: '#00E5FF', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,229,255,0.3)' },{ offset: 1, color: 'rgba(0,229,255,0.01)' }] } } }]
}))

const payOption = computed(() => ({
  tooltip: { trigger: 'axis', backgroundColor: 'rgba(5,11,22,0.95)', borderColor: 'rgba(0,229,255,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 } },
  grid: { top: 8, left: 60, right: 8, bottom: 8 },
  xAxis: { type: 'value', splitLine: { lineStyle: { color: 'rgba(0,229,255,0.04)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
  yAxis: { type: 'category', data: centerData.payHeat.map(d => d.name).reverse(), axisLabel: { color: '#8899aa', fontSize: 12 }, axisLine: { lineStyle: { color: 'rgba(0,229,255,0.08)' } }, axisTick: { show: false } },
  series: [{ type: 'bar', data: centerData.payHeat.map(d => d.value).reverse(), barWidth: 12, itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'rgba(108,123,255,0.3)' },{ offset: 1, color: '#6C7BFF' }] }, borderRadius: [0,3,3,0] }, label: { show: true, position: 'right', color: '#6C7BFF', fontSize: 12, fontFamily: 'Courier New, monospace', fontWeight: 600 } }]
}))
</script>

<style lang="scss" scoped>
.digital-ops-center { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #00E5FF; padding: 6px 12px 3px; text-shadow: 0 0 10px rgba(0,229,255,0.3); letter-spacing: 2px; flex-shrink: 0; &::before { content: '◆ '; color: #00CFFF; } .title-sub { font-size: 13px; color: rgba(0,229,255,0.2); letter-spacing: 3px; margin-left: 6px; } }
.center-content { flex: 1; display: flex; gap: 6px; padding: 2px 6px 6px; min-height: 0; }
.center-left { flex: 0 0 22%; display: flex; flex-direction: column; gap: 4px; }
.radar-wrap { flex: 1; min-height: 0; }
.radar-metrics { display: flex; gap: 4px; .rm-item { flex: 1; text-align: center; padding: 4px; background: rgba(8,24,38,0.4); border-radius: 4px; border: 1px solid rgba(0,229,255,0.1); .rm-label { display: block; font-size: 13px; color: #4a5a6a; margin-bottom: 1px; } .rm-value { font-size: 16px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; } } }
.chart-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.center-mid { flex: 0 0 52%; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.energy-core { position: relative; width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.core-ring { position: absolute; border-radius: 50%; border: 1px solid transparent;
  &.outer-ring { width: 100%; height: 100%; border-color: rgba(0,229,255,0.12); box-shadow: 0 0 25px rgba(0,229,255,0.04),inset 0 0 25px rgba(0,229,255,0.04); animation: rotateRing 15s linear infinite; &::before { content: ''; position: absolute; top: -1.5px; left: 50%; width: 22px; height: 3px; background: #00E5FF; border-radius: 2px; box-shadow: 0 0 10px #00E5FF, 0 0 20px rgba(0,229,255,0.4); transform: translateX(-50%); } }
  &.middle-ring { width: 82%; height: 82%; border-color: rgba(108,123,255,0.1); animation: rotateRing 10s linear infinite reverse; &::before { content: ''; position: absolute; top: -1px; left: 50%; width: 14px; height: 2px; background: #6C7BFF; border-radius: 2px; box-shadow: 0 0 8px #6C7BFF; transform: translateX(-50%); } }
  &.inner-ring { width: 62%; height: 62%; border-color: rgba(0,255,198,0.08); animation: rotateRing 8s linear infinite; &::before { content: ''; position: absolute; top: -1px; left: 50%; width: 10px; height: 2px; background: #00FFC6; border-radius: 2px; box-shadow: 0 0 6px #00FFC6; transform: translateX(-50%); } }
}
@keyframes rotateRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.core-particles { position: absolute; width: 150px; height: 150px; .particle { position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; margin: -2px; background: #00E5FF; border-radius: 50%; box-shadow: 0 0 8px #00E5FF, 0 0 16px rgba(0,229,255,0.4); animation: particlePulse 2s ease-in-out infinite; } }
@keyframes particlePulse { 0%,100% { opacity: 0.2; transform: translate(-50%,-50%) scale(0.5); } 50% { opacity: 1; transform: translate(-50%,-50%) scale(1.3); } }
.scan-beam { position: absolute; width: 200px; height: 200px; background: conic-gradient(transparent 0deg, rgba(0,229,255,0.06) 45deg, transparent 90deg); border-radius: 50%; animation: scanRotate 4s linear infinite; pointer-events: none; }
@keyframes scanRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.core-content { position: relative; z-index: 2; text-align: center; }
.core-label { font-size: 15px; color: #8899aa; margin-bottom: 2px; letter-spacing: 2px; }
.core-value { font-size: 38px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; text-shadow: 0 0 25px rgba(0,229,255,0.5), 0 0 50px rgba(0,229,255,0.2); .unit { font-size: 17px; color: #4a5a6a; margin-left: 4px; } }
.core-change { font-size: 15px; font-weight: 600; margin-top: 2px; &.up { color: #00FFC6; } .arrow { font-size: 12px; } }
.core-divider { width: 80px; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,229,255,0.5), transparent); margin: 5px auto; }
.core-subs { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 10px; margin-top: 3px; }
.sub-item { display: flex; justify-content: space-between; font-size: 14px; .sub-label { color: #4a5a6a; } .sub-value { color: #00E5FF; font-weight: 600; font-family: 'Courier New',monospace; } }
.ripple { position: absolute; border-radius: 50%; border: 1px solid rgba(0,229,255,0.12); animation: rippleExpand 3.5s ease-out infinite; pointer-events: none; &.r1 { width: 250px; height: 250px; animation-delay: 0s; } &.r2 { width: 280px; height: 280px; animation-delay: 1.2s; } &.r3 { width: 310px; height: 310px; animation-delay: 2.4s; } }
@keyframes rippleExpand { 0% { transform: scale(0.85); opacity: 0.5; } 100% { transform: scale(1.4); opacity: 0; } }
.core-metrics { display: flex; gap: 5px; width: 100%; .metric { flex: 1; text-align: center; padding: 5px 4px; background: rgba(8,24,38,0.5); border-radius: 6px; border: 1px solid rgba(0,229,255,0.1); .m-label { display: block; font-size: 13px; color: #4a5a6a; margin-bottom: 1px; } .m-value { font-size: 15px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; } } }
.center-right { flex: 0 0 26%; display: flex; flex-direction: column; gap: 4px; }
.chart-box { flex: 1; min-height: 0; position: relative; }
</style>