import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import db from "@/server/db/index";
import { user, session, account, verification } from "@/server/db/schema/auth";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      session,
      account,
      verification,
      user
    },
  }),
  emailAndPassword: {
    enabled: true
  },
  advanced: {
    useSecureCookies: true
  },
  plugins: [
    nextCookies()
  ]
});