<template>
  <div class="digital-kpi-band">
    <div class="section-title">核心线上运营KPI <span class="title-sub">DIGITAL OPERATIONS CORE KPIs</span></div>
    <div class="kpi-row">
      <div v-for="kpi in kpiList" :key="kpi.id" class="kpi-card" @mouseenter="kpi.hover = true" @mouseleave="kpi.hover = false">
        <div class="kpi-top">
          <span class="kpi-label">{{ kpi.label }}</span>
          <span class="kpi-dot" :class="kpi.change >= 0 ? 'up' : 'down'"></span>
        </div>
        <div class="kpi-value-wrap">
          <span class="kpi-number">{{ kpi.value }}</span>
          <span class="kpi-unit">{{ kpi.unit }}</span>
        </div>
        <div class="kpi-extras">
          <span class="kpi-change" :class="kpi.change >= 0 ? 'up' : 'down'"><i class="arrow">{{ kpi.change >= 0 ? '↑' : '↓' }}</i>{{ Math.abs(kpi.change) }}%</span>
          <span class="kpi-daily">日增 {{ kpi.daily >= 0 ? '+' : '' }}{{ kpi.daily }}</span>
        </div>
        <div class="kpi-spark">
          <svg :width="sparkW" :height="sparkH">
            <defs><linearGradient :id="'d-grad-'+kpi.id" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00E5FF" stop-opacity="0.2"/><stop offset="100%" stop-color="#33D1FF" stop-opacity="0.8"/></linearGradient></defs>
            <path :d="getSparkPath(kpi.sparkData)" fill="none" :stroke="'url(#d-grad-'+kpi.id+')'" stroke-width="1.5" opacity="0.8"/>
          </svg>
        </div>
        <div class="kpi-glow" :class="{ active: kpi.hover }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { digitalKpiData } from '@/mockData/digitalData.js'
const sparkW = 90, sparkH = 24
const kpiList = computed(() => digitalKpiData.map(d => ({ ...d, hover: false })))
function getSparkPath(data) {
  if (!data || data.length < 2) return ''
  const w = sparkW, h = sparkH, min = Math.min(...data), max = Math.max(...data), range = max - min || 1, step = w / (data.length - 1)
  return 'M' + data.map((v,i) => `${i*step},${h-((v-min)/range)*(h-4)-2}`).join(' L')
}
</script>

<style lang="scss" scoped>
.digital-kpi-band { padding: 0 16px; margin-bottom: 6px; }
.section-title { font-size: 17px; font-weight: 600; color: #00E5FF; padding: 6px 0 4px; text-shadow: 0 0 10px rgba(0,229,255,0.3); letter-spacing: 2px; &::before { content: '◆ '; color: #00CFFF; } .title-sub { font-size: 13px; color: rgba(0,229,255,0.25); letter-spacing: 3px; margin-left: 8px; } }
.kpi-row { display: flex; gap: 10px; padding: 4px 0 6px; }
.kpi-card { position: relative; flex: 1; min-width: 0; padding: 8px 12px; background: rgba(8,24,38,0.6); border: 1px solid rgba(0,229,255,0.12); border-radius: 8px; cursor: pointer; transition: all 0.4s; overflow: hidden;
  &:hover { border-color: rgba(0,229,255,0.35); box-shadow: 0 0 20px rgba(0,229,255,0.12); transform: translateY(-2px); }
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,transparent,#00E5FF,#33D1FF,transparent); background-size: 200% 100%; animation: flowBorder 3s linear infinite; }
}
@keyframes flowBorder { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
.kpi-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.kpi-label { font-size: 15px; color: #8899aa; white-space: nowrap; }
.kpi-dot { width: 5px; height: 5px; border-radius: 50%; &.up { background: #00FFC6; box-shadow: 0 0 4px rgba(0,255,198,0.6); } &.down { background: #FF5B5B; box-shadow: 0 0 4px rgba(255,91,91,0.6); } }
.kpi-value-wrap { display: flex; align-items: baseline; gap: 4px; margin-bottom: 3px; }
.kpi-number { font-size: 22px; font-weight: 700; color: #00E5FF; font-family: 'Courier New', monospace; text-shadow: 0 0 12px rgba(0,229,255,0.4); }
.kpi-unit { font-size: 15px; color: #4a5a6a; }
.kpi-extras { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
.kpi-change { font-size: 15px; font-weight: 600; &.up { color: #00FFC6; } &.down { color: #FF5B5B; } .arrow { font-size: 14px; margin-right: 1px; } }
.kpi-daily { font-size: 15px; color: #4a5a6a; }
.kpi-spark svg { display: block; }
.kpi-glow { position: absolute; inset: 0; border-radius: 8px; pointer-events: none; transition: opacity 0.4s; opacity: 0; &.active { opacity: 1; box-shadow: inset 0 0 30px rgba(0,229,255,0.06); } }
</style>