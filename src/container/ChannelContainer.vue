<template>
  <div class="channel-dashboard">
    <ParticleBackground />
    <div class="dashboard-wrapper" :style="wrapperStyle">
      <!-- 顶部标题栏 -->
      <HeaderTitle title="客户经营与渠道运营驾驶舱" subtitle="CUSTOMER OPERATIONS & CHANNEL COCKPIT" />

      <!-- 第一层：核心运营KPI -->
      <div class="layer-kpi">
        <OperationalKpi />
      </div>

      <!-- 第二层：三栏布局 -->
      <div class="layer-middle">
        <div class="col-left">
          <UserGrowth />
        </div>
        <div class="col-center">
          <UserCenter />
        </div>
        <div class="col-right">
          <ChannelConversion />
        </div>
      </div>

      <!-- 第三层：渠道运营分析 + 客户行为分析 -->
      <div class="layer-behavior">
        <ChannelBehavior />
      </div>

      <!-- 第四层：实时运营态势 + 动态告警 -->
      <div class="layer-realtime">
        <RealtimeOps />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import OperationalKpi from '@/components/channel/OperationalKpi.vue'
import UserGrowth from '@/components/channel/UserGrowth.vue'
import UserCenter from '@/components/channel/UserCenter.vue'
import ChannelConversion from '@/components/channel/ChannelConversion.vue'
import ChannelBehavior from '@/components/channel/ChannelBehavior.vue'
import RealtimeOps from '@/components/channel/RealtimeOps.vue'

const scale = ref(1)
const DESIGN_WIDTH = 1920
const DESIGN_HEIGHT = 1080

function handleResize() {
  const w = window.innerWidth
  const h = window.innerHeight
  scale.value = Math.min(w / DESIGN_WIDTH, h / DESIGN_HEIGHT)
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
.channel-dashboard {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #0b1a2e;
  position: relative;
}
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
}
.layer-kpi { flex-shrink: 0; }
.layer-middle {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
.col-left, .col-right { flex: 0 0 24%; min-width: 0; }
    .col-center { flex: 0 0 52%; min-width: 0; }
}
.layer-behavior { flex: 0 0 180px; min-height: 0; padding-top: 4px; }
.layer-realtime { flex: 0 0 120px; min-height: 0; padding-top: 4px; padding-bottom: 6px; }
</style>