import {
  createWorkspace,
  findWorkspaceByOwnerId,
  findWorkspaceBySlug,
} from "@/features/workspace/workspace.repository";
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

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const name = body.name?.trim();
    const slug = body.slug?.trim().toLowerCase();
    const region = body.region?.trim() || "ap-southeast-1";

    if (!name) {
      return NextResponse.json(
        { error: "Workspace name is required" },
        { status: 400 },
      );
    }

    if (!slug) {
      return NextResponse.json(
        { error: "Workspace slug is required" },
        { status: 400 },
      );
    }

    const existingWorkspace = await findWorkspaceBySlug(slug);

    if (existingWorkspace) {
      return NextResponse.json(
        { error: "Workspace slug is already taken" },
        { status: 409 },
      );
    }

    const workspace = await createWorkspace(name, slug, user.id, region);

    return NextResponse.json(
      {
        success: true,
        workspace,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create workspace error:", error);

    return NextResponse.json(
      { error: "Failed to create workspace" },
      { status: 500 },
    );
  }
}