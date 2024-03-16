import TotalBalance from "@/components/ui/Cards/totalBalance";
import TotalSavings from "@/components/ui/Cards/totalSavings";
import MonthlySpend from "@/components/ui/Cards/monthlySpend";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function Dashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="m-6 ml-12">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Transactions</h1>
      </div>
    </div>
  );
}
