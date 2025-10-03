'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const currentProgress = window.scrollY
        const scrollHeight = document.body.scrollHeight - window.innerHeight
        
        if (scrollHeight) {
          setScrollProgress((currentProgress / scrollHeight) * 100)
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateScrollProgress)
      return () => window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
