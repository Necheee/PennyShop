import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-stone/20 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-brand-stone">
        &copy; {new Date().getFullYear()} PENNY. Curated men's essentials that always match.
      </div>
    </footer>
  );
};

