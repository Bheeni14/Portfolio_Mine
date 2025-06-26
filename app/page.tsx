"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingParticles } from "@/components/floating-particles"
import { TypingAnimation } from "@/components/typing-animation"
import { InteractiveSkillCard } from "@/components/interactive-skill-card"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { InteractiveProjectCard } from "@/components/interactive-project-card"
import { MagneticButton } from "@/components/magnetic-button"
import {
  MapPin,
  Mail,
  Linkedin,
  Code,
  Database,
  Brain,
  ExternalLink,
  Download,
  Github,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Coffee,
  Heart,
  Zap,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Play,
  Sparkles,
  Code2,
  Cpu,
  LineChart,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Portfolio() {
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
        "certifications",
        "blog",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
      image: "/placeholder.svg?height=200&width=300",
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
        "Data Science Specialization with 8.5/10 GPA",
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
        "Strong foundation in programming with 8.2/10 GPA",
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

  const typingTexts = ["Data Scientist", "Software Engineer", "Python Developer", "ML Engineer", "Problem Solver"]

  const stats = [
    { label: "Projects Completed", value: 12, suffix: "+" },
    { label: "Technologies Learned", value: 15, suffix: "+" },
    { label: "Certifications", value: 3, suffix: "" },
    { label: "Study Hours", value: 500, suffix: "+" },
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
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Bheeni Agarwal
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Education", "Experience", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group ${
                    activeSection === item.toLowerCase() ? "text-blue-600 dark:text-blue-400" : ""
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  )}
                </a>
              ))}
            </div>
           <div className="flex items-center space-x-4">
  <ThemeToggle />
  <a
    href="https://drive.google.com/file/d/1JCJBjTHtJq3U4HP5NOnuTZH_l1v9naXN/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
      <Download className="w-4 h-4 mr-2" />
      Resume
    </MagneticButton>
  </a>
</div>

          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse scale-150" />
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Bheeni Agarwal"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative z-10 hover:scale-110 transition-all duration-500 hover:rotate-3"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-spin-slow" />
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Bheeni Agarwal
            </h1>

            <div className="text-xl md:text-3xl mb-4 font-medium h-12 flex items-center justify-center">
              <span className="mr-2 text-gray-600 dark:text-gray-300">I'm a</span>
              <TypingAnimation
                texts={typingTexts}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
              />
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              AKGEC'27 | CSE-DS | Passionate about turning real-world problems into data-driven solutions ✨
            </p>

            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
              <MapPin className="w-4 h-4 mr-2 animate-bounce" />
              <span>Jhansi, Uttar Pradesh, India</span>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["#DataScience", "#MachineLearning", "#Python", "#Java", "#DSA", "#WomenInTech"].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-blue-700 dark:text-blue-300 hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in-up border border-blue-200/50 dark:border-blue-700/50`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl">
                <a href="#contact" className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </MagneticButton>
              <MagneticButton className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 bg-white/80 backdrop-blur-sm">
                <Play className="w-4 h-4 mr-2" />
                View Projects
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    My Journey
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Hi! I'm Bheeni Agarwal, currently pursuing my B.Tech in Computer Science & Engineering (Data Science)
                  at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm deeply passionate about transforming complex data into meaningful insights and building innovative
                  software solutions that make a real impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-900/20 dark:via-gray-800 dark:to-pink-900/20 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    My Focus
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {[
                    { icon: Zap, text: "Data Structures & Algorithms (Java)", color: "#f59e0b" },
                    { icon: Brain, text: "Machine Learning & AI", color: "#8b5cf6" },
                    { icon: Database, text: "Data Science & Analytics", color: "#3b82f6" },
                    { icon: Code, text: "Full-Stack Development", color: "#10b981" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div
                        className="p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span className="group-hover:font-medium transition-all duration-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 border-0 shadow-2xl bg-gradient-to-r from-green-50 via-white to-blue-50 dark:from-green-900/20 dark:via-gray-800 dark:to-blue-900/20 hover:scale-105 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  My Philosophy
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                "I believe in continuous learning and hands-on experience to grow both technically and personally. Every
                challenge is an opportunity to innovate and create impact through technology."
              </p>
              <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
                <Coffee className="w-5 h-5 mr-2 animate-bounce" />
                Always curious. Always growing. 🚀
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-16">
            Technical Skills
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-2">
              <TabsTrigger value="all" className="rounded-xl">
                All
              </TabsTrigger>
              <TabsTrigger value="Programming" className="rounded-xl">
                Programming
              </TabsTrigger>
              <TabsTrigger value="Data Science" className="rounded-xl">
                Data Science
              </TabsTrigger>
              <TabsTrigger value="AI/ML" className="rounded-xl">
                AI/ML
              </TabsTrigger>
              <TabsTrigger value="Web Dev" className="rounded-xl">
                Web Dev
              </TabsTrigger>
            </TabsList>

            {["all", "Programming", "Data Science", "AI/ML", "Web Dev"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills
                    .filter((skill) => category === "all" || skill.category === category)
                    .map((skill, index) => (
                      <InteractiveSkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-16">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <InteractiveProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education & Experience Timeline */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-16">
            My Journey
          </h2>
          <InteractiveTimeline items={timelineItems} />
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect & Collaborate! 🚀</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss data science projects, internship opportunities, or just chat about the latest in tech? I'd
            love to hear from you and explore how we can create something amazing together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: "Email Me", desc: "Quick response guaranteed", color: "from-blue-500 to-cyan-500" },
              {
                icon: Linkedin,
                title: "LinkedIn",
                desc: "Professional networking",
                color: "from-purple-500 to-pink-500",
              },
              { icon: Users, title: "Collaborate", desc: "Open to projects", color: "from-green-500 to-blue-500" },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:scale-105 transition-all duration-300 hover:bg-white/20"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-blue-100">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticButton className="bg-white text-blue-600 hover:bg-blue-50 border-white shadow-2xl">
              <a
                href="https://www.linkedin.com/in/bheeniagarwal-0875b6264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </MagneticButton>
            <MagneticButton className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm">
              <a href="mailto:bheeni.agarwal@example.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Bheeni Agarwal
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Aspiring Data Scientist & Software Engineer passionate about turning data into insights and building
                innovative solutions that make a real difference in the world.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/bheeniagarwal-0875b6264",
                    color: "hover:text-blue-400",
                  },
                  { icon: Github, href: "#", color: "hover:text-purple-400" },
                  { icon: Mail, href: "mailto:bheeni.agarwal@example.com", color: "hover:text-pink-400" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="ghost"
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {["About", "Skills", "Projects", "Education", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                {["Python & ML", "Java & DSA", "Data Science", "Web Development"].map((tech) => (
                  <li key={tech} className="hover:text-white transition-colors duration-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2024 Bheeni Agarwal. Built with passion for data science and technology.
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              <Lightbulb className="w-4 h-4 mr-2 animate-pulse" />
              "Turning real-world problems into data-driven solutions" 📊✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
