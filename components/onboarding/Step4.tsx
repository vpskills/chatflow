import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import type { OnboardingValues } from "./onboarding.types";

type ReviewStepProps = {
  avatarUrl: string | null;
  onEditStep: (step: number) => void;
};

export default function ReviewStep({ avatarUrl, onEditStep }: ReviewStepProps) {
  const { watch } = useFormContext<OnboardingValues>();
  const values = watch();
  const inviteCount = values.emails
    .split(/[\n,;]+/)
    .filter((email) => email.trim()).length;
  const teamDetails = [
    values.role,
    values.teamSize && `${values.teamSize} people`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-onboarding-accent">
        04 / Ready
      </p>
      <h2 className="text-[32px] font-medium leading-tight tracking-[-0.03em] sm:text-[38px]">
        Everything in place.
      </h2>
      <p className="mt-3 text-[15px] leading-6 text-onboarding-copy">
        Take a quick look before you head into your workspace.
      </p>
      <div className="mt-9 divide-y divide-onboarding-rule/8 rounded-xl border border-onboarding-rule/9 bg-onboarding-surface px-4 sm:px-5">
        <div className="flex items-center gap-3 py-4">
          <span
            className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-onboarding-photo bg-cover bg-center text-sm font-semibold text-onboarding-accent-foreground"
            style={
              avatarUrl ? { backgroundImage: `url("${avatarUrl}")` } : undefined
            }
          >
            {avatarUrl
              ? null
              : values.name.trim().charAt(0).toUpperCase() || "Y"}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-medium">
              {values.name || "Your profile"}
            </p>
            <p className="mt-0.5 truncate text-xs text-onboarding-copy-muted">
              {values.title || "Add a title any time"}
            </p>
          </div>
          <Button
            type="button"
            variant="link"
            size="xs"
            onClick={() => onEditStep(0)}
            className="ml-auto h-auto px-0 text-xs font-normal text-onboarding-accent no-underline hover:text-onboarding-accent-hover hover:no-underline"
          >
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div>
            <p className="text-sm font-medium">Your starting point</p>
            <p className="mt-1 text-xs text-onboarding-copy-muted">
              {teamDetails || "You can personalize this later"}
            </p>
          </div>
          <Button
            type="button"
            variant="link"
            size="xs"
            onClick={() => onEditStep(1)}
            className="h-auto px-0 text-xs font-normal text-onboarding-accent no-underline hover:text-onboarding-accent-hover hover:no-underline"
          >
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div>
            <p className="text-sm font-medium">Teammate invites</p>
            <p className="mt-1 text-xs text-onboarding-copy-muted">
              {inviteCount
                ? `${inviteCount} email address${inviteCount === 1 ? "" : "es"} added`
                : "Invite your team whenever you like"}
            </p>
          </div>
          <Button
            type="button"
            variant="link"
            size="xs"
            onClick={() => onEditStep(2)}
            className="h-auto px-0 text-xs font-normal text-onboarding-accent no-underline hover:text-onboarding-accent-hover hover:no-underline"
          >
            Edit
          </Button>
        </div>
      </div>
    </>
  );
}
