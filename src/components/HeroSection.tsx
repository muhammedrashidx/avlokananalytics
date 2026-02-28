import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg.src ?? (heroBg as unknown as string)} alt="Energy infrastructure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            Climate‑Intelligent Decision Systems for Resilient Enterprises
          </motion.h1>

          <div className="space-y-6 hero-right-block">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white text-lg leading-relaxed"
            >
              Integrating AI-driven market intelligence with climate risk modelling to power next-generation enterprise decision systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground">
                Request a Pilot
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

