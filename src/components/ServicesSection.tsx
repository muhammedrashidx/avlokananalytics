import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import marketsignaImgl from "@/assets/market-signal.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import climateriskImg from "@/assets/climaterisk.jpg";
import enterpriseImg from "@/assets/enterprise.jpg";

const services = [
  {
    title: "Market Signal Intelligence",
    caption: "Unlock your business potential",
    description:
      "We collect and analyse information from news, social media, and reports to help you see changes in demand, customer sentiment, and market trends early. This helps you take faster and more confident business decisions.",
    link: "Learn more",
    image: marketsignaImgl,
    stats: [],
  },
  {
    title: "Climate Risk Assessment",
    caption: "Spatially map hazard risk and impact on infrastructure systems",
    description:
      "Hazard modelling, disruption simulation, risk assessment, and resilience benchmarking are integrated into business workflows and supply chain assessments. We aim to help businesses improve their operational efficiency.",
    link: "Learn more",
    image: climateriskImg,
    stats: [],
  },
  {
    title: "Decision Dashboards",
    caption: "Analytics, forecasts, and climatic risk info in one place",
    description:
      "Easy-to-use dashboards that show sales trends, supply chain performance, and climate-related risks clearly. View forecasts, track operations, and plan better — all customised to your business needs. Ideal for food companies, supply chain businesses, and FMCG firms that want simple, clear, and practical insights.",
    link: "Learn more",
    image: dashboardImg,
    stats: [],
  },
  {
    title: "Proof of Concepts (PoCs)",
    caption: "Innovation that drives business",
    description:
      "We collaborate with companies to build practical solutions that strengthen supply chains, reduce climate-related risks, and transform complex data into actionable insights.",
    link: "Learn more",
    image: enterpriseImg,
    stats: [],
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="products" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #ffffff 45%, #000000 45%, #000000 100%)",
        }}
      />

      <div className="relative z-10 py-24 section-px max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-2">
            <span
              className="grid grid-cols-2 gap-0.5 p-1 rounded bg-primary"
              aria-hidden
            >
              <span className="w-2 h-2 bg-white/90 rounded-sm" />
              <span className="w-2 h-2 bg-white/90 rounded-sm" />
              <span className="w-2 h-2 bg-white/90 rounded-sm" />
              <span className="w-2 h-2 bg-white/90 rounded-sm" />
            </span>
            <span className="text-neutral-600 font-mono uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Products
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-jetbrains-mono text-3xl md:text-4xl font-bold text-neutral-900 mb-16"
        >
          Products & Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group services-card-clip bg-neutral-800 overflow-hidden self-start"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={
                    (service.image as any).src ??
                    (service.image as unknown as string)
                  }
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>

              <div className="p-6 space-y-3 bg-neutral-800">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                {service.caption && (
                  <p className="text-sm text-neutral-400 leading-relaxed italic">
                    {service.caption}
                  </p>
                )}

                <AnimatePresence initial={false} mode="wait">
                  {openIndex === i && (
                    <motion.div
                      key={`content-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {service.description}
                        </p>

                        {service.stats.length > 0 && (
                          <div className="flex gap-4 pt-2">
                            {service.stats.map((stat) => (
                              <span
                                key={stat}
                                className="text-xs font-mono text-primary"
                              >
                                {stat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => handleToggle(i)}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline pt-2"
                >
                  {openIndex === i ? "Show less" : service.link}
                  <span className="inline-block">↗</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;