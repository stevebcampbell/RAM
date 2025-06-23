import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockPosts } from '@/lib/mock-data';
import { formatDate, getFCLColor, getFCLDescription } from '@/lib/utils';
import {
  ArrowLeft,
  BookOpen,
  Brain,
  Calendar,
  Clock,
  Globe,
  TrendingUp,
  User,
} from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const featuredPost = mockPosts[0];
  const otherPosts = mockPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  RandomAccessMind
                </h1>
                <p className="text-xs text-gray-500">Blog</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🧠 Adaptive Content Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            RandomAccessMind Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every post adapts to your level. Choose your complexity, language,
            and cultural context for a personalized reading experience.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Post</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default" className="bg-blue-600">
                    Featured
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    FCL {featuredPost.originalFCL} •{' '}
                    {getFCLDescription(featuredPost.originalFCL)}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.metadata.readingTime} min read</span>
                  </div>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Read & Adapt
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">
                  🎯 Try These Adaptations
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span className="text-sm font-medium">
                        English, FCL 35
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Beginner
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span>🇯🇵</span>
                      <span className="text-sm font-medium">
                        Japanese, FCL 45
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Business
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span>🇪🇸</span>
                      <span className="text-sm font-medium">
                        Spanish, FCL 55
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Technical
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts Grid */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Globe className="h-5 w-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">All Posts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getFCLColor(post.originalFCL)}`}
                    >
                      FCL {post.originalFCL}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {post.metadata.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.metadata.readingTime} min read</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read & Adapt
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Blog Info Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Experience Adaptive Reading
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Each post can be instantly adapted to your preferred complexity
              level (FCL 35-95), language, and cultural context. The same ideas,
              optimized for your understanding.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Adaptive Complexity</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>8+ Languages</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="h-4 w-4" />
                <span>Cultural Context</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
