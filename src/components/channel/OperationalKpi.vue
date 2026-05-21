<template>
  <div class="ops-kpi-band">
    <div class="section-title">核心运营KPI</div>
    <div class="kpi-scroll">
      <div
        v-for="kpi in [kpiData[0], kpiData[1], kpiData[2], kpiData[3]]"
        :key="kpi.id"
        class="kpi-card"
        @mouseenter="kpi.hover = true"
        @mouseleave="kpi.hover = false"
      >
        <div class="kpi-top">
          <span class="kpi-label">{{ kpi.label }}</span>
          <span class="kpi-dot" :class="kpi.change >= 0 ? 'up' : 'down'"></span>
        </div>
        <div class="kpi-value-wrap">
          <span class="kpi-number">{{ formatNumber(kpi.value) }}</span>
          <span class="kpi-unit">{{ kpi.unit }}</span>
        </div>
        <div class="kpi-extras">
          <span class="kpi-change" :class="kpi.change >= 0 ? 'up' : 'down'">
            <i class="arrow">{{ kpi.change >= 0 ? '↑' : '↓' }}</i>
            {{ Math.abs(kpi.change) }}%
          </span>
        </div>
        <div class="kpi-spark">
          <svg :width="sparkW" :height="sparkH" class="spark-svg">
            <path :d="getSparkPath(kpi.sparkData)" fill="none" stroke="#00d4ff" stroke-width="1.2" opacity="0.6"/>
          </svg>
        </div>
      </div>
      <div class="gauge-group">
        <div class="mini-gauge" v-for="kpi in [kpiData[6], kpiData[7]]" :key="kpi.id">
          <div class="gauge-label">{{ kpi.label }}</div>
          <div class="gauge-value" :class="kpi.change >= 0 ? 'up' : 'down'">{{ kpi.value }}{{ kpi.unit }}</div>
          <div class="gauge-bar">
            <div class="gauge-fill" :style="{ width: kpi.value + '%' }" :class="kpi.change >= 0 ? 'up' : 'down'"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const sparkW = 60
const sparkH = 20

const kpiData = computed(() => {
  const raw = [
    { id: 1, label: '手机银行累计开户', value: 5862000, unit: '户', change: 12.5, sparkData: [4200,4500,4800,5100,4900,5200,5500,5300,5600,5800,5700,5862] },
    { id: 2, label: '月新增客户', value: 386500, unit: '户', change: 8.2, sparkData: [320,335,350,340,365,380,370,390,385,400,395,386.5] },
    { id: 3, label: '激活客户数', value: 4528000, unit: '户', change: 10.8, sparkData: [3800,3850,3900,3950,4000,4100,4050,4200,4300,4350,4450,4528] },
    { id: 4, label: '活跃客户数', value: 3265000, unit: '户', change: 6.5, sparkData: [2900,2950,3000,3050,3100,3150,3120,3180,3200,3220,3250,3265] },
    { id: 5, label: 'MAU', value: 1826000, unit: '户', change: 5.2, sparkData: [1680,1700,1720,1750,1760,1780,1775,1790,1800,1810,1820,1826] },
    { id: 6, label: 'DAU', value: 586200, unit: '户', change: 3.8, sparkData: [550,555,560,565,570,575,572,578,580,582,585,586.2] },
    { id: 7, label: '用户留存率', value: 72.5, unit: '%', change: 2.1, sparkData: [68,68.5,69,69.5,70,70.5,71,71.2,71.5,71.8,72.2,72.5] },
    { id: 8, label: '用户流失率', value: 8.6, unit: '%', change: -1.5, sparkData: [10.2,10,9.8,9.5,9.3,9.2,9,8.9,8.8,8.7,8.6,8.6] }
  ]
  return raw.map(d => ({ ...d, hover: false }))
})

function formatNumber(val) {
  if (val >= 10000) return (val / 10000).toFixed(1).replace(/\.0$/, '') + '万'
  if (val >= 1000) return val.toLocaleString()
  return String(val)
}

function getSparkPath(data) {
  if (!data || data.length < 2) return ''
  const w = sparkW
  const h = sparkH
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const stepX = w / (data.length - 1)
  const points = data.map((v, i) => {
    const x = i * stepX
    const y = h - ((v - min) / range) * (h - 4) - 2
    return `${x},${y}`
  })
  return `M${points.join(' L')}`
}
</script>

<style lang="scss" scoped>
.ops-kpi-band { padding: 0 16px; margin-bottom: 4px; }
.section-title {
  font-size: 13px; font-weight: 600; color: #00ffcc;
  padding: 6px 0 4px; text-shadow: 0 0 10px rgba(51,221,255,0.3);
  letter-spacing: 2px;
  &::before { content: '◆ '; color: #00d4ff; }
}
.kpi-scroll {
  display: flex; gap: 8px; align-items: center;
  &::-webkit-scrollbar { height: 2px; }
  &::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.3); }
}
.kpi-card {
  flex: 0 0 150px; padding: 8px 10px;
  background: rgba(15,32,56,0.6); border: 1px solid rgba(0,153,255,0.1);
  border-radius: 8px; cursor: pointer; position: relative; overflow: hidden;
  transition: all 0.4s;
  &:hover { border-color: rgba(0,153,255,0.4); box-shadow: 0 0 20px rgba(0,153,255,0.15); transform: translateY(-2px); }
  &::before { content: ''; position: absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,#00d4ff,transparent); background-size:200% 100%; animation:flowBorder 3s linear infinite; }
}
@keyframes flowBorder { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
.kpi-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
.kpi-label { font-size: 10px; color: #8899aa; white-space: nowrap; }
.kpi-dot { width: 5px; height: 5px; border-radius: 50%; &.up{background:#00ff95;box-shadow:0 0 4px rgba(0,255,149,0.6)} &.down{background:#ff5b5b;box-shadow:0 0 4px rgba(255,91,91,0.6)} }
.kpi-value-wrap { display: flex; align-items: baseline; gap: 4px; margin-bottom: 4px; }
.kpi-number { font-size: 18px; font-weight: 700; color: #00ffcc; font-family: 'Courier New',monospace; text-shadow:0 0 8px rgba(51,221,255,0.3); }
.kpi-unit { font-size: 10px; color: #4a5a6a; }
.kpi-extras { margin-bottom: 4px; }
.kpi-change { font-size: 10px; font-weight: 600; &.up{color:#00ff95} &.down{color:#ff5b5b} .arrow{font-size:9px;margin-right:1px} }

.gauge-group { display: flex; gap: 12px; flex: 0 0 200px; padding: 0 12px; }
.mini-gauge { flex: 1; text-align: center; }
.gauge-label { font-size: 10px; color: #8899aa; margin-bottom: 4px; }
.gauge-value { font-size: 22px; font-weight: 700; font-family: 'Courier New',monospace; margin-bottom: 4px; &.up{color:#00ff95} &.down{color:#ff5b5b} }
.gauge-bar { height: 4px; background: rgba(0,153,255,0.1); border-radius: 2px; overflow: hidden; }
.gauge-fill { height: 100%; border-radius: 2px; transition: width 1s ease; &.up{background:linear-gradient(90deg,#00ff95,#00ffcc)} &.down{background:linear-gradient(90deg,#ff5b5b,#ffb347)} }
</style>