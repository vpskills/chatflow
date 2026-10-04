import { useState } from "react";
import { Link2, Sparkles } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import type { OnboardingValues } from "./onboarding.types";

export default function InviteStep() {
  const { register } = useFormContext<OnboardingValues>();
  const [copied, setCopied] = useState(false);

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/invite`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-onboarding-accent">
        03 / Invite your team
      </p>
      <h2 className="text-[32px] font-medium leading-tight tracking-[-0.03em] sm:text-[38px]">
        Better work, together.
      </h2>
      <p className="mt-3 text-[15px] leading-6 text-onboarding-copy">
        Bring your people into the loop. You can invite others any time.
      </p>
      <div className="mt-9">
        <div className="mb-2.5 flex items-center justify-between gap-3">
          <Label
            htmlFor="invite-emails"
            className="text-[13px] font-medium text-onboarding-copy-label"
          >
            Email addresses
          </Label>
          <Button
            type="button"
            variant="link"
            size="sm"
            onClick={copyInviteLink}
            className="h-auto shrink-0 px-0 text-xs font-medium text-onboarding-copy-accent no-underline transition-colors hover:text-onboarding-foreground hover:no-underline"
          >
            <Link2 size={13} />
            {copied ? "Copied" : "Copy invite link"}
          </Button>
        </div>
        <Textarea
          id="invite-emails"
          rows={4}
          placeholder="alex@company.com, sam@company.com"
          className="min-h-32 rounded-lg border-onboarding-rule/11 bg-onboarding-field px-4 py-3.5 text-sm leading-6 text-onboarding-foreground placeholder:text-onboarding-copy-faint focus-visible:border-onboarding-accent focus-visible:ring-onboarding-accent/15"
          {...register("emails")}
        />
        <p className="mt-2 text-xs text-onboarding-copy-supporting">
          Separate multiple addresses with commas or new lines.
        </p>
      </div>
      <div className="mt-6 flex items-start gap-3 rounded-lg border border-onboarding-rule/7 bg-onboarding-surface p-3.5">
        <Sparkles
          size={16}
          className="mt-0.5 shrink-0 text-onboarding-accent"
        />
        <p className="text-xs leading-5 text-onboarding-copy-link">
          Invites are just a starting point. Your team can join whenever
          they&apos;re ready.
        </p>
      </div>
    </>
  );
}
