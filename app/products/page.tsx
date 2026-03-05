'use client';

import Link from 'next/link';
import { ArrowRight, Package, Boxes, Factory, Leaf, Shield, Zap, ChevronDown, CheckCircle, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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

  const categories = [
    { label: 'Lorem Containers', icon: <Package size={16} /> },
    { label: 'Dolor Custom', icon: <Boxes size={16} /> },
    { label: 'Ipsum Industrial', icon: <Factory size={16} /> },
    { label: 'Amet FMCG', icon: <Zap size={16} /> },
    { label: 'Elit Eco', icon: <Leaf size={16} /> },
  ];

  const products = [
    {
      tab: 0,
      items: [
        {
          title: 'Lorem Single Wall',
          img: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Most Popular',
          specs: ['B/C Flute', 'Up to 20kg', 'Custom print'],
          desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore.',
        },
        {
          title: 'Dolor Double Wall',
          img: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Heavy Duty',
          specs: ['BC Flute', 'Up to 50kg', 'Moisture resist'],
          desc: 'Consectetur adipiscing elit sed eiusmod tempor incididunt labore et dolore magna aliqua ut enim.',
        },
        {
          title: 'Ipsum Triple Wall',
          img: 'https://images.pexels.com/photos/6169654/pexels-photo-6169654.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Industrial',
          specs: ['AAA Flute', 'Up to 120kg', 'Stackable'],
          desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco.',
        },
      ],
    },
    {
      tab: 1,
      items: [
        {
          title: 'Lorem Die-Cut Boxes',
          img: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Bespoke',
          specs: ['Any size', 'Full colour', 'Brand ready'],
          desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut labore dolore magna.',
        },
        {
          title: 'Dolor Printed Mailers',
          img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'E-Commerce',
          specs: ['Self-seal', 'Branded', 'Lightweight'],
          desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        },
        {
          title: 'Ipsum Display Units',
          img: 'https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Retail',
          specs: ['POS ready', 'High-res print', 'Flat-pack'],
          desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
    },
    {
      tab: 2,
      items: [
        {
          title: 'Lorem Pallet Boxes',
          img: 'https://images.pexels.com/photos/1267362/pexels-photo-1267362.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Heavy Duty',
          specs: ['1000L capacity', 'Forklift safe', 'Reusable'],
          desc: 'Excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim id est laborum.',
        },
        {
          title: 'Dolor Bulk Containers',
          img: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Bulk',
          specs: ['500–2000L', 'Stackable', 'Weather seal'],
          desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
        },
        {
          title: 'Ipsum Edge Protectors',
          img: 'https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Protective',
          specs: ['L-profile', 'Shock absorb', 'Custom length'],
          desc: 'Consectetur adipiscing elit sed eiusmod tempor incididunt labore et dolore magna aliqua quis nostrud.',
        },
      ],
    },
    {
      tab: 3,
      items: [
        {
          title: 'Lorem Transit Cases',
          img: 'https://images.pexels.com/photos/5691598/pexels-photo-5691598.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'High Volume',
          specs: ['RSC style', 'Auto-bottom', 'Full print'],
          desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.',
        },
        {
          title: 'Dolor Shelf-Ready',
          img: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Retail Ready',
          specs: ['Easy open', 'Planogram fit', 'Branded'],
          desc: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
        },
        {
          title: 'Ipsum Tray & Hood',
          img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Versatile',
          specs: ['2-piece', 'Tamper evident', 'Stackable'],
          desc: 'In reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
        },
      ],
    },
    {
      tab: 4,
      items: [
        {
          title: 'Lorem Recycled Board',
          img: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Eco',
          specs: ['100% recycled', 'FSC certified', 'Water-based ink'],
          desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
        },
        {
          title: 'Dolor Biodegradable',
          img: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Sustainable',
          specs: ['Compostable', 'No plastics', 'Carbon neutral'],
          desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ea commodo consequat.',
        },
        {
          title: 'Ipsum Green Series',
          img: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600',
          tag: 'Green',
          specs: ['Plant-based', 'Zero waste', 'Recyclable'],
          desc: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur est.',
        },
      ],
    },
  ];

  const activeProducts = products.find((p) => p.tab === activeTab)?.items || [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        .font-display { font-family: 'Playfair Display', serif; }

        /* ── Shared tokens ── */
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; background: rgba(22,163,74,0.1);
          border: 1px solid rgba(22,163,74,0.25); border-radius: 50px;
          font-size: 12px; font-weight: 700; color: #16A34A;
          text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;
        }
        .section-label-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #16A34A;
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }

        .accent-line {
          width: 60px; height: 4px;
          background: linear-gradient(90deg,#16A34A,#4ade80);
          border-radius: 2px; margin: 20px 0;
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
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
        .hero-bg-prod {
          background-image: url('https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg?auto=compress&cs=tinysrgb&w=1920');
          background-size: cover; background-position: center;
        }
        .hero-overlay { background: linear-gradient(135deg, rgba(10,20,60,0.93) 0%, rgba(15,40,20,0.72) 100%); }

        /* ── Marquee ── */
        .marquee-track { display: flex; gap: 60px; animation: marquee 28s linear infinite; white-space: nowrap; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-item {
          font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.15em;
          display: flex; align-items: center; gap: 28px; flex-shrink: 0;
        }
        .marquee-item::after { content: '◆'; color: #16A34A; font-size: 8px; }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg,#16A34A,#15803d);
          color: white; font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 15px; letter-spacing: 0.03em;
          border-radius: 50px; text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 8px 32px rgba(22,163,74,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(22,163,74,0.45); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px;
          border: 2px solid rgba(255,255,255,0.25); color: white;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          border-radius: 50px; text-decoration: none; transition: all 0.3s;
          background: transparent;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.5); }

        .btn-navy {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 30px;
          background: linear-gradient(135deg,#1E3A8A,#1e40af);
          color: white; font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 14px; border-radius: 50px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.3s; box-shadow: 0 6px 20px rgba(30,58,138,0.3);
        }
        .btn-navy:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(30,58,138,0.4); }

        /* ── Tabs ── */
        .tab-bar {
          display: flex; gap: 8px; flex-wrap: wrap;
          background: rgba(30,58,138,0.05); border-radius: 16px; padding: 8px;
          border: 1px solid rgba(30,58,138,0.08);
        }
        .tab-btn {
          display: flex; align-items: center; gap: 7px;
          padding: 10px 20px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 13px;
          cursor: pointer; border: none; transition: all 0.3s;
          white-space: nowrap; letter-spacing: 0.02em;
        }
        .tab-btn.active {
          background: linear-gradient(135deg,#1E3A8A,#1e40af);
          color: white; box-shadow: 0 6px 20px rgba(30,58,138,0.3);
        }
        .tab-btn.inactive {
          background: transparent; color: #6b7280;
        }
        .tab-btn.inactive:hover { background: white; color: #1E3A8A; box-shadow: 0 2px 12px rgba(30,58,138,0.1); }

        /* ── Product Card ── */
        .prod-card {
          background: white; border-radius: 24px; overflow: hidden;
          border: 1px solid rgba(30,58,138,0.07);
          box-shadow: 0 4px 24px rgba(30,58,138,0.06);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          display: flex; flex-direction: column;
        }
        .prod-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(30,58,138,0.16); }
        .prod-card-img {
          height: 220px; overflow: hidden; position: relative;
        }
        .prod-card-img img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .prod-card:hover .prod-card-img img { transform: scale(1.08); }
        .prod-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10,20,60,0.4) 100%);
        }
        .prod-tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          padding: 4px 12px; border-radius: 50px;
          background: linear-gradient(135deg,#16A34A,#15803d);
          color: white; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          box-shadow: 0 4px 12px rgba(22,163,74,0.4);
        }
        .prod-card-body { padding: 28px; flex: 1; display: flex; flex-direction: column; }
        .prod-specs {
          display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 18px;
        }
        .prod-spec {
          padding: 4px 12px; border-radius: 50px;
          background: rgba(30,58,138,0.06); border: 1px solid rgba(30,58,138,0.1);
          font-size: 11px; font-weight: 600; color: #1E3A8A; letter-spacing: 0.04em;
        }

        /* ── Feature strip ── */
        .feature-strip {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap: 0; border: 1px solid rgba(30,58,138,0.08); border-radius: 24px; overflow: hidden;
        }
        .feature-strip-item {
          padding: 36px 28px; text-align: center;
          border-right: 1px solid rgba(30,58,138,0.08);
          transition: background 0.3s;
        }
        .feature-strip-item:last-child { border-right: none; }
        .feature-strip-item:hover { background: rgba(30,58,138,0.03); }
        .feature-strip-num {
          font-family: 'Playfair Display', serif; font-weight: 800; font-size: 44px;
          background: linear-gradient(135deg,#1E3A8A,#16A34A);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }

        /* ── Process steps ── */
        .process-step {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 28px; border-radius: 18px;
          border: 1px solid rgba(30,58,138,0.08);
          background: white;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          position: relative; overflow: hidden;
        }
        .process-step::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg,#1E3A8A,#16A34A);
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
        }
        .process-step:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(30,58,138,0.12); }
        .process-step:hover::after { transform: scaleX(1); }
        .process-num {
          font-family: 'Playfair Display', serif; font-weight: 900; font-size: 48px;
          line-height: 1; color: rgba(30,58,138,0.08); flex-shrink: 0; min-width: 48px;
          transition: color 0.3s;
        }
        .process-step:hover .process-num { color: rgba(22,163,74,0.2); }

        /* ── Img card ── */
        .img-card { border-radius: 24px; overflow: hidden; }
        .img-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

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

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(135deg,#0a1628 0%,#0f2010 100%);
          position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute; top: -40%; left: -15%; width: 700px; height: 700px;
          border-radius: 50%; background: radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-section::after {
          content: ''; position: absolute; bottom: -40%; right: -15%; width: 600px; height: 600px;
          border-radius: 50%; background: radial-gradient(circle, rgba(30,58,138,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Testimonial card ── */
        .testi-card {
          background: white; border-radius: 20px; padding: 32px;
          border: 1px solid rgba(30,58,138,0.07);
          box-shadow: 0 4px 24px rgba(30,58,138,0.06);
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .testi-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(30,58,138,0.12); }
        .stars { display: flex; gap: 3px; margin-bottom: 16px; }

        /* ── Diagonal ── */
        .diagonal-top { clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%); margin-top: -3vw; padding-top: calc(3vw + 80px); }

        @media(max-width:768px){
          .container { padding: 0 20px; }
          .section-pad { padding: 60px 0; }
          .tab-bar { gap: 6px; }
          .tab-btn { padding: 8px 14px; font-size: 12px; }
          .feature-strip { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="hero-bg-prod" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* Decorative rings */}
        <div style={{ position: 'absolute', bottom: '25%', left: '10%', width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.18)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '7%', width: 360, height: 360, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.09)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white', maxWidth: 820, padding: '0 32px' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.4)' }}>
            <span className="section-label-dot" />
            Lorem Range
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(38px, 6vw, 80px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Our Lorem Ipsum<br />
            <span style={{ background: 'linear-gradient(135deg,#4ade80,#16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Product Range
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', maxWidth: 540, margin: '0 auto 44px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#products" className="btn-primary">
              Lorem Explore
              <ArrowRight size={18} />
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Dolor Enquire
            </Link>
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
            ['Lorem Containers', 'Dolor Custom', 'Ipsum Industrial', 'Amet FMCG', 'Consectetur Eco', 'Elit Packaging', 'Tempor Solutions', 'Labore Quality'].map((t, j) => (
              <span key={`${i}-${j}`} className="marquee-item">{t}</span>
            ))
          )}
        </div>
      </div>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: 'white', padding: '0 0 0 0' }}>
        <div className="container" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="feature-strip">
            {[
              { num: '200+', label: 'Lorem SKUs', sub: 'Dolor sit amet' },
              { num: '50+', label: 'Ipsum Sizes', sub: 'Consectetur range' },
              { num: '8', label: 'Amet Flute Types', sub: 'Adipiscing options' },
              { num: '5', label: 'Elit Categories', sub: 'Sed do eiusmod' },
            ].map((s, i) => (
              <div key={i} className="feature-strip-item">
                <div className="feature-strip-num">{s.num}</div>
                <div style={{ fontWeight: 700, color: '#1E3A8A', marginTop: 10, fontSize: 14, letterSpacing: '0.02em' }}>{s.label}</div>
                <div style={{ color: '#9ca3af', fontSize: 12, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATALOGUE ─── */}
      <section id="products" className="section-pad grid-bg" style={{ background: '#f8fafc' }} data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }} id="catalogue-head" data-animate>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Catalogue
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('catalogue-head') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Browse Our <em style={{ color: '#16A34A' }}>Ipsum</em> Range
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>

            {/* Tab bar */}
            <div className="tab-bar" style={{ display: 'inline-flex', margin: '0 auto' }}>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`tab-btn ${activeTab === i ? 'active' : 'inactive'}`}
                  onClick={() => setActiveTab(i)}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 28 }}>
            {activeProducts.map((prod, i) => (
              <div key={`${activeTab}-${i}`} className="prod-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="prod-card-img">
                  <img src={prod.img} alt={prod.title} />
                  <div className="prod-card-img-overlay" />
                  <span className="prod-tag">{prod.tag}</span>
                </div>
                <div className="prod-card-body">
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: '#1E3A8A', marginBottom: 4 }}>{prod.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7 }}>{prod.desc}</p>
                  <div className="prod-specs">
                    {prod.specs.map((s, j) => <span key={j} className="prod-spec">{s}</span>)}
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#16A34A', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'gap 0.3s' }}>
                      Lorem Quote <ArrowRight size={14} />
                    </Link>
                    <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dolor Spec Sheet</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BESPOKE / CUSTOM SECTION ─── */}
      <section className="section-pad diagonal-top" style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0f2010 100%)', position: 'relative', overflow: 'hidden' }} id="bespoke-sec" data-animate>
        <div className="noise-overlay" />
        <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('bespoke-sec') ? 'visible' : ''}`}>
              <div className="section-label" style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
                <span className="section-label-dot" style={{ background: '#4ade80' }} />
                Lorem Bespoke
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Fully Custom<br />
                <em style={{ color: '#4ade80' }}>Lorem Ipsum</em><br />
                Solutions
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  'Lorem ipsum custom sizes and configurations amet',
                  'Dolor sit amet full-colour flexographic printing ipsum',
                  'Consectetur adipiscing branded design consultation elit',
                  'Sed eiusmod rapid prototyping and sample service',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '13px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#16A34A,#4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 44 }}>
                <Link href="/#contact" className="btn-primary">
                  Lorem Custom Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('bespoke-sec') ? 'visible' : ''}`} style={{ position: 'relative' }}>
              <div className="img-card" style={{ height: 520, boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Custom packaging"
                />
              </div>
              {/* Circular badge */}
              <div style={{ position: 'absolute', top: 24, right: -16, width: 88, height: 88, borderRadius: '50%', background: 'linear-gradient(135deg,#1E3A8A,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(30,58,138,0.4)', flexDirection: 'column', zIndex: 10 }}>
                <Boxes size={22} color="white" />
                <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 4, letterSpacing: '0.05em' }}>CUSTOM</span>
              </div>
              <div className="float-tag">
                <div className="float-tag-icon"><Package size={18} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>Lorem Made</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Dolor to order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ORDER PROCESS ─── */}
      <section className="section-pad" style={{ background: 'white' }} id="process-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Processus
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('process-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How It <em style={{ color: '#16A34A' }}>Works</em>
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {[
              { n: '01', icon: <Package size={22} />, title: 'Lorem Enquiry', desc: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
              { n: '02', icon: <Zap size={22} />, title: 'Ipsum Consultation', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
              { n: '03', icon: <CheckCircle size={22} />, title: 'Amet Sampling', desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.' },
              { n: '04', icon: <Factory size={22} />, title: 'Dolor Production', desc: 'Excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit.' },
            ].map((step, i) => (
              <div key={i} className={`process-step reveal reveal-delay-${i + 1} ${visibleSections.has('process-sec') ? 'visible' : ''}`}>
                <div className="process-num">{step.n}</div>
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,rgba(30,58,138,0.08),rgba(22,163,74,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E3A8A', marginBottom: 14 }}>
                    {step.icon}
                  </div>
                  <h4 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: '#1E3A8A', marginBottom: 8 }}>{step.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-pad grid-bg" style={{ background: '#f8fafc' }} id="testi-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Testimonia
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('testi-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What Our <em style={{ color: '#16A34A' }}>Clients</em> Say
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 460, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {[
              { name: 'Lorem Ipsum', role: 'Dolor Sit, Amet Co.', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' },
              { name: 'Consectetur Elit', role: 'Adipiscing Ltd.', text: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.' },
              { name: 'Sed Eiusmod', role: 'Tempor Inc.', text: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.' },
            ].map((t, i) => (
              <div key={i} className={`testi-card reveal reveal-delay-${i + 1} ${visibleSections.has('testi-sec') ? 'visible' : ''}`}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#16A34A" color="#16A34A" />)}
                </div>
                <p style={{ color: '#4b5563', fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#1E3A8A,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 16 }}>
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
      <section className="section-pad cta-section" id="cta-sec" data-animate>
        <div className="noise-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
            <span className="section-label-dot" style={{ background: '#4ade80' }} />
            Lorem Contactus
          </div>
          <h2 className={`font-display reveal ${visibleSections.has('cta-sec') ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(30px,5vw,64px)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 720, margin: '0 auto 24px' }}>
            Ready to Lorem<br />
            <em style={{ background: 'linear-gradient(135deg,#4ade80,#16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Ipsum Your Order?
            </em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 48px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">
              Lorem Get a Quote
              <ArrowRight size={18} />
            </Link>
            <Link href="/manufacturing" className="btn-ghost">
              Dolor Manufacturing
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 72, flexWrap: 'wrap' }}>
            {['ISO Certified', 'Lorem Award', 'Ipsum Badge', 'Dolor Green'].map((badge, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield size={22} color="rgba(255,255,255,0.6)" />
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}