"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shared/avatar";

import { CreditCard, Keyboard, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/shared/dropdown-menu";

import { createClient } from "@/lib/supabase/client";
import { useCallback, useEffect, useState } from "react";

export default function NavBar({ page }: any) {
  const supabase = createClient();

  const [email, setEmail] = useState<string | null>(null);

  const getProfile = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data.user) {
      setEmail(data.user.email || null);
    }
  };

  useEffect(() => {
    getProfile();
  });

  // const getProfile = async () => {
  //   const { data, error } = await supabase.auth.getUser();
  //   if (data.user) {
  //     setEmail(data.user.email || null);
  //   }
  // };

  return (
    <nav className="p-2 flex justify-between items-center">
      <div className="flex justify-between space-x-6 ml-5">
        <a
          className={`text-sm font-medium ${
            page === `dashboard` ? "" : "text-muted-foreground"
          } transition-colors hover:text-primary`}
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          className={`text-sm font-medium ${
            page === `transactions` ? "" : "text-muted-foreground"
          } transition-colors hover:text-primary`}
          href="/transactions"
        >
          Transactions
        </a>
        <a
          className={`text-sm font-medium ${
            page === `accounts` ? "" : "text-muted-foreground"
          } transition-colors hover:text-primary`}
          href="/accounts"
        >
          Accounts
        </a>
        <a
          className={`text-sm font-medium ${
            page === `budgets` ? "" : "text-muted-foreground"
          } transition-colors hover:text-primary`}
          href="/budgets"
        >
          Budgets
        </a>
        <a
          className={`text-sm font-medium ${
            page === `spending` ? "" : "text-muted-foreground"
          } transition-colors hover:text-primary`}
          href="/spending"
        >
          Spending
        </a>
      </div>

      {/* The logic for the avatar will be updated based on the users profile and
      stuff..... */}
      <DropdownMenu>
        <button onClick={getProfile}>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
        </button>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="pt-1.5 pb-0">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuLabel className="font-normal text-xs pt-0 pb-0.5 text-gray-500">
            {email ? email : "Unable to retrieve information"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <form action="/auth/signout" method="post">
            <button type="submit" className="w-full hover:">
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
