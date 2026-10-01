import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import LandingPage from "@/components/Landing";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
      headers: await headers()
  })

  const isLoggedIn = session?.user?.id ? true : false;

  return (
    <div className="min-h-screen bg-page text-ink">
      <Header isLoggedIn={isLoggedIn} />
      <main> 
        {!isLoggedIn ? <LandingPage /> : <Dashboard />}
      </main>
    </div>
  );
}
