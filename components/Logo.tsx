'use client'

import React, { useEffect, useRef } from 'react'

const Logo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        let hue = 0
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          // Draw the circle
          ctx.beginPath()
          ctx.arc(25, 25, 20, 0, 2 * Math.PI)
          ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
          ctx.lineWidth = 3
          ctx.stroke()
          
          // Draw the play triangle
          ctx.beginPath()
          ctx.moveTo(20, 15)
          ctx.lineTo(35, 25)
          ctx.lineTo(20, 35)
          ctx.closePath()
          ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
          ctx.fill()
          
          hue = (hue + 1) % 360
          requestAnimationFrame(animate)
        }
        animate()
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center p-4 rounded-lg shadow-lg">
      <canvas ref={canvasRef} width="50" height="50" className="mr-2" />
      <div className="text-4xl font-bold">
        <span className="text-white">Ani</span>
        <span className="text-blue-500">Hub</span>
      </div>
    </div>
  )
}

export default Logo

