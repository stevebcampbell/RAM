'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  CULTURAL_CONTEXTS,
  getCulturalContextInfo,
  getLanguageInfo,
  SUPPORTED_LANGUAGES,
} from '@/lib/content-adaptation';
import {
  AdaptationRequest,
  ContentAdaptation,
  ContentPost,
  CulturalContext,
  LanguageCode,
} from '@/lib/types';
import { getFCLColor, getFCLDescription } from '@/lib/utils';
import {
  BookOpen,
  Globe,
  Languages,
  RotateCcw,
  Settings2,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

interface ContentAdaptationPanelProps {
  post: ContentPost;
  currentAdaptation: ContentAdaptation | null;
  onAdaptationChange: (request: AdaptationRequest) => void;
  isLoading?: boolean;
}

export function ContentAdaptationPanel({
  post,
  currentAdaptation,
  onAdaptationChange,
  isLoading = false,
}: ContentAdaptationPanelProps) {
  const [targetFCL, setTargetFCL] = useState<number>(
    currentAdaptation?.fcl || post.originalFCL
  );
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(
    (currentAdaptation?.language as LanguageCode) ||
      (post.originalLanguage as LanguageCode)
  );
  const [culturalContext, setCulturalContext] = useState<
    CulturalContext | undefined
  >(currentAdaptation?.culturalContext);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleAdapt = () => {
    onAdaptationChange({
      postId: post.id,
      targetFCL,
      targetLanguage: selectedLanguage,
      culturalContext,
      priority: 'normal',
    });
  };

  const handleReset = () => {
    setTargetFCL(post.originalFCL);
    setSelectedLanguage(post.originalLanguage as LanguageCode);
    setCulturalContext(undefined);
    onAdaptationChange({
      postId: post.id,
      targetFCL: post.originalFCL,
      targetLanguage: post.originalLanguage as LanguageCode,
      priority: 'normal',
    });
  };

  const isOriginal =
    targetFCL === post.originalFCL &&
    selectedLanguage === post.originalLanguage &&
    !culturalContext;

  const hasChanges =
    targetFCL !== (currentAdaptation?.fcl || post.originalFCL) ||
    selectedLanguage !==
      (currentAdaptation?.language || post.originalLanguage) ||
    culturalContext !== currentAdaptation?.culturalContext;

  const selectedLanguageInfo = getLanguageInfo(selectedLanguage);
  const selectedContextInfo = culturalContext
    ? getCulturalContextInfo(culturalContext)
    : null;

  return (
    <div className="adaptation-panel rounded-xl p-6 mb-8 border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Settings2 className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              🎯 Adapt This Content
            </h3>
            <p className="text-sm text-gray-600">
              Customize complexity, language, and cultural context
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Original: FCL {post.originalFCL} •{' '}
            {post.originalLanguage.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Main Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* FCL Level Control */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Complexity Level
            </label>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${getFCLColor(targetFCL)}`}>
                FCL {targetFCL}
              </span>
              <Badge variant="secondary" className="text-xs">
                {getFCLDescription(targetFCL)}
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Slider
              value={[targetFCL]}
              onValueChange={(value) => setTargetFCL(value[0])}
              min={35}
              max={95}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Simple (35)</span>
              <span>Expert (95)</span>
            </div>
          </div>

          {/* FCL Visual Indicator */}
          <div className="h-2 rounded-full fcl-indicator opacity-20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white rounded-full shadow-sm border"
              style={{
                width: '8px',
                left: `${((targetFCL - 35) / (95 - 35)) * 100}%`,
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        </div>

        {/* Language Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Languages className="h-4 w-4" />
            Language
          </label>

          <Select
            value={selectedLanguage}
            onValueChange={(value: LanguageCode) => setSelectedLanguage(value)}
          >
            <SelectTrigger>
              <SelectValue>
                {selectedLanguageInfo && (
                  <div className="flex items-center gap-2">
                    <span>{selectedLanguageInfo.flag}</span>
                    <span>{selectedLanguageInfo.name}</span>
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                    <span className="text-xs text-gray-500">
                      ({lang.nativeName})
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Cultural Context */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Cultural Context
          </label>

          <Select
            value={culturalContext || 'global'}
            onValueChange={(value: CulturalContext) =>
              setCulturalContext(value === 'global' ? undefined : value)
            }
          >
            <SelectTrigger>
              <SelectValue>
                {selectedContextInfo ? (
                  <div className="flex items-center gap-2">
                    <span>{selectedContextInfo.icon}</span>
                    <span>{selectedContextInfo.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>🌍</span>
                    <span>Global Perspective</span>
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {CULTURAL_CONTEXTS.filter(
                (context) =>
                  context.languages.includes(selectedLanguage) ||
                  context.code === 'global'
              ).map((context) => (
                <SelectItem key={context.code} value={context.code}>
                  <div className="flex items-center gap-2">
                    <span>{context.icon}</span>
                    <span>{context.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <Button
            onClick={handleAdapt}
            disabled={isLoading || !hasChanges}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Adapting...
              </>
            ) : (
              <>
                <RotateCcw className="h-4 w-4 mr-2" />
                Adapt Content
              </>
            )}
          </Button>

          <Button
            variant="outline"
            onClick={handleReset}
            disabled={isOriginal || isLoading}
            size="sm"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Show Original
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-purple-600">
            <Zap className="h-4 w-4 mr-2" />
            Auto-Adapt
          </Button>
        </div>
      </div>

      {/* Status Indicator */}
      {hasChanges && !isLoading && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            ✨ Click "Adapt Content" to generate a version at FCL {targetFCL} in{' '}
            {selectedLanguageInfo?.name}
            {selectedContextInfo && ` with ${selectedContextInfo.name} context`}
          </p>
        </div>
      )}
    </div>
  );
}
