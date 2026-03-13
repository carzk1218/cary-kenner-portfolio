import { motion } from "framer-motion";
import headshot from "@/assets/headshot.png";

const HeroSection = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-gradient">GoHighLevel Architect:</span>{" "}
          <span className="text-foreground">Precise Systems, Efficient Workflows.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
          Building organized, reliable automation from the ground up. Combining firsthand experience in Real Estate Acquisitions with technical BSIT roots to create workflows that work.
        </p>
        <div className="flex gap-4">
          <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            View Work
          </a>
          <a
            href=https://calendar.app.google/tiWXwJM7D6tmoAtx7
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Book a Call
          </a>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <img
            src={headshot}
            alt="Cary Kenner"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl glow-headshot"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
