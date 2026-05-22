<template>
  <div class="risk-kpi-band">
    <div class="section-title">核心风险KPI <span class="title-sub">RISK CORE INDICATORS</span></div>
    <div class="kpi-row">
      <div v-for="kpi in kpiList" :key="kpi.id" class="kpi-card">
        <div class="kpi-top"><span class="kpi-label">{{ kpi.label }}</span></div>
        <template v-if="kpi.id === 1">
          <div class="kpi-value-wrap"><span class="kpi-number">{{ kpi.value }}<span class="kpi-unit">{{ kpi.unit }}</span></span></div>
          <div class="kpi-extras"><span class="kpi-change" :class="kpi.change >= 0 ? 'up' : 'down'"><i class="arrow">{{ kpi.change >= 0 ? '↑' : '↓' }}</i>{{ Math.abs(kpi.change) }}%</span></div>
          <div class="kpi-spark">
            <svg :width="sparkW" :height="sparkH">
              <defs><linearGradient id="r-grad-1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00FF99" stop-opacity="0.2"/><stop offset="100%" stop-color="#00CC7A" stop-opacity="0.8"/></linearGradient></defs>
              <path :d="getSparkPath(kpi.sparkData)" fill="none" stroke="url(#r-grad-1)" stroke-width="1.5" opacity="0.8"/>
            </svg>
          </div>
        </template>
        <template v-else>
          <div class="gauge-wrap">
            <div class="gauge-track"><div class="gauge-fill" :style="{ width: calcGauge(kpi) + '%' }" :class="gaugeClass(kpi)"></div></div>
            <div class="gauge-value"><span class="kpi-number">{{ kpi.value }}<span class="kpi-unit">{{ kpi.unit }}</span></span></div>
            <div class="kpi-extras"><span class="kpi-change" :class="kpi.change >= 0 ? 'up' : 'down'"><i class="arrow">{{ kpi.change >= 0 ? '↑' : '↓' }}</i>{{ Math.abs(kpi.change) }}<span class="kpi-unit-small">{{ kpi.unit }}</span></span><span class="thresh">阈 {{ kpi.threshold }}{{ kpi.unit }}</span></div>
          </div>
        </template>
        <div class="kpi-glow"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { riskKpiData } from '@/mockData/riskData.js'
const sparkW = 80, sparkH = 22
const kpiList = computed(() => riskKpiData)
function getSparkPath(data) { if (!data||data.length<2) return ''; const w=sparkW,h=sparkH,min=Math.min(...data),max=Math.max(...data),range=max-min||1,step=w/(data.length-1); return 'M'+data.map((v,i)=>`${i*step},${h-((v-min)/range)*(h-4)-2}`).join(' L') }
function calcGauge(kpi) { return Math.min(100, (kpi.value / kpi.threshold) * 100) }
function gaugeClass(kpi) { if (kpi.id === 4 || kpi.id === 5) return kpi.value >= kpi.threshold ? 'safe' : 'warn'; return kpi.value <= kpi.threshold ? 'safe' : kpi.value <= kpi.threshold * 1.2 ? 'warn' : 'danger' }
</script>

<style lang="scss" scoped>
.risk-kpi-band { padding: 0 16px; margin-bottom: 6px; }
.section-title { font-size: 17px; font-weight: 600; color: #00FF99; padding: 6px 0 4px; text-shadow: 0 0 10px rgba(0,255,153,0.3); letter-spacing: 2px; &::before { content: '◆ '; color: #00CC7A; } .title-sub { font-size: 13px; color: rgba(0,255,153,0.25); letter-spacing: 3px; margin-left: 8px; } }
.kpi-row { display: flex; gap: 10px; padding: 4px 0 6px; }
.kpi-card { position: relative; flex: 1; min-width: 0; padding: 8px 12px; background: rgba(10,42,32,0.5); border: 1px solid rgba(0,255,153,0.12); border-radius: 8px; overflow: hidden; transition: all 0.4s; cursor: pointer;
  &:hover { border-color: rgba(0,255,153,0.3); box-shadow: 0 0 20px rgba(0,255,153,0.1); transform: translateY(-2px); }
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,transparent,#00FF99,#00CC7A,transparent); background-size: 200% 100%; animation: flowBorder 3s linear infinite; }
}
@keyframes flowBorder { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
.kpi-top { margin-bottom: 4px; }
.kpi-label { font-size: 15px; color: #8899aa; }
.kpi-value-wrap { margin-bottom: 3px; }
.kpi-number { font-size: 24px; font-weight: 700; color: #00FF99; font-family: 'Courier New',monospace; text-shadow: 0 0 12px rgba(0,255,153,0.4); }
.kpi-unit { font-size: 15px; color: #4a5a6a; margin-left: 2px; }
.kpi-unit-small { font-size: 13px; color: #4a5a6a; margin-left: 1px; }
.kpi-extras { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
.kpi-change { font-size: 15px; font-weight: 600; &.up { color: #00FFC6; } &.down { color: #FF5B5B; } .arrow { font-size: 14px; margin-right: 1px; } }
.thresh { font-size: 13px; color: #4a5a6a; }
.kpi-spark svg { display: block; }
.gauge-wrap { padding: 2px 0; }
.gauge-track { height: 6px; background: rgba(0,255,153,0.08); border-radius: 3px; overflow: hidden; margin-bottom: 4px; }
.gauge-fill { height: 100%; border-radius: 3px; transition: width 1s ease; &.safe { background: linear-gradient(90deg,#00FF99,#00CC7A); } &.warn { background: linear-gradient(90deg,#FF9F43,#FF5B5B); } &.danger { background: linear-gradient(90deg,#FF5B5B,#FF2D2D); } }
.gauge-value { margin-bottom: 2px; }
.kpi-glow { position: absolute; inset: 0; border-radius: 8px; pointer-events: none; transition: opacity 0.4s; opacity: 0; .kpi-card:hover & { opacity: 1; box-shadow: inset 0 0 30px rgba(0,255,153,0.06); } }
</style>