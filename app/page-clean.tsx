'use client';
import { Brain, FileText, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
const mindNodes = [
  {
    id: 1,
    x: 20,
    y: 15,
    size: 'large',
    label: 'AI Collaboration',
    color: 'purple',
    connections: [2, 3, 8],
    href: '/framework',
  },
  {
    id: 2,
    x: 60,
    y: 25,
    size: 'medium',
    label: 'Frameworks',
    color: 'orange',
    connections: [4, 5],
    href: '/framework',
  },
  {
    id: 3,
    x: 35,
    y: 45,
    size: 'medium',
    label: 'Live Thoughts',
    color: 'green',
    connections: [6, 7],
    href: '/live-thoughts',
  },
  {
    id: 4,
    x: 75,
    y: 10,
    size: 'small',
    label: 'Human Evolution',
    color: 'blue',
    connections: [],
    href: '/framework',
  },
  {
    id: 5,
    x: 80,
    y: 40,
    size: 'small',
    label: 'Earth Systems',
    color: 'emerald',
    connections: [],
    href: '/framework',
  },
  {
    id: 6,
    x: 15,
    y: 70,
    size: 'small',
    label: 'Keylogging',
    color: 'teal',
    connections: [],
    href: '/live-thoughts',
  },
  {
    id: 7,
    x: 50,
    y: 65,
    size: 'small',
    label: 'Real-time Stream',
    color: 'cyan',
    connections: [],
    href: '/stream',
  },
  {
    id: 8,
    x: 85,
    y: 75,
    size: 'medium',
    label: 'Open Tabs',
    color: 'violet',
    connections: [9],
    href: '/tabs',
  },
  {
    id: 9,
    x: 70,
    y: 85,
    size: 'small',
    label: '50+ Active',
    color: 'pink',
    connections: [],
    href: '/tabs',
  },
  {
    id: 10,
    x: 25,
    y: 85,
    size: 'small',
    label: 'Random Access',
    color: 'yellow',
    connections: [],
    href: '/about',
  },
];
export default function HomePage() {
  return (
    <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
      {' '}
      {/* Neural Network Background */}{' '}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {' '}
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
        )}{' '}
      </svg>{' '}
      {/* Central Brain */}{' '}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {' '}
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          {' '}
          <Brain className="h-16 w-16 text-white" />{' '}
        </div>{' '}
        <div className="text-center mt-4">
          {' '}
          <h1 className="text-4xl font-bold text-white mb-2">
            RandomAccessMind
          </h1>{' '}
          <p className="text-xl text-purple-200">
            Steve Campbell's Neural Network
          </p>{' '}
        </div>{' '}
      </div>{' '}
      {/* Mind Nodes */}{' '}
      {mindNodes.map((node) => (
        <Link
          key={node.id}
          href={node.href}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {' '}
          <div
            className={`            ${
              node.size === 'large'
                ? 'w-16 h-16'
                : node.size === 'medium'
                ? 'w-12 h-12'
                : 'w-8 h-8'
            }            bg-gradient-to-br from-${node.color}-400 to-${
              node.color
            }-600            rounded-full flex items-center justify-center            shadow-lg group-hover:scale-110 transition-all duration-300            border-2 border-white/20          `}
          >
            {' '}
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>{' '}
          </div>{' '}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {' '}
            <span className="text-xs text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap">
              {' '}
              {node.label}{' '}
            </span>{' '}
          </div>{' '}
        </Link>
      ))}{' '}
      {/* Stats Panel */}{' '}
      <div className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-white">
        {' '}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {' '}
          <div>
            {' '}
            <div className="text-2xl font-bold text-green-400">50+</div>{' '}
            <div className="text-green-200">Active Tabs</div>{' '}
          </div>{' '}
          <div>
            {' '}
            <div className="text-2xl font-bold text-blue-400">∞</div>{' '}
            <div className="text-blue-200">Connections</div>{' '}
          </div>{' '}
          <div>
            {' '}
            <div className="text-2xl font-bold text-purple-400">3</div>{' '}
            <div className="text-purple-200">Frameworks</div>{' '}
          </div>{' '}
          <div>
            {' '}
            <div className="text-2xl font-bold text-orange-400">Live</div>{' '}
            <div className="text-orange-200">Thoughts</div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      {/* Quick Actions */}{' '}
      <div className="absolute bottom-6 right-6 space-y-3">
        {' '}
        <Link
          href="/live-thoughts"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {' '}
          <Terminal className="h-4 w-4" /> Live Thoughts{' '}
        </Link>{' '}
        <Link
          href="/framework"
          className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          {' '}
          <FileText className="h-4 w-4" /> Frameworks{' '}
        </Link>{' '}
        <Link
          href="/stream"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {' '}
          <Zap className="h-4 w-4" /> Stream{' '}
        </Link>{' '}
      </div>{' '}
    </div>
  );
}
