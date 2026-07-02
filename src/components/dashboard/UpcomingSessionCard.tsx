import { Calendar, Clock } from "lucide-react";
import { NeuCard } from "@/components/ui/NeuCard";
import { NeuButton } from "@/components/ui/NeuButton";
import { MentorSession } from "@/types";

interface UpcomingSessionCardProps {
  session: MentorSession;
}

export function UpcomingSessionCard({ session }: UpcomingSessionCardProps) {
  return (
    <NeuCard className="flex h-full flex-col justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Upcoming live session
        </p>
        <h2 className="mt-1.5 font-display text-base font-semibold leading-snug text-ink">
          {session.title}
        </h2>
        <p className="mt-1 text-xs text-ink-secondary">with {session.mentor}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {session.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {session.time}
          </span>
        </div>
      </div>

      <NeuButton variant="secondary" className="mt-4 w-full">
        Add to calendar
      </NeuButton>
    </NeuCard>
  );
}
