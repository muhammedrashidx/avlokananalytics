"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import spatial_sentimentImg from "@/assets/Spatial_Sentiment_Analysis.jpg";
import SARImg from "@/assets/SAR_based_inundation_mapping.png";
import LanduseImg from "@/assets/LanduseImpacts_ChangeDetection.png";
import vulnerabilityImg from "@/assets/vulnerability_analysis.png";
import networkanalysisImg from "@/assets/Network_Analysis.png";
import foodsentimentImg from "@/assets/food_emotion.png";
const features = [
  "Advanced analytics & supply chain intelligence",
  "Hazard & climate risk modeling",
  "Resilient enterprise & public systems",
  "Vulnerability analysis",
];

const products = [
  {
    title: "Sentiment Analysis for Flood Detection",
    description:
      "We have developed NLP algorithms that can detect flooding locations through twitter feeds.",
    image: spatial_sentimentImg,
  },
  {
    title: "Flood mapping and modelling",
    description:
      "We can develop high quality flood maps using HEC-RAS software and Satellite data.",
    image: SARImg,
  },
  {
    title: "Land use change detection",
    description:
      "We develop high-quality land use maps and detect the change in land cover arising from various infrastructure projects.",
    image: LanduseImg,
  },
  {
    title: "Risk and vulnerability mapping",
    description:
      "We specialize in the assessment of risk from natural hazards and climatic extremities, particularly on urban infrastructure.",
    image: vulnerabilityImg,
  },
  {
    title: "Network Analysis for supply chain and transportation.",
    description:
      "We are involved in developing techniques to measure the disruption in transportation and supply chain networks from hazards, and work towards resilience planning solutions.",
    image: networkanalysisImg,
  },
  {
    title: "Food emotion & customer feedback analytics",
    description:
      "We enhance existing dashboards and ERP systems by integrating customer sentiment, climate, and feedback data to enable faster, more informed decision making.",
    image: foodsentimentImg,
  }
  
];

const SLIDES_DESKTOP = 3;
const MOBILE_BREAKPOINT = 768;

const InfrastructureSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setSlidesToShow(mq.matches ? SLIDES_DESKTOP : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, products.length - slidesToShow);

  const goPrev = () => setSlideIndex((i) => Math.max(0, i - 1));
  const goNext = () => setSlideIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="projects" className="overflow-hidden">
      {/* Top part: white background - use SAME wrapper as ServicesSection for exact alignment */}
      <div className="bg-white">
        <div className="py-24 section-px max-w-7xl mx-auto">
          {/* Top content: heading left, features right */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Brand, heading, paragraph - identical container to Products & Services */}
            <div>
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
                    <span className="w-1.5 h-3 bg-white/90 rounded-sm" />
                    <span className="w-1.5 h-4 bg-white/90 rounded-sm" />
                    <span className="w-1.5 h-2 bg-white/90 rounded-sm" />
                  </span>
                  <span className="text-neutral-600 font-mono uppercase tracking-[0.2em] text-[10px] md:text-xs">
                    Projects
                  </span>
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-jetbrains-mono text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
              >
                Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm text-neutral-600 max-w-xl leading-relaxed"
              >
                We develop climate-intelligent decision support systems that integrate advanced analytics, supply chain intelligence, and hazard risk modeling to build resilient enterprises and public systems.
                <br />
                <br />
                Following is the synopsis of our projects/research.
              </motion.p>
            </div>

            {/* Right: Feature list - line above, unfilled circle ticks */}
            <div className="lg:pl-4">
              <div className="border-t border-neutral-200 pt-4 w-full max-w-sm lg:ml-auto">
                <ul className="flex flex-col gap-3">
                  {features.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-[11px] font-medium text-neutral-600 uppercase tracking-wider leading-snug"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary stroke-[2.5]" />
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom part: modern image gallery with gaps and hover popup */}
      <div className="bg-neutral-950 relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto section-px">
          <div className="relative overflow-hidden min-h-[55vh] md:min-h-0 rounded-2xl">
            <motion.div
              className="flex flex-nowrap h-full relative z-0"
              style={{ width: `${(100 * products.length) / slidesToShow}%` }}
              animate={{
                x: `-${(100 * slideIndex) / products.length}%`,
              }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            >
              {products.map((product, i) => (
                <div
                  key={`${product.title}-${i}`}
                  className="flex-shrink-0 h-full px-2 md:px-3"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={() => setOpenModalIndex(i)}
                    className="group relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl min-h-[55vh] md:min-h-[320px] text-left cursor-pointer"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 p-2">
                      <img
                        src={
                          (product.image as any).src ??
                          (product.image as unknown as string)
                        }
                        alt={product.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                    <span className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white/95 drop-shadow-lg">
                      {product.title}
                    </span>
                  </motion.button>
                </div>
              ))}
            </motion.div>

            {/* Left / Right arrows (side-positioned) */}
            {products.length > slidesToShow && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={slideIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-primary border border-white/30 hover:border-primary text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={slideIndex >= maxIndex}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-primary border border-white/30 hover:border-primary text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal: click to open, close button + outside click to close */}
      <AnimatePresence>
        {openModalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 cursor-pointer"
            onClick={() => setOpenModalIndex(null)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl cursor-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={products[openModalIndex]?.title}
            >
              {/* Image container - full image contained */}
              <div className="flex-1 min-h-0 flex items-center justify-center bg-neutral-100 p-6">
                <img
                  src={
                    (products[openModalIndex]?.image as any)?.src ??
                    (products[openModalIndex]?.image as unknown as string)
                  }
                  alt={products[openModalIndex]?.title ?? ""}
                  className="max-w-full max-h-[50vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Content: title + full description */}
              <div className="p-6 border-t border-neutral-200 space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  {products[openModalIndex]?.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {products[openModalIndex]?.description}
                </p>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpenModalIndex(null)}
                className="absolute right-3 top-3 h-10 w-10 rounded-full bg-white/90 hover:bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InfrastructureSection;
