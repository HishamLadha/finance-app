"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { fetchCompanyLogo } from "@/lib/fetchLogo";

function parseDate(date: string) {
  // Splitting the input into parts
  const parts = date.split("/");

  // Creating a new Date object (month is 0-indexed in JavaScript Date)
  return new Date(
    parseInt(parts[2]),
    parseInt(parts[1]) - 1,
    parseInt(parts[0])
  );
}

export async function AddTransaction(
  store: string,
  amount: any,
  category: string,
  description: string,
  date: string
) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userID = user?.id;

  const transaction_date = parseDate(date);

  const logoUrl = await fetchCompanyLogo(store);

  //   add the transaction to the transactions table
  const { data: newTransaction, error: newTransactionError } = await supabase
    .from("transactions")
    .insert([
      {
        user_id: userID,
        transaction_date: transaction_date,
        store: store,
        description: description,
        category: category,
        amount: amount,
        logo_url: logoUrl,
      },
    ]);

  // retrieve the user's monthly spending
  const { data: usersMonthlySpending, error: usersMonthlySpendingError } =
    await supabase
      .from("accounts")
      .select("monthly_spending")
      .eq("user_id", userID);

  //   console.log(usersMonthlySpending[0].monthly_spending + amount);

  // add this transaction amount to the user's monthly spending

  if (usersMonthlySpending?.length != 0 && usersMonthlySpending != null) {
    const { data: updateMonthlySpending, error: updateMonthlySpendingError } =
      await supabase
        .from("accounts")
        .update({
          monthly_spending: usersMonthlySpending[0].monthly_spending + amount,
        })
        .eq("user_id", userID);
  }

  // subtract this transaction amount from the user's total balance
  const { data: usersTotalBalance, error: usersTotalBalanceError } =
    await supabase
      .from("accounts")
      .select("total_balance")
      .eq("user_id", userID);

  if (usersTotalBalance?.length != 0 && usersTotalBalance != null) {
    const { data: updateTotalBalance, error: updateTotalBalanceError } =
      await supabase
        .from("accounts")
        .update({
          total_balance: usersTotalBalance[0].total_balance - amount,
        })
        .eq("user_id", userID);
  }

  revalidatePath("/dashboard");
  revalidatePath("/transactions");

  if (newTransactionError) {
    return "error";
  }
  return "success";
}
