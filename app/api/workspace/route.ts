import { findWorkspaceByOwnerId } from "@/features/workspace/workspace.repository";
import { getCurrentUser } from "@/lib/auth-session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
    }

    const workspace = await findWorkspaceByOwnerId(user.id);

    return NextResponse.json({
      workspace,
    });
  } catch (error) {
    console.error("Get workspace error:", error);

    return NextResponse.json(
      { error: "Failed to get workspace" },
      { status: 500 },
    );
  }
}

