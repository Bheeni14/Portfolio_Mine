"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedCounter } from "@/components/animated-counter"
import { MagneticButton } from "@/components/magnetic-button"
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Play,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react"
import { useEffect, useState } from "react"

interface EnhancedHeroSectionProps {
  isVisible: boolean
}

export function EnhancedHeroSection({ isVisible }: EnhancedHeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [forceShowImage, setForceShowImage] = useState(false)

  const profileImages = [
    "/professiona_bheeni.jpg", 
  ]

  const typingTexts = [
    "Data Scientist",
    "Software Engineer", 
    "Python Developer",
    "ML Engineer",
    "Problem Solver",
    "Tech Enthusiast",
    "Innovation Driver"
  ]

  const stats = [
    { label: "Projects Completed", value: 15, suffix: "+", icon: "🚀" },
    { label: "Technologies Learned", value: 20, suffix: "+", icon: "💻" },
    { label: "Certifications", value: 5, suffix: "", icon: "🏆" },
    { label: "Study Hours", value: 800, suffix: "+", icon: "📚" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bheeni-agarwal-0875b6264/",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/Bheeni14",
      icon: Github,
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Email",
      url: "mailto:bheeni.agarwal@example.com",
      icon: Mail,
      color: "bg-red-600 hover:bg-red-700",
    },
  ]

  useEffect(() => {
    // Force show image after 3 seconds if still loading
    const timeout = setTimeout(() => {
      if (!imageLoaded) {
        console.log("Force showing image after timeout")
        setForceShowImage(true)
        setImageLoaded(true)
      }
    }, 3000)
    
    // Cycle through profile images if multiple exist
    if (profileImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % profileImages.length)
      }, 5000) // Change image every 5 seconds

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [profileImages.length, imageLoaded])

  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div
            className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse scale-150 group-hover:scale-175 transition-transform duration-700" />
              
              {/* Profile image container */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10 group-hover:scale-110 transition-all duration-700 group-hover:rotate-3">
                  <img
                    src={profileImages[currentImageIndex]}
                    alt="Bheeni Agarwal - Data Scientist & Software Engineer"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      imageLoaded || forceShowImage ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => {
                      console.log("✅ Image loaded successfully:", profileImages[currentImageIndex])
                      setImageLoaded(true)
                      setImageError(false)
                    }}
                    onError={(e) => {
                      console.log("❌ Image failed to load:", profileImages[currentImageIndex])
                      console.log("Error details:", e)
                      setImageError(true)
                      setImageLoaded(true) // Show fallback
                    }}
                  />
                  
                  {/* Loading state */}
                  {!imageLoaded && !imageError && !forceShowImage && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                      <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <div className="absolute bottom-4 text-xs text-gray-600">
                        Loading image...
                        <button 
                          onClick={() => setForceShowImage(true)}
                          className="ml-2 text-blue-600 underline"
                        >
                          Show anyway
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Fallback when image fails */}
                  {imageError && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2">BA</div>
                        <div className="text-sm opacity-80">Bheeni Agarwal</div>
                        <div className="text-xs opacity-60 mt-2">Data Scientist</div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-spin-slow scale-110" 
                     style={{ animationDuration: '20s' }} />
                
                {/* Status indicator */}
                <div className="absolute bottom-8 right-8 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                </div>
              </div>

              {/* Social links floating around image */}
              <div className="absolute inset-0">
                {socialLinks.map((social, index) => (
                  <div
                    key={social.name}
                    className="absolute"
                    style={{
                      transform: `rotate(${index * 120}deg) translateY(-200px) rotate(-${index * 120}deg)`,
                    }}
                  >
                    <Button
                      size="sm"
                      className={`${social.color} text-white rounded-full w-12 h-12 p-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-125 shadow-lg`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Debug info (development only) */}
           
           

            {/* Greeting */}
            <div className="mb-4">
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 px-4 py-2 text-sm font-medium"
              >
                👋 Hello, I'm
              </Badge>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 animate-fade-in-up leading-tight">
              Bheeni Agarwal
            </h1>

            {/* Typing animation */}
            <div className="text-2xl md:text-4xl mb-6 font-medium h-16 flex items-center justify-center lg:justify-start">
              <span className="mr-3 text-gray-600 dark:text-gray-300">I'm a</span>
              <TypingAnimation
                texts={typingTexts}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold"
                speed={80}
                deleteSpeed={40}
                pauseTime={1500}
              />
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              AKGEC'27 | CSE-DS | Passionate about turning real-world problems into data-driven solutions and building innovative software that makes a real impact ✨
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start text-gray-500 dark:text-gray-400 mb-8">
              <MapPin className="w-5 h-5 mr-2 animate-bounce" />
              <span className="text-lg">Jhansi, Uttar Pradesh, India</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {["#DataScience", "#MachineLearning", "#Python", "#Java", "#DSA", "#WomenInTech", "#Innovation"].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-blue-700 dark:text-blue-300 hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in-up border border-blue-200/50 dark:border-blue-700/50 px-3 py-1`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

         
         

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl px-8 py-4 text-lg">
                <a href="#contact" className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </MagneticButton>
              
              <MagneticButton className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg">
                <a href="#projects" className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </MagneticButton>
              
              <MagneticButton className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-xl px-6 py-4">
                <a
                  href="https://drive.google.com/file/d/1JCJBjTHtJq3U4HP5NOnuTZH_l1v9naXN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}