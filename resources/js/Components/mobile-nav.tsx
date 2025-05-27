import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { DocsSidebarNav } from "@/Components/docs-sidebar-nav";
import { docsConfig } from "@/config/docs";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center">
          {/* <span className="font-bold"> */}
          <img src="/logo.png" alt="logo" className="w-36" />

          {/* </span> */}
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link href="/docs/introduction" className="text-muted-foreground">
              Documentation
            </Link>
            <Link href="/docs/components" className="text-muted-foreground">
              Components
            </Link>
            <Link href="/examples" className="text-muted-foreground">
              Examples
            </Link>
          </div>
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
