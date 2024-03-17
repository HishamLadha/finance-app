"use server";

import { createClient } from "@/lib/supabase/server";

export async function addAccount(bank: string, chequing: any, savings: any) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userID = user?.id;

  const currentTime = new Date().toISOString();

  const { data, error } = await supabase
    .from("bank")
    .insert([
      {
        user_id: userID,
        bank_name: bank,
        total_chequing: chequing,
        total_savings: savings,
        created_at: currentTime,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    return true;
  }
  return false;
}
