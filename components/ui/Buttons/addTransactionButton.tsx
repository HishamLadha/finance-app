"use client";
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
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shared/alert";
import { AlertCircle, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { AddTransaction } from "@/app/transactions/addTransaction";

interface Errors {
  [key: string]: string | undefined;
  amount?: string;
  date?: string;
  format?: string;
}

const addTransactionButton = () => {
  const [store, setStore] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("None");
  const [date, setDate] = useState("initial");
  const [isSubmitError, setIsSubmitError] = useState("default");
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [store, amount, category, description, date]);

  const validateForm = () => {
    setErrors({});
    let NewErrors: Errors = {};
    if (amount < 0) {
      NewErrors.amount = "Amount cannot be negative";
    }
    if (isNaN(amount)) {
      NewErrors.amountIsString = "Amount must be a number";
    }
    // Check if date is in the format DD/MM/YYYY if it is not the initial value
    if (date != "initial") {
      if (
        date.length !== 10 ||
        date[2] !== "/" ||
        date[5] !== "/" ||
        isNaN(parseInt(date.slice(0, 2))) ||
        isNaN(parseInt(date.slice(3, 5))) ||
        isNaN(parseInt(date.slice(6, 10)))
      ) {
        NewErrors.format = "Date must be in the format DD/MM/YYYY";
      }
    }
    if (parseInt(date.slice(0, 2)) > 31 || parseInt(date.slice(3, 6)) > 12) {
      NewErrors.date = "Invalid date";
    }
    setErrors(NewErrors);
    setIsFormValid(Object.keys(NewErrors).length === 0);
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (isFormValid) {
      setIsLoading(true);
      setIsSubmitError(
        await AddTransaction(store, amount, category, description, date)
      );
      setIsLoading(false);
    } else {
      console.log("Form is not valid");
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Add Transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {Object.keys(errors).length > 0 && (
            <div className="w-[360px] text-left">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>You have the following errors:</AlertTitle>
                {Object.keys(errors).map((key) => (
                  <AlertDescription key={key}>- {errors[key]}</AlertDescription>
                ))}
              </Alert>
            </div>
          )}
          {isSubmitError === "success" && (
            <div className="w-[360px] text-left">
              <Alert variant="default" className="text-sm border-green-500">
                <Check color="#22C55E" className="h-4 w-4" />
                <AlertTitle className="text-green-500">
                  Transaction successfully added
                </AlertTitle>
              </Alert>
            </div>
          )}
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
                onChange={(e) => setStore(e.target.value)}
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
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                placeholder="Food"
                className="col-span-3"
                required
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setDate(e.target.value)}
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

export default addTransactionButton;
