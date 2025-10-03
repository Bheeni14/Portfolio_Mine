"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { type LucideIcon } from 'lucide-react'

interface InteractiveSkillCardProps {
  skill: {
    name: string
    level: number
    icon: LucideIcon
    category: string
    color: string
    description: string
    projects: number
  }
  index: number
}

export function InteractiveSkillCard({ skill, index }: InteractiveSkillCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bar
          setTimeout(() => {
            setAnimatedLevel(skill.level)
          }, index * 200)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [skill.level, index])

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: isHovered
          ? `linear-gradient(135deg, ${skill.color}15, ${skill.color}25)`
          : "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          background: `linear-gradient(45deg, ${skill.color}10, ${skill.color}20, ${skill.color}10)`,
          backgroundSize: "200% 200%",
          animation: isHovered ? "gradientShift 3s ease infinite" : "none",
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
            style={{
              backgroundColor: skill.color,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: isHovered ? `float ${2 + i * 0.5}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <CardContent className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div
              className={`p-3 rounded-xl transition-all duration-300 ${
                isHovered ? "scale-110 rotate-12" : ""
              }`}
              style={{
                backgroundColor: `${skill.color}20`,
                boxShadow: isHovered ? `0 8px 25px ${skill.color}30` : "none",
              }}
            >
              <skill.icon
                className="w-6 h-6 transition-all duration-300"
                style={{ color: skill.color }}
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {skill.name}
              </h3>
              <Badge
                variant="outline"
                className="text-xs mt-1 border-gray-300 group-hover:border-blue-400 group-hover:text-blue-600 transition-all duration-300"
              >
                {skill.category}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div
              className="text-2xl font-bold transition-all duration-300"
              style={{ color: isHovered ? skill.color : "#6b7280" }}
            >
              {animatedLevel}%
            </div>
            <div className="text-xs text-gray-500">{skill.projects} projects</div>
          </div>
        </div>

        <div className="space-y-3">
          <Progress
            value={animatedLevel}
            className="h-2 transition-all duration-1000"
            style={{
              background: "rgba(0,0,0,0.1)",
            }}
          />
          <p className="text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {skill.description}
          </p>
        </div>

        {/* Skill level indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: `linear-gradient(45deg, ${skill.color}, ${skill.color}dd)`,
              boxShadow: `0 4px 15px ${skill.color}40`,
            }}
          >
            {Math.floor(skill.level / 20)}★
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
