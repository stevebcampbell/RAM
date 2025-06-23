'use client';

import {
  Activity,
  Beaker,
  Brain,
  Eye,
  FileText,
  GitBranch,
  Globe,
  Lightbulb,
  Smartphone,
  Terminal,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
  { id: 'brain', label: 'Brain', icon: Brain, color: 'purple' },
  {
    id: 'live-thoughts',
    label: 'Live Thoughts',
    icon: Terminal,
    color: 'green',
  },
  { id: 'frameworks', label: 'Frameworks', icon: Beaker, color: 'orange' },
  { id: 'tabs', label: 'Open Tabs', icon: Globe, color: 'emerald' },
  { id: 'projects', label: 'Projects', icon: Smartphone, color: 'teal' },
  { id: 'stream', label: 'Stream', icon: Zap, color: 'blue' },
  { id: 'connect', label: 'Connect', icon: Users, color: 'violet' },
];

const frameworkContent = [
  {
    title: 'The Co-Evolution of Humanity and Earth',
    subtitle:
      'A Framework for Earth-Human and Earth-Adaptive Capacity Maturity - Version 2.0',
    description:
      "Universal framework for guiding humanity's co-evolution with Earth, moving beyond traditional industrial and economic paradigms.",
    author: 'Human Co-Creator & AI',
    date: '23 June 2025',
    readTime: '45 min',
    tags: ['Framework', 'Sustainability', 'Human Evolution', 'Governance'],
    status: 'published',
    thoughtLogEntries: 23,
    humanDecisions: 8,
  },
];

