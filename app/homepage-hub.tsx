'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Brain,
  ExternalLink,
  Lightbulb,
  Mail,
  Play,
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
                <p className="text-xs text-gray-500">
                  Organizing the chaos of curiosity
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/stream">
                <Button variant="ghost" size="sm">
                  <Zap className="h-4 w-4 mr-2" />
                  The Stream
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="ghost" size="sm">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Projects & Apps
                </Button>
              </Link>
              <Link href="/frameworks">
                <Button variant="ghost" size="sm">
                  <Beaker className="h-4 w-4 mr-2" />
                  Frameworks
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  About
                </Button>
              </Link>
              <Link href="/connect">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Random Access Mind
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Organising the chaos of a curious brain.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            I connect the dots between technology, philosophy, and practical
            application. Here, we explore how to turn abstract ideas into
            tangible reality.
          </p>
          <Link href="/stream">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            >
              <Zap className="h-5 w-5 mr-2" />
              Explore The Stream
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Thoughts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Philosophy</Badge>
                <Badge variant="outline">FCL 68</Badge>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Welcome to My Random Access Mind 🧠
              </h3>
              <p className="text-gray-600 mb-4">
                My manifesto on organizing chaos, harnessing the 50+ tab brain,
                and turning abstract thinking into practical tools.
              </p>
              <Link href="/stream/welcome-to-my-random-access-mind">
                <Button variant="outline" size="sm">
                  Read Manifesto <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Framework</Badge>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                My Framework for Organizing Chaos 🎯
              </h3>
              <p className="text-gray-600 mb-4">
                The specific methodology I've developed for capturing 'train of
                thought' and separating signal from noise.
              </p>
              <Link href="/frameworks/organizing-chaos">
                <Button variant="outline" size="sm">
                  Explore Framework <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Technical</Badge>
                <Badge variant="outline">30 Min Build</Badge>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Build an App in 30 Minutes ⚡
              </h3>
              <p className="text-gray-600 mb-4">
                Practical guide to rapid prototyping with AI. From idea to
                deployment in record time.
              </p>
              <Link href="/projects/30-minute-app">
                <Button variant="outline" size="sm">
                  See Build <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Open Tabs - Category Navigator */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            The Open Tabs
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Explore the different tabs of my mind. Each one represents a core
            area of curiosity and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/stream?category=ai-co-creation" className="group">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all group-hover:border-purple-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI Co-Creation
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Exploring the paradigm shifts of working with AI as a creative
                  partner
                </p>
              </div>
            </Link>

            <Link href="/stream?category=app-development" className="group">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all group-hover:border-green-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    App Development & Prototyping
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Rapid prototyping, development workflows, and turning ideas
                  into tools
                </p>
              </div>
            </Link>

            <Link
              href="/stream?category=business-architecture"
              className="group"
            >
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all group-hover:border-blue-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Business Architecture
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Process management, systems thinking, and HaloMap.io insights
                </p>
              </div>
            </Link>

            <Link
              href="/stream?category=frameworks-for-thought"
              className="group"
            >
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all group-hover:border-orange-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Frameworks for Thought
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  FCL, communication frameworks, and methodologies for
                  organizing ideas
                </p>
              </div>
            </Link>

            <Link
              href="/stream?category=philosophy-future-tech"
              className="group"
            >
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all group-hover:border-red-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Philosophy & Future Tech
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Industry 5.0, Human 5.0, consciousness, and the future of
                  collaboration
                </p>
              </div>
            </Link>

            <Link href="/stream?category=personal-musings" className="group">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all group-hover:border-yellow-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Musings
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Random thoughts, golf analysis, Bitcoin patterns, and life
                  observations
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Projects & Apps Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Projects & Apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  HaloMap.io
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Business architecture and process management platform. Currently
                in active development, focusing on making complex business
                systems understandable.
              </p>
              <div className="flex items-center gap-3">
                <Link href="https://halomap.io">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit HaloMap.io
                  </Button>
                </Link>
                <Link href="/projects/halomap">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Idea Prototyper
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                30-minute app builder that helps you prototype ideas quickly.
                Built while writing my first blog post to demonstrate rapid
                development.
              </p>
              <div className="flex items-center gap-3">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Play className="h-4 w-4 mr-2" />
                  Try The App
                </Button>
                <Link href="/projects/idea-prototyper">
                  <Button variant="outline">See Build Process</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Manifesto Snippet */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Manifesto
              </h2>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "My brain feels like a web browser with about 50 tabs open. For
                years, this felt like a challenge to be overcome. Now, I see it
                as a powerful tool. This is the story of how I'm learning to
                harness it."
              </blockquote>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read the Manifesto
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Unlock Your Ideas - Featured P.S. Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Everyone Has an Idea. Let's Build Yours.
              </h2>
              <p className="text-xl mb-6 text-purple-100">
                The tools are here. You have access to a Ferrari; I want to help
                you find the keys. Let's prototype your idea.
              </p>
              <p className="text-lg mb-8 text-purple-100">
                I truly believe everyone has the capacity to build their own
                app. While writing my first post, I whipped up a quick app in 30
                minutes to prove it's possible.
              </p>

              <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's Your Idea?
                </h3>
                <form className="space-y-4">
                  <textarea
                    placeholder="Describe your app idea in a few sentences..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Idea & Let's Chat
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-3">
                  This sends me an email so we can chat about turning your idea
                  into reality 🚀
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
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
              <p className="text-gray-600 mb-4">
                Connecting the dots between technology, philosophy, and
                practical application. Join me on the journey of turning
                abstract ideas into tangible reality.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/stream"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    The Stream
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    Projects & Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/frameworks"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    Frameworks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://halomap.io"
                    className="text-gray-600 hover:text-purple-600 flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    HaloMap.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="/connect"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">© 2025 Steve Campbell</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
