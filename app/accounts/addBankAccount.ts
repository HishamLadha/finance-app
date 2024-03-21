"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddBankAccount(
  bank: string,
  chequing: any,
  savings: any
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userID = user?.id;

  const currentTime = new Date().toISOString();

  // insert a bank account into banks table
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

  // check if a user has a record in the 'accounts' table first
  // If they dont, insert a new record in the 'accounts' table, else update the record
  const { data: account, error: accountError } = await supabase
    .from("accounts")
    .select()
    .eq("user_id", userID);

  if (account?.length === 0 || account === null) {
    const { data: newAccount, error: newAccountError } = await supabase
      .from("accounts")
      .insert([
        {
          user_id: userID,
          created_at: currentTime,
          total_balance: chequing + savings,
          total_savings: savings,
          monthly_income: 0,
        },
      ]);
  } else {
    const { data: updateAccount, error: updateAccountError } = await supabase
      .from("accounts")
      .update({
        total_balance: account[0].total_balance + chequing + savings,
        total_savings: account[0].total_savings + savings,
      })
      .eq("user_id", userID);
  }

  revalidatePath("/accounts");
  revalidatePath("/dashboard");

  if (error || accountError) {
    console.log(error);
    return true;
  }
  return false;
}
