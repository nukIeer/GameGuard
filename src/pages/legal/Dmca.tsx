import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Dmca() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.dmca')}>
      {isTr ? (
        <>
          <h3>Telif Hakkı İhlali Bildirimi (DMCA)</h3>
          <p>
            <strong>Best Games & Shield</strong>, fikri mülkiyet haklarına saygı duyar. Sunucularımızda herhangi bir 
            dosya (APK vb.) barındırmamaktayız; yalnızca üçüncü taraf mağazalara veya dış bağlantılara yönlendirme 
            yapmaktayız.
          </p>
          <p>
            Eğer bir bağlantının, görselin veya metnin telif hakkınızı ihlal ettiğini düşünüyorsanız, lütfen aşağıdaki 
            bilgilerle birlikte bize ulaşın. Talebiniz incelenecek ve geçerli ise ilgili içerik/bağlantı en fazla 48 saat 
            içinde sistemimizden tamamen kaldırılacaktır.
          </p>
          <h3>Gerekli Bilgiler:</h3>
          <ul>
            <li>İhlal edildiğini iddia ettiğiniz eserin veya hakların tanımı</li>
            <li>Sitemizde kaldırılmasını istediğiniz URL veya bağlantı</li>
            <li>Adınız, adresiniz, telefon numaranız ve e-posta adresiniz</li>
            <li>Talebinizin iyi niyetli olduğuna dair bir beyan</li>
            <li>Yetkili kişinin elektronik imzası</li>
          </ul>
          <p>
            DMCA Bildirimleri için: <a href="mailto:dmca@bestgames.shield">dmca@bestgames.shield</a>
          </p>
        </>
      ) : (
        <>
          <h3>Copyright Infringement Notice (DMCA)</h3>
          <p>
            <strong>Best Games & Shield</strong> respects intellectual property rights. We do not host any files (APKs, etc.) 
            on our servers; we only provide redirect links to third-party stores or external mirrors.
          </p>
          <p>
            If you believe that a link, image, or text on our site infringes your copyright, please contact us with the 
            information below. Upon valid request, the infringing content/link will be permanently removed from our system 
            within 48 hours.
          </p>
          <h3>Required Information:</h3>
          <ul>
            <li>Identification of the copyrighted work claimed to be infringed</li>
            <li>The specific URL or link on our site that you want removed</li>
            <li>Your name, address, phone number, and email address</li>
            <li>A statement of good faith regarding the unauthorized use</li>
            <li>An electronic signature of the authorized person</li>
          </ul>
          <p>
            Send DMCA notices to: <a href="mailto:dmca@bestgames.shield">dmca@bestgames.shield</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
