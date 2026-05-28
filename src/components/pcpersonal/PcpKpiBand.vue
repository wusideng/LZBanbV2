<template>
  <div class="pcp-kpi-band">
    <div class="kpi-row">
      <div class="kpi-card"><div class="k-label">个人客户总数</div><div class="k-value">328.6<span class="k-unit">万</span></div><div class="k-change up">↑ 5.8%</div></div>
      <div class="kpi-card"><div class="k-label">活跃客户数</div><div class="k-value">186.2<span class="k-unit">万</span></div><div class="k-change up">↑ 3.5%</div></div>
      <div class="kpi-card"><div class="k-label">月均AUM</div><div class="k-value">856.8<span class="k-unit">亿</span></div><div class="k-change up">↑ 6.2%</div></div>
      <div class="kpi-card"><div class="k-label">财富客户</div><div class="k-value">28.6<span class="k-unit">万</span></div><div class="k-change up">↑ 9.8%</div></div>
      <div class="kpi-card"><div class="k-label">手机银行开户</div><div class="k-value">186.5<span class="k-unit">万</span></div><div class="k-change up">↑ 8.6%</div></div>
      <div class="kpi-card"><div class="k-label">月交易笔数</div><div class="k-value">3,856<span class="k-unit">万</span></div><div class="k-change up">↑ 9.8%</div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pcp-kpi-band { padding: 0 18px; }
.kpi-row { display: flex; gap: 8px; }
.kpi-card { flex: 1; padding: 8px 10px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; text-align: center; }
.k-label { font-size: 14px; color: #4a5a6a; margin-bottom: 2px; }
.k-value { font-size: 22px; font-weight: 700; color: #e0e8f0; font-family: 'Courier New',monospace; .k-unit { font-size: 14px; color: #4a5a6a; } }
.k-change { font-size: 13px; font-weight: 600; &.up { color: #4FD8FF; } }
</style>