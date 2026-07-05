import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Kvkk() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.kvkk')}>
      {isTr ? (
        <>
          <h3>6698 Sayılı KVKK Kapsamında Bilgilendirme</h3>
          <p>
            <strong>Best Games & Shield</strong> platformu olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
            kapsamında işlenecek herhangi bir kişisel veri (Ad, soyad, e-posta, IP adresi, cihaz bilgisi, log kaydı vb.) 
            <strong>toplamamaktayız.</strong>
          </p>
          <p>
            Sistemlerimiz tamamen anonim çalışacak şekilde tasarlanmıştır. Veritabanımızda size ait hiçbir iz bırakılmaz. 
            Kayıt olma, üye olma veya form doldurma gibi işlemler bulunmadığından, tarafımızca işlenen bir veri bütünü yoktur.
          </p>
          <p>
            Yine de kanuni haklarınızla (KVKK Madde 11) ilgili sorularınız veya bizimle paylaşmak istediğiniz bir durum 
            olursa, aşağıdaki e-posta adresinden iletişime geçebilirsiniz:
          </p>
          <p>
            İletişim: <a href="mailto:legal@bestgames.shield">legal@bestgames.shield</a>
          </p>
        </>
      ) : (
        <>
          <h3>Information Under the Turkish Data Protection Law (KVKK)</h3>
          <p>
            As the <strong>Best Games & Shield</strong> platform, we <strong>do not collect or process</strong> any personal data 
            (such as names, emails, IP addresses, device info, or server logs) under the Turkish Personal Data Protection Law No. 6698.
          </p>
          <p>
            Our systems are designed to operate completely anonymously. We do not have user accounts, registration forms, 
            or databases storing your information.
          </p>
          <p>
            If you have any questions regarding your rights under Article 11 of the KVKK, please contact us at:
          </p>
          <p>
            Contact: <a href="mailto:legal@bestgames.shield">legal@bestgames.shield</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
