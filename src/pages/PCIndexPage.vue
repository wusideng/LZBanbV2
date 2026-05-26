<template>
    <div class="index-page">
      <div class="index-bg"></div>
      <div class="index-content">
        <h1 class="index-title">PC银行经营驾驶舱系统</h1>
        <p class="index-subtitle">Banking Operations Cockpit System</p>
        <div class="screen-grid">
          <div class="screen-card" @click="goTo('/pctotal')">
            <div class="card-icon">📊</div>
            <div class="card-title" style="color: #FFD700;">PC端经营总览驾驶舱</div>
            <div class="card-desc">SmartBI风格 · 简洁商务 · 经营分析</div>
            <div class="card-status" style="color: #FFD700;"><span class="dot" style="background: #FFD700; box-shadow: 0 0 8px rgba(255,215,0,0.7);"></span> 点击进入</div>
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