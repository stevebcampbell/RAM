export default function TabsPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 bg-white border-b border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Open Browser Tabs
        </h1>
        <p className="text-slate-600">
          My current 50+ tabs organized into meaningful collections
        </p>
      </div>

      {/* Content - Fills remaining space */}
      <div className="flex-1 p-6 min-h-0">
        <div className="grid grid-cols-3 gap-6 h-full">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Research Collection
            </h3>
            <p className="text-slate-600 mb-4 flex-1">
              AI developments, cognitive science papers, and framework research
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full w-fit">
              23 tabs
            </span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Development
            </h3>
            <p className="text-slate-600 mb-4 flex-1">
              Live Thoughts project, framework building, and technical docs
            </p>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full w-fit">
              18 tabs
            </span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Ideas & Inspiration
            </h3>
            <p className="text-slate-600 mb-4 flex-1">
              Random discoveries, thought-provoking articles, and creative
              sparks
            </p>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full w-fit">
              15 tabs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
