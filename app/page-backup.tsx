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
import React, { useState } from 'react';

const tabs = [
  {
    id: 'welcome',
    label: 'Welcome',
    icon: Brain,
    color: 'purple',
    title: 'Random Access Mind',
    subtitle: 'Organizing the chaos of a curious brain',
    description:
      'Welcome to my Random Access Mind - where abstract thoughts connect into practical insights.',
    cards: [
      {
        title: 'My Manifesto',
        description:
          'The story behind embracing a 50+ tab brain and turning mental chaos into a powerful creative tool.',
        link: '/stream/welcome-to-my-random-access-mind',
        badge: 'Philosophy',
        fcl: 68,
        readTime: '8 min',
        published: '2025-06-19',
      },
      {
        title: 'About Steve Campbell',
        description:
          'Background, journey, and the evolution from overwhelming thoughts to structured creativity and authentic living.',
        link: '/about',
        badge: 'Personal',
        readTime: '4 min',
      },
      {
        title: 'How to Navigate',
        description:
          'Guide to exploring this adaptive content system designed for the deeply curious mind.',
        link: '#guide',
        badge: 'Guide',
        readTime: '3 min',
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
    color: 'teal',
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
    bg: 'from-purple-700 to-blue-700',
    tab: 'border-purple-600 text-purple-800 bg-purple-50',
    tabActive: 'border-purple-700 text-purple-900 bg-purple-100 shadow-lg',
    accent: 'text-purple-700',
  },
  emerald: {
    bg: 'from-emerald-700 to-teal-700',
    tab: 'border-emerald-600 text-emerald-800 bg-emerald-50',
    tabActive: 'border-emerald-700 text-emerald-900 bg-emerald-100 shadow-lg',
    accent: 'text-emerald-700',
  },
  teal: {
    bg: 'from-teal-700 to-cyan-700',
    tab: 'border-teal-600 text-teal-800 bg-teal-50',
    tabActive: 'border-teal-700 text-teal-900 bg-teal-100 shadow-lg',
    accent: 'text-teal-700',
  },
  blue: {
    bg: 'from-blue-700 to-indigo-700',
    tab: 'border-blue-600 text-blue-800 bg-blue-50',
    tabActive: 'border-blue-700 text-blue-900 bg-blue-100 shadow-lg',
    accent: 'text-blue-700',
  },
  orange: {
    bg: 'from-orange-700 to-red-700',
    tab: 'border-orange-600 text-orange-800 bg-orange-50',
    tabActive: 'border-orange-700 text-orange-900 bg-orange-100 shadow-lg',
    accent: 'text-orange-700',
  },
  indigo: {
    bg: 'from-indigo-700 to-purple-700',
    tab: 'border-indigo-600 text-indigo-800 bg-indigo-50',
    tabActive: 'border-indigo-700 text-indigo-900 bg-indigo-100 shadow-lg',
    accent: 'text-indigo-700',
  },
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const colors = colorVariants[currentTab.color as keyof typeof colorVariants];

  // Find active card if subtab is selected
  const activeCard = activeSubTab
    ? currentTab.cards?.find(
        (card) => card.title.toLowerCase().replace(/\s+/g, '-') === activeSubTab
      )
    : null;

  // Get sub-tabs from current tab's cards
  const subTabs =
    currentTab.cards?.map((card) => ({
      id: card.title.toLowerCase().replace(/\s+/g, '-'),
      label: card.title,
      card: card,
    })) || [];

  // Pagination logic for cards view
  const totalCards = currentTab.cards?.length || 0;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = currentTab.cards?.slice(startIndex, endIndex) || [];

  // Reset pagination and subtab when changing main tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveSubTab(null);
    setCurrentPage(1);
  };

  // Handle card click to open as subtab (always internal)
  const handleCardClick = (card: any) => {
    const subTabId = card.title.toLowerCase().replace(/\s+/g, '-');
    setActiveSubTab(subTabId);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-slate-300 bg-white backdrop-blur-md z-50 shadow-md flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-purple-700 to-blue-700 rounded-lg shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  RandomAccessMind
                </h1>
                <p className="text-xs text-slate-700 -mt-0.5 font-medium">
                  Steve Campbell's Brain
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <Link href="https://halomap.io">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-700 hover:text-slate-900 font-medium"
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

        {/* Sub-Tab Bar */}
        {subTabs.length > 0 && (
          <div className="relative">
            {/* Visual extension of parent tab color into sub-tab area */}
            <div
              className={`h-3 ${colors.tab
                .split(' ')
                .find((c) => c.includes('bg-'))}`}
            ></div>

            <div
              className={`${colors.tab
                .split(' ')
                .find((c) =>
                  c.includes('bg-')
                )} border-b border-slate-300 px-6 py-2 flex-shrink-0 relative`}
            >
              {/* Left edge continuation of parent tab color */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${colors.tab
                  .split(' ')
                  .find((c) => c.includes('border-'))
                  ?.replace('border-', 'bg-')}`}
              ></div>

              <div className="flex gap-1 overflow-x-auto scrollbar-hide ml-2">
                <button
                  onClick={() => setActiveSubTab(null)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-t-lg border-2 border-b-0 transition-all text-sm font-medium
                    ${
                      !activeSubTab
                        ? `${colors.tabActive} -mb-0.5 shadow-sm scale-105`
                        : `${colors.tab} hover:bg-opacity-80`
                    }
                  `}
                >
                  <span className="font-semibold">Overview</span>
                </button>
                {subTabs.map((subTab) => {
                  const isActiveSubTab = activeSubTab === subTab.id;

                  return (
                    <button
                      key={subTab.id}
                      onClick={() => setActiveSubTab(subTab.id)}
                      className={`
                        flex items-center gap-2 px-3 py-1.5 rounded-t-lg border-2 border-b-0 transition-all text-sm font-medium
                        ${
                          isActiveSubTab
                            ? `${colors.tabActive} -mb-0.5 shadow-sm scale-105`
                            : `${colors.tab} hover:bg-opacity-80`
                        }
                      `}
                    >
                      <span className="font-semibold whitespace-nowrap">
                        {subTab.label}
                      </span>
                      {(subTab.card as any).status && (
                        <div
                          className={`w-2 h-2 rounded-full ${
                            (subTab.card as any).status === 'building' ||
                            (subTab.card as any).status === 'active' ||
                            (subTab.card as any).status === 'live'
                              ? 'bg-green-500 animate-pulse'
                              : (subTab.card as any).status === 'researching' ||
                                (subTab.card as any).status === 'beta'
                              ? 'bg-blue-500'
                              : (subTab.card as any).status === 'training' ||
                                (subTab.card as any).status === 'testing'
                              ? 'bg-purple-500'
                              : (subTab.card as any).status === 'prototyping' ||
                                (subTab.card as any).status === 'developing'
                              ? 'bg-orange-500'
                              : (subTab.card as any).status === 'analyzing' ||
                                (subTab.card as any).status === 'research'
                              ? 'bg-indigo-500'
                              : (subTab.card as any).status === 'draft' ||
                                (subTab.card as any).status === 'writing'
                              ? 'bg-yellow-500'
                              : 'bg-slate-500'
                          }`}
                        ></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* iPad-Style Card Interface */}
        <div className="flex-1 bg-white relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-5`}
          ></div>

          <div className="relative h-full p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {/* Tab Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-300 rounded-full px-4 py-2 mb-4 shadow-sm">
                  <Sparkles className={`h-4 w-4 ${colors.accent}`} />
                  <span className="text-sm font-semibold text-slate-800">
                    Currently viewing
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 leading-tight">
                  {activeCard ? activeCard.title : currentTab.title}
                </h1>

                <p
                  className={`text-lg md:text-xl font-medium mb-3 ${colors.accent}`}
                >
                  {activeCard ? activeCard.badge : currentTab.subtitle}
                </p>

                <p className="text-base text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                  {activeCard ? activeCard.description : currentTab.description}
                </p>
              </div>

              {/* Content Area - Overview or Individual Card */}
              {!activeCard ? (
                // Overview - Cards Grid
                <>
                  {/* iPad-Style Cards Grid */}
                  <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-8">
                    {currentCards.map((card: any, index: number) => (
                      <div
                        key={index}
                        className="group cursor-pointer"
                        onClick={() => handleCardClick(card)}
                      >
                        <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-slate-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 h-full flex flex-col group-hover:border-slate-400">
                          {/* Card Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge
                                variant="secondary"
                                className={`text-xs font-semibold ${colors.accent.replace(
                                  '-700',
                                  '-800'
                                )} bg-opacity-20 px-3 py-1 rounded-full border`}
                              >
                                {card.badge}
                              </Badge>
                              {(card as any).icon && (
                                <div className="p-1 bg-slate-100 rounded-full">
                                  {React.createElement((card as any).icon, {
                                    className: 'h-3 w-3 text-slate-500',
                                  })}
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
                                      : (card as any).status ===
                                          'researching' ||
                                        (card as any).status === 'beta'
                                      ? 'bg-blue-500'
                                      : (card as any).status === 'training' ||
                                        (card as any).status === 'testing'
                                      ? 'bg-purple-500'
                                      : (card as any).status ===
                                          'prototyping' ||
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
                            <h3 className="font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors text-lg leading-tight">
                              {card.title}
                            </h3>

                            <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-3 font-medium">
                              {card.description}
                            </p>
                          </div>

                          {/* Card Footer - Metadata */}
                          <div className="flex items-center justify-between text-xs text-slate-600 mt-auto pt-4 border-t border-slate-200 font-medium">
                            <div className="flex items-center gap-3">
                              {(card as any).fcl && (
                                <div className="flex items-center gap-1">
                                  <Target className="h-3 w-3" />
                                  <span>FCL {(card as any).fcl}</span>
                                </div>
                              )}
                              {(card as any).readTime && (
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{(card as any).readTime}</span>
                                </div>
                              )}
                              {(card as any).users && (
                                <div className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  <span>{(card as any).users}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center gap-3">
                              {(card as any).published && (
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{(card as any).published}</span>
                                </div>
                              )}
                              {(card as any).followers && (
                                <div className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  <span>{(card as any).followers}</span>
                                </div>
                              )}
                              {(card as any).repos && (
                                <div className="flex items-center gap-1">
                                  <Github className="h-3 w-3" />
                                  <span>{(card as any).repos}</span>
                                </div>
                              )}
                              {(card as any).complexity && (
                                <div className="flex items-center gap-1">
                                  <Beaker className="h-3 w-3" />
                                  <span>{(card as any).complexity}</span>
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
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((page) => (
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
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(totalPages, prev + 1)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl hover:shadow-lg transition-all"
                      >
                        Next
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                // Individual Card Content View
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-slate-300 shadow-xl">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className={`text-sm font-semibold ${colors.accent.replace(
                            '-700',
                            '-800'
                          )} bg-opacity-20 px-4 py-2 rounded-full border`}
                        >
                          {activeCard.badge}
                        </Badge>
                      </div>

                      {(activeCard as any).status && (
                        <div
                          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${
                            (activeCard as any).status === 'building' ||
                            (activeCard as any).status === 'active' ||
                            (activeCard as any).status === 'live'
                              ? 'text-green-700 bg-green-100'
                              : (activeCard as any).status === 'researching' ||
                                (activeCard as any).status === 'beta'
                              ? 'text-blue-700 bg-blue-100'
                              : (activeCard as any).status === 'training' ||
                                (activeCard as any).status === 'testing'
                              ? 'text-purple-700 bg-purple-100'
                              : (activeCard as any).status === 'prototyping' ||
                                (activeCard as any).status === 'developing'
                              ? 'text-orange-700 bg-orange-100'
                              : (activeCard as any).status === 'analyzing' ||
                                (activeCard as any).status === 'research'
                              ? 'text-indigo-700 bg-indigo-100'
                              : (activeCard as any).status === 'draft' ||
                                (activeCard as any).status === 'writing'
                              ? 'text-yellow-700 bg-yellow-100'
                              : 'text-slate-700 bg-slate-100'
                          }`}
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${
                              (activeCard as any).status === 'building' ||
                              (activeCard as any).status === 'active' ||
                              (activeCard as any).status === 'live'
                                ? 'bg-green-500 animate-pulse'
                                : (activeCard as any).status ===
                                    'researching' ||
                                  (activeCard as any).status === 'beta'
                                ? 'bg-blue-500'
                                : (activeCard as any).status === 'training' ||
                                  (activeCard as any).status === 'testing'
                                ? 'bg-purple-500'
                                : (activeCard as any).status ===
                                    'prototyping' ||
                                  (activeCard as any).status === 'developing'
                                ? 'bg-orange-500'
                                : (activeCard as any).status === 'analyzing' ||
                                  (activeCard as any).status === 'research'
                                ? 'bg-indigo-500'
                                : (activeCard as any).status === 'draft' ||
                                  (activeCard as any).status === 'writing'
                                ? 'bg-yellow-500'
                                : 'bg-slate-500'
                            }`}
                          ></div>
                          <span className="capitalize">
                            {(activeCard as any).status}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-lg text-slate-800 leading-relaxed mb-6 font-medium">
                        {activeCard.description}
                      </p>

                      {/* Full Content for Manifesto */}
                      {activeCard.title === 'My Manifesto' && (
                        <div className="prose prose-lg max-w-none mt-8 pt-8 border-t border-slate-200">
                          <div className="bg-purple-50 rounded-xl p-6 mb-8">
                            <p className="text-lg leading-relaxed text-slate-700 mb-0">
                              Hey there 👋, I'm Steve, and my brain feels like a web browser with about 50 tabs open. Constantly. 
                              (And for anyone who's ever seen my actual laptop, you'll know that's not just a metaphor! 💻)
                            </p>
                          </div>

                          <p>
                            My mental tabs span across business architecture, mindful drinking apps, AI co-creation, 
                            digital twins, startup development, and yes—amidst all that—global politics, Bitcoin, and golf. 
                            That's not just a busy day for me. That's my default setting.
                          </p>

                          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            🧠 Welcome to Random Access Mind
                          </h3>

                          <p>
                            I call this project 'Random Access Mind' because my thoughts are often highly abstract, 
                            constantly zooming out to see the bigger picture and connect seemingly unrelated dots. 
                            They don't file neatly from A to B. They're pulled from all over the place, all at once, 
                            much like how a computer retrieves data from its RAM. 💾
                          </p>

                          <p>
                            For years, this felt like a constant stream of information without a filter, something to be 
                            managed or suppressed. It's a fantastic engine for creativity and curiosity, but it can also be 
                            a bit... chaotic. 🌪️
                          </p>

                          <p>
                            It's actually only in the last six months that I've truly begun to understand this unique way 
                            my mind operates—not as a challenge to be overcome, but as a powerful tool to be utilized. 
                            Embracing this has allowed me to be more authentic and real with myself about how I want to 
                            live and who I want to be.
                          </p>

                          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            ✨ From Chaos to Clarity
                          </h3>

                          <p>
                            Recently, I've had a breakthrough. Instead of fighting this relentless mental activity, 
                            I've decided it's time to harness it. But how do I plan to harness it? This is the core 
                            of the entire project.
                          </p>

                          <p>
                            I realized it's not enough to just throw ideas at a wall or a machine and see what sticks. 
                            I needed a more disciplined approach. Over the past few months, I've been developing a 
                            personal framework for this process—a specific methodology for capturing my own 'train of 
                            thought' as it happens.
                          </p>

                          <blockquote className="border-l-4 border-purple-500 bg-purple-50 pl-6 py-4 my-6 italic">
                            It's a way for me to separate the creative signal from the distracting noise and to 
                            authenticate which ideas are truly mine.
                          </blockquote>

                          <p>
                            For instance, my brain might jump between the intricacies of a new software development 
                            workflow and a deep philosophical debate about consciousness. After running it through my 
                            process, the distilled thought emerges:
                          </p>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                            <p className="text-lg font-medium text-blue-900 mb-0">
                              "How can we use deep, abstract frameworks to build practical tools that genuinely help 
                              people navigate their own lives and decisions?" 💡
                            </p>
                          </div>

                          <p>
                            That's the real magic—connecting theory to tangible reality. That's the kind of exploration 
                            we'll be doing here.
                          </p>

                          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">What to Expect</h3>

                          <p>
                            Random Access Mind is the full spectrum. One week, it might be a practical guide on 
                            prototyping an app from scratch using AI. The next, we could be exploring philosophical 
                            concepts like 'Industry 5.0' and 'Human 5.0', or diving into better frameworks for 
                            cross-cultural communication.
                          </p>

                          <p>
                            We'll share deep learnings on technical subjects and musings on the future of collaboration. 
                            It's a space for the deeply curious, designed to connect the dots between technology, 
                            philosophy, and practical application.
                          </p>

                          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 my-8 text-center">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">It's the product of a restless mind, finally organized.</h4>
                            <p className="text-slate-700 mb-0">
                              This is an experiment in clarity, designed for anyone whose brain also has too many tabs open.
                            </p>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Join the Journey</h3>

                          <p>
                            If any of this sounds familiar, if your brain also operates like a web browser gone wild, 
                            I'd love for you to explore along. This is my attempt to harness the chaos and turn it 
                            into something meaningful.
                          </p>

                          <p className="text-lg font-medium">
                            Welcome to my Random Access Mind. Let's see where this experiment takes us. 🚀
                          </p>

                          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                            <p className="text-slate-600 mb-0">
                              Cheers,<br />
                              <span className="font-semibold text-slate-900">Steve 😎🤙</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Metadata Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose bg-slate-100 rounded-xl p-6 border border-slate-200">
                        {(activeCard as any).fcl && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900">
                              {(activeCard as any).fcl}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              FCL Level
                            </div>
                          </div>
                        )}
                        {(activeCard as any).readTime && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900">
                              {(activeCard as any).readTime}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              Read Time
                            </div>
                          </div>
                        )}
                        {(activeCard as any).users && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900">
                              {(activeCard as any).users}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              Users
                            </div>
                          </div>
                        )}
                        {(activeCard as any).published && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900">
                              {(activeCard as any).published}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              Published
                            </div>
                          </div>
                        )}
                        {(activeCard as any).followers && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900">
                              {(activeCard as any).followers}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              Followers
                            </div>
                          </div>
                        )}
                        {(activeCard as any).repos && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900">
                              {(activeCard as any).repos}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              Repositories
                            </div>
                          </div>
                        )}
                        {(activeCard as any).complexity && (
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-900 capitalize">
                              {(activeCard as any).complexity}
                            </div>
                            <div className="text-xs text-slate-700 uppercase tracking-wide font-semibold">
                              Complexity
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-slate-200 border-t border-slate-300 px-6 py-2 flex items-center justify-between text-xs text-slate-800 flex-shrink-0 font-medium">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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
