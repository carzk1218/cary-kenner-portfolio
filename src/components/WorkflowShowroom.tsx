import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Gallery Component within the dropdown
const MediaGallery = ({ media }: { media: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isVideo = (item: string) => !item.startsWith("/");

  return (
    <div className="mt-6 space-y-4">
      <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            {isVideo(media[currentIndex]) ? (
              <iframe
                src={`https://www.youtube.com/embed/${media[currentIndex]}`}
                className="w-full h-full border-0"
                allowFullScreen
              />
            ) : (
              <img
                src={media[currentIndex]}
                className="w-full h-full object-contain"
                alt="Workflow step"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        {media.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)}
              className="p-2 rounded-full bg-black/50 text-white pointer-events-auto hover:bg-purple-600 transition-colors"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % media.length)}
              className="p-2 rounded-full bg-black/50 text-white pointer-events-auto hover:bg-purple-600 transition-colors"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center gap-2">
        {media.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all ${currentIndex === i ? "w-6 bg-purple-500" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

const WorkflowShowroom = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const workflows = [
    {
      id: "clinic-automation",
      title: "Clinic AI Patient Journey",
      media: ["/projects/zap-patientjourneypipeline.jpg", "/projects/clinic-form.jpg", "/projects/clinic-notion.jpg", "/projects/clinic-1a.jpg", "/projects/clinic-2a.jpg"],
      description: [
        "Architected an 8-Zap ecosystem connecting clinical data points.",
        "Engineered AI-driven intake classification for automated patient routing.",
        "Automated real-time patient status updates within Notion databases."
      ]
    },
    {
      id: "make-budget-ai",
      title: "Make.com AI Budgeting",
      media: ["/projects/make-ai-budget.jpg", "0AK3bq1dLzA"],
      description: [
        "Developed a Telegram-to-Sheets bridge for instant expense logging.",
        "Integrated AI OCR to extract financial data from receipt images."
      ]
    },
    {
      id: "ghl-real-estate",
      title: "GHL Real Estate Workflow",
      media: ["pgAn3cSni9U"],
      description: [
        "Scalable 0–6 folder architecture for lead management.",
        "Automated property analysis and deal math logic."
      ]
    },
    {
      id: "conversation-ai",
      title: "Conversation AI Integration",
      media: ["zLhmT3m_yQ8"],
      description: [
        "Custom property intake agent utilizing advanced AI nodes.",
        "Programmed natural conversational pacing and intent routing."
      ]
    }
  ];

  return (
    <section id="showroom" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-20">
          Workflow <span className="text-purple-500 italic">Showroom</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {workflows.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#121212] rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col h-fit transition-all hover:border-purple-500/30"
            >
              {/* Cover Image */}
              <div className="aspect-video w-full bg-black relative overflow-hidden">
                <img 
                  src={item.media[0].startsWith("/") ? item.media[0] : `https://img.youtube.com/vi/${item.media[0]}/maxresdefault.jpg`} 
                  className="w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105" 
                  alt={item.title}
                />
              </div>

              {/* Main Interaction Area */}
              <div className="p-6">
                <button 
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full group text-left"
                >
                  <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{item.title}</span>
                  <div className={`p-2 rounded-xl transition-all ${activeId === item.id ? 'bg-purple-500 text-white' : 'bg-white/5 text-purple-400'}`}>
                    <svg className={`w-5 h-5 transform transition-transform duration-300 ${activeId === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {/* Expanded Technical Content */}
                      <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start leading-relaxed">
                            <span className="text-purple-500 mr-3 mt-1 text-[10px]">●</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Internal Media Gallery */}
                      <MediaGallery media={item.media} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowroom;
