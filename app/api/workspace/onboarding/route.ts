import { NextResponse } from "next/server";
import { headers } from "next/headers";
import {
  saveWorkspaceOnboarding,
  findWorkspaceByOwnerId,
} from "@/features/workspace/workspace.repository";
import { getCurrentUser } from "@/lib/auth-session";
import { auth } from "@/lib/auth";

const roles = new Set([
  "Design",
  "Engineering",
  "Product",
  "Operations",
  "Something else",
]);
const teamSizes = new Set(["Just me", "2-5", "6-20", "21-50", "50+"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const workspace = await findWorkspaceByOwnerId(user.id);
    if (!workspace) {
      return NextResponse.json(
        { error: "Workspace not found" },
        { status: 404 },
      );
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    const values = body as Record<string, unknown>;
    const name = typeof values.name === "string" ? values.name.trim() : "";
    const ownerTitle =
      typeof values.title === "string" ? values.title.trim() : "";
    const ownerRole = typeof values.role === "string" ? values.role : "";
    const teamSize = typeof values.teamSize === "string" ? values.teamSize : "";
    const emails = typeof values.emails === "string" ? values.emails : "";

    if (!name || name.length > 100) {
      return NextResponse.json(
        { error: "Enter a name up to 100 characters long" },
        { status: 400 },
      );
    }
    if (ownerTitle.length > 100) {
      return NextResponse.json(
        { error: "Title must be 100 characters or less" },
        { status: 400 },
      );
    }
    if (ownerRole && !roles.has(ownerRole)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }
    if (teamSize && !teamSizes.has(teamSize)) {
      return NextResponse.json({ error: "Invalid team size" }, { status: 400 });
    }

    const pendingInviteEmails = [
      ...new Set(
        emails
          .split(/[\n,;]+/)
          .map((email) => email.trim().toLowerCase())
          .filter(Boolean),
      ),
    ];
    if (
      pendingInviteEmails.length > 20 ||
      pendingInviteEmails.some(
        (email) => email.length > 254 || !emailPattern.test(email),
      )
    ) {
      return NextResponse.json(
        { error: "Check the invite email addresses and try again" },
        { status: 400 },
      );
    }

    await auth.api.updateUser({
      body: { name },
      headers: await headers(),
    });

    const saved = await saveWorkspaceOnboarding(user.id, {
      ownerTitle: ownerTitle || null,
      ownerRole: ownerRole || null,
      teamSize: teamSize || null,
      pendingInviteEmails,
    });

    if (!saved) {
      return NextResponse.json(
        { error: "Workspace onboarding could not be saved" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Save workspace onboarding error:", error);
    return NextResponse.json(
      { error: "Failed to save onboarding details" },
      { status: 500 },
    );
  }
}
