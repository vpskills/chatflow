import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import type { OnboardingValues } from "./onboarding.types";

type ProfileStepProps = {
  avatarUrl: string | null;
  onEditAvatar: () => void;
};

export default function ProfileStep({
  avatarUrl,
  onEditAvatar,
}: ProfileStepProps) {
  const {
    register,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<OnboardingValues>();
  const name = watch("name");

  return (
    <>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-onboarding-accent">
        01 / Your profile
      </p>
      <h2 className="text-[32px] font-medium leading-tight tracking-[-0.03em] sm:text-[38px]">
        How should we know you?
      </h2>
      <p className="mt-3 text-[15px] leading-6 text-onboarding-copy">
        This is how you&apos;ll appear to your teammates.
      </p>
      <div className="mt-9 space-y-6">
        <div>
          <Label
            className="mb-2.5 block text-[13px] font-medium text-onboarding-copy-label"
            htmlFor="profile-name"
          >
            Name
          </Label>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              onClick={onEditAvatar}
              aria-label="Choose profile photo"
              className="relative size-12 shrink-0 overflow-hidden rounded-full bg-onboarding-photo bg-cover bg-center p-0 text-base font-semibold text-onboarding-accent-foreground transition-transform hover:scale-105 hover:bg-onboarding-photo"
              style={
                avatarUrl
                  ? { backgroundImage: `url("${avatarUrl}")` }
                  : undefined
              }
            >
              {avatarUrl ? null : name?.trim().charAt(0).toUpperCase() || "?"}
            </Button>
            <Input
              id="profile-name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "profile-name-error" : undefined}
              placeholder="Your name"
              className="h-12 rounded-lg border-onboarding-rule/11 bg-onboarding-field px-4 text-sm text-onboarding-foreground placeholder:text-onboarding-copy-faint focus-visible:border-onboarding-accent focus-visible:ring-onboarding-accent/20"
              {...register("name", {
                required: "Add your name to continue.",
                onChange: (event) => {
                  if (event.target.value.trim()) clearErrors("name");
                },
              })}
            />
          </div>
          {errors.name?.message && (
            <p
              id="profile-name-error"
              className="ml-[60px] mt-2 text-xs text-onboarding-error"
            >
              {errors.name.message}
            </p>
          )}
          <Button
            type="button"
            variant="link"
            size="sm"
            onClick={onEditAvatar}
            className="ml-15 mt-2 h-auto px-0 text-xs font-normal text-onboarding-copy-link underline decoration-onboarding-rule/20 underline-offset-4 transition-colors hover:text-onboarding-copy-link-hover"
          >
            Edit avatar
          </Button>
        </div>
        <div>
          <Label
            className="mb-2.5 block text-[13px] font-medium text-onboarding-copy-label"
            htmlFor="profile-title"
          >
            What do you do?{" "}
            <span className="font-normal text-onboarding-copy-hint">
              · optional
            </span>
          </Label>
          <Input
            id="profile-title"
            placeholder="e.g. Product designer"
            className="h-12 rounded-lg border-onboarding-rule/11 bg-onboarding-field px-4 text-sm text-onboarding-foreground placeholder:text-onboarding-copy-faint focus-visible:border-onboarding-accent focus-visible:ring-onboarding-accent/20"
            {...register("title")}
          />
        </div>
      </div>
    </>
  );
}
