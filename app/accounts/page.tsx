import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import AccountCard from "@/components/ui/Cards/accountCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import AddAccountButton from "@/components/ui/addAccountButton";

export default async function Accounts() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="m-6 ml-12 h-screen">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight mb-6">
            Your Accounts
          </h1>
          <AddAccountButton />
        </div>

        <div className="flex items-center justify-center">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <AccountCard />
              </CarouselItem>
              <CarouselItem>
                <AccountCard />
              </CarouselItem>
              <CarouselItem>
                <AccountCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
