import Authform from "@/components/form/Authform";
import { MessageCircle } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <section className="hidden md:flex bg-accent text-accent-foreground p-10 flex-col justify-between min-h-150">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/15">
                  <MessageCircle size={22} />
                </div>

                <span className="text-lg font-semibold">ChatFlow</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight">
                Conversations
                <br />
                that stay in flow.
              </h1>

              <p className="mt-4 max-w-sm text-sm font-semibold text-accent-foreground opacity-80">
                One place for your team, your clients and your friends. Simple,
                fast and always connected.
              </p>
            </div>

            {/* Demo Messages */}
            <div className="space-y-2">
              <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-md bg-white/30 px-4 py-2.5 text-sm">
                Did the deploy go through?
              </div>

              <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-sm text-gray-900">
                Yes, it is live.
              </div>

              <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-md bg-white/30 px-4 py-2.5 text-sm">
                Great, sending the link now.
              </div>
            </div>
          </section>

          {/* Right Section */}
          <section className="flex min-h-150 flex-col justify-center p-6 sm:p-10">
            <Authform/>
          </section>
        </div>
      </div>
    </main>
  );
}
