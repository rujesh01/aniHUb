'use client'

import React, { useEffect, useRef } from 'react'

const AdvancedLoader: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (svg) {
      const animatePath = svg.querySelector('#animatePath') as SVGPathElement
      if (animatePath) {
        const length = animatePath.getTotalLength()
        animatePath.style.strokeDasharray = `${length} ${length}`
        animatePath.style.strokeDashoffset = `${length}`
        animatePath.style.animation = 'dash 2s ease-in-out infinite'
      }
    }
  }, [])

  return (
    <div className="flex min-w-screen flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <svg ref={svgRef} width="200" height="200" viewBox="0 0 200 200" className="mb-8">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FD1C5" />
            <stop offset="100%" stopColor="#63B3ED" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradient)" strokeWidth="4" />
        <path
          id="animatePath"
          d="M100,10 a90,90 0 0,1 0,180 a90,90 0 0,1 0,-180"
          fill="none"
          stroke="#FFF"
          strokeWidth="4"
        />
        <text x="100" y="110" textAnchor="middle" fill="#FFF" fontSize="24" fontWeight="bold">
          AniHub
        </text>
      </svg>
      <div className="text-white text-2xl font-bold mb-4">
        {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <p className="text-blue-200 text-opacity-80">Preparing your anime adventure...</p>
    </div>
  )
}

export default AdvancedLoader

