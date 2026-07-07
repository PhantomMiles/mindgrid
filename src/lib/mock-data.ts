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

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  initials: string;
  title: string;
  bio: string;
  longBio: string;
  expertise: string[];
  coursesTaught: number;
  learnersReached: number;
}

export const instructors: Instructor[] = [
  {
    id: "in1",
    slug: "wale-adebayo",
    name: "Wale Adebayo",
    initials: "WA",
    title: "Data & Analytics Mentor",
    bio: "Data analyst turned educator, focused on making data literacy accessible to first-generation tech learners.",
    longBio:
      "Wale spent six years as a data analyst before moving into education full-time. He believes the biggest barrier to data careers isn't talent, it's access to plain-language teaching — so that's what he builds. Outside MindGrid, he runs a monthly data-storytelling meetup.",
    expertise: ["Data Literacy", "SQL", "Data Visualization"],
    coursesTaught: 3,
    learnersReached: 1240,
  },
  {
    id: "in2",
    slug: "grace-nwosu",
    name: "Grace Nwosu",
    initials: "GN",
    title: "Communication Coach",
    bio: "Communication coach helping learners speak with confidence in interviews, pitches, and the workplace.",
    longBio:
      "Grace has coached over a thousand job-seekers on interview communication. Her MindGrid courses focus on practical, low-pressure practice — she's especially known for helping non-native English speakers build interview confidence without losing their voice.",
    expertise: ["Public Speaking", "Interview Prep", "Business English"],
    coursesTaught: 2,
    learnersReached: 980,
  },
  {
    id: "in3",
    slug: "tunde-bakare",
    name: "Tunde Bakare",
    initials: "TB",
    title: "Software Engineering Mentor",
    bio: "Full-stack engineer teaching practical, job-ready web development from first principles.",
    longBio:
      "Tunde has shipped production software for a decade, most recently at a fintech startup. He teaches the way he wishes he'd been taught — project-first, with real deployment from lesson one — and mentors several MindGrid learners into their first junior developer roles each year.",
    expertise: ["JavaScript", "React", "Web Fundamentals"],
    coursesTaught: 4,
    learnersReached: 2150,
  },
  {
    id: "in4",
    slug: "ifeoma-chukwu",
    name: "Ifeoma Chukwu",
    initials: "IC",
    title: "Life Skills Mentor",
    bio: "Financial literacy educator making personal finance approachable for first-time earners.",
    longBio:
      "Ifeoma spent years in retail banking before realizing most of her clients had never been taught the basics anyone needs to manage money well. Her MindGrid courses are built for people earning their first income — budgeting, saving, and avoiding common debt traps, explained without jargon.",
    expertise: ["Budgeting", "Saving", "Financial Planning"],
    coursesTaught: 2,
    learnersReached: 860,
  },
];
