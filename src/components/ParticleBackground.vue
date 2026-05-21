<template>
  <canvas ref="canvasRef" class="particle-bg"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let particles = []

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.size = Math.random() * 2 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.4
    this.speedY = (Math.random() - 0.5) * 0.4
    this.opacity = Math.random() * 0.5 + 0.1
  }
  update(w, h) {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x < 0) this.x = w
    if (this.x > w) this.x = 0
    if (this.y < 0) this.y = h
    if (this.y > h) this.y = 0
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 153, 255, ${this.opacity})`
    ctx.fill()
  }
}

function initParticles(w, h) {
  const count = Math.min(80, Math.floor((w * h) / 30000))
  particles = Array.from({ length: count }, () => new Particle(w, h))
}

function drawLines(ctx, w, h) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(0, 153, 255, ${0.08 * (1 - dist / 150)})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0, 0, w, h)
  particles.forEach(p => {
    p.update(w, h)
    p.draw(ctx)
  })
  drawLines(ctx, w, h)
  animationId = requestAnimationFrame(animate)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initParticles(canvas.width, canvas.height)
}

onMounted(() => {
  resize()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.particle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>