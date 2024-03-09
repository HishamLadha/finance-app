"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {}

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
          <div className="w-full max-w-[400px] space-y-4">
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
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
