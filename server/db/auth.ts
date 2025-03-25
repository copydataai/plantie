import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "./index";
import { user, session, account, verification } from "./schema/auth";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      session,
      account,
      verification,
      user
    },
    usePlural: true
  }),
});
