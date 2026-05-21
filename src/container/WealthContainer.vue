<template>
  <div class="wealth-dashboard">
    <ParticleBackground />
    <div class="dashboard-wrapper" :style="wrapperStyle">
      <HeaderTitle title="财富管理专题驾驶舱" subtitle="WEALTH MANAGEMENT COCKPIT" />
      <div class="layer-kpi"><WealthKpi /></div>
      <div class="layer-middle">
        <div class="col-left"><WealthClient /></div>
        <div class="col-center"><WealthCenter /></div>
        <div class="col-right"><WealthProduct /></div>
      </div>
      <div class="layer-income"><WealthIncome /></div>
      <div class="layer-ranking"><WealthRanking /></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import WealthKpi from '@/components/wealth/WealthKpi.vue'
import WealthClient from '@/components/wealth/WealthClient.vue'
import WealthCenter from '@/components/wealth/WealthCenter.vue'
import WealthProduct from '@/components/wealth/WealthProduct.vue'
import WealthIncome from '@/components/wealth/WealthIncome.vue'
import WealthRanking from '@/components/wealth/WealthRanking.vue'

const scale = ref(1)
const DESIGN_WIDTH = 1920, DESIGN_HEIGHT = 1080
function handleResize() { const w=window.innerWidth,h=window.innerHeight;scale.value=Math.min(w/DESIGN_WIDTH,h/DESIGN_HEIGHT) }
const wrapperStyle = computed(()=>({width:DESIGN_WIDTH+'px',height:DESIGN_HEIGHT+'px',transform:`translate(-50%,-50%) scale(${scale.value})`,transformOrigin:'center center',position:'absolute',left:'50%',top:'50%'}))
onMounted(()=>{handleResize();window.addEventListener('resize',handleResize)})
onUnmounted(()=>{window.removeEventListener('resize',handleResize)})
</script>

<style lang="scss" scoped>
.wealth-dashboard{width:100vw;height:100vh;overflow:hidden;background:#0b2235;position:relative}
.dashboard-wrapper{display:flex;flex-direction:column;overflow:hidden;position:absolute}
.layer-kpi{flex-shrink:0}
.layer-middle{flex:1;display:flex;min-height:0;overflow:hidden;.col-left,.col-right{flex:0 0 24%;min-width:0}.col-center{flex:0 0 52%;min-width:0}}
.layer-income{flex:0 0 170px;min-height:0;padding-top:4px}
.layer-ranking{flex:0 0 150px;min-height:0;padding-top:4px;padding-bottom:6px}
</style>