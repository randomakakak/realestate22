# CurbAppeal AI

An AI-powered real estate photo enhancement web application designed for real estate agents and photographers. It features 1-click HDR lighting balance, sky replacement, window pull corrections, and an interactive Before/After comparison slider.

## Features

- **Marketing Landing Page**: Hero section, feature breakdowns, and tiered pricing cards.
- **Interactive Dashboard**: Upload simulation with progress indicators and status animations.
- **Interactive Before/After Slider**: Dual-layer visual comparison with responsive touch/mouse slider.
- **Photo Upload Support**: Accepts image uploads to test real property photos directly in the browser.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewports.

---

## Quick Start: Host on GitHub Pages (Zero-Build Method)

Because `index.html` is pre-configured and self-contained, you can host it immediately on GitHub Pages:

1. **Create a new GitHub repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name it `curbappeal-ai` (or any name you choose) and click **Create repository**.

2. **Push this code to GitHub**:
   ```bash
   cd curbappeal-ai
   git init
   git add .
   git commit -m "Initial commit of CurbAppeal AI"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/curbappeal-ai.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment > Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` workflow will automatically build and publish).
   - Alternatively, select **Deploy from a branch** > branch: **main** > folder: **/ (root)**, then click **Save**.
   - Your site will be live at: `https://<YOUR-USERNAME>.github.io/curbappeal-ai/`

---

## Alternative 1-Click Hosting: Vercel / Netlify

### Option A: Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** > **Project**.
3. Select your `curbappeal-ai` repository.
4. Click **Deploy**. Vercel will detect the static site and deploy it with a free `.vercel.app` URL and custom domain support.

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Drag and drop the `curbappeal-ai` folder (or `index.html`) directly into the Netlify drop zone for instant live hosting.
3. Or connect your GitHub repository for continuous deployment.

---

## Local Development (Vite + React + Tailwind)

To run with the full Node.js / Vite build environment locally:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```
