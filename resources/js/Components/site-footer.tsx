import { Link } from "@inertiajs/react";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ for learning purposes. Not recommended for production
          use.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/docs/introduction"
            className="text-sm text-muted-foreground hover:underline"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/yourusername/jcc-express-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
