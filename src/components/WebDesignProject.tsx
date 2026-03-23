import { motion } from "framer-motion";
import geekseek from "@/assets/geekseek.png";
import daybreakland from "@/assets/daybreakland.png";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    image: daybreakland,
    alt: "Daybreak Land Website",
    title: "Daybreak Land: Live Business Solution",
    description: "Designed and optimized a professional web presence for a real estate investment firm, focusing on clarity, lead capture, and brand trust.",
    link: "https://daybreakland.com/",
  },
  {
    image: geekseek,
    alt: "GeekSeek Capstone Project",
    title: "GeekSeek: Custom Capstone Project",
    description: "A custom-coded project demonstrating my technical BSIT roots and frontend UI/UX proficiency.",
    link: "https://carzk1218.gitlab.io/capstone-1/#",
  },
];

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
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:glow-card transition-shadow"
          >
            <div className="overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
              >
                View Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WebDesignProject;
