import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workflows = [
  {
    id: "clinic-automation",
    title: "Clinic AI Patient Journey",
    media: ["/projects/zap-patientjourneypipeline.jpg", "/projects/clinic-form.jpg", "/projects/clinic-notion.jpg"],
    description: [
      "Architected an 8-Zap ecosystem.",
      "Engineered AI-driven intake classification.",
      "Automated patient status updates in Notion."
    ]
  },
  {
    id: "make-budget-ai",
    title: "Make.com AI Budgeting",
    media: ["/projects/make-ai-budget.jpg", "0AK3bq1dLzA"],
    description: [
      "Telegram-to-Sheets bridge via Make.com.",
      "AI OCR for automated receipt extraction."
    ]
  },
  {
    id: "ghl-real-estate",
    title: "GHL Real Estate Workflow",
    media: ["pgAn3cSni9U"],
    description: [
      "Scalable 0–6 folder architecture.",
      "Automated deal math and property analysis."
    ]
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
      "Implemented 'Circle-Back' logic for missing details."
    ]
  }
];

const WorkflowShowroom = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<typeof workflows[0] | null>(null);

  // Duplicate cards for seamless infinite loop
  const duplicatedWorkflows = [...workflows, ...workflows, ...workflows];

  return (
    <section id="showroom" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-center text-4xl font-bold text-white tracking-tight">
          Workflow <span className="text-purple-500 italic">Showroom</span>
        </h2>
      </div>

      {/* Infinite Moving Track */}
      <div className="relative flex items-center">
        {/* Gradients for "Fade In/Out" look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Stops moving when user hovers to look
        >
          {duplicatedWorkflows.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-[#161616] rounded-2xl overflow-hidden border border-white/5 shadow-xl cursor-pointer group"
              onClick={() => setSelectedWorkflow(item)}
            >
              <div className="aspect-video w-full bg-black relative overflow-hidden">
                <img
                  src={item.media[0].startsWith("/") ? item.media[0] : `https://img.youtube.com/vi/${item.media[0]}/maxresdefault.jpg`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 flex items-center justify-between">
                <span className="text-lg font-bold text-white truncate">{item.title}</span>
                <div className="bg-purple-500/10 p-2 rounded-full text-purple-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal (Fixes the "Dropdown breaks layout" issue) */}
      <AnimatePresence>
        {selectedWorkflow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedWorkflow(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#1c1c1c] w-full max-w-2xl rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {selectedWorkflow.title}
                  </h3>
                  <button onClick={() => setSelectedWorkflow(null)} className="text-gray-500 hover:text-white transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>

                <ul className="space-y-4 mb-8">
                  {selectedWorkflow.description.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-purple-500 mr-4 mt-1">●</span>
                      <span className="text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg shadow-purple-600/20"
                  onClick={() => {/* Trigger existing Media Modal logic here */}}
                >
                  View Full Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkflowShowroom;
