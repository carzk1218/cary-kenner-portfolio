import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Keep the MediaModal from before for the deep-dives
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
            <h3 className="text-xl font-bold text-purple-400">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{currentIndex + 1} of {media.length}</p>
          </div>
          <button onClick={prevMedia} className="absolute left-4 z-[1001] text-gray-400 hover:text-white text-6xl">‹</button>
          <motion.div key={currentIndex} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="w-full h-full flex items-center justify-center">
            {isVideo(media[currentIndex]) ? (
              <iframe src={`https://www.youtube.com/embed/${media[currentIndex]}?autoplay=1`} className="w-full max-w-4xl aspect-video rounded-lg shadow-2xl border-0" allow="autoplay; encrypted-media" allowFullScreen />
            ) : (
              <img src={media[currentIndex]} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            )}
          </motion.div>
          <button onClick={nextMedia} className="absolute right-4 z-[1001] text-gray-400 hover:text-white text-6xl">›</button>
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
      media: ["/projects/zap-patientjourneypipeline.jpg", "/projects/clinic-form.jpg", "/projects/clinic-notion.jpg", "/projects/clinic-1a.jpg", "/projects/clinic-2a.jpg", "/projects/clinic-3a.jpg"],
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
        <h2 className="text-center text
