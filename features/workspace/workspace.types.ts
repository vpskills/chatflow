export type Workspace = {
  id: string;
  name: string;
  slug: string;
  owner_id: string;
  region: string;
  onboarding_completed: boolean;
  owner_title: string | null;
  owner_role: string | null;
  team_size: string | null;
  pending_invite_emails: string[];
  created_at: Date;
  updated_at: Date;
};
