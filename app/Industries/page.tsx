'use client';

import Link from 'next/link';
import { ArrowRight, Package, Factory, Truck, ShoppingCart, Leaf, Zap, Building2, FlaskConical, ChevronRight, Star, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Industries() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => new Set(Array.from(prev).concat(entry.target.id)));
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: <ShoppingCart size={22} />,
      name: 'Lorem FMCG',
      color: '#16A34A',
      accent: '#4ade80',
      img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=900',
      tagline: 'Ipsum dolor sit amet consectetur',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.',
      stats: [{ val: '50M+', label: 'Lorem Units' }, { val: '200+', label: 'Ipsum Clients' }, { val: '24h', label: 'Amet Lead Time' }],
      features: ['High-volume lorem ipsum production runs', 'Dolor sit amet shelf-ready packaging solutions', 'Consectetur adipiscing custom brand printing', 'Sed eiusmod tempor rapid turnaround delivery'],
    },
    {
      icon: <Truck size={22} />,
      name: 'Dolor E-Commerce',
      color: '#1E3A8A',
      accent: '#93c5fd',
      img: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=900',
      tagline: 'Consectetur adipiscing elit sed do',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem ipsum.',
      stats: [{ val: '10M+', label: 'Dolor Shipped' }, { val: '99%', label: 'Ipsum Intact' }, { val: '48h', label: 'Amet Dispatch' }],
      features: ['Lorem ipsum lightweight dolor transit mailers', 'Sed eiusmod tamper-evident secure closures', 'Ut labore custom branded unboxing experience', 'Consectetur adipiscing returns-friendly designs'],
    },
    {
      icon: <Factory size={22} />,
      name: 'Ipsum Industrial',
      color: '#374151',
      accent: '#9ca3af',
      img: 'https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=900',
      tagline: 'Sed do eiusmod tempor incididunt',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum.',
      stats: [{ val: '120kg', label: 'Lorem Max Load' }, { val: 'AAA', label: 'Ipsum Flute' }, { val: '100%', label: 'Amet Tested' }],
      features: ['Heavy-duty lorem ipsum triple-wall constructions', 'Dolor sit amet moisture resistant treatment', 'Consectetur custom anti-static lining options', 'Sed eiusmod forklift-compatible pallet designs'],
    },
    {
      icon: <FlaskConical size={22} />,
      name: 'Amet Pharma',
      color: '#0891b2',
      accent: '#67e8f9',
      img: 'https://images.pexels.com/photos/5691598/pexels-photo-5691598.jpeg?auto=compress&cs=tinysrgb&w=900',
      tagline: 'Ut labore et dolore magna aliqua',
      desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore.',
      stats: [{ val: 'GMP', label: 'Lorem Compliant' }, { val: 'ISO', label: 'Ipsum Certified' }, { val: '0', label: 'Amet Tolerance' }],
      features: ['Lorem ipsum GMP-compliant dolor packaging', 'Consectetur adipiscing tamper-evident seals', 'Sed do eiusmod traceability and batch coding', 'Ut labore clean-room compatible materials'],
    },
    {
      icon: <Leaf size={22} />,
      name: 'Elit Agriculture',
      color: '#16A34A',
      accent: '#4ade80',
      img: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=900',
      tagline: 'Nostrud exercitation ullamco laboris',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ea commodo consequat duis irure.',
      stats: [{ val: '100%', label: 'Lorem Eco' }, { val: 'FSC', label: 'Ipsum Certified' }, { val: '30+', label: 'Amet Crops' }],
      features: ['Lorem ipsum ventilated amet produce packaging', 'Dolor sit amet moisture-wicking liner solutions', 'Consectetur FSC-certified sustainable materials', 'Sed eiusmod custom sizing for all produce types'],
    },
    {
      icon: <Building2 size={22} />,
      name: 'Consectetur Retail',
      color: '#7c3aed',
      accent: '#c4b5fd',
      img: 'https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg?auto=compress&cs=tinysrgb&w=900',
      tagline: 'Duis aute irure dolor reprehenderit',
      desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident consectetur adipiscing elit sed do eiusmod tempor incididunt labore.',
      stats: [{ val: 'POS', label: 'Lorem Ready' }, { val: '6-col', label: 'Ipsum Printing' }, { val: '48h', label: 'Amet Turnaround' }],
      features: ['Lorem high-impact ipsum retail display units', 'Dolor sit amet planogram-ready shelf packaging', 'Consectetur full-colour litho-laminated finishes', 'Sed eiusmod seasonal promotional packaging runs'],
    },
  ];

  const active = industries[activeIndustry];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        .font-display { font-family: 'Playfair Display', serif; }

        /* ── Tokens ── */
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; background: rgba(22,163,74,0.1);
          border: 1px solid rgba(22,163,74,0.25); border-radius: 50px;
          font-size: 12px; font-weight: 700; color: #16A34A;
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;
        }
        .section-label-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #16A34A;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }

        .accent-line {
          width: 60px; height: 4px;
          background: linear-gradient(90deg,#16A34A,#4ade80);
          border-radius: 2px; margin: 20px 0;
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .section-pad { padding: 100px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

        /* ── Reveal ── */
        .reveal {
          opacity: 0; transform: translateY(36px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* ── Hero ── */
        .hero-bg-ind {
          background-image: url('https://images.pexels.com/photos/1267358/pexels-photo-1267358.jpeg?auto=compress&cs=tinysrgb&w=1920');
          background-size: cover; background-position: center;
        }
        .hero-overlay-ind {
          background: linear-gradient(135deg, rgba(10,20,60,0.92) 0%, rgba(30,20,5,0.78) 100%);
        }

        /* ── Marquee ── */
        .marquee-track { display: flex; gap: 60px; animation: marquee 32s linear infinite; white-space: nowrap; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-item {
          font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.15em;
          display: flex; align-items: center; gap: 28px; flex-shrink: 0;
        }
        .marquee-item::after { content: '◆'; color: #16A34A; font-size: 8px; }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px;
          background: linear-gradient(135deg,#16A34A,#15803d); color: white;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          letter-spacing: 0.03em; border-radius: 50px; text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 8px 32px rgba(22,163,74,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(22,163,74,0.45); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px;
          border: 2px solid rgba(255,255,255,0.25); color: white;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          border-radius: 50px; text-decoration: none; transition: all 0.3s; background: transparent;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.5); }

        /* ── Stat strip ── */
        .stat-strip {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr));
          border: 1px solid rgba(30,58,138,0.08); border-radius: 24px; overflow: hidden;
          background: white;
        }
        .stat-strip-item {
          padding: 36px 24px; text-align: center;
          border-right: 1px solid rgba(30,58,138,0.08);
          transition: background 0.3s;
        }
        .stat-strip-item:last-child { border-right: none; }
        .stat-strip-item:hover { background: rgba(30,58,138,0.02); }
        .stat-num {
          font-family: 'Playfair Display', serif; font-weight: 800; font-size: 46px;
          background: linear-gradient(135deg,#1E3A8A,#16A34A);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }

        /* ── Industry sidebar nav ── */
        .ind-nav-btn {
          display: flex; align-items: center; gap: 14px;
          padding: 18px 20px; border-radius: 14px; cursor: pointer;
          border: 1px solid transparent; transition: all 0.3s;
          background: transparent; width: 100%; text-align: left;
        }
        .ind-nav-btn:hover { background: rgba(30,58,138,0.04); border-color: rgba(30,58,138,0.08); }
        .ind-nav-btn.active-ind {
          background: white; border-color: rgba(30,58,138,0.1);
          box-shadow: 0 8px 32px rgba(30,58,138,0.1);
        }
        .ind-nav-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }

        /* ── Industry detail panel ── */
        .ind-panel {
          border-radius: 28px; overflow: hidden;
          box-shadow: 0 32px 80px rgba(30,58,138,0.18);
          transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .ind-panel-img {
          height: 320px; position: relative; overflow: hidden;
        }
        .ind-panel-img img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .ind-panel:hover .ind-panel-img img { transform: scale(1.04); }
        .ind-panel-body { background: white; padding: 40px 36px; }

        /* ── Industry stat mini ── */
        .ind-stat-mini {
          padding: 18px 16px; border-radius: 14px; text-align: center;
          border: 1px solid rgba(30,58,138,0.07);
          transition: all 0.3s; background: rgba(30,58,138,0.02);
        }
        .ind-stat-mini:hover { background: white; box-shadow: 0 8px 24px rgba(30,58,138,0.1); transform: translateY(-2px); }

        /* ── Industry grid cards (overview) ── */
        .ind-card {
          border-radius: 22px; overflow: hidden; position: relative;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(30,58,138,0.08);
        }
        .ind-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(30,58,138,0.2); }
        .ind-card-img { height: 220px; overflow: hidden; }
        .ind-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); display: block; }
        .ind-card:hover .ind-card-img img { transform: scale(1.08); }
        .ind-card-body {
          padding: 28px 24px; background: white;
          border: 1px solid rgba(30,58,138,0.07); border-top: none;
          border-radius: 0 0 22px 22px;
        }
        .ind-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,transparent 40%,rgba(10,20,60,0.7) 100%);
          opacity: 0; transition: opacity 0.4s; pointer-events: none;
        }
        .ind-card:hover .ind-card-overlay { opacity: 1; }
        .ind-card-tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          padding: 5px 14px; border-radius: 50px;
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: white;
        }

        /* ── Testimonial ── */
        .testi-card {
          background: white; border-radius: 22px; padding: 36px 32px;
          border: 1px solid rgba(30,58,138,0.07);
          box-shadow: 0 4px 24px rgba(30,58,138,0.06);
          position: relative; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .testi-card::before {
          content: '"'; position: absolute; top: 16px; right: 24px;
          font-family: 'Playfair Display', serif; font-size: 120px; line-height: 1;
          color: rgba(30,58,138,0.04); font-weight: 900; pointer-events: none;
        }
        .testi-card:hover { transform: translateY(-6px); box-shadow: 0 28px 60px rgba(30,58,138,0.14); }

        /* ── Float tag ── */
        .float-tag {
          position: absolute; bottom: 24px; left: 24px; z-index: 10;
          background: white; border-radius: 14px; padding: 14px 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          display: flex; align-items: center; gap: 12px;
        }
        .float-tag-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: linear-gradient(135deg,#1E3A8A,#16A34A);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }

        /* ── Capability row ── */
        .cap-row {
          display: flex; align-items: flex-start; gap: 18px; padding: 22px 0;
          border-bottom: 1px solid rgba(30,58,138,0.07);
          transition: padding-left 0.3s;
        }
        .cap-row:last-child { border-bottom: none; }
        .cap-row:hover { padding-left: 8px; }
        .cap-icon-box {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,rgba(30,58,138,0.07),rgba(22,163,74,0.07));
          color: #1E3A8A; transition: all 0.3s;
        }
        .cap-row:hover .cap-icon-box {
          background: linear-gradient(135deg,#1E3A8A,#16A34A);
          color: white; box-shadow: 0 8px 20px rgba(30,58,138,0.25);
        }

        /* ── CTA dark ── */
        .cta-dark {
          background: linear-gradient(135deg,#0a1628 0%,#0f1a08 100%);
          position: relative; overflow: hidden;
        }
        .cta-dark::before {
          content: ''; position: absolute; top:-40%; left:-15%;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-dark::after {
          content: ''; position: absolute; bottom:-40%; right:-15%;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Diagonal ── */
        .diagonal-top { clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%); margin-top: -3vw; padding-top: calc(3vw + 80px); }

        @media(max-width:900px){
          .ind-explorer { flex-direction: column !important; }
          .ind-sidebar { width: 100% !important; flex-direction: row !important; overflow-x: auto; gap: 8px !important; }
          .ind-nav-btn { min-width: 160px; }
        }
        @media(max-width:768px){
          .container { padding: 0 20px; }
          .section-pad { padding: 60px 0; }
          .stat-strip { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="hero-bg-ind" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div className="hero-overlay-ind" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* Diagonal grid lines decoration */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, opacity: 0.07, pointerEvents: 'none' }} viewBox="0 0 1440 800" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <line key={i} x1={i * 130 - 200} y1="0" x2={i * 130 + 200} y2="800" stroke="white" strokeWidth="1" />
          ))}
        </svg>

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white', maxWidth: 860, padding: '0 32px' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.4)' }}>
            <span className="section-label-dot" />
            Lorem Industries
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px,6.5vw,86px)', fontWeight: 900, lineHeight: 1.04, marginBottom: 26, letterSpacing: '-0.025em' }}>
            Packaging for<br />
            <span style={{ background: 'linear-gradient(135deg,#4ade80,#16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Every Ipsum
            </span><br />
            Industry
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.68)', maxWidth: 560, margin: '0 auto 44px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#explorer" className="btn-primary">
              Lorem Explore All
              <ArrowRight size={18} />
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Dolor Enquire
            </Link>
          </div>

          {/* Industry pill row */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 52 }}>
            {['Lorem FMCG', 'Dolor E-Com', 'Ipsum Industrial', 'Amet Pharma', 'Elit Agri', 'Consectetur Retail'].map((tag, i) => (
              <span key={i} style={{ padding: '7px 16px', borderRadius: 50, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.04em' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Wave cutout */}
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, zIndex: 4 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div style={{ background: '#0f1f4a', padding: '18px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            ['Lorem FMCG', 'Dolor E-Commerce', 'Ipsum Industrial', 'Amet Pharma', 'Elit Agriculture', 'Consectetur Retail', 'Sed Food & Bev', 'Eiusmod Logistics'].map((t, j) => (
              <span key={`${i}-${j}`} className="marquee-item">{t}</span>
            ))
          )}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section style={{ background: 'white', padding: '60px 0' }}>
        <div className="container">
          <div className="stat-strip">
            {[
              { num: '6+', label: 'Lorem Industries', sub: 'Dolor served' },
              { num: '500+', label: 'Ipsum Clients', sub: 'Amet worldwide' },
              { num: '30+', label: 'Dolor Countries', sub: 'Lorem reach' },
              { num: '98%', label: 'Amet Retention', sub: 'Ipsum rate' },
            ].map((s, i) => (
              <div key={i} className="stat-strip-item">
                <div className="stat-num">{s.num}</div>
                <div style={{ fontWeight: 700, color: '#1E3A8A', marginTop: 10, fontSize: 14, letterSpacing: '0.02em' }}>{s.label}</div>
                <div style={{ color: '#9ca3af', fontSize: 12, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY EXPLORER ─── */}
      <section id="explorer" className="section-pad grid-bg" style={{ background: '#f8fafc' }} data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }} id="explorer-head" data-animate>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Explorer
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('explorer-head') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Ipsum Dolor <em style={{ color: '#16A34A' }}>Industry</em> Solutions
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.
            </p>
          </div>

          {/* Explorer layout */}
          <div className="ind-explorer" style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
            {/* Sidebar nav */}
            <div className="ind-sidebar" style={{ width: 260, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 6, background: 'rgba(248,250,252,0.8)', borderRadius: 22, padding: 10, border: '1px solid rgba(30,58,138,0.07)' }}>
              {industries.map((ind, i) => (
                <button key={i} className={`ind-nav-btn ${activeIndustry === i ? 'active-ind' : ''}`} onClick={() => setActiveIndustry(i)}>
                  <div className="ind-nav-icon" style={{ background: activeIndustry === i ? `linear-gradient(135deg,${ind.color},${ind.accent})` : `${ind.color}12`, color: activeIndustry === i ? 'white' : ind.color, boxShadow: activeIndustry === i ? `0 6px 18px ${ind.color}40` : 'none' }}>
                    {ind.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: activeIndustry === i ? '#1E3A8A' : '#6b7280' }}>{ind.name}</div>
                    <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{ind.tagline.slice(0, 24)}…</div>
                  </div>
                  <ChevronRight size={14} color={activeIndustry === i ? '#16A34A' : '#d1d5db'} />
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="ind-panel">
                {/* Image */}
                <div className="ind-panel-img">
                  <img src={active.img} alt={active.name} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(10,20,60,0.6) 100%)' }} />
                  <div style={{ position: 'absolute', top: 20, left: 20, padding: '7px 16px', borderRadius: 50, background: `linear-gradient(135deg,${active.color},${active.accent})`, fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.06em', boxShadow: `0 4px 16px ${active.color}50` }}>
                    {active.name}
                  </div>
                  {/* Mini stats overlay */}
                  <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', gap: 10 }}>
                    {active.stats.map((s, i) => (
                      <div key={i} style={{ padding: '10px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
                        <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: 'white', lineHeight: 1 }}>{s.val}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginTop: 3, letterSpacing: '0.04em' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Body */}
                <div className="ind-panel-body">
                  <h3 className="font-display" style={{ fontSize: 28, fontWeight: 800, color: '#1E3A8A', marginBottom: 6, letterSpacing: '-0.02em' }}>{active.name}</h3>
                  <p style={{ fontSize: 13, color: active.color, fontWeight: 600, marginBottom: 16, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{active.tagline}</p>
                  <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.85, marginBottom: 28 }}>{active.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
                    {active.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: 5, background: `linear-gradient(135deg,${active.color},${active.accent})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/#contact" className="btn-primary" style={{ background: `linear-gradient(135deg,${active.color},${active.color}cc)`, boxShadow: `0 8px 32px ${active.color}40` }}>
                    Lorem Get Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL INDUSTRIES GRID ─── */}
      <section className="section-pad diagonal-top" style={{ background: 'white' }} id="grid-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Overview
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('grid-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              All Ipsum <em style={{ color: '#16A34A' }}>Dolor</em> Sectors
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
            {industries.map((ind, i) => (
              <div key={i} className={`ind-card reveal reveal-delay-${(i % 4) + 1} ${visibleSections.has('grid-sec') ? 'visible' : ''}`} onClick={() => { setActiveIndustry(i); document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <div className="ind-card-img">
                  <img src={ind.img} alt={ind.name} />
                  <div className="ind-card-overlay" />
                  <span className="ind-card-tag" style={{ background: `linear-gradient(135deg,${ind.color},${ind.accent})`, boxShadow: `0 4px 14px ${ind.color}50` }}>
                    {ind.name.split(' ')[0]}
                  </span>
                </div>
                <div className="ind-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${ind.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ind.color, flexShrink: 0 }}>
                      {ind.icon}
                    </div>
                    <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#1E3A8A' }}>{ind.name}</h3>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{ind.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {ind.stats.slice(0, 2).map((s, j) => (
                        <span key={j} style={{ padding: '3px 10px', borderRadius: 50, background: `${ind.color}0d`, border: `1px solid ${ind.color}20`, fontSize: 11, fontWeight: 700, color: ind.color }}>
                          {s.val}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: ind.color, fontSize: 12, fontWeight: 700 }}>
                      Explore <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg,#0a1628 0%,#0f1a08 100%)', position: 'relative', overflow: 'hidden' }} id="cap-sec" data-animate>
        <div className="noise-overlay" />
        <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: 650, height: 650, borderRadius: '50%', background: 'radial-gradient(circle,rgba(22,163,74,0.1) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,58,138,0.14) 0%,transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('cap-sec') ? 'visible' : ''}`}>
              <div className="section-label" style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
                <span className="section-label-dot" style={{ background: '#4ade80' }} />
                Lorem Capabilities
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Cross-Industry<br />
                <em style={{ color: '#4ade80' }}>Lorem Ipsum</em><br />
                Expertise
              </h2>
              <div className="accent-line" style={{ background: 'linear-gradient(90deg,#4ade80,#16A34A)' }} />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', marginBottom: 48 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
              </p>

              {[
                { icon: <Package size={18} />, title: 'Lorem Custom Design', desc: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
                { icon: <Zap size={18} />, title: 'Ipsum Rapid Prototyping', desc: 'Ut enim ad minim veniam nostrud exercitation ullamco laboris nisi aliquip ea commodo.' },
                { icon: <Factory size={18} />, title: 'Amet Scale Production', desc: 'Duis aute irure dolor reprehenderit voluptate esse cillum dolore eu fugiat nulla pariatur.' },
                { icon: <Truck size={18} />, title: 'Dolor Fast Delivery', desc: 'Excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim.' },
              ].map((cap, i) => (
                <div key={i} className="cap-row">
                  <div className="cap-icon-box">{cap.icon}</div>
                  <div>
                    <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 4 }}>{cap.title}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('cap-sec') ? 'visible' : ''}`} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', height: 560, boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cross-industry capabilities" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(10,20,60,0.5) 100%)' }} />
              </div>
              {/* Circular badge */}
              <div style={{ position: 'absolute', top: 24, right: -16, width: 88, height: 88, borderRadius: '50%', background: 'linear-gradient(135deg,#1E3A8A,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(30,58,138,0.4)', flexDirection: 'column', zIndex: 10 }}>
                <Users size={22} color="white" />
                <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 4, letterSpacing: '0.04em' }}>500+</span>
              </div>
              <div className="float-tag">
                <div className="float-tag-icon"><Building2 size={18} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>Lorem Sectors</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Ipsum served globally</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-pad grid-bg" style={{ background: '#f8fafc' }} id="testi-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Voices
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('testi-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What Ipsum <em style={{ color: '#16A34A' }}>Clients</em> Say
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 460, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {[
              { name: 'Lorem Ipsum', role: 'Dolor Sit, FMCG Co.', industry: 'Lorem FMCG', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.', color: '#16A34A' },
              { name: 'Consectetur Elit', role: 'Adipiscing Ltd, E-Com', industry: 'Dolor E-Commerce', text: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate.', color: '#1E3A8A' },
              { name: 'Sed Eiusmod', role: 'Tempor Inc, Pharma', industry: 'Amet Pharma', text: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident deserunt.', color: '#0891b2' },
            ].map((t, i) => (
              <div key={i} className={`testi-card reveal reveal-delay-${i + 1} ${visibleSections.has('testi-sec') ? 'visible' : ''}`}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} fill={t.color} color={t.color} />)}
                </div>
                <div style={{ padding: '4px 10px', borderRadius: 50, background: `${t.color}10`, border: `1px solid ${t.color}20`, display: 'inline-block', fontSize: 11, fontWeight: 700, color: t.color, letterSpacing: '0.06em', marginBottom: 16 }}>
                  {t.industry}
                </div>
                <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.85, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg,${t.color},${t.color}aa)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 17 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: '#9ca3af', fontSize: 12, marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad cta-dark" id="ind-cta" data-animate>
        <div className="noise-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
            <span className="section-label-dot" style={{ background: '#4ade80' }} />
            Lorem Your Industry
          </div>
          <h2 className={`font-display reveal ${visibleSections.has('ind-cta') ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(30px,5vw,66px)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: 740, margin: '0 auto 24px' }}>
            Lorem Ipsum for<br />
            <em style={{ background: 'linear-gradient(135deg,#4ade80,#16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Your Dolor Sector
            </em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 52px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud exercitation ullamco.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">
              Lorem Get a Quote
              <ArrowRight size={18} />
            </Link>
            <Link href="/products" className="btn-ghost">
              Dolor Products
            </Link>
          </div>

          {/* Industry badges row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 72, flexWrap: 'wrap' }}>
            {industries.map((ind, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: `${ind.color}18`, border: `1px solid ${ind.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ind.accent }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', maxWidth: 70, textAlign: 'center' }}>{ind.name.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}