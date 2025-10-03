"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Clock,
  Heart,
  Lightbulb,
  Code,
  Coffee,
  ArrowUp,
  Sparkles,
  Star,
  TrendingUp
} from "lucide-react"
import { useState, useEffect } from "react"

export function EnhancedFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowBackToTop(window.scrollY > 500)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bheeni-agarwal-0875b6264/",
      color: "hover:text-blue-400",
      followers: "500+"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Bheeni14",
      color: "hover:text-purple-400",
      followers: "100+"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:bheeni.agarwal@example.com",
      color: "hover:text-pink-400",
      followers: "Always Open"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]

  const technologies = [
    "Python & ML",
    "Java & DSA", 
    "Data Science",
    "Web Development",
    "React & Next.js",
    "Machine Learning"
  ]

  const achievements = [
    { icon: Star, text: "15+ Projects Completed", color: "text-yellow-400" },
    { icon: TrendingUp, text: "8.5/10 Academic Performance", color: "text-green-400" },
    { icon: Code, text: "6+ Technologies Mastered", color: "text-blue-400" },
    { icon: Coffee, text: "500+ Hours of Learning", color: "text-orange-400" }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 text-blue-400 mr-2" />
                  Bheeni Agarwal
                </h3>
                <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Available for Opportunities
                </Badge>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Aspiring Data Scientist & Software Engineer passionate about turning data into insights and building 
                innovative solutions that make a real difference in the world. Currently pursuing B.Tech in CSE-DS at AKGEC.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center group hover:scale-105 transition-transform duration-300">
                    <achievement.icon className={`w-5 h-5 mr-3 ${achievement.color} group-hover:animate-bounce`} />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-blue-400 animate-bounce" />
                <span>Jhansi, Uttar Pradesh, India</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-xl flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group text-lg"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-xl flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-400 animate-pulse" />
                Technologies
              </h4>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={tech} className="group">
                    <div className="text-gray-400 hover:text-white transition-all duration-300 text-lg flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="font-semibold mb-4 text-white text-xl">Connect With Me</h4>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <div key={social.name} className="group text-center">
                      <Button
                        size="lg"
                        variant="ghost"
                        className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 bg-gray-800/50 hover:bg-gray-700/50 rounded-full w-16 h-16 p-0 border border-gray-700 hover:border-gray-600`}
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <social.icon className="w-7 h-7" />
                        </a>
                      </Button>
                      <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                        {social.followers}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-2 text-lg">Let's collaborate!</p>
                <p className="text-sm text-gray-500 mb-4">
                  Open to internships, projects, and exciting opportunities
                </p>
                <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30 px-4 py-2">
                  <Heart className="w-4 h-4 mr-2 text-pink-400 animate-pulse" />
                  Actively seeking opportunities
                </Badge>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 mb-2 text-lg">
                  © {currentYear} Bheeni Agarwal. Built with passion for data science and technology.
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 animate-pulse text-yellow-400" />
                  "Turning real-world problems into data-driven solutions" 📊✨
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" /> and lots of ☕
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Always Learning
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-14 h-14 p-0 shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm" />
          </div>
        ))}
      </div>
    </footer>
  )
}