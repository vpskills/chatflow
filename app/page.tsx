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
  { title: "Map the first-run experience", project: "Website refresh", color: "bg-[#d8e8be]", initials: "MC" },
  { title: "Review customer interview notes", project: "Research", color: "bg-[#f3d8bd]", initials: "JL" },
  { title: "Ship the new dashboard", project: "Product", color: "bg-[#d9ddf5]", initials: "AK" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f9f5] text-[#172b25]">
      <Header />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:min-h-[690px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:pb-24 lg:pt-10">
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe8d8] bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#3d6250]">
              <span className="size-2 rounded-full bg-[#8aaf4b]" />
              A calmer way to move work forward
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] text-[#172b25] sm:text-6xl lg:text-7xl">
              Make room for <span className="font-medium italic text-[#568064]">great work.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#617168]">
              FlowDesk brings your projects, plans, and people into one clear workspace, so your team can spend less time coordinating and more time creating.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#1e4d42] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#143c32]"
              >
                Get started for free
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <a
                href="#workspace"
                className="inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-[#35483f] transition-colors hover:text-[#0b6b50]"
              >
                Take a look
                <ArrowDownRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-[#718078]">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7f9f5] bg-[#d8e8be] text-[10px] font-bold text-[#31503e]">MC</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7f9f5] bg-[#f3d8bd] text-[10px] font-bold text-[#6c4930]">JL</span>
                <span className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7f9f5] bg-[#d9ddf5] text-[10px] font-bold text-[#424a7a]">AK</span>
              </div>
              <span>Good work happens together.</span>
            </div>
          </div>

          <div id="workspace" className="relative mx-auto w-full max-w-[680px] scroll-mt-8">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#e9eee3] sm:-inset-6" />
            <div className="overflow-hidden rounded-2xl border border-[#e3e8e1] bg-white shadow-[0_28px_80px_-32px_rgba(25,54,42,0.24)]">
              <div className="flex h-12 items-center justify-between border-b border-[#edf0ec] px-4 sm:px-5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#e6b6a8]" />
                  <span className="size-2.5 rounded-full bg-[#e8d38e]" />
                  <span className="size-2.5 rounded-full bg-[#afcda2]" />
                </div>
                <div className="hidden h-7 w-40 items-center justify-center gap-2 rounded-md bg-[#f5f7f4] text-[10px] text-[#98a39c] sm:flex">
                  <Search size={12} /> Search your workspace
                </div>
                <div className="flex size-7 items-center justify-center rounded-full bg-[#d9ddf5] text-[9px] font-bold text-[#424a7a]">MC</div>
              </div>

              <div className="grid min-h-[390px] grid-cols-[54px_1fr] sm:grid-cols-[166px_1fr]">
                <aside className="border-r border-[#edf0ec] bg-[#fbfcfa] p-2 sm:p-3">
                  <div className="mb-5 hidden items-center gap-2 px-2 text-[11px] font-bold text-[#30443a] sm:flex">
                    <span className="flex size-6 items-center justify-center rounded-md bg-[#1e4d42] text-white"><Check size={13} /></span>
                    FLOWDESK
                  </div>
                  <div className="space-y-1 text-[#7b8980]">
                    <div className="flex items-center justify-center gap-2 rounded-md bg-[#eaf0e6] px-2 py-2 text-[#315d45] sm:justify-start">
                      <LayoutDashboard size={15} /><span className="hidden text-[11px] font-semibold sm:inline">Overview</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 rounded-md px-2 py-2 sm:justify-start">
                      <ListTodo size={15} /><span className="hidden text-[11px] sm:inline">My work</span><span className="ml-auto hidden text-[10px] sm:inline">4</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 rounded-md px-2 py-2 sm:justify-start">
                      <MessageSquare size={15} /><span className="hidden text-[11px] sm:inline">Updates</span>
                    </div>
                  </div>
                  <div className="mb-2 mt-7 hidden px-2 text-[9px] font-bold uppercase text-[#a0aaa3] sm:block">Your projects</div>
                  <div className="hidden space-y-1 sm:block">
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 text-[10px] text-[#58675e]"><span className="size-2 rounded-sm bg-[#a4bb71]" />Website refresh</div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 text-[10px] text-[#58675e]"><span className="size-2 rounded-sm bg-[#cf9f74]" />Customer research</div>
                    <div className="flex items-center gap-2 rounded-md px-2 py-2 text-[10px] text-[#58675e]"><span className="size-2 rounded-sm bg-[#9299c7]" />Product launch</div>
                  </div>
                  <div className="mt-8 hidden border-t border-[#edf0ec] pt-3 text-[#89958d] sm:block">
                    <div className="flex items-center gap-2 px-2 py-1.5"><Settings2 size={13} /><span className="text-[10px]">Settings</span></div>
                    <div className="flex items-center gap-2 px-2 py-1.5"><CircleHelp size={13} /><span className="text-[10px]">Help center</span></div>
                  </div>
                </aside>

                <div className="min-w-0 p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-[#98a39c]">Monday, October 14</p>
                      <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#26392f] sm:text-xl">Good morning, Maya</h2>
                    </div>
                    <button type="button" aria-label="Create a task" className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#1e4d42] text-white"><Plus size={16} /></button>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-[#edf0ec] p-3">
                      <div className="text-[10px] text-[#8a968e]">Your open tasks</div>
                      <div className="mt-1.5 flex items-end justify-between"><span className="text-2xl font-semibold text-[#26392f]">12</span><span className="text-[9px] font-semibold text-[#61834f]">3 due today</span></div>
                    </div>
                    <div className="rounded-lg border border-[#edf0ec] p-3">
                      <div className="text-[10px] text-[#8a968e]">Team progress</div>
                      <div className="mt-2 flex items-center gap-2"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#edf0ec]"><div className="h-full w-[72%] rounded-full bg-[#769b5a]" /></div><span className="text-[10px] font-semibold text-[#52645a]">72%</span></div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-[#30443a]">Your focus today</h3>
                    <span className="text-[10px] text-[#8a968e]">View all</span>
                  </div>
                  <div className="mt-2 divide-y divide-[#edf0ec]">
                    {workItems.map((item) => (
                      <div key={item.title} className="flex min-w-0 items-center gap-2.5 py-3 sm:gap-3">
                        <span className="flex size-4 shrink-0 items-center justify-center rounded border border-[#d9e0d9] text-transparent"><Check size={10} /></span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[10px] font-medium text-[#45564c] sm:text-[11px]">{item.title}</p>
                          <p className="mt-1 truncate text-[9px] text-[#98a39c]">{item.project}</p>
                        </div>
                        <span className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-[#384b40] ${item.color}`}>{item.initials}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-2 rounded-md bg-[#f5f8f2] px-3 py-2.5 text-[10px] text-[#617168]">
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#dce9d2] text-[#557a45]"><Check size={12} /></span>
                    Your team wrapped up 4 tasks this week.
                    <ArrowUpRight className="ml-auto shrink-0 text-[#7a8e74]" size={13} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 right-3 rounded-lg border border-[#e3e8e1] bg-white px-3 py-2 shadow-lg sm:-right-5 sm:px-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#e4efda] text-[#507641]"><Check size={14} /></span>
                <div><p className="text-[10px] font-semibold text-[#35483f]">A little more in sync</p><p className="mt-0.5 text-[9px] text-[#8a968e]">One team, one clear view</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e4e9e3] bg-white/60">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:px-8 md:grid-cols-3 md:gap-6">
            <div><p className="text-sm font-semibold text-[#30443a]">Plans stay connected</p><p className="mt-1.5 text-sm leading-6 text-[#718078]">Give every project a shared direction and a clear next step.</p></div>
            <div><p className="text-sm font-semibold text-[#30443a]">Progress stays visible</p><p className="mt-1.5 text-sm leading-6 text-[#718078]">See what is moving, what needs attention, and who is on it.</p></div>
            <div><p className="text-sm font-semibold text-[#30443a]">People stay in flow</p><p className="mt-1.5 text-sm leading-6 text-[#718078]">Spend less time chasing updates and more time doing meaningful work.</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}
