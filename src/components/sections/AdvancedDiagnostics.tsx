import { useState } from 'react';
import { ChevronDown, ChevronUp, Dna, Activity, Microscope } from 'lucide-react';

export function AdvancedDiagnostics() {
  const categories = [
    {
      title: "GENOMIC TESTS",
      subtitle: "Advanced Sequencing • Molecular Cytogenetic Testing • Targeted Gene Panels",
      icon: Dna,
      subcategories: [
        {
          name: "Advanced Sequencing",
          tests: [
            "Clinical Exome Sequencing (CES)",
            "Whole Exome Sequencing (WES)",
            "Whole Genome Sequencing (WGS)",
            "Mitochondrial Genome Sequencing (MGS)",
            "WES/CES + MGS",
            "Couple, Trio & Family based sequencing",
            "Couple Carrier Sequencing",
            "Sanger Sequencing",
            "Fragile X Testing"
          ]
        },
        {
          name: "Molecular Cytogenetic Testing",
          tests: [
            "Chromosomal Microarray (CMA)",
            "Fluorescence In Situ Hybridization (FISH)",
            "Multiplex Ligation Probe Amplification (MLPA)",
            "Non-Invasive Prenatal Screening (NIPS/NIPT)",
            "Karyotyping"
          ]
        },
        {
          name: "Targeted Gene Panels",
          tests: []
        }
      ]
    },
    {
      title: "MOLECULAR DIAGNOSTICS",
      subtitle: "Oncology Panel (PROGEN ONCO) • Infectious Disease Diagnosis • Advanced Biochemical Tests",
      icon: Microscope,
      subcategories: [
        {
          name: "Oncology Panel (PROGEN ONCO)",
          tests: [
            "Hereditary Cancer Testing",
            "Somatic Mutation Panels",
            "Liquid Biopsy",
            "HDR & HRR Testing",
            "Pharmacogenomics Onco Panel",
            "OncoX Traq (Screens 11 solid tumors)"
          ]
        },
        {
          name: "Infectious Disease Diagnosis",
          tests: [
            "HPV High Risk Genotyping",
            "HPV Sanger Sequencing",
            "HCV, HBV",
            "CMV"
          ]
        },
        {
          name: "Advanced Biochemical Tests",
          tests: [
            "New Born Screening - NBS",
            "FRAT (Folate Receptor)",
            "Stool SCFA (Acetate, Pyruvate, Butyrate)"
          ]
        }
      ]
    },
    {
      title: "MICROBIOME TESTS",
      subtitle: "Gut Microbiome • Microbial & Metagenomics • Preventive Test Panel",
      icon: Activity,
      subcategories: [
        {
          name: "Gut Microbiome",
          tests: [
            "GutGenics (For Gut Health)",
            "GutGenics+ASD"
          ]
        },
        {
          name: "Microbial & Metagenomics",
          tests: [
            "ResistomeX (Rapid AMR)",
            "Metagenomics",
            "Shotgun Metagenomics",
            "Microbial WGS",
            "Microbial Identification",
            "(Sanger Sequencing)"
          ]
        },
        {
          name: "Preventive Test Panel",
          tests: [
            "WellGenics",
            "MediGenics",
            "CardioGenics",
            "FitGenics",
            "And others....."
          ]
        }
      ]
    }
  ];

  const [openCategory, setOpenCategory] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F5FCFE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4">
            Advanced Testing Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the genetic, molecular, genomic and microbiome testing services available through Genesis Diagnostics & Imaging Centre.
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                className="w-full px-6 py-6 md:px-8 flex items-center justify-between bg-white focus:outline-none"
              >
                <div className="flex items-center text-left">
                  <div className="w-12 h-12 rounded-xl bg-medical/10 flex items-center justify-center mr-4 md:mr-6 flex-shrink-0 glow-red">
                    <cat.icon className="w-6 h-6 text-medical" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2 md:line-clamp-none">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {openCategory === idx ? (
                    <ChevronUp className="w-6 h-6 text-medical" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openCategory === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-8 md:px-8 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cat.subcategories.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-slate-50 p-6 rounded-xl border border-border/50">
                        <h4 className="font-bold text-primary mb-4 pb-2 border-b border-border/60">
                          {sub.name}
                        </h4>
                        {sub.tests.length > 0 && (
                          <ul className="space-y-3">
                            {sub.tests.map((test, tIdx) => (
                              <li key={tIdx} className="flex items-start text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-medical mt-1.5 mr-3 flex-shrink-0"></span>
                                <span className="leading-relaxed">{test}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white rounded-3xl p-10 border border-border/60 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-heading font-extrabold text-primary mb-3">
            Need help choosing a test?
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Contact Genesis Diagnostics & Imaging Centre for enquiries about available testing services.
          </p>
          <a href="tel:+919701552056" className="btn bg-medical hover:bg-medical/90 text-white border-0 px-8 py-3 rounded-xl glow-red-hover inline-flex items-center justify-center transition-all w-full sm:w-auto">
            Call Genesis Diagnostic
          </a>
          <p className="mt-4 font-bold text-primary tracking-wide">+91 97015 52056</p>
        </div>
      </div>
    </section>
  );
}
