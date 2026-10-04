import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { onboardingSteps } from "./onboarding.types";

type OnboardingSidebarProps = {
  step: number;
  finished: boolean;
};

export default function OnboardingSidebar({
  step,
  finished,
}: OnboardingSidebarProps) {
  return (
    <aside className="relative hidden w-71.5 shrink-0 flex-col border-r border-onboarding-rule/7 bg-onboarding-sidebar px-8 py-9 md:flex">
      <Link
        href="/"
        className="mb-20 flex items-center gap-3"
        aria-label="FlowDesk home"
      >
        <span className="grid size-9 place-items-center rounded-[11px] bg-onboarding-accent text-onboarding-accent-foreground">
          <Sparkles size={18} strokeWidth={2.2} />
        </span>
        <span className="text-[15px] font-semibold tracking-[0.01em]">
          flowdesk
        </span>
      </Link>
      <div className="mb-8">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-onboarding-copy-subtle">
          A good place to start
        </p>
        <h1 className="text-[25px] font-medium leading-[1.2] tracking-[-0.02em]">
          Make this
          <br />
          space yours.
        </h1>
      </div>
      <nav aria-label="Setup progress" className="relative">
        <span
          className="absolute left-3.75 top-4 h-[calc(100%-32px)] w-px bg-onboarding-rule/10"
          aria-hidden="true"
        />
        <ol className="space-y-6">
          {onboardingSteps.map((label, index) => {
            const isComplete = index < step || finished;
            const isCurrent = index === step && !finished;
            return (
              <li key={label} className="relative flex items-center gap-3">
                <span
                  className={`relative z-10 grid size-7.75 shrink-0 place-items-center rounded-full border text-xs ${isComplete ? "border-onboarding-accent bg-onboarding-accent text-onboarding-accent-foreground" : isCurrent ? "border-onboarding-accent bg-onboarding-selected-panel text-onboarding-copy-current" : "border-onboarding-rule/10 bg-onboarding-sidebar text-onboarding-copy-step-idle"}`}
                >
                  {isComplete ? (
                    <Check size={14} strokeWidth={2.5} />
                  ) : (
                    `0${index + 1}`
                  )}
                </span>
                <span
                  className={`text-[13px] ${isCurrent || isComplete ? "text-onboarding-foreground-strong" : "text-onboarding-copy-step-idle"}`}
                >
                  {label}
                </span>
                {isCurrent && (
                  <span className="ml-auto size-1.5 rounded-full bg-onboarding-accent" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <div className="mt-auto border-t border-onboarding-rule/7 pt-5">
        <p className="text-xs leading-5 text-onboarding-copy-sidebar">
          A few quick details now make your workspace feel like home.
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.08em] text-onboarding-copy-sidebar-faint">
          SETUP ·{" "}
          {String(Math.min(step + 1, onboardingSteps.length)).padStart(2, "0")}{" "}
          / 04
        </p>
      </div>
    </aside>
  );
}
