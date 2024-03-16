"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BankSelect from "./bankSelect";

const addAccountButton = () => {
  async function handleSubmit() {
    event?.preventDefault();
  }

  const [bank, setBank] = useState("");
  const [chequing, setChequing] = useState(0);
  const [savings, setSavings] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add an Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add an Account</DialogTitle>
          <DialogDescription>
            You can add a bank account down below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bank" className="text-right">
                Bank
              </Label>
              <div className="col-span-3">
                <BankSelect />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="total_chequing" className="text-right">
                Chequing Balance
              </Label>
              <Input
                id="total_chequing"
                placeholder="$3000"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="total_savings" className="text-right">
                Chequing Balance
              </Label>
              <Input
                id="total_savings"
                placeholder="$2000"
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
  );
};

export default addAccountButton;
