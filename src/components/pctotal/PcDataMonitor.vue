<template>
  <div class="pc-data-monitor">
    <div class="monitor-section">
      <div class="section-title">风险监控</div>
      <div class="monitor-metrics">
        <div class="mm-item"><span class="mm-label">不良率</span><span class="mm-value warn">1.26%</span><span class="mm-change down">↓0.08%</span></div>
        <div class="mm-item"><span class="mm-label">逾期率</span><span class="mm-value warn">2.35%</span><span class="mm-change down">↓0.12%</span></div>
        <div class="mm-item"><span class="mm-label">拨备覆盖率</span><span class="mm-value safe">186.5%</span><span class="mm-change up">↑8.6%</span></div>
        <div class="mm-item"><span class="mm-label">风险客户</span><span class="mm-value danger">186户</span><span class="mm-change down">↓5户</span></div>
      </div>
    </div>
    <div class="monitor-section">
      <div class="section-title">预警信息</div>
      <div class="alert-list">
        <div class="alert-item high"><span class="al-dot"></span>高风险客户新增15户 - 白银分行</div>
        <div class="alert-item medium"><span class="al-dot"></span>关注类迁徙率上升0.5% - 庆阳分行</div>
        <div class="alert-item low"><span class="al-dot"></span>不良率1.26% 环比下降0.08%</div>
        <div class="alert-item low"><span class="al-dot"></span>拨备覆盖率186.5%运行正常</div>
      </div>
    </div>
    <div class="monitor-section">
      <div class="section-title">指标完成率</div>
      <div class="comp-list">
        <div class="comp-item"><span class="cp-label">营收目标</span><span class="cp-bar"><span class="cp-fill" style="width:68%"></span></span><span class="cp-val">68%</span></div>
        <div class="comp-item"><span class="cp-label">利润目标</span><span class="cp-bar"><span class="cp-fill" style="width:72%"></span></span><span class="cp-val">72%</span></div>
        <div class="comp-item"><span class="cp-label">存款目标</span><span class="cp-bar"><span class="cp-fill" style="width:85%"></span></span><span class="cp-val">85%</span></div>
        <div class="comp-item"><span class="cp-label">贷款目标</span><span class="cp-bar"><span class="cp-fill" style="width:78%"></span></span><span class="cp-val">78%</span></div>
      </div>
    </div>
    <div class="monitor-section">
      <div class="section-title">数据监控</div>
      <div class="status-list">
        <div class="status-item"><span class="st-dot green"></span>数据同步 <span class="st-text">正常</span></div>
        <div class="status-item"><span class="st-dot green"></span>经营监控 <span class="st-text">运行中</span></div>
        <div class="status-item"><span class="st-dot yellow"></span>风险扫描 <span class="st-text">进行中</span></div>
        <div class="status-item"><span class="st-dot green"></span>数据更新 <span class="st-text">已同步</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pc-data-monitor { height: 100%; display: flex; gap: 8px; padding: 0 8px 6px; }
.monitor-section { flex: 1; padding: 4px 10px; background: #0a1628; border: 1px solid #1a2a4a; border-radius: 4px; display: flex; flex-direction: column; }
.section-title { font-size: 14px; font-weight: 600; color: #e0e8f0; letter-spacing: 1px; flex-shrink: 0; padding-bottom: 4px; border-bottom: 1px solid #1a2a4a; margin-bottom: 4px; }
.monitor-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; flex-shrink: 0; }
.mm-item { padding: 4px 6px; background: #0a1a2a; border-radius: 3px; .mm-label { display: block; font-size: 11px; color: #4a5a6a; } .mm-value { font-size: 16px; font-weight: 700; font-family: 'Courier New',monospace; &.warn { color: #FF9F43; } &.safe { color: #4FD8FF; } &.danger { color: #FF5B5B; } } .mm-change { font-size: 11px; font-weight: 600; &.up { color: #4FD8FF; } &.down { color: #00FFC6; } } }
.alert-list { display: flex; flex-direction: column; gap: 3px; flex-shrink: 0; }
.alert-item { display: flex; align-items: center; gap: 4px; font-size: 13px; color: #8899aa; padding: 2px 0; &.high .al-dot { background: #FF5B5B; } &.medium .al-dot { background: #FF9F43; } &.low .al-dot { background: #4FD8FF; } }
.al-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }
.comp-list { display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; }
.comp-item { display: flex; align-items: center; gap: 6px; .cp-label { flex: 0 0 56px; font-size: 13px; color: #4a5a6a; } .cp-bar { flex: 1; height: 6px; background: #0a1a2a; border-radius: 3px; overflow: hidden; } .cp-fill { height: 100%; background: linear-gradient(90deg,#4FD8FF,#6C7BFF); border-radius: 3px; } .cp-val { flex: 0 0 32px; text-align: right; font-size: 12px; font-weight: 600; color: #e0e8f0; font-family: 'Courier New',monospace; } }
.status-list { display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; }
.status-item { display: flex; align-items: center; gap: 4px; font-size: 13px; color: #8899aa; .st-dot { width: 5px; height: 5px; border-radius: 50%; &.green { background: #00FFC6; } &.yellow { background: #FFD700; } } .st-text { color: #e0e8f0; margin-left: 4px; } }
</style>