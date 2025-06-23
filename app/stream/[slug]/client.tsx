'use client';

import { ContentAdaptationPanel } from '@/components/blog/ContentAdaptationPanel';
import { DynamicContentDisplay } from '@/components/blog/DynamicContentDisplay';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  generateContentAdaptation,
  getContentAdaptation,
} from '@/lib/content-adaptation';
import { AdaptationRequest, ContentAdaptation, ContentPost } from '@/lib/types';
import { formatDate, getFCLColor, getFCLDescription } from '@/lib/utils';
import {
  ArrowLeft,
  Bookmark,
  Brain,
  Calendar,
  Clock,
  Eye,
  Share2,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPostClientProps {
  post: ContentPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [currentAdaptation, setCurrentAdaptation] =
    useState<ContentAdaptation | null>(null);
  const [isAdapting, setIsAdapting] = useState(false);

  // Initialize with original content
  useEffect(() => {
    // Check if there's a cached adaptation for the original level
    const originalAdaptation = getContentAdaptation(
      post.id,
      post.originalFCL,
      post.originalLanguage as any
    );

    if (originalAdaptation) {
      setCurrentAdaptation(originalAdaptation);
    }
  }, [post]);

  const handleAdaptationRequest = async (request: AdaptationRequest) => {
    setIsAdapting(true);

    try {
      // First check if we have this adaptation cached
      const cachedAdaptation = getContentAdaptation(
        request.postId,
        request.targetFCL,
        request.targetLanguage,
        request.culturalContext
      );

      if (cachedAdaptation) {
        // Simulate a small delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCurrentAdaptation(cachedAdaptation);
      } else {
        // Generate new adaptation (this would call your AI system in production)
        const newAdaptation = await generateContentAdaptation(request);
        setCurrentAdaptation(newAdaptation);
      }
    } catch (error) {
      console.error('Failed to generate adaptation:', error);
      // Handle error - could show toast or error state
    } finally {
      setIsAdapting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/blog" className="flex items-center gap-3">
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

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm">
              {post.metadata.category}
            </Badge>
            <Badge
              variant="outline"
              className={`text-sm ${getFCLColor(post.originalFCL)}`}
            >
              Original: FCL {post.originalFCL} •{' '}
              {getFCLDescription(post.originalFCL)}
            </Badge>
            {post.metadata.featured && (
              <Badge variant="default" className="text-sm bg-blue-600">
                Featured
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author and Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center gap-1 text-gray-900 font-medium">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <p className="text-xs">{post.author.bio}</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.metadata.readingTime} min read</span>
            </div>

            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>Original FCL {post.originalFCL}</span>
            </div>
          </div>
        </header>

        {/* Content Adaptation Panel */}
        <ContentAdaptationPanel
          post={post}
          currentAdaptation={currentAdaptation}
          onAdaptationChange={handleAdaptationRequest}
          isLoading={isAdapting}
        />

        {/* Dynamic Content Display */}
        <main>
          <DynamicContentDisplay
            post={post}
            adaptation={currentAdaptation}
            isAdapting={isAdapting}
          />
        </main>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Tags</h3>
              <div className="flex items-center gap-2">
                {post.metadata.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Bookmark
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  About {post.author.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{post.author.bio}</p>
                {post.author.social && (
                  <div className="flex items-center gap-3 text-sm text-blue-600">
                    {post.author.social.twitter && (
                      <a
                        href={`https://twitter.com/${post.author.social.twitter.replace(
                          '@',
                          ''
                        )}`}
                        className="hover:underline"
                      >
                        Twitter
                      </a>
                    )}
                    {post.author.social.github && (
                      <a
                        href={`https://github.com/${post.author.social.github}`}
                        className="hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {post.author.social.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${post.author.social.linkedin}`}
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
