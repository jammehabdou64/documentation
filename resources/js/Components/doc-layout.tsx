import { DocsSidebarNav } from "@/Components/docs-sidebar-nav";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { docsConfig } from "@/config/docs";
import { ThemeProvider } from "./theme-provider";
import { Link } from "@inertiajs/react";

const DocLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"min-h-screen bg-background font-sans antialiased"}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex-1 container mx-auto md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 ">
          <aside className="fixed top-0 z-30 hidden h-[100vh] w-full shrink-0 border-r md:sticky md:block">
            <div>
              <Link href={"/"}>
                <img src="/logo.png" alt="logo" className="w-32" />
              </Link>
            </div>

            <ScrollArea className="h-full pr-6 pb-40 ">
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </ScrollArea>
          </aside>
          <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0">
              <div className="pb-12 py-4">{children}</div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default DocLayout;
