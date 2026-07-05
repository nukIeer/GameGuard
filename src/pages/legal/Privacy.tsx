import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.privacy')}>
      {isTr ? (
        <>
          <p><strong>Son Güncelleme Tarihi:</strong> 1 Ocak 2024</p>
          <p>
            Best Games & Shield ("Şirket", "Platform", "Biz" veya "Bizi") olarak gizliliğinize büyük önem veriyoruz. 
            İşbu Gizlilik Politikası, web sitemizi ve/veya uygulamalarımızı ("Hizmetler") kullanımınız sırasında 
            elde edilen kişisel verilerinizin nasıl toplandığını, kullanıldığını, korunduğunu ve paylaşıldığını açıklar.
            Hizmetlerimizi kullanarak, bu politikada belirtilen veri uygulamalarını kabul etmiş olursunuz.
          </p>

          <h3>1. Veri Toplama ve "Sıfır Log" (Zero-Log) Yaklaşımı</h3>
          <p>
            Platformumuz, kullanıcıların mahremiyetine en yüksek derecede saygı duyacak şekilde tasarlanmıştır. 
            Sistemlerimiz üzerinde <strong>kesin bir Sıfır Log (Zero-Log) politikası</strong> uygulanmaktadır. 
            Aşağıdaki verileri <strong>KESİNLİKLE</strong> toplamıyor ve saklamıyoruz:
          </p>
          <ul>
            <li>Kullanıcıların IP adresleri</li>
            <li>Tarama ve arama geçmişi</li>
            <li>İndirilen oyun veya uygulama kayıtları</li>
            <li>Cihaz kimlik numaraları (IMEI, MAC adresleri vb.)</li>
            <li>Gerçek zamanlı coğrafi konum verileri</li>
          </ul>

          <h3>2. Hangi Verileri Hangi Şartlarda Topluyoruz?</h3>
          <p>
            Sıfır log politikamızın tek istisnası, bize doğrudan kendi rızanızla sağladığınız iletişim bilgileridir. 
            Eğer bizimle destek, geri bildirim veya iş birliği amacıyla e-posta (örn. trnlab@proton.me üzerinden) 
            yoluyla iletişime geçerseniz, bize ilettiğiniz adınız, e-posta adresiniz ve mesajınızın içeriği 
            yalnızca talebinize yanıt vermek amacıyla kullanılır ve yasal saklama süresi bittikten sonra derhal imha edilir.
          </p>

          <h3>3. Çerezler (Cookies) ve Yerel Depolama</h3>
          <p>
            Web sitemiz, temel fonksiyonların (örneğin karanlık tema tercihi, dil seçimi, favori oyunlar) çalışabilmesi için 
            tarayıcınızın "Local Storage" (Yerel Depolama) özelliğini kullanır. Bu veriler yalnızca cihazınızda tutulur ve 
            bizim sunucularımıza gönderilmez veya tarafımızca izlenemez. Performans veya reklam amaçlı üçüncü taraf 
            takip çerezleri kullanılmamaktadır.
          </p>

          <h3>4. Üçüncü Taraf Bağlantılar ve Yönlendirmeler</h3>
          <p>
            Hizmetlerimiz, indirme işlemleri için Google Play Store, Galaxy Store veya diğer resmi üçüncü taraf 
            sunucularına (CDN, ayna sunucular) yönlendirmeler içerir. Bu dış bağlantılara tıkladığınızda, 
            söz konusu üçüncü tarafların gizlilik politikaları ve kullanım koşulları geçerli olur. 
            Üçüncü tarafların veri toplama pratikleri üzerinde hiçbir kontrolümüz bulunmamaktadır ve bunlardan 
            sorumlu tutulamayız.
          </p>

          <h3>5. Veri Güvenliği</h3>
          <p>
            Veri toplamıyor olmamıza rağmen, web sitemizin altyapısını ve sunucularımızı siber saldırılara, 
            kötü amaçlı yazılımlara ve yetkisiz erişimlere karşı korumak için sektör standartlarında güvenlik önlemleri, 
            SSL/TLS şifreleme ve modern web güvenliği protokolleri uygulamaktayız.
          </p>

          <h3>6. Çocukların Gizliliği</h3>
          <p>
            Hizmetlerimiz genel kitleye hitap etmekte olup, 13 yaşından (veya yargı bölgesine bağlı olarak 16 yaşından) 
            küçük çocuklardan bilerek kişisel veri toplamıyoruz. Eğer bir ebeveyn veya vasi iseniz ve çocuğunuzun 
            bize kişisel veri sağladığını fark ederseniz, lütfen derhal bizimle iletişime geçin.
          </p>

          <h3>7. Gizlilik Politikasındaki Değişiklikler</h3>
          <p>
            Yasal düzenlemelere veya hizmet politikalarımızdaki değişikliklere uyum sağlamak amacıyla bu Gizlilik Politikası'nı 
            zaman zaman güncelleyebiliriz. Güncellemeler, bu sayfada yeni "Son Güncelleme Tarihi" ile yayımlandığı an 
            yürürlüğe girer.
          </p>

          <h3>8. İletişim</h3>
          <p>
            Gizlilik politikamızla ilgili her türlü soru, görüş veya talebiniz için lütfen bizimle aşağıdaki e-posta 
            adresinden iletişime geçin:
            <br />
            <strong>E-posta:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
        </>
      ) : (
        <>
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          <p>
            Best Games & Shield ("Company", "Platform", "We", or "Us") takes your privacy extremely seriously. 
            This Privacy Policy explains our data collection, use, protection, and sharing practices when you 
            use our website and/or applications ("Services"). By using our Services, you consent to the practices 
            described in this policy.
          </p>

          <h3>1. Data Collection and Zero-Log Policy</h3>
          <p>
            Our platform is designed with the highest respect for user privacy. We enforce a <strong>strict Zero-Log 
            policy</strong> on all our systems. We <strong>ABSOLUTELY DO NOT</strong> collect or store the following:
          </p>
          <ul>
            <li>User IP addresses</li>
            <li>Browsing and search history</li>
            <li>Records of downloaded games or applications</li>
            <li>Device identifiers (IMEI, MAC addresses, etc.)</li>
            <li>Real-time geographic location data</li>
          </ul>

          <h3>2. What Data We May Collect</h3>
          <p>
            The only exception to our Zero-Log policy is communication data you voluntarily provide to us. 
            If you contact us for support, feedback, or business inquiries via email (e.g., via trnlab@proton.me), 
            the information you provide (such as your name, email address, and message content) is used solely 
            to respond to your inquiry and is securely deleted after the legal retention period expires.
          </p>

          <h3>3. Cookies and Local Storage</h3>
          <p>
            Our website utilizes your browser's "Local Storage" strictly for essential functions (such as dark mode 
            preferences, language selection, and favorite games). This data is stored entirely on your device and 
            is never sent to our servers or tracked by us. We do not use third-party tracking or advertising cookies.
          </p>

          <h3>4. Third-Party Links and Redirects</h3>
          <p>
            Our Services contain links directing you to the Google Play Store, Galaxy Store, or other official 
            third-party servers (CDNs, mirror servers) for downloads. Once you click these external links, the 
            privacy policies and terms of those third parties apply. We have no control over and assume no 
            responsibility for the data practices of third-party platforms.
          </p>

          <h3>5. Data Security</h3>
          <p>
            Even though we do not collect personal data, we employ industry-standard security measures, SSL/TLS encryption, 
            and modern web security protocols to protect our infrastructure and servers from cyber attacks, malware, 
            and unauthorized access.
          </p>

          <h3>6. Children's Privacy</h3>
          <p>
            Our Services are intended for a general audience, and we do not knowingly collect personal data from children 
            under the age of 13 (or 16 depending on the jurisdiction). If you are a parent or guardian and believe your 
            child has provided us with personal data, please contact us immediately.
          </p>

          <h3>7. Changes to the Privacy Policy</h3>
          <p>
            We reserve the right to update this Privacy Policy from time to time to reflect changes in legal requirements 
            or our services. Updates are effective immediately upon posting on this page with a new "Last Updated" date.
          </p>

          <h3>8. Contact Information</h3>
          <p>
            For any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}

