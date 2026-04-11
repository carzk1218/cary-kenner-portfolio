import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi"; // Make sure to install react-icons

const WorkflowShowroom = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const workflows = [
    {
      title: "GHL Real Estate Workflow",
      videoId: "YOUR_GHL_VIDEO_ID",
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
              {/* Video Container */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  className="w-full h-full"
                  allowFullScreen
                  title={item.title}
                />
              </div>

              {/* Content Area */}
              <div className="p-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full text-left group"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-purple-500 text-2xl"
                  >
                    <FiChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity:
