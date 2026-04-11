import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. The Media Modal (The gallery that opens when they want to see the "Deep Dive")
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
          <button onClick={onClose} className="absolute -top-12 right-0 text-gray-400 hover:text-white text-5xl">×</button>
          
          <div className="absolute top-0 left-0 w-full text-center z-[1000] p-4 text-white">
            <h3 className="text-xl font-bold text-purple-400 tracking-widest uppercase">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{currentIndex + 1} of {media.length}</p>
          </div>

          <button onClick={prevMedia} className="absolute left-4 z-[1001] text-white/50 hover:text-white text-6xl">‹</button>
          
          <motion.div key={currentIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full flex items-center justify-center">
            {isVideo(media[currentIndex]) ? (
              <iframe src={`https://www.youtube.com/embed/${media[currentIndex]}?autoplay=1`} className="w-full max-w-4xl aspect-video rounded-lg shadow-2xl border-0" allowFullScreen />
            ) : (
              <img src={media[currentIndex]} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" alt="Workflow Step" />
            )}
          </motion.div>

          <button onClick={nextMedia} className="absolute right-4 z-[1001] text-white/50 hover:text-white text-6xl">›</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const WorkflowShowroom = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [modalData, setModalData] = useState<{ media: string[]; title: string } | null>(null);

  const workflows = [
    {
      id: "clinic-automation",
      title: "Clinic AI Patient Journey",
      media: ["/projects/zap-patientjourneypipeline.jpg", "/projects/clinic-form.jpg", "/projects/clinic-notion.jpg", "/projects/clinic-1a.jpg", "/projects/clinic-2a.jpg"],
      description: ["Architected an 8-Zap ecosystem.", "Engineered AI-driven intake classification.", "Automated patient status updates in Notion."]
    },
    {
      id: "make-budget-ai",
      title: "Make.com AI Budgeting",
      media: ["/projects/make-ai-budget.jpg", "0AK3bq1dLzA"],
      description: ["Telegram-to-Sheets bridge via Make.com.", "AI OCR for automated receipt extraction."]
    },
    {
      id: "ghl-real-estate",
      title: "GHL Real Estate Workflow",
      media: ["pgAn3cSni9U"],
      description: ["Scalable 0–6 folder architecture.", "Automated deal math and property analysis."]
    },
    {
      id: "conversation-ai",
      title: "Conversation AI Integration",
      media: ["zLhmT3m_yQ8"],
      description: ["Custom property intake AI agent.", "Conversational pacing logic."]
    }
  ];

  return (
    <section id="showroom" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Workflow <span className="text-purple-500 italic">Showroom</span>
        </h2>

        {/* Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((item) => (
            <div key={item.id} className="bg-[#161616] rounded-2xl border border-white/5 shadow-2xl overflow-hidden flex flex-col h-fit">
              
              {/* Media Preview (Top) */}
              <div 
                className="aspect-video w-full bg-black relative group cursor-pointer overflow-hidden"
                onClick={() => setModalData({ media: item.media, title: item.title })}
              >
                <img 
                  src={item.media[0].startsWith("/") ? item.media[0] : `https://img.youtube.com/vi/${item.media[0]}/maxresdefault.jpg`} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                  alt={item.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600/20">
                   <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">Launch Gallery</span>
                </div>
              </div>

              {/* Text Content + Dropdown */}
              <div className="p-5 flex flex-col">
                <button 
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full group"
                >
                  <span className="text-base font-bold text-white group-hover:text-purple-400 transition-colors truncate pr-2">{item.title}</span>
                  <div className={`p-1.5 rounded-lg transition-colors ${activeId === item.id ? 'bg-purple-500 text-white' : 'bg-purple-500/10 text-purple-400'}`}>
                    <svg className={`w-4 h-4 transform transition-transform ${activeId === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19 9l-7 7-7-7"></path></svg>
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
                      <ul className="mt-4 space-y-3 border-t border-white/5 pt-4">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="text-gray-400 text-xs flex items-start">
                            <span className="text-purple-500 mr-2 mt-0.5">●</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        onClick={() => setModalData({ media: item.media, title: item.title })}
                        className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold py-2 rounded-lg transition-all uppercase tracking-widest"
                      >
                        View Full Case Study
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logic to open the carousel modal */}
      {modalData && (
        <MediaModal 
          media={modalData.media} 
          title={modalData.title} 
          onClose={() => setModalData(null)} 
        />
      )}
    </section>
  );
};

export default WorkflowShowroom;
