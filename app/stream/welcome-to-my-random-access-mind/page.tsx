import { ArrowLeft, Brain, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WelcomeManifesto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Random Access Mind</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
            <Brain className="h-5 w-5 text-purple-700" />
            <span className="text-sm font-semibold text-purple-800">
              Philosophy
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Welcome to My Random Access Mind
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Organizing the chaos of a curious brain and turning mental overwhelm
            into creative power.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
            <span>Steve Campbell</span>
            <span>•</span>
            <span>June 19, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-100">
            <p className="text-xl leading-relaxed text-slate-700 mb-0">
              Hey there 👋, I'm Steve, and my brain feels like a web browser
              with about 50 tabs open. Constantly. (And for anyone who's ever
              seen my actual laptop, you'll know that's not just a metaphor! 💻)
            </p>
          </div>

          <p>
            My mental tabs span across business architecture, mindful drinking
            apps, AI co-creation, digital twins, startup development, and
            yes—amidst all that—global politics, Bitcoin, and golf. That's not
            just a busy day for me. That's my default setting.
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 my-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-slate-900 m-0">
                Welcome to Random Access Mind
              </h3>
            </div>
            <p className="mb-0 text-slate-700">
              I call this project 'Random Access Mind' because my thoughts are
              often highly abstract, constantly zooming out to see the bigger
              picture and connect seemingly unrelated dots. They don't file
              neatly from A to B. They're pulled from all over the place, all at
              once, much like how a computer retrieves data from its RAM. 💾
            </p>
          </div>

          <p>
            For years, this felt like a constant stream of information without a
            filter, something to be managed or suppressed. It's a fantastic
            engine for creativity and curiosity, but it can also be a bit...
            chaotic. 🌪️
          </p>

          <p>
            It's actually only in the last six months that I've truly begun to
            understand this unique way my mind operates—not as a challenge to be
            overcome, but as a powerful tool to be utilized. Embracing this has
            allowed me to be more authentic and real with myself about how I
            want to live and who I want to be.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mt-12 mb-6">
            <Zap className="h-6 w-6 text-blue-600" />
            From Chaos to Clarity
          </h2>

          <p>
            Recently, I've had a breakthrough. Instead of fighting this
            relentless mental activity, I've decided it's time to harness it.
            But how do I plan to harness it? This is the core of the entire
            project.
          </p>

          <p>
            I realized it's not enough to just throw ideas at a wall or a
            machine and see what sticks. I needed a more disciplined approach.
            Over the past few months, I've been developing a personal framework
            for this process—a specific methodology for capturing my own 'train
            of thought' as it happens.
          </p>

          <blockquote className="border-l-4 border-purple-500 bg-purple-50 pl-6 py-4 my-8 italic text-lg">
            It's a way for me to separate the creative signal from the
            distracting noise and to authenticate which ideas are truly mine.
          </blockquote>

          <p>
            For instance, my brain might jump between the intricacies of a new
            software development workflow and a deep philosophical debate about
            consciousness. After running it through my process, the distilled
            thought emerges:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <p className="text-lg font-medium text-blue-900 mb-0">
              "How can we use deep, abstract frameworks to build practical tools
              that genuinely help people navigate their own lives and
              decisions?" 💡
            </p>
          </div>

          <p>
            That's the real magic—connecting theory to tangible reality. That's
            the kind of exploration we'll be doing here.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
            What to Expect
          </h2>

          <p>
            Random Access Mind is the full spectrum. One week, it might be a
            practical guide on prototyping an app from scratch using AI. The
            next, we could be exploring philosophical concepts like 'Industry
            5.0' and 'Human 5.0', or diving into better frameworks for
            cross-cultural communication.
          </p>

          <p>
            We'll share deep learnings on technical subjects and musings on the
            future of collaboration. It's a space for the deeply curious,
            designed to connect the dots between technology, philosophy, and
            practical application.
          </p>

          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              It's the product of a restless mind, finally organized.
            </h3>
            <p className="text-lg text-slate-700 mb-0">
              This is an experiment in clarity, designed for anyone whose brain
              also has too many tabs open.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
            Join the Journey
          </h2>

          <p>
            If any of this sounds familiar, if your brain also operates like a
            web browser gone wild, I'd love for you to explore along. This is my
            attempt to harness the chaos and turn it into something meaningful.
          </p>

          <p className="text-lg">
            Welcome to my Random Access Mind. Let's see where this experiment
            takes us. 🚀
          </p>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Cheers,
              <br />
              <span className="font-semibold text-slate-900">Steve 😎🤙</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
