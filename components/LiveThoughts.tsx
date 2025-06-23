'use client';

import {
  Activity,
  Brain,
  Clock,
  Lightbulb,
  Pause,
  Play,
  TrendingUp,
  Type,
  Wifi,
  WifiOff,
  Zap,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface LiveThought {
  id: string;
  timestamp: Date;
  rawText: string;
  application: string;
  context: string;
}

interface ThoughtSummary {
  id: string;
  startTime: Date;
  endTime: Date;
  rawThoughts: LiveThought[];
  summary: string;
  keyInsights: string[];
  emotionalTone: string;
  productivity: number;
}

interface LiveThoughtsState {
  isConnected: boolean;
  isCapturing: boolean;
  currentThoughts: LiveThought[];
  summaries: ThoughtSummary[];
  stats: {
    totalKeystrokes: number;
    averageWPM: number;
    activeTime: number;
    thoughtBursts: number;
    thoughtsToday: number;
  };
}

export default function LiveThoughts() {
  const [consciousnessData, setConsciousnessData] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [stats, setStats] = useState({
    totalWords: 0,
    avgWpm: 0,
    activeApps: 0,
    lastUpdate: new Date(),
  });

  useEffect(() => {
    // Connect to consciousness API
    loadConsciousnessData();

    // Set up real-time connection
    const interval = setInterval(loadConsciousnessData, 10000); // Poll every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const loadConsciousnessData = async () => {
    try {
      const response = await fetch('/api/consciousness');
      const data = await response.json();
      setConsciousnessData(data.recentEntries || []);
      setIsConnected(true);

      // Update stats
      if (data.dailyStats && data.dailyStats.length > 0) {
        const today = data.dailyStats[0];
        setStats({
          totalWords: today.wordCount,
          avgWpm: today.avgWpm,
          activeApps: today.topApps?.length || 0,
          lastUpdate: new Date(),
        });
      }
    } catch (error) {
      console.error('Failed to load consciousness data:', error);
      setIsConnected(false);
    }
  };
  const [state, setState] = useState<LiveThoughtsState>({
    isConnected: false,
    isCapturing: false,
    currentThoughts: [],
    summaries: [],
    stats: {
      totalKeystrokes: 0,
      averageWPM: 0,
      activeTime: 0,
      thoughtBursts: 0,
      thoughtsToday: 0,
    },
  });

  const [viewMode, setViewMode] = useState<'live' | 'summaries' | 'analytics'>(
    'live'
  );
  const [autoSummarize, setAutoSummarize] = useState(true);
  const [summarizeInterval, setSummarizeInterval] = useState(5); // minutes
  const [isScrollingToBottom, setIsScrollingToBottom] = useState(true);

  const thoughtsEndRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  // Mock data for demonstration
  const mockThoughts: LiveThought[] = [
    {
      id: '1',
      timestamp: new Date(Date.now() - 120000),
      rawText: 'Working on the live thoughts interface... this is so exciting!',
      application: 'VS Code',
      context: 'Component Development',
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 90000),
      rawText:
        'Need to think about the WebSocket connection and how to stream data in real-time',
      application: 'Browser',
      context: 'Research',
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 60000),
      rawText:
        'Maybe we should use Socket.io for better real-time communication',
      application: 'Slack',
      context: 'Discussion',
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 30000),
      rawText:
        'The UI should show both raw thoughts and AI summaries side by side',
      application: 'Notion',
      context: 'Planning',
    },
    {
      id: '5',
      timestamp: new Date(),
      rawText:
        'This is going to be revolutionary for understanding human thought processes...',
      application: 'Terminal',
      context: 'Development',
    },
  ];

  const mockSummaries: ThoughtSummary[] = [
    {
      id: 'summary-1',
      startTime: new Date(Date.now() - 300000),
      endTime: new Date(Date.now() - 0),
      rawThoughts: mockThoughts,
      summary:
        'Focused session on developing a live thoughts interface with real-time streaming capabilities. Main considerations include WebSocket implementation, UI design for dual raw/summarized views, and the revolutionary potential for understanding human cognition.',
      keyInsights: [
        'Real-time streaming requires robust WebSocket connection',
        'Dual display (raw + summarized) provides comprehensive view',
        'Potential to revolutionize understanding of human thought processes',
      ],
      emotionalTone: 'Excited and Innovative',
      productivity: 85,
    },
  ];

  useEffect(() => {
    // Initialize with mock data for demonstration
    setState((prev) => ({
      ...prev,
      currentThoughts: mockThoughts,
      summaries: mockSummaries,
      isConnected: true, // Mock connection
      stats: {
        totalKeystrokes: 1247,
        averageWPM: 67,
        activeTime: 142, // minutes
        thoughtBursts: 23,
        thoughtsToday: 89,
      },
    }));
  }, []);

  useEffect(() => {
    if (isScrollingToBottom && thoughtsEndRef.current) {
      thoughtsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.currentThoughts, isScrollingToBottom]);

  // WebSocket connection for real-time thoughts
  const [wsConnection, setWsConnection] = useState<WebSocket | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<
    'disconnected' | 'connecting' | 'connected' | 'error'
  >('disconnected');

  // Connect to Python thought capture server
  const connectToThoughtCapture = useCallback(() => {
    if (wsConnection?.readyState === WebSocket.OPEN) {
      return; // Already connected
    }

    setConnectionStatus('connecting');

    try {
      const ws = new WebSocket('ws://localhost:8765');

      ws.onopen = () => {
        console.log('🧠 Connected to Live Thoughts capture server');
        setConnectionStatus('connected');
        setState((prev) => ({ ...prev, isConnected: true }));

        // Request recent thoughts
        ws.send(JSON.stringify({ command: 'get_recent_thoughts' }));
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          handleWebSocketMessage(message);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onclose = () => {
        console.log('🔌 Disconnected from thought capture server');
        setConnectionStatus('disconnected');
        setState((prev) => ({
          ...prev,
          isConnected: false,
          isCapturing: false,
        }));
        setWsConnection(null);
      };

      ws.onerror = (error) => {
        console.error('🚨 WebSocket error:', error);
        setConnectionStatus('error');
        setState((prev) => ({
          ...prev,
          isConnected: false,
          isCapturing: false,
        }));
      };

      setWsConnection(ws);
    } catch (error) {
      console.error('Failed to connect to thought capture server:', error);
      setConnectionStatus('error');
    }
  }, [wsConnection]);

  // Disconnect from thought capture server
  const disconnectFromThoughtCapture = useCallback(() => {
    if (wsConnection) {
      wsConnection.close();
      setWsConnection(null);
    }
    setConnectionStatus('disconnected');
    setState((prev) => ({ ...prev, isConnected: false, isCapturing: false }));
  }, [wsConnection]);

  // Handle WebSocket messages from Python server
  const handleWebSocketMessage = useCallback((message: any) => {
    switch (message.type) {
      case 'thought_stream':
        // Real thought data from keylogger
        const thoughtData = message.data;
        setState((prev) => ({
          ...prev,
          currentThoughts: [thoughtData, ...prev.currentThoughts].slice(0, 100), // Keep last 100
          stats: {
            ...prev.stats,
            totalKeystrokes:
              thoughtData.keystrokeCount || prev.stats.totalKeystrokes,
            averageWPM: Math.round(
              thoughtData.insights?.typing_speed || prev.stats.averageWPM
            ),
            thoughtsToday: prev.stats.thoughtsToday + 1,
          },
        }));

        // Trigger brain activity update
        updateBrainActivity(thoughtData);
        break;

      case 'capture_started':
        setState((prev) => ({ ...prev, isCapturing: true }));
        break;

      case 'capture_stopped':
        setState((prev) => ({ ...prev, isCapturing: false }));
        break;

      case 'recent_thoughts':
        // Load recent thoughts buffer
        setState((prev) => ({
          ...prev,
          currentThoughts: message.data,
        }));
        break;

      case 'status':
        // Update system status
        setState((prev) => ({
          ...prev,
          isCapturing: message.data.isCapturing,
          stats: {
            ...prev.stats,
            totalKeystrokes: message.data.keystrokeCount,
          },
        }));
        break;
    }
  }, []);

  // Update 3D brain activity based on real thoughts
  const updateBrainActivity = useCallback((thoughtData: any) => {
    // This would connect to the 3D brain visualization
    // Dispatch custom event to update brain nodes based on thought context
    const brainUpdateEvent = new CustomEvent('brainActivityUpdate', {
      detail: {
        context: thoughtData.context,
        thoughtType: thoughtData.thoughtType,
        intensity: thoughtData.insights?.complexity || 0.5,
        application: thoughtData.application,
      },
    });
    window.dispatchEvent(brainUpdateEvent);
  }, []);

  // Updated connect function that uses real WebSocket
  const connectToCapture = useCallback(() => {
    if (connectionStatus === 'connected') {
      disconnectFromThoughtCapture();
    } else {
      connectToThoughtCapture();
    }
  }, [connectionStatus, connectToThoughtCapture, disconnectFromThoughtCapture]);

  // Start/stop thought capture
  const toggleCapture = useCallback(() => {
    if (!wsConnection || wsConnection.readyState !== WebSocket.OPEN) {
      alert('Please connect to the thought capture server first!');
      return;
    }

    const command = state.isCapturing ? 'stop_capture' : 'start_capture';
    wsConnection.send(JSON.stringify({ command }));
  }, [wsConnection, state.isCapturing]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const getApplicationColor = (app: string) => {
    const colors: { [key: string]: string } = {
      'VS Code': 'bg-blue-100 text-blue-800',
      Browser: 'bg-green-100 text-green-800',
      Slack: 'bg-purple-100 text-purple-800',
      Notion: 'bg-orange-100 text-orange-800',
      Terminal: 'bg-gray-100 text-gray-800',
    };
    return colors[app] || 'bg-slate-100 text-slate-800';
  };

  const renderTerminalLiveView = () => (
    <div className="h-full flex flex-col">
      {/* Terminal Header */}
      <div className="flex-shrink-0 bg-black/60 border-b border-green-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 font-mono text-sm">
              neural_stream.sh - Active Thought Capture
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <label className="flex items-center gap-2 text-green-300 font-mono">
              <input
                type="checkbox"
                checked={isScrollingToBottom}
                onChange={(e) => setIsScrollingToBottom(e.target.checked)}
                className="rounded bg-black/40 border-green-500/30"
              />
              AUTO_SCROLL
            </label>
            {state.isCapturing && (
              <div className="flex items-center gap-2 text-cyan-400 font-mono">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                RECORDING
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-black/20">
        <div className="space-y-2">
          {/* System startup messages */}
          <div className="text-green-400">
            <span className="text-gray-500">[SYS]</span> Initializing thought
            capture daemon...
          </div>
          <div className="text-green-400">
            <span className="text-gray-500">[SYS]</span> Neural interface
            established
          </div>
          <div className="text-blue-400">
            <span className="text-gray-500">[LOG]</span> Listening for cognitive
            input streams...
          </div>
          <div className="text-purple-400 mb-4">
            <span className="text-gray-500">[AI ]</span> GPT-4 integration ready
            for real-time analysis
          </div>

          {/* Live Thoughts Stream */}
          {state.currentThoughts.map((thought) => (
            <div
              key={thought.id}
              className="group hover:bg-white/5 p-2 rounded border-l-2 border-purple-500/30"
            >
              <div className="flex items-start gap-3">
                <div className="text-gray-500 text-xs mt-1 w-20 flex-shrink-0">
                  {formatTime(thought.timestamp)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs px-2 py-1 rounded font-bold ${getTerminalAppColor(
                        thought.application
                      )}`}
                    >
                      {thought.application.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">
                      {thought.context}
                    </span>
                  </div>
                  <div className="text-white font-mono leading-relaxed">
                    <span className="text-green-400">$</span> {thought.rawText}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Current cursor */}
          <div className="flex items-center gap-3 mt-4">
            <div className="text-gray-500 text-xs w-20">
              {new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </div>
            <div className="flex items-center">
              <span className="text-green-400">$</span>
              <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
            </div>
          </div>

          <div ref={thoughtsEndRef} />
        </div>
      </div>
    </div>
  );

  const getTerminalAppColor = (app: string) => {
    const colors: { [key: string]: string } = {
      'VS Code': 'bg-blue-600/30 text-blue-300 border border-blue-500/30',
      Browser: 'bg-green-600/30 text-green-300 border border-green-500/30',
      Slack: 'bg-purple-600/30 text-purple-300 border border-purple-500/30',
      Notion: 'bg-orange-600/30 text-orange-300 border border-orange-500/30',
      Terminal: 'bg-gray-600/30 text-gray-300 border border-gray-500/30',
    };
    return (
      colors[app] || 'bg-gray-600/30 text-gray-300 border border-gray-500/30'
    );
  };

  const renderLiveView = () => (
    <div className="space-y-6">
      {/* Connection Status */}
      <div
        className={`p-4 rounded-xl border-2 ${
          state.isConnected
            ? 'bg-green-50 border-green-200 text-green-800'
            : 'bg-red-50 border-red-200 text-red-800'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {state.isConnected ? (
              <Wifi className="h-5 w-5" />
            ) : (
              <WifiOff className="h-5 w-5" />
            )}
            <span className="font-medium">
              {state.isConnected
                ? 'Connected to Thought Capture'
                : 'Disconnected'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCapture}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                state.isCapturing
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {state.isCapturing ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              {state.isCapturing ? 'Pause' : 'Start'} Capture
            </button>
            <button
              onClick={connectToCapture}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {state.isConnected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        </div>
      </div>

      {/* Live Thoughts Stream */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Live Thought Stream
            </h2>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={isScrollingToBottom}
                  onChange={(e) => setIsScrollingToBottom(e.target.checked)}
                  className="rounded"
                />
                Auto-scroll
              </label>
              {state.isCapturing && (
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  Recording
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 h-64 overflow-y-auto">
          <div className="space-y-4">
            {state.currentThoughts.map((thought) => (
              <div
                key={thought.id}
                className="flex gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Type className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-slate-900">
                      {formatTime(thought.timestamp)}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${getApplicationColor(
                        thought.application
                      )}`}
                    >
                      {thought.application}
                    </span>
                    <span className="text-xs text-slate-500">
                      {thought.context}
                    </span>
                  </div>
                  <p className="text-slate-700 font-mono text-sm leading-relaxed">
                    {thought.rawText}
                  </p>
                </div>
              </div>
            ))}
            <div ref={thoughtsEndRef} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummariesView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            AI-Generated Thought Summaries
          </h2>
        </div>
        <p className="text-slate-700">
          Automated insights generated every {summarizeInterval} minutes from
          your live thought stream.
        </p>
      </div>

      {state.summaries.map((summary) => (
        <div
          key={summary.id}
          className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Thought Session Summary
                  </h3>
                  <p className="text-sm text-slate-600">
                    {formatTime(summary.startTime)} -{' '}
                    {formatTime(summary.endTime)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-600">Productivity Score</div>
                <div className="text-2xl font-bold text-green-600">
                  {summary.productivity}%
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Summary</h4>
                <p className="text-slate-700 leading-relaxed">
                  {summary.summary}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  Key Insights
                </h4>
                <ul className="space-y-1">
                  {summary.keyInsights.map((insight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">
                    Emotional Tone: <strong>{summary.emotionalTone}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">
                    Thoughts Captured:{' '}
                    <strong>{summary.rawThoughts.length}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAnalyticsView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Thought Analytics
          </h2>
        </div>
        <p className="text-slate-700">
          Real-time insights into your thinking patterns, productivity, and
          cognitive activity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Type className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">
            {state.stats.totalKeystrokes.toLocaleString()}
          </div>
          <div className="text-sm text-slate-600">Total Keystrokes</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">
            {state.stats.averageWPM}
          </div>
          <div className="text-sm text-slate-600">Average WPM</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">
            {state.stats.activeTime}m
          </div>
          <div className="text-sm text-slate-600">Active Time</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Brain className="h-6 w-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">
            {state.stats.thoughtBursts}
          </div>
          <div className="text-sm text-slate-600">Thought Bursts</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(147, 51, 234, 0.2)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Terminal Header */}
      <div className="relative z-10 p-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-black font-bold" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  steve@randomaccessmind:~/live-thoughts$
                </h1>
                <p className="text-green-400 text-sm font-mono">
                  Capturing neural pathways in real-time...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right text-sm text-purple-200">
                <div>Auto-summarize every:</div>
                <select
                  value={summarizeInterval}
                  onChange={(e) => setSummarizeInterval(Number(e.target.value))}
                  className="bg-black/60 border border-purple-500/30 rounded px-2 py-1 text-green-400 font-mono text-xs focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value={2}>2 min</option>
                  <option value={5}>5 min</option>
                  <option value={10}>10 min</option>
                  <option value={15}>15 min</option>
                </select>
              </div>
            </div>
          </div>

          {/* Terminal Status Bar */}
          <div className="flex items-center gap-6 mb-4 p-3 bg-black/60 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  connectionStatus === 'connected'
                    ? 'bg-green-400 animate-pulse'
                    : connectionStatus === 'connecting'
                    ? 'bg-yellow-400 animate-pulse'
                    : connectionStatus === 'error'
                    ? 'bg-red-500'
                    : 'bg-red-400'
                }`}
              ></div>
              <span className="text-green-400 font-mono text-sm">
                {connectionStatus === 'connected'
                  ? 'CONNECTED'
                  : connectionStatus === 'connecting'
                  ? 'CONNECTING...'
                  : connectionStatus === 'error'
                  ? 'ERROR'
                  : 'DISCONNECTED'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  state.isCapturing
                    ? 'bg-blue-400 animate-pulse'
                    : 'bg-gray-500'
                }`}
              ></div>
              <span className="text-blue-400 font-mono text-sm">
                {state.isCapturing ? 'RECORDING' : 'STANDBY'}
              </span>
            </div>
            <div className="text-purple-300 font-mono text-sm">
              {state.stats.totalKeystrokes.toLocaleString()} keystrokes |{' '}
              {state.stats.averageWPM} WPM
            </div>
            <div className="ml-auto flex gap-2">
              <button
                onClick={toggleCapture}
                className={`px-4 py-2 rounded-lg font-mono text-sm font-bold border transition-all ${
                  state.isCapturing
                    ? 'bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30'
                    : 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'
                }`}
              >
                {state.isCapturing ? 'STOP' : 'START'}
              </button>
              <button
                onClick={connectToCapture}
                disabled={connectionStatus === 'connecting'}
                className="px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all font-mono text-sm font-bold disabled:opacity-50"
              >
                {connectionStatus === 'connected'
                  ? 'DISCONNECT'
                  : connectionStatus === 'connecting'
                  ? 'CONNECTING...'
                  : 'CONNECT'}
              </button>
            </div>
          </div>

          {/* View Mode Tabs - Terminal Style */}
          <div className="flex bg-black/60 rounded-lg p-1 border border-purple-500/20">
            <button
              onClick={() => setViewMode('live')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-mono font-bold transition-all ${
                viewMode === 'live'
                  ? 'bg-green-500/30 text-green-400 border border-green-500/30'
                  : 'text-gray-400 hover:text-green-300'
              }`}
            >
              <Activity className="h-4 w-4" />
              LIVE_STREAM
            </button>
            <button
              onClick={() => setViewMode('summaries')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-mono font-bold transition-all ${
                viewMode === 'summaries'
                  ? 'bg-blue-500/30 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-blue-300'
              }`}
            >
              <Brain className="h-4 w-4" />
              AI_ANALYSIS
            </button>
            <button
              onClick={() => setViewMode('analytics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-mono font-bold transition-all ${
                viewMode === 'analytics'
                  ? 'bg-purple-500/30 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              METRICS
            </button>
          </div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="flex-1 px-6 pb-6 relative z-10">
        <div className="h-full bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-2xl overflow-hidden">
          {viewMode === 'live' && renderTerminalLiveView()}
          {viewMode === 'summaries' && renderSummariesView()}
          {viewMode === 'analytics' && renderAnalyticsView()}
        </div>
      </div>
    </div>
  );
}
