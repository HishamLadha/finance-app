"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// Function to get the last 5 transactions used for the dashboard
// Can make this function better to take in inputs of start and end so that it can be used for pagination for the transactions table on the transactions page
export async function getTransactions() {
  const supabase = createClient();

  // retrieve the users last 5 transactions
  const { data: usersLast5Transactions, error: usersLast5TransactionsError } =
    await supabase
      .from("transactions")
      .select("amount, store, transaction_date")
      .order("transaction_date", { ascending: false })
      .range(0, 4);

  revalidatePath("/dashboard");

  if (!usersLast5TransactionsError) {
    return usersLast5Transactions;
  } else {
    console.error(usersLast5TransactionsError);
  }

  return [];
}
