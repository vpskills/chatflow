"use client";

import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";
import AvatarPicker from "./AvatarPicker";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { onboardingSteps, type OnboardingValues } from "./onboarding.types";
import OnboardingSidebar from "./OnboardingSidebar";
import OnboardingHeader from "./OnboardingHeader";
import OnboardingComplete from "./OnboardingComplete";

export default function OnboardingForm() {
  const form = useForm<OnboardingValues>({
    defaultValues: { name: "", title: "", role: "", teamSize: "", emails: "" },
    shouldUnregister: false,
  });
  const [step, setStep] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const avatarUrlRef = useRef<string | null>(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const name = useWatch({ control: form.control, name: "name" }) ?? "";

  useEffect(() => {
    return () => {
      if (avatarUrlRef.current) URL.revokeObjectURL(avatarUrlRef.current);
    };
  }, []);

  const selectAvatar = (file: File) => {
    const nextAvatarUrl = URL.createObjectURL(file);
    if (avatarUrlRef.current) URL.revokeObjectURL(avatarUrlRef.current);
    avatarUrlRef.current = nextAvatarUrl;
    setAvatarUrl(nextAvatarUrl);
  };

  const removeAvatar = () => {
    if (avatarUrlRef.current) URL.revokeObjectURL(avatarUrlRef.current);
    avatarUrlRef.current = null;
    setAvatarUrl(null);
  };

  //set error, or move forwards if no error.
  const checkAndGoNext = async () => {
    if (step === 0 && !(await form.trigger("name"))) return;
    form.clearErrors("name");
    setStep((current) => Math.min(current + 1, onboardingSteps.length - 1));
  };

  const saveOnboarding = async (values: OnboardingValues) => {
    form.clearErrors("root.server");

    try {
      const response = await fetch("/api/workspace/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        form.setError("root.server", {
          type: "server",
          message: result.error ?? "Failed to save onboarding details.",
        });
        return;
      }

      setFinished(true);
    } catch {
      form.setError("root.server", {
        type: "server",
        message: "Could not reach the server. Try again.",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(saveOnboarding, (errors) => {
          if (errors.name) setStep(0);
        })}
      >
        <main className="relative flex min-h-screen overflow-hidden bg-onboarding-background text-onboarding-foreground">
          <OnboardingSidebar step={step} finished={finished} />

          <section className="flex min-h-screen min-w-0 flex-1 flex-col">
            <OnboardingHeader step={step} finished={finished} />

            <div className="flex flex-1 items-center justify-center px-5 pb-10 pt-6 sm:px-10 md:px-12 md:pb-14 md:pt-0">
              <div className="w-full max-w-127.5">
                {finished ? (
                  <OnboardingComplete
                    name={name}
                    avatarUrl={avatarUrl}
                    title={form.getValues("title")}
                    role={form.getValues("role")}
                    onBackToSetup={() => setFinished(false)}
                  />
                ) : (
                  <>
                    <div
                      key={step}
                      className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                    >
                      {step === 0 && (
                        <Step1
                          avatarUrl={avatarUrl}
                          onEditAvatar={() => setAvatarOpen(true)}
                        />
                      )}
                      {step === 1 && <Step2 />}
                      {step === 2 && <Step3 />}
                      {step === 3 && (
                        <Step4 avatarUrl={avatarUrl} onEditStep={setStep} />
                      )}
                    </div>
                    {form.formState.errors.root?.server?.message && (
                      <p
                        role="alert"
                        className="mt-4 text-sm text-onboarding-error"
                      >
                        {form.formState.errors.root.server.message}
                      </p>
                    )}
                    <footer className="mt-10 flex items-center justify-between border-t border-onboarding-rule/8 pt-5">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() =>
                          setStep((current) => Math.max(current - 1, 0))
                        }
                        disabled={step === 0}
                        className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm text-onboarding-copy transition-colors hover:bg-onboarding-rule/5 hover:text-onboarding-foreground disabled:invisible"
                      >
                        <ArrowLeft size={15} />
                        Back
                      </Button>
                      <div className="flex items-center gap-4">
                        {step > 0 && step < 3 && (
                          <Button
                            type="button"
                            variant="link"
                            size="sm"
                            onClick={() =>
                              setStep((current) =>
                                Math.min(
                                  current + 1,
                                  onboardingSteps.length - 1,
                                ),
                              )
                            }
                            className="h-auto px-0 text-sm text-onboarding-copy-link no-underline transition-colors hover:text-onboarding-foreground hover:no-underline"
                          >
                            Skip
                          </Button>
                        )}
                        {step < 3 ? (
                          <Button
                            type="button"
                            size="lg"
                            onClick={checkAndGoNext}
                            className="inline-flex h-11 items-center gap-2 rounded-lg bg-onboarding-accent-strong px-5 text-sm font-semibold text-onboarding-accent-foreground transition-colors hover:bg-onboarding-accent-hover"
                          >
                            Continue <ArrowRight size={16} />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            size="lg"
                            disabled={form.formState.isSubmitting}
                            className="inline-flex h-11 items-center gap-2 rounded-lg bg-onboarding-accent-strong px-5 text-sm font-semibold text-onboarding-accent-foreground transition-colors hover:bg-onboarding-accent-hover"
                          >
                            {form.formState.isSubmitting
                              ? "Saving..."
                              : "Finish setup"}{" "}
                            {!form.formState.isSubmitting && (
                              <Check size={16} />
                            )}
                          </Button>
                        )}
                      </div>
                    </footer>
                  </>
                )}
              </div>
            </div>
          </section>

          {avatarOpen && (
            <AvatarPicker
              name={name}
              avatarUrl={avatarUrl}
              onSelectImage={selectAvatar}
              onRemoveImage={removeAvatar}
              onClose={() => setAvatarOpen(false)}
            />
          )}
        </main>
      </form>
    </FormProvider>
  );
}
