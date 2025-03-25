import postgres from "postgres";
import { drizzle } from 'drizzle-orm/postgres-js';


const queryClient = postgres(process.env.DATABASE_URL || "")
const db = drizzle({ client: queryClient });

export default db;
