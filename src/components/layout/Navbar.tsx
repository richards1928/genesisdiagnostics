import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive 
      ? "text-medical font-bold transition-colors [text-shadow:0_0_12px_rgba(210,15,17,0.4)]" 
      : "text-text-primary hover:text-medical hover:[text-shadow:0_0_12px_rgba(210,15,17,0.3)] font-medium transition-colors";

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block px-3 py-2 rounded-md text-base font-bold text-medical bg-slate-50"
      : "block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:bg-slate-50 hover:text-medical";

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/assets/genesis-logo.png" 
                alt="Genesis Diagnostics & Imaging Centre" 
                className="h-[48px] md:h-[60px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={desktopLinkClass}>Home</NavLink>
            <NavLink to="/about" className={desktopLinkClass}>About</NavLink>
            <NavLink to="/services" className={desktopLinkClass}>Services</NavLink>
            <NavLink to="/advanced-genetic-tests" className={desktopLinkClass}>Genetic Tests</NavLink>
            <NavLink to="/tests" className={desktopLinkClass}>Tests & Prices</NavLink>
            <NavLink to="/contact" className={desktopLinkClass}>Contact</NavLink>
            <a href="tel:+919701552056" className="btn btn-primary ml-4 glow-red-hover">Call Now</a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-medical focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Services</NavLink>
            <NavLink to="/advanced-genetic-tests" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Genetic Tests</NavLink>
            <NavLink to="/tests" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Tests & Prices</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass}>Contact</NavLink>
            <div className="px-3 py-3 space-y-3">
              <a href="tel:+919701552056" className="btn btn-primary w-full text-center block glow-red-hover">
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
