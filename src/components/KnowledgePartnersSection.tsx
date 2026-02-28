"use client";

import { motion } from "framer-motion";

const PARTNERS: { slug: string; ext?: string }[] = [
  { slug: "IITB" },
  { slug: "CCS_IITB" },
  { slug: "HDFC", ext: "webp" },
];

const KnowledgePartnersSection = () => {
  return (
    <section id="knowledge-partners" className="overflow-hidden bg-white">
      <div className="py-24 px-6 max-w-7xl mx-auto">
        {/* Same heading style as Products & Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-2">
            <span
              className="flex gap-1 items-end bg-primary p-1 rounded"
              aria-hidden
            >
              <span className="w-2 h-1.5 bg-white/90 rounded-sm" />
              <span className="w-2 h-2 bg-white/90 rounded-sm" />
              <span className="w-2 h-1.5 bg-white/90 rounded-sm" />
            </span>
            <span className="text-neutral-600 font-mono uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Knowledge Partners
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-jetbrains-mono text-3xl md:text-4xl font-bold text-neutral-900 mb-12"
        >
          Knowledge Partners
        </motion.h2>

        {/* Logos in grid: full color, bordered boxes like reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {PARTNERS.map((p, i) => (
            <motion.a
              key={p.slug}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex items-center justify-center min-h-[100px] md:min-h-[120px] p-6 rounded-lg border border-neutral-200 bg-white transition-all duration-300 opacity-90 hover:opacity-100 hover:border-neutral-300 hover:shadow-sm"
            >
              <img
                src={`/partners/${p.slug}.${p.ext ?? "png"}`}
                alt={p.slug.replace(/_/g, " ")}
                className="h-16 md:h-20 w-auto max-w-[180px] object-contain object-center"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgePartnersSection;
