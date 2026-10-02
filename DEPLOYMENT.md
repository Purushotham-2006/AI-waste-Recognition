# Deployment Guide — AI Waste Recognition

This application is built with React, Vite, and Tailwind CSS. It is configured for zero-configuration, 1-click deployment on **Vercel**, **Render**, **Netlify**, or standard Node.js cloud servers.

---

## 1. Deploying to Vercel (Recommended)

Vercel provides automatic deployments, global edge CDN, and built-in SSL.

### Method A: Via GitHub (Fastest & Automatic)
1. Push this codebase to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of AI Waste Recognition"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Select your imported GitHub repository and click **"Import"**.
5. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install --legacy-peer-deps` (or standard `npm install` with the `.npmrc` file)
6. Click **"Deploy"**. Your live URL will be ready in under 60 seconds!

*Note: The included `vercel.json` already handles all SPA client routes and asset caching.*

---

## 2. Deploying to Render

Render supports both **Free Static Sites** and **Node Web Services**.

### Option A: Render Static Site (100% Free Tier — Recommended)
1. Push your code to GitHub or GitLab.
2. Go to [dashboard.render.com](https://dashboard.render.com).
3. Click **"New +"** &rarr; **"Static Site"**.
4. Connect your GitHub repository.
5. Fill in the build settings:
   - **Name**: `ai-waste-recognition`
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Under **Advanced** &rarr; **Redirects/Rewrites**:
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
7. Click **"Create Static Site"**.

*Alternatively, the included `render.yaml` allows 1-click Blueprint deployment.*

### Option B: Render Web Service (Full Node.js Express Server)
If you prefer running a Node/Express backend process:
1. Click **"New +"** &rarr; **"Web Service"**.
2. Connect your repository.
3. Configure:
   - **Environment**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start` (this runs `tsx server.ts`)
4. Click **"Create Web Service"**.

---

## 3. Deploying to Netlify

1. Go to [app.netlify.com](https://app.netlify.com).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select your GitHub repository.
4. Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

*Note: The included `public/_redirects` and `netlify.toml` automatically configure SPA routing on Netlify.*

---

## 4. Key Deployment Settings Reference

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Framework** | Vite / React | Single Page Application (SPA) |
| **Node.js Version** | `>= 18.0.0` (Recommended: 20 LTS) | Set in dashboard or `.nvmrc` |
| **Build Command** | `npm run build` | Compiles to `dist/` |
| **Output Directory** | `dist` | Static assets and index.html |
| **Start Command** | `npm start` | Runs Express static server via `tsx server.ts` |
| **Dev Command** | `npm run dev` | Local development on port 3000 |

---

## 5. Local Production Testing

Before deploying, you can test the production build locally:

```bash
# 1. Build the production bundle
npm run build

# 2. Test using Vite Preview
npm run preview

# 3. OR test using the production Express server
npm start
```
