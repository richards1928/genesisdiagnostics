import { ShieldCheck, HeartPulse, Stethoscope, Users } from 'lucide-react';

const features = [
  {
    name: 'Affordable Services',
    description: 'Patients have highlighted the affordable nature of the services in their reviews.',
    icon: HeartPulse,
  },
  {
    name: 'Hygienic Sample Collection',
    description: 'Patients have specifically mentioned hygienic sample collection in their reviews.',
    icon: ShieldCheck,
  },
  {
    name: 'Experienced Technicians',
    description: 'Reviews mention experienced technicians and helpful service.',
    icon: Stethoscope,
  },
  {
    name: 'Patient-Friendly Staff',
    description: 'Multiple reviews describe the staff as polite, cooperative and helpful.',
    icon: Users,
  },
];

export function WhyGenesis() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-5 tracking-tight">
            Why Choose Genesis Diagnostic?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Patient experiences highlight the people-focused service behind Genesis Diagnostic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="group h-full flex flex-col bg-white rounded-2xl p-8 border border-border/60 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-border"
            >
              <div className="w-14 h-14 bg-background-soft rounded-xl flex items-center justify-center mb-8 border border-border/50 group-hover:bg-medical/5 group-hover:border-medical/20 group-hover:glow-red transition-all">
                <feature.icon className="h-6 w-6 text-medical" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-3 leading-snug">
                {feature.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
