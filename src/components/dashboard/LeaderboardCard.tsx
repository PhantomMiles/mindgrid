import { Trophy } from "lucide-react";
import { NeuCard } from "@/components/ui/NeuCard";
import { Avatar } from "@/components/ui/Avatar";
import { LeaderboardEntry } from "@/types";
import { cn, formatNumber } from "@/lib/utils";

interface LeaderboardCardProps {
  entries: LeaderboardEntry[];
}

export function LeaderboardCard({ entries }: LeaderboardCardProps) {
  return (
    <NeuCard className="h-full">
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
        <h2 className="font-display text-lg font-semibold text-ink">
          Weekly leaderboard
        </h2>
      </div>
      <ol className="flex flex-col gap-2">
        {entries.map((entry) => (
          <li key={entry.id}>
            <div
              className={cn(
                "flex items-center gap-3 rounded-neu-sm px-2 py-2",
                entry.isCurrentUser && "neu-inset"
              )}
            >
              <span className="w-4 text-center text-xs font-semibold text-ink-muted">
                {entry.rank}
              </span>
              <Avatar initials={entry.initials} size="sm" highlight={entry.isCurrentUser} />
              <span
                className={cn(
                  "flex-1 truncate text-sm",
                  entry.isCurrentUser ? "font-semibold text-ink" : "text-ink-secondary"
                )}
              >
                {entry.name}
                {entry.isCurrentUser ? " (You)" : ""}
              </span>
              <span className="text-xs font-medium tabular-nums text-ink-muted">
                {formatNumber(entry.points)} pts
              </span>
            </div>
          </li>
        ))}
      </ol>
    </NeuCard>
  );
}
