"use client";
import { useState, useEffect } from "react";
import AddTransactionButton from "../Buttons/addTransactionButton";
import Transaction from "./transaction";
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

  async function fetchTransactions() {
    const transactions = await getTransactions();
    if (transactions != null) {
      setUsersLast5Transactions(transactions);
    }
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

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
