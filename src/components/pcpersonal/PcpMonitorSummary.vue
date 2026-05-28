<template>
  <div class="pcp-monitor">
    <div class="mon-block"><div class="mb-title">客户增长摘要</div><div class="mb-grid"><span>本月新增 <em class="hl">28,500户</em></span><span>同比 <em class="up">+8.2%</em></span><span>留存率 <em class="up">92.5%</em></span></div></div>
    <div class="mon-block"><div class="mb-title">渠道运营摘要</div><div class="mb-grid"><span>手机银行 <em class="hl">186.5万</em></span><span>月活 <em class="hl">152.3万</em></span><span>转化率 <em class="up">72.5%</em></span></div></div>
    <div class="mon-block"><div class="mb-title">财富业务摘要</div><div class="mb-grid"><span>理财余额 <em class="hl">286.5亿</em></span><span>基金 <em>12.8亿</em></span><span>保险 <em>5.6亿</em></span></div></div>
    <div class="mon-block"><div class="mb-title">风险预警</div><div class="mb-grid"><span>不良率 <em class="warn">1.26%</em></span><span>逾期率 <em class="warn">2.35%</em></span><span>风险客户 <em class="danger">186户</em></span></div></div>
  </div>
</template>

<style lang="scss" scoped>
.pcp-monitor { height: 100%; display: flex; flex-direction: column; gap: 4px; padding: 4px 8px 6px; overflow: hidden; }
.mon-block { flex: 1; padding: 5px 8px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; display: flex; flex-direction: column; justify-content: center; min-height: 0; }
.mb-title { font-size: 13px; font-weight: 600; color: #e0e8f0; letter-spacing: 1px; margin-bottom: 3px; }
.mb-grid { display: flex; flex-wrap: wrap; gap: 2px 8px; font-size: 12px; color: #8899aa; span { white-space: nowrap; } em { font-style: normal; font-weight: 600; margin-left: 2px; &.hl { color: #FFD700; } &.up { color: #4FD8FF; } &.warn { color: #FF9F43; } &.danger { color: #FF5B5B; } } }
</style>