import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bookmark, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BottomNav() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
      <div className="bg-bg-surface/50 backdrop-blur-2xl border-t border-white/[0.05] max-w-lg mx-auto shadow-[0_-4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16">
        <NavItem to="/" icon={Home} label="Ana Sayfa" active={pathname === '/'} />
        <NavItem to="/search" icon={Search} label="Arama" active={pathname === '/search'} />
        <NavItem to="/favorites" icon={Bookmark} label="Favoriler" active={pathname === '/favorites'} />
        <NavItem to="/shield" icon={ShieldCheck} label="Shield" active={pathname === '/shield'} />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon: Icon, label, active }: any) {
  return (
    <Link to={to} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active ? 'text-accent-green' : 'text-text-secondary hover:text-text-primary'}`}>
      <Icon className={`w-5 h-5 ${active ? 'fill-accent-green' : ''}`} />
      <span className="text-[10px] font-bold">{label}</span>
    </Link>
  );
}
