"use client";

import { useState } from "react";
import { NeuCard } from "@/components/ui/NeuCard";
import { NeuButton } from "@/components/ui/NeuButton";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";
import { useAuth } from "@/lib/auth-provider";
import { currentLearner as fallbackLearner } from "@/lib/mock-data";

export default function SettingsPage() {
  const { user } = useAuth();
  const learner = user || fallbackLearner;

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-display font-semibold text-ink">Settings</h1>
        <p className="mt-2 text-ink-secondary">
          Manage your account settings and preferences here.
        </p>
      </div>

      <div className="space-y-6">
        <NeuCard className="p-6">
          <h2 className="text-xl font-display font-semibold text-ink mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink-secondary mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={learner.name}
                className="w-full neu-pressed rounded-neu-sm px-4 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink-secondary mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                defaultValue={`${learner.name.toLowerCase().replace(" ", ".")}@example.com`}
                className="w-full neu-pressed rounded-neu-sm px-4 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
              />
            </div>
          </div>
        </NeuCard>

        <NeuCard className="p-6">
          <h2 className="text-xl font-display font-semibold text-ink mb-4">Preferences</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-ink font-medium">Email Notifications</h3>
                <p className="text-sm text-ink-muted">Receive weekly progress reports and updates.</p>
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
                <h3 className="text-ink font-medium">Public Profile</h3>
                <p className="text-sm text-ink-muted">Allow others to see your achievements on the leaderboard.</p>
              </div>
              <ToggleSwitch
                checked={publicProfile}
                onChange={() => setPublicProfile(!publicProfile)}
                label="Toggle Public Profile"
              />
            </div>
          </div>
        </NeuCard>

        <div className="flex justify-end">
          <NeuButton variant="primary">
            Save Changes
          </NeuButton>
        </div>
      </div>
    </div>
  );
}
