import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. We create a separate small component for each card
const WorkflowCard = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#161616] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
    >
      {/* Video Container */}
      <div className="aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${item.videoId}`}
          className="w-full h-full border-0"
          allowFullScreen
          title={item.title}
        />
      </div>

      {/* Accordion Area */}
      <div className="p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left focus:outline-none group"
        >
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
            {item.title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-purple-500"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-6 space-y-4 border-t border-white/5 pt-6">
                {item.description.map((bullet: string, i: number) => (
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
  );
};

// 2. The main component just maps the data into those cards
const WorkflowShowroom = () => {
  const workflows = [
    {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {workflows.map((item, index) => (
            <WorkflowCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowroom;
