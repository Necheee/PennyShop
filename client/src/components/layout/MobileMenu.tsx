import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(prev => prev === category ? null : category);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-bg-surface z-50 flex flex-col shadow-2xl border-r border-brand-stone/20 overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-brand-stone/20">
              <Link to="/" onClick={onClose}>
                {/* Logo simply uses mix-blend-screen against the dark espresso/surface background */}
                <img src="/logo.png" alt="PENNY" className="h-6 mix-blend-screen" />
              </Link>
              <button onClick={onClose} aria-label="Close menu" title="Close menu" className="p-2 -mr-2 text-text-primary hover:text-brand-clay transition-colors">
                <X size={24} />
              </button>
            </div>

            <nav className="flex-grow flex flex-col py-6 px-6 gap-6 text-lg font-medium text-text-primary">
              <Link to="/" onClick={onClose} className="hover:text-brand-clay transition-colors">Home</Link>
              
              {/* Shop Accordion */}
              <div>
                <button 
                  onClick={() => toggleCategory('shop')}
                  className="flex items-center justify-between w-full hover:text-brand-clay transition-colors"
                >
                  <span>Shop</span>
                  {expandedCategory === 'shop' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {expandedCategory === 'shop' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col mt-3 pl-4 text-base font-normal text-brand-stone"
                    >
                      <Link to="/shop" onClick={onClose} className="hover:text-brand-clay font-medium text-text-primary mb-4">View All Products</Link>
                      
                      <Link to="/shop/tops" onClick={onClose} className="font-semibold text-text-primary mb-2">Tops</Link>
                      <div className="flex flex-col gap-3 pl-2 mb-4 border-l border-brand-stone/20">
                        {CATEGORIES.tops.subcategories.map(sub => (
                          <Link key={sub.slug} to={`/shop/tops/${sub.slug}`} onClick={onClose} className="pl-2 hover:text-brand-clay">
                            {sub.name}
                          </Link>
                        ))}
                      </div>

                      <Link to="/shop/bottoms" onClick={onClose} className="font-semibold text-text-primary mb-2">Bottoms</Link>
                      <div className="flex flex-col gap-3 pl-2 border-l border-brand-stone/20">
                        {CATEGORIES.bottoms.subcategories.map(sub => (
                          <Link key={sub.slug} to={`/shop/bottoms/${sub.slug}`} onClick={onClose} className="pl-2 hover:text-brand-clay">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/capsule" onClick={onClose} className="hover:text-brand-clay transition-colors">Build your capsule</Link>
              <Link to="/about" onClick={onClose} className="hover:text-brand-clay transition-colors">About</Link>
              <Link to="/contact" onClick={onClose} className="hover:text-brand-clay transition-colors">Contact</Link>
              
              <div className="h-[1px] bg-brand-stone/20 my-2" />
              
              <Link to="/account" onClick={onClose} className="font-semibold hover:text-brand-clay transition-colors">
                Log In / Register
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
