import "dotenv/config";

import fs from "fs";
import path from "path";
import { db } from "@/lib/db";

async function migrate() {
  // 1. Create migration tracking table
  await db.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  // 2. Find migration files
  const migrationsPath = path.join(process.cwd(), "db", "migrations");

  const files = fs
    .readdirSync(migrationsPath)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  // 3. Check and run each migration
  for (const file of files) {
    const result = await db.query(`SELECT id FROM migrations WHERE name = $1`, [
      file,
    ]);

    // Already executed → skip
    if (result.rowCount) {
      console.log(`Skipping: ${file}`);
      continue;
    }

    console.log(`Running: ${file}`);

    const sql = fs.readFileSync(path.join(migrationsPath, file), "utf-8");

    // Execute migration
    await db.query("BEGIN");

    try {
      await db.query(sql);

      // Record migration
      await db.query(`INSERT INTO migrations (name) VALUES ($1)`, [file]);

      await db.query("COMMIT");

      console.log(`Completed: ${file}`);
    } catch (error) {
      await db.query("ROLLBACK");
      throw error;
    }
  }

  await db.end();
}

migrate().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
