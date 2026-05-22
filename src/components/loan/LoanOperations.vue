<template>
  <div class="loan-operations">
    <!-- 左：放款经营 -->
    <div class="ops-section">
      <div class="section-title">放款经营分析</div>
      <div class="ops-content">
        <div class="ops-summary">
          <div class="summary-item">
            <span class="s-label">新增放款</span>
            <span class="s-value">{{ opsData.newLoan }}<span class="s-unit">亿</span></span>
            <span class="s-change up">↑ {{ opsData.newLoanChange }}%</span>
          </div>
          <div class="summary-item">
            <span class="s-label">日放款量</span>
            <span class="s-value">{{ opsData.dailyLoan }}<span class="s-unit">亿</span></span>
          </div>
        </div>
        <div class="ops-charts">
          <div class="chart-box">
            <div class="chart-label">放款趋势</div>
            <BaseChart :option="trendOption" height="100%" width="100%" />
          </div>
          <div class="chart-box">
            <div class="chart-label">产品投放结构</div>
            <BaseChart :option="structureOption" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
    <!-- 右：产品经营 -->
    <div class="product-section">
      <div class="section-title">消费金融产品经营</div>
      <div class="product-content">
        <div class="product-grid">
          <div
            v-for="product in productData"
            :key="product.id"
            class="product-card"
            :class="'hot-' + Math.round(product.hot / 25)"
          >
            <div class="pc-top">
              <span class="pc-name">{{ product.name }}</span>
              <span class="pc-hot" :style="{ width: product.hot + '%' }"></span>
              <span class="pc-hot-val">{{ product.hot }}%</span>
            </div>
            <div class="pc-numbers">
              <div class="pc-item">
                <span class="pc-label">余额</span>
                <span class="pc-value">{{ product.balance }}亿</span>
              </div>
              <div class="pc-item">
                <span class="pc-label">净增</span>
                <span class="pc-value" :class="product.growth >= 0 ? 'up' : 'down'">{{ product.growth >= 0 ? '+' : '' }}{{ product.newAdded }}亿</span>
              </div>
              <div class="pc-item">
                <span class="pc-label">利率</span>
                <span class="pc-value">{{ product.interestRate }}%</span>
              </div>
              <div class="pc-item">
                <span class="pc-label">客户</span>
                <span class="pc-value">{{ (product.users / 10000).toFixed(1) }}万</span>
              </div>
            </div>
            <div class="pc-bar">
              <div class="pc-bar-fill" :style="{ width: product.hot + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右2：机构排行 -->
    <div class="rank-section">
      <div class="section-title">放款机构排行</div>
      <div class="rank-content">
        <div class="rank-table">
          <div class="rank-header">
            <span class="r-col rank">排名</span>
            <span class="r-col name">机构</span>
            <span class="r-col num">放款(亿)</span>
            <span class="r-col num">新增(亿)</span>
            <span class="r-col num">增长率</span>
            <span class="r-col num">占比</span>
          </div>
          <div class="rank-body" ref="rankScrollRef">
            <div class="rank-scroll" :style="{ transform: `translateY(-${scrollOffset}px)` }">
              <div
                v-for="(item, idx) in displayRankings"
                :key="item.rank + '-' + idx"
                class="rank-row"
                :class="{ top3: item.rank <= 3 }"
              >
                <span class="r-col rank">
                  <span v-if="item.rank <= 3" class="medal">{{ ['🥇','🥈','🥉'][item.rank - 1] }}</span>
                  <span v-else class="rank-num">{{ item.rank }}</span>
                </span>
                <span class="r-col name">{{ item.branch }}</span>
                <span class="r-col num">{{ item.loanAmount.toFixed(1) }}</span>
                <span class="r-col num">{{ item.newLoan.toFixed(1) }}</span>
                <span class="r-col num growth">{{ item.growth }}%</span>
                <span class="r-col num">{{ item.share }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { loanOperationsData, loanProductData } from '@/mockData/loanData.js'

const opsData = loanOperationsData
const productData = loanProductData

const trendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(11,34,53,0.95)',
    borderColor: 'rgba(255,138,52,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  grid: { top: 8, left: 30, right: 8, bottom: 14 },
  xAxis: {
    type: 'category',
    data: opsData.loanTrend.months,
    axisLabel: { color: '#4a5a6a', fontSize: 10, interval: 1 },
    axisLine: { lineStyle: { color: 'rgba(255,138,52,0.08)' } },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: 'rgba(255,138,52,0.04)', type: 'dashed' } },
    axisLabel: { color: '#4a5a6a', fontSize: 10 }
  },
  series: [{
    type: 'bar',
    data: opsData.loanTrend.values,
    itemStyle: {
      color: {
        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [
          { offset: 0, color: '#FF8A34' },
          { offset: 1, color: 'rgba(255,138,52,0.2)' }
        ]
      },
      borderRadius: [3, 3, 0, 0]
    },
    barWidth: 10
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
    radius: ['35%', '60%'],
    center: ['50%', '55%'],
    data: opsData.productStructure.map(item => ({
      name: item.name,
      value: item.value,
      itemStyle: { color: item.color }
    })),
    label: { color: '#8899aa', fontSize: 10, formatter: '{b}' },
    labelLine: { lineStyle: { color: 'rgba(255,138,52,0.15)' } },
    itemStyle: { borderRadius: 3 },
    animationType: 'scale',
    animationDuration: 1000
  }]
}))

