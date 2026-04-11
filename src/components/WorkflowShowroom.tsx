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
          
          {/* Close Button - More Visible */}
          <button 
            onClick={onClose} 
            className="absolute -top-12 right-0 text-white/70 hover:text-purple-400 text-4xl transition-colors z-[1002]"
          >
            ×
          </button>
          
          {/* Header Info */}
          <div className="absolute top-0 left-0 w-full text-center z-[1000] p-4">
            <h3 className="text-xl font-bold text-purple-500 tracking-widest uppercase">{title}</h3>
            <p className="text-sm text-gray-500 mt-1 font-mono">{currentIndex + 1} / {media.length}</p>
          </div>

          {/* Navigation Arrows with Solid Backgrounds for High Visibility */}
          <button 
            onClick={prevMedia} 
            className="absolute left-2 md:left-4 z-[1001] w-14 h-14 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-purple-600 hover:scale-110 transition-all group"
          >
            <svg className="w-8 h-8 group-active:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextMedia} 
            className="absolute right-2 md:right-4 z-[1001] w-14 h-14 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-purple-600 hover:scale-110 transition-all group"
          >
            <svg className="w-8 h-8 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Main Content Area */}
          <motion.div 
            key={currentIndex} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="w-full h-full flex items-center justify-center"
          >
            {isVideo(media[currentIndex]) ? (
              <iframe 
                src={`https://www.youtube.com/embed/${media[currentIndex]}?autoplay=1`} 
                className="w-full max-w-5xl aspect-video rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-white/5" 
                allowFullScreen 
              />
            ) : (
              <img 
                src={media[currentIndex]} 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10" 
                alt="Workflow detail" 
              />
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkflowShowroom;
