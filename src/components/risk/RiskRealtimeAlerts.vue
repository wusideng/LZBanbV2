<template>
  <div class="risk-realtime-alerts">
    <div class="alert-sidebar">
      <div class="alert-title">
        <span class="alert-icon">⚠</span>
        <span>风险告警墙</span>
        <span class="alert-count">{{ alerts.length }}</span>
      </div>
      <div class="alert-levels">
        <span class="lv-badge critical">应急处置 {{ criticalCount }}</span>
        <span class="lv-badge warning">重点关注 {{ warningCount }}</span>
        <span class="lv-badge info">预警信息 {{ infoCount }}</span>
      </div>
      <div class="alert-status"><span class="live-dot"></span> 实时监控中</div>
    </div>
    <div class="alert-body" ref="alertRef">
      <div class="alert-header">
        <span class="h-col col-dot"></span>
        <span class="h-col">类型</span>
        <span class="h-col">告警内容</span>
        <span class="h-col">涉及金额</span>
        <span class="h-col">产品线</span>
        <span class="h-col">处理状态</span>
        <span class="h-col">分行</span>
        <span class="h-col">时间</span>
      </div>
      <div class="alert-scroll-wrap">
        <div class="alert-scroll" :style="{ transform: `translateY(-${offset}px)` }">
          <div v-for="(alert, idx) in displayAlerts" :key="alert.id + '-' + idx" class="alert-item" :class="'lv-' + alert.level">
            <span class="a-dot" :class="'dot-' + alert.level"></span>
            <span class="a-type" :class="'t-' + alert.type">{{ alert.type }}</span>
            <span class="a-msg">{{ alert.message }}</span>
            <span class="a-amount">{{ alert.amount }}</span>
            <span class="a-product">{{ alert.product }}</span>
            <span class="a-status" :class="'s-' + alert.status">{{ alert.status }}</span>
            <span class="a-branch">{{ alert.branch }}</span>
            <span class="a-time">{{ alert.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { realtimeAlerts, generateMockAlert } from '@/mockData/riskData.js'

const alerts = ref([...realtimeAlerts])
const offset = ref(0)
const displayAlerts = computed(() => [...alerts.value, ...alerts.value])
const criticalCount = computed(() => alerts.value.filter(a => a.level === 'critical').length)
const warningCount = computed(() => alerts.value.filter(a => a.level === 'warning').length)
const infoCount = computed(() => alerts.value.filter(a => a.level === 'info').length)

let timer, addTimer
onMounted(() => {
  const h = 30 * alerts.value.length
  timer = setInterval(() => { offset.value += 1; if (offset.value >= h) offset.value = 0 }, 70)
  addTimer = setInterval(() => {
    const m = generateMockAlert()
    alerts.value.unshift(m)
    if (alerts.value.length > 20) alerts.value = alerts.value.slice(0, 20)
  }, 5000)
})
onUnmounted(() => { clearInterval(timer); clearInterval(addTimer) })
</script>

<style lang="scss" scoped>
.risk-realtime-alerts { display: flex; height: 100%; gap: 8px; padding: 0 16px 6px; }
.alert-sidebar { flex-shrink: 0; display: flex; flex-direction: column; gap: 4px; padding: 6px 10px; background: rgba(10,42,32,0.5); border: 1px solid rgba(255,91,91,0.15); border-radius: 6px; justify-content: center; }
.alert-title { display: flex; align-items: center; gap: 6px; font-size: 15px; color: #FF5B5B; font-weight: 600; letter-spacing: 1px; .alert-icon { font-size: 18px; animation: pulse 2s ease-in-out infinite; } .alert-count { font-size: 12px; background: rgba(255,91,91,0.2); padding: 0 6px; border-radius: 8px; } }
@keyframes pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
.alert-levels { display: flex; flex-direction: column; gap: 3px; }
.lv-badge { font-size: 12px; padding: 2px 8px; border-radius: 4px; text-align: center; white-space: nowrap; &.critical { background: rgba(255,91,91,0.15); color: #FF5B5B; border: 1px solid rgba(255,91,91,0.2); } &.warning { background: rgba(255,159,67,0.12); color: #FF9F43; border: 1px solid rgba(255,159,67,0.15); } &.info { background: rgba(0,255,153,0.08); color: #00FF99; border: 1px solid rgba(0,255,153,0.1); } }
.alert-status { display: flex; align-items: center; gap: 4px; font-size: 13px; color: #00FFC6; .live-dot { width: 6px; height: 6px; background: #00FFC6; border-radius: 50%; box-shadow: 0 0 8px rgba(0,255,198,0.6); animation: breathe 1.5s ease-in-out infinite; } }
@keyframes breathe { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
.alert-body { flex: 1; display: flex; flex-direction: column; background: rgba(10,42,32,0.5); border: 1px solid rgba(0,255,153,0.08); border-radius: 6px; overflow: hidden; }
.alert-header { display: flex; padding: 3px 12px; font-size: 13px; color: #4a5a6a; border-bottom: 1px solid rgba(0,255,153,0.06); flex-shrink: 0; text-align: center; .h-col { flex: 1; &.col-dot { flex: 0 0 18px; } } }
.alert-scroll-wrap { flex: 1; overflow: hidden; position: relative; }
.alert-scroll { transition: none; }
.alert-item { display: flex; align-items: center; padding: 4px 12px; height: 30px; font-size: 14px; border-bottom: 1px solid rgba(0,255,153,0.03); transition: background 0.3s;
  &:hover { background: rgba(0,255,153,0.03); }
  &.lv-critical { border-left: 3px solid #FF5B5B; background: rgba(255,91,91,0.04); } &.lv-warning { border-left: 3px solid #FF9F43; } &.lv-info { border-left: 3px solid #00FF99; }
  > span { flex: 1; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
}
.a-dot { flex: 0 0 16px !important; width: 5px; height: 5px; border-radius: 50%; margin: 0 auto; &.dot-critical { background: #FF5B5B; box-shadow: 0 0 6px rgba(255,91,91,0.6); } &.dot-warning { background: #FF9F43; } &.dot-info { background: #00FF99; } }
.a-type { font-weight: 600; &.t-异常交易 { color: #FF5B5B; } &.t-客户风险 { color: #FF9F43; } &.t-资金波动 { color: #FF9F43; } &.t-区域风险 { color: #00FF99; } &.t-系统异常 { color: #1DBF73; } &.t-逾期预警 { color: #FF9F43; } }
.a-msg { color: #e0e8f0; }
.a-amount { color: #e0e8f0; font-family: 'Courier New',monospace; font-weight: 600; }
.a-product { color: #8899aa; }
.a-status { font-weight: 600; &.s-待处理 { color: #FF5B5B; } &.s-处理中 { color: #FF9F43; } &.s-已完成 { color: #00FF99; } }
.a-branch { color: #8899aa; }
.a-time { color: #4a5a6a; font-size: 13px; }
</style>