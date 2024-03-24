"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { Payment } from "./columns";

// Function to get the last 5 transactions used for the dashboard
// Can make this function better to take in inputs of start and end so that it can be used for pagination for the transactions table on the transactions page
export async function getTransactions(numberOfTransactions: string = "5") {
  const supabase = createClient();

  // retrieve the users last 5 transactions to be used for dashboard display
  if (numberOfTransactions === "5") {
    const { data: usersLast5Transactions, error: usersLast5TransactionsError } =
      await supabase
        .from("transactions")
        .select("amount, store, transaction_date, logo_url")
        .order("transaction_date", { ascending: false })
        .range(0, 4);

    if (!usersLast5TransactionsError) {
      return usersLast5Transactions;
    } else {
      console.error(usersLast5TransactionsError);
    }
  }

  if (numberOfTransactions != "5") {
    const { data, error } = await supabase
      .from("transactions")
      .select("id, amount, store, transaction_date, logo_url, description")
      .order("transaction_date", { ascending: false });

    if (!error) {
      return data;
    } else {
      console.error(error);
    }
  }
  revalidatePath("/dashboard");

  return [];
}

export async function getAllTransactions(): Promise<Payment[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("transactions")
    .select(
      "id, amount, store, transaction_date, logo_url, category, description"
    )
    .order("transaction_date", { ascending: false });

  if (!error) {
    return data;
  } else {
    console.error(error);
  }
  revalidatePath("/dashboard");

  return [];
}
