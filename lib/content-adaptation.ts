import {
  AdaptationRequest,
  ContentAdaptation,
  CulturalContext,
  CulturalContextInfo,
  Language,
  LanguageCode,
} from './types';

// Mock data for development - replace with real API calls later
const mockAdaptations: { [key: string]: ContentAdaptation } = {
  // "Building AI-Powered Content Frameworks" adaptations
  'ai-content-frameworks-en-35': {
    id: 'adapt-1',
    postId: 'ai-content-frameworks',
    content: `# Making AI Tools for Content

AI can help you make better content. It's easier than you think!

## What Are AI Content Tools?

AI content tools are smart programs that help you write better. They can:
- Make your writing clearer
- Check your grammar
- Suggest better words
- Help organize your ideas

## Why Use AI for Content?

1. **Save Time**: AI works fast
2. **Better Quality**: AI catches mistakes
3. **New Ideas**: AI suggests things you might miss
4. **Consistent Style**: AI keeps your voice the same

## Simple Steps to Start

1. Pick one AI tool to try
2. Start with small tasks
3. Learn how it works
4. Use it for bigger projects

AI content tools are not scary. They're just helpers that make your work better and faster.`,
    fcl: 35,
    language: 'en',
    culturalContext: 'global',
    generatedAt: new Date('2024-12-01'),
    cached: true,
    adaptationMeta: {
      originalFCL: 72,
      adaptationStrategy: 'simplified-vocabulary-short-sentences',
      qualityScore: 8.5,
      wordCount: 145,
      readingTime: 1,
    },
  },

  'ai-content-frameworks-ja-45': {
    id: 'adapt-2',
    postId: 'ai-content-frameworks',
    content: `# AIコンテンツフレームワークの構築

AIを使ったコンテンツ作成は、思っているより簡単です。

## AIコンテンツツールとは

AIコンテンツツールは、コンテンツ作成を支援するスマートなシステムです：

- **文章の改善**: より読みやすい文章に
- **アイデア生成**: 新しい視点を提供
- **品質管理**: 一貫した品質を維持
- **効率化**: 作業時間を大幅に短縮

## 日本企業での活用例

多くの日本企業がAIコンテンツツールを導入しています：

1. **マーケティング資料**の自動生成
2. **技術文書**の翻訳と最適化
3. **社内研修**コンテンツの作成
4. **顧客対応**の自動化

## 実装のステップ

### 1. 目標設定
- 何を改善したいか明確に
- 期待する成果を数値化

### 2. ツール選択
- 日本語対応の確認
- 企業セキュリティの考慮
- コストパフォーマンス

### 3. 段階的導入
- 小さなプロジェクトから開始
- フィードバックを収集
- 徐々に規模を拡大

AIコンテンツフレームワークは、日本のビジネス文化に合わせて調整することが重要です。`,
    fcl: 45,
    language: 'ja',
    culturalContext: 'japanese',
    generatedAt: new Date('2024-12-01'),
    cached: true,
    adaptationMeta: {
      originalFCL: 72,
      adaptationStrategy: 'japanese-business-culture-adaptation',
      qualityScore: 9.2,
      wordCount: 280,
      readingTime: 2,
    },
  },

  'ai-content-frameworks-es-55': {
    id: 'adapt-3',
    postId: 'ai-content-frameworks',
    content: `# Construyendo Frameworks de Contenido con IA

La inteligencia artificial está revolucionando la creación de contenido, y implementar estos sistemas es más accesible de lo que imaginas.

## Arquitectura de Frameworks de IA

Un framework efectivo de contenido con IA requiere varios componentes clave:

### 1. Procesamiento de Lenguaje Natural (PLN)
- **Análisis semántico** para comprender el contexto
- **Generación de texto** adaptada al público objetivo
- **Optimización de tono** según la marca

### 2. Motor de Personalización
- Algoritmos de aprendizaje automático
- Análisis de comportamiento del usuario
- Adaptación cultural y regional

### 3. Sistema de Control de Calidad
- Validación automática de contenido
- Detección de sesgos y errores
- Métricas de engagement predictivo

## Implementación Práctica

### Fase 1: Análisis y Planificación

1. Auditoría de contenido existente
2. Definición de objetivos KPI
3. Selección de tecnologías apropiadas

### Fase 2: Desarrollo del MVP
- Prototipo con funcionalidades básicas
- Testing con usuarios reales
- Iteración basada en feedback

### Fase 3: Escalamiento
- Integración con sistemas existentes
- Automatización de workflows
- Monitoreo continuo de performance

## Consideraciones Técnicas

La implementación exitosa requiere atención a:
- **Latencia**: Respuesta en tiempo real
- **Escalabilidad**: Manejo de volúmenes altos
- **Seguridad**: Protección de datos sensibles
- **Compliance**: Regulaciones locales e internacionales

Los frameworks de contenido con IA representan el futuro de la comunicación digital eficiente.`,
    fcl: 55,
    language: 'es',
    culturalContext: 'spanish',
    generatedAt: new Date('2024-12-01'),
    cached: true,
    adaptationMeta: {
      originalFCL: 72,
      adaptationStrategy: 'technical-spanish-intermediate',
      qualityScore: 8.8,
      wordCount: 320,
      readingTime: 3,
    },
  },
};

// Language configurations
export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
];

