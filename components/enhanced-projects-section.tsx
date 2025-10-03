"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Eye,
  Calendar,
  Users,
  Code,
  Database,
  Brain,
  TrendingUp,
  Zap,
  Award,
  PlayCircle,
  BookOpen,
  Sparkles
} from "lucide-react"
import { useState, useEffect } from "react"

interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  demo: string
  status: string
  stats: { stars: number; forks: number; views: number }
  features: string[]
  category?: string
  complexity?: string
  duration?: string
  team?: number
}

interface EnhancedProjectsSectionProps {
  projects: Project[]
}

export function EnhancedProjectsSection({ projects }: EnhancedProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Enhanced projects with additional data
  const enhancedProjects: Project[] = [
    {
      ...projects[0],
      category: "Machine Learning",
      complexity: "Advanced",
      duration: "3 months",
      team: 1,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      ...projects[1],
      category: "Data Visualization",
      complexity: "Intermediate",
      duration: "2 months",
      team: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      ...projects[2],
      category: "Data Analysis",
      complexity: "Intermediate",
      duration: "1.5 months",
      team: 1,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      ...projects[3],
      category: "Machine Learning",
      complexity: "Advanced",
      duration: "4 months",
      team: 3,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    // Additional projects
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat app with real-time messaging and user authentication",
      longDescription: "A modern real-time chat application built with React, Node.js, and Socket.io featuring user authentication, real-time messaging, file sharing, and responsive design.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "Completed",
      stats: { stars: 42, forks: 15, views: 287 },
      features: ["Real-time messaging", "User authentication", "File sharing", "Responsive design"],
      category: "Full Stack",
      complexity: "Advanced",
      duration: "2 months",
      team: 2
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and Tailwind CSS",
      longDescription: "A responsive and interactive portfolio website showcasing my projects, skills, and experience. Built with modern web technologies and optimized for performance.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "Completed",
      stats: { stars: 28, forks: 9, views: 156 },
      features: ["Responsive design", "Dark mode", "Smooth animations", "SEO optimized"],
      category: "Web Development",
      complexity: "Intermediate",
      duration: "1 month",
      team: 1
    }
  ]

  const categories: string[] = ["all", ...Array.from(new Set(enhancedProjects.map(p => p.category).filter((cat): cat is string => Boolean(cat))))]
  const filteredProjects = filter === "all" 
    ? enhancedProjects 
    : enhancedProjects.filter(p => p.category === filter)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "in progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "planning": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case "advanced": return "text-red-600 dark:text-red-400"
      case "intermediate": return "text-yellow-600 dark:text-yellow-400"
      case "beginner": return "text-green-600 dark:text-green-400"
      default: return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/0 via-blue-50/30 to-purple-50/30 dark:from-gray-900/0 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work, demonstrating expertise in data science, machine learning, and full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 capitalize ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:scale-105 hover:border-blue-400"
              } backdrop-blur-sm`}
            >
              {category} {filter === category && `(${filteredProjects.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <Badge className={`absolute top-3 left-3 ${getStatusColor(project.status)} border-0 shadow-lg`}>
                  {project.status}
                </Badge>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full w-10 h-10 p-0"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full w-10 h-10 p-0"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-white text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.team} member{project.team !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className={`text-sm font-medium ${getComplexityColor(project.complexity || 'intermediate')}`}>
                      {project.complexity}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border-0">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1 text-blue-500" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1 text-green-500" />
                      {project.stats.views}
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border-0">
                    {project.category}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <MagneticButton className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm py-2">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    View Demo
                  </MagneticButton>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-600"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    <BookOpen className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-transparent to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Project Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {enhancedProjects.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Total Projects
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {enhancedProjects.reduce((acc, p) => acc + p.stats.stars, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Total Stars
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {[...new Set(enhancedProjects.flatMap(p => p.tech))].length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Technologies Used
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {enhancedProjects.filter(p => p.status === "Completed").length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Completed
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <MagneticButton className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
            <a href="#contact" className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Let's Build Something Amazing Together
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <Badge className={getStatusColor(selectedProject.status)}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </Button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </MagneticButton>
                <Button variant="outline" asChild>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}