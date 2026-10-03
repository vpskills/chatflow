'use client'

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import Logo from "../Logo";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AuthHeader = () => {
  const router = useRouter();

  const logout = async() => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }

  return (
    <header className="border-b border-line-soft bg-page">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" aria-label="FlowDesk home" className="text-ink">
          <Logo
            variant="full"
            size={38}
            markColor="var(--brand)"
            accentColor="var(--brand-signal)"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <ThemeToggle />

          {/* <Link
            href="/login"
            className="px-2 py-2 text-sm font-semibold text-copy-strong transition-colors hover:text-brand"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-on transition-colors hover:bg-brand-hover sm:px-5"
          >
            Sign up
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link> */}

          <button 
            className="px-2 py-2 text-sm font-semibold text-copy-strong transition-colors hover:text-brand"
            onClick={() => logout()}
            >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
