"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Award,
  Star,
  Target,
  Zap,
  Users,
  Code,
  BookOpen,
  Briefcase,
  GraduationCap,
  Calendar,
  ExternalLink
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: "education" | "project" | "certification" | "competition" | "leadership"
  icon: any
  color: string
  details: string[]
  link?: string
  image?: string
  impact?: string
}

export function InteractiveAchievements() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const achievements: Achievement[] = [
    {
      id: "akgec-placement",
      title: "Training & Placement Cell Coordinator",
      description: "Leading placement coordination at AKGEC",
      date: "May 2025 - Present",
      category: "leadership",
      icon: Briefcase,
      color: "#8b5cf6",
      details: [
        "Organized 15+ successful recruitment drives",
        "Improved overall placement rate by 20%",
        "Mentored 50+ students in interview preparation",
        "Built partnerships with 10+ tech companies"
      ],
      impact: "Increased student placement success rate significantly"
    },
    {
      id: "team-footprints",
      title: "Creative Team Lead - Team Footprints",
      description: "Leading creative design initiatives",
      date: "May 2025 - Present",
      category: "leadership",
      icon: Users,
      color: "#f59e0b",
      details: [
        "Led creative team of 8+ members",
        "Designed 10+ event posters and materials",
        "Won 'Best Design Award' at college fest",
        "Increased event engagement by 40%"
      ],
      impact: "Enhanced visual communication across campus events"
    },
    {
      id: "data-science-gpa",
      title: "Academic Excellence in Data Science",
      description: "Achieved 8.5/10 GPA in CSE-DS",
      date: "September 2024 - Present",
      category: "education",
      icon: GraduationCap,
      color: "#3b82f6",
      details: [
        "Specialized in Data Science & Machine Learning",
        "Completed advanced coursework in AI/ML",
        "Active in technical societies and projects",
        "Consistent academic performance"
      ],
      impact: "Strong foundation in data science fundamentals"
    },
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction Model",
      description: "92% accuracy ML model implementation",
      date: "March 2025",
      category: "project",
      icon: Target,
      color: "#10b981",
      details: [
        "Implemented ensemble ML algorithms",
        "Advanced feature engineering techniques",
        "Created interactive visualizations",
        "Deployed model with 92% accuracy"
      ],
      impact: "Demonstrated expertise in practical ML applications",
      link: "#"
    },
    {
      id: "python-certification",
      title: "Python for Data Science Certification",
      description: "Advanced Python programming certification",
      date: "January 2025",
      category: "certification",
      icon: Award,
      color: "#ec4899",
      details: [
        "Advanced Python programming concepts",
        "Data manipulation with Pandas & NumPy",
        "Machine learning with Scikit-learn",
        "Data visualization techniques"
      ],
      impact: "Strengthened programming skills for data science"
    },
    {
      id: "hackathon-winner",
      title: "College Hackathon - 2nd Place",
      description: "Data analytics solution for student performance",
      date: "October 2024",
      category: "competition",
      icon: Trophy,
      color: "#f97316",
      details: [
        "Developed student performance analytics tool",
        "Created predictive models for academic success",
        "Built interactive dashboard interface",
        "Presented solution to industry experts"
      ],
      impact: "Recognized for innovative problem-solving approach"
    }
  ]

  const categories = [
    { name: "all", label: "All Achievements", icon: Star },
    { name: "education", label: "Education", icon: GraduationCap },
    { name: "project", label: "Projects", icon: Code },
    { name: "certification", label: "Certifications", icon: Award },
    { name: "competition", label: "Competitions", icon: Trophy },
    { name: "leadership", label: "Leadership", icon: Users }
  ]

  const filteredAchievements = selectedCategory === "all" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory)

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

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 via-blue-50/30 to-purple-50/30 dark:from-gray-900/50 dark:via-blue-900/10 dark:to-purple-900/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning, leadership, and technical excellence
          </p>
        </div>

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
              {selectedCategory === category.name && (
                <Badge className="ml-2 bg-white/20 text-white border-0 text-xs">
                  {filteredAchievements.length}
                </Badge>
              )}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className={`group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedAchievement(achievement)}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  className="capitalize"
                  style={{ backgroundColor: `${achievement.color}20`, color: achievement.color }}
                >
                  {achievement.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Icon and Date */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <achievement.icon 
                      className="w-8 h-8" 
                      style={{ color: achievement.color }}
                    />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {achievement.details.slice(0, 2).map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Zap className="w-3 h-3 mr-2 text-yellow-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                {achievement.impact && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      💡 {achievement.impact}
                    </p>
                  </div>
                )}

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedAchievement(achievement)
                    }}
                  >
                    View Details
                  </Button>
                  {achievement.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20"
                      asChild
                    >
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Achievement Detail Modal */}
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div 
                      className="p-3 rounded-2xl shadow-lg mr-4"
                      style={{ backgroundColor: `${selectedAchievement.color}20` }}
                    >
                      <selectedAchievement.icon 
                        className="w-8 h-8" 
                        style={{ color: selectedAchievement.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {selectedAchievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedAchievement.date}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedAchievement(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </Button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedAchievement.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {selectedAchievement.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <Zap className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedAchievement.impact && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
                      Impact & Results
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {selectedAchievement.impact}
                    </p>
                  </div>
                )}

                {selectedAchievement.link && (
                  <div className="flex justify-end">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      asChild
                    >
                      <a href={selectedAchievement.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {achievements.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Total Achievements
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {achievements.filter(a => a.category === 'leadership').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Leadership Roles
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {achievements.filter(a => a.category === 'project').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Major Projects
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {achievements.filter(a => a.category === 'certification').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Certifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}