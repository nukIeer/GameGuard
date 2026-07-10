// Vercel serverless fonksiyonu: /api/download/:slug
// Katalogda (CDN manifest) olmayan oyunlar için özel yönlendirmeler tanımlanabilir.

const CUSTOM_REDIRECTS: Record<string, string> = {
  roblox: 'https://play.google.com/store/apps/details?id=com.roblox.client.apk?download=1',
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

    const links = game.downloadLinks || {};
    const downloadUrl = links.apk1 || links.apk2 || (links.mirrors && links.mirrors[0]);

    if (downloadUrl) {
      return res.redirect(302, downloadUrl);
    }

    return res.status(404).send('Download URL not found for this game');
  } catch (error) {
    console.error('Download resolve error:', error);
    return res.status(500).send('Internal Server Error');
  }
}
