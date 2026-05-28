<template>
  <div class="pcp-dashboard">
    <!-- HEADER -->
    <div class="header-bar">
      <div class="header-left"><div class="logo-area">银行LOGO</div></div>
      <div class="header-center">
        <h1 class="page-title">个人金融经营驾驶舱</h1>
        <div class="page-subtitle">RETAIL FINANCE OPERATION DASHBOARD</div>
      </div>
      <div class="header-right">
        <div class="header-time">{{ currentTime }}</div>
        <div class="header-date">{{ currentDate }}</div>
        <div class="header-update">更新: {{ updateTime }}</div>
      </div>
    </div>
    <div class="header-line"></div>

    <!-- KPI -->
    <div class="layer-kpi"><PcpKpiBand /></div>

    <!-- ROW 1: 三等分 -->
    <div class="layer-row1">
      <div class="col-3"><PcpCustomerOps /></div>
      <div class="col-3"><PcpChannelOps /></div>
      <div class="col-3"><PcpWealthBusiness /></div>
    </div>

    <!-- ROW 2: 三等分 -->
    <div class="layer-row2">
      <div class="col-3"><PcpCustomerValue /></div>
      <div class="col-3"><PcpChartArea /></div>
      <div class="col-3"><PcpMonitorSummary /></div>
    </div>

    <div class="footer-bar">兰州银行 · 个人金融经营驾驶舱 · 数据仅供展示参考</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PcpKpiBand from '@/components/pcpersonal/PcpKpiBand.vue'
import PcpCustomerOps from '@/components/pcpersonal/PcpCustomerOps.vue'
import PcpChannelOps from '@/components/pcpersonal/PcpChannelOps.vue'
import PcpWealthBusiness from '@/components/pcpersonal/PcpWealthBusiness.vue'
import PcpCustomerValue from '@/components/pcpersonal/PcpCustomerValue.vue'
import PcpChartArea from '@/components/pcpersonal/PcpChartArea.vue'
import PcpMonitorSummary from '@/components/pcpersonal/PcpMonitorSummary.vue'

const currentTime = ref(''), currentDate = ref(''), updateTime = ref('')
function pad(n) { return String(n).padStart(2, '0') }
function refreshClock() {
  const n = new Date()
  currentTime.value = `${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`
  currentDate.value = `${n.getFullYear()}年${pad(n.getMonth()+1)}月${pad(n.getDate())}日`
  updateTime.value = `${pad(n.getHours())}:${pad(n.getMinutes())}`
}
onMounted(() => { refreshClock(); setInterval(refreshClock, 1000) })
</script>

<style lang="scss" scoped>
.pcp-dashboard {
  width: 100%; height: 100vh; background: #050d1a; display: flex; flex-direction: column;
  overflow-y: auto; overflow-x: hidden;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: #050d1a; }
  &::-webkit-scrollbar-thumb { background: #1a2a4a; border-radius: 3px; }
}
.header-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 28px 6px; flex-shrink: 0; }
.header-left .logo-area { width: 120px; height: 32px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #4a5a6a; font-size: 13px; }
.header-center { text-align: center; }
.page-title { font-size: 22px; font-weight: 700; color: #e0e8f0; letter-spacing: 6px; margin-bottom: 1px; }
.page-subtitle { font-size: 12px; color: #4a5a6a; letter-spacing: 5px; }
.header-right { text-align: right; }
.header-time { font-size: 18px; font-weight: 700; color: #e0e8f0; font-family: 'Courier New',monospace; }
.header-date { font-size: 13px; color: #4a5a6a; }
.header-update { font-size: 12px; color: #4a5a6a; }
.header-line { height: 1px; background: #1a2a4a; margin: 0 28px; flex-shrink: 0; }
.layer-kpi { flex-shrink: 0; padding: 6px 18px 2px; }

/* 三列等分 - 所有列高度一致，底部自然对齐 */
.layer-row1, .layer-row2 { display: flex; gap: 8px; padding: 4px 18px; flex-shrink: 0; overflow: hidden; }
.layer-row1 { height: 420px; }
.layer-row2 { height: 380px; }
.col-3 { flex: 1; min-width: 0; overflow: hidden; }

.footer-bar { text-align: center; padding: 6px 0; color: #2a3a4a; font-size: 12px; letter-spacing: 2px; flex-shrink: 0; border-top: 1px solid #0a1a2a; }
</style>