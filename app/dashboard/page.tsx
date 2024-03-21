import TotalBalance from "@/components/ui/Cards/totalBalance";
import TotalSavings from "@/components/ui/Cards/totalSavings";
import MonthlySpend from "@/components/ui/Cards/monthlySpend";
import RecentTransactions from "@/components/ui/Cards/recentTransactions";
import TransactionsChart from "@/components/ui/Cards/transactionsChart";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/Buttons/button";

export default async function Dashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: account, error: accountError } = await supabase
    .from("accounts")
    .select();

  let totalBalance = 0;
  let totalSavings = 0;
  let monthlySpending = 0;

  if (!accountError && account != null && account.length > 0) {
    totalBalance = account[0].total_balance;
    totalSavings = account[0].total_savings;
    monthlySpending = account[0].monthly_spending;
  } else {
    redirect("/accounts");
  }

  return (
    <div className="m-6 ml-12 h-screen">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Dashboard</h1>
        <h1 className="text-3xl font-bold tracking-tight mb-6">
          <Button>Maybe?</Button>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <TotalBalance totalBalance={totalBalance} />
        <TotalSavings totalSavings={totalSavings} />
        <MonthlySpend monthlySpending={monthlySpending} />
      </div>
      <div className="grid grid-cols-8 gap-6 mt-6">
        <div className="col-span-5 ">
          <TransactionsChart />
        </div>
        <div className="col-span-3">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
