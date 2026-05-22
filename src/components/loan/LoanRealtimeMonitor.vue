<template>
  <div class="loan-realtime-monitor">
    <!-- 实时监控指标 -->
    <div class="monitor-metrics">
      <div class="metric-card">
        <div class="mc-label">实时放款</div>
        <div class="mc-value">{{ realtimeData.realtimeLoan }}<span class="mc-unit">亿</span></div>
        <div class="mc-trend up">
          <span class="live-dot mini"></span>
          持续增长中
        </div>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-card">
        <div class="mc-label">实时授信</div>
        <div class="mc-value">{{ realtimeData.realtimeCredit }}<span class="mc-unit">亿</span></div>
        <div class="mc-trend up">
          <span class="live-dot mini"></span>
          授信活跃
        </div>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-card">
        <div class="mc-label">今日放款笔数</div>
        <div class="mc-value">{{ realtimeData.todayLoanCount }}<span class="mc-unit">笔</span></div>
        <div class="mc-trend">
          <span class="live-dot mini"></span>
          运行正常
        </div>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-card">
        <div class="mc-label">今日授信笔数</div>
        <div class="mc-value">{{ realtimeData.todayCreditCount }}<span class="mc-unit">笔</span></div>
        <div class="mc-trend">
          <span class="live-dot mini"></span>
          运行正常
        </div>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-card">
        <div class="mc-label">贷款峰值</div>
        <div class="mc-value peak">{{ realtimeData.loanPeak }}<span class="mc-unit">亿</span></div>
        <div class="mc-trend peak">
          <span class="live-dot mini"></span>
          今日峰值
        </div>
      </div>
      <div class="metric-divider"></div>
      <div class="metric-card">
        <div class="mc-label">高风险客户</div>
        <div class="mc-value danger">{{ realtimeData.highRiskClients }}<span class="mc-unit">户</span></div>
        <div class="mc-trend danger">
          <span class="live-dot mini alert"></span>
          需关注
        </div>
      </div>
    </div>
    <!-- 风险告警带 -->
    <div class="alert-bar">
      <div class="alert-bar-title">
        <span class="alert-icon">⚠</span>
        <span>风险告警墙</span>
        <span class="alert-count">{{ alerts.length }}</span>
      </div>
      <div class="alert-scroll-wrap" ref="alertScrollRef">
        <div class="alert-scroll-inner" :style="{ transform: `translateY(-${alertOffset}px)` }">
          <div
            v-for="(alert, idx) in displayAlerts"
            :key="alert.id + '-' + idx"
            class="alert-msg"
            :class="'lv-' + alert.level"
          >
            <span class="alert-dot" :class="'dot-' + alert.level"></span>
            <span class="alert-text">{{ alert.message }}</span>
            <span class="alert-time">{{ alert.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 实时放款播报 -->
    <div class="realtime-feed">
      <div class="feed-title">
        <span class="live-dot"></span>
        <span>实时放款播报</span>
      </div>
      <div class="feed-body" ref="feedRef">
        <div class="feed-scroll" :style="{ transform: `translateY(-${feedOffset}px)` }">
          <div
            v-for="(msg, idx) in displayFeed"
            :key="msg.id + '-' + idx"
            class="feed-item"
            :class="{ processing: msg.status === '审核中' }"
          >
            <span class="f-branch">{{ msg.branch }}</span>
            <span class="f-product">{{ msg.product }}</span>
            <span class="f-amount">{{ msg.amount }}<small>{{ msg.unit }}</small></span>
            <span class="f-customer">{{ msg.customer }}</span>
            <span class="f-term">{{ msg.term }}</span>
            <span class="f-rate">{{ msg.rate }}</span>
            <span class="f-status" :class="msg.status === '放款成功' ? 'success' : 'processing'">{{ msg.status }}</span>
            <span class="f-time">{{ msg.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { realtimeLoanData, loanAlerts, realtimeLoanMessages, generateMockLoanRealtime, generateMockAlert } from '@/mockData/loanData.js'

const realtimeData = realtimeLoanData
const alerts = ref([...loanAlerts])
const feedMessages = ref([...realtimeLoanMessages])

const alertOffset = ref(0)
const feedOffset = ref(0)
const displayAlerts = computed(() => [...alerts.value, ...alerts.value])
const displayFeed = computed(() => [...feedMessages.value, ...feedMessages.value])

let alertTimer = null
let feedTimer = null
let addTimer = null

onMounted(() => {
  const alertH = 26
  const alertTotal = alerts.value.length * alertH
  alertTimer = setInterval(() => {
    alertOffset.value += 1
    if (alertOffset.value >= alertTotal) alertOffset.value = 0
  }, 80)

  const feedH = 28
  const feedTotal = feedMessages.value.length * feedH
  feedTimer = setInterval(() => {
    feedOffset.value += 1
    if (feedOffset.value >= feedTotal) feedOffset.value = 0
  }, 60)

  addTimer = setInterval(() => {
    const newMsg = generateMockLoanRealtime()
    feedMessages.value.unshift(newMsg)
    if (feedMessages.value.length > 15) feedMessages.value = feedMessages.value.slice(0, 15)

    // 偶尔添加告警
    if (Math.random() > 0.6) {
      const newAlert = generateMockAlert()
      alerts.value.unshift(newAlert)
      if (alerts.value.length > 12) alerts.value = alerts.value.slice(0, 12)
    }
  }, 6000)
})

onUnmounted(() => {
  if (alertTimer) clearInterval(alertTimer)
  if (feedTimer) clearInterval(feedTimer)
  if (addTimer) clearInterval(addTimer)
})
</script>

<style lang="scss" scoped>
.loan-realtime-monitor {
  display: flex;
  height: 100%;
  gap: 8px;
  padding: 0 16px 6px;
}

// 监控指标
.monitor-metrics {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 6px;
  padding: 4px 6px;
}

.metric-card {
  text-align: center;
  padding: 2px 10px;
}

.mc-label {
  font-size: 13px;
  color: #4a5a6a;
  letter-spacing: 1px;
  margin-bottom: 1px;
}

.mc-value {
  font-size: 22px;
  font-weight: 700;
  color: #FFB347;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 12px rgba(255, 179, 71, 0.3);
  &.peak { color: #FF8A34; text-shadow: 0 0 15px rgba(255, 138, 52, 0.4); }
  &.danger { color: #FF5B5B; text-shadow: 0 0 12px rgba(255, 91, 91, 0.3); }
}

.mc-unit {
  font-size: 14px;
  color: #4a5a6a;
  margin-left: 2px;
}

.mc-trend {
  font-size: 13px;
  color: #4a5a6a;
  &.up { color: #00FFC6; }
  &.peak { color: #FF8A34; }
  &.danger { color: #FF5B5B; }
}

.metric-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, rgba(255, 138, 52, 0.2), transparent);
}

// 风险告警带
.alert-bar {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 6px;
  padding: 4px 10px;
  overflow: hidden;
}

.alert-bar-title {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-size: 15px;
  color: #FF5B5B;
  font-weight: 600;
  letter-spacing: 1px;
  .alert-icon { font-size: 18px; }
  .alert-count {
    font-size: 12px;
    background: rgba(255, 91, 91, 0.2);
    padding: 0 5px;
    border-radius: 8px;
  }
}

.alert-scroll-wrap {
  flex: 1;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.alert-scroll-inner {
  transition: none;
}

.alert-msg {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 6px;
  height: 26px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 138, 52, 0.03);
  animation: alertFlash 0.3s ease-out;

  &.lv-high {
    .alert-text { color: #FF5B5B; }
  }
  &.lv-medium {
    .alert-text { color: #FFB347; }
  }
  &.lv-low {
    .alert-text { color: #4a5a6a; }
  }
}

.alert-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  &.dot-high { background: #FF5B5B; box-shadow: 0 0 6px rgba(255, 91, 91, 0.6); animation: breathe 1s ease-in-out infinite; }
  &.dot-medium { background: #FF8A34; box-shadow: 0 0 6px rgba(255, 138, 52, 0.4); }
  &.dot-low { background: #FFB347; }
}

@keyframes breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.alert-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #8899aa;
}

.alert-time {
  flex-shrink: 0;
  font-size: 13px;
  color: #4a5a6a;
}

// 实时放款播报
.realtime-feed {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 138, 52, 0.08);
  border-radius: 6px;
  overflow: hidden;
}

.feed-title {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 15px;
  color: #00FFC6;
  font-weight: 600;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(255, 138, 52, 0.05);
  flex-shrink: 0;
  .live-dot {
    width: 6px; height: 6px;
    background: #00FFC6;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 255, 198, 0.6);
    animation: breathe 1.2s ease-in-out infinite;
  }
}

.feed-body {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.feed-scroll {
  transition: none;
}

.feed-item {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  height: 28px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 138, 52, 0.03);
  transition: background 0.3s;
  &:hover { background: rgba(255, 138, 52, 0.05); }
  &.processing { border-left: 2px solid #FFB347; }
  &:not(.processing) { border-left: 2px solid rgba(0,255,198,0.3); }
}

.f-branch {
  flex: 1;
  color: #FF8A34;
  font-weight: 600;
}
.f-product {
  flex: 1.2;
  color: #00CFFF;
}
.f-amount {
  flex: 0 0 60px;
  color: #FFB347;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  text-align: right;
  small { color: #4a5a6a; font-size: 12px; margin-left: 1px; }
}
.f-customer {
  flex: 0.8;
  color: #8899aa;
}
.f-term {
  flex: 0 0 50px;
  color: #4a5a6a;
}
.f-rate {
  flex: 0 0 50px;
  color: #33D1FF;
  font-family: 'Courier New', monospace;
}
.f-status {
  flex: 0 0 65px;
  text-align: center;
  &.success { color: #00FFC6; font-weight: 600; }
  &.processing { color: #FFB347; font-weight: 600; }
}
.f-time {
  flex: 0 0 60px;
  text-align: right;
  color: #4a5a6a;
  font-size: 13px;
}

.live-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  &.mini {
    width: 4px; height: 4px;
    display: inline-block;
    margin-right: 2px;
    &.alert {
      background: #FF5B5B;
      box-shadow: 0 0 6px rgba(255, 91, 91, 0.6);
    }
  }
}
</style>