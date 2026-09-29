import Header from "@/components/Header";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  Plus,
  Search,
  Settings2,
} from "lucide-react";

const workItems = [
  { title: "Map the first-run experience", project: "Website refresh", color: "bg-tone-sage", ink: "text-tone-sage-ink", initials: "MC" },
  { title: "Review customer interview notes", project: "Research", color: "bg-tone-peach", ink: "text-tone-peach-ink", initials: "JL" },
  { title: "Ship the new dashboard", project: "Product", color: "bg-tone-lavender", ink: "text-tone-lavender-ink", initials: "AK" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Header />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:min-h-172.5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:pb-24 lg:pt-10">
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-soft bg-surface/70 px-3 py-1.5 text-xs font-semibold text-brand-muted">
              <span className="size-2 rounded-full bg-success-strong" />
              A calmer way to move work forward
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Make room for <span className="font-medium italic text-brand">great work.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-copy">
              FlowDesk brings your projects, plans, and people into one clear workspace, so your team can spend less time coordinating and more time creating.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-brand-on transition-colors hover:bg-brand-hover"
              >
                Get started for free
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <a
                href="#workspace"
                className="inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-copy-strong transition-colors hover:text-brand"
              >
                Take a look
                <ArrowDownRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-copy-muted">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-page bg-tone-sage text-[10px] font-bold text-tone-sage-ink">MC</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-page bg-tone-peach text-[10px] font-bold text-tone-peach-ink">JL</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-page bg-tone-lavender text-[10px] font-bold text-tone-lavender-ink">AK</span>
              </div>
              <span>Good work happens together.</span>
            </div>
          </div>

          <div id="workspace" className="relative mx-auto w-full max-w-170 scroll-mt-8">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-surface-wash sm:-inset-6" />
            <div className="overflow-hidden rounded-2xl border border-line-soft bg-surface shadow-workspace">
              <div className="flex h-12 items-center justify-between border-b border-line-faint px-4 sm:px-5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-status-red" />
                  <span className="size-2.5 rounded-full bg-status-yellow" />
                  <span className="size-2.5 rounded-full bg-status-green" />
                </div>
                <div className="hidden h-7 w-40 items-center justify-center gap-2 rounded-md bg-surface-soft text-[10px] text-copy-faint sm:flex">
                  <Search size={12} /> Search your workspace
                </div>
                <div className="flex size-7 items-center justify-center rounded-full bg-tone-lavender text-[9px] font-bold text-tone-lavender-ink">MC</div>
              </div>

              <div className="grid min-h-97.5 grid-cols-[54px_1fr] sm:grid-cols-[166px_1fr]">
                <aside className="border-r border-line-faint bg-surface-alt p-2 sm:p-3">
                  <div className="mb-5 hidden items-center gap-2 px-2 text-[11px] font-bold text-copy-strong sm:flex">
                    <span className="flex size-6 items-center justify-center rounded-md bg-brand text-brand-on"><Check size={13} /></span>
                    FLOWDESK
                  </div>
                  <div className="space-y-1 text-copy-muted">
                    <div className="flex items-center justify-center gap-2 rounded-md bg-brand-soft px-2 py-2 text-brand-link sm:justify-start">
                      <LayoutDashboard size={15} /><span className="hidden text-[11px] font-semibold sm:inline">Overview</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 rounded-md px-2 py-2 sm:justify-start">
                      <ListTodo size={15} /><span className="hidden text-[11px] sm:inline">My work</span><span className="ml-auto hidden text-[10px] sm:inline">4</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 rounded-md px-2 py-2 sm:justify-start">
                      <MessageSquare size={15} /><span className="hidden text-[11px] sm:inline">Updates</span>
                    </div>
                  </div>
                  <div className="mb-2 mt-7 hidden px-2 text-[9px] font-bold uppercase text-copy-faint sm:block">Your projects</div>
                  <div className="hidden space-y-1 sm:block">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 text-[10px] text-copy-strong"><span className="size-2 rounded-sm bg-project-olive" />Website refresh</div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 text-[10px] text-copy-strong"><span className="size-2 rounded-sm bg-project-rust" />Customer research</div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 text-[10px] text-copy-strong"><span className="size-2 rounded-sm bg-project-lavender" />Product launch</div>
                  </div>
                  <div className="mt-8 hidden border-t border-line-faint pt-3 text-copy-muted sm:block">
                    <div className="flex items-center gap-2 px-2 py-1.5"><Settings2 size={13} /><span className="text-[10px]">Settings</span></div>
                    <div className="flex items-center gap-2 px-2 py-1.5"><CircleHelp size={13} /><span className="text-[10px]">Help center</span></div>
                  </div>
                </aside>

                <div className="min-w-0 p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-copy-faint">Monday, October 14</p>
                      <h2 className="mt-1 text-lg font-semibold tracking-tight text-ink-strong sm:text-xl">Good morning, Maya</h2>
                    </div>
                    <button type="button" aria-label="Create a task" className="flex size-8 shrink-0 items-center justify-center rounded-md bg-brand text-brand-on"><Plus size={16} /></button>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-line-faint p-3">
                      <div className="text-[10px] text-copy-muted">Your open tasks</div>
                      <div className="mt-1.5 flex items-end justify-between"><span className="text-2xl font-semibold text-ink-strong">12</span><span className="text-[9px] font-semibold text-success">3 due today</span></div>
                    </div>
                    <div className="rounded-lg border border-line-faint p-3">
                      <div className="text-[10px] text-copy-muted">Team progress</div>
                      <div className="mt-2 flex items-center gap-2"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line-faint"><div className="h-full w-[72%] rounded-full bg-success-strong" /></div><span className="text-[10px] font-semibold text-copy-strong">72%</span></div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-copy-strong">Your focus today</h3>
                    <span className="text-[10px] text-copy-muted">View all</span>
                  </div>
                  <div className="mt-2 divide-y divide-line-faint">
                    {workItems.map((item) => (
                      <div key={item.title} className="flex min-w-0 items-center gap-2.5 py-3 sm:gap-3">
                        <span className="flex size-4 shrink-0 items-center justify-center rounded border border-field-border text-transparent"><Check size={10} /></span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[10px] font-medium text-copy-strong sm:text-[11px]">{item.title}</p>
                          <p className="mt-1 truncate text-[9px] text-copy-faint">{item.project}</p>
                        </div>
                        <span className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-bold ${item.color} ${item.ink}`}>{item.initials}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-surface-callout px-3 py-2.5 text-[10px] text-copy">
                    <span className="flex size-5 items-center justify-center rounded-full bg-success-soft text-success-ink"><Check size={12} /></span>
                    Your team wrapped up 4 tasks this week.
                    <ArrowUpRight className="ml-auto shrink-0 text-success-muted" size={13} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 right-3 rounded-lg border border-line-soft bg-surface px-3 py-2 shadow-lg sm:-right-5 sm:px-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-success-soft text-success-ink"><Check size={14} /></span>
                <div><p className="text-[10px] font-semibold text-copy-strong">A little more in sync</p><p className="mt-0.5 text-[9px] text-copy-muted">One team, one clear view</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line-soft bg-surface/60">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:px-8 md:grid-cols-3 md:gap-6">
            <div><p className="text-sm font-semibold text-copy-strong">Plans stay connected</p><p className="mt-1.5 text-sm leading-6 text-copy-muted">Give every project a shared direction and a clear next step.</p></div>
            <div><p className="text-sm font-semibold text-copy-strong">Progress stays visible</p><p className="mt-1.5 text-sm leading-6 text-copy-muted">See what is moving, what needs attention, and who is on it.</p></div>
            <div><p className="text-sm font-semibold text-copy-strong">People stay in flow</p><p className="mt-1.5 text-sm leading-6 text-copy-muted">Spend less time chasing updates and more time doing meaningful work.</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}
