<template>
  <div class="pc-dashboard">
    <!-- 顶部标题栏 -->
    <div class="header-bar">
      <div class="header-left"><div class="logo-area">银行LOGO</div></div>
      <div class="header-center">
        <h1 class="page-title">全行经营总览驾驶舱</h1>
        <div class="page-subtitle">BANK OPERATION DASHBOARD</div>
      </div>
      <div class="header-right">
        <div class="header-time">{{ currentTime }}</div>
        <div class="header-date">{{ currentDate }}</div>
        <div class="header-update">更新: {{ updateTime }}</div>
      </div>
    </div>
    <div class="header-line"></div>

    <!-- KPI -->
    <div class="layer-kpi"><PcKpiBand /></div>

    <!-- 第一行：客户经营 + 经营总览 -->
    <div class="layer-row1">
      <div class="cell-left"><PcCustomerAnalysis /></div>
      <div class="cell-main"><PcBusinessOverview /></div>
    </div>

    <!-- 第二行：风险监控 + 机构排行 -->
    <div class="layer-row2">
      <div class="cell-left"><PcRiskMonitor /></div>
      <div class="cell-main"><PcBranchRanking /></div>
    </div>

    <!-- 底部趋势 -->
    <div class="layer-bottom"><PcTrendAnalysis /></div>

    <!-- 底部信息 -->
    <div class="footer-bar">兰州银行 · 全行经营总览驾驶舱 · 数据仅供展示参考</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PcKpiBand from '@/components/pctotal/PcKpiBand.vue'
import PcCustomerAnalysis from '@/components/pctotal/PcCustomerAnalysis.vue'
import PcBusinessOverview from '@/components/pctotal/PcBusinessOverview.vue'
import PcRiskMonitor from '@/components/pctotal/PcRiskMonitor.vue'
import PcBranchRanking from '@/components/pctotal/PcBranchRanking.vue'
import PcTrendAnalysis from '@/components/pctotal/PcTrendAnalysis.vue'

const currentTime = ref(''), currentDate = ref(''), updateTime = ref('')

function pad(n) { return String(n).padStart(2, '0') }
function refreshClock() {
  const n = new Date()
  currentTime.value = `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`
  currentDate.value = `${n.getFullYear()}年${pad(n.getMonth()+1)}月${pad(n.getDate())}日`
  updateTime.value = `${pad(n.getHours())}:${pad(n.getMinutes())}`
}

onMounted(() => { refreshClock(); setInterval(refreshClock, 1000) })
onUnmounted(() => {})
</script>

<style lang="scss" scoped>
.pc-dashboard {
  width: 100%;
  height: 100vh;
  background: #050d1a;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: #050d1a; }
  &::-webkit-scrollbar-thumb { background: #1a2a4a; border-radius: 3px; }
}

.header-bar { display: flex; align-items: center; justify-content: space-between; padding: 14px 28px 8px; flex-shrink: 0; }
.header-left { .logo-area { width: 120px; height: 36px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #4a5a6a; font-size: 13px; } }
.header-center { text-align: center; }
.page-title { font-size: 26px; font-weight: 700; color: #FFD700; letter-spacing: 8px; margin-bottom: 2px; }
.page-subtitle { font-size: 12px; color: #4a5a6a; letter-spacing: 6px; }
.header-right { text-align: right; }
.header-time { font-size: 22px; font-weight: 700; color: #e0e8f0; font-family: 'Courier New',monospace; }
.header-date { font-size: 14px; color: #4a5a6a; margin-top: 1px; }
.header-update { font-size: 12px; color: #4a5a6a; margin-top: 1px; }
.header-line { height: 1px; background: linear-gradient(90deg,transparent,#1a2a4a,transparent); margin: 0 28px; flex-shrink: 0; }

.layer-kpi { flex-shrink: 0; padding: 10px 20px 6px; }

.layer-row1 { height: 360px; display: flex; gap: 12px; padding: 6px 20px; flex-shrink: 0; }
.layer-row2 { height: 320px; display: flex; gap: 12px; padding: 6px 20px; flex-shrink: 0; }

.cell-left { flex: 0 0 28%; min-width: 0; }
.cell-main { flex: 1; min-width: 0; }

.layer-bottom { height: 200px; flex-shrink: 0; padding: 6px 20px 10px; }

.footer-bar { text-align: center; padding: 10px 0 14px; color: #2a3a4a; font-size: 12px; letter-spacing: 2px; flex-shrink: 0; border-top: 1px solid #0a1a2a; margin-top: 4px; }
</style>