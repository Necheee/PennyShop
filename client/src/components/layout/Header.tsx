import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, ChevronDown } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { CATEGORIES } from '../../data/categories';
import { AnimatePresence, motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-40 w-full bg-bg-surface border-b border-brand-stone/10 transition-colors duration-500"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
          
          {/* Left: Mobile Menu Trigger & Logo */}
          <div className="flex flex-1 items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-text-primary hover:text-brand-clay transition-colors"
              aria-label="Open menu"
              title="Open menu"
            >
              <Menu size={24} strokeWidth={1.25} />
            </button>
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="PENNY" 
                className="h-9 md:h-11 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-text-primary">
            
            <Link to="/" className="relative group py-2 hover:text-brand-clay transition-colors duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            
            {/* Shop Mega Menu */}
            <div 
              className="relative py-8 flex items-center"
              onMouseEnter={() => setActiveDropdown('shop')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/shop" className="relative group hover:text-brand-clay transition-colors duration-300 flex items-center gap-1 py-2">
                Shop
                <ChevronDown size={14} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              
              <AnimatePresence>
                {activeDropdown === 'shop' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-bg-surface/98 backdrop-blur-xl border border-brand-stone/10 shadow-2xl py-8 px-10 min-w-[320px] flex gap-12 z-50 rounded-sm"
                  >
                    <div className="flex flex-col min-w-[120px]">
                      <Link to="/shop/tops" className="text-text-primary font-bold tracking-[0.2em] mb-4 hover:text-brand-clay transition-colors group relative self-start">
                        TOPS
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </Link>
                      <div className="flex flex-col gap-3">
                        {CATEGORIES.tops.subcategories.map(sub => (
                          <Link key={sub.slug} to={`/shop/tops/${sub.slug}`} className="text-text-primary/70 hover:text-brand-clay hover:translate-x-1 transition-all duration-300">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col min-w-[120px]">
                      <Link to="/shop/bottoms" className="text-text-primary font-bold tracking-[0.2em] mb-4 hover:text-brand-clay transition-colors group relative self-start">
                        BOTTOMS
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </Link>
                      <div className="flex flex-col gap-3">
                        {CATEGORIES.bottoms.subcategories.map(sub => (
                          <Link key={sub.slug} to={`/shop/bottoms/${sub.slug}`} className="text-text-primary/70 hover:text-brand-clay hover:translate-x-1 transition-all duration-300">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/capsule" className="relative group py-2 hover:text-brand-clay transition-colors duration-300">
              Capsule
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            
            <Link to="/about" className="relative group py-2 hover:text-brand-clay transition-colors duration-300">
              About
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            
            <Link to="/contact" className="relative group py-2 hover:text-brand-clay transition-colors duration-300">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex flex-1 justify-end items-center gap-4 md:gap-6 text-text-primary">
            <button aria-label="Search" title="Search" className="hover:text-brand-clay hover:-translate-y-0.5 transition-all duration-300">
              <Search size={22} strokeWidth={1.25} />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" title="Wishlist" className="hover:text-brand-clay hover:-translate-y-0.5 transition-all duration-300">
              <Heart size={22} strokeWidth={1.25} />
            </Link>
            <Link to="/account" className="hidden md:flex items-center text-[11px] uppercase tracking-widest font-semibold hover:text-brand-clay transition-all duration-300 border-l border-brand-stone/20 pl-6 relative group whitespace-nowrap">
              Log In
              <span className="absolute -bottom-1.5 left-6 w-[calc(100%-1.5rem)] h-[1px] bg-brand-clay scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <button aria-label="Cart" title="Cart" className="hover:text-brand-clay hover:-translate-y-0.5 transition-all duration-300 relative">
              <ShoppingBag size={22} strokeWidth={1.25} />
              <span className="absolute -top-1.5 -right-2.5 bg-text-primary text-bg-primary text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center transition-colors duration-300">
                0
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
