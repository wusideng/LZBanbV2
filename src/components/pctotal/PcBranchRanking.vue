<template>
  <div class="pc-branch-ranking">
    <div class="section-title">区域经营排行</div>
    <div class="table-wrap">
      <div class="t-header">
        <span class="t-col col-rank">#</span>
        <span class="t-col col-name">机构</span>
        <span class="t-col col-num">利润(亿)</span>
        <span class="t-col col-num">增长率</span>
        <span class="t-col">经营评分</span>
        <span class="t-col">趋势</span>
      </div>
      <div class="t-body">
        <div v-for="b in branches" :key="b.rank" class="t-row" :class="{ top3: b.rank <= 3 }">
          <span class="t-col col-rank">{{ ['🥇','🥈','🥉'][b.rank - 1] || b.rank }}</span>
          <span class="t-col col-name">{{ b.name }}</span>
          <span class="t-col col-num">{{ b.profit }}</span>
          <span class="t-col col-num growth">{{ b.growth }}%</span>
          <span class="t-col"><div class="score-bar"><div class="score-fill" :style="{ width: b.score + '%', background: b.score >= 80 ? '#4FD8FF' : b.score >= 60 ? '#6C7BFF' : '#FF9F43' }"></div></div></span>
          <span class="t-col col-num score">{{ b.score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const branches = [
  { rank: 1, name: '兰州分行', profit: '8.2', growth: 12.5, score: 92 },
  { rank: 2, name: '天水分行', profit: '6.5', growth: 10.8, score: 85 },
  { rank: 3, name: '酒泉分行', profit: '4.8', growth: 9.2, score: 78 },
  { rank: 4, name: '张掖分行', profit: '3.8', growth: 8.6, score: 72 },
  { rank: 5, name: '庆阳分行', profit: '3.2', growth: 7.8, score: 68 },
  { rank: 6, name: '武威分行', profit: '2.6', growth: 7.2, score: 62 },
  { rank: 7, name: '白银分行', profit: '2.2', growth: 6.5, score: 55 },
  { rank: 8, name: '临夏分行', profit: '1.8', growth: 5.8, score: 50 }
]
</script>

<style lang="scss" scoped>
.pc-branch-ranking { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.table-wrap { flex: 1; display: flex; flex-direction: column; padding: 0 8px 6px; min-height: 0; }
.t-header { display: flex; padding: 4px 6px; font-size: 12px; color: #4a5a6a; border-bottom: 1px solid #1a2a4a; flex-shrink: 0; }
.t-body { flex: 1; min-height: 0; overflow-y: auto; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: #1a2a4a; border-radius: 1px; } }
.t-row { display: flex; padding: 5px 6px; font-size: 13px; color: #8899aa; border-bottom: 1px solid rgba(26,42,74,0.4); align-items: center; &.top3 { color: #e0e8f0; background: rgba(26,42,74,0.15); } }
.t-col { flex: 1; text-align: center; &.col-rank { flex: 0 0 32px; } &.col-name { flex: 1.5; text-align: left; } &.col-num { flex: 0 0 64px; text-align: right; font-family: 'Courier New',monospace; font-size: 12px; &.growth { color: #4FD8FF; } &.score { color: #FFD700; } } }
.score-bar { height: 6px; background: #0a1a2a; border-radius: 3px; overflow: hidden; max-width: 80px; margin: 0 auto; }
.score-fill { height: 100%; border-radius: 3px; }
</style>