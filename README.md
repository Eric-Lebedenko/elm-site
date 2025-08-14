# ERIC L. MORGAN — Multi-file Static Site

This repo is a clean multi-file refactor of your original single-file HTML.

## Structure
```
.
├─ index.html                 # Main page (sections: hero, platform, about, documents, contact)
├─ assets/
│  ├─ css/styles.css          # All styles
│  ├─ js/
│  │  ├─ main.js              # Preloader, scroll, back-to-top, navbar hooks
│  │  ├─ i18n.js              # Translations + language switch
│  │  ├─ ticker.js            # Investor mode stock ticker
│  │  ├─ social-popup.js      # Delayed social popup
│  │  ├─ hidden-quest.js      # Secret keyboard code -> Discord role overlay
│  │  ├─ forms.js             # Formspree submission with rate-limit
│  │  └─ charts.js            # Optional charts (Chart.js) — guarded
│  └─ img/                    # Images (placeholders)
├─ Docs/                      # PDFs
├─ favicon.ico
├─ logo.png
├─ robots.txt
└─ sitemap.xml
```

## Local preview
Open `index.html` in a browser.
For GitHub Pages, push to a repository and enable Pages (root).

## Notes
- **Investor Mode**: choose language “Investor” in the dropdown to show the ticker. API: Financial Modeling Prep.
- **Charts**: require Chart.js (already linked via CDN). They only initialize if canvases exist.
- **Form**: uses Formspree endpoint from your original file: `https://formspree.io/f/xvgzwwqz`.
- **Anti-copy/devtools**: kept as in your code (not secure, only obfuscation).

## License
Copyright © 2025 Eric L. Morgan. All rights reserved.  
This project is licensed under a **Custom Prohibition License**.

You may **not** use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this software without prior written permission from the copyright holder.

© 2025 ERIC L. MORGAN
🌐 https://ericlmorgan.com
#   e l m - s i t e 

 
 
