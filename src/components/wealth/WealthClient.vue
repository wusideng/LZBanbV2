<template>
  <div class="wealth-client">
    <div class="section-title">财富客户区</div>
    <div class="wc-content">
      <div class="wc-chart">
        <span class="chart-label">客户分层星环</span>
        <BaseChart :option="levelOption" height="100%" width="100%" />
      </div>
      <div class="wc-chart">
        <span class="chart-label">客户年龄结构</span>
        <BaseChart :option="ageOption" height="100%" width="100%" />
      </div>
      <div class="wc-stats">
        <div class="ws-item"><span class="ws-lbl">财富客户</span><span class="ws-val gold">{{ formatNum(wealthClients) }}</span></div>
        <div class="ws-item"><span class="ws-lbl">私行客户</span><span class="ws-val gold">{{ formatNum(pbClients) }}</span></div>
        <div class="ws-item"><span class="ws-lbl">高净值客户</span><span class="ws-val cyan">{{ formatNum(hniClients) }}</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const wealthClients = 286500, pbClients = 3850, hniClients = 71850
function formatNum(v) { return v >= 10000 ? (v/10000).toFixed(1) + '万' : v.toLocaleString() }

const levelOption = computed(() => ({
  tooltip:{trigger:'item',backgroundColor:'rgba(11,34,53,0.95)',borderColor:'rgba(212,175,55,0.3)',textStyle:{color:'#e0e8f0',fontSize:14},formatter:'{b}: {c}户 ({d}%)'},
  series:[{
    type:'pie',radius:['30%','65%'],center:['50%','50%'],roseType:'radius',
    data:[
      {name:'普通客户',value:1580000,itemStyle:{color:'rgba(0,207,255,0.2)'}},
      {name:'黄金客户',value:520000,itemStyle:{color:'rgba(0,207,255,0.4)'}},
      {name:'白金客户',value:185000,itemStyle:{color:'rgba(212,175,55,0.5)'}},
      {name:'钻石客户',value:68000,itemStyle:{color:'rgba(212,175,55,0.7)'}},
      {name:'私行客户',value:3850,itemStyle:{color:'#D4AF37',shadowBlur:10,shadowColor:'rgba(212,175,55,0.5)'}}
    ],
    label:{color:'#8899aa',fontSize:13,formatter:'{b}'},
    labelLine:{lineStyle:{color:'rgba(212,175,55,0.15)'}},
    itemStyle:{borderRadius:4},
    animationType:'scale',animationDuration:1200
  }]
}))

const ageOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(11,34,53,0.95)',borderColor:'rgba(212,175,55,0.3)',textStyle:{color:'#e0e8f0',fontSize:14}},
  radar:{
    indicator:[{name:'18-30岁',max:100},{name:'30-40岁',max:100},{name:'40-50岁',max:100},{name:'50-60岁',max:100},{name:'60岁以上',max:100}],
    center:['50%','50%'],radius:'55%',
    axisName:{color:'#8899aa',fontSize:12},
    splitArea:{areaStyle:{color:['rgba(212,175,55,0.03)','rgba(0,207,255,0.02)']}},
    axisLine:{lineStyle:{color:'rgba(212,175,55,0.12)'}},
    splitLine:{lineStyle:{color:'rgba(212,175,55,0.08)'}}
  },
  series:[{
    type:'radar',
    data:[
      {value:[25,68,85,72,45],areaStyle:{color:'rgba(212,175,55,0.12)'},lineStyle:{color:'#D4AF37',width:2},itemStyle:{color:'#D4AF37'}},
      {value:[30,62,78,68,40],areaStyle:{color:'rgba(0,207,255,0.08)'},lineStyle:{color:'rgba(0,207,255,0.4)',width:1,type:'dashed'},itemStyle:{color:'rgba(0,207,255,0.4)'}}
    ],
    symbol:'circle',symbolSize:4,animationDuration:1500
  }]
}))
</script>

<style lang="scss" scoped>
.wealth-client{height:100%;display:flex;flex-direction:column}
.section-title{font-size:15px;font-weight:600;color:#D4AF37;padding:8px 12px 2px;text-shadow:0 0 10px rgba(212,175,55,0.4);letter-spacing:2px;flex-shrink:0;&::before{content:'◆ ';color:#00CFFF}}
.wc-content{flex:1;display:flex;flex-direction:column;gap:4px;padding:0 8px 6px;min-height:0}
.wc-chart{flex:0 0 42%;position:relative;min-height:0}
.chart-label{position:absolute;top:2px;left:6px;font-size:12px;color:#4a5a6a;z-index:10;letter-spacing:1px}
.wc-stats{flex:0 0 48%;display:flex;gap:6px;padding:4px 6px;background:rgba(11,34,53,0.4);border:1px solid rgba(212,175,55,0.08);border-radius:8px;align-items:center}
.ws-item{flex:1;text-align:center}
.ws-lbl{display:block;font-size:11px;color:#4a5a6a;margin-bottom:2px}
.ws-val{display:block;font-size:18px;font-weight:700;font-family:'Courier New',monospace;&.gold{color:#D4AF37;text-shadow:0 0 8px rgba(212,175,55,0.3)}&.cyan{color:#00CFFF}}
</style>