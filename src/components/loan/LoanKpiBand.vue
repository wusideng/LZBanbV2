<template>
  <div class="loan-kpi-band">
    <div class="section-title">核心贷款KPI <span class="title-sub">CONSUMER FINANCE CORE KPIs</span></div>
    <div class="kpi-scroll">
      <div
        v-for="kpi in kpiList"
        :key="kpi.id"
        class="kpi-card"
        :class="'card-' + kpi.id"
        @mouseenter="kpi.hover = true"
        @mouseleave="kpi.hover = false"
      >
        <div class="kpi-top">
          <span class="kpi-label">{{ kpi.label }}</span>
          <span class="kpi-badge">{{ kpi.id === 1 ? '核心指标' : '' }}</span>
        </div>
        <div class="kpi-value-wrap">
          <span class="kpi-number">{{ kpi.value }}</span>
          <span class="kpi-unit">{{ kpi.unit }}</span>
        </div>
        <div class="kpi-extras">
          <span class="kpi-change" :class="kpi.change >= 0 ? 'up' : 'down'">
            <i class="arrow">{{ kpi.change >= 0 ? '↑' : '↓' }}</i>
            {{ Math.abs(kpi.change) }}%
          </span>
          <span class="kpi-daily">日增 {{ kpi.daily >= 0 ? '+' : '' }}{{ kpi.daily }}{{ kpi.unit }}</span>
        </div>
        <div class="kpi-spark">
          <svg :width="sparkW" :height="sparkH" class="spark-svg">
            <defs>
              <linearGradient :id="'spark-grad-' + kpi.id" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#FF8A34" stop-opacity="0.3" />
                <stop offset="100%" stop-color="#FFB347" stop-opacity="0.8" />
              </linearGradient>
            </defs>
            <path :d="getSparkPath(kpi.sparkData)" fill="none" :stroke="'url(#spark-grad-' + kpi.id + ')'" stroke-width="1.5" opacity="0.8"/>
          </svg>
        </div>
        <div class="kpi-glow" :class="{ active: kpi.hover }"></div>
        <div class="kpi-flow-border"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { loanKpiData } from '@/mockData/loanData.js'

const sparkW = 120
const sparkH = 28

const kpiList = computed(() => {
  return loanKpiData.map(d => ({ ...d, hover: false }))
})

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
.loan-kpi-band {
  padding: 0 16px;
  margin-bottom: 6px;
}

.section-title {
  font-size: 17px;
  font-weight: 600;
  color: #FFB347;
  padding: 6px 0 4px;
  text-shadow: 0 0 10px rgba(255, 179, 71, 0.3);
  letter-spacing: 2px;
  &::before { content: '◆ '; color: #FF8A34; }
  .title-sub {
    font-size: 13px;
    color: rgba(255, 179, 71, 0.3);
    letter-spacing: 3px;
    margin-left: 8px;
  }
}

.kpi-scroll {
  display: flex;
  gap: 10px;
  padding: 4px 0 6px;
}

.kpi-card {
  position: relative;
  flex: 1;
  min-width: 0;
  padding: 10px 14px;
  background: rgba(11, 34, 53, 0.6);
  border: 1px solid rgba(255, 138, 52, 0.15);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;
  overflow: hidden;
  &:hover {
    border-color: rgba(255, 138, 52, 0.4);
    box-shadow: 0 0 25px rgba(255, 138, 52, 0.15), inset 0 0 30px rgba(255, 138, 52, 0.03);
    transform: translateY(-2px);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FF8A34, #FFB347, transparent);
    background-size: 200% 100%;
    animation: flowBorder 3s linear infinite;
  }

  // 第一个卡片特殊处理（贷款总余额）
  &.card-1 {
    border-color: rgba(255, 138, 52, 0.3);
    background: rgba(11, 34, 53, 0.8);
    .kpi-number {
      font-size: 28px;
      color: #FF8A34;
      text-shadow: 0 0 20px rgba(255, 138, 52, 0.5);
    }
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
  margin-bottom: 4px;
}
.kpi-label {
  font-size: 15px;
  color: #8899aa;
  white-space: nowrap;
}
.kpi-badge {
  font-size: 12px;
  padding: 1px 6px;
  background: rgba(255, 138, 52, 0.15);
  color: #FFB347;
  border-radius: 4px;
  letter-spacing: 1px;
}

.kpi-value-wrap {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 3px;
}
.kpi-number {
  font-size: 24px;
  font-weight: 700;
  color: #FFB347;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 12px rgba(255, 179, 71, 0.4);
}
.kpi-unit {
  font-size: 15px;
  color: #4a5a6a;
}

.kpi-extras {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
}
.kpi-change {
  font-size: 15px;
  font-weight: 600;
  &.up { color: #00FFC6; }
  &.down { color: #FF5B5B; }
  .arrow { font-size: 14px; margin-right: 1px; }
}
.kpi-daily {
  font-size: 15px;
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
    box-shadow: inset 0 0 30px rgba(255, 138, 52, 0.08);
  }
}

.kpi-flow-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 179, 71, 0.2), transparent);
  background-size: 200% 100%;
  animation: flowBorder 4s linear infinite;
  animation-delay: 1s;
}
</style>