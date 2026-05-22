<template>
  <div class="realtime-broadcast">
    <div class="broadcast-header">
      <div class="broadcast-title-row">
        <span class="section-title">实时经营动态播报中心</span>
        <span class="broadcast-status">
          <span class="live-dot"></span>
          实时接收中
        </span>
      </div>
      <div class="broadcast-header-cols">
        <span class="hcol">机构</span>
        <span class="hcol">业务</span>
        <span class="hcol">金额</span>
        <span class="hcol">单位</span>
        <span class="hcol">渠道</span>
        <span class="hcol">产品</span>
        <span class="hcol">客户</span>
        <span class="hcol">等级</span>
        <span class="hcol">利率</span>
        <span class="hcol">期限</span>
        <span class="hcol">状态</span>
        <span class="hcol">时间</span>
      </div>
    </div>
    <div class="broadcast-body" ref="scrollRef">
      <div class="broadcast-scroll" :style="{ transform: `translateY(-${scrollY}px)` }">
        <div
          v-for="(msg, idx) in displayMessages"
          :key="msg.id + '-' + idx"
          class="broadcast-item"
          :class="msg.type"
        >
          <span class="col col-branch">{{ msg.branch }}</span>
          <span class="col col-action">{{ msg.action }}</span>
          <span class="col col-value">{{ formatValue(msg.value) }}</span>
          <span class="col col-unit">{{ msg.unit }}</span>
          <span class="col col-channel">{{ msg.channel }}</span>
          <span class="col col-product">{{ msg.product }}</span>
          <span class="col col-customer">{{ msg.customer }}</span>
          <span class="col col-level">{{ msg.level }}</span>
          <span class="col col-rate">{{ msg.rate }}</span>
          <span class="col col-term">{{ msg.term }}</span>
          <span class="col col-status" :class="msg.status">
            {{ msg.status === 'success' ? '✓ 成功' : '⋯ 处理中' }}
          </span>
          <span class="col col-time">{{ msg.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { realtimeMessages, generateMockRealtime } from '@/mockData/financeData.js'

const messages = ref([...realtimeMessages])
const scrollY = ref(0)
const scrollRef = ref(null)

let scrollTimer = null
let addTimer = null

const displayMessages = computed(() => [...messages.value, ...messages.value])

function formatValue(val) {
  if (val >= 10000) return (val / 10000).toFixed(1) + '万'
  if (val >= 1000) return (val / 1000).toFixed(1) + '千'
  return String(val)
}

onMounted(() => {
  const itemHeight = 30
  const totalH = messages.value.length * itemHeight

  scrollTimer = setInterval(() => {
    scrollY.value += 1
    if (scrollY.value >= totalH) {
      scrollY.value = 0
    }
  }, 60)

  addTimer = setInterval(() => {
    const newMsg = generateMockRealtime()
    messages.value.unshift(newMsg)
    if (messages.value.length > 20) {
      messages.value = messages.value.slice(0, 20)
    }
  }, 5000)
})

onUnmounted(() => {
  if (scrollTimer) clearInterval(scrollTimer)
  if (addTimer) clearInterval(addTimer)
})
</script>

<style lang="scss" scoped>
.realtime-broadcast {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.broadcast-header {
  display: flex;
  flex-direction: column;
  padding: 2px 16px 0;
  flex-shrink: 0;
  gap: 0;
}

.broadcast-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #33ddff;
  text-shadow: 0 0 10px rgba(51, 221, 255, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  &::before { content: '◆ '; color: #0099ff; }
}

.broadcast-header-cols {
  display: flex;
  flex: 1;
  gap: 0;
  padding: 2px 8px;
  border-bottom: 1px solid rgba(0, 153, 255, 0.08);
}
.hcol {
  flex: 1;
  font-size: 12px;
  color: #4a5a6a;
  text-align: center;
  letter-spacing: 1px;
}

.broadcast-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #00ff95;
  flex-shrink: 0;
  .live-dot {
    width: 6px; height: 6px;
    background: #00ff95;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 255, 149, 0.6);
    animation: breathe 1.2s ease-in-out infinite;
  }
}

@keyframes breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.broadcast-body {
  flex: 1;
  overflow: hidden;
  padding: 0 16px;
  position: relative;
}

.broadcast-scroll {
  transition: none;
}

.broadcast-item {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 153, 255, 0.04);
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 153, 255, 0.05);
  }

  &.customer { border-left: 2px solid #0099ff; }
  &.aum { border-left: 2px solid #ffb347; }
  &.wealth { border-left: 2px solid #00ff95; }
  &.loan { border-left: 2px solid #00aaff; }
  &.deposit { border-left: 2px solid #33ddff; }
}

.col {
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}

.col-branch {
  color: #0099ff;
  font-weight: 600;
}
.col-action {
  color: #8899aa;
}
.col-value {
  color: #33ddff;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}
.col-unit {
  color: #4a5a6a;
  font-size: 12px;
}
.col-channel {
  color: #8899aa;
}
.col-product {
  color: #e0e8f0;
}
.col-customer {
  color: #00ff95;
  font-weight: 500;
}
.col-level {
  color: #ffb347;
  &.level { font-weight: 500; }
}
.col-rate {
  color: #33ddff;
  font-family: 'Courier New', monospace;
}
.col-term {
  color: #8899aa;
}
.col-status {
  font-size: 12px;
  &.success { color: #00ff95; }
  &.processing { color: #ffb347; }
}
.col-time {
  color: #4a5a6a;
  font-size: 12px;
}
</style>