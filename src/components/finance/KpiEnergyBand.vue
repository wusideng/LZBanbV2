<template>
  <div class="kpi-energy-band">
    <div class="section-title">经营核心KPI能量带</div>
    <div class="kpi-scroll">
      <div
        v-for="kpi in kpiList"
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
          <span class="kpi-daily">日增 {{ kpi.daily }}</span>
        </div>
        <div class="kpi-spark">
          <svg :width="sparkW" :height="sparkH" class="spark-svg">
            <path :d="getSparkPath(kpi.sparkData)" fill="none" stroke="#0099ff" stroke-width="1.2" opacity="0.6"/>
          </svg>
        </div>
        <div class="kpi-glow" :class="{ active: kpi.hover }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const sparkW = 80
const sparkH = 24

const kpiList = computed(() => {
  const data = [
    { id: 1, label: '零售客户总数', value: 3286500, unit: '户', change: 5.8, daily: 1280, sparkData: [3200,3400,3100,3600,3800,3500,4100,3900,4200,3800,4500,4280] },
    { id: 2, label: '本年新增客户', value: 285000, unit: '户', change: 8.2, daily: 1560, sparkData: [1200,1500,1800,1600,2000,2200,1900,2400,2100,2600,2300,2850] },
    { id: 3, label: '活跃客户数', value: 1862000, unit: '户', change: 3.5, daily: 680, sparkData: [1800,1750,1900,1850,2000,1950,2100,2050,2200,2150,2250,1862] },
    { id: 4, label: 'AUM总资产', value: 856.8, unit: '亿', change: 6.2, daily: 2.3, sparkData: [820,830,840,838,845,850,848,855,860,858,862,856.8] },
    { id: 5, label: '存款总余额', value: 523.5, unit: '亿', change: 4.1, daily: 1.2, sparkData: [505,510,508,515,518,520,516,522,525,520,528,523.5] },
    { id: 6, label: '贷款总余额', value: 386.2, unit: '亿', change: 7.5, daily: 1.8, sparkData: [360,365,370,368,375,380,378,385,388,382,390,386.2] },
    { id: 7, label: '财富客户数', value: 286500, unit: '户', change: 9.8, daily: 380, sparkData: [260,275,280,290,285,300,310,295,320,315,330,286.5] },
    { id: 8, label: '私行客户数', value: 3850, unit: '户', change: 12.5, daily: 8, sparkData: [34,35,35,36,36,37,37,38,38,39,39,38.5] },
    { id: 9, label: '零售营收', value: 36.8, unit: '亿', change: 5.5, daily: 0.15, sparkData: [34,34.5,35,35.2,35.8,36,35.5,36.2,36.5,36.8,36.5,36.8] },
    { id: 10, label: '中间业务收入', value: 8.6, unit: '亿', change: 15.2, daily: 0.05, sparkData: [7.2,7.5,7.6,7.8,8.0,8.1,8.2,8.3,8.4,8.5,8.5,8.6] },
    { id: 11, label: '本年累计利润', value: 15.2, unit: '亿', change: 10.8, daily: 0.08, sparkData: [12.5,13.0,13.2,13.8,14.0,14.2,14.5,14.8,15.0,15.1,15.2,15.2] },
    { id: 12, label: '客户增长率', value: 8.6, unit: '%', change: 1.2, daily: 0.04, sparkData: [7.0,7.2,7.5,7.4,7.8,8.0,7.9,8.2,8.4,8.3,8.5,8.6] }
  ]
  return data.map(d => ({ ...d, hover: false }))
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
.kpi-energy-band {
  padding: 0 16px;
  margin-bottom: 8px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #33ddff;
  padding: 8px 0 6px;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
  letter-spacing: 2px;
  &::before { content: '◆ '; color: #0099ff; }
}

.kpi-scroll {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0 8px;
  &::-webkit-scrollbar { height: 2px; }
  &::-webkit-scrollbar-thumb { background: rgba(0, 153, 255, 0.3); border-radius: 1px; }
}

.kpi-card {
  position: relative;
  flex: 0 0 158px;
  padding: 10px 12px;
  background: rgba(10, 30, 60, 0.5);
  border: 1px solid rgba(0, 153, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;
  overflow: hidden;
  &:hover {
    border-color: rgba(0, 153, 255, 0.4);
    box-shadow: 0 0 20px rgba(0, 153, 255, 0.15);
    transform: translateY(-2px);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #0099ff, transparent);
    background-size: 200% 100%;
    animation: flowBorder 3s linear infinite;
  }
}

@keyframes flowBorder {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.kpi-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.kpi-label {
  font-size: 13px;
  color: #8899aa;
  white-space: nowrap;
}
.kpi-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  &.up { background: #00ff95; box-shadow: 0 0 4px rgba(0,255,149,0.6); }
  &.down { background: #ff5b5b; box-shadow: 0 0 4px rgba(255,91,91,0.6); }
}

.kpi-value-wrap {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}
.kpi-number {
  font-size: 20px;
  font-weight: 700;
  color: #33ddff;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.3);
}
.kpi-unit {
  font-size: 13px;
  color: #4a5a6a;
}

.kpi-extras {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.kpi-change {
  font-size: 13px;
  font-weight: 600;
  &.up { color: #00ff95; }
  &.down { color: #ff5b5b; }
  .arrow { font-size: 12px; margin-right: 1px; }
}
.kpi-daily {
  font-size: 12px;
  color: #4a5a6a;
}

.kpi-spark {
  .spark-svg { display: block; }
}

.kpi-glow {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  pointer-events: none;
  transition: opacity 0.4s;
  opacity: 0;
  &.active {
    opacity: 1;
    box-shadow: inset 0 0 30px rgba(0, 153, 255, 0.08);
  }
}
</style>