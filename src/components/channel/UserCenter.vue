<template>
  <div class="user-center">
    <div class="section-title">用户运营中枢</div>
    <div class="uc-content">
      <div class="uc-left">
        <div class="center-core">
          <div class="core-ring o1"></div>
          <div class="core-ring o2"></div>
          <div class="core-ring o3"></div>
          <div class="core-particles">
            <span v-for="i in 6" :key="i" class="particle" :style="getParticleStyle(i)"></span>
          </div>
          <div class="core-text">
            <div class="core-lbl">当前MAU</div>
            <div class="core-num">{{ currentMau }}</div>
            <div class="core-unit">户</div>
          </div>
          <div class="ripple r1"></div>
          <div class="ripple r2"></div>
          <div class="ripple r3"></div>
        </div>
        <div class="center-radar">
          <BaseChart :option="indicatorOption" height="100%" width="100%" />
        </div>
      </div>
      <div class="uc-right">
        <div class="uc-flow-header">实时动态流</div>
        <div class="uc-flow-body" ref="flowRef">
          <div class="flow-scroll" :style="{ transform: `translateY(-${flowY}px)` }">
            <div v-for="(f, i) in displayFlow" :key="i" class="flow-item">
              <span class="flow-icon">⚡</span>
              <span class="flow-text">{{ f.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const currentMau = 1826000
const flowY = ref(0)
const flowRef = ref(null)
let flowTimer = null

const flowMessages = [
  { text: '客户完成转账 ¥5,200' },
  { text: '客户完成缴费 ¥860' },
  { text: '客户购买理财 ¥50,000' },
  { text: '客户提交贷款申请 ¥300,000' },
  { text: '客户完成信用卡还款 ¥3,500' },
  { text: '客户完成定期转存 ¥100,000' },
  { text: '客户购买基金 ¥20,000' },
  { text: '客户完成外汇兑换 ¥8,000' },
  { text: '客户完成保险缴费 ¥12,000' },
  { text: '客户完成大额存单 ¥500,000' }
]

const displayFlow = computed(() => [...flowMessages, ...flowMessages])

onMounted(() => {
  flowTimer = setInterval(() => {
    flowY.value += 1
    if (flowY.value >= flowMessages.length * 30) flowY.value = 0
  }, 60)
})
onUnmounted(() => { if (flowTimer) clearInterval(flowTimer) })

function getParticleStyle(i) {
  const angle = (i - 1) * 60
  return {
    transform: `rotate(${angle}deg) translateY(-42px)`,
    animationDelay: `${i * 0.4}s`
  }
}

const indicatorOption = computed(() => ({
  radar: {
    indicator: [
      { name: 'DAU活跃', max: 100 },
      { name: '渠道热度', max: 100 },
      { name: '增长指数', max: 100 },
      { name: '活跃指数', max: 100 },
      { name: '运营热度', max: 100 }
    ],
    center: ['50%','50%'], radius: '60%',
    axisName: { color: '#8899aa', fontSize: 9 },
    splitArea: { areaStyle: { color: ['rgba(0,212,255,0.02)','rgba(0,212,255,0.01)'] } },
    axisLine: { lineStyle: { color: 'rgba(0,212,255,0.12)' } },
    splitLine: { lineStyle: { color: 'rgba(0,212,255,0.08)' } }
  },
  series: [{
    type: 'radar',
    data: [{
      value: [85, 78, 92, 80, 88],
      areaStyle: { color: 'rgba(0,212,255,0.15)' },
      lineStyle: { color: '#00d4ff', width: 2 },
      itemStyle: { color: '#00d4ff' }
    }],
    symbol: 'circle', symbolSize: 4,
    animationDuration: 1500
  }]
}))
</script>

<style lang="scss" scoped>
.user-center { height:100%; display:flex; flex-direction:column; }
.section-title { font-size:13px; font-weight:600; color:#00ffcc; padding:8px 12px 2px; text-shadow:0 0 10px rgba(0,255,204,0.3); letter-spacing:2px; flex-shrink:0; &::before{content:'◆ ';color:#00d4ff} }
.uc-content { flex:1; display:flex; gap:6px; padding:4px 8px 6px; min-height:0; }
.uc-left { flex:1; display:flex; flex-direction:column; align-items:center; gap:6px; }
.uc-right { flex:0 0 30%; display:flex; flex-direction:column; min-height:0; }

.center-core { position:relative; width:160px; height:160px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.core-ring { position:absolute; border-radius:50%; border:1px solid transparent;
  &.o1 { width:100%;height:100%; border-color:rgba(0,212,255,0.12); box-shadow:0 0 15px rgba(0,212,255,0.03),inset 0 0 15px rgba(0,212,255,0.03); animation:rotateRing 14s linear infinite; &::before{content:'';position:absolute;top:-1px;left:50%;width:16px;height:3px;background:#00d4ff;border-radius:2px;box-shadow:0 0 8px #00d4ff;transform:translateX(-50%)} }
  &.o2 { width:78%;height:78%; border-color:rgba(0,255,204,0.08); animation:rotateRing 9s linear infinite reverse; &::before{content:'';position:absolute;top:-1px;left:50%;width:10px;height:2px;background:#00ffcc;border-radius:2px;box-shadow:0 0 6px #00ffcc;transform:translateX(-50%)} }
  &.o3 { width:56%;height:56%; border-color:rgba(0,255,149,0.06); animation:rotateRing 6s linear infinite; }
}
@keyframes rotateRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

.core-particles { position:absolute; width:110px; height:110px; }
.particle { position:absolute; top:50%; left:50%; width:3px; height:3px; margin:-1.5px; background:#00d4ff; border-radius:50%; box-shadow:0 0 6px #00d4ff; animation:particlePulse 2s ease-in-out infinite; }
@keyframes particlePulse { 0%,100%{opacity:0.2;transform:translate(-50%,-50%) scale(0.5)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.2)} }

.core-text { position:relative; z-index:2; text-align:center; }
.core-lbl { font-size:10px; color:#8899aa; margin-bottom:4px; letter-spacing:2px; }
.core-num { font-size:28px; font-weight:700; color:#00ffcc; font-family:'Courier New',monospace; text-shadow:0 0 20px rgba(0,255,204,0.5); }
.core-unit { font-size:11px; color:#4a5a6a; }

.ripple { position:absolute; border-radius:50%; border:1px solid rgba(0,212,255,0.15); animation:rippleExpand 3.5s ease-out infinite; pointer-events:none;
  &.r1{width:180px;height:180px;animation-delay:0s} &.r2{width:200px;height:200px;animation-delay:1.2s} &.r3{width:220px;height:220px;animation-delay:2.4s}
}
@keyframes rippleExpand { 0%{transform:scale(0.8);opacity:0.6} 100%{transform:scale(1.5);opacity:0} }

.center-radar { flex:1; width:100%; min-height:0; }

.uc-flow-header { font-size:10px; color:#00ffcc; letter-spacing:2px; padding:2px 4px; flex-shrink:0; }
.uc-flow-body { flex:1; overflow:hidden; position:relative; }
.flow-scroll { transition:none; }
.flow-item { display:flex; align-items:center; gap:6px; padding:4px 6px; height:30px; font-size:11px; color:#8899aa; border-bottom:1px solid rgba(0,212,255,0.04); }
.flow-icon { color:#ffb347; font-size:10px; flex-shrink:0; }
.flow-text { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
</style>