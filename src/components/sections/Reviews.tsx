import { Star, MessageSquareQuote, ThumbsUp, Heart, CheckCircle } from 'lucide-react';
import { genesisData } from '../../data/genesis';

const themeIcons = [Heart, ThumbsUp, CheckCircle, MessageSquareQuote];

export function Reviews() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(genesisData.address)}`;

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-5 tracking-tight">
              Patient Experiences
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              See what patients have shared about their experience with {genesisData.name}.
            </p>
          </div>

          {/* Rating Area */}
          <div className="bg-slate-50 border border-border/60 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm shrink-0">
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm flex items-center">
                <span className="font-bold text-primary text-base mr-2">{genesisData.reviews.rating}</span>
                <span className="text-text-secondary">{genesisData.reviews.count} Google reviews</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-border/60 mx-2"></div>
            
            <a 
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-sm py-2 px-4 shadow-sm"
            >
              View on Google
            </a>
          </div>
        </div>

        {/* Review Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {genesisData.reviews.themes.map((theme, index) => {
            const Icon = themeIcons[index % themeIcons.length];
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 border border-border/60 shadow-[0_2px_12px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-border/80 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-border/50">
                  <Icon className="h-5 w-5 text-medical" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-heading font-extrabold text-primary mb-3">
                  {theme.title}
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed flex-grow">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
