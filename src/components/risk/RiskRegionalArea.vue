<template>
  <div class="risk-regional-area">
    <div class="section-title">区域风险区 <span class="title-sub">REGIONAL RISK</span></div>
    <div class="regional-content">
      <div class="risk-map">
        <div class="map-label">区域风险热力</div>
        <div class="map-bars">
          <div v-for="r in regionalData" :key="r.rank" class="map-row">
            <span class="mr-rank">{{ r.rank }}</span>
            <span class="mr-name">{{ r.branch }}</span>
            <div class="mr-track"><div class="mr-fill" :style="{ width: (r.riskIndex / 100) * 100 + '%' }" :class="riskLevelClass(r)"></div></div>
            <span class="mr-value" :style="{ color: riskColor(r) }">{{ r.riskIndex }}</span>
            <span class="mr-level" :style="{ color: riskColor(r) }">{{ r.level }}</span>
          </div>
        </div>
      </div>
      <div class="rank-section">
        <div class="map-label">分行风险排行</div>
        <div class="rank-table-wrap">
          <div class="rank-header"><span class="r-col col-rank">#</span><span class="r-col col-name">分行</span><span class="r-col col-num">不良率</span><span class="r-col col-num">逾期率</span></div>
          <div class="rank-body" ref="rankRef">
            <div class="rank-scroll" :style="{ transform: `translateY(-${offset}px)` }">
              <div v-for="(item, idx) in displayData" :key="item.rank + '-' + idx" class="rank-row">
                <span class="r-col col-rank">{{ item.rank }}</span>
                <span class="r-col col-name">{{ item.branch }}</span>
                <span class="r-col col-num" :class="item.badRate > 1.5 ? 'danger' : ''">{{ item.badRate }}%</span>
                <span class="r-col col-num" :class="item.overdueRate > 3 ? 'danger' : ''">{{ item.overdueRate }}%</span>
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
import { regionalRiskData } from '@/mockData/riskData.js'
const regionalData = regionalRiskData
const offset = ref(0)
const displayData = computed(() => [...regionalData, ...regionalData])

function riskLevelClass(r) {
  if (r.level === '中风险') return 'medium'
  if (r.level === '低风险') return 'low'
  return 'safe'
}
function riskColor(r) {
  if (r.level === '中风险') return '#FF5B5B'
  if (r.level === '低风险') return '#FF9F43'
  return '#00FF99'
}

let timer
onMounted(() => {
  const h = regionalData.length * 30
  timer = setInterval(() => { offset.value += 1; if (offset.value >= h) offset.value = 0 }, 50)
})
onUnmounted(() => { clearInterval(timer) })
</script>

<style lang="scss" scoped>
.risk-regional-area { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #00FF99; padding: 6px 12px 3px; text-shadow: 0 0 10px rgba(0,255,153,0.3); letter-spacing: 2px; flex-shrink: 0; &::before { content: '◆ '; color: #00CC7A; } .title-sub { font-size: 13px; color: rgba(0,255,153,0.2); letter-spacing: 3px; margin-left: 6px; } }
.regional-content { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 2px 8px 8px; min-height: 0; }
.risk-map { flex: 1; display: flex; flex-direction: column; min-height: 0; }
.map-label { font-size: 13px; color: #4a5a6a; padding: 2px 4px; letter-spacing: 1px; flex-shrink: 0; }
.map-bars { flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 2px 0; overflow-y: auto; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: rgba(0,255,153,0.3); border-radius: 1px; } }
.map-row { display: flex; align-items: center; gap: 4px; padding: 2px 4px; border-radius: 3px; transition: background 0.3s; &:hover { background: rgba(0,255,153,0.03); } }
.mr-rank { flex: 0 0 18px; font-size: 13px; color: #4a5a6a; text-align: center; font-family: 'Courier New',monospace; }
.mr-name { flex: 0 0 56px; font-size: 14px; color: #8899aa; white-space: nowrap; }
.mr-track { flex: 1; height: 8px; background: rgba(0,255,153,0.06); border-radius: 4px; overflow: hidden; }
.mr-fill { height: 100%; border-radius: 4px; transition: width 1s ease; &.medium { background: linear-gradient(90deg,#FF9F43,#FF5B5B); } &.low { background: linear-gradient(90deg,#00FF99,#00CC7A); } &.safe { background: #00FFC6; } }
.mr-value { flex: 0 0 32px; text-align: right; font-family: 'Courier New',monospace; font-weight: 700; font-size: 14px; }
.mr-level { flex: 0 0 40px; text-align: right; font-size: 13px; font-weight: 600; }
.rank-section { flex: 1; display: flex; flex-direction: column; min-height: 0; }
.rank-table-wrap { flex: 1; display: flex; flex-direction: column; min-height: 0; }
.rank-header { display: flex; padding: 3px 4px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid rgba(0,255,153,0.05); flex-shrink: 0; }
.rank-body { flex: 1; overflow: hidden; position: relative; }
.rank-scroll { transition: none; }
.rank-row { display: flex; padding: 4px; font-size: 14px; color: #8899aa; border-bottom: 1px solid rgba(0,255,153,0.02); height: 30px; align-items: center; }
.r-col { &.col-rank { flex: 0 0 24px; text-align: center; } &.col-name { flex: 1; } &.col-num { flex: 0 0 60px; text-align: right; font-family: 'Courier New',monospace; font-size: 13px; &.danger { color: #FF5B5B; } } }
</style>