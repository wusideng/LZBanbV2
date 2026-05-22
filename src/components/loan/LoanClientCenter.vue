<template>
  <div class="loan-client-center">
    <div class="section-title">客户经营中心 <span class="title-sub">CLIENT OPERATIONS</span></div>
    <div class="client-content">
      <!-- 客户核心指标 -->
      <div class="client-metrics">
        <div class="metric-item">
          <span class="metric-label">贷款客户数</span>
          <span class="metric-value">{{ customerData.totalCustomers.toLocaleString() }}户</span>
          <span class="metric-change up">↑ {{ customerData.customerChange }}%</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">户均贷款</span>
          <span class="metric-value">{{ customerData.avgLoan }}万</span>
          <span class="metric-change up">↑ {{ customerData.avgLoanChange }}%</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">新增授信</span>
          <span class="metric-value">{{ customerData.newCredit.toLocaleString() }}户</span>
          <span class="metric-change up">↑ {{ customerData.newCreditChange }}%</span>
        </div>
      </div>
      <!-- 客户增长图 -->
      <div class="chart-section">
        <div class="chart-section-title">客户增长趋势</div>
        <div class="chart-wrap">
          <BaseChart :option="customerTrendOption" height="100%" width="100%" />
        </div>
      </div>
      <!-- 授信漏斗图 -->
      <div class="chart-section">
        <div class="chart-section-title">授信漏斗分析</div>
        <div class="chart-wrap">
          <BaseChart :option="funnelOption" height="100%" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseChart from '@/components/common/BaseChart.vue'
import { loanCustomerData } from '@/mockData/loanData.js'

const customerData = loanCustomerData

const customerTrendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(11,34,53,0.95)',
    borderColor: 'rgba(255,138,52,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 }
  },
  legend: {
    data: ['新增用户', '累计用户(万)'],
    textStyle: { color: '#8899aa', fontSize: 11 },
    top: 0, right: 0
  },
  grid: { top: 28, left: 40, right: 10, bottom: 20 },
  xAxis: {
    type: 'category',
    data: customerData.customerTrend.months,
    axisLabel: { color: '#4a5a6a', fontSize: 10 },
    axisLine: { lineStyle: { color: 'rgba(255,138,52,0.08)' } },
    axisTick: { show: false }
  },
  yAxis: [
    {
      type: 'value',
      name: '新增(户)',
      nameTextStyle: { color: '#4a5a6a', fontSize: 10 },
      splitLine: { lineStyle: { color: 'rgba(255,138,52,0.04)', type: 'dashed' } },
      axisLabel: { color: '#4a5a6a', fontSize: 10 }
    },
    {
      type: 'value',
      name: '累计(万)',
      nameTextStyle: { color: '#4a5a6a', fontSize: 10 },
      splitLine: { show: false },
      axisLabel: { color: '#4a5a6a', fontSize: 10 }
    }
  ],
  series: [
    {
      name: '新增用户',
      type: 'bar',
      data: customerData.customerTrend.newUsers,
      itemStyle: {
        color: {
          type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#FF8A34' },
            { offset: 1, color: 'rgba(255,138,52,0.3)' }
          ]
        },
        borderRadius: [3, 3, 0, 0]
      },
      barWidth: 12
    },
    {
      name: '累计用户(万)',
      type: 'line',
      yAxisIndex: 1,
      data: customerData.customerTrend.totalUsers,
      smooth: true,
      symbol: 'none',
      lineStyle: { color: '#00CFFF', width: 2 },
      areaStyle: {
        color: {
          type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(0,207,255,0.2)' },
            { offset: 1, color: 'rgba(0,207,255,0.01)' }
          ]
        }
      }
    }
  ]
}))

const funnelOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(11,34,53,0.95)',
    borderColor: 'rgba(255,138,52,0.3)',
    textStyle: { color: '#e0e8f0', fontSize: 13 },
    formatter: '{b}: {c}户'
  },
  series: [{
    type: 'funnel',
    left: '5%',
    right: '15%',
    top: 10,
    bottom: 10,
    minSize: '10%',
    maxSize: '100%',
    sort: 'descending',
    gap: 4,
    label: {
      show: true,
      position: 'inside',
      color: '#e0e8f0',
      fontSize: 12,
      formatter: '{b}\n{c}'
    },
    labelLine: { length: 10, lineStyle: { width: 1, type: 'solid' } },
    data: customerData.funnelData.map((item, idx) => ({
      name: item.name,
      value: item.value,
      itemStyle: {
        color: ['#FF8A34', '#FFB347', '#FF9F43', '#00CFFF', '#33D1FF'][idx],
        opacity: 0.9
      }
    })),
    animationDuration: 1000
  }]
}))
</script>

<style lang="scss" scoped>
.loan-client-center {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 17px;
  font-weight: 600;
  color: #FFB347;
  padding: 6px 12px 3px;
  text-shadow: 0 0 10px rgba(255, 179, 71, 0.3);
  letter-spacing: 2px;
  flex-shrink: 0;
  &::before { content: '◆ '; color: #FF8A34; }
  .title-sub {
    font-size: 13px;
    color: rgba(255, 179, 71, 0.2);
    letter-spacing: 3px;
    margin-left: 6px;
  }
}

.client-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2px 8px 8px;
  min-height: 0;
}

.client-metrics {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.metric-item {
  flex: 1;
  padding: 6px 8px;
  background: rgba(11, 34, 53, 0.5);
  border: 1px solid rgba(255, 138, 52, 0.1);
  border-radius: 6px;
  text-align: center;
  .metric-label {
    display: block;
    font-size: 13px;
    color: #4a5a6a;
    margin-bottom: 2px;
    letter-spacing: 1px;
  }
  .metric-value {
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: #FFB347;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 10px rgba(255, 179, 71, 0.3);
  }
  .metric-change {
    font-size: 13px;
    font-weight: 600;
    &.up { color: #00FFC6; }
  }
}

.chart-section {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.chart-section-title {
  font-size: 14px;
  color: #4a5a6a;
  padding: 2px 4px;
  letter-spacing: 1px;
  flex-shrink: 0;
}

.chart-wrap {
  flex: 1;
  min-height: 0;
}
</style>