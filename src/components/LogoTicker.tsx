const logos = ["CoreWeave", "CED", "Energy Transfer", "CleanSpark", "Mustang Cat", "City Electric", "MARA", "Bay Electric"];

const LogoTicker = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center">
            <span className="text-muted-foreground/40 font-mono text-sm uppercase tracking-[0.2em]">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoTicker;

