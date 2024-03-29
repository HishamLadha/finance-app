import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/shared/separator";

export default function TransactionsLayout({ children }: any) {
  return (
    <section className="m-2 border-bg-border border-2 rounded-md h-full shadow-xl">
      <NavBar page="accounts" />
      <Separator />
      {children}
    </section>
  );
}
