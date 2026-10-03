import React from 'react';
import { Link } from 'react-router-dom';
import { storeConfig } from '../../data/storeConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-surface border-t border-brand-stone/20 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="font-bold text-2xl tracking-widest uppercase">Penny</div>
          <p className="text-brand-stone dark:text-brand-mist/70 text-sm leading-relaxed max-w-sm">
            Curated men's essentials that always match. Build more outfits with fewer, better pieces.
          </p>
        </div>

        {/* Shop */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-semibold text-sm uppercase tracking-wider">Shop</h4>
          <nav className="flex flex-col gap-3 text-sm text-brand-stone dark:text-brand-mist/70">
            <Link to="/shop" className="hover:text-brand-clay transition-colors">All Products</Link>
            <Link to="/shop/tops" className="hover:text-brand-clay transition-colors">Tops</Link>
            <Link to="/shop/bottoms" className="hover:text-brand-clay transition-colors">Bottoms</Link>
            <Link to="/capsule" className="hover:text-brand-clay transition-colors">Build your capsule</Link>
          </nav>
        </div>

        {/* Support */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-semibold text-sm uppercase tracking-wider">Support</h4>
          <nav className="flex flex-col gap-3 text-sm text-brand-stone dark:text-brand-mist/70">
            <Link to="/shipping-returns" className="hover:text-brand-clay transition-colors">Shipping & Returns</Link>
            <Link to="/garment-care" className="hover:text-brand-clay transition-colors">Garment Care</Link>
            <Link to="/contact" className="hover:text-brand-clay transition-colors">Contact Us</Link>
            <Link to="/about" className="hover:text-brand-clay transition-colors">About Us</Link>
          </nav>
        </div>

        {/* Contact & Socials */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-semibold text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-brand-stone dark:text-brand-mist/70">
            <a href={`mailto:${storeConfig.contact.email}`} className="hover:text-brand-clay transition-colors">
              {storeConfig.contact.email}
            </a>
            <a href={`tel:${storeConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-clay transition-colors">
              {storeConfig.contact.phone}
            </a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-brand-clay transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-clay transition-colors">Twitter</a>
            </div>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="container mx-auto px-4 pt-8 border-t border-brand-stone/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-stone">
        <div>&copy; {new Date().getFullYear()} PENNY. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-brand-clay transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand-clay transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
