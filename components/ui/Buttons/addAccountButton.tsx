"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Buttons/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shared/dialog";
import { Input } from "@/components/ui/shared/input";
import { Label } from "@/components/ui/shared/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/shared/select";
import { AddBankAccount } from "@/app/accounts/addBankAccount";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shared/alert";
import { AlertCircle } from "lucide-react";

const AddAccountButton = () => {
  const [bank, setBank] = useState("nothing");
  const [chequing, setChequing] = useState(0);
  const [savings, setSavings] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);
    // // add a delay of 1 second to simulate the loading stateeee
    // await new Promise((resolve) => setTimeout(resolve, 500));
    setIsError(await AddBankAccount(bank, chequing, savings));
    setIsLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add an Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {isError && (
            <div className="w-[360px] text-left">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>An error occured</AlertTitle>
                <AlertDescription>Try again later.</AlertDescription>
              </Alert>
            </div>
          )}
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
                <Select onValueChange={setBank}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* Large and Major Banks */}
                      <SelectItem value="rbc">
                        Royal Bank of Canada (RBC)
                      </SelectItem>
                      <SelectItem value="td">
                        Toronto-Dominion Bank (TD Bank)
                      </SelectItem>
                      <SelectItem value="scotiabank">
                        Scotiabank (Bank of Nova Scotia)
                      </SelectItem>
                      <SelectItem value="bmo">
                        Bank of Montreal (BMO)
                      </SelectItem>
                      <SelectItem value="cibc">
                        Canadian Imperial Bank of Commerce (CIBC)
                      </SelectItem>
                      <SelectItem value="nbc">
                        National Bank of Canada
                      </SelectItem>
                      {/* Online Banks */}
                      <SelectItem value="tangerine">Tangerine</SelectItem>
                      <SelectItem value="simplii">Simplii Financial</SelectItem>
                      <SelectItem value="eqbank">EQ Bank</SelectItem>
                      {/* Regional and Other Notable Banks */}
                      <SelectItem value="atb">ATB Financial</SelectItem>
                      <SelectItem value="desjardins">
                        Desjardins Group
                      </SelectItem>
                      <SelectItem value="laurentian">
                        Laurentian Bank of Canada
                      </SelectItem>
                      <SelectItem value="hsbc">HSBC Canada</SelectItem>
                      <SelectItem value="manulife">
                        Manulife Bank of Canada
                      </SelectItem>
                      <SelectItem value="alterna">
                        Alterna Savings and Credit Union
                      </SelectItem>
                      <SelectItem value="motusbank">Motusbank</SelectItem>
                      <SelectItem value="wealthone">
                        WealthONE Bank of Canada
                      </SelectItem>
                      <SelectItem value="bridgewater">
                        Bridgewater Bank
                      </SelectItem>
                      <SelectItem value="homebank">Home Bank</SelectItem>
                      <SelectItem value="streetcapital">
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
                Savings Balance
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
              {/* </DialogClose> */}
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAccountButton;
