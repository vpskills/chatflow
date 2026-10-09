import { db } from "@/lib/db";
import type { Workspace } from "./workspace.types";

export type WorkspaceOnboardingDetails = {
  ownerTitle: string | null;
  ownerRole: string | null;
  teamSize: string | null;
  pendingInviteEmails: string[];
};

export async function createWorkspace(
  name: string,
  slug: string,
  ownerId: string,
  region: string,
): Promise<Workspace> {
  const result = await db.query<Workspace>(
    `
      INSERT INTO workspaces (
        name,
        slug,
        owner_id,
        region
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
    [name, slug, ownerId, region],
  );

  return result.rows[0];
}

export async function findWorkspaceByOwnerId(
  ownerId: string,
): Promise<Workspace | null> {
  const result = await db.query<Workspace>(
    `
      SELECT *
      FROM workspaces
      WHERE owner_id = $1
      LIMIT 1
    `,
    [ownerId],
  );

  return result.rows[0] ?? null;
}

export async function findWorkspaceBySlug(
  slug: string,
): Promise<Workspace | null> {
  const result = await db.query<Workspace>(
    `
      SELECT *
      FROM workspaces
      WHERE slug = $1
      LIMIT 1
    `,
    [slug],
  );

  return result.rows[0] ?? null;
}

export async function saveWorkspaceOnboarding(
  ownerId: string,
  details: WorkspaceOnboardingDetails,
): Promise<boolean> {
  const result = await db.query(
    `
      UPDATE workspaces
      SET owner_title = $2,
          owner_role = $3,
          team_size = $4,
          pending_invite_emails = $5,
          onboarding_completed = TRUE,
          updated_at = NOW()
      WHERE owner_id = $1
    `,
    [
      ownerId,
      details.ownerTitle,
      details.ownerRole,
      details.teamSize,
      details.pendingInviteEmails,
    ],
  );

  return result.rowCount === 1;
}
