"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Transaction from "./transaction";

export default function recentTransactions() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log("hello");
  }

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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Add Transaction</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Transaction</DialogTitle>
                <DialogDescription>
                  You can add a transaction down below.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="store" className="text-right">
                      Store
                    </Label>
                    <Input
                      id="store"
                      required
                      placeholder="Walmart"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                      Amount ($)
                    </Label>
                    <Input
                      id="amount"
                      placeholder="100"
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Input
                      id="category"
                      placeholder="food"
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="description"
                      placeholder="Groceries for the next 2 weeks"
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input
                      id="date"
                      placeholder="DD/MM/YYYY"
                      className="col-span-3"
                      required
                    />
                  </div>
                  <DialogFooter>
                    {/* Can potentially add functionality with a state variable that hides the button below after submit has happened and shows another button to close the dialog box */}
                    {/* <DialogClose asChild> */}
                    <Button type="submit">Submit</Button>
                    {/* </DialogClose> */}
                  </DialogFooter>
                </div>
              </form>
            </DialogContent>
          </Dialog>
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
