import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

type OnboardingCompleteProps = {
  name: string;
  avatarUrl: string | null;
  title: string;
  role: string;
  onBackToSetup: () => void;
};

export default function OnboardingComplete({
  name,
  avatarUrl,
  title,
  role,
  onBackToSetup,
}: OnboardingCompleteProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <span className="mb-7 grid size-14 place-items-center rounded-2xl bg-onboarding-success text-onboarding-copy-success">
        <CheckCircle2 size={28} />
      </span>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-onboarding-accent">
        You&apos;re all set
      </p>
      <h2 className="text-[34px] font-medium leading-tight tracking-[-0.03em] sm:text-[40px]">
        Welcome to FlowDesk{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}
        .
      </h2>
      <p className="mt-4 max-w-97.5 text-[15px] leading-6 text-onboarding-copy">
        Your workspace is ready for the good work ahead. You can always update
        your profile and invite more people later.
      </p>
      <div className="mt-9 flex items-center gap-3 rounded-xl border border-onboarding-rule/8 bg-onboarding-surface p-4">
        <span
          className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-onboarding-photo bg-cover bg-center text-sm font-semibold text-onboarding-accent-foreground"
          style={
            avatarUrl ? { backgroundImage: `url("${avatarUrl}")` } : undefined
          }
        >
          {avatarUrl ? null : name.trim().charAt(0).toUpperCase() || "Y"}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            {name || "Your profile"}
          </p>
          <p className="mt-0.5 truncate text-xs text-onboarding-copy-muted">
            {title || role || "Ready to get started"}
          </p>
        </div>
        <Check size={16} className="ml-auto text-onboarding-accent" />
      </div>
      <Button
        type="button"
        size="lg"
        onClick={onBackToSetup}
        className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-onboarding-accent-strong px-5 text-sm font-semibold text-onboarding-accent-foreground transition-colors hover:bg-onboarding-accent-hover"
      >
        Back to setup <ArrowRight size={16} />
      </Button>
    </div>
  );
}
