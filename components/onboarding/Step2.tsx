import { Controller, useFormContext } from "react-hook-form";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import type { OnboardingValues } from "./onboarding.types";

const roles = [
  "Design",
  "Engineering",
  "Product",
  "Operations",
  "Something else",
];
const teamSizes = ["Just me", "2-5", "6-20", "21-50", "50+"];

export default function PreferencesStep() {
  const { control } = useFormContext<OnboardingValues>();

  return (
    <>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-onboarding-accent">
        02 / A little context
      </p>
      <h2 className="text-[32px] font-medium leading-tight tracking-[-0.03em] sm:text-[38px]">
        Let&apos;s make it yours.
      </h2>
      <p className="mt-3 text-[15px] leading-6 text-onboarding-copy">
        A little context helps us set up a better starting point.
      </p>
      <Controller
        control={control}
        name="role"
        render={({ field }) => (
          <fieldset className="mt-9">
            <legend className="mb-3 text-[13px] font-medium text-onboarding-copy-label">
              What best describes your work?
            </legend>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {roles.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant="ghost"
                  onClick={() => field.onChange(option)}
                  aria-pressed={field.value === option}
                  className={`h-12 w-full justify-between rounded-lg border px-3.5 text-left text-sm transition-colors ${field.value === option ? "border-onboarding-accent/70 bg-onboarding-accent/10 text-onboarding-copy-selected hover:bg-onboarding-accent/10" : "border-onboarding-rule/10 bg-onboarding-surface text-onboarding-copy-option hover:border-onboarding-rule/20 hover:bg-onboarding-rule/5"}`}
                >
                  {option}
                  {field.value === option && (
                    <Check
                      size={15}
                      className="text-onboarding-accent-strong"
                    />
                  )}
                </Button>
              ))}
            </div>
          </fieldset>
        )}
      />
      <Controller
        control={control}
        name="teamSize"
        render={({ field }) => (
          <fieldset className="mt-7">
            <legend className="mb-3 text-[13px] font-medium text-onboarding-copy-label">
              How many people are on your team?
            </legend>
            <div className="flex flex-wrap gap-2">
              {teamSizes.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant="ghost"
                  onClick={() => field.onChange(option)}
                  aria-pressed={field.value === option}
                  className={`h-10 min-w-[69px] rounded-lg border px-3 text-sm transition-colors ${field.value === option ? "border-onboarding-accent/70 bg-onboarding-accent/10 text-onboarding-copy-selected hover:bg-onboarding-accent/10" : "border-onboarding-rule/10 bg-onboarding-surface text-onboarding-copy-option hover:border-onboarding-rule/20 hover:bg-onboarding-rule/5"}`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </fieldset>
        )}
      />
    </>
  );
}
