import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth-session";
import { findWorkspaceBySlugAndOwnerId } from "@/features/workspace/workspace.repository";

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
  const workspace = await findWorkspaceBySlugAndOwnerId(slug, user.id);

  if (!workspace) {
    notFound();
  }

  if (!workspace.onboarding_completed) {
    redirect(`/${workspace.slug}/onboarding`);
  }

  return <div>Workspace content</div>;
}
