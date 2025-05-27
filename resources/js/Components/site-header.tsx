import { Link } from "@inertiajs/react";
import { Github } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { ModeToggle } from "@/Components/mode-toggle";
import { MainNav } from "@/Components/main-nav";
import { MobileNav } from "@/Components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-18 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/yourusername/jcc-express-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
