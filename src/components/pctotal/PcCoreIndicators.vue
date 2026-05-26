<template>
  <div class="pc-core-indicators">
    <div class="section-title">核心经营指标</div>
    <div class="kpi-grid">
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">存款余额</span>
          <span class="ki-change up">↑ 2.1%</span>
        </div>
        <div class="ki-value">523.5<span class="ki-unit">亿</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">贷款余额</span>
          <span class="ki-change up">↑ 3.5%</span>
        </div>
        <div class="ki-value">386.2<span class="ki-unit">亿</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">营业收入</span>
          <span class="ki-change up">↑ 8.5%</span>
        </div>
        <div class="ki-value">56.8<span class="ki-unit">亿</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">利润总额</span>
          <span class="ki-change up">↑ 10.2%</span>
        </div>
        <div class="ki-value">18.6<span class="ki-unit">亿</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">客户总数</span>
          <span class="ki-change up">↑ 5.8%</span>
        </div>
        <div class="ki-value">328.6<span class="ki-unit">万</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">总资产</span>
          <span class="ki-change up">↑ 6.2%</span>
        </div>
        <div class="ki-value">1,256.8<span class="ki-unit">亿</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">总负债</span>
          <span class="ki-change up">↑ 4.8%</span>
        </div>
        <div class="ki-value">732.5<span class="ki-unit">亿</span></div>
      </div>
      <div class="kpi-item">
        <div class="ki-labels">
          <span class="ki-label">不良率</span>
          <span class="ki-change down">↓ 0.08%</span>
        </div>
        <div class="ki-value warn">1.26<span class="ki-unit">%</span></div>
      </div>
    </div>
    <div class="section-title" style="margin-top:6px;">指标趋势</div>
    <div class="mini-trends">
      <div class="mt-row"><span class="mt-name">存款</span><div class="mt-bar"><div class="mt-fill dep" style="width:87%"></div></div><span class="mt-val">523.5亿</span><span class="mt-pct up">+2.1%</span></div>
      <div class="mt-row"><span class="mt-name">贷款</span><div class="mt-bar"><div class="mt-fill loan" style="width:75%"></div></div><span class="mt-val">386.2亿</span><span class="mt-pct up">+3.5%</span></div>
      <div class="mt-row"><span class="mt-name">营收</span><div class="mt-bar"><div class="mt-fill rev" style="width:60%"></div></div><span class="mt-val">56.8亿</span><span class="mt-pct up">+8.5%</span></div>
      <div class="mt-row"><span class="mt-name">利润</span><div class="mt-bar"><div class="mt-fill profit" style="width:48%"></div></div><span class="mt-val">18.6亿</span><span class="mt-pct up">+10.2%</span></div>
      <div class="mt-row"><span class="mt-name">客户</span><div class="mt-bar"><div class="mt-fill cust" style="width:82%"></div></div><span class="mt-val">328.6万</span><span class="mt-pct up">+5.8%</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pc-core-indicators { height: 100%; display: flex; flex-direction: column; }
.section-title { font-size: 15px; font-weight: 600; color: #e0e8f0; padding: 6px 12px 4px; letter-spacing: 1px; flex-shrink: 0; }
.kpi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; padding: 0 8px; flex-shrink: 0; }
.kpi-item { padding: 6px 8px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; }
.ki-labels { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
.ki-label { font-size: 13px; color: #4a5a6a; }
.ki-change { font-size: 12px; font-weight: 600; &.up { color: #4FD8FF; } &.down { color: #FF5B5B; } }
.ki-value { font-size: 20px; font-weight: 700; font-family: 'Courier New',monospace; color: #e0e8f0; &.warn { color: #FF9F43; } .ki-unit { font-size: 13px; color: #4a5a6a; } }
.mini-trends { flex: 1; display: flex; flex-direction: column; gap: 3px; padding: 0 8px 6px; min-height: 0; }
.mt-row { display: flex; align-items: center; gap: 6px; padding: 2px 0; }
.mt-name { flex: 0 0 36px; font-size: 12px; color: #8899aa; }
.mt-bar { flex: 1; height: 8px; background: #0a1a2a; border-radius: 4px; overflow: hidden; }
.mt-fill { height: 100%; border-radius: 4px; &.dep { background: #4FD8FF; } &.loan { background: #6C7BFF; } &.rev { background: #FFD700; } &.profit { background: #00FFC6; } &.cust { background: #FF9F43; } }
.mt-val { flex: 0 0 56px; text-align: right; font-size: 12px; color: #8899aa; font-family: 'Courier New',monospace; }
.mt-pct { flex: 0 0 44px; text-align: right; font-size: 12px; font-weight: 600; &.up { color: #4FD8FF; } &.down { color: #FF5B5B; } }
</style>