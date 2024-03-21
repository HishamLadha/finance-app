"use client";
import Link from "next/link";
import { Label } from "@/components/ui/shared/label";
import { Input } from "@/components/ui/shared/input";
import { Button } from "@/components/ui/Buttons/button";
import { useState } from "react";
import { login } from "./login";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shared/alert";
import { AlertCircle } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: any) {
    event.preventDefault();
    setIsLoading(true);
    setIsError(await login(email, password));
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="container flex flex-1 flex-col items-center justify-center gap-4 py-10 text-center">
          <div className="w-full max-w-[400px] space-y-2">
            <h1 className="text-3xl font-bold">Login to your account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Don't have an account? <span> </span>
              <Link className="underline" href="/signup">
                Sign up
              </Link>
            </p>
          </div>
          {isError && (
            <div className="w-[400px] text-left">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Invalid login credentials.</AlertDescription>
              </Alert>
            </div>
          )}
          <form
            className="w-full max-w-[400px] space-y-4"
            onSubmit={handleLogin}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
