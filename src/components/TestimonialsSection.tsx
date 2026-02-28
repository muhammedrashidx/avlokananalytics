import { motion } from "framer-motion";

const testimonials = [
  {
    company: "Publicly Traded AI Hyperscaler",
    quote: "Their 7-week turnaround and custom engineering allowed us to scale up GPUs quickly.",
  },
  {
    company: "Satokie Mining",
    quote: "They stepped up and delivered exactly when they said they would.",
  },
  {
    company: "Simple Mining",
    quote: "They've never let us down. They're always there when we need them.",
  },
  {
    company: "Data Center on a Tight Timeline",
    quote:
      "The 3000 kVA padmounts not only arrived on the tight timeline, but we've been satisfied with the quality of the equipment since the site was energized.",
  },
  {
    company: "Modular Data Center in Texas",
    quote:
      "Our electricians let us know multiple times how much they prefer the equipment to anything else they have installed. It's the best packaging and delivery on any single piece of infrastructure we ordered.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4"
        >
          Customer Stories
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Satisfied Customers Across the Country
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 border border-border hover:border-primary/20 transition-colors"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">{t.company}</p>
              <p className="text-foreground/90 leading-relaxed italic">&quot;{t.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

