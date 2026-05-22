<template>
  <div class="risk-dashboard" ref="dashboardRef">
    <ParticleBackground />
    <div class="dashboard-wrapper" :style="wrapperStyle">
      <HeaderTitle title="风险预警与经营监控驾驶舱" subtitle="RISK WARNING & OPERATIONS MONITORING COCKPIT" />
      <div class="layer-kpi"><RiskKpiBand /></div>
      <div class="layer-middle">
        <div class="col-left"><RiskMigrationArea /></div>
        <div class="col-center"><RiskRadarCenter /></div>
        <div class="col-right"><RiskRegionalArea /></div>
      </div>
      <div class="layer-ops"><RiskAbnormalOps /></div>
      <div class="layer-realtime"><RiskRealtimeAlerts /></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import RiskKpiBand from '@/components/risk/RiskKpiBand.vue'
import RiskRadarCenter from '@/components/risk/RiskRadarCenter.vue'
import RiskMigrationArea from '@/components/risk/RiskMigrationArea.vue'
import RiskRegionalArea from '@/components/risk/RiskRegionalArea.vue'
import RiskAbnormalOps from '@/components/risk/RiskAbnormalOps.vue'
import RiskRealtimeAlerts from '@/components/risk/RiskRealtimeAlerts.vue'

const dashboardRef = ref(null)
const scale = ref(1)
const DESIGN_WIDTH = 1920, DESIGN_HEIGHT = 1080
function handleResize() { const w = window.innerWidth, h = window.innerHeight; scale.value = Math.min(w / DESIGN_WIDTH, h / DESIGN_HEIGHT) }
const wrapperStyle = computed(() => ({ width: DESIGN_WIDTH + 'px', height: DESIGN_HEIGHT + 'px', transform: `translate(-50%, -50%) scale(${scale.value})`, transformOrigin: 'center center', position: 'absolute', left: '50%', top: '50%' }))
onMounted(() => { handleResize(); window.addEventListener('resize', handleResize) })
onUnmounted(() => { window.removeEventListener('resize', handleResize) })
</script>

<style lang="scss" scoped>
.risk-dashboard { width: 100vw; height: 100vh; overflow: hidden; background: #000000; position: relative; }
.dashboard-wrapper { display: flex; flex-direction: column; overflow: hidden; position: absolute; }
.layer-kpi { flex-shrink: 0; margin-top: 2px; }
.layer-middle { flex: 1; display: flex; gap: 0; min-height: 0; overflow: hidden; .col-left, .col-right { flex: 0 0 24%; min-width: 0; } .col-center { flex: 0 0 52%; min-width: 0; } }
.layer-ops { flex: 0 0 200px; min-height: 0; padding-top: 4px; }
.layer-realtime { flex: 0 0 100px; min-height: 0; padding-top: 4px; padding-bottom: 6px; }
</style>