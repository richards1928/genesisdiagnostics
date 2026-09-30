import { MapPin, Phone, Clock, Navigation, Stethoscope } from 'lucide-react';
import { genesisData } from '../../data/genesis';

export function Location() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(genesisData.address)}`;
  const phoneLink = `tel:${genesisData.phone.replace(/\s+/g, '')}`;

  return (
    <section id="location-section" className="py-24 bg-[#F5FCFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 tracking-tight">
            Contact Genesis Diagnostic
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Visit us in Gokul Plots or call us for diagnostic test enquiries and sample collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* Location / Contact Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-border/60 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">

              {/* Left Side: Contact Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border/60">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center flex-shrink-0 glow-red">
                      <MapPin className="h-6 w-6 text-medical" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-heading font-bold text-primary mb-1">Address</h4>
                      <p className="text-slate-600 leading-relaxed">
                        660, 9th Phase, Venkata Ramana Colony,<br />
                        Gokul Plots, Hyderabad, Telangana 500085
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center flex-shrink-0 glow-red">
                      <Phone className="h-6 w-6 text-medical" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-heading font-bold text-primary mb-1">Phone</h4>
                      <a href={phoneLink} className="text-slate-600 leading-relaxed hover:text-medical transition-colors text-lg font-medium block">
                        +91 97015 52056
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center flex-shrink-0 glow-red">
                      <Clock className="h-6 w-6 text-medical" />
                    </div>
                    <div className="ml-5">
                      <h4 className="text-lg font-heading font-bold text-primary mb-1">Timing</h4>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        Open · Closes 9 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary border border-border/80 hover:bg-slate-50 flex items-center justify-center w-full shadow-sm"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                  <a
                    href={phoneLink}
                    className="btn bg-medical text-white hover:bg-medical/90 flex items-center justify-center w-full glow-red-hover transition-all border-0"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Right Side: Clean Location Panel */}
              <div className="bg-slate-50 flex flex-col items-center justify-center p-10 text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-border/50 flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-medical" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-primary mb-2">
                  Find Genesis Diagnostic
                </h3>
                <p className="text-slate-600 text-lg mb-2">
                  Gokul Plots, Hyderabad
                </p>
                <p className="text-medical font-medium mb-8">
                  Open · Closes 9 PM
                </p>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-border/80 text-primary hover:bg-slate-50 hover:text-medical transition-colors font-medium shadow-sm w-full max-w-[240px]"
                >
                  <Navigation className="mr-2 h-4 w-4 text-medical" />
                  Google Maps
                </a>
              </div>

            </div>
          </div>

          {/* Home Sample Collection */}
          <div className="bg-white rounded-3xl p-8 border border-border/60 shadow-sm flex flex-col items-center text-center justify-center">
            <div className="w-16 h-16 bg-medical/10 rounded-2xl flex items-center justify-center mb-6 glow-red">
              <Stethoscope className="w-8 h-8 text-medical" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-primary mb-4">Home Sample Collection</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Get your samples collected safely and conveniently from the comfort of your home, with easy scheduling and professional support.
            </p>

            <div className="bg-[#F5FCFE] w-full p-6 rounded-2xl border border-medical/20 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-medical/5 rounded-bl-full"></div>
              <div className="flex flex-col space-y-4 relative z-10">
                <div className="flex justify-between items-center border-b border-medical/10 pb-4">
                  <span className="font-bold text-primary">Within 3 km</span>
                  <span className="font-extrabold text-medical text-lg bg-white px-3 py-1 rounded-lg border border-medical/20 shadow-sm">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-medium text-primary">Beyond 3 km</span>
                  <span className="font-bold text-primary text-lg">₹200</span>
                </div>
              </div>
            </div>

            <a href={phoneLink} className="btn bg-medical hover:bg-medical/90 text-white w-full border-0 glow-red-hover transition-all">
              Call for Home Sample Collection
            </a>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-3xl p-10 border border-border/60 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-heading font-extrabold text-primary mb-3">
            Have a question about a test?
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Call Genesis Diagnostic for enquiries about available tests and services.
          </p>
          <a href={phoneLink} className="btn bg-medical hover:bg-medical/90 text-white border-0 px-8 py-3 rounded-xl glow-red-hover transition-all inline-flex items-center justify-center font-bold w-full sm:w-auto">
            <Phone className="mr-2 h-5 w-5" />
            Call +91 97015 52056
          </a>
        </div>

      </div>
    </section>
  );
}
