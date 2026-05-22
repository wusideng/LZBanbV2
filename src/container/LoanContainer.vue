<template>
  <div class="loan-dashboard" ref="dashboardRef">
    <!-- 粒子背景 -->
    <ParticleBackground />

    <!-- 主内容 -->
    <div class="dashboard-wrapper" :style="wrapperStyle">
      <!-- 顶部标题栏 -->
      <HeaderTitle title="个贷与消费金融驾驶舱" subtitle="CONSUMER FINANCE COMMAND CENTER" />

      <!-- 第一层：核心贷款KPI -->
      <div class="layer-kpi">
        <LoanKpiBand />
      </div>

      <!-- 第二层：三栏布局 -->
      <div class="layer-middle">
        <div class="col-left">
          <LoanClientCenter />
        </div>
        <div class="col-center">
          <LoanCoreCenter />
        </div>
        <div class="col-right">
          <LoanRiskMonitor />
        </div>
      </div>

      <!-- 第三层：放款经营 + 产品经营 + 机构排行 -->
      <div class="layer-operations">
        <LoanOperations />
      </div>

      <!-- 第四层：风险告警 + 实时监控 -->
      <div class="layer-realtime">
        <LoanRealtimeMonitor />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import LoanKpiBand from '@/components/loan/LoanKpiBand.vue'
import LoanCoreCenter from '@/components/loan/LoanCoreCenter.vue'
import LoanClientCenter from '@/components/loan/LoanClientCenter.vue'
import LoanRiskMonitor from '@/components/loan/LoanRiskMonitor.vue'
import LoanOperations from '@/components/loan/LoanOperations.vue'
import LoanRealtimeMonitor from '@/components/loan/LoanRealtimeMonitor.vue'

const dashboardRef = ref(null)
const scale = ref(1)

const DESIGN_WIDTH = 1920
const DESIGN_HEIGHT = 1080

function handleResize() {
  const w = window.innerWidth
  const h = window.innerHeight
  const scaleX = w / DESIGN_WIDTH
  const scaleY = h / DESIGN_HEIGHT
  scale.value = Math.min(scaleX, scaleY)
}

const wrapperStyle = computed(() => ({
  width: DESIGN_WIDTH + 'px',
  height: DESIGN_HEIGHT + 'px',
  transform: `translate(-50%, -50%) scale(${scale.value})`,
  transformOrigin: 'center center',
  position: 'absolute',
  left: '50%',
  top: '50%'
}))

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.loan-dashboard {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000000;
  position: relative;
}

.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
}

.layer-kpi {
  flex-shrink: 0;
  margin-top: 2px;
}

.layer-middle {
  flex: 1;
  display: flex;
  gap: 0;
  min-height: 0;
  overflow: hidden;

  .col-left,
  .col-right {
    flex: 0 0 22%;
    min-width: 0;
  }

  .col-center {
    flex: 0 0 56%;
    min-width: 0;
  }
}

.layer-operations {
  flex: 0 0 195px;
  min-height: 0;
  padding-top: 4px;
}

.layer-realtime {
  flex: 0 0 115px;
  min-height: 0;
  padding-top: 4px;
  padding-bottom: 6px;
}
</style>