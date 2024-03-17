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

  // // Add a setTimeout to simulate long loading time
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const { data: bank, error: bankError } = await supabase
    .from("bank")
    .select("id, bank_name, total_chequing, total_savings");

  // Ensure bank is treated as an empty array if undefined.
  const banks = bank ?? [];

  return (
    <div>
      <div className="m-6 ml-12 h-screen">
        <div className="flex flex-row items-center justify-between">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">
            Your Accounts
          </h1>
          <AddAccountButton />
        </div>

        {banks?.length === 0 ? (
          <div className="flex justify-center pt-28">
            <h2 className="mb-6 text-4xl font-medium tracking-tight">
              Click the button above to add an account ↗️
            </h2>
          </div>
        ) : (
          <div
            className={`grid grid-cols-${
              banks.length > 3 ? Math.ceil(banks.length / 2) : banks.length
            } gap-6 pt-28`}
          >
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
