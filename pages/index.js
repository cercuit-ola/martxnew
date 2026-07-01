import Head from 'next/head';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const heroLiveCard = {
  title: 'Gold Hoop Earrings',
  subtitle: 'Zuri Studio',
  price: '$24',
  viewers: '2,418 watching',
  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&q=82&auto=format&fit=crop',
};

const marketCats = ['All', 'Try-On ready', 'Fashion', 'Beauty', 'Electronics', 'Accessories', 'Home', 'Vendor stores'];
const pillars = [
  { name: 'Live Shopping', body: 'Watch & buy in real time', icon: '◉', iconBg: '#FF2E7E', cardBg: 'linear-gradient(160deg, rgba(255,90,31,.12), #fff)' },
  { name: 'Marketplace', body: 'Stores & product drops', icon: '⊞', iconBg: '#FFB36B', cardBg: 'linear-gradient(160deg, rgba(16,142,233,.08), #fff)' },
  { name: 'AI Try-On', body: 'Preview on your selfie', icon: '✨', iconBg: '#8A56FF', cardBg: 'linear-gradient(160deg, rgba(255,90,31,.06), rgba(255,46,126,.06), #fff)' },
  { name: 'Wallet', body: 'Gift cards & cards', icon: '◇', iconBg: '#1A1F71', cardBg: 'linear-gradient(160deg, rgba(15,157,88,.12), #fff)' },
  { name: 'Sell', body: 'Go live from Studio', icon: '⌂', iconBg: '#0F9D58', cardBg: 'linear-gradient(160deg, rgba(255,90,31,.06), #fff)' },
];

