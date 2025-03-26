"use server";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export async function signUp({email, password, name, image}: {email: string, password: string, name: string, image: string | null}) {
    console.log(email, password, name, image);
    const {data, error} = await authClient.signUp.email({
      email,
      password,
      name,
      image: image || undefined,
    });
    console.log(data, error);

    if (error) {
      return { error: error.message };
    }

    if (data?.user) {
      redirect("/");
    }

    return { error: "Failed to create account" };
}
