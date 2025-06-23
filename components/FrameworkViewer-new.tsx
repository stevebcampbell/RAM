import {
  Activity,
  Brain,
  Eye,
  FileText,
  GitBranch,
  Globe,
  Lightbulb,
} from 'lucide-react';

export default function FrameworkViewer() {
  const frameworksLibrary = [
    {
      id: 'logic-log',
      title: "Human Co-Creator's Guiding Logic Log",
      subtitle:
        'A Methodology for Authenticating Human Thought in the Age of AI',
      version: '10.0 (Final)',
      date: '23 June 2025',
      readTime: '45 min',
      status: 'published',
      category: 'AI Collaboration',
      color: 'orange',
      icon: FileText,
      hook: 'What if the most valuable commodity in the age of AI isn\'t the content it generates, but the verifiable "proof of thought" behind it?',
      bottomLine:
        'This framework provides a methodology for creating Authenticated Human Rationale—logging the human "train of thought" during AI co-creation.',
      keyTakeaways: [
        'AI-generated content lacks inherent authenticity',
        'A Logic Log acts as a "footnote to your own thinking"',
        'Democratize collaboration and provide auditable proof',
        'Focus on authenticating the artisan, not auditing tools',
      ],
    },
    {
      id: 'earth-human-evolution',
      title: 'The Co-Evolution of Humanity and Earth',
      subtitle:
        'A Framework for Earth-Human and Earth-Adaptive Capacity Maturity',
      version: '2.0',
      date: '15 June 2025',
      readTime: '30 min',
      status: 'published',
      category: 'Sustainability',
      color: 'emerald',
      icon: Globe,
      hook: "What if human civilization could evolve beyond extraction to become Earth's regenerative partner?",
      bottomLine:
        "A comprehensive framework for guiding humanity's co-evolution with Earth, moving beyond industrial paradigms.",
      keyTakeaways: [
        'Industry revolutions have created disconnection from Earth',
        'Earth-Human Metric (EHM) measures holistic well-being',
        'Governance must integrate planetary and human health',
        'Technology should enhance Earth-adaptive capacity',
      ],
    },
    {
      id: 'cognitive-load',
      title: 'Cognitive Load Management',
      subtitle: 'Strategies for Thriving with a Random Access Mind',
      version: 'Draft',
      date: 'Coming Soon',
      readTime: '25 min',
      status: 'draft',
      category: 'Cognitive Science',
      color: 'purple',
      icon: Brain,
      hook: 'How do you organize a mind that naturally operates like 50+ browser tabs?',
      bottomLine:
        'A framework for managing cognitive complexity and leveraging mental multi-threading as a superpower.',
      keyTakeaways: [
        'Random access thinking is a cognitive style, not a disorder',
        'Organization systems for complex mental models',
        'Leveraging AI as cognitive scaffolding',
        'Building teams that thrive on cognitive diversity',
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Frameworks Library
              </h1>
              <p className="text-slate-600">
                Comprehensive methodologies for navigating complexity
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">
                {
                  frameworksLibrary.filter((f) => f.status === 'published')
                    .length
                }{' '}
                Published
              </span>
              <span className="text-sm text-slate-500">
                {frameworksLibrary.filter((f) => f.status === 'draft').length}{' '}
                In Development
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 mr-2">Categories:</span>
            {Array.from(new Set(frameworksLibrary.map((f) => f.category))).map(
              (category) => (
                <span
                  key={category}
                  className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {frameworksLibrary.map((framework) => {
            const Icon = framework.icon;
            return (
              <div
                key={framework.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Framework Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${framework.color}-500 to-${framework.color}-600 rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span
                          className={`bg-${framework.color}-100 text-${framework.color}-800 text-sm font-medium px-3 py-1 rounded-full`}
                        >
                          {framework.status === 'published'
                            ? 'Published'
                            : 'Draft'}
                        </span>
                        <div className="text-xs text-slate-500 mt-1">
                          {framework.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <div>{framework.date}</div>
                      <div>{framework.readTime}</div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {framework.title}
                  </h2>
                  <h3 className="text-lg font-medium text-slate-700 mb-4">
                    {framework.subtitle}
                  </h3>
                </div>

                {/* The Hook Preview */}
                <div
                  className={`bg-gradient-to-r from-${framework.color}-50 to-${framework.color}-100 p-4 border-b border-slate-100`}
                >
                  <div className="flex items-start gap-3">
                    <Lightbulb
                      className={`h-5 w-5 text-${framework.color}-600 flex-shrink-0 mt-0.5`}
                    />
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">
                        The Hook:
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {framework.hook}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways Preview */}
                <div className="p-4">
                  <h4 className="font-medium text-slate-900 mb-2">
                    Key Takeaways:
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {framework.keyTakeaways
                      .slice(0, 2)
                      .map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span
                            className={`w-1.5 h-1.5 bg-${framework.color}-500 rounded-full flex-shrink-0 mt-2`}
                          ></span>
                          {takeaway}
                        </li>
                      ))}
                    {framework.keyTakeaways.length > 2 && (
                      <li className="text-xs text-slate-500 italic">
                        +{framework.keyTakeaways.length - 2} more insights...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Actions */}
                <div className="p-4 pt-0">
                  {framework.status === 'published' ? (
                    <button
                      className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-${framework.color}-500 to-${framework.color}-600 text-white font-medium py-3 px-6 rounded-lg hover:from-${framework.color}-600 hover:to-${framework.color}-700 transition-all duration-200`}
                    >
                      <Eye className="h-4 w-4" />
                      Explore Framework
                    </button>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-500 font-medium py-3 px-6 rounded-lg">
                      <GitBranch className="h-4 w-4" />
                      In Development
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Hint */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-lg">
            <Activity className="h-4 w-4" />
            <span className="text-sm">More frameworks in development...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
