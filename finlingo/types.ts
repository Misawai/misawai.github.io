
export type Language = 'zh' | 'en' | 'ja';

export interface LocalizedString {
  zh: string;
  en: string;
  ja: string;
}

export interface Question {
  id: number;
  question: LocalizedString;
  options: {
    key: string;
    text: LocalizedString;
  }[];
  correctAnswer: string;
  explanation: LocalizedString;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface User {
  username: string;
  score: number;
  seenQuestions: number[];
  level: 'easy' | 'medium' | 'hard';
  correctAnswersInARow: number;
  hasSeenIntro: boolean;
  hasCompletedOnboarding: boolean;
  onboardingAnswers?: Record<string, string>;
  hasSetLearningPlan?: boolean;
  learningPlan?: 'casual' | 'regular' | 'serious';
  hasSeenSubscriptionUpsell?: boolean;
}

export interface ChatMessage {
    role: 'user' | 'model';
    content: string;
}
