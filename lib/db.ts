import { Pool } from "pg";

const createPool = () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  // Prevents idle pool client crashes from tearing down the Node.js process
  pool.on("error", (err) => {
    console.error("Unexpected error on idle pg client:", err.message);
  });

  return pool;
};

declare global {
  var pgPool: Pool | undefined;
}

export const db = globalThis.pgPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalThis.pgPool = db;
}
