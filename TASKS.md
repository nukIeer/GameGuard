# Best Games & Shield - Geliştirme Görevleri (Task List)

Bu dosya, "Best Games & Shield" web sitesine eklenebilecek eksik özellikler, navigasyon geliştirmeleri ve kullanıcı deneyimi (UX) iyileştirmelerini içeren kapsamlı bir görev listesidir.

## Epic 1: Navigasyon ve Temel Yerleşim (Navigation & Layout)
- [x] TASK-01: Mobil cihazlar için ekrana yapışan alt navigasyon çubuğu (Bottom Navigation Bar) ekle (Ana Sayfa, Arama, Kategoriler, Profil). `[DONE]`
- [ ] TASK-02: Masaüstü görünüm için sol veya sağ tarafa bir Sidebar Navigation ekle (Trendler, Yeni Çıkanlar, Kategoriler). `[PENDING]`
- [x] TASK-03: Alt sayfalarda kullanıcı kaybolmasın diye "Breadcrumb" (Ekmek kırıntısı) navigasyonu ekle (Ana Sayfa > Aksiyon > Free Fire). `[DONE]`
- [x] TASK-04: Mobil görünüm üst menüye "Hamburger Menu" ekle (Yasal sayfalar, Dil seçimi, İletişim gibi ikincil linkler). `[DONE]`
- [x] TASK-05: Özelleştirilmiş bir 404 Hata Sayfası oluştur (İçinde oyun önerileri veya mini bir HTML5 oyun olan). `[DONE]`

## Epic 2: UI & UX İyileştirmeleri (Kullanıcı Deneyimi)
- [x] TASK-06: Oyunlar yüklenirken beyaz ekran yerine "Skeleton Loader" (İskelet Yükleyici) animasyonları göster. `[DONE]`
- [ ] TASK-07: Oyun detay sayfasında banner ve ikon yüklenene kadar gösterilecek Skeleton Loader'ları ekle. `[PENDING]`
- [ ] TASK-08: Sadece karanlık tema var, kullanıcılar için Light/Dark Theme (Gündüz/Gece) geçiş butonu ekle. `[PENDING]`
- [ ] TASK-09: Ana sayfadaki oyun listesi için "Sonsuz Kaydırma" (Infinite Scroll) veya "Daha Fazla Yükle" butonu ekle. `[PENDING]`
- [x] TASK-10: Ekranın sağ alt köşesine "Yukarı Çık" (Scroll to Top) yüzen butonu ekle. `[DONE]`
- [ ] TASK-11: Mobilde sayfayı yenilemek için "Pull-to-refresh" (Aşağı çekerek yenile) özelliğini entegre et. `[PENDING]`

## Epic 3: Gelişmiş Arama ve Filtreleme (Search & Filtering)
- [ ] TASK-12: Arama çubuğuna tıklandığında tam ekran açılan ve "Popüler Aramalar / Son Aramalar" gösteren arama arayüzü yap. `[PENDING]`
- [ ] TASK-13: Ana sayfaya kategori filtreleri (Aksiyon, RPG, Strateji, Simülasyon vb.) ekle. `[PENDING]`
- [ ] TASK-14: Etiket (Tag) bazlı çoklu filtreleme sistemi yap (Örn: Çevrimdışı, Çok Oyunculu, Açık Dünya). `[PENDING]`
- [ ] TASK-15: Gelişmiş sıralama seçenekleri ekle (Puana Göre, İndirmeye Göre, A-Z Sıralı). `[PENDING]`
- [ ] TASK-16: Sağdan açılan "Detaylı Filtreleme" (Drawer) paneli ekle (Android sürümü, Maksimum dosya boyutu, Yaş sınırına göre). `[PENDING]`

