# Building and Self-Hosting

This guide explains how to run Porsche EV Insights locally or deploy your own instance.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** - Version 18 or later recommended
- **npm** - Comes with Node.js
- **Git** - For cloning the repository

### Verifying Prerequisites

```bash
node --version    # Should show v18.x.x or later
npm --version     # Should show 9.x.x or later
git --version     # Should show git version 2.x.x
```

## Getting the Code

Clone the repository:

```bash
git clone https://github.com/jpleite/porsche_ev_insights.git
cd porsche_ev_insights
```

## Installing Dependencies

Install all required packages:

```bash
npm install
```

This installs:
- React 19 - UI framework
- Vite 7 - Build tool and dev server
- Tailwind CSS 4 - Styling
- Recharts 3 - Charts and visualizations
- JSZip - File export handling
- ESLint - Code linting

## Running Locally

### Development Server (Frontend Only)

Start the development server:

```bash
npm run dev
```

The server starts at `http://localhost:5173` with:
- Hot module replacement (HMR) - changes appear instantly
- Error overlay - shows build errors in browser
- Fast refresh - preserves component state during edits

Press `Ctrl+C` to stop the server.

**Note:** This mode doesn't include the My Car feature. For full functionality, use `npm run dev:full`.

### Development Server (Full - with My Car)

To enable the **My Car** tab with live Porsche Connect data:

```bash
npm run dev:full
```

This starts both:
- Frontend dev server at `http://localhost:5173`
- Porsche Connect proxy server at `http://localhost:3001`

The proxy server handles OAuth authentication with Porsche Connect API, including captcha challenges.

Alternatively, start them separately:
```bash
npm run dev      # Frontend only
npm run server   # Proxy server only (in another terminal)
```

### Preview Production Build

To test the production build locally:

```bash
npm run build
npm run preview
```

This builds optimized assets and serves them at `http://localhost:4173`.

## Building for Production

Create a production build:

```bash
npm run build
```

This generates optimized files in the `dist/` directory:
- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- Static HTML entry point

The build output is entirely static and can be hosted on any web server.

## Deployment Options

### Vercel (Recommended)

Vercel is the recommended deployment option because it supports the **My Car** feature via serverless functions for Porsche Connect API integration.

