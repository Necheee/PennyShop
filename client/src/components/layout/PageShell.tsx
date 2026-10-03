import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';

export const PageShell: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary transition-colors duration-300">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow flex flex-col relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
