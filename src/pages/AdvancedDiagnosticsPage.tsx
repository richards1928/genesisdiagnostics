import { AdvancedDiagnostics } from '../components/sections/AdvancedDiagnostics';
import { useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

function AdvancedGeneticTestsHero() {
  return (
    <section 
      className="relative w-full min-h-[550px] sm:min-h-[500px] md:min-h-0 md:h-[550px] lg:h-[600px] bg-no-repeat bg-cover bg-[position:80%_center] md:bg-center flex items-center overflow-hidden -mt-[1px] py-20 md:py-0"
      style={{ backgroundImage: "url('/assets/genesis-advanced-diagnostics-hero.png')" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(210,15,17,0.08),transparent_60%)] z-0 mix-blend-screen"></div>
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#0B2239]/90 via-[#0B2239]/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medical/20 border border-medical/30 text-white font-medium text-sm backdrop-blur-sm uppercase tracking-wide glow-red">
            Advanced Genetic, Molecular & Genomic Testing
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Advanced Genetic Tests
          </h1>
          
          <p className="text-lg text-slate-100 leading-relaxed max-w-lg mb-8">
            Advanced genetic and molecular testing services provided in collaboration with Progenics Laboratories Pvt.Ltd.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#test-catalogue" className="btn bg-medical hover:bg-medical/90 text-white border-0 flex items-center justify-center group w-full sm:w-auto glow-red-hover transition-all">
              Explore Tests
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+919701552056" 
              className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm flex items-center justify-center transition-all w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function WhatAreAdvancedTests() {
  return (
    <section className="py-20 bg-[#F5FCFE] border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-6">
              Advanced Genetic & Molecular Testing
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Advanced genetic and molecular testing services provided in collaboration with Progenics Laboratories Pvt.Ltd.
              </p>
              <p>
                These services include advanced sequencing, molecular cytogenetic testing, targeted gene panels, molecular diagnostics and microbiome testing.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-medical/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1 glow-red">
                  <div className="w-2 h-2 rounded-full bg-medical"></div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">Advanced Sequencing</h4>
                  <p className="text-sm text-slate-600 mt-1">CES • WES • WGS • MGS • Family-based sequencing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-medical/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1 glow-red">
                  <div className="w-2 h-2 rounded-full bg-medical"></div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">Molecular Diagnostics</h4>
                  <p className="text-sm text-slate-600 mt-1">Oncology • Infectious Disease • Biochemical Testing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-medical/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1 glow-red">
                  <div className="w-2 h-2 rounded-full bg-medical"></div>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-lg">Microbiome Testing</h4>
                  <p className="text-sm text-slate-600 mt-1">Gut Microbiome • Metagenomics • Preventive Testing</p>
                </div>
              </div>
            </div>

            <div>
              <a href="#test-catalogue" className="inline-flex items-center text-medical font-bold hover:text-medical/80 transition-colors group">
                Explore Testing Categories 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-sm border border-white/50 aspect-[4/3] md:aspect-auto md:h-[500px]">
            <img 
              src="/assets/advanced-genetic-testing.jpg" 
              alt="Advanced Genetic Testing visual representation" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function NutritionistProfileSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary">
            Nutrition & Gut Microbiome Support
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Specialised guidance with a focus on gut microbiome and nutrition.
          </p>
        </div>

        <div className="bg-[#F5FCFE] border border-border/60 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <img 
            src="/assets/gut-microbiome.jpg" 
            alt="Gut Microbiome Watermark" 
            className="absolute -right-[2%] -bottom-[2%] w-[45%] md:w-[30%] max-w-[220px] h-auto object-contain mix-blend-multiply opacity-[0.14] pointer-events-none z-0"
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-3xl font-heading font-bold text-white">AB</span>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-heading font-extrabold text-primary mb-2">Anusha Bobbili</h3>
              <p className="text-xl text-medical font-medium mb-1">Functional Nutritionist</p>
              <p className="text-slate-600 mb-6">Specialises in Gut Microbiome</p>
              
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-lg border border-border shadow-sm">
                <span className="font-semibold tracking-wide text-primary">MSc Food and Nutrition <span className="text-medical font-bold ml-1">(Gold Medalist)</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function AdvancedDiagnosticsPage() {
  useEffect(() => {
    document.title = "Advanced Genetic Tests | Genesis Diagnostic";
  }, []);

  return (
    <>
      <AdvancedGeneticTestsHero />
      <WhatAreAdvancedTests />
      <div id="test-catalogue">
        <AdvancedDiagnostics />
      </div>
      <NutritionistProfileSection />
    </>
  );
}
