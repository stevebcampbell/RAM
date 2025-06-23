'use client';

import { Brain, RefreshCw } from 'lucide-react';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class Brain3DErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Brain Visualization Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Neural Network Error
            </h1>
            <p className="text-xl text-red-200 mb-6">
              The 3D brain visualization encountered an error
            </p>
            <div className="bg-black/40 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <p className="text-sm text-gray-300 font-mono">
                {this.state.error?.message || 'Unknown error occurred'}
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors mx-auto"
            >
              <RefreshCw className="h-4 w-4" />
              Restart Neural Network
            </button>
            <div className="mt-6 text-sm text-purple-300">
              Fallback: Try refreshing the page or check browser compatibility
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
