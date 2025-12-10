"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  Star,
  GitFork,
  Calendar,
  Clock,
  ExternalLink,
  Activity,
  Code,
  Users,
  TrendingUp,
  FileText,
  Plus,
  Eye,
  Download
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface GitHubActivity {
  id: string
  type: "push" | "create" | "pull_request" | "star" | "fork" | "release" | "other"
  repository: string
  message: string
  timestamp: string
  branch?: string
  url: string
  language: string
  description?: string
}

interface Repository {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
  updated: string
  topics: string[]
  isPrivate: boolean
  size: number
}

export function LiveGitHubActivity() {
  const GITHUB_USERNAME = "Bheeni14" // <= username requested
  // optional: provide a personal access token for higher rate limits
  // const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN ?? ""
  const GITHUB_TOKEN = "" // put token here or use env var in production

  const [selectedFilter, setSelectedFilter] = useState<string>("all")
  const [isVisible, setIsVisible] = useState(false)
  const [recentActivity, setRecentActivity] = useState<GitHubActivity[] | null>(null)
  const [repositories, setRepositories] = useState<Repository[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // --- Mock data fallback (keeps your original examples) ---
  const mockRecentActivity: GitHubActivity[] = [
    {
      id: "1",
      type: "push",
      repository: "customer-churn-prediction",
      message: "Added ensemble model implementation with 92% accuracy",
      timestamp: "2025-01-15T10:30:00Z",
      branch: "main",
      url: `https://github.com/${GITHUB_USERNAME}/customer-churn-prediction`,
      language: "python"
    },
    {
      id: "2",
      type: "create",
      repository: "portfolio-website",
      message: "Created new repository for portfolio website",
      timestamp: "2025-01-14T15:45:00Z",
      url: `https://github.com/${GITHUB_USERNAME}/portfolio-website`,
      language: "typescript",
      description: "Modern portfolio website built with Next.js and TypeScript"
    },
    {
      id: "3",
      type: "pull_request",
      repository: "data-visualization-toolkit",
      message: "Add new chart types and interactive features",
      timestamp: "2025-01-13T09:20:00Z",
      branch: "feature/chart-enhancements",
      url: `https://github.com/${GITHUB_USERNAME}/data-visualization-toolkit`,
      language: "javascript"
    },
    {
      id: "4",
      type: "star",
      repository: "machine-learning-notebooks",
      message: "Starred repository for ML tutorials",
      timestamp: "2025-01-12T14:15:00Z",
      url: `https://github.com/${GITHUB_USERNAME}/machine-learning-notebooks`,
      language: "jupyter"
    },
    {
      id: "5",
      type: "push",
      repository: "python-data-analysis",
      message: "Enhanced data preprocessing pipeline",
      timestamp: "2025-01-11T11:30:00Z",
      branch: "develop",
      url: `https://github.com/${GITHUB_USERNAME}/python-data-analysis`,
      language: "python"
    },
    {
      id: "6",
      type: "release",
      repository: "react-components-library",
      message: "Released v2.1.0 with new components",
      timestamp: "2025-01-10T16:00:00Z",
      url: `https://github.com/${GITHUB_USERNAME}/react-components-library`,
      language: "typescript"
    }
  ]

  const mockRepositories: Repository[] = [
    {
      name: "customer-churn-prediction",
      description: "Machine learning model for predicting customer churn with 92% accuracy using ensemble methods",
      language: "Python",
      stars: 45,
      forks: 12,
      url: `https://github.com/${GITHUB_USERNAME}/customer-churn-prediction`,
      updated: "2025-01-15T10:30:00Z",
      topics: ["machine-learning", "python", "data-science", "churn-prediction"],
      isPrivate: false,
      size: 2.5
    },
    {
      name: "portfolio-website",
      description: "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS",
      language: "TypeScript",
      stars: 23,
      forks: 5,
      url: `https://github.com/${GITHUB_USERNAME}/portfolio-website`,
      updated: "2025-01-14T15:45:00Z",
      topics: ["nextjs", "typescript", "portfolio", "react"],
      isPrivate: false,
      size: 1.8
    },
    {
      name: "data-visualization-toolkit",
      description: "Interactive data visualization components and tools for web applications",
      language: "JavaScript",
      stars: 67,
      forks: 18,
      url: `https://github.com/${GITHUB_USERNAME}/data-visualization-toolkit`,
      updated: "2025-01-13T09:20:00Z",
      topics: ["data-visualization", "d3js", "charts", "javascript"],
      isPrivate: false,
      size: 3.2
    },
    {
      name: "python-data-analysis",
      description: "Collection of Python scripts and notebooks for data analysis and preprocessing",
      language: "Python",
      stars: 34,
      forks: 8,
      url: `https://github.com/${GITHUB_USERNAME}/python-data-analysis`,
      updated: "2025-01-11T11:30:00Z",
      topics: ["python", "data-analysis", "pandas", "numpy"],
      isPrivate: false,
      size: 4.1
    },
    {
      name: "react-components-library",
      description: "Reusable React components library with TypeScript support and Storybook documentation",
      language: "TypeScript",
      stars: 89,
      forks: 25,
      url: `https://github.com/${GITHUB_USERNAME}/react-components-library`,
      updated: "2025-01-10T16:00:00Z",
      topics: ["react", "typescript", "components", "storybook"],
      isPrivate: false,
      size: 2.9
    },
    {
      name: "machine-learning-notebooks",
      description: "Jupyter notebooks demonstrating various machine learning algorithms and techniques",
      language: "Jupyter Notebook",
      stars: 156,
      forks: 42,
      url: `https://github.com/${GITHUB_USERNAME}/machine-learning-notebooks`,
      updated: "2025-01-09T13:25:00Z",
      topics: ["machine-learning", "jupyter", "algorithms", "tutorials"],
      isPrivate: false,
      size: 15.7
    }
  ]

  // --- Helpers to map GitHub events -> our GitHubActivity type ---
  const mapEventToActivity = (event: any): GitHubActivity | null => {
    try {
      const type = event.type
      const repoFullName = event.repo?.name ?? event.payload?.repository?.full_name ?? "unknown/unknown"
      const [owner, repoName] = repoFullName.split("/")
      const repoUrl = `https://github.com/${repoFullName}`
      const createdAt = event.created_at ?? new Date().toISOString()
      // default language unknown; we'll set when mapping repos
      switch (type) {
        case "PushEvent": {
          const commits = event.payload?.commits ?? []
          const message = commits.length ? commits[commits.length - 1].message : "Pushed commits"
          const ref = event.payload?.ref ?? ""
          const branch = ref.replace("refs/heads/", "")
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: "push",
            repository: repoName,
            message,
            timestamp: createdAt,
            branch,
            url: `${repoUrl}/commits/${branch || ""}`,
            language: "unknown"
          }
        }
        case "CreateEvent": {
          const refType = event.payload?.ref_type ?? ""
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: refType === "repository" ? "create" : "other",
            repository: repoName,
            message: `Created ${refType}`,
            timestamp: createdAt,
            url: repoUrl,
            language: "unknown"
          }
        }
        case "PullRequestEvent": {
          const pr = event.payload?.pull_request
          const title = pr?.title ?? "Opened/updated PR"
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: "pull_request",
            repository: repoName,
            message: title,
            timestamp: createdAt,
            url: pr?.html_url ?? repoUrl,
            language: "unknown"
          }
        }
        case "WatchEvent": { // starring is a WatchEvent on GitHub events API
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: "star",
            repository: repoName,
            message: "Starred repository",
            timestamp: createdAt,
            url: repoUrl,
            language: "unknown"
          }
        }
        case "ForkEvent": {
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: "fork",
            repository: repoName,
            message: `Forked ${repoName}`,
            timestamp: createdAt,
            url: event.payload?.forkee?.html_url ?? repoUrl,
            language: "unknown"
          }
        }
        case "ReleaseEvent": {
          const release = event.payload?.release
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: "release",
            repository: repoName,
            message: release?.name ?? "Published release",
            timestamp: createdAt,
            url: release?.html_url ?? repoUrl,
            language: "unknown"
          }
        }
        default:
          return {
            id: event.id ?? `${repoFullName}-${createdAt}`,
            type: "other",
            repository: repoName,
            message: type,
            timestamp: createdAt,
            url: repoUrl,
            language: "unknown"
          }
      }
    } catch (err) {
      return null
    }
  }

  // fetch public events and repos for the given username
  useEffect(() => {
    const controller = new AbortController()
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json"
    }
    if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`

    const fetchEvents = async () => {
      try {
        setError(null)
        // public events
        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`, {
          headers,
          signal: controller.signal
        })
        if (!eventsRes.ok) throw new Error(`Events fetch failed: ${eventsRes.status}`)
        const eventsJson = await eventsRes.json()
        const mapped = eventsJson
          .map((e: any) => mapEventToActivity(e))
          .filter(Boolean)
          .slice(0, 50) as GitHubActivity[]

        // fetch repositories (sorted by updated)
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
          headers,
          signal: controller.signal
        })
        if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`)
        const reposJson = await reposRes.json()
        const mappedRepos: Repository[] = reposJson.map((r: any) => ({
          name: r.name,
          description: r.description ?? "",
          language: r.language ?? "Unknown",
          stars: r.stargazers_count ?? 0,
          forks: r.forks_count ?? 0,
          url: r.html_url,
          updated: r.updated_at,
          topics: r.topics ?? [],
          isPrivate: r.private ?? false,
          size: r.size ?? 0
        }))

        // Now attempt to enrich activity languages from repo list
        const repoLangMap = new Map<string, string>()
        mappedRepos.forEach((r) => repoLangMap.set(r.name.toLowerCase(), r.language ?? "Unknown"))
        const enriched = mapped.map((act) => ({
          ...act,
          language: repoLangMap.get(act.repository.toLowerCase()) ?? act.language
        }))

        // Save to state (if no events or repos, fall back to mock)
        setRecentActivity(enriched.length ? enriched : mockRecentActivity)
        setRepositories(mappedRepos.length ? mappedRepos : mockRepositories)
      } catch (err: any) {
        // fallback to mock data if anything goes wrong (rate limits, CORS, private account, etc.)
        console.warn("GitHub fetch error:", err)
        setError(String(err.message ?? err))
        setRecentActivity(mockRecentActivity)
        setRepositories(mockRepositories)
      }
    }

    fetchEvents()

    return () => {
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GITHUB_USERNAME])

  const activityTypes = [
    { name: "all", label: "All Activity", icon: Activity },
    { name: "push", label: "Commits", icon: GitCommit },
    { name: "pull_request", label: "Pull Requests", icon: GitPullRequest },
    { name: "create", label: "New Repos", icon: Plus },
    { name: "star", label: "Stars", icon: Star },
    { name: "release", label: "Releases", icon: FileText }
  ]

  const filteredActivity = (selectedFilter === "all" || !recentActivity)
    ? (recentActivity ?? mockRecentActivity)
    : (recentActivity ?? mockRecentActivity).filter(activity => activity.type === selectedFilter)

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

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000)

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    return `${Math.floor(diffInSeconds / 86400)}d ago`
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "push": return GitCommit
      case "create": return Plus
      case "pull_request": return GitPullRequest
      case "star": return Star
      case "fork": return GitFork
      case "release": return FileText
      default: return Activity
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "push": return "text-green-500"
      case "create": return "text-blue-500"
      case "pull_request": return "text-purple-500"
      case "star": return "text-yellow-500"
      case "fork": return "text-orange-500"
      case "release": return "text-red-500"
      default: return "text-gray-500"
    }
  }

  const getLanguageColor = (language: string) => {
    switch (language?.toLowerCase?.()) {
      case "python": return "bg-blue-500"
      case "javascript": return "bg-yellow-500"
      case "typescript": return "bg-blue-600"
      case "jupyter notebook": return "bg-orange-500"
      case "jupyter": return "bg-orange-500"
      case "java": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const repos = repositories ?? mockRepositories
  const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0)
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks, 0)
  const totalCommits = (recentActivity ?? mockRecentActivity).filter(a => a.type === "push").length * 15 // Estimated

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            GitHub Activity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Live feed of my recent development activities, repositories, and contributions
          </p>
          {error && (
            <p className="text-sm text-red-500 mt-3">Could not fetch live data: {error}. Showing cached/mock data.</p>
          )}
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {repos.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Repositories
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                {totalStars}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Total Stars
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {totalForks}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Forks
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {totalCommits}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Commits
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Activity className="w-6 h-6 mr-2 text-green-500" />
                Recent Activity
              </h3>
            </div>

            {/* Activity Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {activityTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelectedFilter(type.name)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedFilter === type.name
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  } backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
                >
                  <type.icon className="w-4 h-4 mr-2" />
                  {type.label}
                </button>
              ))}
            </div>

            {/* Activity Feed */}
            <div className="space-y-4">
              {(filteredActivity ?? mockRecentActivity).map((activity, index) => {
                const ActivityIcon = getActivityIcon(activity.type)
                return (
                  <Card
                    key={activity.id}
                    className={`border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${getActivityColor(activity.type)} bg-current/10`}>
                          <ActivityIcon className={`w-5 h-5 ${getActivityColor(activity.type)}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {activity.repository}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              {formatTimeAgo(activity.timestamp)}
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {activity.message}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${getLanguageColor(activity.language)}`} />
                              <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                                {activity.language}
                              </span>
                              {activity.branch && (
                                <Badge variant="outline" className="text-xs">
                                  <GitBranch className="w-3 h-3 mr-1" />
                                  {activity.branch}
                                </Badge>
                              )}
                            </div>

                            <Button variant="ghost" size="sm" asChild>
                              <a href={activity.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Popular Repositories */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-500" />
                Top Repositories
              </h3>
            </div>

            <div className="space-y-4">
              {repos.slice(0, 6).map((repo, index) => (
                <Card
                  key={repo.name}
                  className={`border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                    isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {repo.name}
                      </h4>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                      {repo.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {repo.topics?.slice(0, 3)?.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                        <span className="text-xs">{repo.language}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {repo.stars}
                        </div>
                        <div className="flex items-center">
                          <GitFork className="w-3 h-3 mr-1" />
                          {repo.forks}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* GitHub Profile Link */}
            <Card className="border-0 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800/80 dark:to-blue-900/20 backdrop-blur-lg shadow-lg mt-6">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  View All Repositories
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Explore more projects on my GitHub profile
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" asChild>
                  <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Language Distribution */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Language Distribution
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "TypeScript", "JavaScript", "Jupyter Notebook"].map((lang) => {
              const repoCount = repos.filter(r => r.language === lang).length
              const percentage = (repoCount / repos.length) * 100
              return (
                <div key={lang} className="flex items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200/50 dark:border-gray-700/50">
                  <div className={`w-4 h-4 rounded-full mr-3 ${getLanguageColor(lang)}`} />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{lang}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{percentage.toFixed(1)}%</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
