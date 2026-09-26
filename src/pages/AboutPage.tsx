import { useEffect } from 'react';
import { About } from '../components/sections/About';
import { genesisData } from '../data/genesis';
import { MapPin, Phone, Clock, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function AboutHero() {
  return (
    <section 
      className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] bg-no-repeat bg-cover bg-[position:80%_center] md:bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/genesis-about-hero.png')" }}
    >
      {/* Subtle overlay only on the far left to guarantee text readability without darkening the right side */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#0B2239]/90 via-[#0B2239]/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-medical/10 border border-medical/20 text-medical font-medium text-sm backdrop-blur-sm uppercase tracking-wide glow-red">
            About Genesis
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
            Patient-Focused <br />
            Diagnostics in Hyderabad
          </h1>
          
          <p className="text-lg text-slate-100 leading-relaxed max-w-lg">
            Genesis Diagnostic is a medical laboratory in Hafeezpet, Hyderabad, providing diagnostic and health check-up services with a patient-focused approach.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesAtAGlance() {
  const services = [
    "Diagnostic Services",
    "Health Check-ups",
    "Blood Tests",
    "Urine Testing",
    "Radiology",
    "Sample Collection",
    "Advanced Genetic Tests"
  ];

  return (
    <section className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-extrabold text-primary mb-4">Services at a Glance</h2>
          <p className="text-text-secondary">Comprehensive testing available at Genesis Diagnostic.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((service, idx) => {
            const link = service === "Advanced Genetic Tests" ? "/advanced-genetic-tests" : service === "Blood Tests" || service === "Urine Testing" || service === "Radiology" ? "/tests" : service === "Sample Collection" ? "/contact" : "/services";
            return (
              <Link key={idx} to={link} className="bg-white p-4 rounded-xl border border-border text-center hover:border-medical/30 hover:shadow-sm transition-all group flex flex-col items-center justify-center">
                <span className="font-medium text-primary text-sm group-hover:text-medical transition-colors">{service}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function PatientExperience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-heading font-extrabold text-primary mb-12">Patient Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {genesisData.reviews.themes.map((theme, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-border/50 text-left">
              <h4 className="font-bold text-primary mb-2">{theme.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-20 bg-background-soft border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column - Founder Image (strictly 40%) */}
          <div className="w-full md:w-[40%] md:flex-none bg-slate-100 relative">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <img 
              src="/assets/genesis-founder-bobbili-naleen-kumar.jpg" 
              alt={genesisData.founder.name}
              className="w-full h-auto object-contain md:object-cover md:h-full md:object-[40%_15%] md:min-h-[500px]"
              loading="lazy"
            />
            {/* Subtle brand accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-medical"></div>
          </div>

          {/* Right Column - Founder Info (strictly 60%) */}
          <div className="w-full md:w-[60%] md:flex-none p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            <div className="inline-block mb-6 px-3 py-1 rounded-full bg-medical/10 border border-medical/20 text-medical font-bold text-xs tracking-wider uppercase w-max glow-red">
              Meet the Founder
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-primary mb-2">
              {genesisData.founder.name}
            </h2>
            
            <p className="text-lg lg:text-xl text-text-secondary font-medium mb-8">
              {genesisData.founder.designation}
            </p>
            
            <div className="w-16 h-1 bg-medical mb-8 glow-red"></div>
            
            <p className="text-lg text-primary leading-relaxed font-medium mb-10">
              Founder of Genesis Diagnostics & Imaging Centre.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-border/60">
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-medical mr-3 flex-shrink-0" />
                <span className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Contact</span>
              </div>
              <a 
                href={`tel:${genesisData.founder.phone.replace(/\s+/g, '')}`} 
                className="text-xl font-bold text-primary hover:text-medical transition-colors inline-block mt-1"
              >
                {genesisData.founder.phone}
              </a>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <a 
                  href={`tel:${genesisData.founder.phone.replace(/\s+/g, '')}`} 
                  className="btn bg-medical hover:bg-medical/90 text-white border-0 inline-flex items-center glow-red-hover transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function OrthopaedicsSection() {
  const certificates = [
    { src: "/assets/prathap-board.png", label: "Fellowship & Qualification" },
    { src: "/assets/prathap-fifa.png", label: "FIFA Diploma in Football Medicine" },
    { src: "/assets/prathap-ista.png", label: "Doctors Excellence Awards" },
    { src: "/assets/prathap-times-health.png", label: "Times Health Excellence Awards" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-border shadow-sm p-6 md:p-10 lg:p-12">
          
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-wider uppercase w-max">
              Orthopaedics & Sports Medicine
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-primary mb-2">
              Dr. Prathap Parvataneni
            </h2>
            <p className="text-lg lg:text-xl text-medical font-bold">
              MBBS, MS (Ortho)
            </p>
          </div>

          <div className="w-full bg-[#1a1a1a] rounded-xl overflow-hidden mb-12 shadow-inner border border-border/50 flex justify-center">
            <img 
              src="/assets/prathap-interview.png" 
              alt="Dr. Prathap Parvataneni"
              className="w-full max-h-[600px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="flex items-center text-lg font-bold text-primary mb-5 border-b border-border/50 pb-2">
                <GraduationCap className="w-5 h-5 text-medical mr-2" />
                Credentials & Fellowships
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-medical mt-1 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">Fellowship in Knee Surgery & Sports Medicine — France</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-medical mt-1 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">Fellowship in Arthroscopy & Sports Medicine — U.K.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-medical mt-1 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">FIFA Diploma in Football Medicine</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-bold text-primary mb-5 border-b border-border/50 pb-2">
                <Award className="w-5 h-5 text-medical mr-2" />
                Recognition
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-medical mt-1 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">Service Excellence in Arthroscopy & Sports Medicine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-medical mt-1 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary leading-relaxed">Doctors Excellence Awards recognition</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-10 border-t border-border/60">
             <h3 className="text-xl font-heading font-bold text-primary text-center mb-8">Verified Credentials & Awards</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-border/60 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                    <div className="p-3 bg-slate-50 border-b border-border/50 text-center">
                      <span className="text-sm font-semibold text-primary">{cert.label}</span>
                    </div>
                    <div className="w-full aspect-[4/3] bg-white p-4 flex items-center justify-center">
                      <img 
                        src={cert.src} 
                        alt={cert.label} 
                        className="w-full h-full object-contain" 
                        loading="lazy" 
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  useEffect(() => {
    document.title = "About Genesis Diagnostic | Hafeezpet, Hyderabad";
  }, []);

  return (
    <>
      <AboutHero />
      <About />
      <ServicesAtAGlance />
      <FounderSection />
      <OrthopaedicsSection />
      <PatientExperience />
      
      {/* Simple Location Strip */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-extrabold mb-8">Visit Genesis Diagnostic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-accent mb-3" />
              <p className="text-sm text-slate-300">{genesisData.address}</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-accent mb-3" />
              <a href="tel:+919701552056" className="text-sm font-medium hover:text-accent transition-colors">{genesisData.phone}</a>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-accent mb-3" />
              <p className="text-sm text-slate-300">{genesisData.hours}</p>
            </div>
          </div>
          <Link to="/contact" className="btn bg-medical hover:bg-medical/90 text-white border-0 glow-red-hover transition-all">Get Directions</Link>
        </div>
      </section>
    </>
  );
}