The official deployment is at: **[porsche-ev.magicbytestudios.com](https://porsche-ev.magicbytestudios.com)**

**Deployment steps:**
1. Import your repository to Vercel
2. Framework preset: Vite (auto-detected)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

Vercel automatically detects the `api/` folder and deploys serverless functions for:
- `/api/porsche/login` - OAuth authentication with captcha support
- `/api/porsche/vehicles` - List user's vehicles
- `/api/porsche/vehicle/[vin]/overview` - Battery, range status
- `/api/porsche/vehicle/[vin]/status` - Full vehicle status
- `/api/porsche/vehicle/[vin]/pictures` - Official vehicle renders

**Custom domain setup:**
1. Add your domain in Vercel Project Settings → Domains
2. Configure DNS: CNAME record pointing to `cname.vercel-dns.com`

### GitHub Pages

GitHub Pages can host the static frontend, but the **My Car** feature won't work (no serverless functions).

```bash
npm run deploy
```

This command:
1. Runs `npm run build`
2. Deploys the `dist/` folder to the `gh-pages` branch
3. Makes the site available at your GitHub Pages URL

**First-time setup:**
1. Go to your repository's Settings
2. Navigate to Pages
3. Set source to "gh-pages" branch

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

**Note:** My Car feature requires additional Netlify Functions setup (not documented here).

### Any Static Host

Since the build output is static, you can host on any service that serves static files:
- Amazon S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Your own nginx/Apache server

Just upload the contents of `dist/` to your hosting provider.

### Self-Hosted Server

For a simple local server:

```bash
# Build the app
npm run build

# Serve with any static file server
npx serve dist
# or
python -m http.server -d dist 8080
```

## Project Structure

```
porsche_ev_insights/
├── public/              # Static assets (copied as-is)
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # React entry point
│   ├── index.css       # Tailwind CSS imports
│   ├── components/     # UI components
│   │   ├── tabs/       # Dashboard tab components
│   │   ├── common/     # Reusable components
│   │   ├── layout/     # Header, sidebar, footer
│   │   ├── modals/     # Dialog components
│   │   └── icons/      # SVG icons
│   ├── constants/      # Configuration data
│   ├── services/       # Data processing logic
│   ├── utils/          # Utility functions
│   ├── i18n/           # Internationalization
│   └── pages/          # Page-level components
├── api/                 # Vercel serverless functions (production)
│   └── porsche/        # Porsche Connect API endpoints
├── server/              # Local Express proxy (development)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
├── eslint.config.js    # ESLint configuration
└── index.html          # HTML entry point
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend development server |
| `npm run dev:full` | Start frontend + Porsche Connect proxy (for My Car) |
| `npm run server` | Start Porsche Connect proxy only |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code checks |
| `npm run deploy` | Deploy to GitHub Pages |

## Configuration

### Vite Configuration

The `vite.config.js` file controls:
- Build optimization
- Development server settings
- Plugin configuration

### ESLint Configuration

The `eslint.config.js` file enforces:
- React best practices
- Hooks rules
- Code quality standards

Run linting:

```bash
npm run lint
```

## Customization

### Adding Translations

To add a new language:

1. Create a new file in `src/i18n/translations/` (e.g., `kr.js`)
2. Copy the structure from `en.js`
3. Translate all strings
4. Add the language to `SUPPORTED_LANGUAGES` in `src/i18n/I18nContext.jsx`
5. Export from `src/i18n/translations/index.js`

### Adding Vehicle Models

To add new vehicle models:

1. Edit `src/constants/porscheEvModels.js`
2. Add entries to the `PORSCHE_EV_MODELS` array with:
   - Unique ID
   - Display name
   - Battery specifications
   - WLTP range and consumption
   - Body style and generation

### Modifying Calculations

Core calculations are in:
- `src/services/dataProcessor.js` - Data parsing and aggregation
- `src/utils/precise.js` - Precise arithmetic
- `src/utils/dataMerger.js` - Data merging logic

### Styling Changes

The app uses Tailwind CSS. Modify styles by:
- Changing Tailwind classes directly in components
- Editing `src/index.css` for global styles
- Updating Tailwind configuration if needed

## Troubleshooting

### Build Fails

**"Cannot find module" errors:**
```bash
rm -rf node_modules
npm install
```

**ESLint errors:**
```bash
npm run lint -- --fix
```

### Development Server Issues

**Port already in use:**
```bash
# Use a different port
npm run dev -- --port 3000
```

**HMR not working:**
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)
- Restart the dev server

### Production Issues

**Blank page after deployment:**
- Check the base URL in `vite.config.js`
- Verify all assets are uploaded
- Check browser console for 404 errors

**Routes not working:**
- This is a single-page app; all routes should serve `index.html`
- Configure your server for SPA routing

## Contributing

To contribute to the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to check code style
5. Test with `npm run dev`
6. Submit a pull request

## Tech Stack Summary

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI framework |
| Vite | 7 | Build tool |
| Tailwind CSS | 4 | Styling |
| Recharts | 3 | Charts |
| JSZip | 3.10 | ZIP file handling |
| ESLint | 9 | Code linting |

## Performance Notes

The production build is optimized for:
- Code splitting
- Tree shaking
- Asset compression
- Efficient caching

Typical build output is under 500KB gzipped for the initial load.

## Security Considerations

When self-hosting:
- Serve over HTTPS
- Set appropriate CORS headers if needed
- Keep dependencies updated (`npm update`)
- The app processes no sensitive data server-side (all client-side)

## Related Information

- For using the dashboard, see [Getting Started](Getting-Started)
- For CSV format details, see [CSV Data Format Reference](CSV-Data-Format-Reference)
