import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Logo = () => (
  <div className="relative group cursor-pointer flex items-center">
    {/* Animated Glow Background */}
    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur-md opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
    
    <div className="relative flex items-center justify-center w-11 h-11 bg-dark/90 rounded-xl ring-1 ring-white/20 group-hover:ring-primary/50 transition-all overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:6px_6px]"></div>
      
      <div className="relative z-10 flex items-baseline gap-[1px]">
        <span className="text-white font-display font-black text-xl tracking-tighter leading-none transition-transform group-hover:-translate-y-[1px]">
          S
        </span>
        <span className="text-primary font-display font-black text-xl tracking-tighter leading-none transition-transform group-hover:translate-y-[1px] group-hover:text-secondary">
          T
        </span>
      </div>
      
      {/* AI Status Indicator - Pulsing "Agent" Dot */}
      <div className="absolute top-1.5 right-1.5 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.9)]"></span>
      </div>

      {/* Subtle corner highlight */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
    </div>
  </div>
);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo />
            <div className="ml-4 flex flex-col">
              <span className="text-lg font-display font-black tracking-widest text-white leading-none group-hover:text-primary transition-colors uppercase">SACHIN.TAMBE</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase leading-none mt-1">Agentic AI Engineer</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-400 hover:text-white px-4 py-2 text-sm font-semibold transition-all group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
              <div className="ml-4 h-6 w-[1px] bg-white/10"></div>
              <a 
                href={PERSONAL_INFO.resumeUrl}
                download
                className="ml-4 inline-flex items-center px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold rounded-xl text-white transition-all duration-300 shadow-xl active:scale-95"
              >
                <Download className="w-4 h-4 mr-2 text-primary" />
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-2xl border-b border-white/10 animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-primary hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-bold transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <a 
                href={PERSONAL_INFO.resumeUrl}
                download
                className="w-full flex items-center justify-center px-4 py-4 bg-primary text-white rounded-xl text-base font-bold transition-all shadow-lg active:scale-95"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;