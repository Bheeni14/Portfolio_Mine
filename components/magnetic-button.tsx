"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function MagneticButton({ children, className = "", onClick, href, target, rel }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxDistance = 100
      
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        setPosition({
          x: deltaX * force * 0.3,
          y: deltaY * force * 0.3,
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    if (typeof document !== 'undefined') {
      document.addEventListener("mousemove", handleMouseMove)
      button.addEventListener("mouseleave", handleMouseLeave)
      button.addEventListener("mouseenter", handleMouseEnter)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        button.removeEventListener("mouseleave", handleMouseLeave)
        button.removeEventListener("mouseenter", handleMouseEnter)
      }
    }
  }, [])

  const ButtonComponent = href ? "a" : "button"

  return (
    <Button
      ref={buttonRef}
      className={`relative transition-all duration-300 ease-out ${className} ${
        isHovered ? "scale-110 shadow-2xl" : ""
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isHovered ? "scale(1.1)" : "scale(1)"}`,
      }}
      onClick={onClick}
      asChild={!!href}
    >
      {href ? (
        <a href={href} target={target} rel={rel}>
          {children}
        </a>
      ) : (
        children
      )}
    </Button>
  )
}
