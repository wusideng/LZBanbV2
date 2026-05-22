<template>
  <div class="loan-core-center">
    <div class="section-title">放款核心中枢 <span class="title-sub">LOAN COMMAND CENTER</span></div>
    <div class="center-content">
      <!-- 左：雷达图 -->
      <div class="center-left">
        <div class="radar-title">贷款经营雷达</div>
        <div class="radar-wrap">
          <BaseChart :option="radarOption" height="100%" width="100%" />
        </div>
        <div class="radar-metrics">
          <div class="rm-item">
            <span class="rm-label">贷款增长指数</span>
            <span class="rm-value">{{ loanData.growthIndex }}</span>
          </div>
          <div class="rm-item">
            <span class="rm-label">月新增</span>
            <span class="rm-value">{{ loanData.monthlyNew }}亿</span>
          </div>
        </div>
      </div>
      <!-- 中：能量核心 -->
      <div class="center-mid">
        <div class="energy-core">
          <!-- 外环轨道 -->
          <div class="core-ring outer-ring"></div>
          <div class="core-ring middle-ring"></div>
          <div class="core-ring inner-ring"></div>
          <!-- 粒子轨道 -->
          <div class="core-particles">
            <span v-for="i in 12" :key="i" class="particle" :style="getParticleStyle(i)"></span>
          </div>
          <!-- 扫描光 -->
          <div class="scan-beam"></div>
          <!-- 波纹 -->
          <div class="ripple r1"></div>
          <div class="ripple r2"></div>
          <div class="ripple r3"></div>
          <!-- 核心内容 -->
          <div class="core-content">
            <div class="core-label">贷款总余额</div>
            <div class="core-value">{{ loanData.totalBalance }}<span class="unit">亿元</span></div>
            <div class="core-change" :class="loanData.totalChange >= 0 ? 'up' : 'down'">
              <i class="arrow">{{ loanData.totalChange >= 0 ? '↑' : '↓' }}</i>
              {{ Math.abs(loanData.totalChange) }}% 较上月
            </div>
            <div class="core-divider"></div>
            <div class="core-subs">
              <div v-for="item in loanData.loanStructure" :key="item.name" class="sub-item">
                <span class="sub-dot" :style="{ background: item.color }"></span>
                <span class="sub-label">{{ item.name }}</span>
                <span class="sub-value" :style="{ color: item.color }">{{ item.value }}亿</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 下方快照 -->
        <div class="core-metrics">
          <div class="metric">
            <span class="m-label">贷款客户数</span>
            <span class="m-value">{{ (loanData.loanUsers / 10000).toFixed(1) }}万</span>
          </div>
          <div class="metric">
            <span class="m-label">户均贷款</span>
            <span class="m-value">{{ loanData.avgLoanPerUser }}万</span>
          </div>
          <div class="metric">
            <span class="m-label">日放款</span>
            <span class="m-value">{{ loanData.dailyNew }}亿</span>
          </div>
          <div class="metric">
            <span class="m-label">月放款</span>
            <span class="m-value">{{ loanData.monthlyNew }}亿</span>
          </div>
        </div>
      </div>
      <!-- 右：放款结构环图 + 趋势 -->
      <div class="center-right">
        <div class="chart-row ring-chart">
          <div class="chart-label">放款结构</div>
          <BaseChart :option="structureOption" height="100%" width="100%" />
        </div>
        <div class="chart-row trend-chart">
          <div class="chart-label">放款增长趋势</div>
          <BaseChart :option="trendOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { loanCenterData } from '@/mockData/loanData.js'

const loanData = loanCenterData

function getParticleStyle(i) {
  const angle = (i - 1) * 30
  return {
    transform: `rotate(${angle}deg) translateY(-62px)`,
    animationDelay: `${i * 0.25}s`
  }
}

