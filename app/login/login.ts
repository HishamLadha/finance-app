"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(email: string, password: string) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return true;
  }

  // The following check below is to see if it is the first time a user is logging in.
  // In other words, their bank account details have not been added yet.
  const { data: bank, error: bankError } = await supabase
    .from("bank")
    .select("bank_name");

  if (bankError) {
    return true;
  }

  if (bank?.length === 0) {
    revalidatePath("/accounts", "layout");
    redirect("/accounts");
  } else {
    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}
