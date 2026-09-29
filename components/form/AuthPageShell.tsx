import Link from "next/link";
import { ArrowLeft, Check, CircleDashed, Clock3, LayoutDashboard } from "lucide-react";
import Authform from "./Authform";
import Logo from "../Logo";

type AuthPageShellProps = {
  mode: "signin" | "signup";
};

const AuthPageShell = ({ mode }: AuthPageShellProps) => {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-[#1f3229]">
      <header className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="FlowDesk home" className="text-[#1f3229]">
          <Logo variant="full" size={34} markColor="#1e4d42" accentColor="#d7ed77" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6c7b71] transition-colors hover:text-[#1e4d42]"
        >
          <ArrowLeft size={15} />
          <span className="hidden sm:inline">Back to home</span>
        </Link>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-8 sm:px-8 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-14">
        <section
          className="relative hidden min-h-[640px] overflow-hidden rounded-2xl bg-[#1e4539] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        >
          <div className="relative">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-[#d3e1d4]">
              <span className="size-1.5 rounded-full bg-[#c6df79]" />
              YOUR TEAM, IN A BETTER RHYTHM
            </div>
            <h1 className="max-w-lg text-4xl font-semibold leading-[1.08] sm:text-5xl">
              {mode === "signup" ? (
                <>Make space for the work that <span className="font-medium italic text-[#d3e49a]">matters.</span></>
              ) : (
                <>Pick up right where your team <span className="font-medium italic text-[#d3e49a]">left off.</span></>
              )}
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#d0ddd4]">
              Plans, projects, and people stay connected, so good ideas have a clear path to done.
            </p>
          </div>

          <div className="relative">
            <div className="mb-3 flex items-center justify-between text-xs text-[#d0ddd4]">
              <span className="inline-flex items-center gap-2 font-medium text-white"><LayoutDashboard size={14} /> This week</span>
              <span>Product launch</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 border-t border-white/15 py-4">
                <span className="flex size-5 items-center justify-center rounded-full bg-[#c6df79] text-[#214537]"><Check size={12} /></span>
                <span className="flex-1 text-sm text-[#d0ddd4]">Align on launch milestones</span>
                <span className="text-[11px] text-[#a9bdb0]">Done</span>
              </div>
              <div className="flex items-center gap-3 border-t border-white/15 py-4">
                <span className="flex size-5 items-center justify-center rounded-full border border-white/35 text-transparent"><Check size={12} /></span>
                <span className="flex-1 text-sm text-white">Review the final experience</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#d3e49a]"><Clock3 size={12} /> Today</span>
              </div>
              <div className="flex items-center gap-3 border-y border-white/15 py-4">
                <span className="flex size-5 items-center justify-center rounded-full border border-white/35 text-transparent"><Check size={12} /></span>
                <span className="flex-1 text-sm text-[#d0ddd4]">Share the release notes</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#a9bdb0]"><CircleDashed size={12} /> Thu</span>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <p className="text-xs text-[#b7c9bd]">One clear view. A team moving together.</p>
              <div className="flex -space-x-2" aria-label="Three teammates">
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-[#1e4539] bg-[#d9e8c2] text-[9px] font-bold text-[#31503e]">MC</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-[#1e4539] bg-[#f1d7bc] text-[9px] font-bold text-[#6c4930]">JL</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-[#1e4539] bg-[#d8dff5] text-[9px] font-bold text-[#424a7a]">AK</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md py-8 lg:py-12">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="flex size-9 items-center justify-center rounded-lg bg-[#1e4d42] text-white">
              <LayoutDashboard size={18} />
            </span>
            <span className="text-sm font-semibold text-[#26392f]">Your workspace, in sync.</span>
          </div>
          <Authform initialMode={mode} />
          <p className="mt-8 text-center text-xs leading-5 text-[#8a968e]">
            By continuing, you agree to FlowDesk&apos;s terms and privacy policy.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AuthPageShell;