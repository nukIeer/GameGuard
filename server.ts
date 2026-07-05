import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API to resolve and redirect to latest APK
  app.get('/api/download/:slug', async (req, res) => {
    const { slug } = req.params;
    
    try {
      // Fetch the manifest JSON
      const response = await fetch('https://cdn.jsdelivr.net/gh/nukIeer/gameshieldcdn@master/games.json');
      if (!response.ok) {
        return res.status(404).send('Not Found');
      }
      
      const data = await response.json();
      const game = data.games?.find((g: any) => g.id === slug);
      
      if (!game) {
        return res.status(404).send('Game not found');
      }

      // Try to get mirrors or apk links
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
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
