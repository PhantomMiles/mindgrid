"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Is MindGrid really free?",
    answer:
      "Yes — every course, mentor session, and certificate is free to learners, permanently. MindGrid is funded by donors, not by charging learners.",
  },
  {
    question: "How are instructors vetted?",
    answer:
      "Instructors are working professionals in their field who volunteer their time. Each mentor is reviewed before joining and teaches based on real, current experience.",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Yes, completing a course earns you a certificate you can add to your profile or share with employers.",
  },
  {
    question: "How is MindGrid funded?",
    answer:
      "Through donations from individuals, foundations, and partner organizations who believe access to education shouldn't depend on ability to pay.",
  },
  {
    question: "Can I volunteer as a mentor?",
    answer:
      "Yes — if you have professional experience you'd like to teach, reach out through the Instructors page and we'll follow up.",
  },
  {
    question: "What happens if I can't afford to continue a course?",
    answer:
      "Every course on MindGrid is free to learners, permanently. No hidden fees, no locked content — you can finish at your own pace without ever paying.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-accent-strong mb-2.5">
          COMMON QUESTIONS
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 max-w-5xl mx-auto">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="neu-raised-sm overflow-hidden p-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="focus-ring w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[44px]"
              >
                <span className="text-sm font-semibold text-ink">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {isOpen ? (
                <div className="px-5 pb-4 text-sm text-ink-secondary leading-relaxed">
                  {faq.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
