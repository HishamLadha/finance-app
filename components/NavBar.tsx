import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  Gauge,
  Receipt,
  FileSpreadsheet,
  PieChart,
  Landmark,
  CreditCard,
  Keyboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  return (
    <nav className="p-2 flex justify-between items-center">
      <div className="flex justify-between space-x-6 ml-5">
        <a
          className="text-sm font-medium transition-colors hover:text-primary"
          href="/dashboard"
        >
          Dashboard
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/transactions"
        >
          Transactions
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/accounts"
        >
          Accounts
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/budgets"
        >
          Budgets
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/spending"
        >
          Spending
        </a>
      </div>

      {/* The logic for the avatar will be updated based on the users profile and
      stuff..... */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="pt-1.5 pb-0">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuLabel className="font-normal text-xs pt-0 pb-0.5 text-gray-500">
            testemail@test.com
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default NavBar;
