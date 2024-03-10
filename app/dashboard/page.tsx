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
        <h1 className="text-3xl font-bold tracking-tight mb-6">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <TotalBalance />
          <TotalSavings />
          <MonthlySpend />
        </div>
        <div className="grid grid-cols-8 gap-6 mt-6">
          <div className="col-span-5 border-4 border-slate-300 h-[500px] flex justify-center items-center">
            <h3 className="text-5xl font-extrabold">Charttttt goes here</h3>
          </div>
          <div className="col-span-3 border-4 border-slate-300 h-[500px] flex justify-center items-center">
            <h3 className="text-3xl font-extrabold">Transactions go here</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
