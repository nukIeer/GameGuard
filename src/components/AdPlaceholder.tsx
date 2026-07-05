import { Shield, Zap, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdPlaceholder({ className = "" }: { className?: string }) {
  return (
    <Link to="/shield" className={`block w-full relative overflow-hidden rounded-3xl group border border-accent-green/20 bg-bg-surface/30 backdrop-blur-md my-6 shadow-[0_0_30px_rgba(20,200,80,0.05)] ${className}`}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
      
      <div className="p-6 flex items-center gap-5 relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green to-accent-green/80 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(20,200,80,0.3)] group-hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(20,200,80,0.5)]">
          <Shield className="w-8 h-8 text-bg-base" strokeWidth={2.5} />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="bg-accent-green/10 text-accent-green text-[10px] font-black uppercase px-2 py-0.5 rounded border border-accent-green/20 backdrop-blur-sm shadow-inner">Sponsorlu</span>
          </div>
          <h3 className="text-lg font-black text-white leading-tight mb-1 truncate drop-shadow-md">
            Shield App & Game Booster
          </h3>
          <p className="text-xs text-text-secondary leading-snug line-clamp-2 font-medium">
            Oyunlarda sıfır kasma, düşük ping! RAM'i temizle ve oyun deneyimini uçuşa geçir.
          </p>
        </div>
      </div>
      
      {/* Bottom action */}
      <div className="bg-accent-green/10 border-t border-accent-green/10 px-6 py-3 flex items-center justify-between group-hover:bg-accent-green/20 transition-colors backdrop-blur-sm">
        <div className="flex items-center gap-2 text-accent-green text-sm font-bold">
          <Zap className="w-4 h-4 fill-accent-green" /> <span>Hemen İncele</span>
        </div>
        <Download className="w-5 h-5 text-accent-green" />
      </div>
    </Link>
  );
}
