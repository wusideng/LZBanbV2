<template>
  <div class="finance-dashboard" ref="dashboardRef">
    <!-- 粒子背景 -->
    <ParticleBackground />

    <!-- 主内容 -->
    <div class="dashboard-wrapper" :style="wrapperStyle">
      <!-- 顶部标题栏 -->
      <HeaderTitle />

      <!-- 第一层：经营核心KPI能量带 -->
      <div class="layer-kpi">
        <KpiEnergyBand />
      </div>

      <!-- 第二层：三栏布局 -->
      <div class="layer-middle">
        <div class="col-left">
          <AssetLiability />
        </div>
        <div class="col-center">
          <RetailCenter />
        </div>
        <div class="col-right">
          <CustomerAnalysis />
        </div>
      </div>

      <!-- 第三层：机构经营排名 + 区域分析 -->
      <div class="layer-ranking">
        <RankingArea />
      </div>

      <!-- 第四层：实时经营动态播报 -->
      <div class="layer-realtime">
        <RealtimeBroadcast />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import KpiEnergyBand from '@/components/finance/KpiEnergyBand.vue'
import AssetLiability from '@/components/finance/AssetLiability.vue'
import RetailCenter from '@/components/finance/RetailCenter.vue'
import CustomerAnalysis from '@/components/finance/CustomerAnalysis.vue'
import RankingArea from '@/components/finance/RankingArea.vue'
import RealtimeBroadcast from '@/components/finance/RealtimeBroadcast.vue'

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
.finance-dashboard {
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
    flex: 0 0 23%;
    min-width: 0;
  }

  .col-center {
    flex: 0 0 54%;
    min-width: 0;
  }
}

.layer-ranking {
  flex: 0 0 180px;
  min-height: 0;
  padding-top: 4px;
}

.layer-realtime {
  flex: 0 0 120px;
  min-height: 0;
  padding-top: 4px;
  padding-bottom: 8px;
}
</style>