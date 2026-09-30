import { genesisData } from '../../data/genesis';

export function TestsAndPrices() {
  const renderTestList = (tests: { name: string; price: number }[]) => (
    <div className="divide-y divide-border/50 h-full">
      {tests.map((test, idx) => (
        <div key={idx} className="flex justify-between items-center px-6 py-4 hover:bg-slate-50/40 transition-colors group">
          <span className="font-medium text-primary text-base pr-4">{test.name}</span>
          <span className="font-bold text-primary text-lg flex-shrink-0">₹{test.price}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="tests" className="py-24 bg-[#F5FCFE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
            Tests & Prices
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our available diagnostic tests and transparent pricing.
          </p>
        </div>

        {/* Blood Tests (Full Width) */}
        <div className="bg-white rounded-3xl shadow-sm border border-border/80 overflow-hidden mb-8 md:mb-12">
          <div className="flex items-center px-6 md:px-8 py-5 md:py-6 bg-slate-50 border-b border-border/60">
            <div className="w-14 h-14 rounded-xl bg-medical/10 flex items-center justify-center mr-5 flex-shrink-0 glow-red overflow-hidden">
              <img src="/assets/blood_tests_icon.jpg" alt="Blood Tests" className="w-full h-full object-contain mix-blend-multiply scale-110" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-primary">Blood Tests</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-border/50">
            <div className="divide-y divide-border/50">
              {genesisData.testsAndPrices.blood.filter((_, i) => i % 2 === 0).map((test, idx) => (
                <div key={idx} className="flex justify-between items-center px-6 md:px-8 py-4 hover:bg-slate-50/40 transition-colors group">
                  <span className="font-medium text-primary text-base md:text-lg pr-4">{test.name}</span>
                  <span className="font-bold text-primary text-lg flex-shrink-0">₹{test.price}</span>
                </div>
              ))}
            </div>
            <div className="divide-y divide-border/50 border-t lg:border-t-0 border-border/50">
              {genesisData.testsAndPrices.blood.filter((_, i) => i % 2 !== 0).map((test, idx) => (
                <div key={idx} className="flex justify-between items-center px-6 md:px-8 py-4 hover:bg-slate-50/40 transition-colors group">
                  <span className="font-medium text-primary text-base md:text-lg pr-4">{test.name}</span>
                  <span className="font-bold text-primary text-lg flex-shrink-0">₹{test.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Grid: Radiology, Urine, Home Sample Collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Radiology */}
          <div className="bg-white rounded-3xl shadow-sm border border-border/80 overflow-hidden flex flex-col h-full">
            <div className="flex items-center px-6 py-5 bg-slate-50 border-b border-border/60">
              <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center mr-4 flex-shrink-0 glow-red overflow-hidden">
                <img src="/assets/radiology_icon.jpg" alt="Radiology" className="w-full h-full object-contain mix-blend-multiply scale-110" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-primary">Radiology</h3>
            </div>
            <div className="flex-grow">
              {renderTestList(genesisData.testsAndPrices.radiology)}
            </div>
          </div>

          {/* Urine */}
          <div className="bg-white rounded-3xl shadow-sm border border-border/80 overflow-hidden flex flex-col h-full">
            <div className="flex items-center px-6 py-5 bg-slate-50 border-b border-border/60">
              <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center mr-4 flex-shrink-0 glow-red overflow-hidden">
                <img src="/assets/urine_tests_icon.jpg" alt="Urine Tests" className="w-full h-full object-contain mix-blend-multiply scale-110" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-primary">Urine Tests</h3>
            </div>
            <div className="flex-grow">
              {renderTestList(genesisData.testsAndPrices.urine)}
            </div>
          </div>

          {/* Home Sample Collection */}
          <div className="bg-white rounded-3xl shadow-sm border border-border/80 overflow-hidden flex flex-col h-full">
            <div className="flex items-center px-6 py-5 bg-slate-50 border-b border-border/60">
              <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center mr-4 flex-shrink-0 glow-red overflow-hidden">
                <img src="/assets/home_collection_icon.jpg" alt="Home Sample Collection" className="w-full h-full object-contain mix-blend-multiply scale-110" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-primary">Home Sample Collection</h3>
            </div>
            <div className="flex-grow p-6 flex flex-col justify-center space-y-6">
              <div className="bg-[#F5FCFE] rounded-2xl p-5 border border-medical/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-medical/5 rounded-bl-full"></div>
                <div className="flex items-center justify-between relative z-10">
                  <h4 className="font-bold text-primary">Within 3 km</h4>
                  <span className="font-extrabold text-medical text-lg bg-white px-4 py-1.5 rounded-xl border border-medical/20 shadow-sm">FREE</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="font-medium text-primary text-base">Beyond 3 km</span>
                <span className="font-bold text-primary text-lg">₹200</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white rounded-3xl p-10 md:p-12 border border-border/60 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-3xl font-heading font-extrabold text-primary mb-4">
            Need help with a test?
          </h3>
          <p className="text-slate-600 mb-10 text-lg">
            Contact Genesis Diagnostics & Imaging Centre for enquiries about available testing services.
          </p>
          <a href="tel:+919701552056" className="btn bg-medical hover:bg-medical/90 text-white border-0 px-10 py-4 rounded-xl glow-red-hover inline-flex items-center justify-center transition-all text-lg font-bold w-full sm:w-auto">
            Call Genesis Diagnostic
          </a>
          <p className="mt-6 font-bold text-primary tracking-wide text-xl">+91 97015 52056</p>
        </div>

      </div>
    </section>
  );
}
