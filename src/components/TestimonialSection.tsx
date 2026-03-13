import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = () => (
  <section id="testimonial" className="py-24">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-border bg-card p-8 md:p-12 relative glow-card"
      >
        <Quote className="w-10 h-10 text-primary/30 mb-6" />
        <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-8">
          "Cary joined Daybreak Land in September 2024 as a Real Estate Acquisitions Specialist. From day one, he didn't just do the job — he re-engineered how the job gets done. He built our entire GoHighLevel system from scratch: every pipeline, every automation, every follow-up sequence. He didn't just move data, he built a high-converting machine from the ground up. His workflows are clean, logical, and ruthlessly efficient. He's a game-changer for any real estate team looking to scale."
        </blockquote>
        <div>
          <p className="font-semibold text-foreground">Ben McKenzie</p>
          <p className="text-sm text-muted-foreground">Owner, Daybreak Land</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
