'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Beaker,
  Brain,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Smartphone,
  Sparkles,
  Target,
  Twitter,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
  {
    id: 'welcome',
    label: 'Welcome',
    icon: Brain,
    color: 'purple',
    title: 'Random Access Mind',
    subtitle: 'Organizing the chaos of a curious brain',
    description:
      'Welcome to my 50+ tab brain. Each tab contains different areas of focus and thought.',
    cards: [
      {
        title: 'My Manifesto',
        description:
          'The complete story behind organizing 50+ mental tabs and turning chaos into clarity.',
        link: '/stream/welcome-to-my-random-access-mind',
        badge: 'Philosophy',
        fcl: 68,
        readTime: '6 min',
        published: '2025-06-19',
      },
      {
        title: 'About Steve Campbell',
        description:
          'Background, journey, and the evolution from overwhelming thoughts to structured creativity.',
        link: '/about',
        badge: 'Personal',
        readTime: '4 min',
      },
      {
        title: 'How to Navigate',
        description:
          'Guide to exploring this adaptive content system and finding your complexity level.',
        link: '#guide',
        badge: 'Guide',
        readTime: '2 min',
      },
    ],
  },
  {
    id: 'open-tabs',
    label: 'My Open Tabs',
    icon: Brain,
    color: 'emerald',
    title: 'Currently Open Tabs',
    subtitle: 'Live view of my 50+ tab brain',
    description:
      'These are the actual projects and ideas occupying my mental bandwidth right now.',
    cards: [
      {
        title: 'HaloMap.io',
        description:
          'Business architecture platform - active development. Process mapping and systems visualization.',
        link: 'https://halomap.io',
        badge: 'Startup',
        status: 'building',
        external: true,
        priority: 'high',
      },
      {
        title: 'FCL Framework',
        description:
          'Functional Complexity Level communication system. Adaptive content scaling methodology.',
        link: 'https://fcl-framework.com',
        badge: 'Framework',
        status: 'researching',
        external: true,
      },
      {
        title: 'AI Digital Twin',
        description:
          'Training an AI version of my thought patterns and decision-making processes.',
        link: 'https://ai-twin.steve.com',
        badge: 'AI',
        status: 'training',
        external: true,
      },
      {
        title: 'Mindful Drinking App',
        description:
          'Mobile app for mindful drinking habits and reduction tracking with behavioral insights.',
        link: 'https://mindful-drink.app',
        badge: 'Health',
        status: 'prototyping',
        external: true,
      },
      {
        title: 'Golf Swing Analysis',
        description:
          'Data-driven approach to golf improvement using motion analysis and pattern recognition.',
        link: 'https://golf-analysis.steve.com',
        badge: 'Sports',
        status: 'analyzing',
        external: true,
      },
      {
        title: 'Bitcoin Patterns',
        description:
          'Market pattern analysis and insights using advanced technical analysis algorithms.',
        link: 'https://bitcoin-patterns.com',
        badge: 'Crypto',
        status: 'monitoring',
        external: true,
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: Smartphone,
    color: 'green',
    title: 'Live Projects & Apps',
    subtitle: 'Deployed applications people can use',
    description:
      'Working tools and platforms that have been released to the world.',
    cards: [
      {
        title: 'HaloMap.io',
        description:
          'Business architecture and process management platform. Enterprise-grade process visualization.',
        link: 'https://halomap.io',
        badge: 'Platform',
        external: true,
        users: '500+',
        status: 'active',
      },
      {
        title: 'Idea Prototyper',
        description:
          '30-minute app builder for rapid prototyping. Built while writing my first blog post.',
        link: 'https://idea-prototyper.com',
        badge: 'Tool',
        external: true,
        users: '50+',
        status: 'active',
      },
      {
        title: 'RandomAccessMind',
        description:
          'This adaptive content blog system with FCL complexity scaling and thought organization.',
        link: 'https://randomaccessmind.com',
        badge: 'Blog',
        external: true,
        users: '1000+',
        status: 'active',
      },
      {
        title: 'FCL Demo App',
        description:
          'Interactive demonstration of Functional Complexity Level framework in action.',
        link: 'https://fcl-demo.com',
        badge: 'Demo',
        external: true,
        users: '200+',
        status: 'active',
      },
      {
        title: 'Golf Analytics Dashboard',
        description:
          'Personal golf improvement tracking with swing analysis and performance metrics.',
        link: 'https://golf.steve.com',
        badge: 'Personal',
        external: true,
        users: '10+',
        status: 'beta',
      },
    ],
  },
  {
    id: 'stream',
    label: 'The Stream',
    icon: Zap,
    color: 'blue',
    title: 'Latest Thoughts & Posts',
    subtitle: 'Random access ideas ready to publish',
    description:
      'Recent thoughts, insights, and content from my 50+ tab brain.',
    cards: [
      {
        title: 'Welcome to My Random Access Mind',
        description:
          'My manifesto on organizing chaos, harnessing the 50+ tab brain, and turning abstract thinking into practical tools.',
        link: '/stream/welcome-to-my-random-access-mind',
        badge: 'Philosophy',
        fcl: 68,
        readTime: '6 min',
        published: '2025-06-19',
      },
      {
        title: 'Building an App in 30 Minutes',
        description:
          'Practical guide to rapid prototyping with AI. From idea to deployment using modern tools.',
        link: '/stream/30-minute-app-build',
        badge: 'Technical',
        fcl: 75,
        readTime: '8 min',
        status: 'draft',
      },
      {
        title: 'Industry 5.0 and Human 5.0',
        description:
          'Exploring the next evolution of industry and humanity in the age of AI collaboration.',
        link: '/stream/industry-5-human-5',
        badge: 'Future',
        fcl: 82,
        readTime: '12 min',
        status: 'writing',
      },
      {
        title: 'The FCL Framework Explained',
        description:
          'Deep dive into Functional Complexity Level and adaptive content scaling methodology.',
        link: '/stream/fcl-framework-explained',
        badge: 'Framework',
        fcl: 78,
        readTime: '10 min',
        status: 'outline',
      },
      {
        title: 'AI Co-Creation Principles',
        description:
          'Working with AI as a creative partner rather than just a tool. Paradigm shifts in development.',
        link: '/stream/ai-co-creation-principles',
        badge: 'AI',
        fcl: 71,
        readTime: '7 min',
        status: 'draft',
      },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: Beaker,
    color: 'orange',
    title: 'Life & Work Frameworks',
    subtitle: 'Systems for organized creativity',
    description:
      "Frameworks and methodologies I've developed for life and work optimization.",
    cards: [
      {
        title: 'Human 5.0 Framework',
        description:
          'Evolution of human potential in the AI age. Augmentation vs replacement paradigms.',
        link: 'https://human5.framework.com',
        badge: 'Philosophy',
        status: 'developing',
        external: true,
        complexity: 'high',
      },
      {
        title: 'FCL - Functional Complexity Level',
        description:
          'Adaptive communication framework for scaling content complexity to audience capability.',
        link: 'https://fcl.framework.com',
        badge: 'Communication',
        status: 'testing',
        external: true,
        complexity: 'medium',
      },
      {
        title: 'Chaos to Clarity Methodology',
        description:
          'Personal system for organizing random access thoughts into structured output.',
        link: 'https://chaos2clarity.com',
        badge: 'Productivity',
        status: 'refined',
        external: true,
        complexity: 'medium',
      },
      {
        title: 'Rapid Prototyping Framework',
        description:
          '30-minute app development methodology using AI co-creation and modern tools.',
        link: 'https://rapid-proto.framework.com',
        badge: 'Development',
        status: 'proven',
        external: true,
        complexity: 'high',
      },
      {
        title: 'Industry 5.0 Principles',
        description:
          'Framework for the next industrial revolution focused on human-AI collaboration.',
        link: 'https://industry5.principles.com',
        badge: 'Business',
        status: 'research',
        external: true,
        complexity: 'high',
      },
    ],
  },
  {
    id: 'connect',
    label: 'Connect',
    icon: Mail,
    color: 'indigo',
    title: "Let's Connect",
    subtitle: 'Find me across the digital landscape',
    description:
      'All the ways to connect, collaborate, and stay updated with my work.',
    cards: [
      {
        title: 'Professional Email',
        description:
          'Direct line for collaboration, partnerships, and serious inquiries.',
        link: 'mailto:steve@halomap.io',
        badge: 'Email',
        icon: Mail,
        external: true,
        priority: 'high',
      },
      {
        title: 'LinkedIn',
        description:
          'Professional updates, business insights, and industry connections.',
        link: 'https://linkedin.com/in/stevecampbell',
        badge: 'Professional',
        icon: Linkedin,
        external: true,
        followers: '5000+',
      },
      {
        title: 'Twitter / X',
        description:
          'Random thoughts, quick insights, and real-time updates from my tabs.',
        link: 'https://twitter.com/steve_campbell',
        badge: 'Social',
        icon: Twitter,
        external: true,
        followers: '2000+',
      },
      {
        title: 'GitHub',
        description:
          'Open source projects, code samples, and development insights.',
        link: 'https://github.com/stevecampbell',
        badge: 'Code',
        icon: Github,
        external: true,
        repos: '50+',
      },
      {
        title: 'HaloMap.io Team',
        description:
          'Contact the HaloMap.io team for business architecture consulting.',
        link: 'https://halomap.io/contact',
        badge: 'Business',
        icon: Globe,
        external: true,
      },
    ],
  },
];

const colorVariants = {
  purple: {
    bg: 'from-purple-600 to-blue-600',
    tab: 'border-purple-500 text-purple-600 bg-purple-50',
    tabActive: 'border-purple-600 text-purple-700 bg-purple-100 shadow-lg',
    accent: 'text-purple-600',
  },
  emerald: {
    bg: 'from-emerald-600 to-teal-600',
    tab: 'border-emerald-500 text-emerald-600 bg-emerald-50',
    tabActive: 'border-emerald-600 text-emerald-700 bg-emerald-100 shadow-lg',
    accent: 'text-emerald-600',
  },
  blue: {
    bg: 'from-blue-600 to-indigo-600',
    tab: 'border-blue-500 text-blue-600 bg-blue-50',
    tabActive: 'border-blue-600 text-blue-700 bg-blue-100 shadow-lg',
    accent: 'text-blue-600',
  },
  green: {
    bg: 'from-green-600 to-blue-600',
    tab: 'border-green-500 text-green-600 bg-green-50',
    tabActive: 'border-green-600 text-green-700 bg-green-100 shadow-lg',
    accent: 'text-green-600',
  },
  orange: {
    bg: 'from-orange-600 to-red-600',
    tab: 'border-orange-500 text-orange-600 bg-orange-50',
    tabActive: 'border-orange-600 text-orange-700 bg-orange-100 shadow-lg',
    accent: 'text-orange-600',
  },
  indigo: {
    bg: 'from-indigo-600 to-purple-600',
    tab: 'border-indigo-500 text-indigo-600 bg-indigo-50',
    tabActive: 'border-indigo-600 text-indigo-700 bg-indigo-100 shadow-lg',
    accent: 'text-indigo-600',
  },
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const colors = colorVariants[currentTab.color as keyof typeof colorVariants];

  // Pagination logic
  const totalCards = currentTab.cards?.length || 0;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = currentTab.cards?.slice(startIndex, endIndex) || [];

  // Reset pagination when changing tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-slate-200/60 bg-white/90 backdrop-blur-md z-50 shadow-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  RandomAccessMind
                </h1>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Steve Campbell's Brain
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <Link href="https://halomap.io">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  HaloMap.io
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Tab Browser Interface */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Tab Bar */}
        <div className="bg-slate-100/80 border-b border-slate-200 px-6 py-2 flex-shrink-0">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const tabColors =
                colorVariants[tab.color as keyof typeof colorVariants];
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-t-lg border-2 border-b-0 transition-all
                    ${
                      isActive
                        ? `${tabColors.tabActive} -mb-0.5`
                        : `${tabColors.tab} hover:bg-opacity-80`
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium text-sm whitespace-nowrap">
                    {tab.label}
                  </span>
                  {tab.id === 'welcome' && (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* iPad-Style Card Interface */}
        <div className="flex-1 bg-white relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-5`}
          ></div>

          <div className="relative h-full p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {/* Tab Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-4 shadow-sm">
                  <Sparkles className={`h-4 w-4 ${colors.accent}`} />
                  <span className="text-sm font-medium text-slate-700">
                    Currently viewing
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 leading-tight">
                  {currentTab.title}
                </h1>

                <p
                  className={`text-lg md:text-xl font-medium mb-3 ${colors.accent}`}
                >
                  {currentTab.subtitle}
                </p>

                <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {currentTab.description}
                </p>
              </div>

              {/* iPad-Style Cards Grid */}
              <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-8">
                {currentCards.map((card: any, index: number) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => {
                      if (card.internal && card.link === '#idea-form') {
                        return;
                      }
                      if (card.external) {
                        window.open(card.link, '_blank');
                      }
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 h-full flex flex-col group-hover:border-slate-300">
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge
                            variant="secondary"
                            className={`text-xs font-medium ${colors.accent.replace(
                              '-600',
                              '-700'
                            )} bg-opacity-15 px-3 py-1 rounded-full`}
                          >
                            {card.badge}
                          </Badge>
                          {card.external && (
                            <div className="p-1 bg-slate-100 rounded-full">
                              <ExternalLink className="h-3 w-3 text-slate-500" />
                            </div>
                          )}
                          {card.icon && (
                            <div className="p-1 bg-slate-100 rounded-full">
                              <card.icon className="h-3 w-3 text-slate-500" />
                            </div>
                          )}
                        </div>

                        {(card as any).status && (
                          <div
                            className={`flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ${
                              (card as any).status === 'building' ||
                              (card as any).status === 'active' ||
                              (card as any).status === 'live'
                                ? 'text-green-700 bg-green-100'
                                : (card as any).status === 'researching' ||
                                  (card as any).status === 'beta'
                                ? 'text-blue-700 bg-blue-100'
                                : (card as any).status === 'training' ||
                                  (card as any).status === 'testing'
                                ? 'text-purple-700 bg-purple-100'
                                : (card as any).status === 'prototyping' ||
                                  (card as any).status === 'developing'
                                ? 'text-orange-700 bg-orange-100'
                                : (card as any).status === 'analyzing' ||
                                  (card as any).status === 'research'
                                ? 'text-indigo-700 bg-indigo-100'
                                : (card as any).status === 'draft' ||
                                  (card as any).status === 'writing'
                                ? 'text-yellow-700 bg-yellow-100'
                                : 'text-slate-700 bg-slate-100'
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                (card as any).status === 'building' ||
                                (card as any).status === 'active' ||
                                (card as any).status === 'live'
                                  ? 'bg-green-500 animate-pulse'
                                  : (card as any).status === 'researching' ||
                                    (card as any).status === 'beta'
                                  ? 'bg-blue-500'
                                  : (card as any).status === 'training' ||
                                    (card as any).status === 'testing'
                                  ? 'bg-purple-500'
                                  : (card as any).status === 'prototyping' ||
                                    (card as any).status === 'developing'
                                  ? 'bg-orange-500'
                                  : (card as any).status === 'analyzing' ||
                                    (card as any).status === 'research'
                                  ? 'bg-indigo-500'
                                  : (card as any).status === 'draft' ||
                                    (card as any).status === 'writing'
                                  ? 'bg-yellow-500'
                                  : 'bg-slate-500'
                              }`}
                            ></div>
                            <span className="capitalize">
                              {(card as any).status}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="flex-grow">
                        <h3 className="font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors text-lg leading-tight">
                          {card.title}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {card.description}
                        </p>
                      </div>

                      {/* Card Footer - Metadata */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                          {card.fcl && (
                            <div className="flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              <span>FCL {card.fcl}</span>
                            </div>
                          )}
                          {card.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{card.readTime}</span>
                            </div>
                          )}
                          {card.users && (
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{card.users}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          {card.published && (
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{card.published}</span>
                            </div>
                          )}
                          {card.followers && (
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{card.followers}</span>
                            </div>
                          )}
                          {card.repos && (
                            <div className="flex items-center gap-1">
                              <Github className="h-3 w-3" />
                              <span>{card.repos}</span>
                            </div>
                          )}
                          {card.complexity && (
                            <div className="flex items-center gap-1">
                              <Beaker className="h-3 w-3" />
                              <span>{card.complexity}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Pagination - iPad Style */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl hover:shadow-lg transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-slate-200 shadow-sm">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-medium transition-all ${
                            currentPage === page
                              ? `bg-gradient-to-r ${colors.bg} text-white shadow-lg`
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl hover:shadow-lg transition-all"
                  >
                    Next
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}

              {/* Special Connect Form - iPad Style */}
              {activeTab === 'connect' && (
                <div className="max-w-md mx-auto">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-xl mb-2">
                        Quick Idea Share
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Tell me about your app idea and let's make it real
                      </p>
                    </div>
                    <div className="space-y-4">
                      <textarea
                        placeholder="What's your app idea? Describe your vision..."
                        className="w-full p-4 border border-slate-200 rounded-xl resize-none text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        rows={4}
                      />
                      <Button
                        size="lg"
                        className={`w-full bg-gradient-to-r ${colors.bg} text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Send & Let's Build Together
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-slate-100 border-t border-slate-200 px-6 py-2 flex items-center justify-between text-xs text-slate-600 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>50+ tabs open</span>
          </div>
          <span>© 2025 Steve Campbell</span>
        </div>
        <div className="flex items-center gap-4">
          <span>RandomAccessMind v1.0</span>
          <span>Organizing chaos since 2025</span>
        </div>
      </div>
    </div>
  );
}