// 排行滚动
const rankScrollRef = ref(null)
const scrollOffset = ref(0)
const rankingData = opsData.branchRanking
const displayRankings = computed(() => [...rankingData, ...rankingData])

let scrollTimer = null
onMounted(() => {
  const rowHeight = 30
  const totalHeight = rankingData.length * rowHeight
  scrollTimer = setInterval(() => {
    scrollOffset.value += 1
    if (scrollOffset.value >= totalHeight) {
      scrollOffset.value = 0
    }
  }, 50)
})
onUnmounted(() => {
  if (scrollTimer) clearInterval(scrollTimer)
})
</script>

<style lang="scss" scoped>
.loan-operations {
  display: flex;
  gap: 8px;
  padding: 0 16px 4px;
  height: 100%;
}

.ops-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgba(11, 34, 53, 0.4);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.product-section {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  background: rgba(11, 34, 53, 0.4);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.rank-section {
  flex: 0.8;
  display: flex;
  flex-direction: column;
  background: rgba(11, 34, 53, 0.4);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #FFB347;
  padding: 5px 10px;
  text-shadow: 0 0 10px rgba(255, 179, 71, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255, 138, 52, 0.06);
  &::before { content: '◆ '; color: #FF8A34; }
}

.ops-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  min-height: 0;
}

.ops-summary {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
  flex-shrink: 0;
}

.summary-item {
  flex: 1;
  padding: 4px 8px;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 138, 52, 0.1);
  border-radius: 4px;
  text-align: center;
  .s-label { display: block; font-size: 13px; color: #4a5a6a; }
  .s-value { font-size: 20px; font-weight: 700; color: #FF8A34; font-family: 'Courier New', monospace; text-shadow: 0 0 10px rgba(255, 138, 52, 0.3); .s-unit { font-size: 14px; color: #4a5a6a; margin-left: 2px; } }
  .s-change { font-size: 13px; font-weight: 600; &.up { color: #00FFC6; } }
}

.ops-charts {
  flex: 1;
  display: flex;
  gap: 8px;
  min-height: 0;
}

.chart-box {
  flex: 1;
  position: relative;
  min-height: 0;
}

.chart-label {
  position: absolute;
  top: 2px; left: 4px;
  font-size: 13px;
  color: #4a5a6a;
  z-index: 5;
}

// 产品经营
.product-content {
  flex: 1;
  padding: 4px 8px;
  min-height: 0;
  overflow-y: auto;
  &::-webkit-scrollbar { width: 2px; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 138, 52, 0.3); border-radius: 1px; }
}

.product-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product-card {
  padding: 6px 8px;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 6px;
  transition: all 0.3s;

  &.hot-3, &.hot-4 {
    border-color: rgba(255, 138, 52, 0.25);
    box-shadow: 0 0 12px rgba(255, 138, 52, 0.08);
  }
  &:hover {
    border-color: rgba(255, 138, 52, 0.4);
    box-shadow: 0 0 15px rgba(255, 138, 52, 0.1);
  }
}

.pc-top {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.pc-name {
  font-size: 15px;
  font-weight: 600;
  color: #e0e8f0;
  flex: 0 0 auto;
}

.pc-hot {
  flex: 1;
  height: 3px;
  background: rgba(255, 138, 52, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.pc-hot-val {
  font-size: 13px;
  color: #FFB347;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.pc-numbers {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.pc-item {
  flex: 1;
  .pc-label { display: block; font-size: 12px; color: #4a5a6a; }
  .pc-value { font-size: 15px; font-weight: 600; font-family: 'Courier New', monospace; color: #8899aa; &.up { color: #00FFC6; } &.down { color: #FF5B5B; } }
}

.pc-bar {
  height: 2px;
  background: rgba(255, 138, 52, 0.08);
  border-radius: 1px;
  overflow: hidden;
}

.pc-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF8A34, #FFB347);
  border-radius: 1px;
  transition: width 1s ease;
}

// 排名
.rank-content {
  flex: 1;
  padding: 2px 0;
  min-height: 0;
}

.rank-table {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.rank-header {
  display: flex;
  padding: 4px 8px;
  font-size: 14px;
  color: #4a5a6a;
  border-bottom: 1px solid rgba(255, 138, 52, 0.05);
  flex-shrink: 0;
}

.rank-body {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.rank-scroll {
  transition: none;
}

.rank-row {
  display: flex;
  padding: 4px 8px;
  font-size: 15px;
  color: #8899aa;
  border-bottom: 1px solid rgba(255, 138, 52, 0.02);
  height: 30px;
  align-items: center;
  &.top3 {
    color: #e0e8f0;
    background: rgba(255, 138, 52, 0.03);
  }
}

.r-col {
  &.rank { flex: 0 0 40px; text-align: center; }
  &.name { flex: 1; }
  &.num { flex: 0 0 60px; text-align: right; font-family: 'Courier New', monospace; font-size: 14px; }
  &.growth { color: #00FFC6; }
}

.medal { font-size: 18px; }
.rank-num { color: #4a5a6a; }
</style>