const mindNodes = [
  {
    id: 1,
    x: 20,
    y: 15,
    size: 'large',
    label: 'AI Collaboration',
    color: 'purple',
    connections: [2, 3, 8],
  },
  {
    id: 2,
    x: 60,
    y: 25,
    size: 'medium',
    label: 'Frameworks',
    color: 'orange',
    connections: [4, 5],
  },
  {
    id: 3,
    x: 35,
    y: 45,
    size: 'medium',
    label: 'Live Thoughts',
    color: 'green',
    connections: [6, 7],
  },
  {
    id: 4,
    x: 75,
    y: 10,
    size: 'small',
    label: 'Human Evolution',
    color: 'blue',
    connections: [],
  },
  {
    id: 5,
    x: 80,
    y: 40,
    size: 'small',
    label: 'Earth Systems',
    color: 'emerald',
    connections: [],
  },
  {
    id: 6,
    x: 15,
    y: 70,
    size: 'small',
    label: 'Keylogging',
    color: 'teal',
    connections: [],
  },
  {
    id: 7,
    x: 50,
    y: 65,
    size: 'small',
    label: 'Real-time Stream',
    color: 'cyan',
    connections: [],
  },
  {
    id: 8,
    x: 85,
    y: 75,
    size: 'medium',
    label: 'Open Tabs',
    color: 'violet',
    connections: [9],
  },
  {
    id: 9,
    x: 70,
    y: 85,
    size: 'small',
    label: '50+ Active',
    color: 'pink',
    connections: [],
  },
  {
    id: 10,
    x: 25,
    y: 85,
    size: 'small',
    label: 'Random Access',
    color: 'yellow',
    connections: [],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('brain');

  const renderBrainVisualization = () => (
    <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {mindNodes.map((node) =>
          node.connections.map((targetId) => {
            const target = mindNodes.find((n) => n.id === targetId);
            if (!target) return null;
            return (
              <line
                key={`${node.id}-${targetId}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgba(147, 51, 234, 0.3)"
                strokeWidth="1"
                className="animate-pulse"
              />
            );
          })
        )}
      </svg>

      {/* Central Brain */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <Brain className="h-16 w-16 text-white" />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-4xl font-bold text-white mb-2">
            RandomAccessMind
          </h1>
          <p className="text-xl text-purple-200">
            Steve Campbell's Neural Network
          </p>
        </div>
      </div>

      {/* Mind Nodes */}
      {mindNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          onClick={() => {
            if (node.label === 'Live Thoughts') setActiveTab('live-thoughts');
            if (node.label === 'Frameworks') setActiveTab('frameworks');
            if (node.label === 'Open Tabs') setActiveTab('tabs');
          }}
        >
          <div
            className={`
            ${
              node.size === 'large'
                ? 'w-16 h-16'
                : node.size === 'medium'
                ? 'w-12 h-12'
                : 'w-8 h-8'
            }
            bg-gradient-to-br from-${node.color}-400 to-${node.color}-600
            rounded-full flex items-center justify-center
            shadow-lg group-hover:scale-110 transition-all duration-300
            border-2 border-white/20
          `}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap">
              {node.label}
            </span>
          </div>
        </div>
      ))}

      {/* Stats Panel */}
      <div className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-white">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-2xl font-bold text-green-400">50+</div>
            <div className="text-green-200">Active Tabs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">∞</div>
            <div className="text-blue-200">Connections</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">23</div>
            <div className="text-purple-200">Frameworks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">Live</div>
            <div className="text-orange-200">Thoughts</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="absolute bottom-6 right-6 space-y-3">
        <button
          onClick={() => setActiveTab('live-thoughts')}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Terminal className="h-4 w-4" />
          Live Thoughts
        </button>
        <button
          onClick={() => setActiveTab('frameworks')}
          className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Frameworks
        </button>
      </div>
    </div>
  );

  const renderLiveThoughts = () => (
    <div className="h-full bg-slate-900 text-green-400 font-mono flex flex-col">
      {/* Terminal Header */}
      <div className="flex-shrink-0 bg-slate-800 px-4 py-3 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-slate-300">
            live-thoughts@randomaccessmind:~
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="space-y-2 text-sm">
          <div className="text-green-400">$ ./start-thought-capture.sh</div>
          <div className="text-slate-400">
            Starting Live Thoughts capture...
          </div>
          <div className="text-slate-400">
            WebSocket server listening on ws://localhost:8080
          </div>
          <div className="text-green-400">✓ Connected to thought stream</div>
          <div className="mt-4 space-y-1">
            <div className="text-blue-400">
              [14:32:15]{' '}
              <span className="text-white">
                Working on the live thoughts interface... this is so exciting!
              </span>
            </div>
            <div className="text-blue-400">
              [14:32:18]{' '}
              <span className="text-white">
                Need to make sure everything fits in viewport
              </span>
            </div>
            <div className="text-blue-400">
              [14:32:22]{' '}
              <span className="text-white">
                The brain visualization is perfect for the main tab
              </span>
            </div>
            <div className="text-blue-400">
              [14:32:25]{' '}
              <span className="text-white">
                This should feel like VS Code or browser - no scrolling
              </span>
            </div>
            <div className="text-green-400 animate-pulse">
              [14:32:28] <span className="text-white">▊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Stats */}
      <div className="flex-shrink-0 bg-slate-800 px-4 py-2 border-t border-slate-700 text-xs">
        <div className="flex justify-between text-slate-400">
          <span>
            Status: <span className="text-green-400">CAPTURING</span>
          </span>
          <span>
            WPM: <span className="text-blue-400">67</span>
          </span>
          <span>
            Active: <span className="text-purple-400">142m</span>
          </span>
        </div>
      </div>
    </div>
  );

  const renderFrameworks = () => {
    const frameworksLibrary = [
      {
        id: 'logic-log',
        title: "Human Co-Creator's Guiding Logic Log",
        subtitle:
          'A Methodology for Authenticating Human Thought in the Age of AI',
        version: '10.0 (Final)',
        date: '23 June 2025',
        readTime: '45 min',
        status: 'published',
        category: 'AI Collaboration',
        color: 'orange',
        icon: FileText,
        hook: 'What if the most valuable commodity in the age of AI isn\'t the content it generates, but the verifiable "proof of thought" behind it?',
        bottomLine:
          'This framework provides a methodology for creating Authenticated Human Rationale—logging the human "train of thought" during AI co-creation.',
        keyTakeaways: [
          'AI-generated content lacks inherent authenticity',
          'A Logic Log acts as a "footnote to your own thinking"',
          'Democratize collaboration and provide auditable proof',
          'Focus on authenticating the artisan, not auditing tools',
        ],
      },
      {
        id: 'earth-human-evolution',
        title: 'The Co-Evolution of Humanity and Earth',
        subtitle:
          'A Framework for Earth-Human and Earth-Adaptive Capacity Maturity',
        version: '2.0',
        date: '15 June 2025',
        readTime: '30 min',
        status: 'published',
        category: 'Sustainability',
        color: 'emerald',
        icon: Globe,
        hook: "What if human civilization could evolve beyond extraction to become Earth's regenerative partner?",
        bottomLine:
          "A comprehensive framework for guiding humanity's co-evolution with Earth, moving beyond industrial paradigms.",
        keyTakeaways: [
          'Industry revolutions have created disconnection from Earth',
          'Earth-Human Metric (EHM) measures holistic well-being',
          'Governance must integrate planetary and human health',
          'Technology should enhance Earth-adaptive capacity',
        ],
      },
      {
        id: 'cognitive-load',
        title: 'Cognitive Load Management',
        subtitle: 'Strategies for Thriving with a Random Access Mind',
        version: 'Draft',
        date: 'Coming Soon',
        readTime: '25 min',
        status: 'draft',
        category: 'Cognitive Science',
        color: 'purple',
        icon: Brain,
        hook: 'How do you organize a mind that naturally operates like 50+ browser tabs?',
        bottomLine:
          'A framework for managing cognitive complexity and leveraging mental multi-threading as a superpower.',
        keyTakeaways: [
          'Random access thinking is a cognitive style, not a disorder',
          'Organization systems for complex mental models',
          'Leveraging AI as cognitive scaffolding',
          'Building teams that thrive on cognitive diversity',
        ],
      },
    ];

    return (
      <div className="h-full overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  Frameworks Library
                </h1>
                <p className="text-slate-600">
                  Comprehensive methodologies for navigating complexity
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">
                  {
                    frameworksLibrary.filter((f) => f.status === 'published')
                      .length
                  }{' '}
                  Published
                </span>
                <span className="text-sm text-slate-500">
                  {frameworksLibrary.filter((f) => f.status === 'draft').length}{' '}
                  In Development
                </span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600 mr-2">Categories:</span>
              {Array.from(
                new Set(frameworksLibrary.map((f) => f.category))
              ).map((category) => (
                <span
                  key={category}
                  className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {frameworksLibrary.map((framework) => {
              const Icon = framework.icon;
              return (
                <div
                  key={framework.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Framework Header */}
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${framework.color}-500 to-${framework.color}-600 rounded-xl flex items-center justify-center`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <span
                            className={`bg-${framework.color}-100 text-${framework.color}-800 text-sm font-medium px-3 py-1 rounded-full`}
                          >
                            {framework.status === 'published'
                              ? 'Published'
                              : 'Draft'}
                          </span>
                          <div className="text-xs text-slate-500 mt-1">
                            {framework.category}
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div>{framework.date}</div>
                        <div>{framework.readTime}</div>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-2">
                      {framework.title}
                    </h2>
                    <h3 className="text-lg font-medium text-slate-700 mb-4">
                      {framework.subtitle}
                    </h3>
                  </div>

                  {/* The Hook Preview */}
                  <div
                    className={`bg-gradient-to-r from-${framework.color}-50 to-${framework.color}-100 p-4 border-b border-slate-100`}
                  >
                    <div className="flex items-start gap-3">
                      <Lightbulb
                        className={`h-5 w-5 text-${framework.color}-600 flex-shrink-0 mt-0.5`}
                      />
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">
                          The Hook:
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {framework.hook}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Takeaways Preview */}
                  <div className="p-4">
                    <h4 className="font-medium text-slate-900 mb-2">
                      Key Takeaways:
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {framework.keyTakeaways
                        .slice(0, 2)
                        .map((takeaway, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span
                              className={`w-1.5 h-1.5 bg-${framework.color}-500 rounded-full flex-shrink-0 mt-2`}
                            ></span>
                            {takeaway}
                          </li>
                        ))}
                      {framework.keyTakeaways.length > 2 && (
                        <li className="text-xs text-slate-500 italic">
                          +{framework.keyTakeaways.length - 2} more insights...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="p-4 pt-0">
                    {framework.status === 'published' ? (
                      <Link
                        href="/framework"
                        className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-${framework.color}-500 to-${framework.color}-600 text-white font-medium py-3 px-6 rounded-lg hover:from-${framework.color}-600 hover:to-${framework.color}-700 transition-all duration-200`}
                      >
                        <Eye className="h-4 w-4" />
                        Explore Framework
                      </Link>
                    ) : (
                      <div className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-500 font-medium py-3 px-6 rounded-lg">
                        <GitBranch className="h-4 w-4" />
                        In Development
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coming Soon Hint */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-lg">
              <Activity className="h-4 w-4" />
              <span className="text-sm">More frameworks in development...</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'brain':
        return renderBrainVisualization();
      case 'live-thoughts':
        return renderLiveThoughts();
      case 'frameworks':
        return renderFrameworks();
      case 'tabs':
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Globe className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Open Tabs
              </h2>
              <p className="text-slate-600">
                Browser tab organization coming soon...
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Coming Soon
              </h2>
              <p className="text-slate-600">
                This section is under development
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Content Area - Fixed Height */}
      <div className="flex-1 overflow-hidden">{renderTabContent()}</div>
    </div>
  );
}
