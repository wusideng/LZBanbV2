<template>
  <div class="total-map-center">
    <div class="section-title"><span class="gold">✦</span> 全行经营核心总览 <span class="sub">COMMAND CENTER</span></div>
    <div class="center-content">
      <div class="center-map">
        <div class="map-title">甘肃省经营热力地图</div>
        <BaseChart :option="mapOption" height="100%" width="100%" />
      </div>
      <div class="center-right">
        <div class="status-section">
          <div class="ss-title">机构经营状态</div>
          <div class="ss-grid">
            <div v-for="r in md.regionData" :key="r.name" class="ss-item" :class="r.status">
              <div class="ss-dot" :class="r.status"></div>
              <span class="ss-name">{{ r.name }}</span>
              <span class="ss-val">{{ r.value }}亿</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import BaseChart from '@/components/common/BaseChart.vue'
import { totalMapData } from '@/mockData/totalData.js'
const md = totalMapData

const mapReady = ref(false)
const scatterData = [
  { name: '兰州', value: [103.82,36.06,186.5] }, { name: '天水', value: [105.72,34.58,142.8] },
  { name: '酒泉', value: [98.52,39.74,98.6] }, { name: '张掖', value: [100.46,38.93,82.3] },
  { name: '庆阳', value: [107.64,35.71,68.5] }, { name: '武威', value: [102.64,37.93,55.2] },
  { name: '白银', value: [104.18,36.54,48.6] }, { name: '临夏', value: [103.21,35.60,36.8] },
  { name: '金昌', value: [102.18,38.52,28.5] }, { name: '嘉峪关', value: [98.28,39.78,22.6] },
  { name: '平凉', value: [106.67,35.55,18.5] }, { name: '定西', value: [104.62,35.58,15.2] }
]

const baseOption = {
  tooltip: { trigger: 'item', backgroundColor: 'rgba(5,10,25,0.95)', borderColor: 'rgba(255,215,0,0.3)', textStyle: { color: '#e0e8f0', fontSize: 13 }, formatter: p => p.data ? `${p.data.name}<br/>AUM: ${p.data.value[2]}亿` : '' },
  visualMap: { min: 0, max: 190, left: 10, bottom: 10, text: ['高','低'], textStyle: { color: '#4a5a6a', fontSize: 11 }, inRange: { color: ['rgba(5,10,25,0.1)','rgba(79,216,255,0.15)','rgba(79,216,255,0.3)','rgba(255,215,0,0.5)','#FFD700'] }, calculable: false },
  series: [{ type: 'scatter', coordinateSystem: 'geo', data: scatterData, symbol: 'circle', symbolSize: val => Math.max(8, val[2] / 8), itemStyle: { color: '#FFD700', shadowBlur: 15, shadowColor: 'rgba(255,215,0,0.6)' }, label: { show: true, formatter: p => `${p.data.name}\n${p.data.value[2]}亿`, color: '#e0e8f0', fontSize: 12, position: 'right' }, emphasis: { scale: 1.5 } }]
}

const mapOption = ref(baseOption)

onMounted(() => {
  fetch('https://geo.datav.aliyun.com/areas_v3/bound/620000_full.json')
    .then(res => res.json())
    .then(data => {
      echarts.registerMap('gansu', data)
      mapReady.value = true
      mapOption.value = { ...baseOption, geo: { map: 'gansu', roam: false, label: { show: true, color: '#e0e8f0', fontSize: 11 }, itemStyle: { borderColor: 'rgba(255,215,0,0.25)', borderWidth: 1.5, areaColor: 'rgba(5,10,25,0.5)' }, emphasis: { label: { color: '#FFD700' }, itemStyle: { areaColor: 'rgba(255,215,0,0.12)' } }, center: [104.5, 38.5], zoom: 6.5 } }
    })
    .catch(() => { mapReady.value = true })
})
</script>

<style lang="scss" scoped>
.total-map-center { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 17px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 2px; letter-spacing: 2px; flex-shrink: 0; .gold { color: #FFD700; margin-right: 4px; } .sub { font-size: 13px; color: rgba(255,215,0,0.2); letter-spacing: 3px; margin-left: 6px; } }
.center-content { flex: 1; display: flex; gap: 8px; padding: 2px 8px 8px; min-height: 0; }
.center-map { flex: 1; min-width: 0; position: relative; background: rgba(5,10,25,0.2); border-radius: 6px; border: 1px solid rgba(255,215,0,0.06); }
.map-title { position: absolute; top: 6px; left: 8px; font-size: 14px; color: #4a5a6a; z-index: 5; letter-spacing: 1px; }
.center-right { flex: 0 0 13%; min-width: 0; }
.status-section { height: 100%; display: flex; flex-direction: column; }
.ss-title { font-size: 13px; color: #4a5a6a; padding: 2px 4px; letter-spacing: 1px; flex-shrink: 0; }
.ss-grid { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; align-content: start; padding: 2px 0; overflow-y: auto; &::-webkit-scrollbar { width: 2px; } &::-webkit-scrollbar-thumb { background: rgba(255,215,0,0.3); border-radius: 1px; } }
.ss-item { display: flex; flex-direction: column; align-items: center; padding: 4px 2px; background: rgba(5,10,25,0.3); border: 1px solid rgba(255,215,0,0.04); border-radius: 4px; gap: 2px; &.healthy { border-left: 2px solid #00FFC6; } &.warning { border-left: 2px solid #FF9F43; } }
.ss-dot { width: 4px; height: 4px; border-radius: 50%; &.healthy { background: #00FFC6; } &.warning { background: #FF9F43; } }
.ss-name { font-size: 13px; color: #8899aa; }
.ss-val { font-size: 12px; color: #4a5a6a; font-family: 'Courier New',monospace; }
</style>