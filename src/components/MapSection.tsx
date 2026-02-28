import { motion } from "framer-motion";
import { Building2, Factory, MapPin } from "lucide-react";

const locations = [
  { name: "Charleston", type: "Office", icon: Building2 },
  { name: "Houston", type: "Factory", icon: Factory },
  { name: "Houston", type: "Office", icon: Building2 },
  { name: "Long Beach", type: "Factory", icon: Factory },
  { name: "San Francisco", type: "Office", icon: Building2 },
];

const projects = [
  { name: "Able", mw: "40 MW" },
  { name: "Manning", mw: "19 MW" },
  { name: "Wallis", mw: "20 MW" },
  { name: "Stockton", mw: "10 MW" },
  { name: "Lavon", mw: "40 MW" },
  { name: "Brazoria", mw: "17 MW" },
  { name: "Mustang", mw: "20 MW" },
  { name: "Wildcat", mw: "10 MW" },
  { name: "Jimmy", mw: "10 MW" },
  { name: "Macalester", mw: "20 MW" },
];

const MapSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-widest text-accent mb-4"
        >
          American Innovation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Expanding the grid across the U.S.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mb-12"
        >
          Our vertically integrated approach powers factories, offices, and energized sites around the country.
        </motion.p>

        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Offices &amp; Factories</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {locations.map((loc, i) => (
              <motion.div
                key={`${loc.name}-${loc.type}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-secondary p-4 border border-border"
              >
                <loc.icon className="h-4 w-4 text-muted-foreground mb-2" />
                <p className="font-semibold text-sm">{loc.name}</p>
                <p className="text-xs text-muted-foreground">{loc.type}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Projects</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {projects.map((site, i) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-secondary p-4 border border-border hover:border-primary/30 transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary mb-2" />
                <p className="font-semibold text-sm">{site.name}</p>
                <p className="text-sm text-primary font-mono">{site.mw}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

