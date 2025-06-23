import { mockPosts } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import BlogPostClient from './client';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StreamPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
