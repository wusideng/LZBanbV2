<template>
  <div class="wealth-product">
    <div class="section-title">理财产品分析</div>
    <div class="wp-content">
      <div class="wp-chart">
        <span class="chart-label">产品结构</span>
        <BaseChart :option="structureOption" height="100%" width="100%" />
      </div>
      <div class="wp-chart">
        <span class="chart-label">产品销量排行</span>
        <div class="rank-list">
          <div v-for="(p, i) in salesRanking" :key="i" class="rank-item">
            <span class="rank-num" :class="i<3?'top':''">{{ i+1 }}</span>
            <span class="rank-name">{{ p.name }}</span>
            <div class="rank-bar"><div class="rank-fill" :style="{width:(p.sales/maxSales)*100+'%'}"></div></div>
            <span class="rank-val">{{ p.sales }}亿</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const salesRanking = [
  { name:'天天理财A', sales:68.5 }, { name:'稳盈增利B', sales:52.3 },
  { name:'金尊财富C', sales:45.8 }, { name:'安心宝D', sales:38.6 },
  { name:'财富增值E', sales:32.2 }, { name:'日添利F', sales:28.5 },
  { name:'月月盈G', sales:22.8 }, { name:'年年丰H', sales:18.6 }
]
const maxSales = computed(() => Math.max(...salesRanking.map(p=>p.sales)))

const structureOption = computed(() => ({
  tooltip:{trigger:'item',backgroundColor:'rgba(11,34,53,0.95)',borderColor:'rgba(212,175,55,0.3)',textStyle:{color:'#e0e8f0',fontSize:12},formatter:'{b}: {c}亿 ({d}%)'},
  series:[{
    type:'pie',radius:['40%','65%'],center:['50%','50%'],
    data:[
      {name:'开放式理财',value:286.5,itemStyle:{color:'#D4AF37'}},
      {name:'封闭式理财',value:168.2,itemStyle:{color:'#E6C15A'}},
      {name:'净值型产品',value:73.9,itemStyle:{color:'#00CFFF'}},
      {name:'结构性存款',value:52.8,itemStyle:{color:'rgba(0,207,255,0.6)'}},
      {name:'其他',value:28.6,itemStyle:{color:'#4a5a6a'}}
    ],
    label:{color:'#8899aa',fontSize:10,formatter:'{b}'},
    labelLine:{lineStyle:{color:'rgba(212,175,55,0.15)'}},
    itemStyle:{borderRadius:4},
    animationType:'scale',animationDuration:1200
  }]
}))
</script>

<style lang="scss" scoped>
.wealth-product{height:100%;display:flex;flex-direction:column}
.section-title{font-size:13px;font-weight:600;color:#D4AF37;padding:8px 12px 2px;text-shadow:0 0 10px rgba(212,175,55,0.4);letter-spacing:2px;flex-shrink:0;&::before{content:'◆ ';color:#00CFFF}}
.wp-content{flex:1;display:flex;flex-direction:column;gap:4px;padding:0 8px 6px;min-height:0}
.wp-chart{position:relative;min-height:0;&:first-child{flex:0 0 40%}&:last-child{flex:0 0 57%}}
.chart-label{position:absolute;top:2px;left:6px;font-size:10px;color:#4a5a6a;z-index:10;letter-spacing:1px}
.rank-list{padding:16px 6px 2px;display:flex;flex-direction:column;gap:3px}
.rank-item{display:flex;align-items:center;gap:6px;height:24px;font-size:10px}
.rank-num{width:16px;text-align:center;color:#4a5a6a;font-weight:600;&.top{color:#D4AF37;text-shadow:0 0 6px rgba(212,175,55,0.4)}}
.rank-name{width:60px;color:#e0e8f0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rank-bar{flex:1;height:8px;background:rgba(212,175,55,0.08);border-radius:4px;overflow:hidden}
.rank-fill{height:100%;background:linear-gradient(90deg,#D4AF37,#E6C15A);border-radius:4px;transition:width 1.5s ease;box-shadow:0 0 6px rgba(212,175,55,0.2)}
.rank-val{width:36px;text-align:right;color:#00CFFF;font-family:'Courier New',monospace;font-size:9px}
</style>