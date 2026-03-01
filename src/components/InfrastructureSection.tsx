"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
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
    title: "Spatial Sentiment Analysis",
    description:
      "Geospatial NLP and sentiment mapping for supply chain and climate signals.",
    image: spatial_sentimentImg,
  },
  {
    title: "SAR Based Inundation Mapping",
    description:
      "SAR Based Inundation Mapping",
    image: SARImg,
  },
  {
    title: "Landuse Impacts-Change Detection",
    description:
      "Landuse Impacts-Change Detection",
    image: LanduseImg,
  },
  {
    title: "Vulnerability Analysis",
    description: "Vulnerability Analysis",
    image: vulnerabilityImg,
  },
  {
    title: "Network Analysis",
    description: "Network Analysis",
    image: networkanalysisImg,
  },
  {
    title: "Food Emotion Analysis",
    description: "Food Emotion Analysis",
    image: foodsentimentImg,
  }
  
];

const SLIDES_DESKTOP = 3;
const MOBILE_BREAKPOINT = 768;

const InfrastructureSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

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
                Research Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm text-neutral-600 max-w-xl leading-relaxed"
              >
                We develop climate-intelligent decision support systems that integrate advanced analytics, supply chain intelligence, and hazard risk modeling to build resilient enterprises and public systems.
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

      {/* Bottom part: full-width image gallery; mobile: 1 slide + taller height, desktop: 3 slides */}
      <div className="bg-neutral-950 relative">
        <div className="overflow-hidden min-h-[55vh] md:min-h-0">
          <motion.div
            className="flex flex-nowrap h-full"
            style={{ width: `${(100 * products.length) / slidesToShow}%` }}
            animate={{
              x: `-${(100 * slideIndex) / products.length}%`,
            }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
          >
            {products.map((product, i) => (
              <div
                key={`${product.title}-${i}`}
                className="flex-shrink-0 overflow-hidden h-full"
                style={{ width: `${100 / products.length}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative w-full h-full min-h-[55vh] md:min-h-0 overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                  whileHover={{ scaleX: 1.04, scaleY: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <img
                    src={(product.image as any).src ?? (product.image as unknown as string)}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Left / Right arrows */}
        {products.length > slidesToShow && (
          <>
            <button
              type="button"
              onClick={goPrev}
              disabled={slideIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={slideIndex >= maxIndex}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default InfrastructureSection;
