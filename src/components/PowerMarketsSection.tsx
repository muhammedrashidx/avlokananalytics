import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import powerImg from "@/assets/power-markets.jpg";

const bullets = [
  "Up to $80k per MW in SPP",
  "Built for site-level economics",
  "Proven across 175 MW of flexible-load sites",
];

const PowerMarketsSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 overflow-hidden"
          >
            <img
              src={(powerImg as any).src ?? (powerImg as unknown as string)}
              alt="Power market analytics"
              className="w-full"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4"
            >
              Power Markets
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Power market optimization for flexible loads
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Our power systems platform maximizes revenue potential for flexible data center loads.
            </motion.p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <Button className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground">
              Get a Demo →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerMarketsSection;

