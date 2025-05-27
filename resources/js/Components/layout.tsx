import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/Components/theme-provider";
import { SiteHeader } from "@/Components/site-header";
import { SiteFooter } from "@/Components/site-footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"min-h-screen bg-background font-sans antialiased"}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
