import { motion } from "framer-motion";

const WorkflowShowroom = () => {
  return (
    <section id="showroom" className="py-24 bg-secondary/10 border-t border-border">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Workflow Showroom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See my GHL Real Estate automation in action. This walkthrough covers lead intake, 
            automated calculators, and long-term nurture sequences.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/pgAn3cSni9U"
            title="GHL Real Estate Workflow"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowShowroom;
