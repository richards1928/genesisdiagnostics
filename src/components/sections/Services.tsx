import { Microscope, Activity, HeartPulse, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { genesisData } from '../../data/genesis';

const serviceIcons = {
  "Diagnostic Services": Microscope,
  "Health Check-ups": Activity,
  "Full-Body Tests": HeartPulse,
  "Sample Collection": Droplets,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-5 tracking-tight">
            Our Diagnostic Services
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Explore diagnostic and health check-up services available through {genesisData.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {genesisData.services.map((service) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons] || Activity;
            
            return (
              <Link 
                to="/tests"
                key={service.title} 
                className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-border/60 shadow-[0_2px_12px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-border cursor-pointer"
              >
                <div className="w-14 h-14 bg-background-soft rounded-xl flex items-center justify-center mb-8 border border-border/50 group-hover:bg-medical/5 group-hover:border-medical/20 transition-colors">
                  <Icon className="h-6 w-6 text-medical" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed flex-grow mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center text-medical font-medium text-sm mt-auto">
                  Learn more 
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
