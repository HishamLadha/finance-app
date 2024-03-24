"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function signup(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const supabase = createClient();

  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    if (error.message === "User already registered") {
      return "duplicate";
    }
    return "general";
  }

  revalidatePath("/login", "layout");

  return "email-sent";
}
