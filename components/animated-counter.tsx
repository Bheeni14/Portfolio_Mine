'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      setCount(Math.floor(end * percentage))
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}
