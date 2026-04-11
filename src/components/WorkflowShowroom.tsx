import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Flexible Media Modal: Handles both Images and YouTube Videos
const MediaModal = ({ media, title, onClose }: { media: string[]; title: string; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMedia = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prevMedia = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  const isVideo = (item: string) => !item.startsWith("/");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-8 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute -top-12 right-0 text-gray-400 hover:text-white text-5xl focus:outline-none z-[1001]">×</button>
          
          <div className="absolute top-0 left-0 w-full text-center z-[1000] p-4 text-white">
            <h3 className="text-xl font-bold text-purple-400">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">View {currentIndex + 1} of {media.length}</p>
          </div>

          <button onClick={prevMedia} className="absolute left-4 z-[1001] text-gray-400 hover:text-white text-6xl focus:outline-none">‹</button>

          <motion.div
            key={currentIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="w-full h-full flex items-center justify-center"
          >
            {isVideo(media[currentIndex]) ? (
              <iframe
                src={`https://www.youtube.com/embed/${media[currentIndex]}?autoplay=1`}
                className="w-full max-w-4xl aspect-video rounded-lg shadow-2xl border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={media[currentIndex]}
                alt={`${title} screenshot`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            )}
          </motion.div>

          <button onClick={nextMedia} className="absolute right-4 z-[1001] text-gray-400 hover:text-white text-6xl focus:outline-none">›</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const WorkflowShowroom = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const workflows = [
    {
      id: "clinic-automation",
      title: "Clinic AI Patient Journey",
      media: [
        "/projects/zap-patientjourneypipeline.jpg",
        "/projects/clinic-form.jpg",
        "/projects/clinic-notion.jpg",
        "/projects/clinic-notion2.jpg",
        "/projects/clinic-notion3.jpg",
        "/projects/clinic-notion4.jpg",
        "/projects/clinic-notion5.jpg",
        "/projects/clinic-1a.jpg",
        "/projects/clinic-1b.jpg",
        "/projects/clinic-2a.jpg",
        "/projects/clinic-2b.jpg",
        "/projects/clinic-2c.jpg",
        "/projects/clinic-3a.jpg",
      ],
      description: [
        "Architected an 8-Zap ecosystem connecting Notion, Calendly, and Gmail.",
        "Engineered an AI-driven intake classifier for patient routing.",
        "Implemented automated 'Drip-Reminders' and confirmations.",
        "Built a 'Two-Way Sync' for patient email replies in Notion.",
        "Automated post-appointment feedback and sentiment analysis.",
      ],
    },
    {
      id: "make-budget-ai",
      title: "Make.com AI Budget Automation",
      media: ["/projects/make-ai-budget.jpg", "0AK3bq1dLzA"],
      description: [
        "Architected a Telegram-to-Google Sheets bridge via Make.com.",
        "Engineered a dual-router system for text vs. photo entries.",
        "Integrated AI OCR to extract total prices from receipt images.",
        "Built auto-populating logic for credit card trackers.",
        "Automated monthly spending calculations for instant oversight.",
      ],
    },
    {
      id: "ghl-real-estate",
      title: "GHL Real Estate Workflow",
      media: ["pgAn3cSni9U"],
      description: [
        "Implemented a scalable 0–6 folder architecture.",
        "Automated intake process using centralized webhooks.",
        "Built custom calculators for property analysis logic.",
        "Streamlined contract generation within the GHL ecosystem.",
        "Integrated logic to move leads through the sales pipeline.",
      ],
    },
    {
      id: "conversation-ai",
      title: "Conversation AI Integration",
      media: ["zLhmT3m_yQ8"],
      description: [
        "Built a custom property intake agent with AI nodes.",
        "Trained AI on knowledge bases for property specs.",
        "Programmed conversational pacing for natural interaction.",
        "Engineered custom intent routers for data completion.",
        "Implemented 'Circle-Back' logic for missing details.",
      ],
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const currentModalItem = workflows.find(item => item.id === activeModalId);

  return (
    <section id="showroom" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-center text-4xl font-bold text-purple-500 mb-12">Workflow Showroom</h2>

        {/* Carousel Navigation */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-orange-500 p-3 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors ml-2 hidden md:block"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-orange-500 p-3 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors mr-2 hidden md:block"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        {/* Scrollable Track */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {workflows.map((item) => (
            <motion.div 
              key={item.id} 
              className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center bg-[#161616] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
              <div 
                className="aspect-video w-full bg-black relative group cursor-pointer" 
                onClick={() => setActiveModalId(item.id)}
              >
                <img 
                  src={item.media[0].startsWith("/") ? item.media[0] : `https://img.youtube.com/vi/${item.media[0]}/maxresdefault.jpg`} 
                  className="w-full h-full object-cover opacity-80" 
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 text-white">
                   <span className="border border-white px-6 py-2 rounded-full uppercase tracking-wider text-sm font-bold">Explore Workflow</span>
                </div>
              </div>

              <div className="p-6">
                <button 
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)} 
                  className="flex items-center justify-between w-full text-left group"
                >
                  <span className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">{item.title}</span>
                  <motion.div animate={{ rotate: activeId === item.id ? 180 : 0 }} className="text-purple-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-4 border-t border-white/5 pt-6">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-purple-500 mr-3 mt-1 text-xs">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeModalId && currentModalItem && (
        <MediaModal 
          media={currentModalItem.media} 
          title={currentModalItem.title} 
          onClose={() => setActiveModalId(null)} 
        />
      )}
    </section>
  );
};

export default WorkflowShowroom;
