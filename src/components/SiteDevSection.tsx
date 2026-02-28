import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import siteImg from "@/assets/site-aerial.jpg";

const SiteDevSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4"
            >
              Site Origination &amp; Development
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Experienced site developers with MWs.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              We develop and operate MW-ready data center sites through our integrated supply chain and general contractor
              teams.
            </motion.p>

            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold">
                  175 <span className="text-lg text-muted-foreground">MWs</span>
                </p>
                <p className="text-sm text-muted-foreground">Data centers built</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">MWs Pipeline</p>
              </div>
            </div>

            <Button className="font-mono text-xs uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground">
              Site Development &amp; Origination →
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <img
              src={(siteImg as any).src ?? (siteImg as unknown as string)}
              alt="Aerial site view"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SiteDevSection;

