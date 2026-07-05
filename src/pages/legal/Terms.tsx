import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Terms() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.terms')}>
      {isTr ? (
        <>
          <h3>Hizmetin Doğası</h3>
          <p>
            <strong>Best Games & Shield</strong>, Android oyunları için yalnızca bir keşif ve yönlendirme (showcase-redirect) 
            platformudur. Sunucularımızda hiçbir APK dosyası, telif hakkıyla korunan materyal veya kurulum dosyası barındırılmaz.
          </p>
          <h3>Sorumluluk Reddi (Disclaimer)</h3>
          <p>
            Sitemizdeki bağlantılar tamamen bilgilendirme amaçlıdır. Kullanıcıların indirdiği ve cihazlarına kurduğu dosyaların 
            güvenliğinden, cihazlarında oluşabilecek hasarlardan veya veri kayıplarından platformumuz sorumlu tutulamaz. 
            Tüm içerikler "olduğu gibi" (as is) sağlanır ve zımni veya açık hiçbir garanti verilmez.
          </p>
          <h3>Ticari Markalar</h3>
          <p>
            Sitemizde görünen oyun isimleri, logoları ve görselleri tamamen ilgili oyun geliştiricilerine ve hak sahiplerine aittir. 
            Platformumuzun bu oyunların resmi yayıncılarıyla hiçbir doğrudan veya dolaylı bağlantısı yoktur.
          </p>
        </>
      ) : (
        <>
          <h3>Nature of the Service</h3>
          <p>
            <strong>Best Games & Shield</strong> is solely a discovery and redirect (showcase) platform for Android games. 
            We do not host any APK files, copyrighted materials, or installation files on our servers.
          </p>
          <h3>Disclaimer of Liability</h3>
          <p>
            The links on our site are provided for informational purposes. Our platform cannot be held responsible for the safety 
            of the files users download and install, nor for any device damage or data loss. All content is provided "as is" 
            without warranty of any kind, express or implied.
          </p>
          <h3>Trademarks</h3>
          <p>
            All game names, logos, and images appearing on our site are the property of their respective developers and rights holders. 
            Our platform is not affiliated with, endorsed by, or connected to the official publishers of these games.
          </p>
        </>
      )}
    </LegalLayout>
  );
}
