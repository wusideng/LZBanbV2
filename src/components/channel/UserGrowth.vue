<template>
  <div class="user-growth">
    <div class="section-title">用户增长区</div>
    <div class="ug-content">
      <div class="ug-chart">
        <span class="chart-label">用户增长漏斗</span>
        <BaseChart :option="funnelOption" height="100%" width="100%" />
      </div>
      <div class="ug-chart">
        <span class="chart-label">活跃趋势</span>
        <BaseChart :option="activeTrendOption" height="100%" width="100%" />
      </div>
      <div class="ug-energy">
        <div class="energy-ring">
          <svg viewBox="0 0 100 100" class="ring-svg">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(0,153,255,0.1)" stroke-width="3"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#00d4ff" stroke-width="3"
              stroke-dasharray="264" :stroke-dashoffset="264 - 264 * growthRate / 100"
              stroke-linecap="round" class="ring-fill" />
          </svg>
          <div class="energy-text">
            <span class="energy-num">{{ growthRate }}%</span>
            <span class="energy-label">增长率</span>
          </div>
        </div>
        <div class="energy-stats">
          <div class="es-item"><span class="es-lbl">新增</span><span class="es-val">{{ formatNum(monthlyNew) }}</span></div>
          <div class="es-item"><span class="es-lbl">回流</span><span class="es-val">{{ formatNum(returning) }}</span></div>
          <div class="es-item"><span class="es-lbl">留存</span><span class="es-val">{{ retentionRate }}%</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const growthRate = 12.5
const monthlyNew = 386500
const returning = 128600
const retentionRate = 72.5

function formatNum(v) {
  if (v >= 10000) return (v/10000).toFixed(1) + '万'
  return v.toLocaleString()
}

const funnelOption = computed(() => ({
  tooltip: { trigger:'item', backgroundColor:'rgba(0,0,0,0.9)', borderColor:'rgba(0,153,255,0.3)', textStyle:{color:'#e0e8f0',fontSize:10}, formatter:'{b}: {c}户' },
  series: [{
    type:'funnel', left:'10%', right:'15%', top:20, bottom:10,
    minSize:'10%', maxSize:'100%', sort:'descending', gap:2,
    label:{show:true,position:'inside',color:'#fff',fontSize:9,formatter:'{b}'},
    itemStyle:{borderColor:'rgba(0,0,0,0.6)',borderWidth:1},
    data:[
      {value:8000000,name:'潜在用户',itemStyle:{color:'rgba(0,153,255,0.25)'}},
      {value:6200000,name:'注册客户',itemStyle:{color:'rgba(0,153,255,0.35)'}},
      {value:5862000,name:'开户客户',itemStyle:{color:'rgba(0,153,255,0.5)'}},
      {value:4528000,name:'激活客户',itemStyle:{color:'rgba(0,153,255,0.65)'}},
      {value:3265000,name:'活跃客户',itemStyle:{color:'rgba(51,221,255,0.8)'}},
      {value:2180000,name:'交易客户',itemStyle:{color:'#ffb347'}}
    ],
    animationDuration:1500
  }]
}))

const activeTrendOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(0,0,0,0.9)',borderColor:'rgba(0,153,255,0.3)',textStyle:{color:'#e0e8f0',fontSize:10}},
  legend:{data:['MAU','DAU'],textStyle:{color:'#8899aa',fontSize:9},bottom:0},
  grid:{top:8,left:36,right:8,bottom:28},
  xAxis:{type:'category',data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],axisLabel:{color:'#4a5a6a',fontSize:8,interval:1},axisLine:{lineStyle:{color:'rgba(0,153,255,0.08)'}}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,153,255,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:8}},
  series:[
    {name:'MAU',type:'line',data:[1680,1700,1720,1750,1760,1780,1775,1790,1800,1810,1820,1826],smooth:true,symbol:'none',lineStyle:{color:'#00d4ff',width:2},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,153,255,0.25)'},{offset:1,color:'rgba(0,153,255,0.01)'}]}}},
    {name:'DAU',type:'line',data:[550,555,560,565,570,575,572,578,580,582,585,586.2],smooth:true,symbol:'none',lineStyle:{color:'#00ffcc',width:2},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(51,221,255,0.2)'},{offset:1,color:'rgba(51,221,255,0.01)'}]}}}
  ]
}))
</script>

<style lang="scss" scoped>
.user-growth { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size:13px; font-weight:600; color:#00ffcc; padding:8px 12px 2px; text-shadow:0 0 10px rgba(51,221,255,0.3); letter-spacing:2px; flex-shrink:0; &::before{content:'◆ ';color:#00d4ff} }
.ug-content { flex:1; display:flex; flex-direction:column; gap:4px; padding:0 8px 6px; min-height:0; }
.ug-chart { flex:0 0 42%; position:relative; min-height:0; }
.chart-label { position:absolute; top:2px; left:6px; font-size:10px; color:#4a5a6a; z-index:10; letter-spacing:1px; }

.ug-energy { flex:0 0 50%; display:flex; align-items:center; gap:12px; padding:4px 8px; background:rgba(15,32,56,0.4); border-radius:8px; }
.energy-ring { position:relative; width:80px; height:80px; flex-shrink:0; }
.ring-svg { width:100%; height:100%; }
.ring-fill { transition: stroke-dashoffset 1.5s ease; transform-origin:center; transform: rotate(-90deg); }
.energy-text { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; }
.energy-num { font-size:18px; font-weight:700; color:#00ffcc; font-family:'Courier New',monospace; }
.energy-label { font-size:9px; color:#4a5a6a; }
.energy-stats { flex:1; display:flex; gap:8px; }
.es-item { flex:1; text-align:center; padding:4px; background:rgba(0,153,255,0.05); border-radius:4px; }
.es-lbl { display:block; font-size:9px; color:#4a5a6a; margin-bottom:2px; }
.es-val { font-size:14px; font-weight:700; color:#00d4ff; font-family:'Courier New',monospace; }
</style>