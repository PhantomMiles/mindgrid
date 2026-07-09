"use client";

import { useState } from "react";
import { NeuCard } from "@/components/ui/NeuCard";
import { NeuButton } from "@/components/ui/NeuButton";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import { useAuth } from "@/lib/auth-provider";
import { currentLearner as fallbackLearner } from "@/lib/mock-data";
import { 
  User, 
  Settings, 
  BookOpen, 
  Shield, 
  Bell, 
  Check, 
  Camera, 
  Flame, 
  Mail,
  Lock,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

type ActiveTab = "profile" | "goals" | "preferences" | "security";

export default function SettingsPage() {
  const { user } = useAuth();
  const learner = user || fallbackLearner;

  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [leaderboardVisible, setLeaderboardVisible] = useState(true);
  const [studyReminders, setStudyReminders] = useState(true);
  const [goalMinutes, setGoalMinutes] = useState(learner.weeklyGoalMinutes);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Profile fields state
  const [fullName, setFullName] = useState(learner.name);
  const [initials, setInitials] = useState(learner.initials);
  const [email, setEmail] = useState(`${learner.name.toLowerCase().replace(" ", ".")}@example.com`);
  const [bio, setBio] = useState("Dedicated learner building skills step-by-step on MindGrid.");

  // Password fields state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3500);
  };

  const tabs = [
    { id: "profile" as ActiveTab, label: "Profile Info", icon: User },
    { id: "goals" as ActiveTab, label: "Study Plan", icon: BookOpen },
    { id: "preferences" as ActiveTab, label: "Preferences", icon: Settings },
    { id: "security" as ActiveTab, label: "Security", icon: Shield },
  ];

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      {/* Toast Notification */}
      <div 
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
          showSuccessToast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <div className="neu-raised bg-surface-raised flex items-center gap-3 px-5 py-4 rounded-neu-sm border-l-4 border-success text-ink max-w-sm">
          <div className="bg-success/20 p-2 rounded-full text-success">
            <Check className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Settings saved!</h4>
            <p className="text-xs text-ink-secondary mt-0.5">Your preferences have been updated successfully.</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-ink">Settings</h1>
        <p className="mt-2 text-ink-secondary">
          Personalize your learning space, goals, and account options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Navigation Tabs */}
        <div className="md:col-span-1 flex flex-row md:flex-col gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "focus-ring flex items-center gap-3 rounded-neu-sm px-4 py-3 text-sm font-medium transition-all whitespace-nowrap min-h-[44px]",
                  active
                    ? "neu-pressed text-accent"
                    : "neu-raised-sm neu-interactive text-ink-secondary hover:text-ink"
                )}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="md:col-span-3">
          <form onSubmit={handleSave}>
            {activeTab === "profile" && (
              <div className="space-y-6">
                <NeuCard className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6 pb-2 border-b border-border">
                    {/* Avatar Container */}
                    <div className="relative group">
                      <div className="skeu-metal-gold w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-[#3a2a0f] border-2 border-border shadow-inner">
                        {initials}
                      </div>
                      <div className="absolute inset-0 bg-black/45 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg font-semibold text-ink">Your Profile Photo</h3>
                      <p className="text-xs text-ink-secondary mt-1">
                        Initials will be auto-generated from your name.
                      </p>
                      <div className="mt-2 flex justify-center sm:justify-start gap-2">
                        <input
                          type="text"
                          maxLength={3}
                          value={initials}
                          onChange={(e) => setInitials(e.target.value.toUpperCase())}
                          className="w-14 text-center neu-pressed rounded-neu-sm py-1 px-2 text-xs font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
                          placeholder="Initials"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-ink-muted" />
                        <input
                          type="text"
                          id="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full neu-pressed rounded-neu-sm pl-10 pr-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-ink-muted" />
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full neu-pressed rounded-neu-sm pl-10 pr-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="bio" className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full neu-pressed rounded-neu-sm p-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent resize-none"
                    />
                  </div>
                </NeuCard>
              </div>
            )}

            {activeTab === "goals" && (
              <div className="space-y-6">
                <NeuCard className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ink flex items-center gap-2">
                      <Flame className="w-5 h-5 text-gold-dark" /> Set Weekly Targets
                    </h3>
                    <p className="text-sm text-ink-muted mt-1">
                      Choose how much time you commit to learning on MindGrid every week.
                    </p>
                  </div>

                  {/* Slider or Select Box */}
                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm font-medium text-ink-secondary">Weekly Target</span>
                      <span className="text-2xl font-display font-bold text-accent tabular-nums">
                        {goalMinutes} <span className="text-xs text-ink-secondary">mins</span>
                      </span>
                    </div>

                    <input
                      type="range"
                      min={60}
                      max={600}
                      step={30}
                      value={goalMinutes}
                      onChange={(e) => setGoalMinutes(Number(e.target.value))}
                      className="w-full accent-accent h-2 rounded-lg cursor-pointer bg-surface-raised"
                    />

                    {/* Presets */}
                    <div className="grid grid-cols-3 gap-2">
                      {[120, 300, 480].map((mins) => (
                        <button
                          key={mins}
                          type="button"
                          onClick={() => setGoalMinutes(mins)}
                          className={cn(
                            "py-2 rounded-neu-sm text-xs font-semibold focus-ring transition-all",
                            goalMinutes === mins 
                              ? "neu-pressed text-accent" 
                              : "neu-raised-sm neu-interactive text-ink-secondary hover:text-ink"
                          )}
                        >
                          {mins / 60} hrs/week
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 bg-accent-soft rounded-neu-sm p-4 text-xs text-accent-strong flex items-start gap-2.5">
                    <div className="bg-accent/20 p-1.5 rounded-full shrink-0">
                      <Flame className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-semibold block">Commitment Bonus</span>
                      Setting realistic targets and maintaining your {learner.streakDays}-day streak unlocks community bonus points toward new course requests.
                    </div>
                  </div>
                </NeuCard>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-6">
                <NeuCard className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">Notifications & Visibility</h3>
                    <p className="text-sm text-ink-muted mt-1">
                      Choose what updates you want to receive and how you show up on the platform.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-ink">Email Progress Reports</h4>
                        <p className="text-xs text-ink-muted mt-0.5">Receive weekly summaries of your study habits.</p>
                      </div>
                      <ToggleSwitch
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                        label="Toggle Email Notifications"
                      />
                    </div>

                    <hr className="border-border" />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-ink">Leaderboard Visibility</h4>
                        <p className="text-xs text-ink-muted mt-0.5">Show your name and points public to other students.</p>
                      </div>
                      <ToggleSwitch
                        checked={leaderboardVisible}
                        onChange={() => setLeaderboardVisible(!leaderboardVisible)}
                        label="Toggle Leaderboard Visibility"
                      />
                    </div>

                    <hr className="border-border" />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-ink">Study Reminders</h4>
                        <p className="text-xs text-ink-muted mt-0.5">Receive alerts when you are at risk of losing your streak.</p>
                      </div>
                      <ToggleSwitch
                        checked={studyReminders}
                        onChange={() => setStudyReminders(!studyReminders)}
                        label="Toggle Study Reminders"
                      />
                    </div>
                  </div>
                </NeuCard>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <NeuCard className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">Security Settings</h3>
                    <p className="text-sm text-ink-muted mt-1">
                      Update your password to keep your learning account secure.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="currPass" className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                        Current Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-ink-muted" />
                        <input
                          type="password"
                          id="currPass"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full neu-pressed rounded-neu-sm pl-10 pr-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="newPass" className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                        New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-ink-muted" />
                        <input
                          type="password"
                          id="newPass"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full neu-pressed rounded-neu-sm pl-10 pr-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="confPass" className="block text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-ink-muted" />
                        <input
                          type="password"
                          id="confPass"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full neu-pressed rounded-neu-sm pl-10 pr-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                </NeuCard>

                <NeuCard className="border-l-4 border-danger/80 bg-red-950/10 p-5 rounded-neu-sm">
                  <h4 className="text-sm font-semibold text-danger">Danger Zone</h4>
                  <p className="text-xs text-ink-secondary mt-1">
                    Once you delete your progress, it cannot be undone. All streak counts and certifications will be wiped.
                  </p>
                  <button 
                    type="button" 
                    className="mt-3 text-xs font-semibold text-danger border border-danger/30 hover:border-danger/60 px-3.5 py-1.5 rounded-neu-sm transition-all focus:outline-none"
                  >
                    Delete Account & Progress
                  </button>
                </NeuCard>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex justify-end gap-3">
              <NeuButton type="button" variant="ghost" className="px-6">
                Cancel
              </NeuButton>
              <NeuButton type="submit" variant="primary" className="px-8">
                Save Changes
              </NeuButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
