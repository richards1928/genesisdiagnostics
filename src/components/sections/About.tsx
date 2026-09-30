import { Activity, ShieldCheck, Clock, Users } from 'lucide-react';
import { genesisData } from '../../data/genesis';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mb-6">
              Our Approach
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8 space-y-4">
              <p>
                {genesisData.name} is a dedicated {genesisData.category.toLowerCase()} located in Gokul Plots, providing a comprehensive range of health check-up and diagnostic testing services. 
              </p>
              <p>
                Our approach to healthcare is centered around the patient experience. We prioritize highly hygienic sample collection and maintain affordable service structures to ensure accessible diagnostics for our community.
              </p>
              <p>
                From routine blood work to comprehensive test profiles, our experienced technicians focus on patient comfort at every step of the process.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-medical/10 flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-medical" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary">Trusted by the Community</h4>
                <p className="text-sm text-slate-500">Consistently highly rated by our patients</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual / Structured Card */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-medical/5 to-teal-500/5 rounded-3xl transform rotate-3 scale-105 -z-10 transition-transform duration-500 hover:rotate-6"></div>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative z-10">
              
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold text-primary mb-2">Our Core Values</h3>
                <p className="text-slate-500 text-sm">The principles guiding our diagnostic services</p>
              </div>

              <div className="space-y-6">
                
                {/* Value Item 1 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-teal-50 p-3 rounded-xl flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Hygienic Standards</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Maintaining highly hygienic sample collection for your safety.
                    </p>
                  </div>
                </div>

                {/* Value Item 2 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
                    <Users className="w-6 h-6 text-medical" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Experienced Technicians</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Patient-friendly staff dedicated to making your visit as comfortable as possible.
                    </p>
                  </div>
                </div>

                {/* Value Item 3 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-indigo-50 p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Accessible Care</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Affordable service structures designed for the community.
                    </p>
                  </div>
                </div>

              </div>

              {/* Decorative accent lines */}
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none text-medical">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 0L0 60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M60 20L20 60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <path d="M60 40L40 60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
