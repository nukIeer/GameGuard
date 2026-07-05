import { Shield, Zap, Globe, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ShieldApp() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <div className="bg-accent-green/10 border-b border-white/[0.05] pt-12 pb-16 px-4 text-center relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-green/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-accent-green to-accent-green/60 rounded-3xl mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(20,200,80,0.4)] mb-6 relative border border-white/[0.1]">
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-3xl mix-blend-overlay"></div>
            <Shield className="w-12 h-12 text-bg-base relative z-10 drop-shadow-md" strokeWidth={2} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-md">Best Games & Shield</h1>
          <p className="text-lg text-text-secondary max-w-lg mx-auto mb-8 font-medium">
            {t('shield.subtitle', 'Oyun deneyiminizi bir üst seviyeye taşıyın. Oyun hızlandırma, gecikme (ping) düşürme ve güvenli DNS özellikleriyle tanışın.')}
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.bestgames.shield" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full max-w-xs relative overflow-hidden bg-accent-green text-bg-base font-black px-8 py-4 rounded-full text-lg hover:bg-accent-green-pressed transition-colors shadow-[0_0_30px_rgba(20,200,80,0.3)] group"
          >
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite] skew-x-[-20deg]"></div>
            <Download className="w-6 h-6 relative z-10" strokeWidth={2.5} />
            <span className="relative z-10">{t('shield.download', 'Hemen İndir')}</span>
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 grid sm:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Zap}
          title={t('shield.f1_title', 'Oyun Hızlandırıcı (Game Booster)')}
          desc={t('shield.f1_desc', 'Arka plandaki gereksiz uygulamaları kapatarak oyunlarınız için maksimum RAM ve işlemci performansı sağlar. FPS düşüşlerine son verin.')}
        />
        <FeatureCard 
          icon={Globe}
          title={t('shield.f2_title', 'DNS Değiştirici & Ping Düşürücü')}
          desc={t('shield.f2_desc', "Oyun sunucularına en hızlı ve güvenli yoldan bağlanın. Optimize edilmiş oyuncu DNS'leri ile gecikme süresini (ping) minimuma indirin.")}
        />
        <FeatureCard 
          icon={Shield}
          title={t('shield.f3_title', 'Güvenli Bağlantı (Shield)')}
          desc={t('shield.f3_desc', 'Kötü amaçlı yazılımları, izleyicileri ve rahatsız edici içerikleri engelleyen özel filtreleme sistemi ile güvende kalın.')}
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-bg-surface/30 backdrop-blur-md border border-white/[0.05] p-6 rounded-3xl flex flex-col gap-4 hover:border-accent-green/50 hover:bg-bg-surface/60 transition-all hover:shadow-[0_0_30px_rgba(20,200,80,0.1)] group">
      <div className="w-14 h-14 rounded-2xl bg-bg-surface/50 border border-white/[0.05] shadow-inner flex items-center justify-center text-accent-green group-hover:scale-110 group-hover:bg-accent-green/20 transition-all">
        <Icon className="w-7 h-7" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}
