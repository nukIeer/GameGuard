import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function About() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.about')}>
      {isTr ? (
        <>
          <h3>Biz Kimiz?</h3>
          <p>
            <strong>Best Games & Shield</strong>, Android oyuncuları için bağımsız ve şeffaf bir oyun keşif dizinidir. 
            Amacımız, piyasadaki en popüler ve yeni oyunları temiz, hızlı ve karanlık temalı (dark mode) modern bir 
            arayüzle sizlere sunmaktır.
          </p>
          <h3>Neden Biz?</h3>
          <ul>
            <li><strong>Sıfır Log:</strong> Gizliliğe saygı duyuyoruz, sizi hiçbir şekilde takip etmiyoruz.</li>
            <li><strong>Şeffaf Yönlendirme:</strong> İndirme linkleri temizdir, APK veya yürütülebilir dosyaları kendi sunucularımızda saklamayız.</li>
            <li><strong>Hızlı Arayüz:</strong> Gereksiz reklamlarla veya karmaşık menülerle boğuşmadan doğrudan içeriğe ulaşırsınız.</li>
          </ul>
          <h3>İletişim</h3>
          <p>
            Herhangi bir sorunuz, iş birliği teklifiniz veya geri bildiriminiz için bize her zaman ulaşabilirsiniz.
          </p>
          <p>
            E-posta: <a href="mailto:hello@bestgames.shield">hello@bestgames.shield</a>
          </p>
        </>
      ) : (
        <>
          <h3>Who Are We?</h3>
          <p>
            <strong>Best Games & Shield</strong> is an independent and transparent game discovery directory for Android gamers. 
            Our goal is to present the most popular and new games through a clean, fast, and modern dark-themed interface.
          </p>
          <h3>Why Us?</h3>
          <ul>
            <li><strong>Zero Logs:</strong> We respect your privacy and do not track your activity.</li>
            <li><strong>Transparent Redirects:</strong> Download links are clean; we don't host any APKs or executables on our servers.</li>
            <li><strong>Fast Interface:</strong> You won't struggle with intrusive ads or bloated menus.</li>
          </ul>
          <h3>Contact</h3>
          <p>
            For any questions, collaboration inquiries, or feedback, feel free to reach out to us at any time.
          </p>
          <p>
            Email: <a href="mailto:hello@bestgames.shield">hello@bestgames.shield</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
