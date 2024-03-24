import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/shared/separator";

export default function TransactionsLayout({ children }: any) {
  return (
    // styles that have been removed: m-2 border-bg-border border-2 rounded-md h-screen shadow-xl
    <section className="">
      <NavBar page="transactions" />
      <Separator />
      {children}
      <Footer />
    </section>
  );
}
