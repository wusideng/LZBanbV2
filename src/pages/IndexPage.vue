<template>
  <div class="index-page">
    <div class="index-bg"></div>
    <div class="index-content">
      <h1 class="index-title">银行经营驾驶舱系统</h1>
      <p class="index-subtitle">Banking Operations Cockpit System</p>
      <div class="screen-grid">
        <div class="screen-card" @click="goTo('/finance')">
          <div class="card-icon">📊</div>
          <div class="card-title">个人金融经营驾驶舱</div>
          <div class="card-desc">零售经营总览 · 资产负债 · 客户分析</div>
          <div class="card-status"><span class="dot"></span> 点击进入</div>
        </div>
        <div class="screen-card" @click="goTo('/channel')">
          <div class="card-icon">📱</div>
          <div class="card-title">客户经营与渠道运营驾驶舱</div>
          <div class="card-desc">客户增长 · 渠道转化 · 运营监控</div>
          <div class="card-status"><span class="dot"></span> 点击进入</div>
        </div>
        <div class="screen-card" @click="goTo('/wealth')">
          <div class="card-icon">👑</div>
          <div class="card-title">财富管理专题驾驶舱</div>
          <div class="card-desc">AUM分析 · 财富客户 · 产品销售</div>
          <div class="card-status"><span class="dot"></span> 点击进入</div>
        </div>
        <div class="screen-card" @click="goTo('/loan')">
          <div class="card-icon">💰</div>
          <div class="card-title" style="color: #FF8A34;">个贷与消费金融驾驶舱</div>
          <div class="card-desc">贷款总览 · 放款经营 · 风险监控</div>
          <div class="card-status" style="color: #FF8A34;"><span class="dot" style="background: #FF8A34; box-shadow: 0 0 8px rgba(255,138,52,0.7);"></span> 点击进入</div>
        </div>
        <div class="screen-card" @click="goTo('/digital')">
          <div class="card-icon">📱</div>
          <div class="card-title" style="color: #00E5FF;">手机银行与线上运营驾驶舱</div>
          <div class="card-desc">数字用户 · 渠道活跃 · 交易运营</div>
          <div class="card-status" style="color: #00E5FF;"><span class="dot" style="background: #00E5FF; box-shadow: 0 0 8px rgba(0,229,255,0.7);"></span> 点击进入</div>
        </div>
        <div class="screen-card" @click="goTo('/risk')">
          <div class="card-icon">🛡️</div>
          <div class="card-title" style="color: #00FF99;">风险预警与经营监控驾驶舱</div>
          <div class="card-desc">风险迁徙 · 区域风险 · 异常监控</div>
          <div class="card-status" style="color: #00FF99;"><span class="dot" style="background: #00FF99; box-shadow: 0 0 8px rgba(0,255,153,0.7);"></span> 点击进入</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goTo(path) {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
}
.index-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(0, 153, 255, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(0, 240, 255, 0.04) 0%, transparent 50%);
}
.index-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.index-title {
  font-size: 42px;
  font-weight: 700;
  color: #0099ff;
  text-shadow: 0 0 30px rgba(0, 153, 255, 0.4);
  letter-spacing: 8px;
  margin-bottom: 12px;
}
.index-subtitle {
  font-size: 18px;
  color: #4a5a6a;
  letter-spacing: 4px;
  margin-bottom: 60px;
}
.screen-grid {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}
.screen-card {
  width: 320px;
  padding: 36px 28px;
  background: rgba(5, 5, 8, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 153, 255, 0.15);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s;
  text-align: center;
  &:hover {
    border-color: #0099ff;
    box-shadow: 0 0 30px rgba(0, 153, 255, 0.2);
    transform: translateY(-4px);
  }
}
.card-icon { font-size: 48px; margin-bottom: 16px; }
.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #33ddff;
  margin-bottom: 8px;
}
.card-desc {
  font-size: 15px;
  color: #8899aa;
  margin-bottom: 16px;
}
.card-status {
  font-size: 14px;
  color: #00ff95;
  .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #00ff95;
    border-radius: 50%;
    margin-right: 6px;
    animation: breathe 1.5s ease-in-out infinite;
  }
}
@keyframes breathe {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
</style>