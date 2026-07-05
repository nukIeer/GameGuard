import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Dmca() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.dmca')}>
      {isTr ? (
        <>
          <p><strong>Son Güncelleme Tarihi:</strong> 1 Ocak 2024</p>
          <h3>Telif Hakkı İhlali Bildirimi (DMCA Politikası)</h3>
          <p>
            <strong>Best Games & Shield</strong> (Bundan böyle "Platform" olarak anılacaktır), başkalarının fikri mülkiyet 
            haklarına saygı duyar ve kullanıcılarımızdan da aynısını bekler. Amerika Birleşik Devletleri Dijital Binyıl Telif Hakkı 
            Yasası (DMCA) ve Türkiye Cumhuriyeti 5846 sayılı Fikir ve Sanat Eserleri Kanunu ("FSEK") dahil ancak bunlarla sınırlı 
            olmamak üzere geçerli fikri mülkiyet yasalarına uygun olarak, hak ihlallerini bildirmeye yönelik net bir politika 
            uygulamaktayız.
          </p>
          <p>
            <strong>ÖNEMLİ BİLDİRİM:</strong> Platformumuz doğrudan hiçbir yazılım, oyun, APK dosyası veya telifli materyal 
            barındırmaz (hosting yapmaz). Yalnızca resmi uygulama mağazalarına (Google Play Store, Galaxy Store vb.) ve 
            kullanıcılar tarafından erişilebilen üçüncü taraf genel ağ (CDN) bağlantılarına aracı olarak yönlendirme yapar.
          </p>

          <h3>1. İhlal Bildirimi (Takedown Notice)</h3>
          <p>
            Eğer telif hakkına sahip olduğunuz bir eserin Platformumuz üzerinde yetkisiz bir şekilde paylaşıldığını veya 
            yönlendirildiğini düşünüyorsanız, atanmış Telif Hakkı Temsilcimize aşağıdaki bilgileri içeren yazılı bir bildirim 
            ("İhlal Bildirimi") gönderebilirsiniz:
          </p>
          <ul>
            <li>Telif hakkı ihlaline uğradığı iddia edilen eserin fiziksel veya elektronik imzası (yetkili kişinin),</li>
            <li>İhlal edildiği iddia edilen telif hakkı korumalı eserin veya eserlerin yeterli ve açık bir tanımı,</li>
            <li>İhlal ettiği iddia edilen ve Platformumuzdan kaldırılması veya erişiminin engellenmesi istenen materyalin (bağlantıların) nerede bulunduğuna dair açık konum bilgisi (ilgili sayfaların tam URL'leri),</li>
            <li>Size ulaşabilmemiz için iletişim bilgileriniz (Adresiniz, telefon numaranız ve geçerli bir e-posta adresiniz),</li>
            <li>Şikayete konu kullanımın telif hakkı sahibi, temsilcisi veya yasa tarafından yetkilendirilmediğine dair iyi niyet (good faith) beyanı,</li>
            <li>Bildirimde yer alan bilgilerin doğru olduğuna ve yalan beyanda bulunma cezası altında, telif hakkı sahibi adına hareket etmeye yetkili olduğunuza dair resmi bir beyan.</li>
          </ul>

          <h3>2. İşlem Süreci</h3>
          <p>
            Atanmış temsilcimiz geçerli bir İhlal Bildirimi aldığında:
          </p>
          <ul>
            <li>İhlal ettiği iddia edilen içeriğe/bağlantıya olan erişim 48 ila 72 saat içerisinde derhal kaldırılacak veya devre dışı bırakılacaktır.</li>
            <li>Durumdan etkilenen taraf (eğer iletişim bilgisi mevcutsa) bilgilendirilecektir.</li>
          </ul>

          <h3>3. Karşı Bildirim (Counter-Notice)</h3>
          <p>
            Eğer bir içeriğin/bağlantının yanlışlıkla veya yanlış teşhis sonucunda kaldırıldığını düşünüyorsanız, bize bir 
            Karşı Bildirim gönderebilirsiniz. Karşı bildiriminizin geçerli olması için aşağıdaki bilgileri içermesi gerekir:
          </p>
          <ul>
            <li>Fiziksel veya elektronik imzanız,</li>
            <li>Kaldırılan materyalin veya bağlantının tanımı ve kaldırılmadan önce bulunduğu yerin (URL) adresi,</li>
            <li>Yalan beyanda bulunma cezası altında, materyalin bir yanlışlık veya yanlış teşhis sonucu kaldırıldığına inandığınıza dair bir beyan,</li>
            <li>Adınız, adresiniz, telefon numaranız, e-posta adresiniz ve ilgili yasal yetki alanına tabi olduğunuzu kabul eden beyanınız.</li>
          </ul>

          <h3>4. İletişim Bilgileri (Telif Hakkı Temsilcisi)</h3>
          <p>
            Lütfen tüm DMCA, FSEK ve telif hakkı ihlali bildirimlerinizi aşağıdaki e-posta adresine gönderin:
            <br />
            <strong>E-posta:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
          <p>
            <em>Not: Bu e-posta adresi dışındaki kanallardan (sosyal medya vb.) yapılan ihlal bildirimleri işleme alınmayabilir.</em>
          </p>
        </>
      ) : (
        <>
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          <h3>Copyright Infringement Notice (DMCA Policy)</h3>
          <p>
            <strong>Best Games & Shield</strong> (hereinafter "Platform") respects the intellectual property rights of others 
            and expects our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA) and other 
            applicable intellectual property laws, we have a clear policy for reporting infringements.
          </p>
          <p>
            <strong>IMPORTANT NOTICE:</strong> Our Platform does not directly host any software, games, APK files, or 
            copyrighted materials. We only act as an intermediary, providing redirect links to official app stores 
            (Google Play Store, Galaxy Store, etc.) and third-party Content Delivery Networks (CDNs).
          </p>

          <h3>1. Takedown Notice</h3>
          <p>
            If you believe that your copyrighted work is being shared or linked without authorization on our Platform, 
            you may submit a written notice ("Takedown Notice") to our designated Copyright Agent containing the following:
          </p>
          <ul>
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright,</li>
            <li>Identification of the copyrighted work(s) claimed to have been infringed,</li>
            <li>Identification of the material that is claimed to be infringing and a clear location (exact URLs) of where it is found on our Platform,</li>
            <li>Information reasonably sufficient to permit us to contact you (Address, phone number, and valid email address),</li>
            <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law,</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ul>

          <h3>2. Processing and Removal</h3>
          <p>
            Upon receipt of a valid Takedown Notice by our designated agent:
          </p>
          <ul>
            <li>Access to the allegedly infringing content/link will be promptly removed or disabled within 48 to 72 hours.</li>
            <li>We will notify the affected party (if contact information is available) about the removal.</li>
          </ul>

          <h3>3. Counter-Notice</h3>
          <p>
            If you believe that a link or material was removed as a result of a mistake or misidentification, you may 
            submit a Counter-Notice containing the following:
          </p>
          <ul>
            <li>Your physical or electronic signature,</li>
            <li>Identification of the material that has been removed and the location (URL) where it appeared before removal,</li>
            <li>A statement under penalty of perjury that you have a good faith belief that the material was removed as a result of mistake or misidentification,</li>
            <li>Your name, address, phone number, email address, and a statement consenting to the jurisdiction of the applicable courts.</li>
          </ul>

          <h3>4. Contact Information (Designated Agent)</h3>
          <p>
            Please send all DMCA and copyright infringement notices to our Designated Agent at the following email address:
            <br />
            <strong>Email:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
          <p>
            <em>Note: Notices sent through other channels (e.g., social media) may not be processed promptly.</em>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
