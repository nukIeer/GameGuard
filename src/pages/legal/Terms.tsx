import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Terms() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.terms')}>
      {isTr ? (
        <>
          <p><strong>Son Güncelleme Tarihi:</strong> 1 Ocak 2024</p>
          <p>
            Best Games & Shield ("Platform", "Biz") tarafından sunulan web sitesini ve mobil uygulamaları ("Hizmetler") 
            kullanmadan önce lütfen bu Kullanım Koşulları'nı ("Koşullar") dikkatlice okuyunuz. Hizmetlerimize erişerek 
            veya kullanarak, bu Koşullar ile bağlı olduğunuzu kabul edersiniz. Bu Koşulları kabul etmiyorsanız, 
            lütfen Hizmetlerimizi kullanmayınız.
          </p>

          <h3>1. Hizmetin Kapsamı ve Tanımı</h3>
          <p>
            Best Games & Shield, kullanıcıların oyunlara ve mobil uygulamalara kolay erişmesini, bunları performans 
            artırıcı araçlarla (Game Booster vb.) optimize etmesini sağlayan ve resmi indirme mağazalarına (örn. Google 
            Play Store) veya içerik dağıtım ağlarına (CDN) yönlendiren bağımsız bir aracı platformdur. Platformumuz 
            doğrudan yazılım barındırmaz; yalnızca üçüncü taraf bağlantılar sunar.
          </p>

          <h3>2. Kullanıcı Yükümlülükleri ve Yasaklı Kullanımlar</h3>
          <p>
            Hizmetlerimizi kullanırken aşağıdaki eylemlerde bulunmayacağınızı kabul, beyan ve taahhüt edersiniz:
          </p>
          <ul>
            <li>Türkiye Cumhuriyeti yasalarını, uluslararası hukuku veya bulunduğunuz ülkenin yerel yasalarını ihlal etmek.</li>
            <li>Platform altyapısına, sunucularımıza veya bağlı ağlara zarar vermek, aşırı yük bindirmek, DDOS saldırıları düzenlemek.</li>
            <li>Hizmetlerin işleyişine müdahale etmek için herhangi bir robot, örümcek (spider), kazıyıcı (scraper) veya diğer otomatik yöntemleri kullanmak.</li>
            <li>Telif hakkı, ticari marka, patent veya üçüncü tarafların diğer fikri mülkiyet haklarını ihlal etmek.</li>
            <li>Zararlı kodlar, virüsler, truva atları (trojan) veya kötü amaçlı yazılımlar (malware) dağıtmak.</li>
          </ul>

          <h3>3. Fikri Mülkiyet Hakları</h3>
          <p>
            Platformumuzda yer alan Best Games & Shield markası, logoları, özel grafikler, tasarım öğeleri ve kod altyapısı 
            şirketimizin mülkiyetindedir. Ancak, Platform üzerinden tanıtılan ve yönlendirilen oyunlar, logolar, karakterler 
            ve marka isimleri kendi ilgili sahiplerine ve yayıncılarına aittir. Bu üçüncü taraf içerikleri üzerinde 
            hiçbir mülkiyet veya telif hakkı iddia etmiyoruz.
          </p>

          <h3>4. Üçüncü Taraf İçerikler ve Bağlantılar</h3>
          <p>
            Platform, üçüncü taraf web sitelerine, uygulamalara veya hizmetlere (örneğin Google Play) bağlantılar içerebilir. 
            Bu bağlantılar yalnızca kullanıcılara kolaylık sağlamak amacıyla sunulmaktadır. Üçüncü taraf hizmetlerin, 
            içeriklerin veya indirmelerin güvenliği, yasallığı veya doğruluğu hakkında herhangi bir taahhütte bulunmuyoruz 
            ve bunlardan kaynaklanan doğrudan veya dolaylı hiçbir zarardan sorumlu değiliz.
          </p>

          <h3>5. Garanti Reddi (Disclaimer of Warranties)</h3>
          <p>
            Hizmetlerimiz "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır. Best Games & Shield; ticari elverişlilik, 
            belirli bir amaca uygunluk veya ihlal etmeme zımni garantileri dahil ancak bunlarla sınırlı olmamak üzere, 
            açık veya zımni hiçbir garanti vermez. Platformun kesintisiz, hatasız veya virüssüz çalışacağını garanti etmiyoruz.
          </p>

          <h3>6. Sorumluluğun Sınırlandırılması</h3>
          <p>
            Yürürlükteki yasaların izin verdiği azami ölçüde; Best Games & Shield, yöneticileri, çalışanları veya bağlı 
            kuruluşları; Hizmetlerin kullanımından veya kullanılamamasından kaynaklanan kar kaybı, veri kaybı, 
            cihaz hasarı (örneğin indirmelerden kaynaklı zararlar) veya herhangi bir dolaylı, arızi, özel, sonuç olarak 
            ortaya çıkan veya cezai hasarlardan hiçbir şart altında sorumlu tutulamaz.
          </p>

          <h3>7. Değişiklikler ve Sonlandırma</h3>
          <p>
            Platform, önceden haber vermeksizin Hizmetleri (veya herhangi bir bölümünü) geçici veya kalıcı olarak 
            değiştirme, askıya alma veya sonlandırma hakkını saklı tutar. Aynı şekilde bu Kullanım Koşullarını 
            dilediğimiz zaman güncelleyebiliriz; güncel koşullar sitede yayımlandığı an geçerli olur.
          </p>

          <h3>8. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h3>
          <p>
            Bu Koşullar Türkiye Cumhuriyeti kanunlarına tabi olacak ve bu kanunlara göre yorumlanacaktır. 
            Bu Koşullardan veya Hizmetlerin kullanımından doğan her türlü anlaşmazlıkta, Türk Mahkemeleri ve 
            İcra Daireleri münhasır yargı yetkisine sahip olacaktır.
          </p>

          <h3>9. İletişim</h3>
          <p>
            Bu Kullanım Koşulları ile ilgili sorularınız veya bildirimleriniz için bize ulaşabilirsiniz:
            <br />
            <strong>E-posta:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
        </>
      ) : (
        <>
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          <p>
            Please read these Terms of Service ("Terms") carefully before using the website and mobile applications 
            ("Services") provided by Best Games & Shield ("Platform", "We", "Us"). By accessing or using our Services, 
            you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
          </p>

          <h3>1. Scope and Description of Service</h3>
          <p>
            Best Games & Shield is an independent intermediary platform that provides users with easy access to games 
            and mobile applications, allows optimization through performance tools (e.g., Game Booster), and redirects 
            users to official download stores (e.g., Google Play Store) or content delivery networks (CDNs). We do not 
            host software files directly; we only provide third-party links.
          </p>

          <h3>2. User Obligations and Prohibited Conduct</h3>
          <p>
            While using our Services, you agree not to engage in any of the following activities:
          </p>
          <ul>
            <li>Violating any laws of the Republic of Turkey, international law, or local laws of your jurisdiction.</li>
            <li>Damaging, disabling, overburdening, or impairing our servers or networks (e.g., DDOS attacks).</li>
            <li>Using automated means (robots, spiders, scrapers) to access or extract data from our Services.</li>
            <li>Infringing upon intellectual property rights, trademarks, patents, or copyrights of third parties.</li>
            <li>Distributing viruses, trojans, malware, or any other harmful computer code.</li>
          </ul>

          <h3>3. Intellectual Property Rights</h3>
          <p>
            The Best Games & Shield brand, logos, custom graphics, design elements, and underlying codebase on our 
            Platform are our exclusive property. However, all games, logos, characters, and brand names promoted 
            and linked via the Platform belong strictly to their respective owners and publishers. We claim no 
            ownership or copyright over these third-party materials.
          </p>

          <h3>4. Third-Party Content and Links</h3>
          <p>
            The Platform may contain links to third-party websites, applications, or services (e.g., Google Play). 
            These links are provided solely as a convenience to you. We make no representations or warranties regarding 
            the safety, legality, or accuracy of third-party services, content, or downloads, and we are not responsible 
            for any direct or indirect damages arising from them.
          </p>

          <h3>5. Disclaimer of Warranties</h3>
          <p>
            Our Services are provided on an "as is" and "as available" basis. Best Games & Shield makes no warranties, 
            express or implied, including, but not limited to, implied warranties of merchantability, fitness for a 
            particular purpose, or non-infringement. We do not warrant that the Platform will be uninterrupted, 
            error-free, or free of viruses.
          </p>

          <h3>6. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by applicable law, Best Games & Shield, its directors, employees, or 
            affiliates shall not be liable under any circumstances for any indirect, incidental, special, consequential, 
            or punitive damages, including loss of profits, data loss, or device damage resulting from the use or 
            inability to use the Services.
          </p>

          <h3>7. Modifications and Termination</h3>
          <p>
            We reserve the right to modify, suspend, or discontinue the Services (or any part thereof) temporarily 
            or permanently, with or without notice. We may also update these Terms at any time; the updated terms 
            will be effective immediately upon posting on the site.
          </p>

          <h3>8. Governing Law and Dispute Resolution</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of Turkey. 
            Any disputes arising out of or in connection with these Terms or the use of the Services shall be subject 
            to the exclusive jurisdiction of the Courts and Execution Offices of Turkey.
          </p>

          <h3>9. Contact Information</h3>
          <p>
            If you have any questions or notices regarding these Terms of Service, you may contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
