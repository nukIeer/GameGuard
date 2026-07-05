import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Globe, Menu, X } from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-surface/50 backdrop-blur-2xl border-b border-white/[0.05] py-3 px-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <Link to="/shield" className="bg-accent-green p-1.5 rounded-lg hover:scale-105 transition-transform" title="Shield App Özellikleri">
              <ShieldCheck className="w-6 h-6 text-bg-base" strokeWidth={2.5} />
            </Link>
            <Link to="/" className="flex flex-col group-hover:opacity-80 transition-opacity">
              <span className="font-bold text-lg text-text-primary leading-tight tracking-tight">
                {t('header.title')}
              </span>
              <span className="text-[10px] font-semibold text-accent-green uppercase tracking-wider leading-none">
                {t('header.subtitle')}
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors bg-bg-elevated px-3 py-1.5 rounded-full text-xs font-semibold"
            >
              <Globe className="w-4 h-4" />
              {i18n.language === 'tr' ? 'EN' : 'TR'}
            </button>

            <button 
              onClick={() => setMenuOpen(true)}
              className="p-2 text-text-primary bg-bg-elevated rounded-full hover:bg-border-subtle transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hamburger Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
          <div className="relative w-64 max-w-[80vw] h-full bg-bg-surface flex flex-col p-4 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-6">
              <span className="font-black text-text-primary">Menü</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-text-secondary hover:text-text-primary bg-bg-elevated rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2 flex-1">
              <Link to="/shield" onClick={() => setMenuOpen(false)} className="py-2.5 px-3 rounded-lg text-sm font-bold text-accent-green hover:bg-bg-elevated transition-colors flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Shield App Özellikleri
              </Link>
              <div className="h-px bg-border-subtle my-2 mx-3"></div>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="py-2.5 px-3 rounded-lg text-sm font-bold text-text-primary hover:bg-bg-elevated transition-colors">Hakkımızda</Link>
              <Link to="/privacy" onClick={() => setMenuOpen(false)} className="py-2.5 px-3 rounded-lg text-sm font-bold text-text-primary hover:bg-bg-elevated transition-colors">Gizlilik Politikası</Link>
              <Link to="/terms" onClick={() => setMenuOpen(false)} className="py-2.5 px-3 rounded-lg text-sm font-bold text-text-primary hover:bg-bg-elevated transition-colors">Kullanım Koşulları</Link>
              <Link to="/dmca" onClick={() => setMenuOpen(false)} className="py-2.5 px-3 rounded-lg text-sm font-bold text-text-primary hover:bg-bg-elevated transition-colors">DMCA</Link>
              <Link to="/kvkk" onClick={() => setMenuOpen(false)} className="py-2.5 px-3 rounded-lg text-sm font-bold text-text-primary hover:bg-bg-elevated transition-colors">KVKK</Link>
            </nav>

            <div className="mt-auto border-t border-border-subtle pt-4">
               <button 
                onClick={() => { toggleLang(); setMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 text-text-primary bg-bg-elevated px-4 py-3 rounded-xl text-sm font-bold hover:bg-border-subtle transition-colors"
              >
                <Globe className="w-5 h-5 text-accent-green" />
                Dil Değiştir ({i18n.language === 'tr' ? 'EN' : 'TR'})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

