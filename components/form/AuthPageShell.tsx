import Link from "next/link";
import { ArrowLeft, Check, CircleDashed, Clock3, LayoutDashboard } from "lucide-react";
import Authform from "./Authform";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

type AuthPageShellProps = {
  mode: "signin" | "signup";
};

const AuthPageShell = ({ mode }: AuthPageShellProps) => {
  return (
    <main className="min-h-screen bg-page text-ink">
      <header className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="FlowDesk home" className="text-ink">
          <Logo variant="full" size={34} markColor="var(--brand)" accentColor="var(--brand-signal)" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <ThemeToggle />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-copy-muted transition-colors hover:text-brand"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Back to home</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-8 sm:px-8 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-14">
        <section
          className="relative hidden min-h-160 overflow-hidden rounded-2xl bg-brand-panel p-10 text-brand-panel-foreground lg:flex lg:flex-col lg:justify-between xl:p-14"
          style={{
            backgroundImage:
              "linear-gradient(var(--auth-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--auth-grid-line) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        >
          <div className="relative">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-brand-panel-foreground/15 bg-brand-panel-foreground/5 px-3 py-1.5 text-[11px] font-medium text-brand-subtle">
              <span className="size-1.5 rounded-full bg-brand-signal" />
              YOUR TEAM, IN A BETTER RHYTHM
            </div>
            <h1 className="max-w-lg text-4xl font-semibold leading-[1.08] sm:text-5xl">
              {mode === "signup" ? (
                <>Make space for the work that <span className="font-medium italic text-brand-highlight">matters.</span></>
              ) : (
                <>Pick up right where your team <span className="font-medium italic text-brand-highlight">left off.</span></>
              )}
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-brand-panel-copy">
              Plans, projects, and people stay connected, so good ideas have a clear path to done.
            </p>
          </div>

          <div className="relative">
            <div className="mb-3 flex items-center justify-between text-xs text-brand-panel-copy">
              <span className="inline-flex items-center gap-2 font-medium text-brand-panel-foreground"><LayoutDashboard size={14} /> This week</span>
              <span>Product launch</span>
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-3 border-t border-brand-panel-foreground/15 py-4">
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-signal text-brand-panel"><Check size={12} /></span>
                <span className="flex-1 text-sm text-brand-panel-copy">Align on launch milestones</span>
                <span className="text-[11px] text-brand-panel-soft">Done</span>
              </div>
              <div className="flex items-center gap-3 border-t border-brand-panel-foreground/15 py-4">
                <span className="flex size-5 items-center justify-center rounded-full border border-brand-panel-foreground/35 text-transparent"><Check size={12} /></span>
                <span className="flex-1 text-sm text-brand-panel-foreground">Review the final experience</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-brand-highlight"><Clock3 size={12} /> Today</span>
              </div>
              <div className="flex items-center gap-3 border-y border-brand-panel-foreground/15 py-4">
                <span className="flex size-5 items-center justify-center rounded-full border border-brand-panel-foreground/35 text-transparent"><Check size={12} /></span>
                <span className="flex-1 text-sm text-brand-panel-copy">Share the release notes</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-brand-panel-soft"><CircleDashed size={12} /> Thu</span>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <p className="text-xs text-brand-panel-soft">One clear view. A team moving together.</p>
              <div className="flex -space-x-2" aria-label="Three teammates">
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-brand-panel bg-tone-sage text-[9px] font-bold text-tone-sage-ink">MC</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-brand-panel bg-tone-peach text-[9px] font-bold text-tone-peach-ink">JL</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-brand-panel bg-tone-lavender text-[9px] font-bold text-tone-lavender-ink">AK</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md py-8 lg:py-12">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-on">
              <LayoutDashboard size={18} />
            </span>
            <span className="text-sm font-semibold text-ink-strong">Your workspace, in sync.</span>
          </div>
          <Authform initialMode={mode} />
          <p className="mt-8 text-center text-xs leading-5 text-copy-muted">
            By continuing, you agree to FlowDesk&apos;s terms and privacy policy.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AuthPageShell;