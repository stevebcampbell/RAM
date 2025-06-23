'use client';

import {
  Activity,
  ArrowRight,
  Beaker,
  BookOpen,
  Brain,
  FileText,
  Globe,
  Home,
  Lightbulb,
  Search,
  Smartphone,
  User,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSearch } from '../contexts/SearchContext';

const tabs = [
  { id: 'home', label: 'Brain', icon: Brain, color: 'purple', href: '/' },
  {
    id: 'live-thoughts',
    label: 'Live Thoughts',
    icon: Activity,
    color: 'green',
    href: '/live-thoughts',
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: Beaker,
    color: 'orange',
    href: '/framework',
  },
  {
    id: 'tabs',
    label: 'Open Tabs',
    icon: Globe,
    color: 'emerald',
    href: '/tabs',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: Smartphone,
    color: 'teal',
    href: '/projects',
  },
  { id: 'stream', label: 'Stream', icon: Zap, color: 'blue', href: '/stream' },
  {
    id: 'connect',
    label: 'Connect',
    icon: Users,
    color: 'violet',
    href: '/connect',
  },
];

const searchCommands = [
  // Pages
  {
    command: '/home',
    description: 'Go to Brain visualization homepage',
    href: '/',
    category: 'Navigation',
  },
  {
    command: '/live-thoughts',
    description: 'Real-time thought capture interface',
    href: '/live-thoughts',
    category: 'Features',
  },
  {
    command: '/framework',
    description: 'Browse frameworks library',
    href: '/framework',
    category: 'Content',
  },
  {
    command: '/stream',
    description: 'Published thoughts and blog posts',
    href: '/stream',
    category: 'Content',
  },
  {
    command: '/book',
    description: 'Read my personal manifesto',
    href: '/book',
    category: 'Content',
  },
  {
    command: '/about',
    description: 'Learn about Steve Campbell',
    href: '/about',
    category: 'Info',
  },
  {
    command: '/tabs',
    description: 'Browse my 50+ open browser tabs',
    href: '/tabs',
    category: 'Features',
  },
  {
    command: '/projects',
    description: 'View active projects and experiments',
    href: '/projects',
    category: 'Features',
  },
  {
    command: '/connect',
    description: 'Get in touch and collaborate',
    href: '/connect',
    category: 'Contact',
  },

  // Frameworks
  {
    command: 'logic log',
    description:
      "Human Co-Creator's Guiding Logic Log - AI collaboration methodology",
    href: '/framework',
    category: 'Frameworks',
  },
  {
    command: 'co-evolution framework',
    description: 'Earth-Human Co-Evolution Framework - sustainability guide',
    href: '/framework',
    category: 'Frameworks',
  },
  {
    command: 'cognitive load',
    description: 'Cognitive Load Management - Random Access Mind strategies',
    href: '/framework',
    category: 'Frameworks',
  },
  {
    command: 'human thought authentication',
    description: 'Methodology for authenticating human rationale',
    href: '/framework',
    category: 'Frameworks',
  },
  {
    command: 'earth-human metric',
    description: 'Measuring holistic planetary and human well-being',
    href: '/framework',
    category: 'Frameworks',
  },

  // Content & Concepts
  {
    command: 'manifesto',
    description: "Steve Campbell's personal philosophy and worldview",
    href: '/book',
    category: 'Philosophy',
  },
  {
    command: 'random access mind',
    description: 'Understanding the 50+ tab brain cognitive style',
    href: '/book',
    category: 'Psychology',
  },
  {
    command: 'ai collaboration',
    description: 'Human-AI partnership methodologies and examples',
    href: '/framework',
    category: 'AI',
  },
  {
    command: 'thought process',
    description: 'Explore transparent human decision-making',
    href: '/live-thoughts',
    category: 'Cognitive Science',
  },
  {
    command: 'neural network',
    description: 'Interactive brain visualization and mind mapping',
    href: '/',
    category: 'Visualization',
  },
  {
    command: 'keylogging',
    description: 'Real-time thought capture technology',
    href: '/live-thoughts',
    category: 'Technology',
  },
  {
    command: 'brain visualization',
    description: 'Interactive neural network of ideas and connections',
    href: '/',
    category: 'Visualization',
  },

  // Features & Tools
  {
    command: 'live thoughts demo',
    description: 'See real-time thought capture in action',
    href: '/live-thoughts',
    category: 'Demo',
  },
  {
    command: 'websocket streaming',
    description: 'Real-time data streaming for thought capture',
    href: '/live-thoughts',
    category: 'Technology',
  },
  {
    command: 'frameworks library',
    description: 'Browse comprehensive methodology collection',
    href: '/framework',
    category: 'Library',
  },
  {
    command: 'browser tabs organization',
    description: 'How to manage 50+ active browser tabs',
    href: '/tabs',
    category: 'Productivity',
  },

  // Philosophy & Ideas
  {
    command: 'sustainability',
    description: 'Earth-Human co-evolution and regenerative systems',
    href: '/framework',
    category: 'Environment',
  },
  {
    command: 'human evolution',
    description: 'Next phase of human development and consciousness',
    href: '/framework',
    category: 'Evolution',
  },
  {
    command: 'cognitive diversity',
    description: 'Embracing different thinking styles and mental models',
    href: '/framework',
    category: 'Neurodiversity',
  },
  {
    command: 'proof of thought',
    description: 'Authenticating human reasoning in the AI age',
    href: '/framework',
    category: 'AI Ethics',
  },

  // Personal
  {
    command: 'steve campbell',
    description: 'About the creator of RandomAccessMind',
    href: '/about',
    category: 'Personal',
  },
  {
    command: '50+ tabs',
    description: 'Understanding the random access thinking style',
    href: '/tabs',
    category: 'Personal',
  },
  {
    command: 'organized chaos',
    description: 'How Steve organizes his complex mental models',
    href: '/',
    category: 'Philosophy',
  },
];

