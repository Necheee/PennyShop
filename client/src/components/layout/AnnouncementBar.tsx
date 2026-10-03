import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { storeConfig } from '../../data/storeConfig';

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const announcements = storeConfig.announcements;

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextAnnouncement();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, announcements.length]);

  if (!announcements.length) return null;

  return (
    <div 
      className="bg-brand-espresso dark:bg-brand-mist text-brand-mist dark:text-brand-espresso text-xs sm:text-sm font-medium py-2 px-4 text-center relative h-9 sm:h-10 flex items-center justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <button 
        onClick={prevAnnouncement} 
        aria-label="Previous announcement"
        title="Previous announcement"
        className="p-1 hover:text-brand-clay transition-colors z-10"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex-1 relative h-full flex items-center justify-center overflow-hidden" role="marquee" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full px-4"
          >
            {announcements[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={nextAnnouncement} 
        aria-label="Next announcement"
        title="Next announcement"
        className="p-1 hover:text-brand-clay transition-colors z-10"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