// Cultural context configurations
export const CULTURAL_CONTEXTS: CulturalContextInfo[] = [
  {
    code: 'global',
    name: 'Global Perspective',
    description: 'Universal approach suitable for international audiences',
    icon: '🌍',
    languages: ['en', 'es', 'pt', 'fr', 'de'],
  },
  {
    code: 'japanese',
    name: 'Japanese Business Culture',
    description: 'Adapted for Japanese business practices and cultural norms',
    icon: '🏯',
    languages: ['ja', 'en'],
  },
  {
    code: 'brazilian',
    name: 'Brazilian Context',
    description: 'Tailored for Brazilian culture and business environment',
    icon: '🇧🇷',
    languages: ['pt', 'en'],
  },
  {
    code: 'spanish',
    name: 'Hispanic Context',
    description: 'Adapted for Spanish-speaking markets and culture',
    icon: '🏛️',
    languages: ['es', 'en'],
  },
  {
    code: 'european',
    name: 'European Perspective',
    description: 'EU-focused approach considering GDPR and European values',
    icon: '🇪🇺',
    languages: ['en', 'fr', 'de', 'es'],
  },
  {
    code: 'american',
    name: 'American Context',
    description: 'US-focused business and cultural perspective',
    icon: '🦅',
    languages: ['en'],
  },
];

/**
 * Get content adaptation (mock implementation for development)
 */
export function getContentAdaptation(
  postId: string,
  targetFCL: number,
  language: LanguageCode,
  culturalContext?: CulturalContext
): ContentAdaptation | null {
  const key = generateAdaptationKey(
    postId,
    targetFCL,
    language,
    culturalContext
  );
  return mockAdaptations[key] || null;
}

/**
 * Generate content adaptation (mock implementation)
 */
export async function generateContentAdaptation(
  request: AdaptationRequest
): Promise<ContentAdaptation> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const key = generateAdaptationKey(
    request.postId,
    request.targetFCL,
    request.targetLanguage,
    request.culturalContext
  );

  // Return existing mock or create a placeholder
  const existing = mockAdaptations[key];
  if (existing) {
    return existing;
  }

  // Create placeholder adaptation
  return {
    id: `adapt-${Date.now()}`,
    postId: request.postId,
    content: `# Adapted Content (${request.targetLanguage.toUpperCase()}, FCL ${
      request.targetFCL
    })

This content has been adapted to FCL level ${request.targetFCL} in ${
      request.targetLanguage
    }.

*This is a placeholder adaptation. In production, this would be generated using your RandomAccessMind AI system.*

The original content would be processed through:
1. Language translation (if needed)
2. Complexity adjustment to FCL ${request.targetFCL}
3. Cultural context adaptation${
      request.culturalContext ? ` for ${request.culturalContext}` : ''
    }
4. Quality assurance and validation

The adapted content maintains the core concepts while optimizing for your specified parameters.`,
    fcl: request.targetFCL,
    language: request.targetLanguage,
    culturalContext: request.culturalContext,
    generatedAt: new Date(),
    cached: false,
    adaptationMeta: {
      originalFCL: 72,
      adaptationStrategy: 'ai-generated-placeholder',
      qualityScore: 7.5,
      wordCount: 120,
      readingTime: 1,
    },
  };
}

/**
 * Check if adaptation exists in cache
 */
export function isAdaptationCached(
  postId: string,
  fcl: number,
  language: LanguageCode,
  culturalContext?: CulturalContext
): boolean {
  const key = generateAdaptationKey(postId, fcl, language, culturalContext);
  return key in mockAdaptations;
}

/**
 * Get available adaptations for a post
 */
export function getAvailableAdaptations(postId: string): ContentAdaptation[] {
  return Object.values(mockAdaptations).filter(
    (adaptation) => adaptation.postId === postId
  );
}

/**
 * Get language info by code
 */
export function getLanguageInfo(code: LanguageCode): Language | undefined {
  return SUPPORTED_LANGUAGES.find((lang) => lang.code === code);
}

/**
 * Get cultural context info by code
 */
export function getCulturalContextInfo(
  code: CulturalContext
): CulturalContextInfo | undefined {
  return CULTURAL_CONTEXTS.find((context) => context.code === code);
}

/**
 * Generate adaptation cache key
 */
function generateAdaptationKey(
  postId: string,
  fcl: number,
  language: LanguageCode,
  culturalContext?: CulturalContext
): string {
  const context = culturalContext ? `-${culturalContext}` : '';
  return `${postId}-${language}-${fcl}${context}`;
}

/**
 * Get FCL levels available for a language
 */
export function getAvailableFCLLevels(
  postId: string,
  language: LanguageCode
): number[] {
  const adaptations = Object.values(mockAdaptations).filter(
    (adaptation) =>
      adaptation.postId === postId && adaptation.language === language
  );

  return adaptations.map((adaptation) => adaptation.fcl).sort((a, b) => a - b);
}

/**
 * Get suggested next FCL level for progression
 */
export function getSuggestedNextFCL(currentFCL: number): number {
  if (currentFCL < 50) return currentFCL + 10;
  if (currentFCL < 70) return currentFCL + 5;
  return Math.min(95, currentFCL + 5);
}

/**
 * Get adaptation statistics
 */
export function getAdaptationStats(postId: string): {
  totalAdaptations: number;
  languageCount: number;
  fclRange: { min: number; max: number };
  culturalContexts: number;
} {
  const adaptations = Object.values(mockAdaptations).filter(
    (adaptation) => adaptation.postId === postId
  );

  const languages = new Set(adaptations.map((a) => a.language));
  const fcls = adaptations.map((a) => a.fcl);
  const contexts = new Set(
    adaptations.map((a) => a.culturalContext).filter(Boolean)
  );

  return {
    totalAdaptations: adaptations.length,
    languageCount: languages.size,
    fclRange: {
      min: Math.min(...fcls),
      max: Math.max(...fcls),
    },
    culturalContexts: contexts.size,
  };
}
