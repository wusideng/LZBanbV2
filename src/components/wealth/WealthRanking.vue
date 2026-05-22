<template>
  <div class="wealth-ranking">
    <div class="wr-left">
      <div class="section-title">机构财富排名</div>
      <div class="rank-table-header">
        <span>排名</span><span>分行</span><span>AUM(亿)</span><span>销量(亿)</span><span>私行客户</span><span>增长率</span>
      </div>
      <div class="rank-table-body" ref="scrollRef">
        <div class="rank-scroll" :style="{transform:`translateY(-${scrollY}px)`}">
          <div v-for="(r,i) in displayList" :key="i" class="rank-row" :class="{top3:r.rank<=3}">
            <span class="rr-rank"><span v-if="r.rank<=3" class="medal">{{ ['🥇','🥈','🥉'][r.rank-1] }}</span><span v-else>{{ r.rank }}</span></span>
            <span class="rr-branch">{{ r.branch }}</span>
            <span class="rr-num">{{ r.aum }}</span>
            <span class="rr-num">{{ r.sales }}</span>
            <span class="rr-num">{{ r.pbClients }}</span>
            <span class="rr-num green">{{ r.growth }}%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="wr-right">
      <div class="section-title">区域财富热力</div>
      <div class="heat-chart">
        <div v-for="item in heatData" :key="item.name" class="heat-row">
          <span class="heat-name">{{ item.name }}</span>
          <div class="heat-track"><div class="heat-fill" :style="{width:(item.value/maxHeat)*100+'%'}"></div></div>
          <span class="heat-val">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const rankingData = [
  { rank:1, branch:'兰州分行', aum:186.5, sales:42.8, pbClients:680, growth:12.5 },
  { rank:2, branch:'天水分行', aum:142.8, sales:35.2, pbClients:520, growth:10.8 },
  { rank:3, branch:'酒泉分行', aum:98.6, sales:28.5, pbClients:380, growth:9.2 },
  { rank:4, branch:'张掖分行', aum:82.3, sales:22.6, pbClients:310, growth:8.6 },
  { rank:5, branch:'庆阳分行', aum:68.5, sales:18.8, pbClients:250, growth:7.8 },
  { rank:6, branch:'武威分行', aum:55.2, sales:15.2, pbClients:190, growth:7.2 },
  { rank:7, branch:'白银分行', aum:48.6, sales:12.8, pbClients:150, growth:6.5 },
  { rank:8, branch:'临夏分行', aum:36.8, sales:9.5, pbClients:110, growth:5.8 }
]
const heatData = [
  { name:'兰州', value:186.5 }, { name:'天水', value:142.8 }, { name:'酒泉', value:98.6 },
  { name:'张掖', value:82.3 }, { name:'庆阳', value:68.5 }, { name:'武威', value:55.2 },
  { name:'白银', value:48.6 }, { name:'临夏', value:36.8 }
]
const maxHeat = computed(()=>Math.max(...heatData.map(d=>d.value)))
const displayList = computed(()=>[...rankingData,...rankingData])
const scrollY = ref(0)
let timer = null
onMounted(()=>{timer=setInterval(()=>{scrollY.value+=1;if(scrollY.value>=rankingData.length*30)scrollY.value=0},50)})
onUnmounted(()=>{if(timer)clearInterval(timer)})
</script>

<style lang="scss" scoped>
.wealth-ranking{display:flex;gap:8px;padding:0 16px 4px;height:100%}
.wr-left,.wr-right{display:flex;flex-direction:column;background:rgba(11,34,53,0.4);border:1px solid rgba(212,175,55,0.08);border-radius:8px;overflow:hidden}
.wr-left{flex:1}
.wr-right{flex:0 0 30%}
.section-title{font-size:14px;font-weight:600;color:#D4AF37;padding:4px 10px;text-shadow:0 0 10px rgba(212,175,55,0.4);letter-spacing:2px;flex-shrink:0;border-bottom:1px solid rgba(212,175,55,0.06);&::before{content:'◆ ';color:#00CFFF}}
.rank-table-header{display:flex;padding:4px 12px;font-size:12px;color:#4a5a6a;border-bottom:1px solid rgba(212,175,55,0.06);flex-shrink:0;& span{flex:1;text-align:center}& span:first-child{flex:0 0 40px}& span:nth-child(2){flex:0 0 70px;text-align:left}}
.rank-table-body{flex:1;overflow:hidden;position:relative}
.rank-scroll{transition:none}
.rank-row{display:flex;padding:4px 12px;font-size:13px;color:#8899aa;border-bottom:1px solid rgba(212,175,55,0.03);height:30px;align-items:center;&.top3{color:#e0e8f0;background:rgba(212,175,55,0.04)}}
.rr-rank{flex:0 0 40px;text-align:center}.rr-branch{flex:0 0 70px}.rr-num{flex:1;text-align:center;font-family:'Courier New',monospace;font-size:12px}
.green{color:#00ff95}.medal{font-size:16px}
.heat-chart{flex:1;padding:8px 12px;display:flex;flex-direction:column;gap:4px}
.heat-row{display:flex;align-items:center;gap:6px}
.heat-name{flex:0 0 40px;font-size:12px;color:#8899aa;text-align:right}
.heat-track{flex:1;height:8px;background:rgba(212,175,55,0.08);border-radius:4px;overflow:hidden}
.heat-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,rgba(212,175,55,0.4),#D4AF37);transition:width 1s ease;box-shadow:0 0 6px rgba(212,175,55,0.2)}
.heat-val{flex:0 0 40px;font-size:12px;color:#00CFFF;font-family:'Courier New',monospace;text-align:right}
</style>