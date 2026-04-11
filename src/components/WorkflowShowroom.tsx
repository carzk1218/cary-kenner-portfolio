import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkflowShowroom = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const workflows = [
    {
      id: "make-budget-ai",
      title: "Make.com AI Budget Automation",
      videoId: "0AK3bq1dLzA",
      description: [
        "Architected a Telegram-to-Google Sheets bridge for real-time expense tracking via Make.com.",
        "Engineered a dual-router system to distinguish between manual text entries and receipt photo uploads.",
        "Integrated AI OCR to extract total prices and payment modes from physical receipt images automatically.",
        "Built auto-populating logic for specialized credit card trackers to predict upcoming statement balances.",
        "Automated monthly and daily spending calculations within Google Sheets for instant financial oversight.",
      ],
    },
    {
      id: "ghl-real-estate",
      title: "GHL Real Estate Workflow",
      videoId: "pgAn3cSni9U",
      description: [
        "Implemented a scalable 0–6 folder architecture for clean system organization.",
        "Automated the intake process using centralized webhooks and external integrations.",
        "Built custom calculators to automate deal math and property analysis backend logic.",
        "Streamlined contract generation and document tracking within the GHL ecosystem.",
        "Designed multi-stage nurture sequences to maintain long-term lead engagement.",
        "Integrated system logic to automatically move leads through the sales pipeline.",
      ],
    },
    {
      id: "conversation-ai",
      title: "Conversation AI Integration",
      videoId: "zLhmT3m_yQ8",
      description: [
        "Built a custom property intake agent using a start trigger, AI node, and router.",
        "Trained the AI on a specific knowledge base to extract property specs and motivation.",
        "Programmed 'Conversational Pacing' to limit the AI to 1–2 questions per response.",
        "Engineered a custom intent router to ensure 100% data completion.",
        "Implemented 'Circle-Back' logic so the AI automatically re-prompts for missing details.",
        "Connected success intents to trigger internal team notifications for follow-up.",
      ],
    },
  ];

  return (
    <section id="showroom" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold text-purple-500 mb-12"
        >
          Workflow Showroom
        </motion.h2>
        
        {/* Adjusted grid for 3 items: Single column on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflows.map((item) => (
            <div 
              key={item.id}
              className="bg-[#161616] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-fit"
            >
              {/* Video Container - Optimized for Shorts/Videos */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={item.title}
                />
              </div>

              {/* Accordion Content */}
              <div className="p-6">
                <button
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full text-left focus:outline-none group"
                >
                  <span className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: activeId === item.id ? 180 : 0 }}
                    className="text-purple-500"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeId === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-4 border-t border-white/5 pt-6">
                        {item.description.map((bullet, i) => (
                          <li key={`${item.id}-bullet-${i}`} className="text-gray-400 text-sm flex items-start">
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
    </section>
  );
};

export default WorkflowShowroom;
