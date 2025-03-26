import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.VERCEL_URL || "http://localhost:3000"
})

export const { getSession, useSession } = authClient;