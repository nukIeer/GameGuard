import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="mt-16 border-t border-border-subtle bg-bg-surface py-10 px-4">
      <div className="max-w-lg mx-auto flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-text-secondary mb-6">
          <Link to="/privacy" className="hover:text-text-primary transition-colors">{t('legal.privacy')}</Link>
          <Link to="/terms" className="hover:text-text-primary transition-colors">{t('legal.terms')}</Link>
          <Link to="/kvkk" className="hover:text-text-primary transition-colors">{t('legal.kvkk')}</Link>
          <Link to="/dmca" className="hover:text-text-primary transition-colors">{t('legal.dmca')}</Link>
          <Link to="/about" className="hover:text-text-primary transition-colors">{t('legal.about')}</Link>
        </div>
        
        <p className="text-xs text-text-faint max-w-2xl leading-relaxed">
          {t('legal.disclaimer')}
        </p>
      </div>
    </footer>
  );
}
