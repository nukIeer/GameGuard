import { useTranslation } from 'react-i18next';
import { LegalLayout } from './LegalLayout';

export default function Kvkk() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === 'tr';

  return (
    <LegalLayout title={t('legal.kvkk')}>
      {isTr ? (
        <>
          <p><strong>Son Güncelleme Tarihi:</strong> 1 Ocak 2024</p>
          <p>
            İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve Aydınlatma 
            Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında, 
            Best Games & Shield ("Veri Sorumlusu") olarak, platformumuzu kullanan ziyaretçilerimizin ("İlgili Kişi") 
            kişisel verilerinin işlenmesine ilişkin sizleri bilgilendirmek amacıyla hazırlanmıştır.
          </p>

          <h3>1. Veri Sorumlusunun Kimliği</h3>
          <p>
            Best Games & Shield platformu olarak sıfır log (zero-log) prensibiyle hareket etmekteyiz. 
            Ancak, yasalar gereği ve iletişim talepleriniz doğrultusunda işlenen sınırlı veriler için 
            Veri Sorumlusu sıfatını haiziz.
            <br />
            <strong>İletişim:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>

          <h3>2. İşlenen Kişisel Veriler ve İşlenme Amaçları</h3>
          <p>
            Sistemlerimiz kullanımınıza bağlı olarak otomatik log (IP adresi, cihaz bilgisi, indirme geçmişi vb.) 
            tutmamaktadır. Yalnızca aşağıdaki durumlarda sınırlı kişisel veri işlenmektedir:
          </p>
          <ul>
            <li><strong>İletişim Talepleri:</strong> Bize e-posta üzerinden (örn. trnlab@proton.me) ulaştığınızda 
            kendi rızanızla paylaştığınız adınız, soyadınız, e-posta adresiniz ve mesaj içeriğiniz. Bu veriler 
            yalnızca talebinizi yanıtlamak ve sorunları çözmek amacıyla (KVKK Madde 5/2-f meşru menfaat) işlenir.</li>
            <li><strong>Teknik (Gerekli) Çerezler:</strong> Platformumuzun çalışabilmesi için cihazınızda Local Storage 
            üzerinden dil tercihi, favori oyunlar gibi ayarlarınız tutulur. Bu veriler sunucularımıza aktarılmaz, 
            dolayısıyla tarafımızca işlenmez.</li>
          </ul>

          <h3>3. Kişisel Verilerin Aktarımı</h3>
          <p>
            Topladığımız kişisel veriler <strong>hiçbir şart altında</strong> üçüncü taraflara, reklam ağlarına, 
            pazarlama şirketlerine veya veri brokerlarına satılmaz, kiralanmaz ve paylaşılmaz. Ancak, hukuki 
            uyuşmazlıklar veya yasal zorunluluklar kapsamında resmi makamlar (Mahkemeler, Savcılıklar vb.) tarafından 
            usulüne uygun şekilde talep edilmesi halinde, yürürlükteki mevzuat (KVKK Madde 8) gereği paylaşılabilir.
          </p>

          <h3>4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
          <p>
            Kişisel verileriniz, platformumuzu kullanımınız esnasında veya doğrudan e-posta yoluyla bizimle iletişime 
            geçmeniz halinde elektronik ortamda toplanmaktadır. İşleme faaliyetinin hukuki sebebi;
          </p>
          <ul>
            <li>KVKK Madde 5/2-c: Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması.</li>
            <li>KVKK Madde 5/2-e: Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.</li>
            <li>KVKK Madde 5/2-f: İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması şartlarına dayanmaktadır.</li>
          </ul>

          <h3>5. Verilerin Saklama Süresi ve İmhası</h3>
          <p>
            Toplanan iletişim bilgileri ve destek talepleri, konu çözüme kavuşturulduktan sonra yasal zamanaşımı 
            süreleri dikkate alınarak saklanır ve bu sürenin bitiminde güvenli bir şekilde silinir, yok edilir 
            veya anonim hale getirilir.
          </p>

          <h3>6. İlgili Kişinin Hakları (KVKK Madde 11)</h3>
          <p>
            KVKK'nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
            <li>Düzeltme, silinme veya yok edilme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
          </ul>

          <h3>7. Başvuru Yöntemi</h3>
          <p>
            Yukarıda belirtilen haklarınızı kullanmak ve kişisel verilerinizle ilgili taleplerinizi iletmek için, 
            kimliğinizi tespit edici gerekli bilgilerle birlikte talebinizi aşağıdaki e-posta adresine iletebilirsiniz:
            <br />
            <strong>E-posta:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
          <p>
            Talepleriniz niteliğine göre en kısa sürede ve en geç otuz (30) gün içinde ücretsiz olarak sonuçlandırılacaktır.
          </p>
        </>
      ) : (
        <>
          <p><strong>Last Updated:</strong> January 1, 2024</p>
          <p>
            This illumination text has been prepared to inform our visitors ("Data Subject") about the processing 
            of their personal data by Best Games & Shield ("Data Controller") in accordance with the Turkish Personal 
            Data Protection Law No. 6698 ("KVKK").
          </p>

          <h3>1. Identity of the Data Controller</h3>
          <p>
            As Best Games & Shield, we operate on a strict zero-log principle. However, for limited data processed 
            due to your communication requests, we act as the Data Controller.
            <br />
            <strong>Contact:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>

          <h3>2. Processed Personal Data and Purposes</h3>
          <p>
            Our systems do not keep automatic logs (IP address, device info, download history, etc.). Limited 
            personal data is processed only in the following case:
          </p>
          <ul>
            <li><strong>Communication Requests:</strong> Your name, email address, and message content shared 
            voluntarily when you contact us via email (e.g., trnlab@proton.me). This data is processed solely 
            to respond to your request (KVKK Article 5/2-f legitimate interest).</li>
          </ul>

          <h3>3. Transfer of Personal Data</h3>
          <p>
            The personal data we collect is <strong>never</strong> sold, rented, or shared with third parties, 
            ad networks, or data brokers under any circumstances. However, it may be shared with official authorities 
            if properly requested in accordance with legal obligations (KVKK Article 8).
          </p>

          <h3>4. Method and Legal Reason for Data Collection</h3>
          <p>
            Your personal data is collected electronically when you contact us directly via email. The legal reasons 
            for processing include the establishment, exercise, or protection of a right, and the legitimate interests 
            of the data controller (KVKK Article 5/2-e, f).
          </p>

          <h3>5. Data Subject Rights (KVKK Article 11)</h3>
          <p>
            Under Article 11 of the KVKK, you have the right to:
          </p>
          <ul>
            <li>Learn whether your personal data is being processed,</li>
            <li>Request information if your personal data has been processed,</li>
            <li>Learn the purpose of processing and whether they are used in accordance with their purpose,</li>
            <li>Know the third parties to whom your personal data is transferred,</li>
            <li>Request the correction of incomplete or inaccurate data,</li>
            <li>Request the deletion or destruction of personal data under the conditions laid out in Article 7,</li>
            <li>Object to the occurrence of a result against you by analyzing the processed data exclusively through automated systems,</li>
            <li>Claim compensation for damages arising from the unlawful processing of your personal data.</li>
          </ul>

          <h3>6. Application Method</h3>
          <p>
            To exercise your rights and submit your requests regarding your personal data, you can send an email to:
            <br />
            <strong>Email:</strong> <a href="mailto:trnlab@proton.me" className="text-accent-green hover:underline">trnlab@proton.me</a>
          </p>
        </>
      )}
    </LegalLayout>
  );
}
