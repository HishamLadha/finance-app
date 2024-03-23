"use client";
import { useState, useEffect } from "react";
import AddTransactionButton from "../Buttons/addTransactionButton";
import Transaction from "./transaction";
import { RefreshCcw } from "lucide-react";
import { getTransactions } from "@/app/transactions/getTransactions";

interface Transaction {
  amount: any;
  store: any;
  transaction_date: string; // Assuming the date is stored as a string
}
export default function RecentTransactions() {
  const [usersLast5Transactions, setUsersLast5Transactions] = useState<
    Transaction[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTransactions() {
    setIsLoading(true);
    const transactions = await getTransactions();
    if (transactions != null) {
      setUsersLast5Transactions(transactions);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="pl-6 pt-8">
            <button
              onClick={fetchTransactions}
              className={isLoading ? "animate-spin" : ""}
            >
              <RefreshCcw size={20} />
            </button>
          </div>
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Recent Transactions
            </h3>
            <p className="text-sm text-muted-foreground">
              X transactions this month
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center m-3">
          <AddTransactionButton />
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-8">
          {/* This div below is a transaction element */}
          {usersLast5Transactions.map((transaction: Transaction, index) => {
            return (
              <Transaction
                key={index}
                storeName={transaction.store}
                date={transaction.transaction_date}
                amount={transaction.amount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