const lives = [
  { name: 'Gold Hoop Earrings', handle: '@zuri.live', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=82&auto=format&fit=crop', viewers: '2,418', price: '$24' },
  { name: 'Glow Serum', handle: '@lumi.beauty', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=82&auto=format&fit=crop', viewers: '1,117', price: '$28' },
  { name: 'Silk Scarf', handle: '@ade.crafts', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=82&auto=format&fit=crop', viewers: '940', price: '$18' },
  { name: 'Headphones', handle: '@soundlab', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=82&auto=format&fit=crop', viewers: '1,840', price: '$119' },
];

const trending = [
  { vendor: 'Zuri Studio', name: 'Gold Hoop Earrings', price: '$24', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=82&auto=format&fit=crop', tryable: true, rating: '4.9' },
  { vendor: 'Ade Crafts', name: 'Beaded Crown Set', price: '$36', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=82&auto=format&fit=crop', tryable: true, rating: '4.8' },
  { vendor: 'SoundLab', name: 'Wireless Headphones', price: '$119', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=82&auto=format&fit=crop', tryable: false, rating: '4.7' },
  { vendor: 'Lumi Beauty', name: 'Glow Skincare Set', price: '$28', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=82&auto=format&fit=crop', tryable: false, rating: '4.9' },
];

const giftHome = [
  { n: 'Amazon', tint: '#FF9900', logo: 'https://cdn.simpleicons.org/amazon/ffffff' },
  { n: 'Netflix', tint: '#E50914', logo: 'https://cdn.simpleicons.org/netflix/ffffff' },
  { n: 'Spotify', tint: '#1DB954', logo: 'https://cdn.simpleicons.org/spotify/ffffff' },
  { n: 'Visa', tint: '#1A1F71', logo: 'https://cdn.simpleicons.org/visa/ffffff' },
];

const payMethods = [
  { id: 'wallet', name: 'MartX Wallet', sub: 'Balance $1,845', icon: '◇', tint: 'linear-gradient(135deg,#FF6A2B,#FF2E7E)' },
  { id: 'card', name: 'Debit / Credit card', sub: 'Visa, Mastercard, Verve', icon: '💳', tint: '#1A1F71' },
  { id: 'crypto', name: 'Crypto', sub: 'USDT, BTC via NowPayments', icon: '₿', tint: '#F7931A' },
];

const giftCards = [
  { n: 'Amazon', tint: '#FF9900', logo: 'https://cdn.simpleicons.org/amazon/ffffff', from: 'from $5' },
  { n: 'Netflix', tint: '#E50914', logo: 'https://cdn.simpleicons.org/netflix/ffffff', from: 'from $5' },
  { n: 'Spotify', tint: '#1DB954', logo: 'https://cdn.simpleicons.org/spotify/ffffff', from: 'from $5' },
  { n: 'Visa', tint: '#1A1F71', logo: 'https://cdn.simpleicons.org/visa/ffffff', from: 'from $5' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [selectedMarket, setSelectedMarket] = useState('All');
  const [selectedPay, setSelectedPay] = useState('wallet');

  const heroImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=82&auto=format&fit=crop';

  const themeIcon = theme === 'dark' ? '☾' : '☀';
  const activeProducts = useMemo(
    () => trending.filter((item) => selectedMarket === 'All' || item.tryable || selectedMarket === item.vendor || selectedMarket === 'Fashion'),
    [selectedMarket]
  );

  return (
    <>
      <Head>
        <title>MartX | Live shopping & AI Try-On</title>
        <meta name="description" content="MartX is Africa's live shopping marketplace with AI try-on, wallet checkout, and gift cards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className={`app ${theme === 'dark' ? 'theme-dark' : ''}`}>
        <header className="topnav">
          <div className="topnav-inner">
            <button className="hamburger" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
            <div className="brand">
              <Image src="/assets/martx-wordmark.png" alt="MartX" width={140} height={38} priority />
            </div>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <a href="#live">Live</a>
              <a href="#market">Marketplace</a>
              <a href="#tryon">AI Try-On</a>
              <a href="#wallet">Wallet</a>
              <a href="#sell">Sell</a>
            </nav>
            <div className="top-actions">
              <button className="theme-toggle" onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}>{themeIcon}</button>
              <button className="wallet-chip"><span>$</span>1,845</button>
              <button className="avatar">Z</button>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <div className="hero-badge">Live shopping · marketplace · AI try-on · wallet</div>
            <h1>Go live. Sell instantly.<br />Let shoppers <span>try before they buy.</span></h1>
            <p>Africa's live shopping marketplace with AI try-on and wallet-powered checkout. Watch, try, and pay — all in one connected place.</p>
            <div className="hero-actions">
              <button className="primary">Start shopping live</button>
              <button className="secondary">Become a vendor</button>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-phone">
              <div className="hero-phone-backdrop"></div>
              <div className="hero-phone-image" style={{ backgroundImage: `url(${heroImage})` }} />
              <div className="hero-phone-overlay">
                <div className="hero-phone-badge">LIVE</div>
                <div className="hero-phone-footer">
                  <div>
                    <strong>{heroLiveCard.title}</strong>
                    <span>{heroLiveCard.subtitle}</span>
                  </div>
                  <div className="buy-chip">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="doors" aria-label="Core platform features">
          {pillars.map((pillar) => (
            <article key={pillar.name} className="door-card" style={{ background: pillar.cardBg }}>
              <div className="door-icon" style={{ background: pillar.iconBg }}>{pillar.icon}</div>
              <div>
                <h3>{pillar.name}</h3>
                <p>{pillar.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="live" className="live-now">
          <div className="section-header">
            <div>
              <span className="label">LIVE NOW</span>
              <h2>Selling right now</h2>
            </div>
            <a href="#market">See all lives →</a>
          </div>
          <div className="card-grid">
            {lives.map((item) => (
              <article key={item.name} className="live-card" style={{ backgroundImage: `url(${item.img})` }}>
                <span className="live-badge">LIVE</span>
                <span className="live-viewers">{item.viewers}</span>
                <div className="live-card-footer">
                  <div>{item.name}</div>
                  <div>{item.handle}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="market" className="market-trending">
          <div className="section-header">
            <h2>Trending in marketplace</h2>
            <a href="#market">Browse all →</a>
          </div>
          <div className="card-grid market-grid">
            {trending.map((item) => (
              <article key={item.name} className="product-card">
                <div className="product-image" style={{ backgroundImage: `url(${item.img})` }}>
                  {item.tryable && <span className="product-tag">✨ Try-On</span>}
                </div>
                <div className="product-info">
                  <span>{item.vendor}</span>
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-grid">
          <div className="feature-card feature-card--left">
            <div className="feature-pill">💳 Prepaid cards</div>
            <h3>MartX Prepaid Mastercard</h3>
            <p>Spin up a wallet-funded Mastercard for subscriptions and online stores worldwide — freeze or delete anytime.</p>
            <div className="card-preview">
              <div className="card-chip" />
              <div className="card-number">5418 •••• •••• 2210</div>
              <div className="card-meta"><span>ZURI A.</span><span>Mastercard</span></div>
            </div>
            <button className="secondary">Get a card →</button>
          </div>

          <div className="feature-card feature-card--right">
            <div className="feature-pill feature-pill--alt">🎁 Gift cards</div>
            <h3>30+ top brands, instantly</h3>
            <p>Buy Amazon, Netflix, Spotify, Steam and more with your wallet balance — delivered to your account in seconds.</p>
            <div className="gift-grid">
              {giftHome.map((gift) => (
                <div key={gift.n} className="gift-swatch" style={{ background: `linear-gradient(135deg, ${gift.tint}, rgba(0,0,0,.55))` }}>
                  <div className="gift-logo" style={{ backgroundImage: `url(${gift.logo})` }} />
                  <span>{gift.n}</span>
                </div>
              ))}
            </div>
            <button className="primary">Browse gift cards →</button>
          </div>
        </section>

        <section className="feature-grid feature-grid--stacked">
          <div className="media-card">
            <div className="media-thumb" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=82&auto=format&fit=crop)' }}>
              <div className="media-flag">2 min demo</div>
              <div className="media-play">▶</div>
            </div>
            <div className="media-copy">
              <div className="feature-pill">Live demo</div>
              <h3>See MartX in action</h3>
              <p>A quick walkthrough of the full journey — discover a live drop, try it on, and pay from your wallet.</p>
              <button className="secondary">Watch a live drop →</button>
            </div>
          </div>

          <div className="media-card media-card--alt">
            <div className="media-copy">
              <div className="feature-pill feature-pill--alt">✨ AI image gen</div>
              <h3>Generate the look on you</h3>
              <p>Upload a selfie and let MartX place any product on you with studio lighting — before you spend a naira.</p>
            </div>
            <div className="media-thumbs">
              <div className="thumb-grid">
                <div className="thumb-pill" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=82&auto=format&fit=crop)' }} />
                <div className="thumb-pill thumb-pill--active" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&q=82&auto=format&fit=crop)' }}>
                  <span>After</span>
                </div>
              </div>
              <button className="secondary">Try AI image gen →</button>
            </div>
          </div>
        </section>

        <section className="journey-strip">
          <div className="journey-card">
            <h2>How MartX works</h2>
            <p>Watch. Try. Pay. The whole journey lives in one app.</p>
            <div className="journey-steps">
              <div>
                <span>1</span>
                <h4>Discover</h4>
                <p>Watch a vendor live or browse the marketplace.</p>
              </div>
              <div>
                <span>2</span>
                <h4>Try with AI</h4>
                <p>Preview supported products on your selfie before buying.</p>
              </div>
              <div>
                <span>3</span>
                <h4>Pay safely</h4>
                <p>Checkout with wallet, card, or crypto — protected until delivery.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        :root {
          color-scheme: light;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          background: #F4F4F7;
          color: #16161C;
        }

        .app {
          min-height: 100vh;
          background: var(--bg, #F4F4F7);
        }

        .theme-dark {
          --bg: #09080A;
          --surface: #151318;
          --surface-2: #1E1B21;
          --surface-3: #26222B;
          --ink: #FBFAFC;
          --ink-2: #BBB6C0;
          --muted: #888390;
          --border: rgba(255,255,255,.08);
          --line: rgba(255,255,255,.06);
          --shadow: 0 1px 2px rgba(0,0,0,.4), 0 24px 50px -28px rgba(0,0,0,.85);
          --shadow-lg: 0 1px 2px rgba(0,0,0,.5), 0 40px 80px -34px rgba(0,0,0,.95);
          --grad: linear-gradient(118deg,#FF6A2B,#FF2E7E);
          --surface: #151318;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; min-height: 100vh; background: var(--bg, #F4F4F7); color: var(--ink, #16161C); }
        button { font: inherit; }
        a { color: inherit; text-decoration: none; }
        img { display: block; max-width: 100%; }

        .topnav { position: sticky; top: 0; z-index: 90; background: rgba(244,244,247,.92); backdrop-filter: blur(18px); border-bottom: 1px solid rgba(236,236,239,.9); }
        .topnav-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; gap: 16px; padding: 0 clamp(16px,4vw,40px); height: 66px; }
        .hamburger { display: none; border: 1px solid rgba(236,236,239,.9); border-radius: 14px; width: 44px; height: 44px; background: #fff; color: #16161C; cursor: pointer; }
        .brand { flex: none; }
        .nav-links { display: flex; align-items: center; gap: 10px; margin-left: 10px; }
        .nav-links a { padding: 8px 13px; border-radius: 10px; font-size: 14px; font-weight: 600; color: #54545E; transition: background .2s ease; }
        .nav-links a:hover { background: rgba(255,255,255,.9); }
        .nav-links.open { flex-direction: column; position: absolute; top: 66px; left: 16px; right: 16px; background: var(--surface, #fff); border: 1px solid rgba(236,236,239,.9); border-radius: 20px; padding: 12px 0; box-shadow: 0 20px 60px rgba(0,0,0,.08); }
        .top-actions { margin-left: auto; display: flex; align-items: center; gap: 10px; }
        .theme-toggle, .wallet-chip, .avatar { border: 1px solid rgba(236,236,239,.9); border-radius: 14px; background: var(--surface, #fff); color: var(--ink, #16161C); cursor: pointer; }
        .wallet-chip { display: inline-flex; align-items: center; gap: 8px; padding: 0 14px; height: 40px; font-weight: 700; }
        .avatar { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(118deg,#FF6A2B,#FF2E7E); color: #fff; }

        .hero { max-width: 1280px; margin: 0 auto; padding: clamp(20px,4vw,42px) clamp(16px,4vw,40px); display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(28px,4vw,50px); align-items: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 9px; padding: 7px 13px; border-radius: 999px; border: 1px solid rgba(255,255,255,.16); background: rgba(255,255,255,.06); color: #FFC9B3; font-size: 12.5px; font-weight:700; }
        .hero h1 { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: clamp(42px,5.6vw,72px); line-height: .95; margin: 18px 0; letter-spacing: -.03em; }
        .hero h1 span { background: var(--grad, linear-gradient(118deg,#FF6A2B,#FF2E7E)); -webkit-background-clip: text; color: transparent; }
        .hero p { max-width: 560px; margin: 0 0 26px; color: #C9C2C6; font-size: clamp(15px,1.6vw,18px); line-height:1.55; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .hero-media { display: grid; place-items: center; }
        .hero-phone { position: relative; width: min(320px,76vw); aspect-ratio: 9 / 17.5; border-radius: 38px; overflow: hidden; background: #000; border: 1px solid rgba(255,255,255,.14); box-shadow: 0 50px 90px -34px rgba(0,0,0,.7); }
        .hero-phone-backdrop { position: absolute; inset: 0; background: radial-gradient(700px 460px at 8% -10%, rgba(255,106,43,.5), transparent 60%), radial-gradient(640px 460px at 98% 10%, rgba(255,46,126,.42), transparent 58%); }
        .hero-phone-image { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .hero-phone-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-between; padding: 18px; }
        .hero-phone-badge { display: inline-flex; align-items: center; gap: 6px; background: #FF1F4B; color: #fff; border-radius: 8px; padding: 5px 10px; font-size: 11px; font-weight: 800; }
        .hero-phone-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; background: rgba(255,255,255,.95); padding: 12px 14px; border-radius: 20px; }
        .hero-phone-footer strong { display: block; font-size: 15px; font-weight: 800; color: #181210; }
        .hero-phone-footer span { display: block; font-size: 12px; color: #FF2E7E; font-weight: 800; }
        .buy-chip { padding: 9px 12px; border-radius: 14px; background: linear-gradient(118deg,#FF6A2B,#FF2E7E); color:#fff; font-weight:800; font-size:12px; }

        .doors { max-width: 1280px; margin: 0 auto; padding: clamp(26px,4vw,42px) clamp(16px,4vw,40px) 0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; }
        .door-card { min-height: 150px; border-radius: 22px; border: 1px solid rgba(236,236,239,.95); box-shadow: 0 1px 2px rgba(20,20,30,.04), 0 10px 28px -18px rgba(20,20,30,.16); padding: 20px; display: flex; flex-direction: column; justify-content: space-between; }
        .door-icon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; color: #fff; font-size: 20px; margin-bottom: 18px; }
        .door-card h3 { margin: 0 0 6px; font-size: 18px; }
        .door-card p { margin: 0; color: #54545E; font-size: 12.5px; line-height: 1.5; }

        .section-header { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
        .label { display: inline-flex; align-items: center; gap: 7px; color: #FF1F4B; font-size: 12px; font-weight: 800; margin-bottom: 8px; }
        .card-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .live-card, .product-card { position: relative; overflow: hidden; border-radius: 20px; border: 1px solid rgba(236,236,239,.95); box-shadow: 0 1px 2px rgba(20,20,30,.04), 0 10px 28px -18px rgba(20,20,30,.16); cursor: pointer; min-height: 320px; }
        .live-card { display: grid; }
        .live-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,6,7,0), rgba(8,6,7,.85)); }
        .live-card, .product-card { background-size: cover; background-position: center; }
        .live-badge { position: absolute; top: 12px; left: 12px; background: #FF1F4B; color:#fff; border-radius: 7px; padding: 4px 8px; font-size: 10.5px; font-weight: 800; z-index: 1; }
        .live-viewers { position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,.5); color: #fff; border-radius: 999px; padding: 4px 9px; font-size: 10.5px; font-weight: 700; z-index: 1; }
        .live-card-footer { position: absolute; left: 14px; right: 14px; bottom: 14px; color: #fff; z-index: 1; }
        .live-card-footer div:first-child { font-weight: 800; font-size: 15px; }
        .live-card-footer div:last-child { font-size: 12px; opacity: .92; }

        .product-image { position: relative; min-height: 220px; background-size: cover; background-position: center; }
        .product-info { padding: 13px 14px 15px; background: var(--surface, #fff); }
        .product-info span { display: block; font-size: 11.5px; color: #8B8B95; font-weight: 600; }
        .product-info h3 { margin: 2px 0 6px; font-size: 14px; font-weight: 700; color: var(--ink); line-height: 1.3; }
        .product-info strong { font-weight: 800; color: var(--ink); }
        .product-tag { position: absolute; top: 10px; left: 10px; background: rgba(255,255,255,.94); color: #181210; border-radius: 999px; padding: 5px 9px; font-size: 10.5px; font-weight: 800; }

        .feature-grid { max-width: 1280px; margin: 0 auto; padding: clamp(26px,4vw,42px) clamp(16px,4vw,40px) 0; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .feature-card { border-radius: 24px; border: 1px solid rgba(236,236,239,.95); background: var(--surface, #fff); box-shadow: 0 1px 2px rgba(20,20,30,.04), 0 10px 28px -18px rgba(20,20,30,.16); padding: clamp(24px,3vw,34px); display: flex; flex-direction: column; justify-content: space-between; min-height: 320px; }
        .feature-card--left { background: linear-gradient(125deg,#1A0E14,#2A0C1C 60%,#1A0E14); color: #fff; }
        .feature-card--left .secondary { background: #fff; color: #181210; }
        .feature-pill { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 800; border-radius: 999px; padding: 6px 12px; background: rgba(255,255,255,.08); color: #FFC9B3; margin-bottom: 18px; }
        .feature-pill--alt { background: rgba(255,255,255,.08); color: #E4D4FF; }
        .feature-card h3 { margin: 0 0 8px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: clamp(22px,2.6vw,30px); line-height: 1.06; }
        .feature-card p { margin: 0 0 22px; color: inherit; font-size: 14.5px; line-height: 1.55; max-width: 360px; }
        .card-preview { display: flex; flex-direction: column; gap: 18px; padding: 18px; border-radius: 22px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); }
        .card-chip { width: 40px; height: 40px; border-radius: 14px; background: linear-gradient(135deg, #EB001B, #F79E1B); }
        .card-number { font-family: 'Bricolage Grotesque', sans-serif; letter-spacing: .14em; font-size: 14px; }
        .card-meta { display: flex; justify-content: space-between; font-size: 11px; opacity: .9; }
        .gift-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 9px; margin: 0 0 16px; }
        .gift-swatch { position: relative; aspect-ratio: 1.55; border-radius: 12px; display: grid; place-items: center; padding: 12px; color: #fff; }
        .gift-logo { width: 74%; height: 26px; background-size: contain; background-repeat: no-repeat; background-position: center; filter: drop-shadow(0 2px 5px rgba(0,0,0,.4)); }
        .gift-swatch span { position: absolute; top: 12px; left: 12px; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 12px; }
        .primary, .secondary { border: none; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 15px 24px; font-weight: 800; font-size: 15px; cursor: pointer; }
        .primary { background: var(--grad, linear-gradient(118deg,#FF6A2B,#FF2E7E)); color: #fff; }
        .secondary { background: rgba(255,255,255,.08); color: #fff; border: 1px solid rgba(255,255,255,.2); }

        .feature-grid--stacked { grid-template-columns: 1fr 1fr; }
        .media-card { border-radius: 24px; border: 1px solid rgba(236,236,239,.95); background: var(--surface, #fff); box-shadow: 0 1px 2px rgba(20,20,30,.04), 0 10px 28px -18px rgba(20,20,30,.16); display: grid; grid-template-columns: 1fr 1fr; gap: 16px; overflow: hidden; }
        .media-card--alt { background: linear-gradient(125deg,#160A1E,#241033 58%,#160A1E); color: #fff; }
        .media-thumb { position: relative; min-height: 260px; background-size: cover; background-position: center; }
        .media-flag { position: absolute; top: 14px; left: 14px; background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.16); color: #fff; border-radius: 999px; padding: 5px 11px; font-size: 11px; font-weight: 800; }
        .media-play { position: absolute; inset: 0; display: grid; place-items: center; width: 60px; height: 60px; margin: auto; background: rgba(255,255,255,.94); color: #181210; border-radius: 50%; font-size: 22px; }
        .media-copy { padding: 32px; display: flex; flex-direction: column; justify-content: center; gap: 18px; }
        .media-thumbs { padding: 32px; display: grid; gap: 18px; align-items: end; }
        .thumb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .thumb-pill { border-radius: 12px; min-height: 180px; background-size: cover; background-position: center; border: 1px solid rgba(255,255,255,.18); }
        .thumb-pill--active { position: relative; overflow: hidden; border-color: #FF2E7E; }
        .thumb-pill--active span { position: absolute; left: 5px; right: 5px; bottom: 5px; text-align: center; background: var(--grad, linear-gradient(118deg,#FF6A2B,#FF2E7E)); color: #fff; border-radius: 7px; padding: 3px; font-size: 9px; font-weight: 800; }

        .journey-strip { max-width: 1280px; margin: 0 auto; padding: clamp(34px,5vw,56px) clamp(16px,4vw,40px); }
        .journey-card { border-radius: 26px; border: 1px solid rgba(236,236,239,.95); background: var(--surface, #fff); box-shadow: 0 1px 2px rgba(20,20,30,.04), 0 10px 28px -18px rgba(20,20,30,.16); padding: clamp(24px,3vw,40px); }
        .journey-card h2 { font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(22px,2.6vw,30px); margin: 0 0 6px; }
        .journey-card p { margin: 0 0 22px; color: #54545E; font-size: 15px; }
        .journey-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .journey-steps div { border-radius: 18px; border: 1px solid rgba(236,236,239,.95); background: var(--surface-2, #F2F2F5); padding: 20px; }
        .journey-steps span { display: grid; width: 34px; height: 34px; border-radius: 11px; background: var(--grad, linear-gradient(118deg,#FF6A2B,#FF2E7E)); color: #fff; align-items: center; justify-content: center; font-weight: 800; margin-bottom: 14px; }
        .journey-steps h4 { margin: 0 0 5px; font-size: 16px; font-weight: 800; color: var(--ink); }
        .journey-steps p { margin: 0; font-size: 13.5px; color: #54545E; line-height: 1.5; }

        @media (max-width: 1100px) {
          .hero { grid-template-columns: 1fr; }
          .doors { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .feature-grid, .feature-grid--stacked { grid-template-columns: 1fr; }
          .media-card { grid-template-columns: 1fr; }
          .journey-steps { grid-template-columns: 1fr; }
        }

        @media (max-width: 800px) {
          .nav-links { display: none; }
          .hamburger { display: inline-flex; }
          .top-actions { gap: 8px; }
          .hero h1 { font-size: clamp(34px,6vw,48px); }
          .live-card, .product-card { min-height: 260px; }
        }

        @media (max-width: 560px) {
          .topnav-inner { flex-wrap: wrap; height: auto; padding-top: 12px; padding-bottom: 12px; }
          .top-actions { width: 100%; justify-content: space-between; }
          .nav-links.open { position: static; width: 100%; border: none; box-shadow: none; background: transparent; padding: 0; }
          .nav-links a { padding: 14px 0; width: 100%; border-top: 1px solid rgba(236,236,239,.9); }
          .hero { padding-top: 20px; }
          .hero-actions { flex-direction: column; }
          .gift-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .card-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
