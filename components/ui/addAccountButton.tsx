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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

const addAccountButton = () => {
  const [bank, setBank] = useState("");
  const [chequing, setChequing] = useState(0);
  const [savings, setSavings] = useState(0);

  async function handleSubmit(event: any) {
    event.preventDefault();
    // await supabase.set(...){ name: formData.get("total_chequing")}......
    console.log(bank);
    console.log(chequing);
    console.log(savings);
  }

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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* Large and Major Banks */}
                      <SelectItem value="rbc" onClick={() => setBank("rbc")}>
                        Royal Bank of Canada (RBC)
                      </SelectItem>
                      <SelectItem value="td" onClick={() => setBank("td")}>
                        Toronto-Dominion Bank (TD Bank)
                      </SelectItem>
                      <SelectItem
                        value="scotiabank"
                        onClick={() => setBank("scotiabank")}
                      >
                        Scotiabank (Bank of Nova Scotia)
                      </SelectItem>
                      <SelectItem value="bmo" onClick={() => setBank("bmo")}>
                        Bank of Montreal (BMO)
                      </SelectItem>
                      <SelectItem value="cibc" onClick={() => setBank("cibc")}>
                        Canadian Imperial Bank of Commerce (CIBC)
                      </SelectItem>
                      <SelectItem value="nbc" onClick={() => setBank("nbc")}>
                        National Bank of Canada
                      </SelectItem>
                      {/* Online Banks */}
                      <SelectItem
                        value="tangerine"
                        onClick={() => setBank("tangerine")}
                      >
                        Tangerine
                      </SelectItem>
                      <SelectItem
                        value="simplii"
                        onClick={() => setBank("simplii")}
                      >
                        Simplii Financial
                      </SelectItem>
                      <SelectItem
                        value="eqbank"
                        onClick={() => setBank("eqbank")}
                      >
                        EQ Bank
                      </SelectItem>
                      {/* Regional and Other Notable Banks */}
                      <SelectItem value="atb" onClick={() => setBank("atb")}>
                        ATB Financial
                      </SelectItem>
                      <SelectItem
                        value="desjardins"
                        onClick={() => setBank("desjardins")}
                      >
                        Desjardins Group
                      </SelectItem>
                      <SelectItem
                        value="laurentian"
                        onClick={() => setBank("laurentian")}
                      >
                        Laurentian Bank of Canada
                      </SelectItem>
                      <SelectItem value="hsbc" onClick={() => setBank("hsbc")}>
                        HSBC Canada
                      </SelectItem>
                      <SelectItem
                        value="manulife"
                        onClick={() => setBank("manulife")}
                      >
                        Manulife Bank of Canada
                      </SelectItem>
                      <SelectItem
                        value="alterna"
                        onClick={() => setBank("alterna")}
                      >
                        Alterna Savings and Credit Union
                      </SelectItem>
                      <SelectItem
                        value="motusbank"
                        onClick={() => setBank("motusbank")}
                      >
                        Motusbank
                      </SelectItem>
                      <SelectItem
                        value="wealthone"
                        onClick={() => setBank("wealthone")}
                      >
                        WealthONE Bank of Canada
                      </SelectItem>
                      <SelectItem
                        value="bridgewater"
                        onClick={() => setBank("bridgewater")}
                      >
                        Bridgewater Bank
                      </SelectItem>
                      <SelectItem
                        value="homebank"
                        onClick={() => setBank("homebank")}
                      >
                        Home Bank
                      </SelectItem>
                      <SelectItem
                        value="streetcapital"
                        onClick={() => setBank("streetcapital")}
                      >
                        Street Capital Bank of Canada
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                onChange={(e) => setChequing(parseFloat(e.target.value))}
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
                onChange={(e) => setSavings(parseFloat(e.target.value))}
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
