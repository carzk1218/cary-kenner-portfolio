import { motion } from "framer-motion";
import geekseek from "@/assets/geekseek.png";
import { ExternalLink } from "lucide-react";

const WebDesignProject = () => (
  <section className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gradient mb-4"
      >
        Web Design
      </motion.h2>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Frontend projects showcasing technical proficiency and design sensibility.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group rounded-xl border border-border bg-card overflow-hidden max-w-3xl hover:glow-card transition-shadow"
      >
        <div className="overflow-hidden">
          <img
            src={geekseek}
            alt="GeekSeek UI/UX Project"
            className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">GeekSeek UI/UX Project</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A custom-coded capstone project demonstrating frontend proficiency and technical BSIT foundations.
          </p>
          <a
            href="https://carzk1218.gitlab.io/capstone-1/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            View Live Project <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WebDesignProject;
