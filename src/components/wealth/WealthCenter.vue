<template>
  <div class="wealth-center">
    <div class="section-title">AUM核心中枢</div>
    <div class="wc-body">
      <div class="wc-center">
        <div class="core-ring o1"></div>
        <div class="core-ring o2"></div>
        <div class="core-ring o3"></div>
        <div class="core-particles"><span v-for="i in 8" :key="i" class="particle" :style="getParticleStyle(i)"></span></div>
        <div class="core-text">
          <div class="core-lbl">AUM总额</div>
          <div class="core-num">{{ centerData.totalAum }}</div>
          <div class="core-unit">亿元</div>
        </div>
        <div class="ripple r1"></div><div class="ripple r2"></div><div class="ripple r3"></div>
      </div>
      <div class="wc-metrics">
        <div class="wm-item"><span class="wm-lbl">日均AUM</span><span class="wm-val gold">{{ centerData.dailyAvgAum }}</span><span class="wm-unit">亿</span></div>
        <div class="wm-item"><span class="wm-lbl">AUM新增</span><span class="wm-val green">{{ centerData.newAum }}</span><span class="wm-unit">亿</span></div>
        <div class="wm-item"><span class="wm-lbl">AUM流失</span><span class="wm-val red">{{ centerData.lostAum }}</span><span class="wm-unit">亿</span></div>
        <div class="wm-item"><span class="wm-lbl">高净值占比</span><span class="wm-val gold">{{ centerData.hniRatio }}%</span></div>
        <div class="wm-item"><span class="wm-lbl">财富增长指数</span><span class="wm-val cyan">{{ centerData.wealthIndex }}</span></div>
      </div>
      <div class="wc-trend">
        <span class="chart-label">AUM趋势</span>
        <BaseChart :option="trendOption" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const centerData = { totalAum: 856.8, dailyAvgAum: 842.3, newAum: 48.5, lostAum: 12.8, hniRatio: 42.5, wealthIndex: 86 }

function getParticleStyle(i) { const a = (i-1)*45; return { transform:`rotate(${a}deg) translateY(-52px)`, animationDelay:`${i*0.35}s` } }

const trendOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(11,34,53,0.95)',borderColor:'rgba(212,175,55,0.3)',textStyle:{color:'#e0e8f0',fontSize:13}},
  legend:{data:['AUM总资产','AUM新增','AUM流失'],textStyle:{color:'#8899aa',fontSize:12},bottom:0},
  grid:{top:6,left:40,right:8,bottom:28},
  xAxis:{type:'category',data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],axisLabel:{color:'#4a5a6a',fontSize:11,interval:1},axisLine:{lineStyle:{color:'rgba(212,175,55,0.08)'}}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(212,175,55,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:11}},
  series:[
    {name:'AUM总资产',type:'line',data:[780,795,808,815,820,830,838,842,848,852,855,856.8],smooth:true,symbol:'none',lineStyle:{color:'#D4AF37',width:2},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(212,175,55,0.25)'},{offset:1,color:'rgba(212,175,55,0.01)'}]}}},
    {name:'AUM新增',type:'bar',barWidth:4,data:[35,36,38,39,40,42,43,44,45,46,47,48.5],itemStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,207,255,0.7)'},{offset:1,color:'rgba(0,207,255,0.2)'}]}}},
    {name:'AUM流失',type:'bar',barWidth:4,data:[15,14.5,14,13.8,13.5,13.2,13,12.8,12.6,12.5,12.8,12.8],itemStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(255,107,107,0.6)'},{offset:1,color:'rgba(255,107,107,0.15)'}]}}}
  ]
}))
</script>

<style lang="scss" scoped>
.wealth-center{height:100%;display:flex;flex-direction:column}
.section-title{font-size:15px;font-weight:600;color:#D4AF37;padding:8px 12px 2px;text-shadow:0 0 10px rgba(212,175,55,0.4);letter-spacing:2px;flex-shrink:0;&::before{content:'◆ ';color:#00CFFF}}
.wc-body{flex:1;display:flex;gap:6px;padding:2px 8px 6px;min-height:0}
.wc-center{flex:0 0 140px;position:relative;display:flex;align-items:center;justify-content:center}
.core-ring{position:absolute;border-radius:50%;border:2px solid transparent;
  &.o1{width:140px;height:140px;border-color:rgba(212,175,55,0.25);box-shadow:0 0 20px rgba(212,175,55,0.08),inset 0 0 20px rgba(212,175,55,0.08);animation:rotateRing 14s linear infinite;&::before{content:'';position:absolute;top:-2px;left:50%;width:18px;height:4px;background:#D4AF37;border-radius:2px;box-shadow:0 0 12px #D4AF37;transform:translateX(-50%)}}
  &.o2{width:75%;height:75%;border-color:rgba(0,207,255,0.18);animation:rotateRing 9s linear infinite reverse;&::before{content:'';position:absolute;top:-2px;left:50%;width:12px;height:4px;background:#00CFFF;border-radius:2px;box-shadow:0 0 10px #00CFFF;transform:translateX(-50%)}}
  &.o3{width:55%;height:55%;border-color:rgba(212,175,55,0.12);animation:rotateRing 6s linear infinite}
}
@keyframes rotateRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.core-particles{position:absolute;width:120px;height:120px}
.particle{position:absolute;top:50%;left:50%;width:3px;height:3px;margin:-1.5px;background:#D4AF37;border-radius:50%;box-shadow:0 0 6px #D4AF37;animation:particlePulse 2.4s ease-in-out infinite}
@keyframes particlePulse{0%,100%{opacity:0.2;transform:translate(-50%,-50%) scale(0.5)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.2)}}
.core-text{position:relative;z-index:2;text-align:center}
.core-lbl{font-size:11px;color:#8899aa;margin-bottom:2px;letter-spacing:2px}
.core-num{font-size:28px;font-weight:700;color:#D4AF37;font-family:'Courier New',monospace;text-shadow:0 0 20px rgba(212,175,55,0.5),0 0 40px rgba(212,175,55,0.2)}
.core-unit{font-size:13px;color:#6a7a8a}
.ripple{position:absolute;border-radius:50%;border:2px solid rgba(212,175,55,0.2);animation:rippleExpand 3.5s ease-out infinite;pointer-events:none;&.r1{width:160px;height:160px;animation-delay:0s}&.r2{width:180px;height:180px;animation-delay:1.2s}&.r3{width:200px;height:200px;animation-delay:2.4s}}
@keyframes rippleExpand{0%{transform:scale(0.8);opacity:0.6}100%{transform:scale(1.5);opacity:0}}
.wc-metrics{flex:0 0 120px;display:flex;flex-direction:column;gap:4px;justify-content:center}
.wm-item{display:flex;align-items:center;gap:4px;padding:3px 6px;background:rgba(11,34,53,0.3);border:1px solid rgba(212,175,55,0.06);border-radius:4px}
.wm-lbl{font-size:11px;color:#4a5a6a;flex:0 0 56px}
.wm-val{font-size:16px;font-weight:700;font-family:'Courier New',monospace;&.gold{color:#D4AF37}&.green{color:#00ff95}&.red{color:#ff5b5b}&.cyan{color:#00CFFF}}
.wm-unit{font-size:11px;color:#4a5a6a}
.wc-trend{flex:1;position:relative;min-height:0}
.chart-label{position:absolute;top:2px;left:6px;font-size:12px;color:#4a5a6a;z-index:10;letter-spacing:1px}
</style>