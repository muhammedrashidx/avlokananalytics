import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={(ctaBg as any).src ?? (ctaBg as unknown as string)}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Let&apos;s build what&apos;s next together.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Request a Pilot
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-mono text-xs uppercase tracking-widest border-muted-foreground/30 text-foreground hover:bg-muted"
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

