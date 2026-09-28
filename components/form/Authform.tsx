"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Eye, EyeOff, MessageCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AuthType {
  name?: string;
  email: string;
  password: string;
}

const Authform = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>();

  const onSubmit: SubmitHandler<AuthType> = (data) => {
    
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      {/* Mobile Logo for mobile screens */}
      <div className="mb-8 flex items-center gap-2 md:hidden">
        <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <MessageCircle size={20} />
        </div>

        <span className="font-semibold">ChatFlow</span>
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-b)old tracking-tight">
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>

        <p className="mt-1.5 text-sm text-muted-foreground">
          {isSignup
            ? "Start chatting in less than a minute."
            : "Enter your details to continue."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name */}
        {isSignup && (
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>

            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              className="h-11"
              {...register("name")}
            />
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className="h-11"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />

          {errors?.email && (
            <span className="text-rose-500 text-sm font-semibold">
              {errors?.email?.message || 'Email is required'}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>

          <div className="relative">
            <Input
              id="password"
              placeholder="*******"
              type={showPassword ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              className="h-11 pr-11"
              {...register("password", { required: true })}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <span className="text-rose-500 text-sm font-semibold">
              Password is required
            </span>
          )}
        </div>

        {/* Forgot password */}
        {!isSignup && (
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-medium text-accent hover:underline hover:text-accent-strong"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          className="h-11 w-full bg-accent text-accent-foreground hover:bg-accent-strong"
        >
          {isSignup ? "Create account" : "Sign in"}
        </Button>
      </form>

      {/* Switch Auth */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        {isSignup ? "Already have an account?" : "New here?"}

        <button
          type="submit"
          onClick={() => setIsSignup(!isSignup)}
          className="ml-1 font-semibold text-accent hover:underline hover:text-accent-strong"
        >
          {isSignup ? "Sign in" : "Create an account"}
        </button>
      </div>
    </div>
  );
};

export default Authform;
