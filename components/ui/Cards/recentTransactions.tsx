import AddTransactionButton from "../Buttons/addTransactionButton";
import Transaction from "./transaction";

export default function RecentTransactions() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">
            Recent Transactions
          </h3>
          <p className="text-sm text-muted-foreground">
            You have made X transactions this month
          </p>
        </div>
        <div className="flex justify-center items-center m-2">
          <AddTransactionButton />
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-8">
          {/* This div below is a transaction element */}
          <Transaction storeName="Osmows" date="DD/MM/YYYY" amount="12.43" />
          <Transaction storeName="Osmows" date="DD/MM/YYYY" amount="12.43" />
          <Transaction storeName="Osmows" date="DD/MM/YYYY" amount="12.43" />
          <Transaction storeName="Osmows" date="DD/MM/YYYY" amount="12.43" />
        </div>
      </div>
    </div>
  );
}
