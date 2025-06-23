import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Beaker,
  BookOpen,
  Brain,
  Calendar,
  Clock,
  Coffee,
  ExternalLink,
  Smartphone,
  User,
} from 'lucide-react';
import Link from 'next/link';

// Your actual first blog post as the main content
const steveFirstPost = {
  id: 'welcome-to-my-random-access-mind',
  slug: 'welcome-to-my-random-access-mind',
  title: 'Welcome to My Random Access Mind 🧠',
  excerpt:
    "Organising the chaos of a curious brain. Hey Hey 👋, I'm Steve, and my brain feels like a web browser with about 50 tabs open. Constantly.",
  content: `# Welcome to My Random Access Mind 🧠

**Steve Campbell** ~ *Smile* 😎

*June 19, 2025*

**Organising the chaos of a curious brain.**

## Hey Hey 👋

I'm Steve, and my brain feels like a web browser with about 50 tabs open. Constantly. (And for anyone who's ever seen my actual laptop, you'll know that's not just a metaphor! 💻)

For instance, just last night my mental tabs took me to:

- **Bowtie Analysis** 📊: Deep-diving into integrating bowtie analysis data into asset management decision-making.
- **Mindful Drinking App** 📱: Building a new app for mindful drinking and reduction.
- **Functional Complexity Level (FCL)** 🤔: Exploring an idea for a new communication framework I call Functional Complexity Level (FCL).
- **AI Co-creation** 🤖: Co-creating with AI and exploring the paradigm shifts it brings.
- **Digital Twin** 👤➡️💻: Started training an AI digital twin of myself
- **HaloMap.io** 🗺️: Actively working on my startup, HaloMap.io, which focuses on business architecture and process management.

And yes, amidst all that, there are also tabs open on global politics 🌍, Bitcoin ₿, and of course most importantly golf ⛳.

That's not just a day for me. That's my default setting.

## Welcome to my Random Access Mind 🚀

I call this blog 'Random Access Mind' because my thoughts are often highly abstract, constantly zooming out to see the bigger picture and connect seemingly unrelated dots. They don't file neatly from A to B. They're pulled from all over the place, all at once, much like how a computer retrieves data from its RAM. 💾

For years, this felt like a constant stream of information without a filter, something to be managed or suppressed.

**It's a fantastic engine for creativity and curiosity, but it can also be a bit... chaotic.** 🌪️

It's actually only in the last six months that I've truly begun to understand this unique way my mind operates—not as a challenge to be overcome, but as a powerful tool to be utilised.

Embracing this has allowed me to be more authentic and real with myself about how I want to live and who I want to be.

Recently though, I've had a breakthrough. Instead of fighting this relentless mental activity, I've decided it's time to harness it.

## The Core of the Project: From Chaos to Clarity ✨

So, how do I plan to harness it? This is the core of the entire project. I realised it's not enough to just throw ideas at a wall or a machine and see what sticks. I needed a more disciplined approach.

Over the past few months, I've been developing a personal framework for this process—a specific methodology for capturing my own 'train of thought' as it happens. It's a way for me to separate the creative signal from the distracting noise and to authenticate which ideas are truly mine.

I call the AI helper in this workflow 'My Brain's External Processor,' or you may have heard me call it "My Best Friend", but it's the framework that does the heavy lifting. This blog is the first public output of that system.

For instance, just this morning, my brain was jumping between the intricacies of a new software development workflow and a deep philosophical debate about consciousness. After running it through my process, the distilled thought emerged:

> **How can we use deep, abstract frameworks to build practical tools that genuinely help people navigate their own lives and decisions?** 💡

That's the real magic—connecting theory to tangible reality. That's the kind of rabbit hole we'll be going down here. 🐇

## What to Expect from Random Access Mind

So, what can you expect from Random Access Mind? It's the full spectrum. One week, it might be a practical guide on how to prototype an app from scratch in less than 1 hour using AI. The next, we could be exploring a philosophical concept like 'Industry 5.0' and what it means to be 'Human 5.0', or diving into better frameworks for cross-cultural communication.

We'll share deep learnings on technical subjects, and musings on the future of collaboration.

**It's a space for the deeply curious, designed to connect the dots between technology, philosophy, and practical application. It's the product of a restless mind, finally organised.**

Before we get into the details, I want to be upfront about my approach. My next post will outline the specific framework I've developed for this project – the blueprint for how I'm trying to bring some order to the chaos.

## Join the Journey

If any of this sounds familiar, if your brain also has too many tabs open, I'd love for you to follow along. This is an experiment in clarity, and I have a feeling it's going to be a fun ride.

Cheers,

**Steve** 😎🤙

---

## PS: Unlock Your Ideas

If you made it this far, thanks heaps! You've officially unlocked the secret 51st tab in my brain – it's where the really interesting stuff is hidden, just like Area 51, but with less conspiracy and more creativity.

I truly believe everyone has the capacity to build their own app. The tools are readily available; you've essentially got access to a Ferrari, and I want to help you find the keys. 🏎️

While writing this post, I whipped up a quick app to show just how easy it is. It took less than 30 minutes, and it'll help you prototype an idea. Plus, it'll send me an email so we can chat, and I can help you launch 🚀`,
  originalFCL: 68,
  originalLanguage: 'en',
  publishedAt: new Date('2025-06-19'),
  updatedAt: new Date('2025-06-19'),
  author: {
    name: 'Steve Campbell',
    bio: 'Building tools and frameworks for curious minds. Entrepreneur, AI enthusiast, and professional tab-keeper-opener.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    social: {
      twitter: '@stevecampbell',
      github: 'stevencampbell',
      linkedin: 'steven-campbell',
    },
  },
  metadata: {
    tags: ['Personal', 'Philosophy', 'AI', 'Creativity', 'Frameworks'],
    readingTime: 6,
    featured: true,
    category: 'Personal',
  },
  seo: {
    metaTitle: 'Welcome to My Random Access Mind',
    metaDescription:
      'Organising the chaos of a curious brain. Join me on a journey of connecting dots between technology, philosophy, and practical application.',
    ogImage:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop',
  },
};

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

      {/* Hero/Intro Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            🧠 Welcome to the chaos
          </Badge>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
              alt="Steve Campbell"
              className="w-16 h-16 rounded-full border-2 border-purple-200"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-900">
                Steve Campbell
              </h2>
              <p className="text-gray-600">Professional Tab-Keeper-Opener 🗂️</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My brain has 50+ tabs open at all times. This is where I organize
            the chaos into something useful.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link href="/blog" className="group">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow group-hover:border-purple-300">
              <BookOpen className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Blog Posts</h3>
              <p className="text-sm text-gray-600">
                Random thoughts organized into coherent ideas
              </p>
            </div>
          </Link>

          <Link href="/research" className="group">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow group-hover:border-blue-300">
              <Beaker className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-sm text-gray-600">
                Deep dives into frameworks and methodologies
              </p>
            </div>
          </Link>

          <Link href="/apps" className="group">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow group-hover:border-green-300">
              <Smartphone className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Apps Built</h3>
              <p className="text-sm text-gray-600">
                Turning ideas into real tools people can use
              </p>
            </div>
          </Link>
        </div>

        {/* Current Tabs Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 border border-purple-100">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Currently Open Tabs</h3>
            <Badge variant="outline" className="text-xs">
              Live Updates
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>🗺️ HaloMap.io development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>🤔 FCL framework design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>🤖 AI digital twin training</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>📱 Mindful drinking app</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>⛳ Golf swing analysis (obviously)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>₿ Bitcoin market patterns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog Post Content with Adaptation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPostWithAdaptation post={steveFirstPost} />
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-16">
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
              <span>© 2024 Steve Campbell</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component to handle the blog post with adaptation
function BlogPostWithAdaptation({ post }: { post: any }) {
  // This will be a simplified version for the homepage
  // The full adaptation features will be in individual blog posts

  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Latest Post</Badge>
          <Badge variant="outline">FCL {post.originalFCL}</Badge>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>June 19, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.metadata.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <Coffee className="h-4 w-4" />
            <span>Best with coffee</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
          <p className="text-blue-800 text-sm">
            💡 <strong>Try the adaptive reading:</strong> This post can be
            adapted to different complexity levels and languages.
            <Link
              href="/blog/welcome-to-my-random-access-mind"
              className="underline font-medium"
            >
              Read with full adaptation features →
            </Link>
          </p>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: post.content.replace(/\n/g, '<br />'),
        }}
      />

      <div className="not-prose mt-8 pt-8 border-t border-gray-200">
        <div className="text-center">
          <Link href="/blog/welcome-to-my-random-access-mind">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <BookOpen className="h-5 w-5 mr-2" />
              Read with Full Adaptation Features
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
