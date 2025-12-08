export type Locale = 'en' | 'zh';

export interface ProjectSection {
  id: string;
  title: string;
  content: string;
  image?: string;
}

// Existing Project Interface
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  client: string;
  role: string;
  year: string;
  sections: ProjectSection[];
}

export interface HeroData {
  eyebrow: string;
  title: string;
  description: string;
  tags?: string[];
  meta: { label: string; value: string }[];
  heroVisualPlaceholder?: string;
  heroVideo?: string;
  heroImage?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description: string;
  note?: string;
}

export interface MetricsData {
  title: string;
  metrics: MetricItem[];
}

export interface ContextData {
  title: string;
  paragraphs: string[];
  summary: {
    scopeItems: string[];
    teamItems: string[];
    constraintItems: string[];
  };
}

export interface LifecyclePhase {
  phaseNumber: number;
  title: string;
  description: string;
  chips: string[];
  image?: string;
}

export interface LifecycleOverviewData {
  title: string;
  phases: LifecyclePhase[];
}

export interface ProblemItem {
  title: string;
  content: string[];
  quote?: string;
  image?: string;
  imageAlt?: string;
}

export interface PhaseIntro {
  phaseNumber: number;
  phaseLabel: string;
  title: string;
  challengeTitle?: string; // Added challenge title
  problems: ProblemItem[];
  userQuote?: string;
  conclusionLabel?: string;
  beforeLabel: string;
  beforePlaceholderText: string;
}

export interface MoveVisual {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
}

export interface Move {
  id: string;
  eyebrow: string;
  title: string;
  metaPills: string[];
  subtitle?: string;
  bullets: string[];
  visualPlaceholderText: string;
  visual?: MoveVisual;
}

export interface StrategyData {
  title: string;
  subtitle: string;
  userInsight: {
    content: string;
    highlight?: string;
  };
  strategies: {
    title: string;
    content: string;
  }[];
}

export interface PhaseData {
  intro: PhaseIntro;
  strategy?: StrategyData;
  moves: Move[];
  resultMetrics?: MetricResult[];
  contributions?: OutcomeBlock;
}

export interface OutcomeBlock {
  title: string;
  items: string[];
}

export interface MetricResult {
  label: string;
  value: string;
  description: string;
}

export interface PatternItem {
  title: string;
  description: string;
  myRole: string;
}

export interface PatternLibraryData {
  title: string;
  intro?: string;
  patterns: PatternItem[];
}

export interface ReflectionData {
  title: string;
  learnings: string[];
  growth: string[];
}

export interface CaseStudyData {
  hero: HeroData;
  metrics: MetricsData;
  context: ContextData;
  lifecycle: LifecycleOverviewData;
  phases: PhaseData[];
  patterns: PatternLibraryData;
  reflection: ReflectionData;
}

export interface UnifiedProject extends Project {
  details?: CaseStudyData;
  comingSoon?: boolean;
}
