export default function ConnectPage() {
  return (
    <div className="h-full flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 bg-white border-b border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Connect</h1>
        <p className="text-slate-600">Let's explore ideas together</p>
      </div>

      {/* Content - Fills remaining space */}
      <div className="flex-1 p-6 min-h-0 flex items-center justify-center">
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm max-w-2xl w-full">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-slate-600 mb-6">
            I love connecting with fellow thinkers, creators, and anyone
            interested in the intersection of human cognition and AI
            collaboration.
          </p>
          <div className="text-center">
            <p className="text-slate-600">Contact information coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
