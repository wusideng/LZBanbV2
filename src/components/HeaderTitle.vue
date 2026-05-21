<template>
  <div class="header-title">
    <!-- 顶部流光边框 -->
    <div class="top-flow-bar"></div>
    <!-- 扫描光 -->
    <div class="scan-line"></div>
    <!-- 四角装饰 -->
    <span class="corner top-left"></span>
    <span class="corner top-right"></span>
    <span class="corner bottom-left"></span>
    <span class="corner bottom-right"></span>
    <!-- 侧边光带 -->
    <div class="side-light left"></div>
    <div class="side-light right"></div>

    <div class="header-inner">
      <!-- 左侧：状态区 -->
      <div class="header-left">
        <div class="status-item">
          <span class="status-dot green"></span>
          <div class="status-text-wrap">
            <span class="status-label">系统状态</span>
            <span class="status-text">运行正常</span>
          </div>
        </div>
        <div class="status-divider"></div>
        <div class="status-item">
          <span class="status-dot cyan"></span>
          <div class="status-text-wrap">
            <span class="status-label">数据同步</span>
            <span class="status-text">已同步</span>
          </div>
        </div>
        <div class="status-divider"></div>
        <div class="status-item">
          <span class="status-dot orange"></span>
          <div class="status-text-wrap">
            <span class="status-label">经营监控</span>
            <span class="status-text">运行中</span>
          </div>
        </div>
      </div>

      <!-- 中间：大屏标题 -->
      <div class="header-center">
        <div class="title-top-deco">
          <span class="deco-line left"></span>
          <span class="deco-arrow">◈</span>
          <span class="deco-line right"></span>
        </div>

        <div class="title-main-wrap">
          <span class="title-wing left"></span>
          <h1 class="page-title">{{ title }}</h1>
          <span class="title-wing right"></span>
        </div>

        <div class="title-bottom-deco">
          <span class="deco-text">{{ subtitle }}</span>
          <span class="deco-bar"></span>
        </div>
      </div>

      <!-- 右侧：时间区 -->
      <div class="header-right">
        <div class="time-wrap">
          <div class="time-icon">🕐</div>
          <div class="time-value">{{ currentTime }}</div>
        </div>
        <div class="status-divider"></div>
        <div class="date-wrap">
          <div class="date-value">{{ currentDate }}</div>
        </div>
        <div class="status-divider"></div>
        <div class="update-wrap">
          <span class="update-label">数据更新</span>
          <span class="update-value">{{ updateTime }}</span>
        </div>
      </div>
    </div>

    <!-- 底部流光边框 -->
    <div class="bottom-flow-bar"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: { type: String, default: '个人金融经营驾驶舱' },
  subtitle: { type: String, default: 'RETAIL FINANCIAL OPERATIONS COCKPIT' }
})

const currentTime = ref('')
const currentDate = ref('')
const updateTime = ref('')

let timer = null

function pad(n) {
  return String(n).padStart(2, '0')
}

function updateTimeDisplay() {
  const now = new Date()
  const h = pad(now.getHours())
  const m = pad(now.getMinutes())
  const s = pad(now.getSeconds())
  currentTime.value = `${h}:${m}:${s}`

  const y = now.getFullYear()
  const mo = pad(now.getMonth() + 1)
  const d = pad(now.getDate())
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  currentDate.value = `${y}年${mo}月${d}日 星期${weekdays[now.getDay()]}`
}

function formatUpdateTime() {
  const now = new Date()
  updateTime.value = `${pad(now.getHours())}:${pad(now.getMinutes())}`
}

