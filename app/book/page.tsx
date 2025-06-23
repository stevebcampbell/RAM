'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function BookPage() {
  const [bookPage, setBookPage] = useState(0);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Book Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold mb-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
              Philosophy
            </div>
            <h1 className="text-3xl font-bold leading-tight">My Manifesto</h1>
          </div>

          <a
            href="/"
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all transform hover:scale-110 flex-shrink-0"
          >
            ✕
          </a>
        </div>
      </div>

      {/* Book Pages - Horizontal Layout */}
      <div className="flex-1 overflow-hidden relative">
        {/* Page Container with Horizontal Translation */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${bookPage * 100}%)` }}
        >
          {/* Page 1 - Welcome */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-12">
            <div className="max-w-4xl">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border-2 border-purple-100 shadow-2xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">👋</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    Welcome to My Mind
                  </h2>
                </div>
                <p className="text-2xl leading-relaxed text-slate-700 mb-8">
                  Hey there 👋, I'm Steve, and my brain feels like a web browser
                  with about 50 tabs open. Constantly. (And for anyone who's
                  ever seen my actual laptop, you'll know that's not just a
                  metaphor! 💻)
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                  My mental tabs span across business architecture, mindful
                  drinking apps, AI co-creation, digital twins, startup
                  development, and yes—amidst all that—global politics, Bitcoin,
                  and golf. That's not just a busy day for me. That's my default
                  setting.
                </p>
              </div>
            </div>
          </div>

          {/* Page 2 - The Concept */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-12">
            <div className="max-w-4xl">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border-2 border-blue-100 shadow-2xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    Random Access Mind
                  </h2>
                </div>
                <p className="text-2xl leading-relaxed text-slate-700 mb-8">
                  I call this project 'Random Access Mind' because my thoughts
                  are often highly abstract, constantly zooming out to see the
                  bigger picture and connect seemingly unrelated dots.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  They don't file neatly from A to B. They're pulled from all
                  over the place, all at once, much like how a computer
                  retrieves data from its RAM. 💾
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                  For years, this felt like a constant stream of information
                  without a filter, something to be managed or suppressed. It's
                  a fantastic engine for creativity and curiosity, but it can
                  also be a bit... chaotic. 🌪️
                </p>
              </div>
            </div>
          </div>

          {/* Page 3 - The Breakthrough */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-12">
            <div className="max-w-4xl">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border-2 border-indigo-100 shadow-2xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    The Breakthrough
                  </h2>
                </div>
                <p className="text-2xl leading-relaxed text-slate-700 mb-8">
                  It's actually only in the last six months that I've truly
                  begun to understand this unique way my mind operates—not as a
                  challenge to be overcome, but as a powerful tool to be
                  utilized.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Embracing this has allowed me to be more authentic and real
                  with myself about how I want to live and who I want to be.
                </p>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
                  <p className="text-2xl text-emerald-800 leading-relaxed font-bold">
                    Recently, I've had a breakthrough. Instead of fighting this
                    relentless mental activity, I've decided it's time to
                    harness it. This is the core of the entire project. 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Navigation - Fixed at bottom */}
      <div className="bg-white/90 backdrop-blur-sm border-t-2 border-slate-200 p-6 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setBookPage(Math.max(0, bookPage - 1))}
            disabled={bookPage === 0}
            className="group flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-300 rounded-2xl hover:border-purple-400 hover:bg-purple-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
          >
            <ChevronLeft className="h-8 w-8 text-slate-600 group-hover:text-purple-600 transition-colors" />
            <span className="font-bold text-slate-700 group-hover:text-purple-700 text-xl">
              Previous Page
            </span>
          </button>

          <div className="flex items-center gap-6 bg-white rounded-2xl px-8 py-4 border-2 border-slate-300 shadow-lg">
            <span className="text-xl font-bold text-slate-600">
              Page {bookPage + 1} of 3
            </span>
            <div className="flex gap-4">
              {[0, 1, 2].map((page) => (
                <button
                  key={page}
                  onClick={() => setBookPage(page)}
                  className={`w-6 h-6 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    page === bookPage
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg scale-125 ring-4 ring-purple-200'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setBookPage(Math.min(2, bookPage + 1))}
            disabled={bookPage === 2}
            className="group flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-300 rounded-2xl hover:border-purple-400 hover:bg-purple-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl disabled:hover:shadow-lg"
          >
            <span className="font-bold text-slate-700 group-hover:text-purple-700 text-xl">
              Next Page
            </span>
            <ChevronRight className="h-8 w-8 text-slate-600 group-hover:text-purple-600 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
