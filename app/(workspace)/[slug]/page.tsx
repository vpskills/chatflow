import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getCurrentUser } from "@/lib/auth-session";

export default async function WorkspacePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <div>Workspace content</div>;
}
