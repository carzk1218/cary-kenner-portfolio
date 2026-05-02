import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import geekseek from "@/assets/geekseek.png";
import daybreakland from "@/assets/daybreakland.png";
import jollyland from "@/assets/jollylandweb.png";
import realmomentum from "@/assets/realmomentum.png";

const projects = [
  {
    image: jollyland,
    alt: "JollyLand Real Estate Platform",
    title: "JollyLand: Modern Land Solutions",
    stack: "React • Tailwind CSS • Framer Motion",
    description: "A high-conversion real estate platform featuring infinite carousels, automated workflows, and a digital-first approach to land acquisitions.",
    link: "https://jollyland-site.vercel.app/",
  },
  {
    image: realmomentum,
    alt: "Real Momentum SaaS Platform",
    title: "Real Momentum: Real Estate SaaS",
    stack: "HighLevel • CRM Integration • Lead Capturing",
    description: "An all-in-one automation ecosystem designed for real estate agents, featuring high-converting funnels, automated follow-ups, and a centralized lead management engine.",
    link: "https://realmomentum.com/index",
  },
  {
    image: daybreakland,
    alt: "Daybreak Land Website",
    title: "Daybreak Land: Live Business",
    stack: "GoDaddy Builder • Lead Capture",
    description: "A professional web presence for a real estate investment firm, built on GoDaddy's proprietary platform for rapid deployment and reliability.",
    link: "https://daybreakland.com/",
  },
  {
    image: geekseek,
    alt: "GeekSeek Capstone Project",
    title: "GeekSeek: Custom Capstone",
    stack: "HTML5 • CSS3 • JavaScript",
    description: "My technical BSIT roots. A custom-coded project focused on frontend UI/UX proficiency and clean core programming structures.",
    link: "https://carzk1218.gitlab.io/capstone-1/#",
  },
];

const carouselItems = [...projects, ...projects];

const WebDesignProject = () => (
  <section className="py-24 overflow-hidden">
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
        A collection of professional deployments and technical projects showcasing design sensibility and modern development stacks.
      </p>
    </div>

    {/* The outer container no longer has the 'group' class */}
    <div className="relative mask-edges">
      <div className="flex animate-marquee gap-8 py-4">
        {carouselItems.map((project, i) => (
          <div
            key={`${project.title}-${i}`}
            // The 'group' class is now strictly on the card itself
            className="group flex-shrink-0 w-[350px] md:w-[450px] relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl"
          >
            <div className="h-64 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* This overlay now only triggers when its specific parent card is hovered */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8">
                <p className="text-white text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-2">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                  {project.stack}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {project.title}
              </h3>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 w-fit"
              >
                View Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        width: max-content;
        animation: marquee 40s linear infinite;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
      }
      .mask-edges {
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }
    `}</style>
  </section>
);

export default WebDesignProject;
