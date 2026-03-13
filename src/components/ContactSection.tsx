import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container text-center max-w-xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gradient mb-4"
      >
        Let's Build Something
      </motion.h2>
      <p className="text-muted-foreground mb-8">
        Ready to streamline your systems? Let's talk about what precision automation can do for your business.
      </p>
      <a
        href="https://calendar.app.google/tiWXwJM7D6tmoAtx7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Book a Call
      </a>
    </div>
  </section>
);

export default ContactSection;
