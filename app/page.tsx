'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollProgress } from "@/components/scroll-progress"
import { MapPin, Mail, Linkedin, Code, Database, Brain, Calendar, ExternalLink, ChevronDown, Download, Award, BookOpen, Github, Star, TrendingUp, Users, Target, Lightbulb, Rocket, Coffee, Heart, Zap, Trophy, GraduationCap, Briefcase, FileText, Globe, ArrowRight, Play } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'experience', 'certifications', 'blog', 'contact']
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    { name: "Python", level: 85, icon: Code, category: "Programming", color: "bg-yellow-500" },
    { name: "Data Analysis", level: 90, icon: Database, category: "Data Science", color: "bg-blue-500" },
    { name: "Machine Learning", level: 80, icon: Brain, category: "AI/ML", color: "bg-purple-500" },
    { name: "Java", level: 75, icon: Code, category: "Programming", color: "bg-red-500" },
    { name: "HTML/CSS", level: 85, icon: Code, category: "Web Dev", color: "bg-orange-500" },
    { name: "DSA", level: 70, icon: Code, category: "Programming", color: "bg-green-500" },
    { name: "Statistics", level: 80, icon: Database, category: "Data Science", color: "bg-indigo-500" },
    { name: "SQL", level: 75, icon: Database, category: "Database", color: "bg-cyan-500" },
  ]

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "ML model to predict customer churn using Python and scikit-learn with 92% accuracy",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Sales Dashboard Analytics",
      description: "Interactive dashboard for sales data visualization using Python and Streamlit",
      tech: ["Python", "Streamlit", "Plotly", "SQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "In Progress"
    },
    {
      title: "Student Performance Analyzer",
      description: "Data analysis project examining factors affecting student academic performance",
      tech: ["Python", "Jupyter", "Seaborn", "NumPy"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "E-commerce Recommendation System",
      description: "Collaborative filtering recommendation system for e-commerce platform",
      tech: ["Python", "TensorFlow", "Flask", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "Planning"
    }
  ]

  const certifications = [
    {
      title: "Data Science Fundamentals",
      issuer: "IIT Kharagpur - Technophilia Program",
      date: "2024",
      credentialId: "DS2024-001",
      skills: ["Python", "Statistics", "Data Visualization"]
    },
    {
      title: "Artificial Intelligence Basics",
      issuer: "IIT Kharagpur - Technophilia Program", 
      date: "2024",
      credentialId: "AI2024-002",
      skills: ["Machine Learning", "Neural Networks", "AI Ethics"]
    },
    {
      title: "Internship & Job Preparation",
      issuer: "IIT Kharagpur - Technophilia Program",
      date: "2024",
      credentialId: "IJP2024-003",
      skills: ["Interview Skills", "Resume Building", "Soft Skills"]
    }
  ]

  const blogPosts = [
    {
      title: "My Journey into Data Science: From Curiosity to Career",
      excerpt: "Sharing my experience transitioning from general computer science to specializing in data science...",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["Career", "Data Science", "Learning"],
      image: "/placeholder.svg?height=150&width=250"
    },
    {
      title: "Understanding Machine Learning: A Beginner's Guide",
      excerpt: "Breaking down complex ML concepts into simple, understandable terms for fellow students...",
      date: "Dec 10, 2024", 
      readTime: "8 min read",
      tags: ["Machine Learning", "Tutorial", "Beginner"],
      image: "/placeholder.svg?height=150&width=250"
    },
    {
      title: "Women in Tech: Breaking Barriers in Data Science",
      excerpt: "Discussing the importance of diversity in tech and my experience as a woman in data science...",
      date: "Dec 5, 2024",
      readTime: "6 min read", 
      tags: ["Women in Tech", "Diversity", "Inspiration"],
      image: "/placeholder.svg?height=150&width=250"
    }
  ]

  const stats = [
    { label: "Projects Completed", value: 12, suffix: "+" },
    { label: "Technologies Learned", value: 15, suffix: "+" },
    { label: "Certifications", value: 3, suffix: "" },
    { label: "Study Hours", value: 500, suffix: "+" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ScrollProgress />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bheeni Agarwal
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Education', 'Experience', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/5 dark:to-purple-600/5" />
        <div className="max-w-6xl mx-auto relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse" />
              <img
                src="https://drive.google.com/file/d/1vGhX6hgbERgGt4q_KHMMikvm9A_mbNCp/view?usp=sharing"
                alt="Bheeni Agarwal"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Bheeni Agarwal
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 font-medium">
              Aspiring Data Analyst & Software Engineer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              AKGEC'27 | CSE-DS | Passionate about turning real-world problems into data-driven solutions ✨
            </p>
            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Jhansi, Uttar Pradesh, India</span>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["#DataScience", "#MachineLearning", "#Python", "#Java", "#DSA", "#WomenInTech"].map((tag, index) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className={`bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 hover:scale-105 transition-transform duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
                <a href="#contact" className="flex items-center">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20">
                <Play className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Rocket className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Journey</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Hi! I'm Bheeni Agarwal, currently pursuing my B.Tech in Computer Science & Engineering (Data Science) at
                  Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm deeply passionate about transforming complex data into meaningful insights and building innovative software solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Focus</h3>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                    Data Structures & Algorithms (Java)
                  </li>
                  <li className="flex items-center">
                    <Brain className="w-4 h-4 text-purple-500 mr-2" />
                    Machine Learning & AI
                  </li>
                  <li className="flex items-center">
                    <Database className="w-4 h-4 text-blue-500 mr-2" />
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center">
                    <Code className="w-4 h-4 text-green-500 mr-2" />
                    Full-Stack Development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8 border-0 shadow-xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Philosophy</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "I believe in continuous learning and hands-on experience to grow both technically and personally. 
                Every challenge is an opportunity to innovate and create impact."
              </p>
              <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
                <Coffee className="w-5 h-5 mr-2" />
                Always curious. Always growing. 🚀
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            Technical Skills
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Programming">Programming</TabsTrigger>
              <TabsTrigger value="Data Science">Data Science</TabsTrigger>
              <TabsTrigger value="AI/ML">AI/ML</TabsTrigger>
              <TabsTrigger value="Web Dev">Web Dev</TabsTrigger>
            </TabsList>
            
            {['all', 'Programming', 'Data Science', 'AI/ML', 'Web Dev'].map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills
                    .filter(skill => category === 'all' || skill.category === category)
                    .map((skill, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white dark:bg-gray-800 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg ${skill.color} bg-opacity-20 mr-3`}>
                              <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                              <Badge variant="outline" className="text-xs mt-1">
                                {skill.category}
                              </Badge>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            Education Journey
          </h2>
          <div className="space-y-6">
            {[
              {
                institution: "AJAY KUMAR GARG ENGINEERING COLLEGE, GHAZIABAD",
                degree: "Bachelor of Technology - BTech",
                field: "Computer Science & Engineering (Data Science)",
                period: "September 2024 - September 2027",
                status: "Current",
                gpa: "8.5/10",
                highlights: ["Data Science Specialization", "Active in Training & Placement Cell", "Team Footprints Member"]
              },
              {
                institution: "Galgotias University",
                degree: "Polytechnic",
                field: "Computer Science and Engineering",
                period: "August 2022 - May 2024",
                status: "Completed",
                gpa: "8.2/10",
                highlights: ["Strong Foundation in Programming", "Web Development Projects", "Technical Society Member"]
              },
              {
                institution: "H.M Memorial",
                degree: "Class XI, XII",
                field: "PCM (Physics, Chemistry, Mathematics)",
                period: "April 2020 - June 2022",
                status: "Completed",
                gpa: "85%",
                highlights: ["Mathematics Excellence", "Science Olympiad Participant", "Academic Merit Award"]
              }
            ].map((edu, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                        <CardTitle className="text-xl text-gray-900 dark:text-white">{edu.institution}</CardTitle>
                      </div>
                      <CardDescription className="text-lg mb-2">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{edu.degree}</span>
                        {edu.field && <span className="text-gray-600 dark:text-gray-300"> - {edu.field}</span>}
                      </CardDescription>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center text-green-600 dark:text-green-400 mb-3">
                          <Star className="w-4 h-4 mr-2" />
                          <span className="font-medium">GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                    <Badge variant={edu.status === "Current" ? "default" : "secondary"} className="ml-4">
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                    {edu.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                company: "Training and Placement Akgec",
                role: "Coordinator of Training and Placement Cell",
                period: "May 2025 - Present",
                location: "Ghaziabad, Uttar Pradesh, India",
                description: "Leading placement coordination activities, organizing recruitment drives, and facilitating student-industry connections",
                achievements: ["Organized 15+ recruitment drives", "Improved placement rate by 20%", "Mentored 50+ students"],
                skills: ["Leadership", "Event Management", "Communication", "Student Mentoring"]
              },
              {
                company: "Team Footprints",
                role: "Artist & Creative Designer",
                period: "May 2025 - Present",
                location: "Ghaziabad, Uttar Pradesh, India",
                description: "Contributing creative design solutions and artistic elements to enhance team projects and college events",
                achievements: ["Designed 10+ event posters", "Led creative team of 8 members", "Won Best Design Award"],
                skills: ["Graphic Design", "Creative Thinking", "Team Collaboration", "Adobe Creative Suite"]
              }
            ].map((exp, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Briefcase className="w-6 h-6 text-purple-600 mr-2" />
                        <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.role}</CardTitle>
                      </div>
                      <CardDescription className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {exp.company}
                      </CardDescription>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4 border-green-500 text-green-600 dark:text-green-400">
                      Current
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, aIndex) => (
                        <div key={aIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIndex) => (
                        <Badge key={sIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">{cert.title}</CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    ID: {cert.credentialId}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {cert.skills.map((skill, sIndex) => (
                        <Badge key={sIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-12">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-800 dark:to-green-900/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image || "/placeholder.svg"} 
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">
                      <BookOpen className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{post.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20">
              <Globe className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect & Collaborate! 🚀</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to discuss data science projects, internship opportunities, or just chat about tech? I'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Email Me</h3>
                <p className="text-sm text-blue-100">Quick response guaranteed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-blue-100">Professional networking</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Collaborate</h3>
                <p className="text-sm text-blue-100">Open to projects</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 border-white transform hover:scale-105 transition-all duration-200"
              asChild
            >
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
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="mailto:bheeni.agarwal@example.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Bheeni Agarwal
              </h3>
              <p className="text-gray-400 mb-4">
                Aspiring Data Scientist & Software Engineer passionate about turning data into insights and building innovative solutions.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="https://www.linkedin.com/in/bheeniagarwal-0875b6264" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="mailto:bheeni.agarwal@example.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Python & ML</li>
                <li>Java & DSA</li>
                <li>Data Science</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2024 Bheeni Agarwal. Built with passion for data science and technology.
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              <Lightbulb className="w-4 h-4 mr-2" />
              "Turning real-world problems into data-driven solutions" 📊✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
