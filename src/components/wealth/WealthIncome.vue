<template>
  <div class="wealth-income">
    <div class="wi-left">
      <div class="section-title">中收贡献</div>
      <div class="wi-content">
        <div class="wi-chart">
          <span class="chart-label">收益贡献</span>
          <BaseChart :option="incomeOption" height="100%" width="100%" />
        </div>
        <div class="wi-chart">
          <span class="chart-label">收益趋势</span>
          <BaseChart :option="trendOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
    <div class="wi-right">
      <div class="section-title">财富趋势</div>
      <div class="wi-metrics">
        <div class="wim-item"><span class="wim-lbl">理财中收</span><span class="wim-val gold">3.2亿</span><span class="wim-pct">42.8%</span></div>
        <div class="wim-item"><span class="wim-lbl">基金中收</span><span class="wim-val cyan">2.8亿</span><span class="wim-pct">32.6%</span></div>
        <div class="wim-item"><span class="wim-lbl">保险中收</span><span class="wim-val gold">1.5亿</span><span class="wim-pct">17.4%</span></div>
        <div class="wim-item"><span class="wim-lbl">信托/其他</span><span class="wim-val">1.1亿</span><span class="wim-pct">7.2%</span></div>
      </div>
      <div class="wi-total">中收总额 <strong>8.6亿</strong> <span class="wi-ratio">占比23.5%</span></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const incomeOption = computed(() => ({
  tooltip:{trigger:'item',backgroundColor:'rgba(11,34,53,0.95)',borderColor:'rgba(212,175,55,0.3)',textStyle:{color:'#e0e8f0',fontSize:12},formatter:'{b}: {c}亿 ({d}%)'},
  series:[{
    type:'pie',radius:['45%','70%'],center:['50%','50%'],
    data:[
      {name:'理财中收',value:3.2,itemStyle:{color:'#D4AF37'}},
      {name:'基金中收',value:2.8,itemStyle:{color:'#00CFFF'}},
      {name:'保险中收',value:1.5,itemStyle:{color:'#E6C15A'}},
      {name:'信托中收',value:0.7,itemStyle:{color:'rgba(0,207,255,0.5)'}},
      {name:'其他中收',value:0.4,itemStyle:{color:'#4a5a6a'}}
    ],
    label:{color:'#8899aa',fontSize:11,formatter:'{b}'},
    labelLine:{lineStyle:{color:'rgba(212,175,55,0.15)'}},
    itemStyle:{borderRadius:4},
    animationType:'scale',animationDuration:1200
  }]
}))

const trendOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(11,34,53,0.95)',borderColor:'rgba(212,175,55,0.3)',textStyle:{color:'#e0e8f0',fontSize:11}},
  grid:{top:8,left:36,right:6,bottom:10},
  xAxis:{type:'category',data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],axisLabel:{color:'#4a5a6a',fontSize:9,interval:1},axisLine:{lineStyle:{color:'rgba(212,175,55,0.08)'}}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(212,175,55,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:9}},
  series:[{
    name:'中收',type:'line',data:[6.5,6.8,7.0,7.2,7.5,7.8,8.0,8.2,8.3,8.5,8.5,8.6],
    smooth:true,symbol:'none',
    lineStyle:{color:'#D4AF37',width:2},
    areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(212,175,55,0.25)'},{offset:1,color:'rgba(212,175,55,0.01)'}]}}
  }]
}))
</script>

<style lang="scss" scoped>
.wealth-income{display:flex;gap:8px;padding:0 16px 4px;height:100%}
.wi-left,.wi-right{display:flex;flex-direction:column;background:rgba(11,34,53,0.4);border:1px solid rgba(212,175,55,0.08);border-radius:8px;overflow:hidden}
.wi-left{flex:1}
.wi-right{flex:0 0 22%}
.section-title{font-size:12px;font-weight:600;color:#D4AF37;padding:4px 10px;text-shadow:0 0 10px rgba(212,175,55,0.4);letter-spacing:2px;flex-shrink:0;border-bottom:1px solid rgba(212,175,55,0.06);&::before{content:'◆ ';color:#00CFFF}}
.wi-content{flex:1;display:flex;gap:4px;padding:4px;min-height:0}
.wi-chart{flex:1;position:relative;min-height:0}
.chart-label{position:absolute;top:2px;left:6px;font-size:10px;color:#4a5a6a;z-index:10;letter-spacing:1px}
.wi-metrics{flex:1;display:flex;flex-direction:column;gap:6px;padding:8px;justify-content:center}
.wim-item{display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(11,34,53,0.3);border:1px solid rgba(212,175,55,0.06);border-radius:6px}
.wim-lbl{font-size:10px;color:#4a5a6a;flex:1}
.wim-val{font-size:14px;font-weight:700;font-family:'Courier New',monospace;&.gold{color:#D4AF37}&.cyan{color:#00CFFF}}
.wim-pct{font-size:10px;color:#8899aa}
.wi-total{text-align:center;padding:6px;font-size:11px;color:#8899aa;border-top:1px solid rgba(212,175,55,0.06);flex-shrink:0;& strong{color:#D4AF37;font-size:16px;font-family:'Courier New',monospace}& .wi-ratio{color:#00CFFF;font-size:10px;margin-left:4px}}
</style>