import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from Vite build output directory 'dist'
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// API health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// For any other route, serve index.html (SPA client routing)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running in production mode on port ${PORT}`);
  console.log(`Access the application at http://localhost:${PORT}`);
});
