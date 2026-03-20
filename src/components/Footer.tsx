import Link from "next/link";
import { Linkedin, Send, Mail, Phone, MapPin } from "lucide-react";

const footerColumns = [
  {
    header: "PRODUCTS",
    links: [
      { label: "Market Signal Intelligence", href: "#" },
      { label: "Decision Dashboards", href: "#" },
      { label: "Climate Risk Module", href: "#" },
      { label: "Enterprise Deployment", href: "#" },
    ],
  },
  {
    header: "PROJECTS",
    links: [
      { label: "Spatial Sentiment Analysis", href: "#" },
      { label: "SAR Based Inundation Mapping", href: "#" },
      { label: "Landuse Impacts-Change Detection", href: "#" },
      { label: "Vulnerability Analysis", href: "#" },
      { label: "Network Analysis", href: "#" },
      { label: "Food Emotion Analysis", href: "#" },
    ],
  },
  {
    header: "KNOWLEDGE PARTNERS",
    links: [
      { label: "Afoozo foods", href: "https://afoozo.com/" },
      { label: "Aurassure Inc", href: "https://aurassure.com/" },
      { label: "Experiqs", href: "https://experiqs.tech/" },
      { label: "WeatherX", href: "https://weatherex.ai/" },
    ],
  },
  {
    header: "COMPANY",
    links: [
      { label: "Product", href: "#" },
      { label: "Projects", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[hsl(0,0%,5%)] border-t border-white/10 overflow-hidden">
      {/* Large background company name watermark */}
      <div
        className="absolute bottom-0 left-0 section-px select-none pointer-events-none font-orbitron text-[clamp(5rem,16vw,12rem)] font-bold tracking-tighter text-white/[0.05] leading-none"
        aria-hidden
      >
        AVLOKAN ANALYTICS
      </div>

      <div className="relative max-w-7xl mx-auto section-px py-16">
        {/* Navigation columns + Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {footerColumns.map((col) => (
            <div key={col.header}>
              <h4 className="relative text-xs font-mono uppercase tracking-widest text-white/60 mb-4 pb-2 w-fit">
                <span className="relative z-10">{col.header}</span>
                <span
                  className="absolute bottom-0 left-0 right-0 h-px bg-white/20"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)" }}
                />
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return isExternal ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {/* Contact details */}
          <div>
            <h4 className="relative text-xs font-mono uppercase tracking-widest text-white/60 mb-4 pb-2 w-fit">
              <span className="relative z-10">CONTACT</span>
              <span
                className="absolute bottom-0 left-0 right-0 h-px bg-white/20"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)" }}
              />
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:avlokananalyticsllp@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-white/60" />
                  avlokananalyticsllp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:aunavalkar@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-white/60" />
                  aunavalkar@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918828468392"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-white/60" />
                  +91 8828468392
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-white/60" />
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-white/50">© 2026 Avlokan Analytics LLP</p>
            <p className="text-xs text-white/50">All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/aniket-navalkar-4805bb3a/?originalSubdomain=in"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:avlokananalyticsllp@gmail.com"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
