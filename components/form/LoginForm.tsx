"use client";

import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (formData: LoginFormValues) => {
    const { error } = await authClient.signIn.email(
      {
        email: formData.email,
        password: formData.password,
      },
      {
        onError: (ctx) => {
          console.error(ctx.error.message);
        },
      }
    );

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase text-brand-muted">YOUR WORKSPACE IS READY</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-strong">Welcome back</h2>

        <p className="mt-2 text-sm leading-6 text-copy">
          Sign in to pick up where your team left off.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
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
          {errors.email && (
            <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-[13px] font-semibold text-copy-strong">Password</Label>
          <div className="relative">
            <LockKeyhole aria-hidden="true" size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-icon-muted" />
            <Input
              id="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              aria-invalid={Boolean(errors.password)}
              className="h-12 rounded-lg border-field-border bg-field pl-10 pr-11 text-sm text-ink placeholder:text-field-placeholder focus-visible:border-brand-focus focus-visible:ring-brand-focus/20"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
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
          Sign in to FlowDesk
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>

      <div className="mt-7 border-t border-line-soft pt-5 text-center text-sm text-copy">
        New to FlowDesk?{" "}
        <Link
          href="/signup"
          className="font-semibold text-brand-link underline-offset-4 hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
