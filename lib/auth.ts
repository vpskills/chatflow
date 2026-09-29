import { betterAuth } from "better-auth";
import { Pool } from "pg";

const createPool = () => {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });
};

declare global {
  var pgPool: undefined | Pool;
}

const pool = globalThis.pgPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalThis.pgPool = pool;
}

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
});