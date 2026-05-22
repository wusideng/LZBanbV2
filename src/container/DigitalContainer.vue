<template>
  <div class="digital-dashboard" ref="dashboardRef">
    <ParticleBackground />
    <div class="dashboard-wrapper" :style="wrapperStyle">
      <HeaderTitle title="手机银行与线上运营驾驶舱" subtitle="MOBILE BANKING & ONLINE OPERATIONS COCKPIT" />
      <div class="layer-kpi"><DigitalKpiBand /></div>
      <div class="layer-middle">
        <div class="col-left"><DigitalUserCenter /></div>
        <div class="col-center"><DigitalOpsCenter /></div>
        <div class="col-right"><DigitalChannelActive /></div>
      </div>
      <div class="layer-ops"><DigitalTransactionOps /></div>
      <div class="layer-realtime"><DigitalRealtimeOps /></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import DigitalKpiBand from '@/components/digital/DigitalKpiBand.vue'
import DigitalUserCenter from '@/components/digital/DigitalUserCenter.vue'
import DigitalOpsCenter from '@/components/digital/DigitalOpsCenter.vue'
import DigitalChannelActive from '@/components/digital/DigitalChannelActive.vue'
import DigitalTransactionOps from '@/components/digital/DigitalTransactionOps.vue'
import DigitalRealtimeOps from '@/components/digital/DigitalRealtimeOps.vue'

const dashboardRef = ref(null)
const scale = ref(1)
const DESIGN_WIDTH = 1920, DESIGN_HEIGHT = 1080

function handleResize() { const w = window.innerWidth, h = window.innerHeight; scale.value = Math.min(w / DESIGN_WIDTH, h / DESIGN_HEIGHT) }
const wrapperStyle = computed(() => ({ width: DESIGN_WIDTH + 'px', height: DESIGN_HEIGHT + 'px', transform: `translate(-50%, -50%) scale(${scale.value})`, transformOrigin: 'center center', position: 'absolute', left: '50%', top: '50%' }))

onMounted(() => { handleResize(); window.addEventListener('resize', handleResize) })
onUnmounted(() => { window.removeEventListener('resize', handleResize) })
</script>

<style lang="scss" scoped>
.digital-dashboard { width: 100vw; height: 100vh; overflow: hidden; background: #000000; position: relative; }
.dashboard-wrapper { display: flex; flex-direction: column; overflow: hidden; position: absolute; }
.layer-kpi { flex-shrink: 0; margin-top: 2px; }
.layer-middle { flex: 1; display: flex; gap: 0; min-height: 0; overflow: hidden; .col-left, .col-right { flex: 0 0 23%; min-width: 0; } .col-center { flex: 0 0 54%; min-width: 0; } }
.layer-ops { flex: 0 0 185px; min-height: 0; padding-top: 4px; }
.layer-realtime { flex: 0 0 110px; min-height: 0; padding-top: 4px; padding-bottom: 6px; }
</style>