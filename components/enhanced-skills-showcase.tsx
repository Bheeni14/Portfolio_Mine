"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Code, 
  Database, 
  Brain, 
  LineChart, 
  Code2, 
  Cpu,
  Globe,
  Cloud,
  Smartphone,
  Zap
} from "lucide-react"
import { useState, useEffect } from "react"

interface Skill {
  name: string
  level: number
  icon: any
  category: string
  color: string
  description: string
  projects: number
  trending?: boolean
  new?: boolean
}

interface EnhancedSkillsShowcaseProps {
  skills: Skill[]
}

export function EnhancedSkillsShowcase({ skills }: EnhancedSkillsShowcaseProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [filter, setFilter] = useState("all")
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([])

  const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))]

  // Enhanced skills with additional technologies
  const enhancedSkills: Skill[] = [
    ...skills,
    {
      name: "React/Next.js",
      level: 85,
      icon: Globe,
      category: "Web Dev",
      color: "#61dafb",
      description: "Modern React development with Next.js framework",
      projects: 6,
      trending: true
    },
    {
      name: "Node.js",
      level: 75,
      icon: Code2,
      category: "Backend",
      color: "#68a063",
      description: "Server-side JavaScript development",
      projects: 4,
    },
    {
      name: "MongoDB",
      level: 70,
      icon: Database,
      category: "Database",
      color: "#4db33d",
      description: "NoSQL database design and optimization",
      projects: 5,
    },
    {
      name: "AWS",
      level: 65,
      icon: Cloud,
      category: "Cloud",
      color: "#ff9900",
      description: "Cloud computing and deployment",
      projects: 3,
      new: true
    },
    {
      name: "TensorFlow",
      level: 80,
      icon: Brain,
      category: "AI/ML",
      color: "#ff6f00",
      description: "Deep learning framework for ML models",
      projects: 4,
    },
    {
      name: "Flutter",
      level: 60,
      icon: Smartphone,
      category: "Mobile",
      color: "#02569b",
      description: "Cross-platform mobile app development",
      projects: 2,
      new: true
    }
  ]

  useEffect(() => {
    const filtered = filter === "all" 
      ? enhancedSkills 
      : enhancedSkills.filter(skill => skill.category === filter)
    
    setVisibleSkills(filtered)
  }, [filter])

  const getSkillLevelColor = (level: number) => {
    if (level >= 85) return "from-green-500 to-emerald-600"
    if (level >= 75) return "from-blue-500 to-cyan-600"
    if (level >= 65) return "from-yellow-500 to-orange-600"
    return "from-red-500 to-pink-600"
  }

  const getSkillLevelText = (level: number) => {
    if (level >= 85) return "Expert"
    if (level >= 75) return "Advanced"
    if (level >= 65) return "Intermediate"
    return "Beginner"
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:scale-105 hover:border-blue-400"
              } backdrop-blur-sm capitalize`}
            >
              {category} {filter === category && `(${visibleSkills.length})`}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleSkills.map((skill, index) => (
            <Card
              key={`${skill.name}-${index}`}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 via-white/60 to-gray-50/80 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-900/80 backdrop-blur-lg hover:scale-105 transition-all duration-500 cursor-pointer ${
                hoveredSkill === skill.name ? "shadow-2xl" : "shadow-lg"
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated background gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}10, ${skill.color}05)`
                }}
              />

              {/* Badges */}
              <div className="absolute top-3 right-3 flex gap-1 z-10">
                {skill.trending && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 animate-pulse">
                    🔥 Hot
                  </Badge>
                )}
                {skill.new && (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1">
                    ✨ New
                  </Badge>
                )}
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Icon and Level Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon 
                      className="w-8 h-8" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <Badge 
                    className={`bg-gradient-to-r ${getSkillLevelColor(skill.level)} text-white font-medium px-3 py-1`}
                  >
                    {getSkillLevelText(skill.level)}
                  </Badge>
                </div>

                {/* Skill Name and Category */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {skill.category}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                      }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.projects} projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i < Math.floor(skill.level / 20)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-100'
                            : 'bg-gray-300 dark:bg-gray-600 scale-75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {enhancedSkills.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Technologies
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {Math.round(enhancedSkills.reduce((acc, skill) => acc + skill.level, 0) / enhancedSkills.length)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Avg Proficiency
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {enhancedSkills.reduce((acc, skill) => acc + skill.projects, 0)}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Total Projects
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Categories
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}