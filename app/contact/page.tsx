'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Award, CheckCircle, Star, FileCheck, Globe, Leaf, ChevronRight, BadgeCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Certifications() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState(0);

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

  const filters = ['All Lorem', 'Ipsum Quality', 'Dolor Environment', 'Amet Safety', 'Elit Industry'];

  const certifications = [
    { cat: 1, icon: <Shield size={28} />, name: 'ISO 9001:2015', org: 'Lorem Ipsum Org', year: '2003', renewal: '2025', color: '#1E3A8A', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { cat: 2, icon: <Leaf size={28} />, name: 'ISO 14001:2015', org: 'Dolor Sit Amet', year: '2008', renewal: '2025', color: '#16A34A', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.' },
    { cat: 4, icon: <Award size={28} />, name: 'FSC COC', org: 'Ipsum Consectetur', year: '2010', renewal: '2026', color: '#16A34A', desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.' },
    { cat: 3, icon: <BadgeCheck size={28} />, name: 'OHSAS 18001', org: 'Amet Adipiscing', year: '2012', renewal: '2026', color: '#374151', desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { cat: 1, icon: <FileCheck size={28} />, name: 'ISO 45001', org: 'Lorem Elit Sed', year: '2019', renewal: '2025', color: '#1E3A8A', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna.' },
    { cat: 2, icon: <Globe size={28} />, name: 'EMAS Verified', org: 'Dolor Eiusmod', year: '2015', renewal: '2026', color: '#16A34A', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris aliquip commodo consequat aute irure dolor.' },
    { cat: 4, icon: <Star size={28} />, name: 'PEFC Certified', org: 'Ipsum Tempor', year: '2011', renewal: '2025', color: '#16A34A', desc: 'Duis aute irure dolor reprehenderit in voluptate esse cillum dolore fugiat nulla pariatur occaecat cupidatat.' },
    { cat: 3, icon: <Shield size={28} />, name: 'BRCGS Standard', org: 'Amet Incididunt', year: '2014', renewal: '2026', color: '#374151', desc: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim veniam.' },
    { cat: 1, icon: <CheckCircle size={28} />, name: 'Lorem Standard', org: 'Dolor Labore', year: '2017', renewal: '2026', color: '#1E3A8A', desc: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor reprehenderit.' },
  ];

  const filtered = activeFilter === 0 ? certifications : certifications.filter(c => c.cat === activeFilter);

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
        .hero-bg-cert {
          background-image: url('https://images.pexels.com/photos/5691598/pexels-photo-5691598.jpeg?auto=compress&cs=tinysrgb&w=1920');
          background-size: cover; background-position: center;
        }
        .hero-overlay-cert {
          background: linear-gradient(135deg, rgba(10,20,60,0.94) 0%, rgba(20,40,25,0.78) 100%);
        }

        /* ── Marquee ── */
        .marquee-track { display: flex; gap: 60px; animation: marquee 30s linear infinite; white-space: nowrap; }
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

        /* ── Filter tabs ── */
        .filter-bar {
          display: flex; gap: 8px; flex-wrap: wrap;
          background: rgba(30,58,138,0.04); border-radius: 16px; padding: 8px;
          border: 1px solid rgba(30,58,138,0.08);
        }
        .filter-btn {
          padding: 10px 22px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 13px;
          cursor: pointer; border: none; transition: all 0.3s;
          white-space: nowrap; letter-spacing: 0.02em;
        }
        .filter-btn.active {
          background: linear-gradient(135deg,#1E3A8A,#1e40af);
          color: white; box-shadow: 0 6px 20px rgba(30,58,138,0.3);
        }
        .filter-btn.inactive { background: transparent; color: #6b7280; }
        .filter-btn.inactive:hover { background: white; color: #1E3A8A; box-shadow: 0 2px 12px rgba(30,58,138,0.1); }

        /* ── Cert card ── */
        .cert-card {
          background: white; border-radius: 22px; padding: 32px 28px;
          border: 1px solid rgba(30,58,138,0.07);
          box-shadow: 0 4px 24px rgba(30,58,138,0.06);
          position: relative; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          display: flex; flex-direction: column; gap: 16px;
        }
        .cert-card::after {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg,#1E3A8A,#16A34A);
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
        }
        .cert-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(30,58,138,0.16); }
        .cert-card:hover::after { transform: scaleX(1); }

        .cert-icon-wrap {
          width: 64px; height: 64px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.4s;
        }
        .cert-card:hover .cert-icon-wrap {
          background: linear-gradient(135deg,#1E3A8A,#16A34A) !important;
          box-shadow: 0 10px 28px rgba(30,58,138,0.3);
        }
        .cert-card:hover .cert-icon-wrap svg { color: white !important; }

        .cert-badge {
          position: absolute; top: 20px; right: 20px;
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg,#16A34A,#4ade80);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 12px rgba(22,163,74,0.4);
          opacity: 0; transform: scale(0.7);
          transition: all 0.3s;
        }
        .cert-card:hover .cert-badge { opacity: 1; transform: scale(1); }

        .cert-meta {
          display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px;
        }
        .cert-chip {
          padding: 3px 10px; border-radius: 50px; font-size: 11px; font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* ── Featured cert ── */
        .featured-cert {
          border-radius: 28px; overflow: hidden; position: relative;
          background: linear-gradient(135deg,#0a1628 0%,#0f2010 100%);
          padding: 52px 48px;
          box-shadow: 0 40px 80px rgba(10,20,60,0.3);
        }
        .featured-cert::before {
          content: ''; position: absolute; top: -30%; right: -10%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Process step ── */
        .audit-step {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 26px; border-radius: 18px; background: white;
          border: 1px solid rgba(30,58,138,0.07);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          position: relative; overflow: hidden;
        }
        .audit-step::after {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg,#1E3A8A,#16A34A);
          transform: scaleY(0); transform-origin: top; transition: transform 0.4s;
        }
        .audit-step:hover { transform: translateX(6px); box-shadow: 0 20px 48px rgba(30,58,138,0.1); }
        .audit-step:hover::after { transform: scaleY(1); }
        .audit-num {
          font-family: 'Playfair Display', serif; font-weight: 900; font-size: 40px;
          line-height: 1; color: rgba(30,58,138,0.08); flex-shrink: 0; min-width: 44px;
          transition: color 0.3s;
        }
        .audit-step:hover .audit-num { color: rgba(22,163,74,0.18); }

        /* ── Partner logos ── */
        .partner-row {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 16px; align-items: center;
        }
        .partner-chip {
          padding: 14px 28px; border-radius: 14px;
          border: 1px solid rgba(30,58,138,0.1); background: white;
          font-family: 'Playfair Display', serif; font-weight: 700;
          font-size: 15px; color: #1E3A8A; letter-spacing: 0.02em;
          box-shadow: 0 2px 12px rgba(30,58,138,0.06);
          transition: all 0.3s;
        }
        .partner-chip:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(30,58,138,0.14); border-color: rgba(22,163,74,0.3); color: #16A34A; }

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

        /* ── Img card ── */
        .img-card { border-radius: 24px; overflow: hidden; position: relative; }
        .img-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── CTA ── */
        .cta-dark {
          background: linear-gradient(135deg,#0a1628 0%,#050f05 100%);
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
          background: radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Diagonal ── */
        .diagonal-top { clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%); margin-top: -3vw; padding-top: calc(3vw + 80px); }

        @media(max-width:768px){
          .container { padding: 0 20px; }
          .section-pad { padding: 60px 0; }
          .stat-strip { grid-template-columns: 1fr 1fr; }
          .featured-cert { padding: 36px 28px; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="hero-bg-cert" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div className="hero-overlay-cert" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* Geometric rings */}
        <div style={{ position: 'absolute', top: '18%', left: '10%', width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(30,58,138,0.25)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '13%', left: '7%', width: 390, height: 390, borderRadius: '50%', border: '1px solid rgba(30,58,138,0.12)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '18%', right: '9%', width: 250, height: 250, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.2)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white', maxWidth: 840, padding: '0 32px' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(30,58,138,0.2)', border: '1px solid rgba(30,58,138,0.5)', color: '#93c5fd' }}>
            <Shield size={12} style={{ color: '#93c5fd' }} />
            Lorem Certifications
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(38px,6.5vw,84px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 26, letterSpacing: '-0.025em' }}>
            Lorem Ipsum<br />
            <span style={{ background: 'linear-gradient(135deg,#93c5fd,#1E3A8A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dolor Standards
            </span><br />
            & Amet Awards
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.68)', maxWidth: 560, margin: '0 auto 44px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#all-certs" className="btn-primary">
              Lorem View All
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
            ['ISO 9001', 'FSC Certified', 'Lorem Award', 'ISO 14001', 'Dolor EMAS', 'Ipsum PEFC', 'Amet BRCGS', 'Consectetur ISO 45001'].map((t, j) => (
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
              { num: '9+', label: 'Lorem Certifications', sub: 'Dolor active' },
              { num: '20+', label: 'Ipsum Years', sub: 'Amet certified' },
              { num: '3', label: 'Dolor Bodies', sub: 'Lorem accredited' },
              { num: '100%', label: 'Amet Compliant', sub: 'Ipsum standards' },
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

      {/* ─── FEATURED CERT ─── */}
      <section className="section-pad grid-bg" style={{ background: '#f8fafc' }} id="featured-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Featured
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('featured-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Our Flagship <em style={{ color: '#16A34A' }}>Ipsum</em> Credentials
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 24 }}>
            {/* Big featured card */}
            <div className={`featured-cert reveal ${visibleSections.has('featured-sec') ? 'visible' : ''}`} style={{ gridColumn: 'span 1' }}>
              <div className="noise-overlay" />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                  <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80' }}>
                    <Shield size={32} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#4ade80', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Lorem Flagship</div>
                    <div className="font-display" style={{ fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1 }}>ISO 9001:2015</div>
                  </div>
                </div>
                <div className="accent-line" style={{ background: 'linear-gradient(90deg,#4ade80,#16A34A)' }} />
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
                  {[
                    { label: 'Lorem Since', val: '2003' },
                    { label: 'Ipsum Renewal', val: '2025' },
                    { label: 'Dolor Body', val: 'Lorem Org' },
                    { label: 'Amet Scope', val: 'Global' },
                  ].map((m, i) => (
                    <div key={i} style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>{m.label}</div>
                      <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{m.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 50, background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80', fontSize: 13, fontWeight: 700 }}>
                  <CheckCircle size={14} /> Lorem Ipsum Active
                </div>
              </div>
            </div>

            {/* Two smaller featured cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: <Leaf size={24} />, name: 'FSC COC Certified', org: 'Lorem Ipsum Body', since: '2010', color: '#16A34A', bg: 'linear-gradient(135deg,#0f2010,#0a1628)', accent: '#4ade80', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
                { icon: <Globe size={24} />, name: 'ISO 14001:2015', org: 'Dolor Sit Amet', since: '2008', color: '#60a5fa', bg: 'linear-gradient(135deg,#0a1628,#0f1f4a)', accent: '#93c5fd', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.' },
              ].map((card, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 2} ${visibleSections.has('featured-sec') ? 'visible' : ''}`}
                  style={{ borderRadius: 22, padding: '32px 28px', background: card.bg, position: 'relative', overflow: 'hidden', border: `1px solid rgba(255,255,255,0.07)`, flex: 1 }}>
                  <div className="noise-overlay" />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                      <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: card.accent }}>
                        {card.icon}
                      </div>
                      <div style={{ padding: '4px 12px', borderRadius: 50, background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.25)', fontSize: 11, fontWeight: 700, color: '#4ade80', letterSpacing: '0.06em' }}>
                        ACTIVE
                      </div>
                    </div>
                    <div className="font-display" style={{ fontSize: 20, fontWeight: 800, color: 'white', marginBottom: 6 }}>{card.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 600, marginBottom: 14 }}>{card.org} · Since {card.since}</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL CERTIFICATIONS ─── */}
      <section id="all-certs" className="section-pad diagonal-top" style={{ background: 'white' }} data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }} id="cert-grid-head" data-animate>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem All Certifications
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('cert-grid-head') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Complete Ipsum <em style={{ color: '#16A34A' }}>Dolor</em> Register
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>

            {/* Filter bar */}
            <div className="filter-bar" style={{ display: 'inline-flex', margin: '0 auto' }}>
              {filters.map((f, i) => (
                <button key={i} className={`filter-btn ${activeFilter === i ? 'active' : 'inactive'}`} onClick={() => setActiveFilter(i)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
            {filtered.map((cert, i) => (
              <div key={`${activeFilter}-${i}`} className="cert-card">
                <div className="cert-badge">
                  <CheckCircle size={16} color="white" />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div className="cert-icon-wrap" style={{ background: `${cert.color}12`, color: cert.color }}>
                    {cert.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: '#1E3A8A', marginBottom: 2 }}>{cert.name}</h3>
                    <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>{cert.org}</div>
                  </div>
                </div>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.75 }}>{cert.desc}</p>
                <div className="cert-meta">
                  <span className="cert-chip" style={{ background: 'rgba(22,163,74,0.08)', color: '#16A34A', border: '1px solid rgba(22,163,74,0.15)' }}>
                    Since {cert.year}
                  </span>
                  <span className="cert-chip" style={{ background: 'rgba(30,58,138,0.06)', color: '#1E3A8A', border: '1px solid rgba(30,58,138,0.12)' }}>
                    Renewal {cert.renewal}
                  </span>
                  <span className="cert-chip" style={{ background: 'rgba(22,163,74,0.06)', color: '#16A34A', border: '1px solid rgba(22,163,74,0.12)' }}>
                    ● Active
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: cert.color, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: 4 }}>
                  Lorem Details <ChevronRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AUDIT PROCESS ─── */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg,#0a1628 0%,#050f05 100%)', position: 'relative', overflow: 'hidden' }} id="audit-sec" data-animate>
        <div className="noise-overlay" />
        <div style={{ position: 'absolute', top: '-25%', right: '-8%', width: 650, height: 650, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,58,138,0.14) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-25%', left: '-8%', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle,rgba(22,163,74,0.1) 0%,transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('audit-sec') ? 'visible' : ''}`}>
              <div className="section-label" style={{ background: 'rgba(30,58,138,0.2)', border: '1px solid rgba(30,58,138,0.4)', color: '#93c5fd' }}>
                <span className="section-label-dot" style={{ background: '#93c5fd' }} />
                Lorem Audit
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Our Ipsum<br />
                <em style={{ color: '#93c5fd' }}>Audit Process</em>
              </h2>
              <div className="accent-line" style={{ background: 'linear-gradient(90deg,#93c5fd,#1E3A8A)' }} />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', marginBottom: 48 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
              </p>

              {/* Image */}
              <div className="img-card" style={{ height: 300, boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}>
                <img src="https://images.pexels.com/photos/1267362/pexels-photo-1267362.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Audit process" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(10,20,60,0.6) 100%)' }} />
                <div style={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#1E3A8A,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 10px 32px rgba(30,58,138,0.5)', zIndex: 5 }}>
                  <Award size={22} color="white" />
                  <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 3, letterSpacing: '0.04em' }}>LOREM</span>
                </div>
              </div>
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('audit-sec') ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'Lorem Application', desc: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { title: 'Ipsum Gap Analysis', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { title: 'Amet Documentation', desc: 'Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.' },
                { title: 'Dolor Stage Audit', desc: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua quis nostrud.' },
                { title: 'Elit Certification', desc: 'Excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim id est laborum.' },
              ].map((s, i) => (
                <div key={i} className="audit-step">
                  <div className="audit-num">0{i + 1}</div>
                  <div>
                    <h4 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: '#1E3A8A', marginBottom: 6 }}>{s.title}</h4>
                    <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCREDITING BODIES ─── */}
      <section className="section-pad" style={{ background: '#f8fafc' }} id="bodies-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Bodies
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('bodies-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Accrediting <em style={{ color: '#16A34A' }}>Ipsum</em> Organisations
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto 52px', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>

            <div className="partner-row">
              {['Lorem Ipsum Org', 'Dolor Sit Amet', 'Consectetur Ltd', 'Adipiscing Body', 'Elit Standard', 'Sed Eiusmod Int'].map((name, i) => (
                <div key={i} className={`partner-chip reveal reveal-delay-${(i % 4) + 1} ${visibleSections.has('bodies-sec') ? 'visible' : ''}`}>
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Two-col trust section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'center', marginTop: 80 }}>
            <div className={`reveal ${visibleSections.has('bodies-sec') ? 'visible' : ''}`} style={{ position: 'relative' }}>
              <div className="img-card" style={{ height: 480, boxShadow: '0 40px 80px rgba(30,58,138,0.14)' }}>
                <img src="https://images.pexels.com/photos/6169654/pexels-photo-6169654.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Quality standards" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(10,20,60,0.45) 100%)' }} />
              </div>
              <div className="float-tag">
                <div className="float-tag-icon"><BadgeCheck size={18} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>Lorem Verified</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Ipsum internationally</div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: 20, background: 'linear-gradient(135deg,rgba(30,58,138,0.1),rgba(22,163,74,0.08))', zIndex: -1, border: '1px solid rgba(30,58,138,0.1)' }} />
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('bodies-sec') ? 'visible' : ''}`}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Assurance
              </div>
              <h3 className="font-display" style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Why Lorem Ipsum<br />
                <em style={{ color: '#16A34A' }}>Dolor Certifications</em><br />
                Matter
              </h3>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 36 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt mollit.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  'Lorem ipsum verified quality management systems',
                  'Dolor sit amet environmental compliance amet',
                  'Consectetur adipiscing internationally recognised standards',
                  'Sed eiusmod continuous improvement frameworks',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '13px 0', borderBottom: i < 3 ? '1px solid rgba(30,58,138,0.07)' : 'none' }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#1E3A8A,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad cta-dark" id="cert-cta" data-animate>
        <div className="noise-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(30,58,138,0.2)', border: '1px solid rgba(30,58,138,0.4)', color: '#93c5fd' }}>
            <Shield size={12} style={{ color: '#93c5fd' }} />
            Lorem Compliance
          </div>
          <h2 className={`font-display reveal ${visibleSections.has('cert-cta') ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(30px,5vw,66px)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: 720, margin: '0 auto 24px' }}>
            Lorem Ipsum<br />
            <em style={{ background: 'linear-gradient(135deg,#93c5fd,#1E3A8A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dolor Certified
            </em><br />
            Amet Partner
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 52px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud exercitation.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">
              Lorem Get In Touch
              <ArrowRight size={18} />
            </Link>
            <Link href="/sustainability" className="btn-ghost">
              Dolor Sustainability
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 72, flexWrap: 'wrap' }}>
            {[
              { icon: <Shield size={20} />, label: 'ISO Certified' },
              { icon: <Award size={20} />, label: 'FSC Approved' },
              { icon: <FileCheck size={20} />, label: 'Lorem Audited' },
              { icon: <BadgeCheck size={20} />, label: 'Ipsum Verified' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(30,58,138,0.15)', border: '1px solid rgba(30,58,138,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#93c5fd' }}>
                  {b.icon}
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}