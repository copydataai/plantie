"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export async function signIn({email, password}: {email: string, password: string}) {
    try {
    await auth.api.signInEmail({
        body: {
        email,
        password,
        }
    });

    return { success: true };
    } catch (error) {
        return { error: error };
    }
}

export async function signOut() {
    try {
        await auth.api.signOut({
            headers: await headers()
        });
        return { success: true };
    } catch (error) {
        return { error: error };
    }
}
    
