import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { getAllTransactions } from "./getTransactions";

export default async function Dashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const tableData = await getAllTransactions();

  return (
    <div>
      <div className="m-6 ml-12">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Transactions</h1>
        <DataTable columns={columns} data={tableData} />
      </div>
    </div>
  );
}
