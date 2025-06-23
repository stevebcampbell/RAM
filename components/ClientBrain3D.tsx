'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Brain3DErrorBoundary } from './Brain3DErrorBoundary';

// Dynamically import the 3D brain with no SSR
const Brain3DVisualization = dynamic(
  () => import('@/components/Brain3DVisualization'),
  {
    ssr: false,
    loading: () => (
      <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse mx-auto mb-4">
            <div className="w-12 h-12 bg-white rounded-full animate-ping"></div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            RandomAccessMind
          </h1>
          <p className="text-xl text-purple-200 mb-4">
            Loading Neural Network...
          </p>
          <div className="text-sm text-purple-300">
            Initializing 3D brain visualization
          </div>
        </div>
      </div>
    ),
  }
);

export default function ClientBrain3D() {
  return (
    <Brain3DErrorBoundary>
      <Suspense
        fallback={
          <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse mx-auto mb-4">
                <div className="w-12 h-12 bg-white rounded-full animate-ping"></div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                RandomAccessMind
              </h1>
              <p className="text-xl text-purple-200 mb-4">
                Loading Neural Network...
              </p>
              <div className="text-sm text-purple-300">
                Initializing 3D brain visualization
              </div>
            </div>
          </div>
        }
      >
        <Brain3DVisualization />
      </Suspense>
    </Brain3DErrorBoundary>
  );
}
