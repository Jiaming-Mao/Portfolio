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
  tags: string[];
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
}

export interface PhaseIntro {
  phaseNumber: number;
  phaseLabel: string;
  title: string;
  problems: ProblemItem[];
  userQuote?: string;
  conclusionLabel?: string;
  beforeLabel: string;
  beforePlaceholderText: string;
}

export interface Move {
  id: string;
  eyebrow: string;
  title: string;
  metaPills: string[];
  subtitle: string;
  whatINoticed: string[];
  whatIDecided: string[];
  howIDroveIt: string[];
  myContribution: string[];
  visualPlaceholderText: string;
}

export interface PhaseData {
  intro: PhaseIntro;
  moves: Move[];
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
}
