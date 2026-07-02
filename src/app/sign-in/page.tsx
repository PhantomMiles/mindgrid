"use client";

import Link from "next/link";
import { Grid3x3 } from "lucide-react";
import { NeuCard } from "@/components/ui/NeuCard";
import { NeuButton } from "@/components/ui/NeuButton";
import { useAuth } from "@/lib/auth-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const { login } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-dvh flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2.5 mb-6">
            <div className="skeu-metal-gold flex h-10 w-10 items-center justify-center rounded-neu-sm">
              <Grid3x3 className="h-5 w-5 text-[#3a2a0f]" />
            </div>
            <span className="font-display text-xl font-bold text-ink">
              MindGrid
            </span>
          </Link>
          <h1 className="text-3xl font-display font-bold text-ink">Welcome back</h1>
          <p className="text-ink-secondary mt-2 text-center">
            Enter your details to access your dashboard.
          </p>
        </div>

        <NeuCard className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink-secondary mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full neu-pressed rounded-neu-sm px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-ink-secondary">
                  Password
                </label>
                <a href="#" className="text-xs text-accent-strong hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                required
                placeholder="••••••••"
                className="w-full neu-pressed rounded-neu-sm px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft bg-transparent"
              />
            </div>

            <div className="pt-2">
              <NeuButton variant="primary" className="w-full flex justify-center py-3" type="submit">
                Sign In
              </NeuButton>
            </div>
          </form>
        </NeuCard>

        <p className="text-center mt-8 text-sm text-ink-secondary">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-accent-strong font-medium hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}
