import { Navbar } from "@/components/navbar";
import KFooter from "@/components/KFooter/KFooter";
import KScrollToTopButton from "@/components/KScrollToTopButton/KScrollToTopButton";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
        <KFooter />
      </div>
      <KScrollToTopButton />
    </div>
  );
}
