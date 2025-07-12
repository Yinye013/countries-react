# 🚀 Deployment Guide

This guide covers different methods to deploy your Countries React App to various hosting platforms.

## Quick Deploy Options

### 1. Vercel (Recommended)

**Perfect for React apps with zero configuration**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (run from project root)
vercel

# Follow the prompts:
# - Set up and deploy? [Y/n] Y
# - Which scope? [Your account]
# - Link to existing project? [N/y] n
# - Project name: countries-react
# - Source code location: ./
# - Override settings? [N/y] n
```

**Alternative: Vercel GitHub Integration**

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically!

### 2. Netlify

**Great for static sites with build optimization**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Alternative: Netlify Drag & Drop**

1. Run `npm run build`
2. Visit [app.netlify.com](https://app.netlify.com)
3. Drag the `dist` folder to the deploy area

### 3. GitHub Pages

**Free hosting with GitHub repository**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/countries-react",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Build Configuration

### Environment Variables

Create `.env` file in project root if needed:

```env
# Example environment variables
VITE_API_BASE_URL=https://restcountries.com/v3.1
VITE_APP_TITLE=Countries React App
```

### Build Settings

Most platforms auto-detect these settings:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `18.x` or higher

## Platform-Specific Instructions

### Vercel Configuration

Create `vercel.json` in project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Apache (.htaccess)

If deploying to Apache server, create `.htaccess` in `dist`:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

## Custom Domain Setup

### Vercel

1. Go to your project dashboard
2. Click "Domains" tab
3. Add your custom domain
4. Update DNS records as instructed

### Netlify

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps

## Performance Optimization

### Before Deployment

```bash
# Optimize images (if you add them)
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant

# Analyze bundle size
npm install --save-dev vite-bundle-analyzer
npx vite-bundle-analyzer
```

### Build Optimization

Vite automatically:

- Minifies JavaScript and CSS
- Optimizes images
- Creates efficient chunks
- Generates source maps

## Deployment Checklist

- [ ] All environment variables configured
- [ ] Build runs successfully (`npm run build`)
- [ ] No console errors in production build
- [ ] All routes work (React Router history mode)
- [ ] Images and assets load correctly
- [ ] API endpoints are accessible
- [ ] Dark mode works across all pages
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Lighthouse)

## Monitoring & Analytics

### Performance Monitoring

```bash
# Add Web Vitals
npm install web-vitals

# Add to main.jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Error Tracking

Consider adding:

- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [Google Analytics](https://analytics.google.com) for usage analytics

## Continuous Deployment

### GitHub Actions (for any platform)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: "18"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          vercel-args: "--prod"
```

## Troubleshooting

### Common Issues

**Blank page after deployment**

- Check browser console for errors
- Verify base path configuration
- Ensure all assets are loading

**404 on page refresh**

- Configure redirects for SPA routing
- Add `.htaccess` or platform-specific redirects

**API calls failing**

- Check CORS configuration
- Verify environment variables
- Ensure HTTPS for API endpoints

**Build failures**

- Check Node.js version compatibility
- Clear `node_modules` and reinstall
- Verify all dependencies are listed in `package.json`

### Getting Help

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vite**: [vitejs.dev/guide](https://vitejs.dev/guide)

---

🎉 **Your Countries React App is now ready for the world!** 🌍
