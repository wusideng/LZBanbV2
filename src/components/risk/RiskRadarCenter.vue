<template>
  <div class="risk-radar-center">
    <div class="section-title">风险雷达中枢 <span class="title-sub">RISK RADAR CENTER</span></div>
    <div class="center-content">
      <div class="center-left">
        <div class="chart-label">风控能力雷达</div>
        <div class="radar-wrap"><BaseChart :option="radarOption" height="100%" width="100%" /></div>
        <div class="radar-metrics">
          <div class="rm-item"><span class="rm-label">风险扩散指数</span><span class="rm-value">{{ d.spreadIndex }}</span></div>
          <div class="rm-item"><span class="rm-label">经营健康指数</span><span class="rm-value">{{ d.healthIndex }}</span></div>
        </div>
      </div>
      <div class="center-mid">
        <div class="energy-core">
          <div class="core-ring outer-ring"></div><div class="core-ring middle-ring"></div><div class="core-ring inner-ring"></div>
          <div class="core-particles"><span v-for="i in 12" :key="i" class="particle" :style="getParticleStyle(i)"></span></div>
          <div class="scan-beam"></div>
          <div class="ripple r1"></div><div class="ripple r2"></div><div class="ripple r3"></div>
          <div class="core-content">
            <div class="core-label">当前风险指数</div>
            <div class="core-value">{{ d.riskIndex }}<span class="unit">%</span></div>
            <div class="core-level">{{ d.riskLevel }}</div>
            <div class="core-divider"></div>
            <div class="core-subs">
              <div class="sub-item"><span class="sub-label">不良率</span><span class="sub-value warn">{{ d.badRate }}%</span></div>
              <div class="sub-item"><span class="sub-label">逾期率</span><span class="sub-value warn">{{ d.overdueRate }}%</span></div>
              <div class="sub-item"><span class="sub-label">经营健康度</span><span class="sub-value safe">{{ d.healthDegree }}</span></div>
              <div class="sub-item"><span class="sub-label">预警等级</span><span class="sub-value safe">{{ d.warnLevel }}</span></div>
            </div>
          </div>
        </div>
        <div class="core-metrics">
          <div class="metric"><span class="m-label">不良率</span><span class="m-value warn">{{ d.badRate }}%</span></div>
          <div class="metric"><span class="m-label">逾期率</span><span class="m-value warn">{{ d.overdueRate }}%</span></div>
          <div class="metric"><span class="m-label">健康度</span><span class="m-value safe">{{ d.healthDegree }}</span></div>
          <div class="metric"><span class="m-label">预警等级</span><span class="m-value safe">{{ d.warnLevel }}</span></div>
        </div>
      </div>
      <div class="center-right">
        <div class="chart-box"><div class="chart-label">风险品类占比</div><BaseChart :option="catOption" height="100%" width="100%" /></div>
        <div class="chart-box"><div class="chart-label">风险趋势</div><BaseChart :option="trendOption" height="100%" width="100%" /></div>
        <div class="chart-box"><div class="chart-label">经营健康趋势</div><BaseChart :option="healthOpt" height="100%" width="100%" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { riskCenterData } from '@/mockData/riskData.js'
const d = riskCenterData
function getParticleStyle(i) { const a = (i-1)*30; return { transform: `rotate(${a}deg) translateY(-62px)`, animationDelay: `${i*0.25}s` } }

const radarOption = computed(() => ({
  radar: { indicator: d.radarData.indicators.map(n=>({name:n,max:100})), center:['50%','50%'], radius:'60%', axisName:{color:'#8899aa',fontSize:13}, splitArea:{areaStyle:{color:['rgba(0,255,153,0.02)','rgba(0,255,153,0.01)']}}, axisLine:{lineStyle:{color:'rgba(0,255,153,0.15)'}}, splitLine:{lineStyle:{color:'rgba(0,255,153,0.1)'}} },
  series: [{ type:'radar', data:[{ value:d.radarData.current, name:'本期', areaStyle:{color:'rgba(0,255,153,0.15)'}, lineStyle:{color:'#00FF99',width:2}, itemStyle:{color:'#00FF99'} },{ value:d.radarData.last, name:'上期', areaStyle:{color:'rgba(0,255,198,0.08)'}, lineStyle:{color:'rgba(0,255,198,0.4)',width:1,type:'dashed'}, itemStyle:{color:'rgba(0,255,198,0.4)'} }], symbol:'circle', symbolSize:4, animationDuration:1500 }]
}))

