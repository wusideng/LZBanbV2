<template>
  <div class="digital-realtime-ops">
    <div class="ops-metrics">
      <div class="metric"><div class="m-label">当前在线用户</div><div class="m-value">{{ (opsData.currentOnline/10000).toFixed(2) }}<span class="m-unit">万</span></div><div class="m-trend up"><span class="live-dot"></span>实时</div></div>
      <div class="divider"></div>
      <div class="metric"><div class="m-label">今日活跃用户</div><div class="m-value">{{ (opsData.todayActive/10000).toFixed(1) }}<span class="m-unit">万</span></div><div class="m-trend">运行正常</div></div>
      <div class="divider"></div>
      <div class="metric"><div class="m-label">今日交易笔数</div><div class="m-value">{{ (opsData.todayTx/10000).toFixed(1) }}<span class="m-unit">万</span></div><div class="m-trend up">活跃中</div></div>
      <div class="divider"></div>
      <div class="metric"><div class="m-label">今日支付笔数</div><div class="m-value">{{ (opsData.todayPay/10000).toFixed(1) }}<span class="m-unit">万</span></div><div class="m-trend up">活跃中</div></div>
      <div class="divider"></div>
      <div class="metric"><div class="m-label">交易日峰值</div><div class="m-value peak">{{ (opsData.txPeak/10000).toFixed(1) }}<span class="m-unit">万</span></div><div class="m-trend peak">今日峰值</div></div>
      <div class="divider"></div>
      <div class="metric"><div class="m-label">活跃峰值</div><div class="m-value peak">{{ (opsData.activePeak/10000).toFixed(1) }}<span class="m-unit">万</span></div><div class="m-trend peak">今日峰值</div></div>
    </div>
    <div class="data-flow">
      <div class="flow-title"><span class="live-dot"></span> 实时数据流 <span class="flow-tag">LIVE</span></div>
      <div class="flow-header">
        <span class="h-col col-dot"></span>
        <span class="h-col">序号</span>
        <span class="h-col">类型</span>
        <span class="h-col">操作</span>
        <span class="h-col">金额</span>
        <span class="h-col">客户</span>
        <span class="h-col">渠道</span>
        <span class="h-col">产品</span>
        <span class="h-col">状态</span>
        <span class="h-col">时间</span>
      </div>
      <div class="flow-body" ref="flowRef">
        <div class="flow-scroll" :style="{ transform: `translateY(-${offset}px)` }">
          <div v-for="(msg, idx) in displayMsgs" :key="msg.id + '-' + idx" class="flow-item" :class="msg.type">
            <span class="f-dot" :class="'dot-' + msg.type"></span>
            <span class="f-id">{{ msg.id.slice(-8) }}</span>
            <span class="f-biztype">{{ msg.bizType }}</span>
            <span class="f-action">{{ msg.action }}</span>
            <span class="f-amount">{{ msg.amount ? msg.amount.toLocaleString() : '-' }}<small v-if="msg.unit">{{ msg.unit }}</small></span>
            <span class="f-customer">{{ msg.customer || '-' }}</span>
            <span class="f-channel">{{ msg.channel }}</span>
            <span class="f-product">{{ msg.product || '-' }}</span>
            <span class="f-status" :class="msg.status">{{ msg.status }}</span>
            <span class="f-time">{{ msg.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { realtimeOpsData, realtimeOpsMessages, generateMockRealtimeMsg } from '@/mockData/digitalData.js'
const opsData = realtimeOpsData
const messages = ref([...realtimeOpsMessages])
const offset = ref(0)
const displayMsgs = computed(() => [...messages.value, ...messages.value])
let timer, addTimer

onMounted(() => {
  const h = 28 * messages.value.length
  timer = setInterval(() => { offset.value += 1; if (offset.value >= h) offset.value = 0 }, 60)
  addTimer = setInterval(() => {
    messages.value.unshift(generateMockRealtimeMsg())
    if (messages.value.length > 15) messages.value = messages.value.slice(0, 15)
  }, 5000)
})
onUnmounted(() => { clearInterval(timer); clearInterval(addTimer) })
</script>

<style lang="scss" scoped>
.digital-realtime-ops { display: flex; height: 100%; gap: 8px; padding: 0 16px 6px; }
.ops-metrics { flex: 0 0 auto; display: flex; align-items: center; background: rgba(8,24,38,0.5); border: 1px solid rgba(0,229,255,0.08); border-radius: 6px; padding: 4px 8px; gap: 0; }
.metric { text-align: center; padding: 2px 10px; .m-label { font-size: 13px; color: #4a5a6a; letter-spacing: 1px; margin-bottom: 1px; } .m-value { font-size: 22px; font-weight: 700; color: #00E5FF; font-family: 'Courier New',monospace; text-shadow: 0 0 12px rgba(0,229,255,0.3); &.peak { color: #6C7BFF; text-shadow: 0 0 15px rgba(108,123,255,0.4); } .m-unit { font-size: 14px; color: #4a5a6a; margin-left: 2px; } } .m-trend { font-size: 13px; color: #4a5a6a; &.up { color: #00FFC6; } &.peak { color: #6C7BFF; } } }
.divider { width: 1px; height: 40px; background: linear-gradient(180deg,transparent,rgba(0,229,255,0.15),transparent); }
.data-flow { flex: 1; display: flex; flex-direction: column; background: rgba(8,24,38,0.5); border: 1px solid rgba(0,229,255,0.08); border-radius: 6px; overflow: hidden; }
.flow-title { display: flex; align-items: center; gap: 6px; padding: 4px 12px; font-size: 15px; color: #00E5FF; font-weight: 600; letter-spacing: 2px; flex-shrink: 0; .live-dot { width: 6px; height: 6px; background: #00FFC6; border-radius: 50%; box-shadow: 0 0 8px rgba(0,255,198,0.6); animation: breathe 1.2s ease-in-out infinite; } .flow-tag { font-size: 12px; background: rgba(0,229,255,0.12); padding: 1px 8px; border-radius: 4px; color: #00E5FF; letter-spacing: 2px; } }
.flow-header { display: flex; padding: 3px 12px; font-size: 13px; color: #4a5a6a; border-bottom: 1px solid rgba(0,229,255,0.06); flex-shrink: 0; text-align: center; .h-col { flex: 1; &.col-dot { flex: 0 0 16px; } } }
@keyframes breathe { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
.flow-body { flex: 1; overflow: hidden; position: relative; }
.flow-scroll { transition: none; }
.flow-item { display: flex; align-items: center; padding: 4px 12px; height: 30px; font-size: 14px; border-bottom: 1px solid rgba(0,229,255,0.03); transition: background 0.3s;
  &:hover { background: rgba(0,229,255,0.04); }
  &.transaction { border-left: 2px solid #00E5FF; } &.payment { border-left: 2px solid #6C7BFF; } &.open { border-left: 2px solid #00FFC6; } &.active { border-left: 2px solid #33D1FF; }
  > span { flex: 1; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
}
.f-dot { flex: 0 0 14px !important; width: 5px; height: 5px; border-radius: 50%; margin: 0 auto; &.dot-transaction { background: #00E5FF; box-shadow: 0 0 6px rgba(0,229,255,0.6); } &.dot-payment { background: #6C7BFF; box-shadow: 0 0 6px rgba(108,123,255,0.6); } &.dot-open { background: #00FFC6; box-shadow: 0 0 6px rgba(0,255,198,0.6); } &.dot-active { background: #33D1FF; box-shadow: 0 0 6px rgba(51,209,255,0.6); } }
.f-id { color: #4a5a6a; font-family: 'Courier New',monospace; font-size: 13px; }
.f-biztype { color: #00E5FF; font-weight: 600; }
.f-action { color: #e0e8f0; }
.f-amount { color: #e0e8f0; font-weight: 600; font-family: 'Courier New',monospace; small { color: #4a5a6a; font-size: 12px; margin-left: 1px; } }
.f-customer { color: #00FFC6; }
.f-channel { color: #8899aa; }
.f-product { color: #33D1FF; }
.f-status { font-weight: 600; &.成功 { color: #00FFC6; } &.处理中 { color: #FFB347; } }
.f-time { color: #4a5a6a; font-size: 13px; }
</style>