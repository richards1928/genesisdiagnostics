export const genesisData = {
  name: "Genesis Diagnostics & Imaging Centre",
  category: "Medical Laboratory / Diagnostic Center",
  rating: 5.0,
  reviewsCount: 24,
  address: "660, 9th Phase, Venkata Ramana Colony, Gokul Plots, Hyderabad, Telangana 500085",
  phone: "+91 97015 52056",
  tagline: "DIAGNOSTIC TESTING & HEALTH CHECK-UP SERVICES",
  founder: {
    name: "Bobbili Naleen Kumar",
    designation: "Founder and Senior technician-(MRI)",
    phone: "+91 97015 52056",
    address: "Plot No.660, Near to Gokul Plots, Venkataramana Colony, KPHB Colony, Hyderabad, Telangana -500085"
  },
  hours: "Open · Closes 9 PM",
  plusCode: "F9PJ+PM Hyderabad, Telangana",
  reviewsThemes: [
    "Cooperative staff",
    "Affordable / low-cost services",
    "Comfortable patient experience",
    "Health checkups",
    "Hygienic sample collection",
    "Experienced technicians",
    "Polite, friendly and helpful staff",
    "Clear explanation of testing procedures"
  ],
  testimonials: [
    { name: "Juvas Aditya", text: "Polite and cooperative staff, clear explanation of testing procedures." },
    { name: "Rajesh D", text: "Affordable services and a comfortable patient experience." },
    { name: "Mahathi Sharma", text: "Hygienic sample collection and experienced technicians." }
  ],
  services: [
    {
      title: "Diagnostic Services",
      description: "General diagnostic testing and analysis services.",
    },
    {
      title: "Health Check-ups",
      description: "Routine health check-up services for preventative care.",
    },
    {
      title: "Full-Body Tests",
      description: "Comprehensive full-body testing options.",
    },
    {
      title: "Sample Collection",
      description: "Safe and hygienic sample collection at our center.",
    }
  ],
  reviews: {
    rating: "5.0",
    count: 24,
    link: "https://maps.google.com/?cid=1234567890",
    themes: [
      {
        title: "Comfortable Experience",
        description: "Patients have described their experience as comfortable and convenient."
      },
      {
        title: "Helpful & Cooperative Staff",
        description: "Reviews frequently mention polite, cooperative, and helpful staff."
      },
      {
        title: "Hygienic Sample Collection",
        description: "Patients have specifically mentioned hygienic sample collection and experienced technicians."
      },
      {
        title: "Clear & Affordable Service",
        description: "Reviews mention clear explanations and affordable services."
      }
    ]
  },
  testsAndPrices: {
    blood: [
      { name: "CBP", price: 400 },
      { name: "ESR", price: 300 },
      { name: "Blood Grouping and RH Type", price: 200 },
      { name: "Fasting / Post Lunch Blood Sugars", price: 200 },
      { name: "Random Blood Sugars", price: 100 },
      { name: "Blood Urea", price: 250 },
      { name: "Serum Creatinine", price: 250 },
      { name: "Serum Uric Acid", price: 250 },
      { name: "Serum Calcium", price: 250 },
      { name: "Serum Electrolytes", price: 600 },
      { name: "Liver Function Tests (LFT)", price: 700 },
      { name: "TSH Panel", price: 700 },
      { name: "TSH Only", price: 400 },
      { name: "Lipid Profile", price: 700 },
      { name: "Hepatitis B (HBsAg)", price: 700 },
      { name: "HIV I & II", price: 700 },
      { name: "VDRL", price: 600 },
      { name: "ECG", price: 300 }
    ],
    urine: [
      { name: "CUE", price: 300 }
    ],
    radiology: [
      { name: "X-Ray Single View", price: 500 },
      { name: "X-Ray Two Views", price: 700 },
      { name: "X-Ray Both Knees (AP/Lateral)", price: 1200 }
    ]
  },
  homeCollection: {
    freeDistance: "within 3 km",
    feeBeyond: 200
  },
  advancedDiagnostics: [
    {
      category: "GENOMIC TESTS",
      sections: [
        {
          title: "Advanced Sequencing",
          items: [
            "CES", "WES", "WGS", "MGS", "WES/CES + MGS",
            "Couple/Trio/Family based sequencing", "Couple Carrier Sequencing",
            "Sanger Sequencing", "Fragile X Testing"
          ]
        },
        {
          title: "Molecular Cytogenetic Testing",
          items: [
            "CMA", "FISH", "MLPA", "NIPS/NIPT", "Karyotyping"
          ]
        },
        {
          title: "Targeted Gene Panels",
          items: ["Targeted Gene Panels"]
        }
      ]
    },
    {
      category: "MOLECULAR DIAGNOSTICS",
      sections: [
        {
          title: "Oncology Panel",
          items: [
            "Hereditary Cancer Testing", "Somatic Mutation Panels",
            "Liquid Biopsy", "HDR & HRR Testing",
            "Pharmacogenomics Onco Panel", "OncoX Traq"
          ]
        },
        {
          title: "Infectious Disease Diagnosis",
          items: [
            "HPV High Risk Genotyping", "HPV Sanger Sequencing",
            "HCV", "HBV", "CMV"
          ]
        },
        {
          title: "Advanced Biochemical Tests",
          items: [
            "New Born Screening - NBS", "FRAT (Folate Receptor)",
            "Stool SCFA (Acetate, Pyruvate, Butyrate)"
          ]
        }
      ]
    },
    {
      category: "MICROBIOME TESTS",
      sections: [
        {
          title: "Gut Microbiome",
          items: ["GutGenics (For Gut Health)", "GutGenics + ASD"]
        },
        {
          title: "Microbial & Metagenomics",
          items: [
            "ResistomeX (Rapid AMR)", "Metagenomics",
            "Shotgun Metagenomics", "Microbial WGS",
            "Microbial Identification (Sanger Sequencing)"
          ]
        },
        {
          title: "Preventive Test Panel",
          items: ["WellGenics", "MediGenics", "CardioGenics", "FitGenics"]
        }
      ]
    }
  ]
};
