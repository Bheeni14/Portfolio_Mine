"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

/* ---------- Types ---------- */
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

/* ---------- Component (ALL items shown) ---------- */
export function EnhancedSkillsShowcase({ skills }: EnhancedSkillsShowcaseProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([])

  const categories = ["all", ...Array.from(new Set(skills.map(skill => skill.category)))]

  useEffect(() => {
    const filtered = filter === "all" ? skills : skills.filter(skill => skill.category === filter)
    setVisibleSkills(filtered)
  }, [filter, skills])

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 border-2 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg"
                  : "bg-white/5 dark:bg-white/3 text-gray-300 border-gray-700 hover:scale-105"
              }`}
            >
              {category === "all" ? `All (${skills.length})` : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
            {visibleSkills.map((skill, index) => (
              <Card
                key={`${skill.name}-${index}`}
                className="group relative overflow-visible border-0 bg-gradient-to-br from-white/5 to-transparent dark:from-gray-800/70 dark:to-transparent backdrop-blur-md hover:scale-105 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 30}ms` }}
              >
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl shadow-md transition-transform" style={{ backgroundColor: `${skill.color}20` }}>
                      <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                    </div>
                    <Badge className={`bg-gradient-to-r ${getSkillLevelColor(skill.level)} text-white font-medium px-3 py-1`}>
                      {getSkillLevelText(skill.level)}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">{skill.name}</h3>
                    <p className="text-xs text-gray-400 font-medium">{skill.category}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Proficiency</span>
                      <span className="text-sm font-bold text-gray-100">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} transition-all duration-700`} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{skill.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                      {skill.projects} projects
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < Math.floor(skill.level / 20) ? "bg-indigo-500" : "bg-gray-700"}`} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          Showing <strong className="text-white">{visibleSkills.length}</strong> skills — filter: <span className="text-white">{filter}</span>
        </div>
      </div>
    </section>
  )
}

