import { useEffect, useRef } from 'react'

export default function DitherBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    // bayer 4x4 threshold matrix
    const bayer4 = [
      [ 0,  8,  2, 10],
      [12,  4, 14,  6],
      [ 3, 11,  1,  9],
      [15,  7, 13,  5],
    ]

    function draw() {
      const W = window.innerWidth
      const H = window.innerHeight
      canvas.width = W
      canvas.height = H

      const imageData = ctx.createImageData(W, H)
      const data = imageData.data

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const bx = x % 4
          const by = y % 4
          const threshold = (bayer4[by][bx] / 16)

          // gentle noise via trig
          const nx = x / W
          const ny = y / H
          const noise =
            0.5 +
            0.2 * Math.sin(nx * 12 + ny * 8) +
            0.15 * Math.sin(nx * 7 - ny * 11) +
            0.1 * Math.sin((nx + ny) * 15) +
            0.05 * Math.sin(nx * 23 + ny * 19)

          const pixel = noise > threshold ? 1 : 0

          const idx = (y * W + x) * 4
          if (pixel) {
            // faint light-purple dot: #c9b3ee at very low opacity
            data[idx]     = 201 // r
            data[idx + 1] = 179 // g
            data[idx + 2] = 238 // b
            data[idx + 3] = 12  // alpha — very subtle
          }
          // else: fully transparent — gradient shows through
        }
      }

      ctx.putImageData(imageData, 0, 0)
    }

    draw()

    const handleResize = () => draw()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