const radarOption = computed(() => ({
  radar: {
    indicator: loanData.radarData.indicators.map(name => ({ name, max: 100 })),
    center: ['50%', '50%'],
    radius: '60%',
    axisName: { color: '#8899aa', fontSize: 12 },
    splitArea: { areaStyle: { color: ['rgba(255,138,52,0.02)', 'rgba(255,138,52,0.01)'] } },
    axisLine: { lineStyle: { color: 'rgba(255,138,52,0.15)' } },
    splitLine: { lineStyle: { color: 'rgba(255,138,52,0.1)' } }
  },
  series: [{
    type: 'radar',
    data: [
      { value: loanData.radarData.current, name: '本期', areaStyle: { color: 'rgba(255,138,52,0.15)' }, lineStyle: { color: '#FF8A34', width: 2 }, itemStyle: { color: '#FF8A34' } },
      { value: loanData.radarData.last, name: '上期', areaStyle: { color: 'rgba(0,207,255,0.08)' }, lineStyle: { color: 'rgba(0,207,255,0.4)', width: 1, type: 'dashed' }, itemStyle: { color: 'rgba(0,207,255,0.4)' } }
    ],
    symbol: 'circle',
    symbolSize: 4,
    animationDuration: 1500
  }]
}))

const structureOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(11,34,53,0.95)',
    borderColor: 'rgba(255,138,52,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 },
    formatter: '{b}: {c}亿 ({d}%)'
  },
  series: [{
    type: 'pie',
    radius: ['40%', '65%'],
    center: ['50%', '55%'],
    avoidLabelOverlap: true,
    data: loanData.loanStructure.map(item => ({
      name: item.name,
      value: item.value,
      itemStyle: {
        color: item.color,
        shadowBlur: 8,
        shadowColor: item.color + '40'
      }
    })),
    label: {
      color: '#8899aa',
      fontSize: 11,
      formatter: '{b}\n{d}%'
    },
    labelLine: { lineStyle: { color: 'rgba(255,138,52,0.2)' } },
    itemStyle: { borderRadius: 4 },
    emphasis: {
      itemStyle: {
        shadowBlur: 16,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
    animationType: 'scale',
    animationDuration: 1200
  }]
}))

const trendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(11,34,53,0.95)',
    borderColor: 'rgba(255,138,52,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  grid: { top: 10, left: 40, right: 10, bottom: 20 },
  xAxis: {
    type: 'category',
    data: loanData.loanTrend.months,
    axisLabel: { color: '#4a5a6a', fontSize: 10 },
    axisLine: { lineStyle: { color: 'rgba(255,138,52,0.1)' } },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    name: '亿',
    nameTextStyle: { color: '#4a5a6a', fontSize: 11 },
    splitLine: { lineStyle: { color: 'rgba(255,138,52,0.05)', type: 'dashed' } },
    axisLabel: { color: '#4a5a6a', fontSize: 10 }
  },
  series: [{
    type: 'line',
    data: loanData.loanTrend.values,
    smooth: true,
    symbol: 'none',
    lineStyle: { color: '#FF8A34', width: 2 },
    areaStyle: {
      color: {
        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(255,138,52,0.35)' },
          { offset: 1, color: 'rgba(255,138,52,0.01)' }
        ]
      }
    }
  }]
}))
</script>

