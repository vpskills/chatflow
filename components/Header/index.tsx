import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "../Logo";

const Header = () => {
    return (
        <header className="border-b border-[#e4e9e3] bg-[#f7f9f5]">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"
            >
                <Link href="/" aria-label="FlowDesk home" className="text-[#172b25]">
                    <Logo
                        variant="full"
                        size={38}
                        markColor="#1e4d42"
                        accentColor="#d7ed77"
                    />
                </Link>

                <div className="flex items-center gap-3 sm:gap-6">
                    <Link
                        href="/login"
                        className="px-2 py-2 text-sm font-semibold text-[#35483f] transition-colors hover:text-[#0b6b50]"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/signup"
                        className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#1e4d42] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#143c32] sm:px-5"
                    >
                        Sign up
                        <ArrowUpRight aria-hidden="true" size={16} />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;