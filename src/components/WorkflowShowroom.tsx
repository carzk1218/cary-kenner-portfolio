import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkflowShowroom = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          className="text-center text-4xl font-bold text-purple-500 mb-4"
        >
          Workflow Showroom
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Technical walkthroughs of automated systems built for real estate scale and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {workflows.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#161616] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={item.title}
                />
              </div>

              <div className="p-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full text-left group focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  {/* Custom SVG Arrow instead of react-icons */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-purple-500"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-3 border-t border-white/5 pt-4">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            {bullet}
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
    </section>
  );
};

export default WorkflowShowroom;