const catOption = computed(() => ({
  tooltip:{trigger:'item',backgroundColor:'rgba(6,20,15,0.95)',borderColor:'rgba(0,255,153,0.3)',textStyle:{color:'#e0e8f0',fontSize:13},formatter:'{b}: {c}%'},
  series:[{ type:'pie', radius:['35%','60%'], center:['50%','50%'], data:d.riskCategory.map(d=>({name:d.name,value:d.value,itemStyle:{color:d.color}})), label:{color:'#8899aa',fontSize:11,formatter:'{b}\n{d}%'}, labelLine:{lineStyle:{color:'rgba(0,255,153,0.15)'}}, itemStyle:{borderRadius:3}, animationType:'scale', animationDuration:1000 }]
}))

const trendOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(6,20,15,0.95)',borderColor:'rgba(0,255,153,0.3)',textStyle:{color:'#e0e8f0',fontSize:13}},
  grid:{top:8,left:32,right:8,bottom:14},
  xAxis:{type:'category',data:d.riskTrend.months,axisLabel:{color:'#4a5a6a',fontSize:10},axisLine:{lineStyle:{color:'rgba(0,255,153,0.08)'}},axisTick:{show:false}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,255,153,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:10}},
  series:[{ type:'line', data:d.riskTrend.values, smooth:true, symbol:'none', lineStyle:{color:'#00FF99',width:2}, areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,255,153,0.3)'},{offset:1,color:'rgba(0,255,153,0.01)'}]}} }]
}))

const healthOpt = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(6,20,15,0.95)',borderColor:'rgba(0,255,153,0.3)',textStyle:{color:'#e0e8f0',fontSize:13}},
  grid:{top:8,left:32,right:8,bottom:14},
  xAxis:{type:'category',data:d.healthTrend.months,axisLabel:{color:'#4a5a6a',fontSize:10},axisLine:{lineStyle:{color:'rgba(0,255,153,0.08)'}},axisTick:{show:false}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,255,153,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:10}},
  series:[{ type:'line', data:d.healthTrend.values, smooth:true, symbol:'none', lineStyle:{color:'#00FFC6',width:2}, areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,255,198,0.25)'},{offset:1,color:'rgba(0,255,198,0.01)'}]}} }]
}))
</script>

