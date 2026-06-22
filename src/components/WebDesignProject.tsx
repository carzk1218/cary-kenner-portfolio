import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import geekseek from "@/assets/geekseek.png";
import daybreakland from "@/assets/daybreakland.png";
import jollyland from "@/assets/jollylandweb.png";
import realmomentum from "@/assets/realmomentum.png";
import xevaventures from "@/assets/xevaventures.png";
import acuforsyth from "@/assets/acuforsyth.png";
import createclients from "@/assets/createclients.png";
import fabcoach from "@/assets/fab.coach.png";

const projects = [
  {
    image: acuforsyth,
    alt: "Shanghai Acupuncture Clinic Website",
    title: "Shanghai Acupuncture Clinic",
    stack: "HighLevel • Custom HTML/CSS",
    description:
      "A professional healthcare web presence built within HighLevel, utilizing custom HTML and CSS to deliver a tailored, serene user experience for acupuncture patients.",
    link: "https://acuforsyth.com/",
  },
  {
    image: createclients,
    alt: "Create Clients Marketing Website",
    title: "Create Clients",
    stack: "HighLevel • Custom HTML/CSS",
    description:
      "A dynamic digital agency site deployed on HighLevel, focusing on lead generation and conversion through bespoke frontend modifications.",
    link: "https://createclients.com/",
  },
  {
    image: xevaventures,
    alt: "Xeva Ventures Tax Strategy Website",
    title: "Xeva Ventures Tax Strategy",
    stack: "HighLevel • Custom HTML/CSS",
    description:
      "A sophisticated corporate financial site for modern tax strategy, leveraging HighLevel core features combined with custom code for branding consistency.",
    link: "https://www.xevaventures.com/",
  },
  {
    image: fabcoach,
    alt: "Fab.Coach Coaching Platform Website",
    title: "Fab.Coach",
    stack: "HighLevel • Custom HTML/CSS",
    description:
      "A premium coaching landing page designed on the HighLevel platform, enhanced with CSS overrides to create a distinct, high-end visual brand presentation.",
    link: "https://fab.coach/",
  },
  {
    image: jollyland,
    alt: "JollyLand Real Estate Platform",
    title: "JollyLand: Modern Land Solutions",
    stack: "React • Tailwind CSS • Framer Motion",
    description:
      "A high-conversion real estate platform featuring infinite carousels, automated workflows, and a digital-first approach to land acquisitions.",
    link: "https://jollyland-site.vercel.app/",
  },
  {
    image: realmomentum,
    alt: "Real Momentum SaaS Platform",
    title: "Real Momentum: Real Estate SaaS",
    stack: "HighLevel • CRM Integration • Lead Capturing",
    description:
      "An all-in-one automation ecosystem designed for real estate agents, featuring high-converting funnels, automated follow-ups, and a centralized lead management engine.",
    link: "https://realmomentum.com/index",
  },
  {
    image: daybreakland,
    alt: "Daybreak Land Website",
    title: "Daybreak Land: Live Business",
    stack: "GoDaddy Builder • Lead Capture",
    description:
      "A professional web presence for a real estate investment firm, built on GoDaddy's proprietary platform for rapid deployment and reliability.",
    link: "https://daybreakland.com/",
  },
  {
    image: geekseek,
    alt: "GeekSeek Capstone Project",
    title: "GeekSeek: Custom Capstone",
    stack: "HTML5 • CSS3 • JavaScript",
    description:
      "My technical BSIT roots. A custom-coded project focused on frontend UI/UX proficiency and clean core programming structures.",
    link: "https://carzk1218.gitlab.io/capstone-1/#",
  },
];

const carouselItems = [...projects, ...projects];

const WebDesignProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateLoop = () => {
      if (!isDown.current && !isHovered.current) {
        container.scrollLeft += 0.8;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(updateLoop);
    };

    animationRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDown.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    isHovered.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const container = containerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }

    let newScrollLeft = scrollLeft.current - walk;
    const halfWidth = container.scrollWidth / 2;

    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      startX.current = x;
      scrollLeft.current = newScrollLeft;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += halfWidth;
      startX.current = x;
      scrollLeft.current = newScrollLeft;
    }

    container.scrollLeft = newScrollLeft;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    isDown.current = true;
    hasMoved.current = false;
    startX.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDown.current) return;
    const container = containerRef.current;
    if (!container) return;

    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }

    let newScrollLeft = scrollLeft.current - walk;
    const halfWidth = container.scrollWidth / 2;

    if (newScrollLeft >= halfWidth) {
      newScrollLeft -= halfWidth;
      startX.current = x;
      scrollLeft.current = newScrollLeft;
    } else if (newScrollLeft <= 0) {
      newScrollLeft += halfWidth;
      startX.current = x;
      scrollLeft.current = newScrollLeft;
    }

    container.scrollLeft = newScrollLeft;
  };

  return (
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
          A collection of professional deployments and technical projects
          showcasing design sensibility and modern development stacks.
        </p>
      </div>

      <div className="relative mask-edges">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseOver={() => { isHovered.current = true; }}
          className="flex gap-8 py-4 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing w-full"
        >
          {carouselItems.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="group flex-shrink-0 w-[350px] md:w-[450px] relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    (project.title === "Shanghai Acupuncture Clinic" || project.title === "Create Clients") 
                    ? "object-[left_center]" 
                    : "object-top"
                  }`}
                  draggable={false}
                />

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
                  onClick={(e) => {
                    if (hasMoved.current) {
                      e.preventDefault();
                    }
                  }}
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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default WebDesignProject;
