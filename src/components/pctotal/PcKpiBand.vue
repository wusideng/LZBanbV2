<template>
  <div class="pc-kpi-band">
    <div class="kpi-row">
      <div v-for="kpi in kpiList" :key="kpi.id" class="kpi-card">
        <div class="kpi-label">{{ kpi.label }}</div>
        <div class="kpi-value">{{ formatValue(kpi.value) }}<span class="kpi-unit">{{ kpi.unit }}</span></div>
        <div class="kpi-extras">
          <span class="kpi-change" :class="kpi.changeType"><i class="arrow">{{ kpi.changeType === 'up' ? '↑' : '↓' }}</i>{{ Math.abs(kpi.change) }}{{ kpi.id > 4 ? '' : '%' }}</span>
          <span class="kpi-yoy">同比 {{ kpi.yoy >= 0 ? '+' : '' }}{{ kpi.yoy }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { totalKpiData } from '@/mockData/totalData.js'
const kpiList = computed(() => totalKpiData)
function formatValue(v) { if (v >= 10000) return (v/10000).toFixed(1)+'万'; return String(v) }
</script>

<style lang="scss" scoped>
.pc-kpi-band { padding: 0 16px; }
.kpi-row { display: flex; gap: 10px; }
.kpi-card { flex: 1; min-width: 0; padding: 12px 14px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 6px; }
.kpi-label { font-size: 14px; color: #8899aa; margin-bottom: 4px; }
.kpi-value { font-size: 24px; font-weight: 700; color: #FFD700; font-family: 'Courier New',monospace; margin-bottom: 4px; }
.kpi-unit { font-size: 14px; color: #4a5a6a; margin-left: 2px; }
.kpi-extras { font-size: 13px; }
.kpi-change { font-weight: 600; margin-right: 8px; &.up { color: #4FD8FF; } &.down { color: #FF5B5B; } .arrow { font-size: 12px; margin-right: 1px; } }
.kpi-yoy { color: #4a5a6a; }
</style>