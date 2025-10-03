"use client"

import { useEffect, useState } from "react"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingParticles } from "@/components/floating-particles"
import { InteractiveTimeline } from "@/components/interactive-timeline"

// Enhanced Components
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedSkillsShowcase } from "@/components/enhanced-skills-showcase"
import { EnhancedProjectsSection } from "@/components/enhanced-projects-section"
import { EnhancedContactSection } from "@/components/enhanced-contact-section"
import { EnhancedFooter } from "@/components/enhanced-footer"

// New Advanced Components
import { InteractiveAchievements } from "@/components/interactive-achievements"
import { LiveGitHubActivity } from "@/components/live-github-activity"
import { PerformanceMetrics } from "@/components/performance-metrics"

import {
  Code,
  Database,
  Brain,
  LineChart,
  Code2,
  Cpu,
  GraduationCap,
  Briefcase,
} from "lucide-react"

export default function EnhancedPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "education",
        "experience",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const skills = [
    {
      name: "Python",
      level: 85,
      icon: Code,
      category: "Programming",
      color: "#3776ab",
      description: "Advanced Python programming with focus on data science libraries and frameworks",
      projects: 8,
    },
    {
      name: "Data Analysis",
      level: 90,
      icon: LineChart,
      category: "Data Science",
      color: "#ff6b6b",
      description: "Expert in data manipulation, visualization, and statistical analysis",
      projects: 12,
    },
    {
      name: "Machine Learning",
      level: 80,
      icon: Brain,
      category: "AI/ML",
      color: "#4ecdc4",
      description: "Proficient in ML algorithms, model training, and deployment",
      projects: 6,
    },
    {
      name: "Java",
      level: 75,
      icon: Code2,
      category: "Programming",
      color: "#f39c12",
      description: "Strong foundation in Java programming and object-oriented design",
      projects: 5,
    },
    {
      name: "HTML/CSS",
      level: 85,
      icon: Code,
      category: "Web Dev",
      color: "#e74c3c",
      description: "Modern web development with responsive design principles",
      projects: 10,
    },
    {
      name: "DSA",
      level: 70,
      icon: Cpu,
      category: "Programming",
      color: "#9b59b6",
      description: "Data structures and algorithms for efficient problem solving",
      projects: 4,
    },
    {
      name: "Statistics",
      level: 80,
      icon: Database,
      category: "Data Science",
      color: "#1abc9c",
      description: "Statistical analysis and hypothesis testing for data insights",
      projects: 7,
    },
    {
      name: "SQL",
      level: 75,
      icon: Database,
      category: "Database",
      color: "#3498db",
      description: "Database design, optimization, and complex query writing",
      projects: 9,
    },
  ]

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "ML model to predict customer churn using Python and scikit-learn with 92% accuracy",
      longDescription:
        "A comprehensive machine learning project that analyzes customer behavior patterns to predict churn. Uses advanced feature engineering and ensemble methods to achieve high accuracy.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "Completed",
      stats: { stars: 24, forks: 8, views: 156 },
      features: [
        "Advanced feature engineering",
        "Ensemble model implementation",
        "Interactive visualizations",
        "Model performance metrics",
      ],
    },
    {
      title: "Sales Dashboard Analytics",
      description: "Interactive dashboard for sales data visualization using Python and Streamlit",
      longDescription:
        "A real-time sales analytics dashboard that provides insights into sales performance, trends, and forecasting using modern data visualization techniques.",
      tech: ["Python", "Streamlit", "Plotly", "SQL", "Pandas"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress",
      stats: { stars: 18, forks: 5, views: 89 },
      features: ["Real-time data updates", "Interactive charts", "Sales forecasting", "Performance metrics"],
    },
    {
      title: "Student Performance Analyzer",
      description: "Data analysis project examining factors affecting student academic performance",
      longDescription:
        "Comprehensive analysis of student performance data to identify key factors affecting academic success and provide actionable insights for educational improvement.",
      tech: ["Python", "Jupyter", "Seaborn", "NumPy", "Scipy"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "Completed",
      stats: { stars: 31, forks: 12, views: 203 },
      features: ["Statistical analysis", "Correlation studies", "Predictive modeling", "Educational insights"],
    },
    {
      title: "E-commerce Recommendation System",
      description: "Collaborative filtering recommendation system for e-commerce platform",
      longDescription:
        "Advanced recommendation system using collaborative filtering and content-based approaches to provide personalized product recommendations for e-commerce users.",
      tech: ["Python", "TensorFlow", "Flask", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      status: "Planning",
      stats: { stars: 7, forks: 2, views: 45 },
      features: [
        "Collaborative filtering",
        "Content-based recommendations",
        "Real-time processing",
        "Scalable architecture",
      ],
    },
  ]

  const timelineItems = [
    {
      id: "akgec",
      type: "education" as const,
      title: "AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD",
      subtitle: "Bachelor of Technology - BTech",
      description:
        "Computer Science & Engineering (Data Science) - Currently pursuing my degree with focus on data science, machine learning, and software development.",
      period: "September 2024 - September 2027",
      location: "Ghaziabad, Uttar Pradesh, India",
      status: "Current",
      highlights: [
        "Data Science Specialization with 9.4/10 CGPA",
        "Active member of Training & Placement Cell",
        "Team Footprints Creative Team Member",
        "Completed multiple data science projects",
      ],
      icon: GraduationCap,
      color: "#3b82f6",
    },
    {
      id: "galgotias",
      type: "education" as const,
      title: "Galgotias University",
      subtitle: "Polytechnic Diploma",
      description:
        "Computer Science and Engineering - Built strong foundation in programming, web development, and computer science fundamentals.",
      period: "August 2022 - May 2024",
      location: "Greater Noida, Uttar Pradesh, India",
      status: "Completed",
      highlights: [
        "Strong foundation in programming with 9.4/10 CGPA",
        "Web development projects and technical skills",
        "Active participation in technical societies",
        "Leadership roles in student activities",
      ],
      icon: GraduationCap,
      color: "#10b981",
    },
    {
      id: "placement-coordinator",
      type: "experience" as const,
      title: "Training and Placement Akgec",
      subtitle: "Coordinator of Training and Placement Cell",
      description:
        "Leading placement coordination activities, organizing recruitment drives, and facilitating student-industry connections to improve placement outcomes.",
      period: "May 2025 - Present",
      location: "Ghaziabad, Uttar Pradesh, India",
      status: "Current",
      highlights: [
        "Organized 15+ successful recruitment drives",
        "Improved overall placement rate by 20%",
        "Mentored 50+ students in interview preparation",
        "Built strong industry partnerships",
      ],
      icon: Briefcase,
      color: "#8b5cf6",
    },
    {
      id: "team-footprints",
      type: "experience" as const,
      title: "Team Footprints",
      subtitle: "Artist & Creative Designer",
      description:
        "Contributing creative design solutions and artistic elements to enhance team projects, college events, and promotional materials.",
      period: "May 2025 - Present",
      location: "Ghaziabad, Uttar Pradesh, India",
      status: "Current",
      highlights: [
        "Designed 10+ impactful event posters and materials",
        "Led creative team of 8 talented members",
        "Won 'Best Design Award' for college fest",
        "Increased event engagement by 40%",
      ],
      icon: Briefcase,
      color: "#f59e0b",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-300 relative overflow-hidden">
      <ScrollProgress />
      <FloatingParticles />

      {/* Cursor follower */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Enhanced Navigation */}
      <EnhancedNavigation activeSection={activeSection} />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection isVisible={isVisible} />

      {/* Enhanced Skills Section */}
      <EnhancedSkillsShowcase skills={skills} />

      {/* Enhanced Projects Section */}
      <EnhancedProjectsSection projects={projects} />

      {/* Enhanced Education & Experience Timeline */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-16">
            My Journey
          </h2>
          <InteractiveTimeline items={timelineItems} />
        </div>
      </section>

      {/* Performance Metrics Dashboard */}
      <PerformanceMetrics />

      {/* Interactive Achievements */}
      <InteractiveAchievements />

      {/* Live GitHub Activity */}
      <LiveGitHubActivity />

      {/* Enhanced Contact Section */}
      <EnhancedContactSection />

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}