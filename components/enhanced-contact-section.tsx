"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Send,
  MapPin,
  Phone,
  Clock,
  Users,
  MessageCircle,
  Calendar,
  Coffee,
  Heart,
  Sparkles
} from "lucide-react"
import { useState } from "react"

export function EnhancedContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Quick response guaranteed",
      value: "bheeniagarwal14@gmail.com",
      action: "mailto:bheeniagarwal14@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking",
      value: "Connect with me",
      action: "https://www.linkedin.com/in/bheeni-agarwal-0875b6264/",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "Follow my work",
      action: "https://github.com/Bheeni14",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-50 dark:bg-gray-800/20"
    }
  ]

  const quickStats = [
    { icon: MessageCircle, label: "Response Time", value: "< 24h", color: "text-green-600" },
    { icon: Calendar, label: "Availability", value: "Open", color: "text-blue-600" },
    { icon: Users, label: "Projects Done", value: "15+", color: "text-purple-600" },
    { icon: Coffee, label: "Collaboration", value: "Ready", color: "text-orange-600" }
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <div className="w-4 h-4 bg-white rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Connect & Collaborate! 🚀
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss data science projects, internship opportunities, or just chat about the latest in tech? 
            I'd love to hear from you and explore how we can create something amazing together!
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold text-lg">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2" />
              Get In Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-md border-white/20 text-white hover:scale-105 transition-all duration-300 hover:bg-white/20 cursor-pointer"
                onClick={() => typeof window !== 'undefined' && window.open(method.action, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                      <p className="text-blue-100 text-sm mb-2">{method.description}</p>
                      <p className="text-white/80 font-medium">{method.value}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Location Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-blue-100 text-sm mb-2">Available for remote work</p>
                    <p className="text-white/80 font-medium">Jhansi, Uttar Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border-green-400/30 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg animate-pulse">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 flex items-center">
                      Currently Available
                      <div className="w-3 h-3 bg-green-400 rounded-full ml-2 animate-pulse" />
                    </h4>
                    <p className="text-green-100 text-sm mb-2">Open for new opportunities</p>
                    <p className="text-white/80 font-medium">Internships • Projects • Collaborations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="w-6 h-6 mr-2" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 border-white shadow-2xl py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                    <Sparkles className="w-5 h-5 ml-2" />
                  </div>
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-blue-100 text-sm flex items-center justify-center">
                <Heart className="w-4 h-4 mr-2 text-pink-300" />
                Usually respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 text-lg">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-6">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/bheeni-agarwal-0875b6264/",
                label: "LinkedIn",
                color: "hover:bg-blue-600"
              },
              {
                icon: Github,
                href: "https://github.com/Bheeni14",
                label: "GitHub",
                color: "hover:bg-gray-700"
              },
              {
                icon: Mail,
                href: "mailto:bheeni.agarwal@example.com",
                label: "Email",
                color: "hover:bg-red-600"
              }
            ].map((social, index) => (
              <MagneticButton
                key={index}
                className={`bg-white/20 text-white border-white/30 hover:scale-110 w-16 h-16 rounded-full p-0 ${social.color} transition-all duration-300`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}