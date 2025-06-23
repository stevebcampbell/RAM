'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabaseApi } from '@/lib/supabase';
import {
  Activity,
  Brain,
  Clock,
  Database,
  Eye,
  RefreshCw,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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
  wordCount: number;
  avgWpm: number;
  accuracy: number;
  activeTime: number;
  topApps: { name: string; usage: number }[];
  productivity: number;
}

export default function ConsciousnessPage() {
  const [liveEntries, setLiveEntries] = useState<ConsciousnessEntry[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedApp, setSelectedApp] = useState('all');
  const [dataSource, setDataSource] = useState<'supabase' | 'mock' | 'loading'>(
    'loading'
  );
  const [connectionStatus, setConnectionStatus] = useState<
    'connected' | 'disconnected' | 'connecting'
  >('connecting');

  useEffect(() => {
    // Set up real-time subscription to Supabase
    let subscription: any = null;

    try {
      subscription = supabaseApi.subscribeToEntries((entry) => {
        handleNewEntry({
          ...entry,
          timestamp: new Date(entry.timestamp),
        });
      });
    } catch (error) {
      console.warn(
        'Supabase subscription failed, using polling fallback:',
        error
      );
      // Fallback to polling if real-time fails
      const interval = setInterval(loadHistoricalData, 10000); // Poll every 10 seconds
      return () => clearInterval(interval);
    }

    // Load historical data
    loadHistoricalData();

    // Cleanup subscription on unmount
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
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

      // Fetch from API (which tries Supabase first, then falls back to mock)
      const response = await fetch('/api/consciousness?limit=50');
      const data = await response.json();

      if (data.success) {
        setDailyStats(data.dailyStats || []);
        setLiveEntries(
          data.recentEntries?.map((entry: any) => ({
            ...entry,
            timestamp: new Date(entry.timestamp),
          })) || []
        );
        setDataSource(data.source || 'mock');
        setConnectionStatus('connected');

        console.log(`📊 Loaded data from ${data.source}:`, {
          entries: data.recentEntries?.length || 0,
          dailyStats: data.dailyStats?.length || 0,
        });
      } else {
        throw new Error(data.error || 'Failed to load data');
      }
    } catch (error) {
      console.error('Error loading consciousness data:', error);
      setConnectionStatus('disconnected');
      setDataSource('mock');

      // Load fallback mock data
      setLiveEntries([
        {
          id: '1',
          timestamp: new Date(),
          content:
            'Setting up Supabase integration for digital consciousness tracking',
          app: 'VS Code',
          type: 'live_typing',
          wpm: 72,
          context: 'Development',
        },
        {
          id: '2',
          timestamp: new Date(Date.now() - 300000),
          content: 'Testing the RAM blog consciousness dashboard',
          app: 'Chrome',
          type: 'live_typing',
          wpm: 65,
          context: 'Research',
        },
      ]);

      setDailyStats([
        {
          date: '2025-06-23',
          wordCount: 2847,
          avgWpm: 68,
          accuracy: 94.2,
          activeTime: 287,
          topApps: [
            { name: 'VS Code', usage: 45 },
            { name: 'Chrome', usage: 25 },
            { name: 'Messages', usage: 15 },
            { name: 'Terminal', usage: 10 },
            { name: 'Other', usage: 5 },
          ],
          productivity: 87,
        },
      ]);
    }
  };

  const todayStats = dailyStats[0] || {
    wordCount: 0,
    avgWpm: 0,
    accuracy: 0,
    activeTime: 0,
    productivity: 0,
  };

  const appColors = {
    'VS Code': '#007ACC',
    Chrome: '#4285F4',
    Messages: '#34C759',
    Mail: '#FF3B30',
    Terminal: '#8E8E93',
    Other: '#666666',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="h-16 w-16 text-purple-400 animate-pulse" />
            <div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Digital Consciousness
              </h1>
              <p className="text-xl text-slate-400 mt-2">
                Real-time insights into your Random Access Mind
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {isLive && (
                <div className="flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-white font-medium">LIVE</span>
                </div>
              )}
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
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
                      ? 'bg-green-400'
                      : connectionStatus === 'connecting'
                      ? 'bg-yellow-400 animate-pulse'
                      : 'bg-red-400'
                  }`}
                ></div>
                <span className="capitalize">{connectionStatus}</span>
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                  dataSource === 'supabase'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}
              >
                <Database className="h-3 w-3" />
                <span>
                  {dataSource === 'supabase' ? 'Supabase' : 'Mock Data'}
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Last update: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-400 text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4" />
                Words Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {todayStats.wordCount.toLocaleString()}
              </div>
              <p className="text-slate-400 text-sm">+12% vs yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-400 text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Avg WPM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {Math.round(todayStats.avgWpm)}
              </div>
              <p className="text-slate-400 text-sm">Peak: 85 WPM</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-400 text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {Math.round(todayStats.accuracy)}%
              </div>
              <p className="text-slate-400 text-sm">Excellent!</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-400 text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Active Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {Math.round(todayStats.activeTime / 60)}h
              </div>
              <p className="text-slate-400 text-sm">Deep focus time</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-400 text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Flow State
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {Math.round(todayStats.productivity)}%
              </div>
              <p className="text-slate-400 text-sm">AI-calculated</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="live" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-slate-800/50 border-purple-500/30">
              <TabsTrigger
                value="live"
                className="data-[state=active]:bg-purple-600"
              >
                Live Stream
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-purple-600"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="patterns"
                className="data-[state=active]:bg-purple-600"
              >
                Patterns
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="data-[state=active]:bg-purple-600"
              >
                AI Insights
              </TabsTrigger>
            </TabsList>

            <Button
              variant="outline"
              size="sm"
              onClick={loadHistoricalData}
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          <TabsContent value="live" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Live Consciousness Stream
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Real-time digital thoughts and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {liveEntries.map((entry, index) => (
                    <div
                      key={entry.id}
                      className={`p-4 rounded-lg border-l-4 transition-all duration-300 ${
                        index === 0 && isLive
                          ? 'border-red-400 bg-red-400/10 animate-pulse'
                          : 'border-purple-400 bg-purple-400/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">
                          {entry.timestamp.toLocaleTimeString()}
                        </span>
                        <div className="flex gap-2">
                          <Badge
                            variant="outline"
                            style={{
                              borderColor:
                                appColors[
                                  entry.app as keyof typeof appColors
                                ] || appColors.Other,
                              color:
                                appColors[
                                  entry.app as keyof typeof appColors
                                ] || appColors.Other,
                            }}
                          >
                            {entry.app}
                          </Badge>
                          {entry.wpm && (
                            <Badge
                              variant="outline"
                              className="border-green-500/50 text-green-400"
                            >
                              {entry.wpm} WPM
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-white leading-relaxed">
                        {entry.content}
                      </p>
                      {entry.context && (
                        <p className="text-slate-500 text-sm mt-2 italic">
                          Context: {entry.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    Daily Activity Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dailyStats}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="date" stroke="#94A3B8" />
                      <YAxis stroke="#94A3B8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          border: '1px solid #8B5CF6',
                          borderRadius: '8px',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="wordCount"
                        stroke="#8B5CF6"
                        strokeWidth={3}
                        dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    App Usage Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={todayStats.topApps || []}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="usage"
                        label={({ name, percent }) =>
                          `${name} ${((percent || 0) * 100).toFixed(0)}%`
                        }
                      >
                        {(todayStats.topApps || []).map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              appColors[entry.name as keyof typeof appColors] ||
                              appColors.Other
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-400">
                  Productivity Heatmap
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Your most productive hours throughout the week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-24 gap-1 mb-4">
                  {Array.from({ length: 24 * 7 }, (_, i) => {
                    const hour = i % 24;
                    const day = Math.floor(i / 24);
                    const intensity = Math.random() * 100; // Replace with actual data
                    return (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm cursor-pointer transition-all ${
                          intensity > 75
                            ? 'bg-purple-400'
                            : intensity > 50
                            ? 'bg-purple-500'
                            : intensity > 25
                            ? 'bg-purple-600'
                            : 'bg-slate-700'
                        }`}
                        title={`${
                          ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day]
                        } ${hour}:00 - ${intensity.toFixed(0)}% active`}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Less active</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-slate-700 rounded-sm"></div>
                    <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
                  </div>
                  <span>More active</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Flow State Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-500/20 rounded-lg">
                    <h3 className="font-semibold text-purple-300 mb-2">
                      🎯 Peak Performance Windows
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Your optimal flow state occurs between 9-11 AM and 2-4 PM.
                      During these windows, your WPM increases by 23% and error
                      rate drops by 40%.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-500/20 rounded-lg">
                    <h3 className="font-semibold text-blue-300 mb-2">
                      🧠 Cognitive Load Patterns
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Complex problem-solving sessions show 15% slower typing
                      but 67% higher accuracy, indicating deep cognitive
                      engagement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Context Switching Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-500/20 rounded-lg">
                    <h3 className="font-semibold text-blue-300 mb-2">
                      📱 App Context Patterns
                    </h3>
                    <p className="text-slate-300 text-sm">
                      You maintain focus in VS Code for an average of 23 minutes
                      before switching. This is 45% above the developer average.
                    </p>
                  </div>

                  <div className="p-4 bg-green-500/20 rounded-lg">
                    <h3 className="font-semibold text-green-300 mb-2">
                      ⚡ Productivity Recommendations
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Consider batching communication tasks to reduce context
                      switching. Your productivity drops 28% after checking
                      messages.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
