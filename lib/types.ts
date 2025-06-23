// Core types for the RandomAccessMind blog content adaptation system

export interface ContentPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  originalFCL: number;
  originalLanguage: string;
  publishedAt: Date;
  updatedAt: Date;
  author: {
    name: string;
    bio: string;
    avatar?: string;
    social?: {
      twitter?: string;
      github?: string;
      linkedin?: string;
    };
  };
  metadata: {
    tags: string[];
    readingTime: number;
    featured: boolean;
    category: string;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
}

export interface ContentAdaptation {
  id: string;
  postId: string;
  content: string;
  fcl: number;
  language: LanguageCode;
  culturalContext?: CulturalContext;
  generatedAt: Date;
  cached: boolean;
  adaptationMeta: {
    originalFCL: number;
    adaptationStrategy: string;
    qualityScore: number;
    wordCount: number;
    readingTime: number;
  };
}

export interface ViewerPreferences {
  preferredFCL: number;
  preferredLanguage: LanguageCode;
  culturalContext?: CulturalContext;
  autoAdapt: boolean;
  saveHistory: boolean;
  userId?: string;
}

export interface AdaptationRequest {
  postId: string;
  targetFCL: number;
  targetLanguage: LanguageCode;
  culturalContext?: CulturalContext;
  priority?: 'low' | 'normal' | 'high';
}

export interface AdaptationInsights {
  complexityChange: {
    from: number;
    to: number;
    direction: 'simplified' | 'enhanced' | 'maintained';
  };
  languageChange: {
    from: LanguageCode;
    to: LanguageCode;
  };
  culturalAdaptations: string[];
  keyChanges: string[];
  preservedConcepts: string[];
}

// Language and Cultural Context types
export type LanguageCode =
  | 'en'
  | 'ja'
  | 'es'
  | 'pt'
  | 'fr'
  | 'de'
  | 'zh'
  | 'ko';

export type CulturalContext =
  | 'global'
  | 'japanese'
  | 'brazilian'
  | 'spanish'
  | 'european'
  | 'american'
  | 'asian'
  | 'african'
  | 'middle-eastern';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export interface CulturalContextInfo {
  code: CulturalContext;
  name: string;
  description: string;
  icon: string;
  languages: LanguageCode[];
}

// UI State types
export interface ContentAdaptationState {
  currentPost: ContentPost | null;
  currentAdaptation: ContentAdaptation | null;
  isAdapting: boolean;
  adaptationError: string | null;
  viewerPreferences: ViewerPreferences;
  adaptationHistory: ContentAdaptation[];
}

export interface BlogState {
  posts: ContentPost[];
  featuredPosts: ContentPost[];
  categories: string[];
  tags: string[];
  isLoading: boolean;
  error: string | null;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Database schema types (for Supabase)
export interface Database {
  public: {
    Tables: {
      posts: {
        Row: ContentPost;
        Insert: Omit<ContentPost, 'id' | 'publishedAt' | 'updatedAt'>;
        Update: Partial<Omit<ContentPost, 'id'>>;
      };
      adaptations: {
        Row: ContentAdaptation;
        Insert: Omit<ContentAdaptation, 'id' | 'generatedAt'>;
        Update: Partial<Omit<ContentAdaptation, 'id'>>;
      };
      viewer_preferences: {
        Row: ViewerPreferences;
        Insert: ViewerPreferences;
        Update: Partial<ViewerPreferences>;
      };
    };
  };
}

// Component prop types
export interface ContentAdaptationPanelProps {
  post: ContentPost;
  currentAdaptation: ContentAdaptation | null;
  onAdaptationChange: (request: AdaptationRequest) => void;
  isLoading?: boolean;
}

export interface DynamicContentDisplayProps {
  post: ContentPost;
  adaptation: ContentAdaptation | null;
  isAdapting: boolean;
}

export interface BlogPostCardProps {
  post: ContentPost;
  showExcerpt?: boolean;
  showMeta?: boolean;
  variant?: 'default' | 'featured' | 'compact';
}

// Utility types
export type FCLLevel = number; // 35-95
export type AdaptationStatus = 'pending' | 'generating' | 'ready' | 'error';

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}
