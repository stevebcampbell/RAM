import { ArrowLeft, Brain, Building, Code, Target, Users } from 'lucide-react';
import Link from 'next/link';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {' '}
      {/* Header */}{' '}
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-10">
        {' '}
        <div className="max-w-4xl mx-auto px-6 py-4">
          {' '}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors"
          >
            {' '}
            <ArrowLeft className="h-4 w-4" />{' '}
            <span className="font-medium">Back to Random Access Mind</span>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
      {/* Content */}{' '}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {' '}
        {/* Title Section */}{' '}
        <div className="text-center mb-12">
          {' '}
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
            {' '}
            <Users className="h-5 w-5 text-purple-700" />{' '}
            <span className="text-sm font-semibold text-purple-800">
              Personal
            </span>{' '}
          </div>{' '}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {' '}
            About Steve Campbell{' '}
          </h1>{' '}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {' '}
            The journey from overwhelming thoughts to structured creativity and
            authentic living.{' '}
          </p>{' '}
        </div>{' '}
        {/* Main Content */}{' '}
        <div className="prose prose-lg max-w-none">
          {' '}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-100">
            {' '}
            <p className="text-xl leading-relaxed text-slate-700 mb-0">
              {' '}
              I'm Steve Campbell, and I've spent years learning to work
              with—rather than against—a mind that operates like a browser with
              50+ tabs open. What once felt like chaos has become my greatest
              creative asset.{' '}
            </p>{' '}
          </div>{' '}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mt-12 mb-6">
            {' '}
            <Building className="h-6 w-6 text-blue-600" /> Professional
            Background{' '}
          </h2>{' '}
          <p>
            {' '}
            I work at the intersection of technology, business architecture, and
            human behavior. My current focus is on <strong>HaloMap.io</strong>,
            a startup I'm building that helps organizations visualize and
            optimize their business processes through advanced mapping and
            systems thinking.{' '}
          </p>{' '}
          <p>
            {' '}
            Throughout my career, I've been drawn to complex problems that sit
            at the crossroads of multiple disciplines. Whether it's developing
            new communication frameworks, building AI-powered tools, or creating
            methodologies for better decision-making, I'm energized by work that
            connects theory to practical impact.{' '}
          </p>{' '}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mt-12 mb-6">
            {' '}
            <Brain className="h-6 w-6 text-purple-600" /> The Random Access Mind
            Journey{' '}
          </h2>{' '}
          <p>
            {' '}
            For most of my life, I thought my constantly jumping thoughts were a
            problem to solve. I'd start working on business architecture, then
            find myself deep in AI philosophy, then pivot to thinking about
            mindful drinking apps, then somehow end up researching Bitcoin
            patterns—all in the span of an hour.{' '}
          </p>{' '}
          <blockquote className="border-l-4 border-purple-500 bg-purple-50 pl-6 py-4 my-8 italic text-lg">
            {' '}
            The breakthrough came when I realized this wasn't a bug—it was a
            feature. My brain's ability to make unexpected connections across
            disparate domains is actually my superpower.{' '}
          </blockquote>{' '}
          <p>
            {' '}
            The last six months have been transformative. Instead of fighting my
            mental patterns, I've developed frameworks to harness them. This
            shift has allowed me to be more authentic with myself and others
            about how I operate and what I want to create in the world.{' '}
          </p>{' '}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mt-12 mb-6">
            {' '}
            <Code className="h-6 w-6 text-emerald-600" /> Current Projects &
            Interests{' '}
          </h2>{' '}
          <div className="grid gap-4 my-8">
            {' '}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
              {' '}
              <h4 className="font-bold text-slate-900 mb-2">
                🗺️ HaloMap.io
              </h4>{' '}
              <p className="text-slate-700 mb-0">
                Business architecture platform for process mapping and systems
                visualization
              </p>{' '}
            </div>{' '}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
              {' '}
              <h4 className="font-bold text-slate-900 mb-2">
                🤖 AI Co-creation
              </h4>{' '}
              <p className="text-slate-700 mb-0">
                Exploring new paradigms for human-AI collaboration and building
                my digital twin
              </p>{' '}
            </div>{' '}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
              {' '}
              <h4 className="font-bold text-slate-900 mb-2">
                📱 Mindful Technology
              </h4>{' '}
              <p className="text-slate-700 mb-0">
                Developing apps and frameworks for more conscious living
              </p>{' '}
            </div>{' '}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
              {' '}
              <h4 className="font-bold text-slate-900 mb-2">
                🔬 Functional Complexity Level (FCL)
              </h4>{' '}
              <p className="text-slate-700 mb-0">
                A new communication framework for adaptive content scaling
              </p>{' '}
            </div>{' '}
          </div>{' '}
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mt-12 mb-6">
            {' '}
            <Target className="h-6 w-6 text-orange-600" /> Philosophy & Approach{' '}
          </h2>{' '}
          <p>
            {' '}
            I believe in connecting abstract thinking to practical reality. My
            work is driven by questions like: How can we build better frameworks
            for understanding complexity? How can technology genuinely improve
            human decision-making? How can we create tools that help people
            navigate their own mental landscapes?{' '}
          </p>{' '}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 my-8">
            {' '}
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Core Principles
            </h3>{' '}
            <ul className="space-y-2 text-slate-700">
              {' '}
              <li>
                <strong>Embrace complexity</strong> rather than oversimplify it
              </li>{' '}
              <li>
                <strong>Connect theory to practice</strong> in everything I
                build
              </li>{' '}
              <li>
                <strong>Be authentic</strong> about how my mind actually works
              </li>{' '}
              <li>
                <strong>Share the journey</strong> of organizing mental chaos
              </li>{' '}
            </ul>{' '}
          </div>{' '}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
            Beyond Work
          </h2>{' '}
          <p>
            {' '}
            When I'm not deep in projects, you'll find me thinking about global
            politics, analyzing Bitcoin patterns, or most importantly—working on
            my golf game ⛳. Even my leisure activities tend to involve systems
            thinking and pattern recognition. It's just how I'm wired.{' '}
          </p>{' '}
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-8 my-12 text-center">
            {' '}
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Let's Connect
            </h3>{' '}
            <p className="text-lg text-slate-700 mb-6">
              {' '}
              If you're someone who also operates with multiple mental tabs
              open, or if you're curious about the intersection of technology,
              philosophy, and practical application, I'd love to connect.{' '}
            </p>{' '}
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {' '}
              <Brain className="h-5 w-5" /> Explore My Random Access Mind{' '}
            </Link>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
