import { useEffect } from 'react';
import { Microscope, Activity, Droplets, ArrowRight, Dna, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServicesHero() {
  return (
    <section 
      className="relative w-full min-h-[460px] md:min-h-0 md:h-[550px] lg:h-[600px] bg-no-repeat bg-cover bg-[position:75%_center] md:bg-center flex items-center overflow-hidden pt-24 pb-16 md:py-0 -mt-[1px]"
      style={{ backgroundImage: "url('/assets/genesis-services-hero.png')" }}
    >
      {/* Subtle overlay only on the far left to guarantee text readability without darkening the right side */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#0B2239]/95 via-[#0B2239]/70 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medical/10 border border-medical/20 text-medical font-medium text-sm backdrop-blur-sm uppercase tracking-wide glow-red">
            Our Services
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Diagnostic Testing & <br />
            Health Check-up Services
          </h1>
          
          <p className="text-base md:text-lg text-slate-100 leading-relaxed max-w-sm md:max-w-lg mb-8">
            Complete diagnostic and health check-up services for your wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              to="/tests"
              className="btn bg-medical hover:bg-medical/90 text-white border-0 flex items-center justify-center group w-full sm:w-auto glow-red-hover transition-all py-3.5"
            >
              Explore Tests & Prices
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+919701552056" 
              className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm flex items-center justify-center transition-all w-full sm:w-auto py-3.5"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCatalogue() {
  const sections = [
    {
      title: "Diagnostic Tests",
      desc: "Routine and specialized diagnostic testing, including comprehensive blood and urine tests.",
      icon: Droplets,
      link: "/tests",
      cta: "Explore Diagnostic Tests"
    },
    {
      title: "Radiology Services",
      desc: "Professional X-Ray imaging services including single view, two views, and specialized scans.",
      icon: Activity,
      link: "/tests",
      cta: "View Radiology Pricing"
    },
    {
      title: "Genetic Tests",
      desc: "Advanced genetic and molecular testing services.",
      icon: Dna,
      link: "/advanced-genetic-tests",
      cta: "Explore Genetic Tests"
    },
    {
      title: "Home Sample Collection",
      desc: "Convenient home sample collection services for routine testing.",
      icon: Microscope,
      link: "/contact",
      cta: "Schedule Collection"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sections.map((service, idx) => (
            <Link key={idx} to={service.link} className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-border/60 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-medical/30">
              <div className="w-14 h-14 bg-background-soft rounded-xl flex items-center justify-center mb-6 border border-border/50 group-hover:bg-medical/10 group-hover:border-medical/20 transition-colors">
                <service.icon className="h-6 w-6 text-medical" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <div className="flex items-center text-medical font-medium text-sm mt-auto">
                {service.cta}
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialServices() {
  return (
    <section className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col items-start justify-center">
            <div className="w-12 h-12 rounded-full bg-medical/10 flex items-center justify-center mb-6 glow-red">
              <Droplets className="w-6 h-6 text-medical" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">Sample Collection</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Genesis Diagnostic offers home sample collection services for your convenience.
            </p>
            <div className="bg-slate-50 w-full p-4 rounded-xl border border-border mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm text-primary">Within 3 km</span>
                <span className="font-bold text-emerald-600 text-sm">FREE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm text-primary">Beyond 3 km</span>
                <span className="font-bold text-primary text-sm">₹200</span>
              </div>
            </div>
            <a href="tel:+919701552056" className="btn btn-outline w-full sm:w-auto text-center">Call to Schedule</a>
          </div>

          <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col items-start justify-center">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <Dna className="w-48 h-48 text-medical" />
            </div>
            <div className="relative z-10 w-full">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medical/20 text-medical font-medium text-sm glow-red">
                Genetic & Molecular Tests
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Genetic Tests</h2>
              <p className="text-slate-300 mb-8 leading-relaxed max-w-md">
                Advanced genetic and molecular testing services provided in collaboration with Progenics Laboratories Pvt.Ltd.
              </p>
              <Link to="/advanced-genetic-tests" className="btn bg-medical hover:bg-medical/90 text-white border-0 glow-red-hover transition-all">
                Explore Genetic Tests
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  useEffect(() => {
    document.title = "Diagnostic Services | Genesis Diagnostic";
  }, []);

  return (
    <>
      <ServicesHero />
      <ServiceCatalogue />
      <SpecialServices />
    </>
  );
}
