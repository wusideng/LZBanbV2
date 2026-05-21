<template>
  <div class="channel-behavior">
    <div class="cb-left">
      <div class="section-title">渠道运营分析</div>
      <div class="cb-chart">
        <span class="chart-label">渠道流量排行</span>
        <BaseChart :option="channelOption" height="100%" width="100%" />
      </div>
    </div>
    <div class="cb-right">
      <div class="section-title">客户行为分析</div>
      <div class="cb-content">
        <div class="cb-half">
          <BaseChart :option="hourOption" height="100%" width="100%" />
        </div>
        <div class="cb-half">
          <span class="chart-label">高频功能TOP</span>
          <div class="top-list">
            <div v-for="(f, i) in topFunctions" :key="i" class="top-item">
              <span class="top-rank">{{ i + 1 }}</span>
              <span class="top-name">{{ f.name }}</span>
              <div class="top-bar">
                <div class="top-fill" :style="{ width: (f.count / topFunctions[0].count) * 100 + '%' }"></div>
              </div>
              <span class="top-count">{{ f.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const topFunctions = [
  { name: '转账汇款', count: 158600 },
  { name: '账户查询', count: 145200 },
  { name: '生活缴费', count: 128500 },
  { name: '理财购买', count: 98600 },
  { name: '信用卡还款', count: 85600 },
  { name: '贷款申请', count: 62500 },
  { name: '定期存款', count: 56800 },
  { name: '外汇兑换', count: 32500 }
]

const channelOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(0,0,0,0.9)',borderColor:'rgba(0,212,255,0.3)',textStyle:{color:'#e0e8f0',fontSize:12}},
  grid:{top:8,left:80,right:40,bottom:8},
  xAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,212,255,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:10}},
  yAxis:{type:'category',data:['支付宝','微信支付','特约商户','企业网银','手机银行'],axisLabel:{color:'#8899aa',fontSize:11},axisLine:{lineStyle:{color:'rgba(0,212,255,0.08)'}}},
  series:[
    {name:'交易金额',type:'bar',barWidth:10,data:[286,320,185,420,528],itemStyle:{color:{type:'linear',x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:'#00d4ff'},{offset:1,color:'#00ffcc'}]}},label:{show:true,position:'right',color:'#00ffcc',fontSize:11,formatter:'{c}亿'}}
  ]
}))

const hourOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(0,0,0,0.9)',borderColor:'rgba(0,212,255,0.3)',textStyle:{color:'#e0e8f0',fontSize:12}},
  grid:{top:20,left:40,right:8,bottom:20},
  xAxis:{type:'category',data:['0-2','2-4','4-6','6-8','8-10','10-12','12-14','14-16','16-18','18-20','20-22','22-24'],axisLabel:{color:'#4a5a6a',fontSize:9,rotate:30},axisLine:{lineStyle:{color:'rgba(0,212,255,0.08)'}}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,212,255,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:10}},
  series:[{
    name:'活跃时段',type:'line',data:[12,8,5,18,65,85,78,72,68,88,52,25],smooth:true,
    symbol:'none',lineStyle:{color:'#00d4ff',width:2},
    areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,212,255,0.3)'},{offset:1,color:'rgba(0,212,255,0.01)'}]}}
  }]
}))
</script>

<style lang="scss" scoped>
.channel-behavior { display:flex; gap:8px; padding:0 16px 4px; height:100%; }
.cb-left, .cb-right { flex:1; display:flex; flex-direction:column; background:rgba(15,32,56,0.3); border:1px solid rgba(0,212,255,0.08); border-radius:8px; overflow:hidden; }
.section-title { font-size:13px; font-weight:600; color:#00ffcc; padding:6px 12px; text-shadow:0 0 10px rgba(0,255,204,0.3); letter-spacing:2px; flex-shrink:0; border-bottom:1px solid rgba(0,212,255,0.06); &::before{content:'◆ ';color:#00d4ff} }

.cb-chart { flex:1; position:relative; min-height:0; }
.chart-label { position:absolute; top:2px; left:6px; font-size:10px; color:#4a5a6a; z-index:10; letter-spacing:1px; }

.cb-content { flex:1; display:flex; gap:4px; padding:4px; min-height:0; }
.cb-half { flex:1; position:relative; min-height:0; }

.top-list { padding:2px 8px; display:flex; flex-direction:column; gap:3px; }
.top-item { display:flex; align-items:center; gap:6px; height:22px; }
.top-rank { width:16px; text-align:center; font-size:9px; color:#8899aa; font-weight:600; }
.top-name { width:60px; font-size:10px; color:#e0e8f0; }
.top-bar { flex:1; height:6px; background:rgba(0,212,255,0.08); border-radius:3px; overflow:hidden; }
.top-fill { height:100%; background:linear-gradient(90deg,#00d4ff,#00ffcc); border-radius:3px; transition:width 1s ease; }
.top-count { width:40px; text-align:right; font-size:9px; color:#00ffcc; font-family:'Courier New',monospace; }
</style>