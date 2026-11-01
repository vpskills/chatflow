import Link from "next/link";
import { Sparkles } from "lucide-react";
import { onboardingSteps } from "./onboarding.types";

type OnboardingHeaderProps = {
  step: number;
  finished: boolean;
};

export default function OnboardingHeader({
  step,
  finished,
}: OnboardingHeaderProps) {
  return (
    <header className="flex h-17.5 shrink-0 items-center justify-between border-b border-onboarding-rule/7 px-5 sm:px-9 md:border-0 md:px-12">
      <Link
        href="/"
        className="flex items-center gap-2.5 md:hidden"
        aria-label="FlowDesk home"
      >
        <span className="grid size-8 place-items-center rounded-[10px] bg-onboarding-accent text-onboarding-accent-foreground">
          <Sparkles size={16} />
        </span>
        <span className="text-sm font-semibold">flowdesk</span>
      </Link>
      <span className="hidden text-xs text-onboarding-copy-subtle md:block">
        WORKSPACE SETUP
      </span>
      <div className="flex items-center gap-3">
        <span className="text-xs text-onboarding-copy-subtle">
          Step {finished ? 4 : step + 1} of 4
        </span>
        <div
          className="flex gap-1 md:hidden"
          aria-label={`Step ${step + 1} of 4`}
        >
          {onboardingSteps.map((label, index) => (
            <span
              key={label}
              className={`h-1 w-5 rounded-full ${index <= step ? "bg-onboarding-accent" : "bg-onboarding-rule/15"}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
