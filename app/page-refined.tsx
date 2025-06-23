'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Brain,
  Calendar,
  ChevronDown,
  Clock,
  Coffee,
  ExternalLink,
  Lightbulb,
  Mail,
  Play,
  Smartphone,
  Sparkles,
  User,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg p-2 -m-2"
            >
              <div className="p-2.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg group-hover:shadow-purple-200 transition-shadow">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  RandomAccessMind
                </h1>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Organizing creative chaos
                </p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <Link href="/stream">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  The Stream
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Projects
                </Button>
              </Link>
              <Link href="/frameworks">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg"
                >
                  <Beaker className="h-4 w-4 mr-2" />
                  Frameworks
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg"
                >
                  <User className="h-4 w-4 mr-2" />
                  About
                </Button>
              </Link>
              <Link href="/connect">
                <Button
                  size="sm"
                  className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all rounded-lg"
                >
                  Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-slate-700">
                Welcome to organized chaos
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Random Access
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Mind
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium leading-relaxed">
              Organizing the chaos of a curious brain
            </p>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connecting dots between technology, philosophy, and practical
              application. Turning abstract ideas into tangible reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/stream">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all rounded-xl group"
                >
                  <Zap className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Explore The Stream
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4 font-medium rounded-xl"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read My Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Posts */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Thoughts
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Core ideas that showcase the journey from chaos to clarity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main featured post */}
            <article className="lg:col-span-2 group">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full hover:border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-purple-50 text-purple-700 border border-purple-200 font-medium"
                  >
                    Philosophy
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-slate-300 text-slate-600"
                  >
                    FCL 68
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium">
                    Featured
                  </Badge>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                  Welcome to My Random Access Mind 🧠
                </h3>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  My manifesto on organizing chaos, harnessing the 50+ tab
                  brain, and turning abstract thinking into practical tools. The
                  complete journey from overwhelming thoughts to structured
                  creativity.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>June 19, 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>6 min read</span>
                    </div>
                  </div>

                  <Link href="/stream/welcome-to-my-random-access-mind">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all rounded-lg group">
                      Read Manifesto
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>

            {/* Secondary posts */}
            <div className="space-y-6">
              <article className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-200 group">
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-orange-50 text-orange-700 border border-orange-200"
                  >
                    Framework
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-slate-300 text-slate-600 text-xs"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                  My Framework for Organizing Chaos 🎯
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  The specific methodology for capturing 'train of thought' and
                  separating signal from noise.
                </p>
                <Link href="/frameworks/organizing-chaos">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs"
                  >
                    Explore Framework
                  </Button>
                </Link>
              </article>

              <article className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-green-200 group">
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-50 text-green-700 border border-green-200"
                  >
                    Technical
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-slate-300 text-slate-600 text-xs"
                  >
                    30 Min Build
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                  Build an App in 30 Minutes ⚡
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Practical guide to rapid prototyping with AI. From idea to
                  deployment in record time.
                </p>
                <Link href="/projects/30-minute-app">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs"
                  >
                    See Build
                  </Button>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* The Open Tabs - Improved Design */}
        <section className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Open Tabs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore the different areas of my mind. Each tab represents a core
              curiosity with adaptive content that scales to your level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/stream?category=ai-co-creation',
                color: 'purple',
                title: 'AI Co-Creation',
                desc: 'Exploring paradigm shifts of working with AI as a creative partner',
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                href: '/stream?category=app-development',
                color: 'green',
                title: 'App Development & Prototyping',
                desc: 'Rapid prototyping, development workflows, and turning ideas into tools',
                gradient: 'from-green-500 to-green-600',
              },
              {
                href: '/stream?category=business-architecture',
                color: 'blue',
                title: 'Business Architecture',
                desc: 'Process management, systems thinking, and HaloMap.io insights',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                href: '/stream?category=frameworks-for-thought',
                color: 'orange',
                title: 'Frameworks for Thought',
                desc: 'FCL, communication frameworks, and methodologies for organizing ideas',
                gradient: 'from-orange-500 to-orange-600',
              },
              {
                href: '/stream?category=philosophy-future-tech',
                color: 'red',
                title: 'Philosophy & Future Tech',
                desc: 'Industry 5.0, Human 5.0, consciousness, and the future of collaboration',
                gradient: 'from-red-500 to-red-600',
              },
              {
                href: '/stream?category=personal-musings',
                color: 'yellow',
                title: 'Personal Musings',
                desc: 'Random thoughts, golf analysis, Bitcoin patterns, and life observations',
                gradient: 'from-yellow-500 to-yellow-600',
              },
            ].map((tab, index) => (
              <Link
                key={tab.title}
                href={tab.href}
                className="group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-transparent group-hover:shadow-2xl h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${tab.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">
                        {tab.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tab.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects Showcase - Redesigned */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ideas transformed into real tools that people use
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    HaloMap.io
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Business Architecture Platform
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Making complex business systems understandable through
                intelligent process mapping and architecture visualization.
                Currently in active development.
              </p>

              <div className="flex items-center gap-3">
                <Link href="https://halomap.io">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all rounded-lg">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Platform
                  </Button>
                </Link>
                <Link href="/projects/halomap">
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                    Idea Prototyper
                  </h3>
                  <p className="text-slate-600 font-medium">
                    30-Minute App Builder
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Rapid prototyping tool that helps transform ideas into working
                apps. Built in 30 minutes to demonstrate the power of focused
                development.
              </p>

              <div className="flex items-center gap-3">
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all rounded-lg">
                  <Play className="h-4 w-4 mr-2" />
                  Try The App
                </Button>
                <Link href="/projects/idea-prototyper">
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    See Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Your Ideas - Premium CTA */}
        <section className="py-20">
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Turn Your Idea Into Reality
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Everyone Has an Idea.
                <br />
                <span className="text-blue-200">Let's Build Yours.</span>
              </h2>

              <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
                The tools exist. You have access to a Ferrari—I want to help you
                find the keys.
              </p>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  What's Your Idea?
                </h3>
                <form className="space-y-6">
                  <div className="text-left">
                    <label
                      htmlFor="idea-input"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Describe your app idea
                    </label>
                    <textarea
                      id="idea-input"
                      placeholder="I want to build an app that..."
                      className="w-full p-4 border-2 border-slate-200 rounded-xl resize-none text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      rows={4}
                      aria-describedby="idea-help"
                    />
                    <p id="idea-help" className="text-sm text-slate-500 mt-2">
                      Don't worry about technical details—just share your vision
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all rounded-xl group"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Idea & Let's Chat
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <p className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
                  <Coffee className="h-4 w-4" />
                  I'll personally respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    RandomAccessMind
                  </h3>
                  <p className="text-sm text-slate-500">
                    Organizing creative chaos
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                Connecting the dots between technology, philosophy, and
                practical application. Join the journey of turning abstract
                ideas into tangible reality.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://halomap.io"
                  className="text-slate-500 hover:text-purple-600 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/stream"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    The Stream
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    Projects & Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/frameworks"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    Frameworks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/connect"
                    className="text-slate-600 hover:text-purple-600 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">© 2025 Steve Campbell</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
