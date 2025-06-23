'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockPosts } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import {
  ArrowRight,
  Beaker,
  Brain,
  Calendar,
  Clock,
  Filter,
  Smartphone,
  User,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TheStreamPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Thoughts', color: 'gray' },
    { id: 'ai-co-creation', name: 'AI Co-Creation', color: 'purple' },
    { id: 'app-development', name: 'App Development', color: 'green' },
    {
      id: 'business-architecture',
      name: 'Business Architecture',
      color: 'blue',
    },
    {
      id: 'frameworks-for-thought',
      name: 'Frameworks for Thought',
      color: 'orange',
    },
    {
      id: 'philosophy-future-tech',
      name: 'Philosophy & Future Tech',
      color: 'red',
    },
    { id: 'personal-musings', name: 'Personal Musings', color: 'yellow' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? mockPosts
      : mockPosts.filter((post) =>
          post.metadata.category.toLowerCase().includes(selectedCategory)
        );

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
                <p className="text-xs text-gray-500">The Stream</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/stream">
                <Button variant="default" size="sm">
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
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Stream</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The continuous flow of thoughts from my 50+ tab brain. Random access
            ideas organized for your exploration.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filter by Tab</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Stream */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {post.metadata.category}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  FCL {post.originalFCL}
                </Badge>
                {post.metadata.featured && (
                  <Badge className="text-sm bg-purple-600">Featured</Badge>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                <Link href={`/stream/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.metadata.readingTime} min read</span>
                  </div>
                </div>

                <Link href={`/stream/${post.slug}`}>
                  <Button variant="outline" size="sm">
                    Read with Adaptive Features
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                {post.metadata.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            More Thoughts Coming Soon
          </h3>
          <p className="text-gray-600 mb-4">
            My brain never stops. More insights on AI, frameworks, apps, and
            random musings are always in progress.
          </p>
          <Badge variant="outline" className="text-sm">
            🧠 50+ tabs still open
          </Badge>
        </div>
      </div>
    </div>
  );
}
