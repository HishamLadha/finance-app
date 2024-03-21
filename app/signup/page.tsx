"use client";

import Link from "next/link";
import { Label } from "@/components/ui/shared/label";
import { Input } from "@/components/ui/shared/input";
import { Button } from "@/components/ui/Buttons/button";
import { useState } from "react";
import { signup } from "./signup";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shared/alert";
import { AlertCircle } from "lucide-react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Types of errors are: "", "duplicate", "general"
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUp(event: any) {
    event.preventDefault();
    setIsLoading(true);
    setIsError(await signup(firstName, lastName, email, password));
    setIsLoading(false);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container flex flex-1 flex-col items-center justify-center gap-4 py-10 text-center">
          <div className="w-full max-w-[400px] space-y-2">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account? <span> </span>
              <Link className="underline" href="/login">
                Log in
              </Link>
            </p>
          </div>
          {isError && (
            <div className="w-[400px] text-left">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {isError === "general"
                    ? "Something went wrong."
                    : "This account already exists."}
                </AlertDescription>
              </Alert>
            </div>
          )}
          <form
            className="w-full max-w-[400px] space-y-4"
            onSubmit={handleSignUp}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="First"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Last"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="email@example.com"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password (minimum 6 characters)</Label>
              <Input
                id="password"
                placeholder="******"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "Sign Up"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
