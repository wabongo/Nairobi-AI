import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  const [mounted, setMounted] = useState(false);
  
  // Add animation effects when the layout mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,60,100,0.1),transparent_70%)] pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-grow relative">
        {/* Subtle animated gradient line under header */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#0066cc]/50 to-transparent opacity-50"></div>
        
        {/* Main content with subtle fade-in animation */}
        <div 
          className={`transition-opacity duration-500 ease-in-out relative z-10 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Outlet />
        </div>
        
        {/* Decorative elements */}
        <div className="fixed top-1/4 left-0 w-64 h-64 bg-[#003366]/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow pointer-events-none"></div>
        <div className="fixed bottom-1/3 right-0 w-80 h-80 bg-[#0099ff]/10 rounded-full filter blur-3xl opacity-20 animate-pulse-slow pointer-events-none"></div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RootLayout;
