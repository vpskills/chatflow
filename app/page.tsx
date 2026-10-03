import { redirect } from "next/navigation";

import Header from "@/components/Header";
import LandingPage from "@/components/Landing";
import Workspace from "@/components/Workspace";

import { getCurrentUser } from "@/lib/auth-session";
import { findWorkspaceByOwnerId } from "@/features/workspace/workspace.repository";

export default async function HomePage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-page text-ink">
        <Header />
        <main>
          <LandingPage />
        </main>
      </div>
    );
  }

  const workspace = await findWorkspaceByOwnerId(user?.id);

  if (!workspace) {
    return <Workspace />;
  }

  redirect(`/${workspace.slug}`);
}
