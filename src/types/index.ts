export interface Learner {
  id: string;
  name: string;
  initials: string;
  streakDays: number;
  weeklyGoalMinutes: number;
  weeklyMinutesCompleted: number;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  mentor: string;
  totalLessons: number;
  completedLessons: number;
  durationMinutes: number;
  coverTone: "indigo" | "gold" | "teal" | "rose";
  free: boolean;
}

export type MedalTier = "gold" | "silver" | "bronze";

export interface Achievement {
  id: string;
  title: string;
  tier: MedalTier;
  earnedOn: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  initials: string;
  points: number;
  rank: number;
  isCurrentUser?: boolean;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  goal: number;
  unit: string;
}

export interface MentorSession {
  id: string;
  title: string;
  mentor: string;
  date: string;
  time: string;
}
