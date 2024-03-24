"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/Buttons/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shared/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  store: string;
  category: string;
  transaction_date: string;
  logo_url: string;
  description: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "store", // Assuming this is the key for the store name in your data
    header: "Store Name",
    cell: (info) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={info.row.original.logo_url as string}
          alt={info.row.original.store as string}
          style={{ width: 30, height: 30, marginRight: 10 }}
          width={30}
          height={30}
        />
        {info.getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: "transaction_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      const dateStr = getValue() as string; // Assuming transaction_date is in the format "YYYY-MM-DD"
      const dateObj = new Date(dateStr);
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
        dateObj
      );
      return formattedDate; // This will be something like "1 Mar 2024"
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CAD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Have to use the payment.id from the payment variable above */}
            <DropdownMenuItem disabled>Edit Transaction</DropdownMenuItem>
            <DropdownMenuItem disabled>Delete Transaction</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
