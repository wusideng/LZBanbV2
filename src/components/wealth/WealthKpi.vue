<template>
  <div class="wealth-kpi">
    <div class="section-title">核心财富KPI</div>
    <div class="kpi-row">
      <div v-for="kpi in kpiList" :key="kpi.id" class="kpi-card" @mouseenter="kpi.hover=true" @mouseleave="kpi.hover=false">
        <div class="kpi-top">
          <span class="kpi-label">{{ kpi.label }}</span>
          <span class="kpi-dot" :class="kpi.change>=0?'up':'down'"></span>
        </div>
        <div class="kpi-value-wrap">
          <span class="kpi-number">{{ kpi.value }}</span>
          <span class="kpi-unit">{{ kpi.unit }}</span>
        </div>
        <div class="kpi-extras">
          <span class="kpi-change" :class="kpi.change>=0?'up':'down'"><i class="arrow">{{ kpi.change>=0?'↑':'↓' }}</i>{{ Math.abs(kpi.change) }}%</span>
        </div>
        <div class="kpi-spark">
          <svg :width="60" :height="20" class="spark-svg">
            <path :d="getSparkPath(kpi.sparkData)" fill="none" stroke="#D4AF37" stroke-width="1.2" opacity="0.6"/>
          </svg>
        </div>
        <div class="kpi-glow" :class="{active:kpi.hover}"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const kpiList = computed(() => {
  const raw = [
    { id:1, label:'AUM总额', value:856.8, unit:'亿', change:6.2, sparkData:[780,795,808,815,820,830,838,842,848,852,855,856.8] },
    { id:2, label:'日均AUM', value:842.3, unit:'亿', change:5.8, sparkData:[770,782,795,800,810,820,825,830,835,840,842,842.3] },
    { id:3, label:'AUM新增', value:48.5, unit:'亿', change:12.5, sparkData:[35,36,38,39,40,42,43,44,45,46,47,48.5] },
    { id:4, label:'AUM流失', value:12.8, unit:'亿', change:-3.2, sparkData:[15,14.5,14,13.8,13.5,13.2,13,12.8,12.6,12.5,12.8,12.8] },
    { id:5, label:'户均AUM', value:26.8, unit:'万', change:4.5, sparkData:[24.5,24.8,25,25.2,25.5,25.8,26,26.2,26.3,26.5,26.6,26.8] },
    { id:6, label:'高净值资产占比', value:42.5, unit:'%', change:3.8, sparkData:[39,39.5,40,40.2,40.5,40.8,41,41.2,41.5,41.8,42.2,42.5] }
  ]
  return raw.map(d=>({...d,hover:false}))
})

function getSparkPath(data) {
  if(!data||data.length<2)return ''
  const w=60,h=20,min=Math.min(...data),max=Math.max(...data),range=max-min||1
  const stepX=w/(data.length-1)
  return 'M'+data.map((v,i)=>{const x=i*stepX;const y=h-((v-min)/range)*(h-4)-2;return `${x},${y}`}).join(' L')
}
</script>

<style lang="scss" scoped>
.wealth-kpi{padding:0 16px}
.section-title{font-size:13px;font-weight:600;color:#D4AF37;padding:6px 0 4px;text-shadow:0 0 10px rgba(212,175,55,0.4);letter-spacing:2px;&::before{content:'◆ ';color:#00CFFF}}
.kpi-row{display:flex;gap:8px;flex:1;}
.kpi-card{flex:1;padding:8px 10px;background:rgba(11,34,53,0.6);border:1px solid rgba(212,175,55,0.15);border-radius:8px;cursor:pointer;position:relative;overflow:hidden;transition:all .4s;min-width:0;&:hover{border-color:rgba(212,175,55,0.4);box-shadow:0 0 20px rgba(212,175,55,0.15);transform:translateY(-2px)}&::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#D4AF37,transparent);background-size:200% 100%;animation:flowBorder 3s linear infinite}}
@keyframes flowBorder{0%{background-position:-200% 0}100%{background-position:200% 0}}
.kpi-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.kpi-label{font-size:10px;color:#8899aa;white-space:nowrap}
.kpi-dot{width:5px;height:5px;border-radius:50%;&.up{background:#00ff95;box-shadow:0 0 4px rgba(0,255,149,.6)}&.down{background:#ff5b5b;box-shadow:0 0 4px rgba(255,91,91,.6)}}
.kpi-value-wrap{display:flex;align-items:baseline;gap:4px;margin-bottom:4px}
.kpi-number{font-size:20px;font-weight:700;color:#D4AF37;font-family:'Courier New',monospace;text-shadow:0 0 10px rgba(212,175,55,0.4)}
.kpi-unit{font-size:10px;color:#6a7a8a}
.kpi-extras{margin-bottom:4px}
.kpi-change{font-size:10px;font-weight:600;&.up{color:#00ff95}&.down{color:#ff5b5b}.arrow{font-size:9px;margin-right:1px}}
.kpi-glow{position:absolute;inset:0;border-radius:8px;pointer-events:none;transition:opacity .4s;opacity:0;&.active{opacity:1;box-shadow:inset 0 0 30px rgba(212,175,55,0.08)}}
</style>