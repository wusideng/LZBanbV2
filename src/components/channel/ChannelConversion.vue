<template>
  <div class="channel-conversion">
    <div class="section-title">渠道转化分析</div>
    <div class="cc-content">
      <div class="cc-chart funnel-chart">
        <span class="chart-label">运营转化漏斗</span>
        <BaseChart :option="funnelOption" height="100%" width="100%" />
      </div>
      <div class="cc-metrics">
        <div class="cc-metric" v-for="m in metrics" :key="m.label">
          <span class="cm-label">{{ m.label }}</span>
          <span class="cm-value" :style="{ color: m.color }">{{ m.value }}</span>
          <span class="cm-change" :class="m.change >= 0 ? 'up' : 'down'">{{ m.change >= 0 ? '+' : '' }}{{ m.change }}%</span>
        </div>
      </div>
      <div class="cc-chart churn-chart">
        <span class="chart-label">流失预警分析</span>
        <BaseChart :option="churnOption" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const metrics = [
  { label: '开户转化率', value: '73.2%', change: 3.5, color: '#00d4ff' },
  { label: '激活转化率', value: '61.5%', change: 2.8, color: '#00ffcc' },
  { label: '交易转化率', value: '37.2%', change: 1.2, color: '#ffb347' },
  { label: '留存率', value: '72.5%', change: 2.1, color: '#00ff95' }
]

const funnelOption = computed(() => ({
  tooltip:{trigger:'item',backgroundColor:'rgba(0,0,0,0.9)',borderColor:'rgba(0,212,255,0.3)',textStyle:{color:'#e0e8f0',fontSize:10},formatter:'{b}: {c}户'},
  series:[{
    type:'funnel',left:'5%',right:'15%',top:15,bottom:8,
    minSize:'8%',maxSize:'100%',sort:'descending',gap:1,
    label:{show:true,position:'inside',color:'#fff',fontSize:8,formatter:'{b}'},
    itemStyle:{borderColor:'rgba(0,0,0,0.6)',borderWidth:1},
    data:[
      {value:5862000,name:'开户',itemStyle:{color:'rgba(0,212,255,0.3)'}},
      {value:4528000,name:'激活',itemStyle:{color:'rgba(0,212,255,0.45)'}},
      {value:3865000,name:'登录',itemStyle:{color:'rgba(0,212,255,0.55)'}},
      {value:3265000,name:'浏览',itemStyle:{color:'rgba(0,255,204,0.7)'}},
      {value:2180000,name:'交易',itemStyle:{color:'#ffb347'}},
      {value:1580000,name:'留存',itemStyle:{color:'rgba(0,255,149,0.7)'}},
      {value:286000,name:'流失预警',itemStyle:{color:'#ff5b5b'}}
    ],
    animationDuration:1500
  }]
}))

const churnOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(0,0,0,0.9)',borderColor:'rgba(0,212,255,0.3)',textStyle:{color:'#e0e8f0',fontSize:9}},
  legend:{data:['高风险','沉默客户'],textStyle:{color:'#8899aa',fontSize:7},bottom:0},
  grid:{top:6,left:28,right:4,bottom:22},
  xAxis:{type:'category',data:['1月','2月','3月','4月','5月','6月'],axisLabel:{color:'#4a5a6a',fontSize:7},axisLine:{lineStyle:{color:'rgba(0,212,255,0.08)'}}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,212,255,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:7}},
  series:[
    {name:'高风险',type:'bar',barWidth:6,data:[32,35,38,42,45,48],itemStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(255,91,91,0.8)'},{offset:1,color:'rgba(255,91,91,0.2)'}]}}},
    {name:'沉默客户',type:'bar',barWidth:6,data:[120,125,130,135,140,145],itemStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(255,179,71,0.7)'},{offset:1,color:'rgba(255,179,71,0.2)'}]}}}
  ]
}))
</script>

<style lang="scss" scoped>
.channel-conversion { height:100%; display:flex; flex-direction:column; }
.section-title { font-size:13px; font-weight:600; color:#00ffcc; padding:8px 12px 2px; text-shadow:0 0 10px rgba(0,255,204,0.3); letter-spacing:2px; flex-shrink:0; &::before{content:'◆ ';color:#00d4ff} }
.cc-content { flex:1; display:flex; flex-direction:column; gap:3px; padding:0 6px 6px; min-height:0; }
.cc-chart { position:relative; min-height:0; }
.funnel-chart { flex:0 0 40%; }
.churn-chart { flex:0 0 34%; }
.chart-label { position:absolute; top:2px; left:6px; font-size:10px; color:#4a5a6a; z-index:10; letter-spacing:1px; }

.cc-metrics {
  flex:0 0 22%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  padding: 2px 0;
}
.cc-metric {
  text-align: center;
  padding: 4px 2px;
  background: rgba(15,32,56,0.4);
  border: 1px solid rgba(0,212,255,0.08);
  border-radius: 6px;
}
.cm-label { display:block; font-size:9px; color:#4a5a6a; margin-bottom:2px; }
.cm-value { display:block; font-size:18px; font-weight:700; font-family:'Courier New',monospace; }
.cm-change { font-size:9px; font-weight:600; &.up{color:#00ff95} &.down{color:#ff5b5b} }
</style>