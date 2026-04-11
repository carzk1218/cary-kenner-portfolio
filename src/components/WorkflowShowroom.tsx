import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Flexible Media Modal: Handles both Images and YouTube Videos
const MediaModal = ({ media, title, onClose }: { media: string[]; title: string; onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMedia = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const prevMedia = () => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  // Simple check: local image paths in your project start with "/"
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
        "Architected an 8-Zap ecosystem connecting Notion, Calendly, and Gmail for zero-manual admin overhead.",
        "Engineered an AI-driven intake classifier that automatically assigns patients to 1 of 10 specialists.",
        "Implemented automated 'Drip-Reminders' for unbooked appointments and 24-hour pre-visit confirmations.",
        "Built a 'Two-Way Sync' where patient email replies automatically update Notion status to 'Confirmed'.",
        "Automated post-appointment workflows: feedback collection, AI sentiment analysis, and re-engagement for no-shows.",
      ],
    },
    {
      id: "make-budget-ai",
      title: "Make.com AI Budget Automation",
      // First is your new screenshot, second is your video ID
      media: [
        "/projects/make-ai-budget.jpg", 
        "0AK3bq1dLzA",
      ],
      description: [
        "Architected a Telegram-to-Google Sheets bridge for real-time expense tracking via Make.com.",
        "Engineered a dual-router system to distinguish between manual text entries and receipt photo uploads.",
        "Integrated AI OCR to extract total prices and payment modes from physical receipt images automatically.",
        "Built auto-populating logic for specialized credit card trackers to predict upcoming statement balances.",
        "Automated monthly and daily spending calculations within Google Sheets for instant oversight.",
      ],
    },
    {
      id: "ghl-real-estate",
      title: "GHL Real Estate Workflow",
      media: ["pgAn3cSni9U"],
      description: [
        "Implemented a scalable 0–6 folder architecture for clean system organization.",
        "Automated the intake process using centralized webhooks and external integrations.",
        "Built custom calculators to automate deal math and property analysis backend logic.",
        "Streamlined contract generation and document tracking within the GHL ecosystem.",
        "Integrated system logic to automatically move leads through the sales pipeline.",
      ],
    },
    {
      id: "conversation-ai",
      title: "Conversation AI Integration",
      media: ["zLhmT3m_yQ8"],
      description: [
        "Built a custom property intake agent using a start trigger, AI node, and router.",
        "Trained the AI on a specific knowledge base to extract property specs and motivation.",
        "Programmed 'Conversational Pacing' to limit the AI to 1–2 questions per response.",
        "Engineered a custom intent router to ensure 100% data completion.",
        "Implemented 'Circle-Back' logic so the AI automatically re-prompts for missing details.",
      ],
    },
  ];

  const currentModalItem = workflows.find(item => item.id === activeModalId);

  return (
    <section id="showroom" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 className="text-center text-4xl font-bold text-purple-500 mb-12">Workflow Showroom</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {workflows.map((item) => (
            <div key={item.id} className="bg-[#161616] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-fit">
              
              {/* Card Trigger: Opens the Gallery/Video Modal */}
              <div 
                className="aspect-video w-full bg-black relative group cursor-pointer"
                onClick={() => setActiveModalId(item.id)}
              >
                {/* Always show the first media item as the card cover */}
                {!item.media[0].startsWith("/") ? (
                  <div className="w-full h-full relative">
                    <img 
                      src={`https://img.youtube.com/vi/${item.media[0]}/maxresdefault.jpg`} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-60" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={item.media[0]} alt={item.title} className="w-full h-full object-cover opacity-80" />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 text-white text-center p-4">
                  <div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 mx-auto"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Explore {item.title}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <button onClick={() => setActiveId(activeId === item.id ? null : item.id)} className="flex items-center justify-between w-full text-left group">
                  <span className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">{item.title}</span>
                  <motion.div animate={{ rotate: activeId === item.id ? 180 : 0 }} className="text-purple-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>

      {activeModalId && currentModalItem && (
        <MediaModal media={currentModalItem.media} title={currentModalItem.title} onClose={() => setActiveModalId(null)} />
      )}
    </section>
  );
};

export default WorkflowShowroom;
