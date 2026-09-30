import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { genesisData } from '../../data/genesis';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <Link to="/">
                <img 
                  src="/assets/genesis-logo-white.png" 
                  alt="Genesis Diagnostics & Imaging Centre" 
                  className="w-[200px] md:w-[240px] h-auto object-contain"
                />
              </Link>
            </div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Genesis Diagnostics & Imaging Centre</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-2 font-medium">
              {genesisData.tagline}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Diagnostic testing and health check-up services in Gokul Plots, Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/advanced-genetic-tests" className="text-slate-300 hover:text-accent transition-colors">Genetic Tests</Link></li>
              <li><Link to="/tests" className="text-slate-300 hover:text-accent transition-colors">Tests & Prices</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-slate-300 hover:text-accent transition-colors">Diagnostic Tests</Link></li>
              <li><Link to="/tests" className="text-slate-300 hover:text-accent transition-colors">Radiology Services</Link></li>
              <li><Link to="/advanced-genetic-tests" className="text-slate-300 hover:text-accent transition-colors">Genetic Tests</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-accent transition-colors">Home Sample Collection</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{genesisData.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href={`tel:${genesisData.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-accent transition-colors font-medium">
                  {genesisData.phone}
                </a>
              </li>
            </ul>
            <a href={`tel:${genesisData.phone.replace(/\s+/g, '')}`} className="btn btn-primary w-full text-center">
              Call Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {genesisData.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/medical-disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
