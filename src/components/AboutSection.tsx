import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gradient mb-6"
      >
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground leading-relaxed"
      >
        <p>
          I'm Cary Kenner a GoHighLevel architect with a background that bridges technology and real estate. I hold a <span className="text-foreground font-medium">Bachelor of Science in Information Technology (BSIT)</span>, which gave me strong foundations in frontend and backend development, systems architecture, and logical problem-solving.
        </p>
        <p>
          My approach is rooted in precision and organization. Every workflow I build is methodical, documented, and designed for reliability. I combine my firsthand experience in Real Estate Acquisitions with technical roots to create automation systems that don't just run, they perform.
        </p>
        <p>
          I believe in doing things right the first time: clean pipelines, consistent follow-ups, and zero guesswork. If it can be automated and optimized, I'll build it that way.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
