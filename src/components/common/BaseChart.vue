<template>
  <div ref="chartRef" class="chart-container" :style="{ width, height }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  option: { type: Object, required: true },
  width: { type: String, default: '100%' },
  height: { type: String, default: '100%' }
})

const emit = defineEmits(['ready'])
const chartRef = ref(null)
let chart = null
let resizeTimer = null

function initChart() {
  if (!chartRef.value) return
  if (chart) chart.dispose()
  chart = echarts.init(chartRef.value, null, { renderer: 'canvas' })
  chart.setOption({
    ...props.option,
    animationDuration: 1000,
    animationEasing: 'cubicOut'
  })
  emit('ready', chart)
}

function handleResize() {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    chart?.resize()
  }, 200)
}

watch(() => props.option, (val) => {
  if (chart) {
    chart.setOption(val, true)
  } else {
    nextTick(initChart)
  }
}, { deep: true })

onMounted(() => {
  nextTick(initChart)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (resizeTimer) clearTimeout(resizeTimer)
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
  chart = null
})

defineExpose({ getChart: () => chart })
</script>

<style scoped>
.chart-container { min-height: 0; }
</style>