## Epic 4: Oyun Detay Sayfası Özellikleri
- [x] TASK-17: Oyun detay sayfasına Web Share API kullanarak "Oyunu Paylaş" butonu ekle. `[DONE]`
- [ ] TASK-18: Oyun detay sayfasının en altına "Bunu Sevenler Şunları da İndirdi / Benzer Oyunlar" slider'ı ekle. `[PENDING]`
- [ ] TASK-19: Ekran görüntülerine (Screenshots) tıklandığında açılan tam ekran resim galerisi ve kaydırma (Swipe) desteği ekle. `[PENDING]`
- [ ] TASK-20: Medya bölümüne YouTube oyun fragmanı (Trailer) oynatıcısı entegre et. `[PENDING]`
- [x] TASK-21: Çok uzun oyun açıklamaları için "Devamını Oku / Daralt" işlevi (Read More) ekle. `[DONE]`
- [ ] TASK-22: "Eski Sürümler" (Previous Versions) sekmesi ekle (İstenirse daha eski APK'ların indirilebilmesi için). `[PENDING]`
- [ ] TASK-23: Kullanıcı yorumları ve puanlama özeti alanı tasarla (Şimdilik metadata'ya göre görsel amaçlı). `[PENDING]`
- [ ] TASK-24: Çalışmayan linkleri bildirmek için bir "Sorun Bildir / Link Kırık" modülü ekle. `[PENDING]`

## Epic 5: Kullanıcı Etkileşimi (User Engagement)
- [ ] TASK-25: Editörün Seçimleri veya "2024'ün En İyi RPG'leri" gibi özel oyun koleksiyonları sayfası yap. `[PENDING]`
- [x] TASK-26: Kullanıcıların oyunları kaydetmesi için "Favorilere Ekle / Daha Sonra İndir" butonu (Local Storage tabanlı). `[DONE]`
- [x] TASK-27: Kaydedilen oyunları görmek için özel bir "Favorilerim" (My Games) sayfası oluştur. `[DONE]`
- [ ] TASK-28: Oyunlara basit bir "Upvote / Beğen" butonu ekle (Supabase/Firebase veya local ile). `[PENDING]`
- [ ] TASK-29: "Yeni oyun eklendiğinde bana bildir" için Push Notification (Tarayıcı Bildirimi) izin paneli ekle. `[PENDING]`

## Epic 6: Çoklu Dil ve Yerelleştirme (i18n & L10n)
- [ ] TASK-30: Menüye bayrak simgeleriyle zenginleştirilmiş diller arası geçiş (Dropdown) modülü ekle. `[PENDING]`
- [ ] TASK-31: İspanyolca (ES) dil desteği ekle (Oyun açıklamaları dahil). `[PENDING]`
- [ ] TASK-32: Portekizce (PT-BR) dil desteği ekle (Brezilya pazarı için). `[PENDING]`
- [ ] TASK-33: İndirme sayıları ve puanları kullanıcının diline göre formatla (Örn: 1.5M -> 1,5 Mn). `[PENDING]`
- [ ] TASK-34: Tarayıcı dilini (navigator.language) otomatik tespit edip siteyi o dilde başlatma fonksiyonu yaz. `[PENDING]`

## Epic 7: SEO ve Performans Optimizasyonu
- [ ] TASK-35: Her sayfa ve her oyun için dinamik `<title>` ve `<meta description>` oluşturan React Helmet entegrasyonu. `[PENDING]`
- [ ] TASK-36: Oyun sayfalarına Google arama sonuçlarında zengin görünüm için "SoftwareApplication" JSON-LD schema ekle. `[PENDING]`
- [ ] TASK-37: Resimleri otomatik WebP/AVIF formatına çeviren veya lazy-loading performansını artıran optimizasyonlar. `[PENDING]`
- [ ] TASK-38: Sitenin çevrimdışı da çalışabilmesi (PWA) için Service Worker entegrasyonu. `[PENDING]`
- [ ] TASK-39: "Ana Ekrana Ekle" (Add to Home Screen) uyarısı verebilmek için PWA `manifest.json` dosyası ekle. `[PENDING]`
- [ ] TASK-40: CSS/JS bundle boyutlarını düşürmek için Vite tarafında build optimizasyonları yap. `[PENDING]`
- [ ] TASK-41: Duplicate content cezası almamak için tüm sayfalara Canonical URL ekle. `[PENDING]`

## Epic 8: Analiz ve Para Kazanma (Analytics & Monetization)
- [ ] TASK-42: Kullanıcı davranışlarını izlemek için Google Analytics 4 (GA4) entegrasyonu. `[PENDING]`
- [ ] TASK-43: "İndir Butonuna Tıklandı", "Oyun Görüntülendi" gibi özel (Custom Event) takip kodları ekle. `[PENDING]`
- [ ] TASK-44: Kullanıcı gizliliğine önem veren çerezsiz bir analiz aracı (Plausible veya Umami) kur. `[PENDING]`
- [ ] TASK-45: Tasarımı (UX) bozmayacak şekilde "Native Ad" (Doğal Reklam) kutuları / yer tutucuları (AdSense/AdMob) yerleştir. `[PENDING]`
- [ ] TASK-46: "Bize Destek Ol / Kahve Ismarla" sayfası ve butonu oluştur. `[PENDING]`

## Epic 9: Arka Plan ve API Entegrasyonları (Serverless/Backend)
- [ ] TASK-47: GitHub JSON verisini direkt çekmek yerine, önbellekleyen (Cache) özel bir `/api/games` Endpoint'i yaz. `[PENDING]`
- [ ] TASK-48: `/api/download` rotasına kötü niyetli botları engellemek için "Rate Limiting" (İstek Sınırlandırma) ekle. `[PENDING]`
- [ ] TASK-49: GitHub'daki JSON her güncellendiğinde Vercel projesini otomatik derleyecek Webhook sistemi kur. `[PENDING]`
- [ ] TASK-50: Tıklanma sayısına göre "Günün En Popüler Oyunları"nı hesaplayıp döndürecek bir `/api/trending` rotası oluştur. `[PENDING]`

## Epic 10: Güvenlik, Hukuk ve Güvenilirlik
- [ ] TASK-51: Avrupa ve Türkiye standartlarına (GDPR / KVKK) uygun, tasarımı şık bir Çerez (Cookie) onay banner'ı ekle. `[PENDING]`
- [ ] TASK-52: Oyun detaylarında "VirusTotal Sonucu: %100 Güvenli" gibi güven veren görsel rozetler (Badge) oluştur. `[PENDING]`
- [ ] TASK-53: Sitenin resmi bir kaynak olduğunu hissettiren "Best Games & Shield Tarafından Doğrulandı" damgası ekle. `[PENDING]`
- [ ] TASK-54: Footer'a uygulamanın ne zaman güncellendiğini gösteren dinamik bir "Son Güncelleme: X gün önce" yazısı ekle. `[PENDING]`

## Epic 11: Ekstra Estetik (Polish) ve Mikro Etkileşimler
- [ ] TASK-55: Buton tıklamaları ve sayfa geçişleri için (isteyen kapatabilmeli) hafif arayüz ses efektleri ekle. `[PENDING]`
- [x] TASK-56: Yeşil ana "İNDİR" butonuna, üzerinde kayan şık bir parlama animasyonu (Shine effect) CSS'i yaz. `[DONE]`
- [ ] TASK-57: Tarayıcının standart gri kaydırma çubuğunu (Scrollbar) sitenin dark temasına uygun olacak şekilde özelleştir. `[PENDING]`
- [ ] TASK-58: Ana sayfada oyun listesindeyken, yeni sayfaya gitmeden oyunu inceleyebilmek için "Hızlı Görünüm" (Quick View) modülü yap. `[PENDING]`
- [ ] TASK-59: Oyunların üst banner kısmına aşağı kaydırıldıkça yavaşça hareket eden Parallax Scroll efekti ver. `[PENDING]`
- [ ] TASK-60: Erişilebilirlik (Accessibility) puanını 100 yapmak için tüm input ve ikonlara ekran okuyucular için `aria-label` ata. `[PENDING]`
