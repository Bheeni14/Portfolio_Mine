"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, Star, GitFork, Eye } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  demo: string
  status: string
  stats: {
    stars: number
    forks: number
    views: number
  }
  features: string[]
}

interface InteractiveProjectCardProps {
  project: Project
  index: number
}

export function InteractiveProjectCard({ project, index }: InteractiveProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group perspective-1000 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsFlipped(false)
      }}
    >
      <div
        className={`relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
          {/* Animated background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            style={{
              background: "linear-gradient(45deg, #3b82f610, #8b5cf610, #3b82f610)",
              backgroundSize: "200% 200%",
              animation: isHovered ? "gradientShift 3s ease infinite" : "none",
            }}
          />

          {/* Image section with overlay */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            
            {/* Overlay with stats */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
                <div className="flex space-x-4 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    {project.stats.forks}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.stats.views}
                  </div>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="absolute top-4 right-4">
              <Badge
                variant={
                  project.status === "Completed"
                    ? "default"
                    : project.status === "In Progress"
                      ? "secondary"
                      : "outline"
                }
                className={`transition-all duration-300 ${
                  isHovered ? "scale-110 shadow-lg" : ""
                }`}
              >
                {project.status}
              </Badge>
            </div>

            {/* Play button overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/30"
                onClick={() => setIsFlipped(true)}
              >
                <Play className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>

          <CardHeader className="relative z-10">
            <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className={`text-xs transition-all duration-300 ${
                    isHovered ? "scale-105 border-blue-400 text-blue-600" : ""
                  }`}
                  style={{ transitionDelay: `${techIndex * 50}ms` }}
                >
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - 4} more
                </Badge>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1 group-hover:border-blue-400 group-hover:text-blue-600 transition-all duration-300"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">
              Project Details
            </CardTitle>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-4 right-4"
              onClick={() => setIsFlipped(false)}
            >
              ✕
            </Button>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
              <ul className="space-y-1">
                {project.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
