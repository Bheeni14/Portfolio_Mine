"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Briefcase,
  GraduationCap,
  Code,
  BarChart,
  PieChart,
  Activity
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { AnimatedCounter } from "./animated-counter"

interface MetricCard {
  id: string
  title: string
  value: number
  unit: string
  target: number
  icon: any
  color: string
  trend: "up" | "down" | "stable"
  trendValue: number
  description: string
  category: "academic" | "leadership" | "technical" | "achievements"
}

interface Achievement {
  title: string
  date: string
  description: string
  category: string
  completed: boolean
}

export function PerformanceMetrics() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const metrics: MetricCard[] = [
    {
      id: "gpa",
      title: "Current GPA",
      value: 8.5,
      unit: "/10",
      target: 9.0,
      icon: GraduationCap,
      color: "#3b82f6",
      trend: "up",
      trendValue: 5.2,
      description: "Consistent academic performance in CSE-DS",
      category: "academic"
    },
    {
      id: "placement-rate",
      title: "Placement Success Rate",
      value: 89,
      unit: "%",
      target: 95,
      icon: Target,
      color: "#10b981",
      trend: "up",
      trendValue: 20,
      description: "Students successfully placed through coordination",
      category: "leadership"
    },
    {
      id: "students-mentored",
      title: "Students Mentored",
      value: 50,
      unit: "+",
      target: 75,
      icon: Users,
      color: "#8b5cf6",
      trend: "up",
      trendValue: 15,
      description: "Individual mentoring and career guidance",
      category: "leadership"
    },
    {
      id: "projects-completed",
      title: "Projects Completed",
      value: 12,
      unit: "",
      target: 15,
      icon: Code,
      color: "#f59e0b",
      trend: "up",
      trendValue: 8,
      description: "Technical projects across different domains",
      category: "technical"
    },
    {
      id: "ml-accuracy",
      title: "ML Model Accuracy",
      value: 92,
      unit: "%",
      target: 95,
      icon: Activity,
      color: "#ef4444",
      trend: "up",
      trendValue: 12,
      description: "Customer churn prediction model performance",
      category: "technical"
    },
    {
      id: "recruitment-drives",
      title: "Recruitment Drives",
      value: 15,
      unit: "",
      target: 20,
      icon: Briefcase,
      color: "#06b6d4",
      trend: "up",
      trendValue: 25,
      description: "Successfully organized placement events",
      category: "leadership"
    },
    {
      id: "certifications",
      title: "Certifications Earned",
      value: 8,
      unit: "",
      target: 12,
      icon: Award,
      color: "#ec4899",
      trend: "up",
      trendValue: 10,
      description: "Professional certifications in data science",
      category: "achievements"
    },
    {
      id: "team-size",
      title: "Team Members Led",
      value: 8,
      unit: "",
      target: 12,
      icon: Users,
      color: "#84cc16",
      trend: "stable",
      trendValue: 0,
      description: "Creative team members in Team Footprints",
      category: "leadership"
    }
  ]

  const achievements: Achievement[] = [
    {
      title: "Achieve 92% ML Model Accuracy",
      date: "March 2025",
      description: "Customer churn prediction model",
      category: "technical",
      completed: true
    },
    {
      title: "Lead Team Footprints to Design Award",
      date: "February 2025",
      description: "Won 'Best Design Award' at college fest",
      category: "leadership",
      completed: true
    },
    {
      title: "Coordinate 15+ Recruitment Drives",
      date: "January 2025",
      description: "Successfully organized placement events",
      category: "leadership",
      completed: true
    },
    {
      title: "Maintain 8.5+ GPA",
      date: "Ongoing",
      description: "Consistent academic excellence",
      category: "academic",
      completed: true
    },
    {
      title: "Mentor 75+ Students",
      date: "June 2025",
      description: "Expand mentoring program",
      category: "leadership",
      completed: false
    },
    {
      title: "Complete Data Science Specialization",
      date: "May 2025",
      description: "Advanced certification program",
      category: "achievements",
      completed: false
    }
  ]

  const categories = [
    { name: "all", label: "All Metrics", icon: BarChart },
    { name: "academic", label: "Academic", icon: GraduationCap },
    { name: "leadership", label: "Leadership", icon: Users },
    { name: "technical", label: "Technical", icon: Code },
    { name: "achievements", label: "Achievements", icon: Award }
  ]

  const filteredMetrics = selectedCategory === "all" 
    ? metrics 
    : metrics.filter(metric => metric.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const calculateOverallProgress = () => {
    const totalProgress = metrics.reduce((sum, metric) => {
      return sum + (metric.value / metric.target) * 100
    }, 0)
    return totalProgress / metrics.length
  }

  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return TrendingUp
      case "down": return TrendingUp
      case "stable": return Target
      default: return Target
    }
  }

  const getTrendColor = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up": return "text-green-500"
      case "down": return "text-red-500"
      case "stable": return "text-gray-500"
      default: return "text-gray-500"
    }
  }

  const completedAchievements = achievements.filter(a => a.completed).length
  const totalAchievements = achievements.length
  const achievementProgress = (completedAchievements / totalAchievements) * 100

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Performance Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time insights into academic performance, leadership impact, and technical achievements
          </p>
        </div>

        {/* Overall Progress Summary */}
        <Card className="mb-12 border-0 bg-gradient-to-r from-white/90 via-blue-50/50 to-purple-50/50 dark:from-gray-800/90 dark:via-blue-900/20 dark:to-purple-900/20 backdrop-blur-lg shadow-xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={Math.round(calculateOverallProgress() * 10) / 10} suffix="%" />
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Overall Progress
                </div>
                <Progress value={calculateOverallProgress()} className="mt-3" />
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={completedAchievements} />/{totalAchievements}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Goals Achieved
                </div>
                <Progress value={achievementProgress} className="mt-3" />
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={metrics.filter(m => m.trend === "up").length} />/{metrics.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Improving Metrics
                </div>
                <Progress value={(metrics.filter(m => m.trend === "up").length / metrics.length) * 100} className="mt-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:scale-105 hover:border-blue-400"
              } backdrop-blur-sm`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
              <Badge className="ml-2 bg-white/20 text-current border-0 text-xs">
                {category.name === "all" ? metrics.length : metrics.filter(m => m.category === category.name).length}
              </Badge>
            </button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredMetrics.map((metric, index) => {
            const progress = (metric.value / metric.target) * 100
            const TrendIcon = getTrendIcon(metric.trend)
            
            return (
              <Card
                key={metric.id}
                className={`group border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${metric.color}20` }}
                    >
                      <metric.icon 
                        className="w-6 h-6" 
                        style={{ color: metric.color }}
                      />
                    </div>
                    <Badge 
                      className="capitalize"
                      style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
                    >
                      {metric.category}
                    </Badge>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        <AnimatedCounter end={metric.unit === "/10" ? Math.round(metric.value * 10) / 10 : metric.value} />
                      </span>
                      <span className="text-lg text-gray-600 dark:text-gray-300 ml-1">
                        {metric.unit}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                      {metric.title}
                    </h3>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <span>Progress</span>
                      <span>{progress.toFixed(0)}%</span>
                    </div>
                    <Progress value={progress} style={{ color: metric.color }} />
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Target: {metric.target}{metric.unit}
                    </div>
                  </div>

                  {/* Trend */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center text-sm font-medium ${getTrendColor(metric.trend)}`}>
                      <TrendIcon className="w-4 h-4 mr-1" />
                      {metric.trend === "up" ? "+" : metric.trend === "down" ? "-" : ""}
                      {metric.trendValue > 0 ? `${metric.trendValue}%` : "Stable"}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      vs last period
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Goals & Achievements Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Goals */}
          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-blue-500" />
                Current Goals
              </h3>
              
              <div className="space-y-4">
                {achievements.filter(a => !a.completed).map((goal, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {goal.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {goal.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        Target: {goal.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                Recent Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.filter(a => a.completed).slice(0, 4).map((achievement, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        Completed: {achievement.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Insights */}
        <Card className="mt-12 border-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center">
              <PieChart className="w-6 h-6 mr-2 text-purple-500" />
              Performance Insights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {metrics.filter(m => (m.value / m.target) >= 0.8).length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Metrics Above 80%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Strong performance areas
                </div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {metrics.filter(m => m.trend === "up").length}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Improving Trends
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Positive growth trajectory
                </div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {Math.round(metrics.reduce((sum, m) => sum + m.trendValue, 0) / metrics.filter(m => m.trend === "up").length)}%
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Average Growth Rate
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Consistent improvement
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}