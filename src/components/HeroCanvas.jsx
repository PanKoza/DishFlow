import { useEffect, useRef } from 'react'

const STAR_COUNT = 280
const SPEED_BASE = 0.00055
const SPEED_MAX  = 0.0048

// Brand palette star colors (weighted toward white/near-white for realism)
const COLORS = [
  [255, 255, 255],  // white      — most common
  [255, 255, 255],
  [255, 255, 255],
  [200, 160, 255],  // soft lilac
  [140, 100, 255],  // #6300FF tint
  [100, 160, 255],  // #3392FF tint
  [160, 255, 200],  // #33FF77 tint
]

class Star {
  constructor(W, H, init = false) {
    this.W = W
    this.H = H
    this.reset(init)
  }

  reset(far = false) {
    // Start near the center with some scatter
    this.x  = (Math.random() - 0.5) * this.W * 0.12
    this.y  = (Math.random() - 0.5) * this.H * 0.12
    this.z  = far ? Math.random() : Math.random() * 0.2 + 0.01  // depth 0=near 1=far
    this.pz = this.z
    this.speed = SPEED_BASE + Math.random() * (SPEED_MAX - SPEED_BASE)
    this.col = COLORS[Math.floor(Math.random() * COLORS.length)]
  }

  update() {
    this.pz = this.z
    this.z -= this.speed
    if (this.z <= 0) this.reset(false)
  }

  project(cx, cy) {
    const scale = 1 / this.z
    return {
      x:  cx + this.x * scale,
      y:  cy + this.y * scale,
      px: cx + this.x / this.pz,
      py: cy + this.y / this.pz,
      r:  Math.max(0.4, (1 - this.z) * 2.8),
    }
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W = 0, H = 0, CX = 0, CY = 0
    let stars = []

    function resize() {
      W  = canvas.width  = canvas.offsetWidth
      H  = canvas.height = canvas.offsetHeight
      CX = W * 0.5
      CY = H * 0.5
    }

    function init() {
      resize()
      stars = Array.from({ length: STAR_COUNT }, () => new Star(W, H, true))
    }

    // Slight cinematic vignette on canvas itself
    function drawVignette() {
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, Math.max(W, H) * 0.72)
      grd.addColorStop(0, 'rgba(0,0,0,0)')
      grd.addColorStop(1, 'rgba(7,0,26,0.72)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, W, H)
    }

    // Subtle core glow at warp origin
    function drawCore() {
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, 130)
      grd.addColorStop(0,   'rgba(99,0,255,0.22)')
      grd.addColorStop(0.4, 'rgba(9,0,255,0.08)')
      grd.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, W, H)
    }

    function loop() {
      // Persistent trail — semi-transparent fill creates the streak effect
      ctx.fillStyle = 'rgba(7,0,26,0.28)'
      ctx.fillRect(0, 0, W, H)

      drawCore()

      stars.forEach(star => {
        star.update()
        const p = star.project(CX, CY)

        // Don't draw if outside canvas
        if (p.x < -5 || p.x > W + 5 || p.y < -5 || p.y > H + 5) {
          star.reset(false)
          return
        }

        const progress = 1 - star.z            // 0=just spawned, 1=reached viewer
        const [r, g, b] = star.col
        const alpha = Math.min(1, progress * 2.5)

        // Draw streak from previous position to current
        const streakLen = Math.hypot(p.x - p.px, p.y - p.py)

        if (streakLen > 0.5) {
          const grad = ctx.createLinearGradient(p.px, p.py, p.x, p.y)
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`)
          grad.addColorStop(1, `rgba(${r},${g},${b},${alpha * 0.9})`)

          ctx.strokeStyle = grad
          ctx.lineWidth   = p.r
          ctx.lineCap     = 'round'

          // Glow on fast / near stars
          if (progress > 0.6) {
            ctx.shadowBlur  = 6 * progress
            ctx.shadowColor = `rgba(${r},${g},${b},${alpha * 0.5})`
          }

          ctx.beginPath()
          ctx.moveTo(p.px, p.py)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
          ctx.shadowBlur = 0
        } else {
          // Dot when still far (no streak yet)
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.7})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      drawVignette()

      animId = requestAnimationFrame(loop)
    }

    init()
    loop()

    const ro = new ResizeObserver(() => {
      resize()
      stars.forEach(s => { s.W = W; s.H = H })
    })
    ro.observe(canvas)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
