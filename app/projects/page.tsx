export default function ProjectsPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 bg-white border-b border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Active Projects
        </h1>
        <p className="text-slate-600">Current explorations and experiments</p>
      </div>

      {/* Content - Fills remaining space */}
      <div className="flex-1 p-6 min-h-0">
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Live Thoughts Capture
            </h3>
            <p className="text-slate-600 mb-4 flex-1">
              Real-time keylogger that streams thinking process to web interface
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Active Development</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Framework Collection
            </h3>
            <p className="text-slate-600 mb-4 flex-1">
              Comprehensive methodologies for complex problem-solving
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Published</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
