// Module Types
export interface Module {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  description: string;
  progress: number;
  content?: string;
  stats?: ClimateStatReference[];
}

// Quiz Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number; // Index of correct answer
  explanation?: string;
}

export interface Quiz {
  moduleId: string;
  questions: QuizQuestion[];
}

// Climate Data Types
export interface ClimateStat {
  id: string;
  name: string;
  value: string;
  unit: string;
  source: string;
  updated: string;
  trend?: 'up' | 'down' | 'stable';
  description?: string;
}

export interface ClimateStatReference {
  statId: string;
  context: string;
}

// User Progress Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  earnedOn?: string;
}

export interface UserProgress {
  completedModules: string[];
  quizScores: Record<string, number>;
  badges: Badge[];
  totalPoints: number;
}