import Link from "next/link";
import { Label } from "@/components/ui/shared/label";
import { Input } from "@/components/ui/shared/input";
import { Button } from "@/components/ui/Buttons/button";

export default function SignUp() {
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
          <div className="w-full max-w-[400px] space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="johndoe@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
