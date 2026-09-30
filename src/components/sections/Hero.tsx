import { Star, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section 
      className="relative w-full md:h-[600px] lg:h-[650px] bg-no-repeat bg-cover bg-[position:82%_center] md:bg-center flex items-center overflow-hidden pt-28 pb-12 md:py-0"
      style={{ backgroundImage: "url('/assets/genesis-hero-new.jpg')" }}
    >
      {/* Subtle dark overlay for mobile readability, side gradient for desktop */}
      <div className="absolute inset-0 bg-[#0B2239]/50 pointer-events-none md:hidden"></div>
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0B2239]/90 via-[#0B2239]/50 to-transparent pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl">
          
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-medical/10 border border-medical/20 text-medical mb-6 backdrop-blur-sm tracking-wide glow-red">
            GENESIS DIAGNOSTICS & IMAGING CENTRE
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            Comprehensive Diagnostic & Genetic Services Under One Roof
          </h1>
          
          <p className="text-lg text-slate-100 mb-8 leading-relaxed max-w-lg">
            Diagnostic testing, advanced genetic tests, and health check-up services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="tel:+919701552056" className="btn bg-medical hover:bg-medical/90 text-white border-0 flex items-center justify-center w-full sm:w-auto glow-red-hover transition-all">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <Link 
              to="/tests"
              className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm group flex items-center justify-center transition-all w-full sm:w-auto"
            >
              Explore Tests & Prices
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm flex items-center text-slate-200">
              <span className="font-bold text-white text-base mr-2">5.0</span>
              <span>24 Google Reviews</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
