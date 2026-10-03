import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth-session";
import { findWorkspaceBySlug } from "@/features/workspace/workspace.repository";

export default async function WorkspacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const { slug } = await params;
  const workspace = await findWorkspaceBySlug(slug);

  if (workspace?.owner_id !== user.id) {
    notFound();
  }

  if (!workspace?.onboarding_completed && workspace?.owner_id === user.id) {
    redirect(`/${workspace?.slug}/onboarding`);
  }

  return <div>Workspace content</div>;
}
