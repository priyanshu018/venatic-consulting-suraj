import "server-only";
import { Pool, type QueryResultRow } from "pg";

declare global {
  var _pgPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. See .env.local.example.");
  }
  return new Pool({
    connectionString,
    max: 1,
    ssl: connectionString.includes("sslmode=disable")
      ? false
      : { rejectUnauthorized: false },
  });
}

function getPool() {
  if (!global._pgPool) {
    global._pgPool = createPool();
  }
  return global._pgPool;
}

export function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
) {
  return getPool().query<T>(text, params);
}
