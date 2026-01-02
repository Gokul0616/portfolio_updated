import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
        }`}
        style={{ height: '60px' }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              Gokul<span className="text-cyan-400">.dev</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: isMobileMenuOpen ? '-4px 0 20px rgba(0, 0, 0, 0.5)' : 'none' }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-cyan-500/20">
            <span className="text-xl font-bold text-white">
              Gokul<span className="text-cyan-400">.dev</span>
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={22} />
            </Button>
          </div>
          
          <nav className="flex flex-col py-6 px-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors font-medium text-left py-3 px-4 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;