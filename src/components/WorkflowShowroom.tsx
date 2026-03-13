import { motion } from "framer-motion";
import followup from "@/assets/followup-nudge.png";
import nurture from "@/assets/nurture-sequence.png";
import pipeline from "@/assets/pipeline-automation.png";
import routing from "@/assets/pipeline-routing.png";

const cards = [
  { img: followup, title: "Multi-Channel Follow-up Nudge", desc: "A precision-timed sequence to ensure consistent lead engagement without manual effort." },
  { img: nurture, title: "Structured Nurture Sequence", desc: "A methodical workflow designed to build trust and maintain long-term lead contact." },
  { img: pipeline, title: "Real Estate Pipeline Management", desc: "Systems built from firsthand acquisitions experience to keep leads organized and data-driven." },
  { img: routing, title: "Efficient Pipeline Routing", desc: "Advanced logic to ensure every lead is directed to the right stage or team member instantly." },
];

const WorkflowShowroom = () => (
  <section id="work" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gradient mb-4"
      >
        The Workflow Showroom
      </motion.h2>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Precision-engineered GoHighLevel automations built for real estate teams.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card overflow-hidden hover:glow-card transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkflowShowroom;
