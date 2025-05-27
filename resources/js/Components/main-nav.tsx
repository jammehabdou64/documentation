import type React from "react";
import { Link } from "@inertiajs/react";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <img src="/logo.png" alt="logo" className="w-36" />
      </Link>
      <nav
        className={cn(
          "flex items-center space-x-6 text-sm font-medium",
          className,
        )}
        {...props}
      >
        <Link
          href="/docs/introduction"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Documentation
        </Link>
        <Link
          href="/docs/components"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Components
        </Link>
        <Link
          href="/examples"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Examples
        </Link>
      </nav>
    </div>
  );
}