/* ---------- Skills array (from your list) ---------- */
const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 90, icon: Code, category: "Programming Languages", color: "#3776AB", description: "Advanced Python programming with focus on data science & scripting", projects: 18, trending: true },
  { name: "Java", level: 75, icon: Code, category: "Programming Languages", color: "#b07219", description: "Core Java, OOP, and backend fundamentals", projects: 6 },
  { name: "SQL", level: 80, icon: Database, category: "Programming Languages", color: "#f29111", description: "Designing queries, joins, indexing & optimizations (MySQL/Postgres/SQL)", projects: 9 },
  { name: "JavaScript", level: 88, icon: Code2, category: "Programming Languages", color: "#F0DB4F", description: "Modern JS (ES6+), DOM, async programming", projects: 20, trending: true },
  { name: "HTML", level: 95, icon: Code, category: "Programming Languages", color: "#E34F26", description: "Semantic HTML and accessibility-first markup", projects: 22 },
  { name: "CSS", level: 92, icon: Code, category: "Programming Languages", color: "#2965F1", description: "Responsive design, Flexbox, Grid, animations", projects: 20 },

  // Data Science Libraries
  { name: "Pandas", level: 88, icon: LineChart, category: "Data Science Libraries", color: "#150458", description: "Data cleaning, transformation and aggregation", projects: 14 },
  { name: "NumPy", level: 86, icon: LineChart, category: "Data Science Libraries", color: "#013243", description: "Numerical computing and array operations", projects: 12 },
  { name: "Matplotlib", level: 80, icon: LineChart, category: "Data Science Libraries", color: "#2D2D6A", description: "Static visualizations and plotting", projects: 8 },
  { name: "Seaborn", level: 78, icon: LineChart, category: "Data Science Libraries", color: "#2F4F4F", description: "Statistical visualizations built on Matplotlib", projects: 6 },
  { name: "Scikit-learn", level: 84, icon: Brain, category: "Data Science Libraries", color: "#F7931E", description: "Classical ML algorithms, pipelines and evaluation", projects: 10 },
  { name: "TensorFlow", level: 80, icon: Brain, category: "Data Science Libraries", color: "#FF6F00", description: "Deep learning frameworks and model training", projects: 5, new: true },
  { name: "Keras", level: 78, icon: Brain, category: "Data Science Libraries", color: "#D00000", description: "High-level neural networks API (TensorFlow backend)", projects: 4 },

  // Machine Learning concepts
  { name: "Supervised Learning", level: 82, icon: Brain, category: "Machine Learning", color: "#8A2BE2", description: "Regression, classification, and supervised algorithms", projects: 12 },
  { name: "Unsupervised Learning", level: 75, icon: Brain, category: "Machine Learning", color: "#6A5ACD", description: "Clustering, dimensionality reduction", projects: 6 },
  { name: "Regression", level: 80, icon: Brain, category: "Machine Learning", color: "#FFB84D", description: "Linear/logistic/regularized regression techniques", projects: 9 },
  { name: "Classification", level: 80, icon: Brain, category: "Machine Learning", color: "#FF8A65", description: "Decision trees, ensembles, SVMs, metrics", projects: 9 },
  { name: "Model Evaluation", level: 83, icon: Brain, category: "Machine Learning", color: "#4CAF50", description: "Cross-validation, metrics, bias-variance tradeoff", projects: 11 },

  // Data Analysis Tools
  { name: "Jupyter Notebook", level: 90, icon: LineChart, category: "Data Analysis Tools", color: "#F37626", description: "Interactive experiments, notebooks & prototyping", projects: 20 },
  { name: "Google Colab", level: 85, icon: Cloud, category: "Data Analysis Tools", color: "#4285F4", description: "Cloud notebooks with GPU support", projects: 10 },
  { name: "Excel", level: 75, icon: Code, category: "Data Analysis Tools", color: "#217346", description: "Data cleaning, pivot tables and charts", projects: 8 },
  { name: "Tableau", level: 70, icon: LineChart, category: "Data Analysis Tools", color: "#E97627", description: "Interactive dashboards & visual analytics", projects: 4 },
  { name: "Power BI", level: 68, icon: LineChart, category: "Data Analysis Tools", color: "#00A4EF", description: "Business analytics and dashboards", projects: 3 },

  // Database Technologies
  { name: "MySQL", level: 78, icon: Database, category: "Database Technologies", color: "#4479A1", description: "Relational DB design & queries", projects: 7 },
  { name: "PostgreSQL", level: 75, icon: Database, category: "Database Technologies", color: "#336791", description: "Advanced SQL, indexing and transactions", projects: 6 },
  { name: "MongoDB", level: 72, icon: Database, category: "Database Technologies", color: "#4db33d", description: "NoSQL schema design and aggregation", projects: 7 },

  // Developer Tools
  { name: "Git", level: 92, icon: Code, category: "Developer Tools", color: "#F1502F", description: "Version control, branching & PR workflows", projects: 40 },
  { name: "GitHub", level: 90, icon: Code, category: "Developer Tools", color: "#181717", description: "Repositories, Actions, issues & collaboration", projects: 30 },
  { name: "VS Code", level: 88, icon: Code, category: "Developer Tools", color: "#007ACC", description: "Editor, debugging and extensions", projects: 25 },
  { name: "REST APIs", level: 85, icon: Code2, category: "Developer Tools", color: "#7b61ff", description: "Designing and consuming HTTP APIs", projects: 18 },
  { name: "Postman", level: 80, icon: Code2, category: "Developer Tools", color: "#FF6C37", description: "API testing and collections", projects: 10 },

  // Core Competencies (interpreted from 'Core Compete')
  { name: "Data Structures & Algorithms", level: 72, icon: Cpu, category: "Core Competencies", color: "#004482", description: "DSA fundamentals, problem solving and complexity analysis", projects: 12 },
  { name: "Problem Solving", level: 80, icon: Code, category: "Core Competencies", color: "#00BFA6", description: "Competitive programming & logical reasoning", projects: 15 },
  { name: "System Design Basics", level: 65, icon: Globe, category: "Core Competencies", color: "#FF7043", description: "Designing scalable systems and APIs", projects: 3 }
]

/* ---------- Default export ---------- */
export default function SkillsClient() {
  return <EnhancedSkillsShowcase skills={skills} />
}
