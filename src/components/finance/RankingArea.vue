<template>
  <div class="ranking-area">
    <div class="ranking-section">
      <div class="section-title">机构经营排名</div>
      <div class="ranking-table-wrap">
        <div class="ranking-table-header">
          <span class="col-rank">排名</span>
          <span class="col-name">分行名称</span>
          <span class="col-num">AUM(亿)</span>
          <span class="col-num">存款(亿)</span>
          <span class="col-num">贷款(亿)</span>
          <span class="col-num">增长率</span>
          <span class="col-num">营收(亿)</span>
        </div>
        <div class="ranking-table-body" ref="scrollRef">
          <div class="scroll-wrap" :style="{ transform: `translateY(-${scrollOffset}px)` }">
            <div
              v-for="(item, idx) in displayList"
              :key="item.rank + '-' + idx"
              class="ranking-row"
              :class="{ top3: item.isTop3 }"
              @mouseenter="hoverIdx = idx"
              @mouseleave="hoverIdx = -1"
              :style="{ background: hoverIdx === idx ? 'rgba(0,198,255,0.06)' : '' }"
            >
              <span class="col-rank">
                <span v-if="item.rank <= 3" class="medal">{{ ['🥇','🥈','🥉'][item.rank - 1] }}</span>
                <span v-else class="rank-num">{{ item.rank }}</span>
              </span>
              <span class="col-name">{{ item.branch }}</span>
              <span class="col-num">{{ item.aum.toFixed(1) }}</span>
              <span class="col-num">{{ item.deposit.toFixed(1) }}</span>
              <span class="col-num">{{ item.loan.toFixed(1) }}</span>
              <span class="col-num growth">{{ item.growth }}%</span>
              <span class="col-num">{{ item.revenue.toFixed(1) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="heat-section">
      <div class="section-title">区域热力分析</div>
      <div class="heat-chart-wrap">
        <div class="heat-bars">
          <div
            v-for="item in heatData"
            :key="item.name"
            class="heat-bar-row"
          >
            <span class="heat-name">{{ item.name }}</span>
            <div class="heat-bar-track">
              <div
                class="heat-bar-fill"
                :style="{ width: (item.value / maxHeat) * 100 + '%' }"
              ></div>
            </div>
            <span class="heat-value">{{ item.value.toFixed(1) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const rankingData = [
  { rank: 1, branch: '兰州分行', aum: 186.5, deposit: 112.3, loan: 85.6, growth: 12.5, revenue: 8.2, isTop3: true },
  { rank: 2, branch: '天水分行', aum: 142.8, deposit: 88.5, loan: 65.2, growth: 10.8, revenue: 6.5, isTop3: true },
  { rank: 3, branch: '酒泉分行', aum: 98.6, deposit: 62.8, loan: 48.5, growth: 9.2, revenue: 4.8, isTop3: true },
  { rank: 4, branch: '张掖分行', aum: 82.3, deposit: 52.6, loan: 38.2, growth: 8.6, revenue: 3.8, isTop3: false },
  { rank: 5, branch: '庆阳分行', aum: 68.5, deposit: 42.8, loan: 32.5, growth: 7.8, revenue: 3.2, isTop3: false },
  { rank: 6, branch: '武威分行', aum: 55.2, deposit: 35.6, loan: 26.8, growth: 7.2, revenue: 2.6, isTop3: false },
  { rank: 7, branch: '白银分行', aum: 48.6, deposit: 30.2, loan: 22.5, growth: 6.5, revenue: 2.2, isTop3: false },
  { rank: 8, branch: '临夏分行', aum: 36.8, deposit: 22.5, loan: 16.8, growth: 5.8, revenue: 1.8, isTop3: false },
  { rank: 9, branch: '金昌分行', aum: 28.5, deposit: 18.2, loan: 12.5, growth: 5.2, revenue: 1.4, isTop3: false },
  { rank: 10, branch: '嘉峪关分行', aum: 22.6, deposit: 14.8, loan: 10.2, growth: 4.5, revenue: 1.1, isTop3: false }
]

const heatData = [
  { name: '兰州', value: 186.5 }, { name: '天水', value: 142.8 }, { name: '酒泉', value: 98.6 },
  { name: '张掖', value: 82.3 }, { name: '庆阳', value: 68.5 }, { name: '武威', value: 55.2 },
  { name: '白银', value: 48.6 }, { name: '临夏', value: 36.8 }, { name: '金昌', value: 28.5 },
  { name: '嘉峪关', value: 22.6 }
]
const maxHeat = computed(() => Math.max(...heatData.map(d => d.value)))

const scrollRef = ref(null)
const scrollOffset = ref(0)
const hoverIdx = ref(-1)

// 双倍数据实现无缝滚动
const displayList = computed(() => [...rankingData, ...rankingData])

let scrollTimer = null
onMounted(() => {
  const rowHeight = 32
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
.ranking-area {
  display: flex;
  gap: 12px;
  padding: 0 16px 4px;
  height: 100%;
}

.ranking-section, .heat-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgba(10, 30, 60, 0.4);
  border: 1px solid rgba(0, 153, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #33ddff;
  padding: 6px 12px;
  text-shadow: 0 0 10px rgba(51, 221, 255, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(0, 153, 255, 0.06);
  &::before { content: '◆ '; color: #0099ff; }
}

.ranking-table-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ranking-table-header {
  display: flex;
  padding: 6px 12px;
  font-size: 13px;
  color: #4a5a6a;
  border-bottom: 1px solid rgba(0, 153, 255, 0.06);
  flex-shrink: 0;
}

.ranking-table-body {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.scroll-wrap {
  transition: none;
}

.ranking-row {
  display: flex;
  padding: 6px 12px;
  font-size: 14px;
  color: #8899aa;
  border-bottom: 1px solid rgba(0, 153, 255, 0.03);
  transition: background 0.3s;
  cursor: pointer;
  height: 32px;
  align-items: center;

  &.top3 {
    color: #e0e8f0;
    background: rgba(0, 153, 255, 0.03);
  }
}

.col-rank { flex: 0 0 50px; text-align: center; }
.col-name { flex: 1; }
.col-num { flex: 0 0 72px; text-align: right; font-family: 'Courier New', monospace; font-size: 13px; }
.growth { color: #00ff95; }

.medal { font-size: 18px; }
.rank-num { color: #4a5a6a; }

.heat-chart-wrap {
  flex: 1;
  padding: 8px 16px;
  overflow-y: auto;
  min-height: 0;
}

.heat-bars {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.heat-bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.heat-name {
  flex: 0 0 56px;
  font-size: 13px;
  color: #8899aa;
  text-align: right;
}

.heat-bar-track {
  flex: 1;
  height: 10px;
  background: rgba(0, 153, 255, 0.06);
  border-radius: 5px;
  overflow: hidden;
}

.heat-bar-fill {
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(90deg, rgba(0, 153, 255, 0.4), #0099ff);
  transition: width 1s ease;
  box-shadow: 0 0 6px rgba(0, 153, 255, 0.3);
}

.heat-value {
  flex: 0 0 50px;
  font-size: 13px;
  color: #33ddff;
  font-family: 'Courier New', monospace;
  text-align: right;
}
</style>