import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.privacy')}>
      {isTr ? (
        <>
          <p><strong>Son Güncelleme:</strong> 1 Ocak 2024</p>
          <h3>Sıfır Log Politikası (Zero-Log Policy)</h3>
          <p>
            Gizliliğiniz bizim için en büyük önceliktir. <strong>Best Games & Shield</strong> olarak 
            sistemlerimizde kullanıcılarımıza ait hiçbir kişisel veriyi, IP adresini, cihaz bilgisini veya 
            indirme geçmişini kayıt altına almıyoruz (loglamıyoruz).
          </p>
          <h3>Hangi Verileri Toplamıyoruz?</h3>
          <ul>
            <li>IP adresleri veya konum bilgileri</li>
            <li>Tarayıcı ve cihaz kimlikleri (User-Agent)</li>
            <li>Hangi dosyaların veya oyunların indirildiği</li>
            <li>Arama sorguları</li>
          </ul>
          <h3>Üçüncü Taraf Bağlantılar</h3>
          <p>
            Sitemiz, kullanıcıları indirme işlemleri için Play Store veya resmi CDN/ayna (mirror) sunucularına 
            yönlendiren bir aracı platformdur. Tıkladığınız bağlantılar sizi farklı sitelere götürdüğünde, 
            o sitelerin kendi gizlilik politikaları geçerli olacaktır.
          </p>
          <p>
            İletişim ve gizlilik talepleriniz için: <a href="mailto:privacy@bestgames.shield">privacy@bestgames.shield</a>
          </p>
        </>
      ) : (
        <>
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          <h3>Zero-Log Policy</h3>
          <p>
            Your privacy is our top priority. <strong>Best Games & Shield</strong> does not log, store, 
            or process any personal data, IP addresses, device information, or download history on our servers.
          </p>
          <h3>What We Do NOT Collect</h3>
          <ul>
            <li>IP addresses or location data</li>
            <li>Browser and device identifiers (User-Agent)</li>
            <li>Which files or games you download</li>
            <li>Search queries</li>
          </ul>
          <h3>Third-Party Links</h3>
          <p>
            Our site acts as a redirectory. We link users to the Play Store or official CDN/mirror servers for downloads. 
            Once you click a link and leave our site, the privacy policies of those respective sites apply.
          </p>
          <p>
            For privacy inquiries: <a href="mailto:privacy@bestgames.shield">privacy@bestgames.shield</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