interface GlobalNavigationProps {
  children: React.ReactNode;
}

export default function GlobalNavigation({ children }: GlobalNavigationProps) {
  const { searchQuery, setSearchQuery, searchResults, setSearchResults } =
    useSearch();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchFocused(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = searchCommands.filter(
        (cmd) =>
          cmd.command.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description.toLowerCase().includes(query.toLowerCase()) ||
          cmd.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 12));
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      router.push(searchResults[0].href);
      setSearchQuery('');
      setSearchResults([]);
      setIsSearchFocused(false);
    }
  };

  const handleResultClick = (href: string) => {
    router.push(href);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  const getActiveTab = () => {
    return tabs.find((tab) => tab.href === pathname) || tabs[0];
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Navigation':
        return Home;
      case 'Features':
        return Zap;
      case 'Content':
        return FileText;
      case 'Frameworks':
        return BookOpen;
      case 'AI':
        return Brain;
      case 'Technology':
        return Search;
      case 'Demo':
        return Activity;
      case 'Philosophy':
        return Lightbulb;
      case 'Personal':
        return User;
      default:
        return ArrowRight;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col overflow-hidden">
      {/* Global Navigation Header - Fixed Height */}
      <div className="flex-shrink-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm relative z-10">
        {/* Tabs Navigation */}
        <div className="px-4 pt-3">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Left: Navigation Tabs */}
              <div className="flex items-center space-x-1">
                {tabs.map((tab) => {
                  const isActive = pathname === tab.href;
                  const Icon = tab.icon;
                  return (
                    <Link
                      key={tab.id}
                      href={tab.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? `bg-${tab.color}-100 text-${tab.color}-700 shadow-sm`
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Brand */}
              <div className="hidden lg:block">
                <Link href="/" className="text-lg font-bold text-slate-900">
                  RandomAccessMind
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Search Bar */}
        <div className="px-4 pb-3">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="flex items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500 mr-3">
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">stevecampbell.blog</span>
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search everything... (frameworks, live thoughts, manifesto, /tabs)"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() =>
                        setTimeout(() => setIsSearchFocused(false), 300)
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setSearchQuery('');
                          setSearchResults([]);
                          setIsSearchFocused(false);
                          e.currentTarget.blur();
                        }
                      }}
                      className="w-full pl-10 pr-20 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none text-sm bg-white/90 backdrop-blur-sm placeholder-slate-500"
                    />

                    {/* Search shortcut hint */}
                    {!isSearchFocused && searchQuery.length === 0 && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border">
                          ⌘
                        </kbd>
                        <kbd className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border">
                          K
                        </kbd>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Dropdown - Fixed positioning relative to viewport */}
      {searchQuery.length > 0 && (
        <div className="fixed top-[120px] left-4 right-4 max-w-7xl mx-auto z-[99999]">
          <div className="ml-[140px] bg-white border border-slate-200 rounded-xl shadow-2xl max-h-96 overflow-hidden backdrop-blur-lg bg-white/98">
            {searchResults.length > 0 ? (
              <div className="py-2">
                {/* Search Results Header */}
                <div className="px-4 py-2 border-b border-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      {searchResults.length} result
                      {searchResults.length !== 1 ? 's' : ''} for "{searchQuery}
                      "
                    </span>
                    <span className="text-xs text-slate-500">
                      Press ↵ to go to first result
                    </span>
                  </div>
                </div>

                {/* Grouped Results by Category */}
                <div className="max-h-80 overflow-y-auto">
                  {Array.from(
                    new Set(searchResults.map((r) => r.category))
                  ).map((category) => {
                    const categoryResults = searchResults.filter(
                      (r) => r.category === category
                    );
                    const CategoryIcon = getCategoryIcon(category);

                    return (
                      <div
                        key={category}
                        className="border-b border-slate-50 last:border-b-0"
                      >
                        {/* Category Header */}
                        <div className="px-4 py-2 bg-slate-50/50">
                          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                            {category}
                          </span>
                        </div>

                        {/* Category Results */}
                        {categoryResults.map((result, index) => (
                          <button
                            key={`${category}-${index}`}
                            onClick={() => handleResultClick(result.href)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left group"
                          >
                            {/* Icon */}
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                              <CategoryIcon className="h-4 w-4 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-slate-900 truncate group-hover:text-blue-700">
                                {/* Highlight matching text */}
                                {result.command
                                  .split(new RegExp(`(${searchQuery})`, 'gi'))
                                  .map((part: string, i: number) =>
                                    part.toLowerCase() ===
                                    searchQuery.toLowerCase() ? (
                                      <mark
                                        key={i}
                                        className="bg-yellow-200 text-slate-900"
                                      >
                                        {part}
                                      </mark>
                                    ) : (
                                      part
                                    )
                                  )}
                              </div>
                              <div className="text-sm text-slate-600 truncate">
                                {result.description}
                              </div>
                            </div>

                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="px-4 py-8 text-center">
                <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <div className="text-sm text-slate-600 mb-1">
                  No results found for "{searchQuery}"
                </div>
                <div className="text-xs text-slate-500">
                  Try searching for: framework, live thoughts, or manifesto
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area - Fills remaining space */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
