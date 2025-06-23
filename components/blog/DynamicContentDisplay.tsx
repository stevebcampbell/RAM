'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getCulturalContextInfo,
  getLanguageInfo,
} from '@/lib/content-adaptation';
import {
  AdaptationInsights,
  ContentAdaptation,
  ContentPost,
} from '@/lib/types';
import { formatDate, getFCLColor, getFCLDescription } from '@/lib/utils';
import {
  ArrowRight,
  Clock,
  Eye,
  Globe,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

interface DynamicContentDisplayProps {
  post: ContentPost;
  adaptation: ContentAdaptation | null;
  isAdapting: boolean;
}

export function DynamicContentDisplay({
  post,
  adaptation,
  isAdapting,
}: DynamicContentDisplayProps) {
  const displayContent = adaptation || {
    content: post.content,
    fcl: post.originalFCL,
    language: post.originalLanguage,
    culturalContext: undefined,
  };

  const isOriginal = !adaptation;
  const languageInfo = getLanguageInfo(displayContent.language as any);
  const contextInfo = displayContent.culturalContext
    ? getCulturalContextInfo(displayContent.culturalContext)
    : null;

  // Generate adaptation insights
  const insights: AdaptationInsights | null = adaptation
    ? {
        complexityChange: {
          from: post.originalFCL,
          to: adaptation.fcl,
          direction:
            adaptation.fcl < post.originalFCL
              ? 'simplified'
              : adaptation.fcl > post.originalFCL
              ? 'enhanced'
              : 'maintained',
        },
        languageChange: {
          from: post.originalLanguage as any,
          to: adaptation.language,
        },
        culturalAdaptations: adaptation.culturalContext
          ? [
              `Adapted for ${
                contextInfo?.name || adaptation.culturalContext
              } context`,
            ]
          : [],
        keyChanges: [
          `Vocabulary adjusted for FCL ${adaptation.fcl}`,
          `Sentence structure optimized`,
          `Examples culturally relevant`,
        ],
        preservedConcepts: [
          'Core technical concepts',
          'Main learning objectives',
          'Practical applications',
        ],
      }
    : null;

  return (
    <div className="relative">
      {/* Adaptation Status Header */}
      <div className="mb-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge
              variant={isOriginal ? 'default' : 'secondary'}
              className="text-sm"
            >
              {isOriginal ? (
                <>
                  <Eye className="h-3 w-3 mr-1" />
                  Original Content
                </>
              ) : (
                <>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Adapted Content
                </>
              )}
            </Badge>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span
                className={`font-medium ${getFCLColor(displayContent.fcl)}`}
              >
                FCL {displayContent.fcl}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                {languageInfo && <span>{languageInfo.flag}</span>}
                <span>{languageInfo?.name || displayContent.language}</span>
              </div>
              {contextInfo && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <span>{contextInfo.icon}</span>
                    <span>{contextInfo.name}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            {adaptation && (
              <>
                <Clock className="h-3 w-3" />
                <span>Generated {formatDate(adaptation.generatedAt)}</span>
              </>
            )}
          </div>
        </div>

        {/* Complexity Description */}
        <div className="mt-2">
          <Badge variant="outline" className="text-xs">
            {getFCLDescription(displayContent.fcl)}
          </Badge>
          {!isOriginal && insights && (
            <span className="ml-2 text-xs text-gray-600">
              {insights.complexityChange.direction === 'simplified' &&
                'Simplified from'}
              {insights.complexityChange.direction === 'enhanced' &&
                'Enhanced from'}
              {insights.complexityChange.direction === 'maintained' &&
                'Maintained at'}
              {insights.complexityChange.direction !== 'maintained' &&
                ` FCL ${insights.complexityChange.from}`}
            </span>
          )}
        </div>
      </div>

      {/* Content Display Area */}
      <div
        className={`prose prose-lg max-w-none transition-opacity duration-300 ${
          isAdapting ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {isAdapting ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Adapting Content...
              </h3>
              <p className="text-sm text-gray-600 max-w-sm">
                Generating content at FCL {displayContent.fcl} in{' '}
                {languageInfo?.name}
                {contextInfo && ` with ${contextInfo.name} context`}
              </p>
            </div>
          </div>
        ) : (
          <div
            className="content-fade-in"
            dangerouslySetInnerHTML={{
              __html: displayContent.content.replace(/\n/g, '<br />'),
            }}
          />
        )}
      </div>

      {/* Adaptation Insights Panel */}
      {insights && !isAdapting && (
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-blue-600" />
            <h4 className="font-medium text-blue-900">
              💡 Adaptation Insights
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Changes Made */}
            <div>
              <h5 className="text-sm font-medium text-blue-800 mb-2">
                🔄 Key Adaptations
              </h5>
              <ul className="text-sm text-blue-700 space-y-1">
                {insights.keyChanges.map((change, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{change}</span>
                  </li>
                ))}
                {insights.culturalAdaptations.map((adaptation, index) => (
                  <li
                    key={`cultural-${index}`}
                    className="flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{adaptation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preserved Concepts */}
            <div>
              <h5 className="text-sm font-medium text-blue-800 mb-2">
                ✅ Concepts Preserved
              </h5>
              <ul className="text-sm text-blue-700 space-y-1">
                {insights.preservedConcepts.map((concept, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Suggested Next Steps */}
          <div className="mt-4 pt-4 border-t border-blue-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-blue-800">
                <strong>Reading level progression:</strong> Try FCL{' '}
                {displayContent.fcl + 10} next
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-200"
              >
                <ArrowRight className="h-3 w-3 mr-1" />
                Try Higher Level
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Original Content Reference */}
      {!isOriginal && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <Globe className="h-4 w-4 inline mr-1" />
              <strong>Original:</strong> FCL {post.originalFCL} •{' '}
              {post.originalLanguage.toUpperCase()} •{' '}
              {post.metadata.readingTime} min read
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Eye className="h-3 w-3 mr-1" />
              View Original
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
