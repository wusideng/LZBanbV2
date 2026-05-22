<template>
  <div class="realtime-ops">
    <div class="ops-left">
      <div class="section-title">实时运营指标</div>
      <div class="counter-row">
        <div class="counter-item" v-for="c in counters" :key="c.label">
          <span class="counter-label">{{ c.label }}</span>
          <span class="counter-value">{{ c.value }}</span>
          <span class="counter-unit">{{ c.unit }}</span>
        </div>
      </div>
    </div>
    <div class="ops-mid">
      <div class="section-title">渠道峰值</div>
      <div class="peak-chart"><BaseChart :option="peakOption" height="100%" width="100%" /></div>
    </div>
    <div class="ops-right">
      <div class="section-title">热门功能调用</div>
      <div class="hot-scroll" ref="hotRef">
        <div class="hot-list" :style="{ transform: `translateY(-${hotY}px)` }">
          <div v-for="(h, i) in displayHot" :key="i" class="hot-item">
            <span class="hot-rank">{{ h.rank }}</span>
            <span class="hot-name">{{ h.name }}</span>
            <span class="hot-count">{{ h.count }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ops-alert">
      <div class="section-title alert-title">动态告警</div>
      <div class="alert-scroll" ref="alertRef">
        <div class="alert-list" :style="{ transform: `translateY(-${alertY}px)` }">
          <div v-for="(a, i) in displayAlerts" :key="i" class="alert-item" :class="a.level">
            <span class="alert-dot"></span>
            <span class="alert-text">{{ a.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'

const counters = [
  { label: '实时开户', value: 286, unit: '户' },
  { label: '实时交易', value: 1820, unit: '笔' },
  { label: '实时支付', value: 562, unit: '笔' }
]

const hotFunctions = [
  { rank: 1, name: '转账汇款', count: 158600 },
  { rank: 2, name: '账户查询', count: 145200 },
  { rank: 3, name: '生活缴费', count: 128500 },
  { rank: 4, name: '理财购买', count: 98600 },
  { rank: 5, name: '信用卡还款', count: 85600 },
  { rank: 6, name: '贷款申请', count: 62500 },
  { rank: 7, name: '定期存款', count: 56800 },
  { rank: 8, name: '外汇兑换', count: 32500 }
]

const alerts = [
  { level: 'high', text: '系统告警：支付超时率 > 5%' },
  { level: 'mid', text: '风险预警：批量异常登录' },
  { level: 'high', text: '系统告警：核心交易响应 > 3s' },
  { level: 'low', text: '提示：渠道流量达到峰值' },
  { level: 'mid', text: '风险预警：大额交易频繁' },
  { level: 'low', text: '提示：新版本已部署' }
]

const hotY = ref(0)
const alertY = ref(0)
let hotTimer = null
let alertTimer = null

const displayHot = computed(() => [...hotFunctions, ...hotFunctions])
const displayAlerts = computed(() => [...alerts, ...alerts])

onMounted(() => {
  hotTimer = setInterval(() => {
    hotY.value += 0.5
    if (hotY.value >= hotFunctions.length * 26) hotY.value = 0
  }, 50)
  alertTimer = setInterval(() => {
    alertY.value += 0.5
    if (alertY.value >= alerts.length * 26) alertY.value = 0
  }, 50)
})
onUnmounted(() => {
  if (hotTimer) clearInterval(hotTimer)
  if (alertTimer) clearInterval(alertTimer)
})

const peakOption = computed(() => ({
  tooltip:{trigger:'axis',backgroundColor:'rgba(0,0,0,0.9)',borderColor:'rgba(0,212,255,0.3)',textStyle:{color:'#e0e8f0',fontSize:13}},
  grid:{top:6,left:32,right:4,bottom:10},
  xAxis:{type:'category',data:['0点','4点','8点','12点','16点','20点'],axisLabel:{color:'#4a5a6a',fontSize:12},axisLine:{lineStyle:{color:'rgba(0,212,255,0.08)'}}},
  yAxis:{type:'value',splitLine:{lineStyle:{color:'rgba(0,212,255,0.04)',type:'dashed'}},axisLabel:{color:'#4a5a6a',fontSize:12}},
  series:[{
    name:'并发峰值',type:'line',data:[12,8,85,72,68,88],smooth:true,symbol:'none',
    lineStyle:{color:'#00d4ff',width:2},
    areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(0,212,255,0.25)'},{offset:1,color:'rgba(0,212,255,0.01)'}]}}
  }]
}))
</script>

<style lang="scss" scoped>
.realtime-ops { display:flex; gap:8px; padding:0 16px 6px; height:100%; }
.ops-left, .ops-mid, .ops-right, .ops-alert { display:flex; flex-direction:column; background:rgba(15,32,56,0.3); border:1px solid rgba(0,212,255,0.08); border-radius:8px; overflow:hidden; }
.ops-left { flex:0 0 22%; }
.ops-mid { flex:0 0 26%; }
.ops-right { flex:0 0 22%; }
.ops-alert { flex:0 0 26%; }

.section-title { font-size:14px; font-weight:600; color:#00ffcc; padding:4px 10px; text-shadow:0 0 10px rgba(0,255,204,0.3); letter-spacing:2px; flex-shrink:0; border-bottom:1px solid rgba(0,212,255,0.06); &::before{content:'◆ ';color:#00d4ff} }
.alert-title { color:#ff5b5b; text-shadow:0 0 10px rgba(255,91,91,0.3); }

.counter-row { display:flex; justify-content:space-around; align-items:center; flex:1; padding:4px; }
.counter-item { text-align:center; }
.counter-label { display:block; font-size:11px; color:#4a5a6a; margin-bottom:2px; }
.counter-value { display:block; font-size:22px; font-weight:700; color:#00ffcc; font-family:'Courier New',monospace; animation:countPulse 2s ease-in-out infinite; }
.counter-unit { display:block; font-size:12px; color:#4a5a6a; margin-top:2px; }
@keyframes countPulse { 0%,100%{opacity:0.8} 50%{opacity:1;text-shadow:0 0 10px rgba(0,255,204,0.4)} }

.peak-chart { flex:1; min-height:0; }

.hot-scroll, .alert-scroll { flex:1; overflow:hidden; position:relative; }
.hot-list, .alert-list { transition:none; }
.hot-item { display:flex; align-items:center; gap:6px; padding:3px 10px; height:26px; font-size:12px; border-bottom:1px solid rgba(0,212,255,0.03); }
.hot-rank { width:16px; text-align:center; color:#8899aa; font-size:11px; font-weight:600; }
.hot-name { flex:1; color:#e0e8f0; }
.hot-count { width:44px; text-align:right; color:#00ffcc; font-family:'Courier New',monospace; }

.alert-item { display:flex; align-items:center; gap:6px; padding:3px 10px; height:26px; font-size:12px; border-bottom:1px solid rgba(0,212,255,0.03); }
.alert-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
.alert-item.high .alert-dot { background:#ff5b5b; box-shadow:0 0 6px rgba(255,91,91,0.6); animation:breathe 0.8s infinite; }
.alert-item.mid .alert-dot { background:#ffb347; box-shadow:0 0 6px rgba(255,179,71,0.6); }
.alert-item.low .alert-dot { background:#8899aa; }
.alert-text { color:#8899aa; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.alert-item.high .alert-text { color:#ff5b5b; }

@keyframes breathe { 0%,100%{opacity:.3} 50%{opacity:1} }
</style>