import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { WhyGenesis } from '../components/sections/WhyGenesis';
import { Reviews } from '../components/sections/Reviews';
import { Location } from '../components/sections/Location';
import { genesisData } from '../data/genesis';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


function WhatWeOffer() {
  const offerings = [
    {
      title: "Diagnostic Testing",
      description: "Routine and comprehensive diagnostic testing services.",
      image: "/assets/what-we-offer-diagnostic-testing.jpg",
      categories: ["Blood Tests", "Urine Testing", "Diagnostic Testing"],
      ctaText: "Explore Tests",
      link: "/tests",
      altText: "Diagnostic laboratory testing at Genesis Diagnostic"
    },
    {
      title: "Health Check-ups & Radiology",
      description: "Health check-up and imaging services available through Genesis Diagnostic.",
      image: "/assets/what-we-offer-radiology.jpg",
      categories: ["Health Check-ups", "Radiology"],
      ctaText: "Explore Services",
      link: "/services",
      altText: "Diagnostic imaging and radiology services"
    },
    {
      title: "Sample Collection",
      description: "Convenient sample collection at Genesis Diagnostic.",
      image: "/assets/what-we-offer-sample-collection.jpg",
      categories: [],
      ctaText: "Contact Genesis",
      link: "/contact",
      altText: "Professional sample collection at Genesis Diagnostic"
    }
  ];

  return (
    <section className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4 uppercase">What We Offer</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Diagnostic testing, imaging and sample collection services at Genesis Diagnostic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offerings.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="w-full aspect-[16/9] overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.altText} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{item.description}</p>
                
                {item.categories.length > 0 && (
                  <ul className="mb-8 space-y-3">
                    {item.categories.map((cat, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-medical mr-3"></span>
                        {cat}
                      </li>
                    ))}
                  </ul>
                )}
                
                <Link to={item.link} className="inline-flex items-center font-bold text-primary hover:text-medical transition-colors group/btn mt-auto">
                  {item.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <Link to="/tests" className="btn bg-primary hover:bg-primary/90 text-white border-0 px-8 py-4 rounded-xl shadow-sm transition-all w-full sm:w-auto justify-center flex">
            View All Tests & Prices <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Link>
          <Link to="/advanced-genetic-tests" className="text-primary font-medium hover:text-medical transition-colors inline-flex items-center">
            Explore Advanced Genetic Tests <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}



function PopularTests() {
  const tests = genesisData.testsAndPrices.blood.slice(0, 6);
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4">Routine Tests</h2>
          <p className="text-text-secondary">Frequently requested tests at our centre.</p>
        </div>
        <div className="bg-slate-50 rounded-2xl border border-border overflow-hidden">
          {tests.map((test, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 sm:px-6 border-b border-border/60 last:border-0 hover:bg-white transition-colors">
              <span className="font-medium text-primary text-sm sm:text-base">{test.name}</span>
              <span className="font-bold text-medical">₹{test.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/tests" className="btn btn-outline inline-flex items-center justify-center w-full sm:w-auto">
            View All Tests & Prices
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AdvancedDiagnosticsPreview() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full md:w-[35%] opacity-30 pointer-events-none">
        <img src="/assets/home-dna-bg.jpg" alt="" className="h-full w-full object-cover object-center mix-blend-screen" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medical/20 border border-medical/30 text-medical font-medium text-sm glow-red">
            Advanced Genetic Tests
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">
            Genomic, Molecular & Microbiome Testing
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Genesis Diagnostic provides access to an extensive catalogue of advanced diagnostic categories, supporting specialized testing requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="border-l-2 border-medical pl-4">
              <h4 className="font-bold mb-1">Genomic Tests</h4>
              <p className="text-sm text-slate-400">Sequencing & Panels</p>
            </div>
            <div className="border-l-2 border-medical pl-4">
              <h4 className="font-bold mb-1">Molecular</h4>
              <p className="text-sm text-slate-400">Oncology & Infectious</p>
            </div>
            <div className="border-l-2 border-medical pl-4">
              <h4 className="font-bold mb-1">Microbiome</h4>
              <p className="text-sm text-slate-400">Gut & Preventive</p>
            </div>
          </div>
          <Link to="/advanced-genetic-tests" className="btn bg-medical hover:bg-medical/90 text-white border-0 glow-red-hover inline-flex items-center justify-center w-full sm:w-auto transition-all">
            Explore Advanced Genetic Tests
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeSampleCollection() {
  return (
    <section className="py-16 bg-background-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-border">
          <MapPin className="w-8 h-8 text-medical" />
        </div>
        <h2 className="text-3xl font-heading font-extrabold text-primary mb-6">Home Sample Collection</h2>
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm mb-8 inline-block text-left w-full max-w-md mx-auto">
          <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
            <span className="text-text-secondary">Distance</span>
            <span className="text-text-secondary">Fee</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-primary">Within 3 km</span>
            <span className="font-bold text-emerald-600">FREE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-primary">Beyond 3 km</span>
            <span className="font-bold text-primary">₹200</span>
          </div>
        </div>
        <div>
          <a href="tel:+919701552056" className="btn btn-primary w-full sm:w-auto">Call +91 97015 52056</a>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  useEffect(() => {
    document.title = "Genesis Diagnostic | Diagnostic Centre in Hafeezpet, Hyderabad";
  }, []);

  return (
    <>
      <Hero />
      <WhatWeOffer />
      <PopularTests />
      <AdvancedDiagnosticsPreview />
      <WhyGenesis />
      <Reviews />
      <HomeSampleCollection />
      <Location />
    </>
  );
}
