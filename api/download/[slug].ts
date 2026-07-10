// Vercel serverless fonksiyonu: /api/download/:slug
// Katalogda (CDN manifest) olmayan oyunlar için özel yönlendirmeler tanımlanabilir.

const CUSTOM_REDIRECTS: Record<string, string> = {
  roblox: 'https://zenodo.org/records/21295817/files/2.727.1199.apk?download=1',
};

const MANIFEST_URL = 'https://cdn.jsdelivr.net/gh/nukIeer/gameshieldcdn@master/games.json';

export default async function handler(req: any, res: any) {
  const raw = req.query?.slug;
  const slug = String(Array.isArray(raw) ? raw[0] : raw || '');

  // Özel yönlendirme tanımlıysa doğrudan oraya git (ör. roblox)
  const custom = CUSTOM_REDIRECTS[slug.toLowerCase()];
  if (custom) {
    return res.redirect(302, custom);
  }

  try {
    const response = await fetch(MANIFEST_URL);
    if (!response.ok) {
      return res.status(404).send('Not Found');
    }

    const data = await response.json();
    const game = data.games?.find((g: any) => g.id === slug);

    if (!game) {
      return res.status(404).send('Game not found');
    }

    // Roblox harici oyunlar: otomatik olarak Google Play sayfasına yönlendir.
    // playStoreUrl tanımlıysa onu kullan, yoksa paket adından üret.
    const playUrl =
      game.downloadLinks?.playStoreUrl ||
      (game.package && `https://play.google.com/store/apps/details?id=${game.package}`);

    if (playUrl) {
      return res.redirect(302, playUrl);
    }

    return res.status(404).send('Play Store URL not found for this game');
  } catch (error) {
    console.error('Download resolve error:', error);
    return res.status(500).send('Internal Server Error');
  }
}