<style lang="scss" scoped>
.loan-core-center {
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

.center-content {
  flex: 1;
  display: flex;
  gap: 6px;
  padding: 2px 6px 6px;
  min-height: 0;
}

.center-left, .center-right {
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.radar-title {
  font-size: 14px;
  color: #8899aa;
  padding: 2px 4px;
  letter-spacing: 1px;
}

.radar-wrap {
  flex: 1;
  min-height: 0;
}

.radar-metrics {
  display: flex;
  gap: 4px;
  .rm-item {
    flex: 1;
    text-align: center;
    padding: 4px;
    background: rgba(11, 34, 53, 0.4);
    border-radius: 4px;
    border: 1px solid rgba(255, 138, 52, 0.1);
    .rm-label { display: block; font-size: 13px; color: #4a5a6a; margin-bottom: 1px; }
    .rm-value { font-size: 16px; font-weight: 700; color: #FFB347; font-family: 'Courier New', monospace; }
  }
}

.center-mid {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.energy-core {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.core-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid transparent;

  &.outer-ring {
    width: 100%; height: 100%;
    border-color: rgba(255, 138, 52, 0.12);
    box-shadow: 0 0 25px rgba(255, 138, 52, 0.04), inset 0 0 25px rgba(255, 138, 52, 0.04);
    animation: rotateRing 15s linear infinite;
    &::before {
      content: '';
      position: absolute;
      top: -1.5px; left: 50%;
      width: 22px; height: 3px;
      background: #FF8A34;
      border-radius: 2px;
      box-shadow: 0 0 10px #FF8A34, 0 0 20px rgba(255, 138, 52, 0.4);
      transform: translateX(-50%);
    }
  }

  &.middle-ring {
    width: 82%; height: 82%;
    border-color: rgba(0, 207, 255, 0.1);
    animation: rotateRing 10s linear infinite reverse;
    &::before {
      content: '';
      position: absolute;
      top: -1px; left: 50%;
      width: 14px; height: 2px;
      background: #00CFFF;
      border-radius: 2px;
      box-shadow: 0 0 8px #00CFFF;
      transform: translateX(-50%);
    }
  }

  &.inner-ring {
    width: 62%; height: 62%;
    border-color: rgba(255, 179, 71, 0.08);
    animation: rotateRing 8s linear infinite;
    &::before {
      content: '';
      position: absolute;
      top: -1px; left: 50%;
      width: 10px; height: 2px;
      background: #FFB347;
      border-radius: 2px;
      box-shadow: 0 0 6px #FFB347;
      transform: translateX(-50%);
    }
  }
}

@keyframes rotateRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.core-particles {
  position: absolute;
  width: 150px;
  height: 150px;
  .particle {
    position: absolute;
    top: 50%; left: 50%;
    width: 4px; height: 4px;
    margin: -2px;
    background: #FF8A34;
    border-radius: 50%;
    box-shadow: 0 0 8px #FF8A34, 0 0 16px rgba(255, 138, 52, 0.4);
    animation: particlePulse 2s ease-in-out infinite;
  }
}

@keyframes particlePulse {
  0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
}

.scan-beam {
  position: absolute;
  width: 200px; height: 200px;
  background: conic-gradient(transparent 0deg, rgba(255, 138, 52, 0.06) 45deg, transparent 90deg);
  border-radius: 50%;
  animation: scanRotate 4s linear infinite;
  pointer-events: none;
}

@keyframes scanRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.core-content {
  position: relative;
  z-index: 2;
  text-align: center;
}
.core-label { font-size: 15px; color: #8899aa; margin-bottom: 2px; letter-spacing: 2px; }
.core-value {
  font-size: 38px;
  font-weight: 700;
  color: #FF8A34;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 25px rgba(255, 138, 52, 0.5), 0 0 50px rgba(255, 138, 52, 0.2);
  .unit { font-size: 17px; color: #4a5a6a; margin-left: 4px; }
}
.core-change {
  font-size: 15px;
  font-weight: 600;
  margin-top: 2px;
  &.up { color: #00FFC6; }
  &.down { color: #FF5B5B; }
  .arrow { font-size: 14px; }
}

.core-divider {
  width: 80px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 138, 52, 0.5), transparent);
  margin: 5px auto;
}

.core-subs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 10px;
  margin-top: 3px;
}
.sub-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}
.sub-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
}
.sub-label { color: #4a5a6a; flex: 1; text-align: left; }
.sub-value { font-weight: 600; font-family: 'Courier New', monospace; }

.ripple {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 138, 52, 0.15);
  animation: rippleExpand 3.5s ease-out infinite;
  pointer-events: none;
  &.r1 { width: 250px; height: 250px; animation-delay: 0s; }
  &.r2 { width: 280px; height: 280px; animation-delay: 1.2s; }
  &.r3 { width: 310px; height: 310px; animation-delay: 2.4s; }
}

@keyframes rippleExpand {
  0% { transform: scale(0.85); opacity: 0.5; }
  100% { transform: scale(1.4); opacity: 0; }
}

.core-metrics {
  display: flex;
  gap: 5px;
  width: 100%;
  .metric {
    flex: 1;
    text-align: center;
    padding: 5px 4px;
    background: rgba(11, 34, 53, 0.5);
    border-radius: 6px;
    border: 1px solid rgba(255, 138, 52, 0.1);
    .m-label { display: block; font-size: 13px; color: #4a5a6a; margin-bottom: 1px; }
    .m-value { font-size: 17px; font-weight: 700; color: #FFB347; font-family: 'Courier New', monospace; }
  }
}

.center-right {
  .chart-row {
    flex: 1;
    min-height: 0;
    position: relative;
    &.ring-chart { flex: 0 0 55%; }
    &.trend-chart { flex: 0 0 42%; }
  }
  .chart-label {
    position: absolute;
    top: 2px; left: 4px;
    font-size: 13px;
    color: #4a5a6a;
    z-index: 5;
    letter-spacing: 1px;
  }
}
</style>