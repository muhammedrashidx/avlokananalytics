import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", scrollToTop: true },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Knowledge-Partners", href: "#knowledge-partners" },
  { label: "Contact", href: "#contact" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-xl border-b border-zinc-200">
      <div className="max-w-7xl mx-auto section-px flex items-center justify-between h-20">
        <a href="/" className="font-orbitron text-2xl font-bold tracking-tight text-zinc-900">
          AVLOKAN ANALYTICS
        </a>

        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) =>
            "scrollToTop" in item && item.scrollToTop ? (
              <button
                key={item.label}
                type="button"
                onClick={scrollToTop}
                className="px-4 py-3 text-xs font-mono uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-xs font-mono uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            size="sm"
            className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Request a Pilot
          </Button>
        </div>

        <button className="lg:hidden text-zinc-900" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 section-px py-4 space-y-3">
          {navItems.map((item) =>
            "scrollToTop" in item && item.scrollToTop ? (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  scrollToTop();
                  setMobileOpen(false);
                }}
                className="w-full px-2 py-3 text-sm font-mono uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors text-left cursor-pointer block"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="w-full px-2 py-3 text-sm font-mono uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors text-left cursor-pointer block"
              >
                {item.label}
              </a>
            )
          )}
          <div className="flex flex-col gap-2 pt-3 border-t border-zinc-200">
            <Button
              size="sm"
              className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              Request a Pilot
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


