<template>
  <div class="total-kpi-band">
    <div class="kpi-row">
      <div v-for="kpi in kpiList" :key="kpi.id" class="kpi-card">
        <div class="kpi-inner">
          <span class="kpi-label">{{ kpi.label }}</span>
          <div class="kpi-value-wrap"><span class="kpi-number">{{ kpi.value }}</span><span class="kpi-unit">{{ kpi.unit }}</span></div>
          <div class="kpi-extras"><span class="kpi-change" :class="kpi.changeType"><i class="arrow">{{ kpi.changeType === 'up' ? '↑' : '↓' }}</i>{{ Math.abs(kpi.change) }}{{ kpi.id > 4 ? '' : '%' }}</span><span class="kpi-yoy">同比 {{ kpi.yoy >= 0 ? '+' : '' }}{{ kpi.yoy }}%</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { totalKpiData } from '@/mockData/totalData.js'
const kpiList = computed(() => totalKpiData)
</script>

<style lang="scss" scoped>
.total-kpi-band { padding: 0 16px; }
.kpi-row { display: flex; gap: 10px; padding: 4px 0; }
.kpi-card { flex: 1; min-width: 0; background: rgba(5,10,25,0.6); border: 1px solid rgba(255,215,0,0.12); border-radius: 8px; overflow: hidden; transition: all 0.3s; cursor: pointer;
  &:hover { border-color: rgba(255,215,0,0.35); box-shadow: 0 0 25px rgba(255,215,0,0.1); transform: translateY(-2px); }
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,transparent,#FFD700,rgba(255,215,0,0.4),transparent); background-size: 200% 100%; animation: flowBorder 3s linear infinite; }
}
@keyframes flowBorder { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
.kpi-inner { padding: 8px 10px; position: relative; z-index: 1; }
.kpi-label { font-size: 15px; color: #8899aa; display: block; margin-bottom: 2px; }
.kpi-value-wrap { margin-bottom: 2px; }
.kpi-number { font-size: 24px; font-weight: 700; color: #FFD700; font-family: 'Courier New',monospace; text-shadow: 0 0 15px rgba(255,215,0,0.5),0 0 30px rgba(255,215,0,0.2); }
.kpi-unit { font-size: 15px; color: #6a7a8a; margin-left: 2px; }
.kpi-extras { font-size: 13px; }
.kpi-change { font-weight: 600; margin-right: 8px; &.up { color: #00FFC6; } &.down { color: #FF5B5B; } .arrow { font-size: 12px; } }
.kpi-yoy { color: #4a5a6a; }
</style>