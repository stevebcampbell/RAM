'use client';

import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface DashboardData {
  success: boolean;
  stats: {
    today: {
      totalEntries: number;
      totalWords: number;
      avgWpm: number;
      activeHours: number;
    };
    week: {
      totalEntries: number;
      totalWords: number;
      activeDays: number;
    };
  };
  entries: Array<{
    timestamp: string;
    content: string;
    app: string;
    wpm?: number;
  }>;
  appUsage: Array<{ app: string; count: number }>;
  hourlyActivity: number[];
  topWords: Array<{ word: string; count: number }>;
  dailySummary: string;
  source: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboard();
    const interval = setInterval(loadDashboard, 5 * 60 * 1000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      
      // Try dashboard API first
      const response = await fetch('/api/dashboard', {
        headers: {
          'x-vercel-protection-bypass': 'jhwhgjernlkblrnbugfbdnwsfanirbgu'
        }
      });
      
      if (response.ok) {
        const dashboardData = await response.json();
        if (dashboardData.success) {
          setData(dashboardData);
          setError(null);
          return;
        }
      }
      
      // Fallback to consciousness API
      const fallbackResponse = await fetch('/api/consciousness?limit=100', {
        headers: {
          'x-vercel-protection-bypass': 'jhwhgjernlkblrnbugfbdnwsfanirbgu'
        }
      });
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        if (fallbackData.recentEntries?.length > 0) {
          // Process fallback data into dashboard format
          const processedData = processFallbackData(fallbackData.recentEntries);
          setData(processedData);
          setError(null);
          return;
        }
      }
      
      setError('No consciousness data available');
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Failed to load consciousness data');
    } finally {
      setLoading(false);
    }
  };

  const processFallbackData = (entries: any[]): DashboardData => {
    const today = new Date().toISOString().split('T')[0];
    const todayEntries = entries.filter(entry => {
      const entryDate = new Date(entry.timestamp).toISOString().split('T')[0];
      return entryDate === today;
    });

    const totalWords = todayEntries.reduce((sum, entry) => {
      return sum + (entry.content ? entry.content.split(' ').length : 0);
    }, 0);

    const avgWpm = todayEntries.length > 0 
      ? Math.round(todayEntries.reduce((sum, entry) => sum + (entry.wpm || 0), 0) / todayEntries.length)
      : 0;

    const activeHours = new Set(todayEntries.map(entry => 
      new Date(entry.timestamp).getHours()
    )).size;

    // App usage
    const appUsage: { [key: string]: number } = {};
    todayEntries.forEach(entry => {
      const app = entry.app || 'Unknown';
      appUsage[app] = (appUsage[app] || 0) + 1;
    });

    // Hourly activity
    const hourlyActivity = new Array(24).fill(0);
    todayEntries.forEach(entry => {
      const hour = new Date(entry.timestamp).getHours();
      hourlyActivity[hour]++;
    });

    // Word analysis
    const allText = todayEntries
      .map(e => e.content || '')
      .join(' ')
      .toLowerCase();
    
    const words = allText.split(/\s+/).filter(word => 
      word.length > 3 && 
      !['this', 'that', 'with', 'have', 'will', 'from', 'they', 'been', 'were', 'said', 'each', 'which', 'their'].includes(word)
    );

    const wordFreq: { [key: string]: number } = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    const topWords = Object.entries(wordFreq)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 20)
      .map(([word, count]) => ({ word, count }));

    return {
      success: true,
      stats: {
        today: {
          totalEntries: todayEntries.length,
          totalWords,
          avgWpm,
          activeHours,
        },
        week: {
          totalEntries: entries.length,
          totalWords: entries.reduce((sum, entry) => sum + (entry.content?.split(' ').length || 0), 0),
          activeDays: new Set(entries.map(entry => new Date(entry.timestamp).toDateString())).size,
        }
      },
      entries: entries.slice(0, 50),
      appUsage: Object.entries(appUsage)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([app, count]) => ({ app, count })),
      hourlyActivity,
      topWords,
      dailySummary: `Today you've been active across ${Object.keys(appUsage).length} applications. You've logged ${totalWords} words of digital consciousness across ${activeHours} active hours.`,
      source: 'processed'
    };
  };

  const chartData = {
    labels: Array.from({length: 24}, (_, i) => `${i}:00`),
    datasets: [{
      label: 'Activity Level',
      data: data?.hourlyActivity || [],
      borderColor: '#64ffda',
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e0e6ed'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#a0a6b8'
        },
        grid: {
          color: 'rgba(100, 255, 218, 0.1)'
        }
      },
      y: {
        ticks: {
          color: '#a0a6b8'
        },
        grid: {
          color: 'rgba(100, 255, 218, 0.1)'
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🧠</div>
          <div className="text-2xl text-white">Loading consciousness data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-2xl text-white mb-4">Error Loading Dashboard</div>
          <div className="text-lg text-red-300">{error}</div>
          <button 
            onClick={loadDashboard}
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl animate-pulse">🧠</div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                  Digital Consciousness Dashboard
                </h1>
                <p className="text-slate-400 mt-2">Real-time insights into Steve's digital mind</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400">Connected to Database</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
            📊 Today's Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{data?.stats.today.totalEntries || 0}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Total Entries</div>
            </div>
            <div className="text-center p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{data?.stats.today.totalWords?.toLocaleString() || 0}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Words Logged</div>
            </div>
            <div className="text-center p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{data?.stats.today.avgWpm || 0}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Average WPM</div>
            </div>
            <div className="text-center p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{data?.stats.today.activeHours || 0}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wide">Active Hours</div>
            </div>
          </div>
          <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-6 border-l-4 border-l-cyan-400">
            <strong className="text-cyan-400">Daily Summary:</strong> 
            <span className="text-slate-300 ml-2">{data?.dailySummary}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              ⏰ Recent Activity
            </h2>
            <div className="max-h-96 overflow-y-auto space-y-4">
              {data?.entries.slice(0, 10).map((entry, index) => {
                const time = new Date(entry.timestamp).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit'
                });
                const content = entry.content ? entry.content.substring(0, 100) : 'No content';
                
                return (
                  <div key={index} className="flex gap-4 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl border-l-4 border-l-cyan-400">
                    <div className="text-cyan-400 font-semibold min-w-fit text-sm">{time}</div>
                    <div className="flex-1">
                      <div className="text-slate-400 text-xs mb-1">{entry.app || 'Unknown App'}</div>
                      <div className="text-slate-300 text-sm leading-relaxed">
                        {content}{content.length >= 100 ? '...' : ''}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* App Usage */}
          <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              💻 App Usage
            </h2>
            <div className="space-y-3">
              {data?.appUsage.map(({app, count}, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                  <span className="text-white font-medium">{app}</span>
                  <span className="text-cyan-400 font-bold">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
            📈 Activity Patterns
          </h2>
          <div className="h-80">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Content Insights */}
        <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
            🔍 Content Insights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-cyan-400 mb-4">Top Words Today</h3>
              <div className="flex flex-wrap gap-2">
                {data?.topWords.slice(0, 10).map(({word, count}, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm"
                  >
                    {word} ({count})
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl text-cyan-400 mb-4">Activity Stats</h3>
              <div className="space-y-3 text-slate-300">
                <div>📝 Total entries today: {data?.stats.today.totalEntries}</div>
                <div>🔤 Total words today: {data?.stats.today.totalWords?.toLocaleString()}</div>
                <div>📊 Average WPM: {data?.stats.today.avgWpm}</div>
                <div>⏰ Active hours: {data?.stats.today.activeHours}</div>
                <div>📅 This week: {data?.stats.week.totalEntries} entries</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
