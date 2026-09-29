"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AuthType {
  name?: string;
  email: string;
  password: string;
}

const Authform = ({ initialMode = "signin" }: { initialMode?: "signin" | "signup" }) => {
  const isSignup = initialMode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>();

  const onSubmit: SubmitHandler<AuthType> = () => {};

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase text-brand-muted">
          {isSignup ? "START BUILDING TOGETHER" : "YOUR WORKSPACE IS READY"}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-strong">
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>

        <p className="mt-2 text-sm leading-6 text-copy">
          {isSignup
            ? "Set up your workspace and bring your team into the flow."
            : "Sign in to pick up where your team left off."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {isSignup && (
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[13px] font-semibold text-copy-strong">Full name</Label>
            <div className="relative">
              <UserRound aria-hidden="true" size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-icon-muted" />
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                className="h-12 rounded-lg border-field-border bg-field pl-10 pr-3.5 text-sm text-ink placeholder:text-field-placeholder focus-visible:border-brand-focus focus-visible:ring-brand-focus/20"
                {...register("name", { required: "Your name is required" })}
              />
            </div>
            {errors.name && <p className="text-xs font-medium text-destructive">{errors.name.message}</p>}
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[13px] font-semibold text-copy-strong">Work email</Label>
          <div className="relative">
            <Mail aria-hidden="true" size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-icon-muted" />
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              className="h-12 rounded-lg border-field-border bg-field pl-10 pr-3.5 text-sm text-ink placeholder:text-field-placeholder focus-visible:border-brand-focus focus-visible:ring-brand-focus/20"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
          </div>
          {errors?.email && (
            <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-[13px] font-semibold text-copy-strong">Password</Label>
          <div className="relative">
            <LockKeyhole aria-hidden="true" size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-icon-muted" />
            <Input
              id="password"
              placeholder={isSignup ? "Create a password" : "Enter your password"}
              type={showPassword ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              aria-invalid={Boolean(errors.password)}
              className="h-12 rounded-lg border-field-border bg-field pl-10 pr-11 text-sm text-ink placeholder:text-field-placeholder focus-visible:border-brand-focus focus-visible:ring-brand-focus/20"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-icon-hover transition-colors hover:text-brand"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs font-medium text-destructive">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="group mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-on transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
        >
          {isSignup ? "Create your account" : "Sign in to FlowDesk"}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>

      <div className="mt-7 border-t border-line-soft pt-5 text-center text-sm text-copy">
        {isSignup ? "Already have an account?" : "New to FlowDesk?"}{" "}
        <Link
          href={isSignup ? "/login" : "/signup"}
          className="font-semibold text-brand-link underline-offset-4 hover:underline"
        >
          {isSignup ? "Sign in" : "Create an account"}
        </Link>
      </div>
    </div>
  );
};

export default Authform;
