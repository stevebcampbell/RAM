'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ConsciousnessHubPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      href: '/dashboard',
      icon: '📊',
      title: 'Consciousness Dashboard',
      description: 'Comprehensive analytics and insights into daily digital consciousness patterns, including activity timelines, app usage, and content analysis.',
      linkText: 'View Dashboard'
    },
    {
      href: '/live-consciousness.html',
      icon: '⚡',
      title: 'Live Stream',
      description: 'Real-time consciousness stream with typing simulation, showing the flow of thoughts and digital interactions as they happen.',
      linkText: 'Watch Live'
    },
    {
      href: '/consciousness',
      icon: '🌊',
      title: 'Consciousness Flow',
      description: 'Interactive exploration of consciousness entries with advanced filtering, search capabilities, and timeline visualization.',
      linkText: 'Explore Flow'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-8xl mb-8 animate-pulse">🧠</div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent mb-6">
            Digital Consciousness
          </h1>
          <p className="text-2xl text-slate-400 mb-12">
            Exploring the intersection of mind, technology, and awareness
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group block bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">{card.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-cyan-400 font-medium text-lg">
                {card.linkText}
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Status Bar */}
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-lg">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 font-medium">Privacy-Protected • Database-Driven • Real-Time Analytics</span>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 text-slate-500">
          <p>Built with Next.js • Supabase • Privacy Filtering • macOS Integration</p>
        </div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
