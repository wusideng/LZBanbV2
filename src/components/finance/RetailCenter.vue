<template>
  <div class="retail-center">
    <div class="section-title">零售经营中枢区</div>
    <div class="center-content">
      <!-- 左：雷达图 -->
      <div class="center-left">
        <div class="radar-wrap">
          <BaseChart :option="radarOption" height="100%" width="100%" />
        </div>
      </div>
      <!-- 中：能量核心 -->
      <div class="center-mid">
        <div class="energy-core">
          <div class="core-ring outer-ring"></div>
          <div class="core-ring inner-ring"></div>
          <div class="core-particles">
            <span v-for="i in 8" :key="i" class="particle" :style="getParticleStyle(i)"></span>
          </div>
          <div class="core-content">
            <div class="core-label">AUM总资产</div>
            <div class="core-value"><span class="num">{{ centerData.totalAum }}</span><span class="unit">亿元</span></div>
            <div class="core-divider"></div>
            <div class="core-subs">
              <div class="sub-item">
                <span class="sub-label">存款余额</span>
                <span class="sub-value">{{ centerData.depositBalance }}亿</span>
              </div>
              <div class="sub-item">
                <span class="sub-label">贷款余额</span>
                <span class="sub-value">{{ centerData.loanBalance }}亿</span>
              </div>
              <div class="sub-item">
                <span class="sub-label">零售营收</span>
                <span class="sub-value">{{ centerData.retailRevenue }}亿</span>
              </div>
              <div class="sub-item">
                <span class="sub-label">本年利润</span>
                <span class="sub-value">{{ centerData.annualProfit }}亿</span>
              </div>
            </div>
          </div>
          <div class="ripple r1"></div>
          <div class="ripple r2"></div>
          <div class="ripple r3"></div>
        </div>
        <!-- 下方数据 -->
        <div class="core-metrics">
          <div class="metric">
            <span class="m-label">资产总额</span>
            <span class="m-value">{{ centerData.totalAssets }}亿</span>
          </div>
          <div class="metric">
            <span class="m-label">负债总额</span>
            <span class="m-value">{{ centerData.totalLiability }}亿</span>
          </div>
          <div class="metric">
            <span class="m-label">存贷比</span>
            <span class="m-value">{{ centerData.depositLoanRatio }}%</span>
          </div>
          <div class="metric">
            <span class="m-label">成本收入比</span>
            <span class="m-value">{{ centerData.costIncomeRatio }}%</span>
          </div>
        </div>
      </div>
      <!-- 右：双轴趋势图 -->
      <div class="center-right">
        <div class="chart-row trend-chart">
          <BaseChart :option="dualAxisOption" height="100%" width="100%" />
        </div>
        <div class="chart-row ring-chart">
          <BaseChart :option="structureOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const centerData = {
  totalAum: 856.8, depositBalance: 523.5, loanBalance: 386.2,
  retailRevenue: 36.8, annualProfit: 15.2, totalAssets: 1256.3,
  totalLiability: 732.8, depositLoanRatio: 73.8, costIncomeRatio: 32.5,
  netInterestIncome: 28.5, netFeeIncome: 8.6
}

function getParticleStyle(i) {
  const angle = (i - 1) * 45
  return {
    transform: `rotate(${angle}deg) translateY(-58px)`,
    animationDelay: `${i * 0.3}s`
  }
}

const radarOption = computed(() => ({
  radar: {
    indicator: [
      { name: '资产规模', max: 100 },
      { name: '盈利能力', max: 100 },
      { name: '客户基础', max: 100 },
      { name: '资产质量', max: 100 },
      { name: '发展潜力', max: 100 }
    ],
    center: ['50%', '50%'],
    radius: '60%',
    axisName: { color: '#8899aa', fontSize: 12 },
    splitArea: { areaStyle: { color: ['rgba(0,198,255,0.02)','rgba(0,198,255,0.01)'] } },
    axisLine: { lineStyle: { color: 'rgba(0,198,255,0.15)' } },
    splitLine: { lineStyle: { color: 'rgba(0,198,255,0.1)' } }
  },
  series: [{
    type: 'radar',
    data: [
      { value: [92, 85, 88, 78, 82], name: '本期', areaStyle: { color: 'rgba(0,198,255,0.15)' }, lineStyle: { color: '#0099ff', width: 2 }, itemStyle: { color: '#0099ff' } },
      { value: [80, 78, 82, 75, 76], name: '上期', areaStyle: { color: 'rgba(0,240,255,0.08)' }, lineStyle: { color: 'rgba(0,240,255,0.4)', width: 1, type: 'dashed' }, itemStyle: { color: 'rgba(0,240,255,0.4)' } }
    ],
    symbol: 'circle',
    symbolSize: 4,
    animationDuration: 1500
  }]
}))

const dualAxisOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  legend: { data: ['利息净收入','手续费净收入'], textStyle: { color: '#8899aa', fontSize: 12 }, bottom: 0 },
  grid: { top: 12, left: 45, right: 45, bottom: 32 },
  xAxis: {
    type: 'category',
    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    axisLabel: { color: '#4a5a6a', fontSize: 11 },
    axisLine: { lineStyle: { color: 'rgba(0,198,255,0.1)' } }
  },
  yAxis: [
    { type: 'value', name: '利息(亿)', nameTextStyle: { color: '#4a5a6a', fontSize: 11 }, splitLine: { lineStyle: { color: 'rgba(0,198,255,0.05)', type: 'dashed' } }, axisLabel: { color: '#4a5a6a', fontSize: 11 } },
    { type: 'value', name: '手续费(亿)', nameTextStyle: { color: '#4a5a6a', fontSize: 11 }, splitLine: { show: false }, axisLabel: { color: '#4a5a6a', fontSize: 11 } }
  ],
  series: [
    { name: '利息净收入', type: 'line', data: [22,23,24,25,26,27,27.5,28,28.2,28.5,28.3,28.5], smooth: true, symbol: 'none', lineStyle: { color: '#0099ff', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,198,255,0.3)' }, { offset: 1, color: 'rgba(0,198,255,0.01)' }] } } },
    { name: '手续费净收入', type: 'line', yAxisIndex: 1, data: [6.5,6.8,7.0,7.2,7.5,7.8,8.0,8.2,8.3,8.5,8.5,8.6], smooth: true, symbol: 'none', lineStyle: { color: '#00ff95', width: 2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,255,149,0.2)' }, { offset: 1, color: 'rgba(0,255,149,0.01)' }] } } }
  ]
}))

const structureOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(7,17,31,0.9)',
    borderColor: 'rgba(0,198,255,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 },
    formatter: '{b}: {c}亿 ({d}%)'
  },
  series: [{
    type: 'pie',
    radius: ['45%','70%'],
    center: ['50%','50%'],
    data: [
      { name: '利息收入', value: 285, itemStyle: { color: '#0099ff' } },
      { name: '手续费收入', value: 86, itemStyle: { color: '#00aaff' } },
      { name: '投资收益', value: 45, itemStyle: { color: '#ffb347' } },
      { name: '其他收入', value: 22, itemStyle: { color: '#4a5a6a' } }
    ],
    label: { color: '#8899aa', fontSize: 11, formatter: '{b}' },
    labelLine: { lineStyle: { color: 'rgba(0,198,255,0.2)' } },
    itemStyle: { borderRadius: 4 },
    animationType: 'scale',
    animationDuration: 1200
  }]
}))
</script>

<style lang="scss" scoped>
.retail-center {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #33ddff;
  padding: 8px 12px 4px;
  text-shadow: 0 0 10px rgba(51, 221, 255, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  &::before { content: '◆ '; color: #0099ff; }
}

.center-content {
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 4px 8px 8px;
  min-height: 0;
}

.center-left, .center-right {
  flex: 0 0 28%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.radar-wrap { flex: 1; min-height: 0; }

.center-mid {
  flex: 0 0 44%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.energy-core {
  position: relative;
  width: 200px;
  height: 200px;
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
    border-color: rgba(0, 153, 255, 0.15);
    box-shadow: 0 0 20px rgba(0, 153, 255, 0.05), inset 0 0 20px rgba(0, 153, 255, 0.05);
    animation: rotateRing 12s linear infinite;
    &::before {
      content: '';
      position: absolute;
      top: -1px; left: 50%;
      width: 20px; height: 3px;
      background: #0099ff;
      border-radius: 2px;
      box-shadow: 0 0 8px #0099ff;
      transform: translateX(-50%);
    }
  }
  &.inner-ring {
    width: 75%; height: 75%;
    border-color: rgba(51, 221, 255, 0.1);
    animation: rotateRing 8s linear infinite reverse;
    &::before {
      content: '';
      position: absolute;
      top: -1px; left: 50%;
      width: 12px; height: 2px;
      background: #33ddff;
      border-radius: 2px;
      box-shadow: 0 0 6px #33ddff;
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
  width: 140px;
  height: 140px;
  .particle {
    position: absolute;
    top: 50%; left: 50%;
    width: 4px; height: 4px;
    margin: -2px;
    background: #0099ff;
    border-radius: 50%;
    box-shadow: 0 0 6px #0099ff;
    animation: particlePulse 2.4s ease-in-out infinite;
  }
}

@keyframes particlePulse {
  0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
}

.core-content {
  position: relative;
  z-index: 2;
  text-align: center;
}
.core-label { font-size: 13px; color: #8899aa; margin-bottom: 4px; letter-spacing: 2px; }
.core-value {
  .num {
    font-size: 36px;
    font-weight: 700;
    color: #33ddff;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 20px rgba(51, 221, 255, 0.5);
  }
  .unit { font-size: 15px; color: #4a5a6a; margin-left: 4px; }
}
.core-divider {
  width: 60px; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,198,255,0.5), transparent);
  margin: 6px auto;
}
.core-subs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  margin-top: 4px;
}
.sub-item {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.sub-label { color: #4a5a6a; }
.sub-value { color: #0099ff; font-weight: 600; }

.ripple {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(0, 153, 255, 0.2);
  animation: rippleExpand 3s ease-out infinite;
  pointer-events: none;
  &.r1 { width: 220px; height: 220px; animation-delay: 0s; }
  &.r2 { width: 240px; height: 240px; animation-delay: 1s; }
  &.r3 { width: 260px; height: 260px; animation-delay: 2s; }
}

@keyframes rippleExpand {
  0% { transform: scale(0.8); opacity: 0.6; }
  100% { transform: scale(1.5); opacity: 0; }
}

.core-metrics {
  display: flex;
  gap: 6px;
  width: 100%;
  .metric {
    flex: 1;
    text-align: center;
    padding: 6px 4px;
    background: rgba(10, 30, 60, 0.4);
    border-radius: 6px;
    border: 1px solid rgba(0, 153, 255, 0.08);
    .m-label { display: block; font-size: 12px; color: #4a5a6a; margin-bottom: 2px; }
    .m-value { font-size: 16px; font-weight: 700; color: #0099ff; font-family: 'Courier New', monospace; }
  }
}

.center-right {
  .chart-row {
    flex: 1;
    min-height: 0;
    &.trend-chart { flex: 0 0 55%; }
    &.ring-chart { flex: 0 0 42%; }
  }
}
</style>