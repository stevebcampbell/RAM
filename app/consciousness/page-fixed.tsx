'use client';

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Activity,
  Zap,
  TrendingUp,
  Clock,
  Smartphone,
  RefreshCw,
} from 'lucide-react';

interface ConsciousnessEntry {
  id: string;
  timestamp: Date;
  content: string;
  app: string;
  type: 'live_typing' | 'thought' | 'action';
  wpm?: number;
  context?: string;
}

interface DailyStats {
  date: string;
  word_count: number;
  avg_wpm: number;
  accuracy: number;
  active_time_minutes: number;
  top_apps: { name: string; usage: number }[];
  productivity_score: number;
}

export default function ConsciousnessPage() {
  const [liveEntries, setLiveEntries] = useState<ConsciousnessEntry[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [dataSource, setDataSource] = useState<
    'supabase' | 'mock' | 'loading' | 'real_data'
  >('loading');
  const [connectionStatus, setConnectionStatus] = useState<
    'connected' | 'disconnected' | 'connecting'
  >('connecting');

  useEffect(() => {
    loadHistoricalData();
    
    // Set up polling every 10 seconds for real-time updates
    const interval = setInterval(loadHistoricalData, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handleNewEntry = (entry: ConsciousnessEntry) => {
    setLiveEntries((prev) => [entry, ...prev.slice(0, 99)]);
    setIsLive(true);
    setLastUpdate(new Date());
    setConnectionStatus('connected');
    
    // Auto-fade live indicator
    setTimeout(() => setIsLive(false), 3000);
  };

  const loadHistoricalData = async () => {
    try {
      setConnectionStatus('connecting');
      console.log('🔄 Loading consciousness data from API...');
      
      const response = await fetch('/api/consciousness?limit=50');
      const data = await response.json();
      
      console.log('📡 API Response:', {
        success: data.success,
        source: data.source,
        entriesCount: data.recentEntries?.length || 0,
        statsCount: data.dailyStats?.length || 0
      });
      
      if (data.success && data.recentEntries?.length > 0) {
        // Transform entries to proper format
        const transformedEntries = data.recentEntries.map((entry: any) => ({
          id: entry.id,
          timestamp: new Date(entry.timestamp),
          content: entry.content,
          app: entry.app,
          type: entry.type || 'live_typing',
          wpm: entry.wpm,
          context: entry.context || 'General',
        }));
        
        setLiveEntries(transformedEntries);
        setDailyStats(data.dailyStats || []);
        setDataSource(data.source === 'supabase' ? 'real_data' : 'mock');
        setConnectionStatus('connected');
        setLastUpdate(new Date());
        
        console.log('✅ Successfully loaded consciousness data:', {
          entries: transformedEntries.length,
          source: data.source,
          latestEntry: transformedEntries[0]?.content?.substring(0, 50) + '...'
        });
        
        return;
      }
      
      throw new Error('No data received from API');
      
    } catch (error) {
      console.error('❌ Error loading consciousness data:', error);
      setConnectionStatus('disconnected');
      setDataSource('mock');
      // Don't clear entries, keep showing what we have
    }
  };

  const todayStats = dailyStats[0] || {
    word_count: 0,
    avg_wpm: 0,
    accuracy: 0,
    active_time_minutes: 0,
    productivity_score: 0,
  };

  const appColors = {
    'VS Code': '#007ACC',
    'Chrome': '#4285F4',
    'Messages': '#34C759',
    'Mail': '#FF3B30',
    'Terminal': '#8E8E93',
    'Direct Test': '#FF6B6B',
    'Personal Logger': '#4ECDC4',
    'FINAL_TEST': '#45B7D1',
    'LIVE_TEST': '#96CEB4',
    'Other': '#666666',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="h-16 w-16 text-purple-400 animate-pulse" />
            <div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Consciousness
              </h1>
              <p className="text-xl text-gray-300 mt-2">
                Real-time capture of digital thoughts and actions
              </p>
            </div>
          </div>

          {/* Connection Status */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                connectionStatus === 'connected'
                  ? 'bg-green-500/20 text-green-400'
                  : connectionStatus === 'connecting'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  connectionStatus === 'connected'
                    ? 'bg-green-400 animate-pulse'
                    : connectionStatus === 'connecting'
                    ? 'bg-yellow-400 animate-spin'
                    : 'bg-red-400'
                }`}
              />
              <span className="text-sm font-medium">
                {connectionStatus === 'connected'
                  ? `Connected (${dataSource === 'real_data' ? 'Live Supabase Data' : 'Cached Data'})`
                  : connectionStatus === 'connecting'
                  ? 'Connecting to Supabase...'
                  : 'Disconnected'}
              </span>
            </div>
            <button
              onClick={loadHistoricalData}
              className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Data Source Indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full text-gray-300">
            {dataSource === 'real_data' ? (
              <>
                <Zap className="h-4 w-4 text-green-400" />
                <span>Live Supabase Data</span>
              </>
            ) : dataSource === 'mock' ? (
              <>
                <Clock className="h-4 w-4 text-yellow-400" />
                <span>Static/Cached Data</span>
              </>
            ) : (
              <>
                <Activity className="h-4 w-4 text-blue-400" />
                <span>Loading...</span>
              </>
            )}
            <span className="text-gray-500">•</span>
            <span className="text-sm">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6 text-purple-400" />
              <h3 className="text-gray-300 font-medium">Words Today</h3>
            </div>
            <p className="text-3xl font-bold text-white">
              {todayStats.word_count?.toLocaleString() || '0'}
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-cyan-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="h-6 w-6 text-cyan-400" />
              <h3 className="text-gray-300 font-medium">Avg WPM</h3>
            </div>
            <p className="text-3xl font-bold text-white">{todayStats.avg_wpm || 0}</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-green-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="h-6 w-6 text-green-400" />
              <h3 className="text-gray-300 font-medium">Accuracy</h3>
            </div>
            <p className="text-3xl font-bold text-white">
              {todayStats.accuracy || 0}%
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-orange-500/20 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-orange-400" />
              <h3 className="text-gray-300 font-medium">Active Time</h3>
            </div>
            <p className="text-3xl font-bold text-white">
              {Math.round((todayStats.active_time_minutes || 0) / 60)}h
            </p>
          </div>
        </div>

        {/* Live Stream */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-purple-500/20 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Brain className="h-8 w-8 text-purple-400" />
              Live Consciousness Stream
              {isLive && (
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
                  LIVE
                </span>
              )}
            </h2>
          </div>

          {/* Entries */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {liveEntries.length === 0 ? (
              <div className="text-center py-12">
                <Brain className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  {connectionStatus === 'connecting' ? 'Loading consciousness data...' : 'No consciousness data available'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {connectionStatus === 'disconnected'
                    ? 'Unable to connect to Supabase. Check your connection and try refreshing.'
                    : connectionStatus === 'connecting'
                    ? 'Connecting to your consciousness stream...'
                    : 'Waiting for consciousness data to be captured...'}
                </p>
                <button
                  onClick={loadHistoricalData}
                  className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  disabled={connectionStatus === 'connecting'}
                >
                  {connectionStatus === 'connecting' ? 'Connecting...' : 'Try Again'}
                </button>
              </div>
            ) : (
              liveEntries.map((entry, index) => (
                <div
                  key={entry.id || index}
                  className={`p-4 rounded-lg border transition-all duration-500 ${
                    index === 0 && isLive
                      ? 'bg-purple-500/20 border-purple-500/50 animate-pulse'
                      : 'bg-slate-700/30 border-slate-600/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-gray-400" />
                      <span
                        className="text-sm font-medium px-2 py-1 rounded text-white"
                        style={{
                          backgroundColor:
                            appColors[entry.app as keyof typeof appColors] ||
                            appColors.Other,
                        }}
                      >
                        {entry.app}
                      </span>
                      {entry.wpm && (
                        <span className="text-sm text-cyan-400">
                          {entry.wpm} WPM
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {entry.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {entry.content}
                  </p>
                  {entry.context && (
                    <span className="text-xs text-gray-500 mt-2 block">
                      Context: {entry.context}
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Connection Info */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            Real-time consciousness tracking powered by Supabase •{' '}
            <span className="text-purple-400">
              {liveEntries.length} entries captured
            </span>
            {dataSource === 'real_data' && (
              <>
                {' • '}
                <span className="text-green-400">Live data connection active</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
