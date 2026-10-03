import { createWorkspace, findWorkspaceBySlug } from "@/features/workspace/workspace.repository";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth-session";


export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const workspace = await findWorkspaceBySlug(slug);

    if (!workspace) {
      return NextResponse.json({
        unique: true,
      });
    }

    return NextResponse.json({
      unique: false,
    });
  } catch (error) {
    console.error("Get workspace by slug error:", error);

    return NextResponse.json(
      { error: "Failed to get workspace" },
      { status: 500 },
    );
  }
}