<style lang="scss" scoped>
.risk-radar-center { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #00FF99; padding: 6px 12px 3px; text-shadow: 0 0 10px rgba(0,255,153,0.3); letter-spacing: 2px; flex-shrink: 0; &::before { content: '◆ '; color: #00CC7A; } .title-sub { font-size: 13px; color: rgba(0,255,153,0.2); letter-spacing: 3px; margin-left: 6px; } }
.center-content { flex: 1; display: flex; gap: 6px; padding: 2px 6px 6px; min-height: 0; }
.center-left { flex: 0 0 22%; display: flex; flex-direction: column; gap: 4px; }
.chart-label { position: absolute; top: 2px; left: 4px; font-size: 13px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.radar-wrap { flex: 1; min-height: 0; }
.radar-metrics { display: flex; gap: 4px; .rm-item { flex: 1; text-align: center; padding: 4px; background: rgba(10,42,32,0.4); border-radius: 4px; border: 1px solid rgba(0,255,153,0.1); .rm-label { display: block; font-size: 13px; color: #4a5a6a; } .rm-value { font-size: 16px; font-weight: 700; color: #00FF99; font-family: 'Courier New',monospace; } } }
.center-mid { flex: 0 0 52%; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.energy-core { position: relative; width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.core-ring { position: absolute; border-radius: 50%; border: 1px solid transparent;
  &.outer-ring { width: 100%; height: 100%; border-color: rgba(0,255,153,0.12); box-shadow: 0 0 25px rgba(0,255,153,0.04),inset 0 0 25px rgba(0,255,153,0.04); animation: rotateRing 15s linear infinite; &::before { content: ''; position: absolute; top: -1.5px; left: 50%; width: 22px; height: 3px; background: #00FF99; border-radius: 2px; box-shadow: 0 0 10px #00FF99,0 0 20px rgba(0,255,153,0.4); transform: translateX(-50%); } }
  &.middle-ring { width: 82%; height: 82%; border-color: rgba(0,255,198,0.1); animation: rotateRing 10s linear infinite reverse; &::before { content: ''; position: absolute; top: -1px; left: 50%; width: 14px; height: 2px; background: #00FFC6; border-radius: 2px; box-shadow: 0 0 8px #00FFC6; transform: translateX(-50%); } }
  &.inner-ring { width: 62%; height: 62%; border-color: rgba(29,191,115,0.08); animation: rotateRing 8s linear infinite; &::before { content: ''; position: absolute; top: -1px; left: 50%; width: 10px; height: 2px; background: #1DBF73; border-radius: 2px; box-shadow: 0 0 6px #1DBF73; transform: translateX(-50%); } }
}
@keyframes rotateRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.core-particles { position: absolute; width: 150px; height: 150px; .particle { position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; margin: -2px; background: #00FF99; border-radius: 50%; box-shadow: 0 0 8px #00FF99,0 0 16px rgba(0,255,153,0.4); animation: particlePulse 2s ease-in-out infinite; } }
@keyframes particlePulse { 0%,100% { opacity: 0.2; transform: translate(-50%,-50%) scale(0.5); } 50% { opacity: 1; transform: translate(-50%,-50%) scale(1.3); } }
.scan-beam { position: absolute; width: 200px; height: 200px; background: conic-gradient(transparent 0deg, rgba(0,255,153,0.06) 45deg, transparent 90deg); border-radius: 50%; animation: scanRotate 4s linear infinite; pointer-events: none; }
@keyframes scanRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.core-content { position: relative; z-index: 2; text-align: center; }
.core-label { font-size: 15px; color: #8899aa; margin-bottom: 2px; letter-spacing: 2px; }
.core-value { font-size: 38px; font-weight: 700; color: #00FF99; font-family: 'Courier New',monospace; text-shadow: 0 0 25px rgba(0,255,153,0.5),0 0 50px rgba(0,255,153,0.2); .unit { font-size: 17px; color: #4a5a6a; margin-left: 2px; } }
.core-level { font-size: 16px; color: #00FFC6; font-weight: 600; margin-top: 2px; text-shadow: 0 0 10px rgba(0,255,198,0.3); }
.core-divider { width: 80px; height: 1px; background: linear-gradient(90deg,transparent,rgba(0,255,153,0.5),transparent); margin: 5px auto; }
.core-subs { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 10px; margin-top: 3px; }
.sub-item { display: flex; justify-content: space-between; font-size: 14px; .sub-label { color: #4a5a6a; } .sub-value { font-weight: 600; font-family: 'Courier New',monospace; &.warn { color: #FF5B5B; } &.safe { color: #00FFC6; } } }
.ripple { position: absolute; border-radius: 50%; border: 1px solid rgba(0,255,153,0.12); animation: rippleExpand 3.5s ease-out infinite; pointer-events: none; &.r1 { width: 250px; height: 250px; animation-delay: 0s; } &.r2 { width: 280px; height: 280px; animation-delay: 1.2s; } &.r3 { width: 310px; height: 310px; animation-delay: 2.4s; } }
@keyframes rippleExpand { 0% { transform: scale(0.85); opacity: 0.5; } 100% { transform: scale(1.4); opacity: 0; } }
.core-metrics { display: flex; gap: 5px; width: 100%; .metric { flex: 1; text-align: center; padding: 5px 4px; background: rgba(10,42,32,0.5); border-radius: 6px; border: 1px solid rgba(0,255,153,0.1); .m-label { display: block; font-size: 13px; color: #4a5a6a; } .m-value { font-size: 15px; font-weight: 700; font-family: 'Courier New',monospace; &.warn { color: #FF5B5B; } &.safe { color: #00FFC6; } } } }
.center-right { flex: 0 0 26%; display: flex; flex-direction: column; gap: 4px; }
.chart-box { flex: 1; min-height: 0; position: relative; }
</style>