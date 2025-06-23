import {
  Brain,
  ChevronDown,
  Eye,
  FileText,
  GitBranch,
  Globe,
  Lightbulb,
} from 'lucide-react';
import { useState } from 'react';

export default function FrameworkViewer() {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(
    null
  );

  const frameworksLibrary = [
    {
      id: 'logic-log',
      title: "Human Co-Creator's Guiding Logic Log",
      subtitle: 'Authenticating Human Thought in the Age of AI',
      status: 'published',
      category: 'AI Collaboration',
      color: 'orange',
      icon: FileText,
      hook: 'What if the most valuable commodity in the age of AI isn\'t the content it generates, but the verifiable "proof of thought" behind it?',
    },
    {
      id: 'earth-human-evolution',
      title: 'The Co-Evolution of Humanity and Earth',
      subtitle: 'Framework for Earth-Human Capacity Maturity',
      status: 'published',
      category: 'Sustainability',
      color: 'emerald',
      icon: Globe,
      hook: "What if human civilization could evolve beyond extraction to become Earth's regenerative partner?",
    },
    {
      id: 'cognitive-load',
      title: 'Cognitive Load Management',
      subtitle: 'Strategies for Thriving with a Random Access Mind',
      status: 'draft',
      category: 'Cognitive Science',
      color: 'purple',
      icon: Brain,
      hook: 'How do you organize a mind that naturally operates like 50+ browser tabs?',
    },
  ];

  if (selectedFramework) {
    const framework = frameworksLibrary.find((f) => f.id === selectedFramework);
    if (!framework) return null;

    return (
      <div className="h-full flex flex-col bg-slate-50">
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedFramework(null)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <ChevronDown className="w-4 h-4 rotate-90" />
              Back to Library
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {framework.title}
              </h1>
              <p className="text-slate-600">{framework.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 min-h-0">
          <div
            className={`bg-gradient-to-r from-${framework.color}-50 to-${framework.color}-100 rounded-xl border border-${framework.color}-200 p-6 h-full`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-8 h-8 bg-gradient-to-br from-${framework.color}-500 to-${framework.color}-600 rounded-lg flex items-center justify-center`}
              >
                <framework.icon className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">The Crux</h2>
              <span
                className={`text-xs text-${framework.color}-600 bg-${framework.color}-100 px-2 py-1 rounded-full`}
              >
                8-second attention
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">The Hook:</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                {framework.hook}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 bg-white border-b border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Frameworks Library
            </h1>
            <p className="text-slate-600">
              Comprehensive methodologies for navigating complexity
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>
              {frameworksLibrary.filter((f) => f.status === 'published').length}{' '}
              Published
            </span>
            <span>
              {frameworksLibrary.filter((f) => f.status === 'draft').length} In
              Development
            </span>
          </div>
        </div>
      </div>

      {/* Frameworks Grid - Fills remaining space */}
      <div className="flex-1 p-6 min-h-0">
        <div className="grid grid-cols-3 gap-6 h-full">
          {frameworksLibrary.map((framework) => {
            const Icon = framework.icon;
            return (
              <div
                key={framework.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                onClick={() => setSelectedFramework(framework.id)}
              >
                {/* Framework Header */}
                <div className="p-4 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br from-${framework.color}-500 to-${framework.color}-600 rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span
                      className={`bg-${framework.color}-100 text-${framework.color}-800 text-xs font-medium px-2 py-1 rounded-full`}
                    >
                      {framework.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-1">
                    {framework.title}
                  </h2>
                  <h3 className="text-sm font-medium text-slate-700">
                    {framework.subtitle}
                  </h3>
                </div>

                {/* The Hook Preview */}
                <div
                  className={`bg-gradient-to-r from-${framework.color}-50 to-${framework.color}-100 p-4 flex-1`}
                >
                  <div className="flex items-start gap-2">
                    <Lightbulb
                      className={`h-4 w-4 text-${framework.color}-600 flex-shrink-0 mt-0.5`}
                    />
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1 text-sm">
                        The Hook:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {framework.hook}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="p-4">
                  {framework.status === 'published' ? (
                    <div
                      className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-${framework.color}-500 to-${framework.color}-600 text-white font-medium py-2 px-4 rounded-lg text-sm`}
                    >
                      <Eye className="h-3 w-3" />
                      Explore Framework
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-500 font-medium py-2 px-4 rounded-lg text-sm">
                      <GitBranch className="h-3 w-3" />
                      In Development
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