onMounted(() => {
  updateTimeDisplay()
  formatUpdateTime()
  timer = setInterval(() => {
    updateTimeDisplay()
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.header-title {
  position: relative;
  height: 100px;
  background: linear-gradient(180deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(5, 5, 8, 0.9) 50%,
    rgba(0, 0, 0, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 153, 255, 0.2);
  overflow: hidden;
  z-index: 100;
}

// ===== 顶部流光条 =====
.top-flow-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(0, 153, 255, 0.1) 10%,
    #0099ff 30%,
    #33ddff 50%,
    #0099ff 70%,
    rgba(0, 153, 255, 0.1) 90%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: flowBarMove 3s linear infinite;
  box-shadow: 0 0 12px rgba(0, 153, 255, 0.5), 0 0 24px rgba(0, 153, 255, 0.2);
}

@keyframes flowBarMove {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

// ===== 底部流光条 =====
.bottom-flow-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(51, 221, 255, 0.05) 15%,
    rgba(51, 221, 255, 0.4) 35%,
    #33ddff 50%,
    rgba(51, 221, 255, 0.4) 65%,
    rgba(51, 221, 255, 0.05) 85%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: flowBarMove 4s linear infinite;
  animation-delay: 0.5s;
}

// ===== 扫描光 =====
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(0, 153, 255, 0.4), transparent);
  animation: scanMove 4s ease-in-out infinite;
  z-index: 2;
  pointer-events: none;
}

@keyframes scanMove {
  0% { top: -3px; opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.8; }
  100% { top: 100%; opacity: 0; }
}

// ===== 四角装饰 =====
.corner {
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 3;
  border-color: rgba(0, 153, 255, 0.5);
  opacity: 0.8;
  filter: drop-shadow(0 0 4px rgba(0, 153, 255, 0.4));

  &.top-left {
    top: 6px; left: 8px;
    border-top: 2px solid;
    border-left: 2px solid;
  }
  &.top-right {
    top: 6px; right: 8px;
    border-top: 2px solid;
    border-right: 2px solid;
  }
  &.bottom-left {
    bottom: 6px; left: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
  }
  &.bottom-right {
    bottom: 6px; right: 8px;
    border-bottom: 2px solid;
    border-right: 2px solid;
  }
}

// ===== 侧边光带 =====
.side-light {
  position: absolute;
  top: 10%;
  bottom: 10%;
  width: 1px;
  z-index: 2;

  &.left {
    left: 6px;
    background: linear-gradient(180deg, transparent, rgba(0, 153, 255, 0.3), transparent);
    box-shadow: 0 0 6px rgba(0, 153, 255, 0.15);
  }
  &.right {
    right: 6px;
    background: linear-gradient(180deg, transparent, rgba(51, 221, 255, 0.3), transparent);
    box-shadow: 0 0 6px rgba(51, 221, 255, 0.15);
  }
}

// ===== 内部布局 =====
.header-inner {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 5;
}

// ===== 左侧状态 =====
.header-left {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 280px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;

  &.green {
    background: #00ff95;
    box-shadow: 0 0 8px rgba(0, 255, 149, 0.7);
    animation: breathe 2s ease-in-out infinite;
  }
  &.cyan {
    background: #33ddff;
    box-shadow: 0 0 8px rgba(51, 221, 255, 0.7);
    animation: breathe 2.5s ease-in-out infinite;
  }
  &.orange {
    background: #ffb347;
    box-shadow: 0 0 8px rgba(255, 179, 71, 0.7);
    animation: breathe 3s ease-in-out infinite;
  }
}

@keyframes breathe {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.1); }
}

.status-text-wrap {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.status-label {
  font-size: 9px;
  color: #4a5a6a;
  letter-spacing: 1px;
}
.status-text {
  font-size: 12px;
  font-weight: 600;
  color: #33ddff;
}

// ===== 分隔线 =====
.status-divider {
  width: 1px;
  height: 28px;
  background: linear-gradient(180deg, transparent, rgba(0, 153, 255, 0.3), transparent);
}

// ===== 中间标题 =====
.header-center {
  text-align: center;
  flex: 1;
}

.title-top-deco {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 4px;

  .deco-line {
    width: 80px;
    height: 1px;

    &.left {
      background: linear-gradient(90deg, transparent, rgba(0, 153, 255, 0.5));
    }
    &.right {
      background: linear-gradient(90deg, rgba(0, 153, 255, 0.5), transparent);
    }
  }

  .deco-arrow {
    color: rgba(0, 153, 255, 0.6);
    font-size: 8px;
    animation: arrowPulse 2s ease-in-out infinite;
  }
}

@keyframes arrowPulse {
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

.title-main-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 3px;
}

.title-wing {
  width: 50px;
  height: 2px;
  position: relative;

  &.left {
    background: linear-gradient(90deg, transparent, rgba(0, 153, 255, 0.4));
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: -3px;
      width: 8px;
      height: 8px;
      border-top: 2px solid rgba(0, 153, 255, 0.5);
      border-right: 2px solid rgba(0, 153, 255, 0.5);
      transform: rotate(45deg);
    }
  }
  &.right {
    background: linear-gradient(90deg, rgba(0, 153, 255, 0.4), transparent);
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: -3px;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid rgba(0, 153, 255, 0.5);
      border-left: 2px solid rgba(0, 153, 255, 0.5);
      transform: rotate(45deg);
    }
  }
}

.page-title {
  font-size: 30px;
  font-weight: 700;
  color: #0099ff;
  text-shadow:
    0 0 10px rgba(0, 153, 255, 0.6),
    0 0 20px rgba(0, 153, 255, 0.4),
    0 0 40px rgba(0, 153, 255, 0.2),
    0 0 80px rgba(0, 153, 255, 0.1);
  letter-spacing: 10px;
  background: linear-gradient(90deg, #0099ff, #33ddff, #0099ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleShimmer 4s linear infinite;
}

@keyframes titleShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.title-bottom-deco {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  .deco-text {
    font-size: 9px;
    color: rgba(51, 221, 255, 0.25);
    letter-spacing: 6px;
  }

  .deco-bar {
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 153, 255, 0.3), transparent);
  }
}

// ===== 右侧时间 =====
.header-right {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 280px;
  justify-content: flex-end;
}

.time-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}
.time-icon {
  font-size: 16px;
  animation: breathe 2s ease-in-out infinite;
}
.time-value {
  font-size: 24px;
  font-weight: 700;
  color: #33ddff;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 12px rgba(51, 221, 255, 0.5), 0 0 24px rgba(51, 221, 255, 0.2);
  letter-spacing: 3px;
}

.date-wrap {
  .date-value {
    font-size: 12px;
    color: #8899aa;
    white-space: nowrap;
    font-family: 'Courier New', monospace;
  }
}

.update-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
}
.update-label {
  font-size: 9px;
  color: #4a5a6a;
  letter-spacing: 1px;
}
.update-value {
  font-size: 16px;
  font-weight: 600;
  color: #33ddff;
  font-family: 'Courier New', monospace;
}
</style>