'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Brain,
  Calendar,
  Coffee,
  ExternalLink,
  Smartphone,
  User,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  RandomAccessMind
                </h1>
                <p className="text-xs text-gray-500">Steve Campbell's Brain</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/blog">
                <Button variant="ghost" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Blog
                </Button>
              </Link>
              <Link href="/research">
                <Button variant="ghost" size="sm">
                  <Beaker className="h-4 w-4 mr-2" />
                  Research
                </Button>
              </Link>
              <Link href="/apps">
                <Button variant="ghost" size="sm">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Apps
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  About
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6">
            🧠 Welcome to the organized chaos
          </Badge>

          <div className="flex items-center justify-center gap-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              alt="Steve Campbell"
              className="w-20 h-20 rounded-full border-3 border-purple-200 shadow-lg"
            />
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Steve Campbell
              </h2>
              <p className="text-lg text-gray-600">
                Professional Tab-Keeper-Opener 🗂️
              </p>
              <p className="text-sm text-purple-600 font-medium">
                Building tools for curious minds
              </p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            My brain has{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              50+ tabs open
            </span>{' '}
            at all times
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            This is where I organize the chaos into something useful. Random
            thoughts, deep frameworks, and practical tools—all with adaptive
            content that scales to your level.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link href="/blog/welcome-to-my-random-access-mind">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <BookOpen className="h-5 w-5 mr-2" />
                Read My Story
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg">
                <Zap className="h-5 w-5 mr-2" />
                Explore Ideas
              </Button>
            </Link>
          </div>
        </div>

        {/* Currently Open Tabs */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12 border border-purple-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Currently Open Tabs
              </h3>
            </div>
            <Badge variant="outline" className="text-xs animate-pulse">
              Live Updates
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                🗺️ HaloMap.io development
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">
                🤔 FCL framework design
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">
                🤖 AI digital twin training
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-100">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium">
                📱 Mindful drinking app
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-100">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm font-medium">
                ⛳ Golf swing analysis
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-yellow-100">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium">₿ Bitcoin patterns</span>
            </div>
          </div>
        </div>

        {/* What You'll Find Here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog" className="group">
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all group-hover:border-purple-300 group-hover:-translate-y-1">
              <BookOpen className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Blog Posts
              </h3>
              <p className="text-gray-600 mb-4">
                Random thoughts organized into coherent ideas. Philosophy meets
                practical application.
              </p>
              <div className="text-sm text-purple-600 font-medium group-hover:underline">
                Explore thoughts →
              </div>
            </div>
          </Link>

          <Link href="/research" className="group">
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all group-hover:border-blue-300 group-hover:-translate-y-1">
              <Beaker className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Research
              </h3>
              <p className="text-gray-600 mb-4">
                Deep dives into frameworks and methodologies. The science behind
                the chaos.
              </p>
              <div className="text-sm text-blue-600 font-medium group-hover:underline">
                View research →
              </div>
            </div>
          </Link>

          <Link href="/apps" className="group">
            <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-all group-hover:border-green-300 group-hover:-translate-y-1">
              <Smartphone className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Apps Built
              </h3>
              <p className="text-gray-600 mb-4">
                Turning ideas into real tools people can use. From concept to
                deployment.
              </p>
              <div className="text-sm text-green-600 font-medium group-hover:underline">
                See projects →
              </div>
            </div>
          </Link>
        </div>

        {/* Latest Post Preview */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Latest Post</h3>
            <Badge variant="outline" className="text-sm">
              FCL 68
            </Badge>
          </div>

          <div className="md:flex items-start gap-8">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Welcome to My Random Access Mind 🧠
              </h4>
              <p className="text-gray-600 mb-4">
                Organising the chaos of a curious brain. My brain feels like a
                web browser with 50+ tabs open. This is my breakthrough approach
                to harnessing that chaos into something useful.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>June 19, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Coffee className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
              </div>
              <Link href="/blog/welcome-to-my-random-access-mind">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Read with Adaptive Features
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-6 md:mt-0 md:w-72">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-800 text-sm font-medium mb-2">
                  💡 Try Adaptive Reading
                </p>
                <p className="text-blue-700 text-xs">
                  This post adapts to different complexity levels and languages
                  while preserving my authentic voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  RandomAccessMind
                </h3>
                <p className="text-sm text-gray-500">
                  Organizing chaos into clarity
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link
                href="https://halomap.io"
                className="hover:text-purple-600 flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                HaloMap.io
              </Link>
              <span>© 2025 Steve Campbell</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
