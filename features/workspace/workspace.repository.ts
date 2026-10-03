import { db } from "@/lib/db"
import type { Workspace } from "./workspace.types";

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
