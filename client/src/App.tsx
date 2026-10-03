import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PageShell } from './components/layout/PageShell';

// Placeholder Pages
const Home = () => <div className="p-8">Home Page</div>;
const Shop = () => <div className="p-8">All Products</div>;
const NotFound = () => <div className="p-8">404 - Not Found</div>;

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageShell />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            {/* Additional routes will be added here in future phases */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

