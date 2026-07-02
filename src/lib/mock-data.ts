import {
  Achievement,
  Course,
  ImpactStat,
  Learner,
  LeaderboardEntry,
  MentorSession,
} from "@/types";

export const currentLearner: Learner = {
  id: "u1",
  name: "Amara",
  initials: "AM",
  streakDays: 12,
  weeklyGoalMinutes: 300,
  weeklyMinutesCompleted: 214,
};

export const courses: Course[] = [
  {
    id: "c1",
    title: "Foundations of Data Literacy",
    category: "Data & Analytics",
    mentor: "Wale Adebayo",
    totalLessons: 24,
    completedLessons: 16,
    durationMinutes: 480,
    coverTone: "indigo",
    free: true,
  },
  {
    id: "c2",
    title: "Spoken English for Interviews",
    category: "Communication",
    mentor: "Grace Nwosu",
    totalLessons: 18,
    completedLessons: 5,
    durationMinutes: 270,
    coverTone: "teal",
    free: true,
  },
  {
    id: "c3",
    title: "Intro to Web Development",
    category: "Software",
    mentor: "Tunde Bakare",
    totalLessons: 32,
    completedLessons: 32,
    durationMinutes: 640,
    coverTone: "gold",
    free: true,
  },
  {
    id: "c4",
    title: "Personal Finance Basics",
    category: "Life Skills",
    mentor: "Ifeoma Chukwu",
    totalLessons: 12,
    completedLessons: 2,
    durationMinutes: 150,
    coverTone: "rose",
    free: true,
  },
];

export const achievements: Achievement[] = [
  { id: "a1", title: "30-Day Streak", tier: "gold", earnedOn: "Jun 2026" },
  { id: "a2", title: "First Course Complete", tier: "gold", earnedOn: "May 2026" },
  { id: "a3", title: "Community Mentor", tier: "silver", earnedOn: "May 2026" },
  { id: "a4", title: "Early Riser", tier: "bronze", earnedOn: "Apr 2026" },
];

export const leaderboard: LeaderboardEntry[] = [
  { id: "l1", name: "Chidera O.", initials: "CO", points: 2840, rank: 1 },
  { id: "l2", name: "Amara", initials: "AM", points: 2615, rank: 2, isCurrentUser: true },
  { id: "l3", name: "Femi A.", initials: "FA", points: 2400, rank: 3 },
  { id: "l4", name: "Ngozi E.", initials: "NE", points: 2180, rank: 4 },
];

export const impactStats: ImpactStat[] = [
  { id: "i1", label: "Learners funded this month", value: 742, goal: 1000, unit: "learners" },
  { id: "i2", label: "Scholarship hours unlocked", value: 5230, goal: 8000, unit: "hours" },
];

export const upcomingSession: MentorSession = {
  id: "s1",
  title: "Live Q&A: Breaking into Data Roles",
  mentor: "Wale Adebayo",
  date: "Fri, Jul 3",
  time: "6:00 PM WAT",
};
