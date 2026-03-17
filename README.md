# Zeynep Ticaret - Astro + Tailwind Website

Modern, SEO-optimized website for Zeynep Ticaret, a Turkish home decor and lifestyle brand.

## 🚀 Tech Stack

- **Astro 6.0** - Static site generation with dynamic components
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach

## 📋 Project Structure

```
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Collections.astro
│   │   ├── AboutContact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro  # Main layout with SEO metadata
│   ├── pages/
│   │   └── index.astro   # Home page
│   └── styles/
│       └── globals.css   # Global Tailwind styles
├── public/               # Static assets
│   ├── robots.txt       # SEO: Search engine crawling rules
│   └── sitemap.xml      # SEO: Site structure for search engines
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Development

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
Visit http://localhost:3000

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📱 Features

### SEO Optimization
- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, canonical)
- ✅ Open Graph / Twitter cards
- ✅ Turkish language support (lang="tr")
- ✅ Structured data ready
- ✅ robots.txt and sitemap.xml
- ✅ Proper heading hierarchy
- ✅ Alt text for all images

### Accessibility
- ✅ Semantic HTML elements
- ✅ ARIA labels where needed
- ✅ Color contrast compliance
- ✅ Keyboard navigation support

### Performance
- ✅ Image lazy loading
- ✅ Optimized CSS with Tailwind
- ✅ Static site generation
- ✅ No JavaScript overhead for static content

### Design
- ✅ Custom typography (Playfair Display + Inter)
- ✅ Smooth animations
- ✅ Glassmorphism effects
- ✅ Responsive grid layouts
- ✅ Mobile-first approach

## 📝 Content Management

To update content:

1. **Navigation links**: Edit `src/components/Navigation.astro`
2. **Hero section**: Edit `src/components/Hero.astro`
3. **Collections**: Modify the array in `src/components/Collections.astro`
4. **About/Contact**: Edit `src/components/AboutContact.astro`
5. **Footer**: Edit `src/components/Footer.astro`

## 🌍 Deployment

The site is ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static host

### Build output
The production-ready site is generated in the `dist/` directory.

## 🎯 SEO Checklist

- [x] Page titles and descriptions
- [x] Open Graph meta tags
- [x] Canonical URLs
- [x] XML sitemap
- [x] robots.txt
- [x] Turkish language specification
- [x] Mobile responsiveness
- [x] Image alt text
- [x] Semantic HTML
- [x] Internal linking with anchors

## 📞 Contact Information

- **Address**: Denizli Butik Mağazası, Merkez Efendi, Denizli
- **Phone**: +90 538 304 55 24
- **WhatsApp**: https://wa.me/905383045524
- **Store Hours**: 09:00 - 19:00

## 📄 License

© 2026 Zeynep Ticaret. All rights reserved.
# zeynepticaret
