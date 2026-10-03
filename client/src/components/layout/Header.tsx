import React from 'react';
import { useThemeStore } from '../../store/themeStore';

export const Header: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-primary border-b border-brand-stone/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-widest uppercase">Penny</div>
        
        <nav className="hidden md:flex gap-6">
          <a href="/shop/tops" className="hover:text-brand-clay transition-colors duration-fast">Tops</a>
          <a href="/shop/bottoms" className="hover:text-brand-clay transition-colors duration-fast">Bottoms</a>
        </nav>

        <div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-bg-surface transition-colors duration-fast"
            aria-label="Toggle theme"
          >
            {theme === 'system' ? '💻' : theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

