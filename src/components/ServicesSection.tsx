import { motion } from "framer-motion";
import marketsignaImgl from "@/assets/market-signal.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import climateriskImg from "@/assets/climaterisk.jpg";
import enterpriseImg from "@/assets/enterprise.jpg";
const services = [
  {
    title: "Market Signal Intelligence",
    description:
      "NLP pipelines extracting sentiment, demand signals, and operational insights from unstructured data.",
    link: "Learn more",
    image: marketsignaImgl,
    stats: [],
  },
  {
    title: "Decision Dashboards",
    description:
      "Workflow-integrated analytics with forecasting and scenario simulation.",
    link: "Learn more",
    image: dashboardImg,
    stats: [],
  },
  {
    title: "Climate Risk Module",
    description:
      "Hazard modelling, disruption simulation, and resilience benchmarking integrated into business workflows.",
    link: "Learn more",
    image: climateriskImg,
    stats: [],
  },
  {
    title: "Enterprise Deployment",
    description:
      "Custom PoCs, modular subscriptions, and long-term enterprise partnerships.",
    link: "Learn more",
    image: enterpriseImg,
    stats: [],
  },
];

const ServicesSection = () => {
  return (
    <section id="products" className="relative overflow-hidden">
      {/* Split background: white top ~45%, black bottom ~55% */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 45%, #000000 45%, #000000 100%)",
        }}
      />
      <div className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        {/* Title area on white */}
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

        {/* Cards on black */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group services-card-clip bg-neutral-800 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={(service.image as any).src ?? (service.image as unknown as string)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="p-6 space-y-3 bg-neutral-800">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{service.description}</p>
                {service.stats.length > 0 && (
                  <div className="flex gap-4 pt-2">
                    {service.stats.map((stat) => (
                      <span key={stat} className="text-xs font-mono text-primary">
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
                <a href="#" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline pt-2">
                  {service.link}
                  <span className="inline-block">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

