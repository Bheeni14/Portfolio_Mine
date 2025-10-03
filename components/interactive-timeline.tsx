"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react'

interface TimelineItem {
  id: string
  type: "education" | "experience" | "achievement"
  title: string
  subtitle: string
  description: string
  period: string
  location?: string
  status: string
  highlights: string[]
  icon: typeof GraduationCap
  color: string
}

interface InteractiveTimelineProps {
  items: TimelineItem[]
}

export function InteractiveTimeline({ items }: InteractiveTimelineProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-item-id")
            if (itemId) {
              setVisibleItems((prev) => new Set([...prev, itemId]))
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    const timelineItems = timelineRef.current?.querySelectorAll("[data-item-id]")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-40 dark:opacity-60" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const isVisible = visibleItems.has(item.id)
          const isActive = activeItem === item.id

          return (
            <div
              key={item.id}
              data-item-id={item.id}
              className={`relative flex items-start space-x-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? "scale-110 shadow-2xl" : "scale-100"
                  }`}
                  style={{
                    background: isActive
                      ? `linear-gradient(45deg, ${item.color}, ${item.color}dd)`
                      : `linear-gradient(45deg, ${item.color}40, ${item.color}60)`,
                    boxShadow: isActive ? `0 8px 25px ${item.color}50` : `0 4px 15px ${item.color}30`,
                  }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Pulse effect */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ backgroundColor: `${item.color}40` }}
                  />
                )}
              </div>

              {/* Content card */}
              <Card
                className={`flex-1 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm ${
                  isActive ? "scale-105 shadow-2xl" : ""
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${item.color}15, ${item.color}08)`
                    : undefined,
                }}
              >
                {/* Animated background */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : ""
                  }`}
                  style={{
                    background: `linear-gradient(45deg, ${item.color}08, ${item.color}15, ${item.color}08)`,
                    backgroundSize: "200% 200%",
                    animation: isActive ? "gradientShift 3s ease infinite" : "none",
                  }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle
                        className={`text-xl mb-2 transition-all duration-300 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {item.title}
                      </CardTitle>
                      <CardDescription
                        className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                          isActive 
                            ? "text-transparent bg-clip-text bg-gradient-to-r" 
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                        style={{ 
                          backgroundImage: isActive ? `linear-gradient(to right, ${item.color}, ${item.color}cc)` : undefined,
                          WebkitBackgroundClip: isActive ? "text" : undefined,
                          WebkitTextFillColor: isActive ? "transparent" : undefined
                        }}
                      >
                        {item.subtitle}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.period}
                        </div>
                        {item.location && (
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge
                      variant={item.status === "Current" ? "default" : "secondary"}
                      className={`transition-all duration-300 ${
                        isActive ? "scale-110 shadow-lg" : ""
                      } ${
                        item.status === "Current" 
                          ? "bg-green-500 dark:bg-green-600 text-white" 
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                      style={{
                        backgroundColor: isActive && item.status === "Current" ? item.color : undefined,
                        boxShadow: isActive ? `0 4px 12px ${item.color}40` : undefined,
                      }}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>

                  {/* Highlights with animation */}
                  <div
                    className={`space-y-2 transition-all duration-500 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
                    }`}
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                    {item.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className={`flex items-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                          isActive ? "translate-x-2" : ""
                        }`}
                        style={{ transitionDelay: `${hIndex * 100}ms` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mr-3 transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? item.color : "#9ca3af",
                            boxShadow: isActive ? `0 0 8px ${item.color}60` : "none",
                            filter: isActive ? "brightness(1.2)" : "brightness(0.8) contrast(1.1)",
                          }}
                        />
                        <span className={isActive ? "font-medium" : ""}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${item.color}12, transparent)`,
                  }}
                />
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}
