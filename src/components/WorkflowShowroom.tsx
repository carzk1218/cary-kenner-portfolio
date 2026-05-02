import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute -top-12 right-0 text-white/70 hover:text-purple-400 text-4xl transition-colors z-[1002]">×</button>
          
          <div className="absolute top-0 left-0 w-full text-center z-[1000] p-4">
            <h3 className="text-xl font-bold text-purple-500 tracking-widest uppercase">{title}</h3>
            <p className="text-sm text-gray-500 mt-1 font-mono">{currentIndex + 1} / {media.length}</p>
          </div>

          <button onClick={prevMedia} className="absolute left-2 md:left-4 z-[1001] w-14 h-14 flex items-center justify-center rounded-full bg-black/80 border border-white/10 text-white hover:bg-purple-600 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button onClick={nextMedia} className="absolute right-2 md:right-4 z-[1001] w-14 h-14 flex items-center justify-center rounded-full bg-black/80 border border-white/10 text-white hover:bg-purple-600 transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          
          <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex items-center justify-center">
            {isVideo(media[currentIndex]) ? (
              <iframe src={`https://www.youtube.com/embed/${media[currentIndex]}?autoplay=1`} className="w-full max-w-5xl aspect-video rounded-2xl shadow-2xl border border-white/5" allowFullScreen />
            ) : (
              <img src={media[currentIndex]} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" alt="Workflow Detail" />
            )}
          </motion.div>
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
      title: "Zapier: Clinic AI Patient Journey",
      media: [
        "/projects/zapier-clinic-thumb.png",
        "/projects/zap-patientjourneypipeline.jpg",
        "/projects/clinic-form.jpg",
        "/projects/clinic-notion.jpg",
        "/projects/clinic-1a.jpg",
        "/projects/clinic-1b.jpg",
        "/projects/clinic-2a.jpg",
        "/projects/clinic-2b.jpg",
        "/projects/clinic-2c.jpg",
        "/projects/clinic-3a.jpg",
        "/projects/clinic-notion2.jpg",
        "/projects/clinic-notion3.jpg",
        "/projects/clinic-notion4.jpg",
        "/projects/clinic-notion5.jpg"
      ],
      description: [
        "Architected an 8-Zap ecosystem connecting Notion, Calendly, and Gmail.",
        "Engineered AI-driven intake classifier for automated patient routing.",
        "Implemented automated drip-reminders and confirmations.",
        "Two-way email synchronization within Notion databases."
      ]
    },
    {
      id: "make-budget-ai",
      title: "Make.com: AI Budget Automation",
      media: [
        "/projects/make-budget-thumb.png",
        "/projects/make-ai-budget.jpg",
        "0AK3bq1dLzA"
      ],
      description: [
        "Real-time expense tracking via Telegram and Google Sheets.",
        "Automated AI OCR data extraction from uploaded receipt images.",
        "Auto-populating trackers for budgets and credit card balances.",
        "Instant monthly spending reports and automated calculations."
      ]
    },
    {
      id: "ghl-real-estate",
      title: "GHL: Real Estate Workflow",
      media: ["pgAn3cSni9U"],
      description: [
        "Scalable lead management using a 0–6 folder structure.",
        "Automated intake via centralized webhooks.",
        "Property analysis and deal math using custom calculators.",
        "Pipeline-based lead progression tracking."
      ]
    },
    {
      id: "conversation-ai",
      title: "GHL: Conversation AI Integration",
      media: ["zLhmT3m_yQ8"],
      description: [
        "AI property intake agent with custom knowledge base training.",
        "Natural conversational pacing for customer engagement.",
        "Intent routing to identify and capture missing data.",
        "Automated circle-back logic for incomplete lead details."
      ]
    },
    {
      id: "ghl-voice-havi",
      title: "GHL: Voice AI - Agent HAVI",
      media: ["BneAaTbYYAE"],
      description: [
        "High-fidelity voice synthesis for automated inbound/outbound calls.",
        "Direct integration with GHL contacts for personalized greetings.",
        "Real-time intent detection and appointment scheduling.",
        "Automated call logging and transcript generation within CRM."
      ]
    },
    {
      id: "ghl-multi-subaccount",
      title: "GHL: Outreach & Response Hub",
      media: ["KxaeHoHinz8"],
      description: [
        "Centralized management system for multiple GHL sub-accounts.",
        "Automated response triggers for cross-account lead engagement.",
        "Unified dashboard logic for tracking outreach performance.",
        "Scalable architecture for high-volume agency operations."
      ]
    },
    {
      id: "ghl-stripe-integration",
      title: "GHL: Stripe Payment Integration",
      media: ["uo2pAEpBCtI"],
      description: [
        "Seamless Stripe checkout integration for service fulfillment.",
        "Automated invoice generation and payment tracking.",
        "Secured webhook handling for instant account provisioning.",
        "Custom billing triggers based on lead status changes."
      ]
    },
    {
      id: "ghl-fb-webinar",
      title: "GHL: FB to Webinar Opt-In",
      media: ["yTScS5lJsF0"],
      description: [
        "Automated lead sync from Facebook Lead Forms to GHL.",
        "One-click webinar registration with custom landing pages.",
        "Automated reminder sequences (SMS/Email) to increase show-up rates.",
        "Dynamic tracking of attendee engagement and follow-up tags."
      ]
    }
  ];

  return (
    <section id="showroom" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-24">
          Workflow <span className="text-purple-500 italic">Showroom</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {workflows.map((item) => (
            <div key={item.id} className="bg-[#121212] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden flex flex-col h-fit transition-all duration-300 hover:border-purple-500/30 group">
              <div 
                className="aspect-video w-full bg-black relative cursor-pointer overflow-hidden"
                onClick={() => setModalData({ media: item.media, title: item.title })}
              >
                <img 
                  src={item.media[0].startsWith("/") 
                    ? item.media[0] 
                    : `https://img.youtube.com/vi/${item.media[0]}/maxresdefault.jpg?v=1`} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  alt={item.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600/10">
                   <span className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white">Open Gallery</span>
                </div>
              </div>

              <div className="p-8">
                <button 
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors pr-2">{item.title}</span>
                  <div className={`p-2.5 rounded-xl transition-all ${activeId === item.id ? 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-white/5 text-purple-400'}`}>
                    <svg className={`w-5 h-5 transform transition-transform ${activeId === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <ul className="mt-8 space-y-5 border-t border-white/5 pt-8">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="text-gray-400 text-[0.95rem] flex items-start leading-relaxed">
                            <span className="text-purple-500 mr-4 mt-1.5 text-[10px]">●</span>
                            {bullet}
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

      {modalData && <MediaModal media={modalData.media} title={modalData.title} onClose={() => setModalData(null)} />}
    </section>
  );
};

export default WorkflowShowroom;
