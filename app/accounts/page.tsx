import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import AccountCard from "@/components/ui/Cards/accountCard";
import AddAccountButton from "@/components/ui/addAccountButton";

export default async function Accounts() {
  const supabase = createClient();

  const { data, error: authError } = await supabase.auth.getUser();
  if (authError || !data?.user) {
    redirect("/login");
  }

  const { data: bank, error: bankError } = await supabase
    .from("bank")
    .select("id, bank_name, total_chequing, total_savings");

  return (
    <div>
      <div className="m-6 ml-12 h-screen">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight mb-6">
            Your Accounts
          </h1>
          <AddAccountButton />
        </div>

        {bank?.length === 0 ? (
          <div className="flex justify-center pt-28">
            <h2 className="text-4xl font-medium tracking-tight mb-6">
              Click the button above to add an account ↗️
            </h2>
          </div>
        ) : (
          <div className={`grid grid-cols-${bank?.length} gap-4 pt-28`}>
            {bank?.map((bank: any) => (
              <div key={bank.id} className="col-span-1">
                <AccountCard
                  bank_name={bank.bank_name}
                  total_chequing={bank.total_chequing}
                  total_savings={bank.total_savings}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
