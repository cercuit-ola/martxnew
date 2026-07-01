# martxnew

Live shopping marketplace demo for MartX with AI try-on and wallet.

This workspace has been split into standalone static pages (HTML + shared CSS) so the site can be deployed as a static site on Vercel. A minimal serverless API stub is included at `api/hello.js`.

Pages:
- index.html
- marketplace.html
- live.html
- tryon.html
- product.html
- checkout.html
- auth.html
- wallet.html

Static assets: `assets/styles.css`, `assets/*` images.

To deploy:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel login` then `vercel --prod` from the project root.

If you want a separate Express backend instead of serverless functions, say the word and I'll scaffold `server/` with an Express app and deployment notes.
