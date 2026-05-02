import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, CheckCircle, X } from "lucide-react";

const testimonials = [
  {
    id: "ben",
    name: "Ben McKenzie",
    role: "Owner, Daybreak Land",
    quote: "Cary joined Daybreak Land as a Real Estate Acquisitions Specialist. From day one, he didn't just do the job, he re-engineered how the job gets done. He built our entire GoHighLevel system from scratch: every pipeline, every automation, every follow-up sequence. He's a game-changer for any real estate team looking to scale.",
    proofImage: "/testimonials/bentesti.png"
  },
  {
    id: "ophir",
    name: "Ophir Adar",
    role: "Owner, Real Momentum",
    quote: "I appreciate all you have done in such a short period with zero onboarding or training. It was great work.",
    proofImage: "/testimonials/ophirtesti.png"
  }
];

const TestimonialSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="testimonial" className="py-24">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-8 relative glow-card flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground text-sm md:text-base leading-relaxed mb-6 italic">
                  "{testi.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-end justify-between border-t border-white/5 pt-6">
                <div>
                  <p className="font-semibold text-foreground">{testi.name}</p>
                  <p className="text-xs text-muted-foreground">{testi.role}</p>
                </div>
                
                <button 
                  onClick={() => setSelectedImage(testi.proofImage)}
                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-primary hover:text-white transition-colors group"
                >
                  <CheckCircle size={14} className="group-hover:scale-110 transition-transform" />
                  View Proof
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proof Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Testimonial Proof" 
                className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialSection;
