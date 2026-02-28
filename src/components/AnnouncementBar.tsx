import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[hsl(0,0%,8%)] py-2.5 text-center border-b border-border">
      <a
        href="#quote"
        className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
      >
        Contractor or distributor? Ask about trade and volume discounts.
        <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  );
};

export default AnnouncementBar;

