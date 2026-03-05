'use client';

import Link from 'next/link';
import { ArrowRight, Leaf, Recycle, Zap, Droplets, TreePine, Shield, Wind, Sun, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Sustainability() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeGoal, setActiveGoal] = useState(0);

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

  const goals = [
    {
      icon: <Recycle size={22} />,
      title: 'Lorem Zero Waste',
      year: '2030',
      desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
      progress: 68,
      metric: '68% Lorem achieved',
    },
    {
      icon: <Zap size={22} />,
      title: 'Ipsum Net Zero',
      year: '2035',
      desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore.',
      progress: 45,
      metric: '45% Dolor reduced',
    },
    {
      icon: <Droplets size={22} />,
      title: 'Amet Water Neutral',
      year: '2032',
      desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt.',
      progress: 57,
      metric: '57% Ipsum saved',
    },
    {
      icon: <TreePine size={22} />,
      title: 'Dolor Reforestation',
      year: '2028',
      desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
      progress: 82,
      metric: '82K Lorem planted',
    },
  ];

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
            linear-gradient(rgba(22,163,74,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.04) 1px, transparent 1px);
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
        .hero-bg-sus {
          background-image: url('https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1920');
          background-size: cover; background-position: center;
        }
        .hero-overlay-sus {
          background: linear-gradient(135deg, rgba(5,25,10,0.94) 0%, rgba(10,20,60,0.75) 100%);
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
          border: 1px solid rgba(22,163,74,0.12); border-radius: 24px; overflow: hidden;
        }
        .stat-strip-item {
          padding: 36px 24px; text-align: center;
          border-right: 1px solid rgba(22,163,74,0.12);
          transition: background 0.3s;
        }
        .stat-strip-item:last-child { border-right: none; }
        .stat-strip-item:hover { background: rgba(22,163,74,0.04); }
        .stat-num {
          font-family: 'Playfair Display', serif; font-weight: 800; font-size: 46px;
          background: linear-gradient(135deg,#16A34A,#1E3A8A);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1;
        }

        /* ── Pillar cards ── */
        .pillar-card {
          border-radius: 22px; padding: 36px 28px; position: relative; overflow: hidden;
          border: 1px solid rgba(22,163,74,0.1);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          background: white;
        }
        .pillar-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #0a1628, #0f2010);
          opacity: 0; transition: opacity 0.4s; z-index: 0;
        }
        .pillar-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(22,163,74,0.18); }
        .pillar-card:hover::before { opacity: 1; }
        .pillar-card .pc-content { position: relative; z-index: 1; }
        .pillar-card:hover .pc-title { color: white !important; }
        .pillar-card:hover .pc-desc { color: rgba(255,255,255,0.65) !important; }
        .pillar-card:hover .pc-icon-wrap { background: rgba(255,255,255,0.12) !important; }
        .pillar-card:hover .pc-link { color: #4ade80 !important; }
        .pillar-card:hover .pc-num { color: rgba(255,255,255,0.06) !important; }

        /* ── Progress bar ── */
        .prog-track { height: 10px; background: rgba(22,163,74,0.12); border-radius: 5px; overflow: hidden; margin: 12px 0 6px; }
        .prog-fill {
          height: 100%; border-radius: 5px;
          background: linear-gradient(90deg, #16A34A, #4ade80);
          box-shadow: 0 2px 8px rgba(22,163,74,0.4);
          transition: width 1s cubic-bezier(0.16,1,0.3,1);
        }

        /* ── Goals accordion ── */
        .goal-tab {
          border-radius: 16px; border: 1px solid rgba(22,163,74,0.12);
          overflow: hidden; transition: all 0.3s; cursor: pointer;
          background: white;
        }
        .goal-tab:hover { border-color: rgba(22,163,74,0.3); }
        .goal-tab.active-goal { border-color: #16A34A; box-shadow: 0 8px 32px rgba(22,163,74,0.15); }
        .goal-tab-header {
          display: flex; align-items: center; gap: 16px; padding: 20px 24px;
          transition: background 0.3s;
        }
        .goal-tab.active-goal .goal-tab-header { background: linear-gradient(135deg, rgba(22,163,74,0.06), rgba(30,58,138,0.04)); }
        .goal-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }
        .goal-tab.active-goal .goal-icon-wrap { background: linear-gradient(135deg,#16A34A,#4ade80) !important; color: white !important; }
        .goal-body { padding: 0 24px 24px; }

        /* ── Timeline ── */
        .timeline-item {
          display: flex; gap: 24px; padding: 28px 0;
          border-bottom: 1px solid rgba(22,163,74,0.08);
          transition: padding-left 0.3s;
        }
        .timeline-item:last-child { border-bottom: none; }
        .timeline-item:hover { padding-left: 8px; }
        .timeline-dot {
          width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0;
          background: linear-gradient(135deg, #16A34A, #4ade80);
          display: flex; align-items: center; justify-content: center;
          color: white; box-shadow: 0 8px 24px rgba(22,163,74,0.35);
          font-family: 'Playfair Display', serif; font-weight: 800; font-size: 15px;
        }

        /* ── Certification cards ── */
        .cert-card {
          background: white; border-radius: 20px; padding: 28px 24px;
          border: 1px solid rgba(22,163,74,0.1);
          box-shadow: 0 4px 20px rgba(22,163,74,0.06);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .cert-card:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(22,163,74,0.14); }
        .cert-icon {
          width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 18px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(22,163,74,0.1), rgba(30,58,138,0.08));
          border: 2px solid rgba(22,163,74,0.15);
          transition: all 0.3s;
        }
        .cert-card:hover .cert-icon {
          background: linear-gradient(135deg,#16A34A,#15803d);
          border-color: #16A34A;
          box-shadow: 0 8px 28px rgba(22,163,74,0.4);
        }
        .cert-card:hover .cert-icon svg { color: white !important; }

        /* ── Image card ── */
        .img-card { border-radius: 24px; overflow: hidden; }
        .img-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .img-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(5,25,10,0.55) 100%);
          pointer-events: none;
        }

        /* ── Float tag ── */
        .float-tag {
          position: absolute; bottom: 24px; left: 24px; z-index: 10;
          background: white; border-radius: 14px; padding: 14px 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          display: flex; align-items: center; gap: 12px;
        }
        .float-tag-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: linear-gradient(135deg,#16A34A,#4ade80);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }

        /* ── CTA ── */
        .cta-dark {
          background: linear-gradient(135deg,#050f05 0%,#0a1628 100%);
          position: relative; overflow: hidden;
        }
        .cta-dark::before {
          content: ''; position: absolute; top:-40%; left:-15%;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-dark::after {
          content: ''; position: absolute; bottom:-40%; right:-15%;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Diagonal ── */
        .diagonal-top { clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%); margin-top: -3vw; padding-top: calc(3vw + 80px); }
        .diagonal-bottom { clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%); padding-bottom: calc(3vw + 80px); }

        @media(max-width:768px){
          .container { padding: 0 20px; }
          .section-pad { padding: 60px 0; }
          .stat-strip { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="hero-bg-sus" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div className="hero-overlay-sus" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* Floating organic rings */}
        <div style={{ position: 'absolute', top: '15%', right: '12%', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.2)', zIndex: 2, pointerEvents: 'none', animation: 'floatRing 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '10%', right: '8%', width: 420, height: 420, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.1)', zIndex: 2, pointerEvents: 'none', animation: 'floatRing 10s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: 260, height: 260, borderRadius: '50%', border: '1px solid rgba(30,58,138,0.2)', zIndex: 2, pointerEvents: 'none', animation: 'floatRing 9s ease-in-out infinite' }} />

        <style>{`
          @keyframes floatRing { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-16px) scale(1.03)} }
        `}</style>

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white', maxWidth: 860, padding: '0 32px' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.4)' }}>
            <Leaf size={12} style={{ color: '#4ade80' }} />
            Lorem Sustainability
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px, 7vw, 90px)', fontWeight: 900, lineHeight: 1.02, marginBottom: 28, letterSpacing: '-0.025em' }}>
            Lorem Ipsum<br />
            <span style={{ background: 'linear-gradient(135deg,#4ade80,#16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dolor Viridis
            </span><br />
            Commitment
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,19px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 48px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#commitments" className="btn-primary">
              Lorem Our Goals
              <ArrowRight size={18} />
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Dolor Report
            </Link>
          </div>

          {/* Scroll badge */}
          <div style={{ marginTop: 64, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px 8px 8px', borderRadius: 50, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#16A34A,#4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Leaf size={14} color="white" />
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Lorem Ipsum Certified</span>
          </div>
        </div>

        {/* Wave cutout */}
        <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, zIndex: 4 }}>
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M0 70 L0 35 Q360 0 720 35 Q1080 70 1440 35 L1440 70 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div style={{ background: '#050f05', padding: '18px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            ['100% Recyclable', 'Lorem FSC Certified', 'Dolor Net Zero', 'Ipsum Renewable', 'Amet Compostable', 'Consectetur Carbon', 'Elit Water Neutral', 'Sed Eiusmod Green'].map((t, j) => (
              <span key={`${i}-${j}`} className="marquee-item">{t}</span>
            ))
          )}
        </div>
      </div>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: 'white', padding: '60px 0' }}>
        <div className="container">
          <div className="stat-strip">
            {[
              { num: '100%', label: 'Lorem Recyclable', sub: 'Dolor materials' },
              { num: '40%', label: 'Ipsum Energy', sub: 'Amet renewable' },
              { num: '82K', label: 'Dolor Trees', sub: 'Lorem planted' },
              { num: '60%', label: 'Amet Water', sub: 'Ipsum reduced' },
              { num: '0', label: 'Elit Landfill', sub: 'Consectetur waste' },
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

      {/* ─── OUR APPROACH ─── */}
      <section className="section-pad grid-bg" style={{ background: '#f0fdf4' }} id="approach-sec" data-animate>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('approach-sec') ? 'visible' : ''}`}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Approach
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Ipsum Dolor Sit<br />
                <em style={{ color: '#16A34A' }}>Amet Approach</em>
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 40 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt mollit anim.
              </p>

              {/* Mini metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { val: '30+', label: 'Lorem Anni', color: '#16A34A' },
                  { val: 'FSC', label: 'Ipsum Certified', color: '#1E3A8A' },
                  { val: 'B2B', label: 'Dolor Partners', color: '#16A34A' },
                  { val: 'ISO', label: 'Amet Standard', color: '#1E3A8A' },
                ].map((m, i) => (
                  <div key={i} style={{ padding: '18px 20px', borderRadius: 14, background: 'white', border: '1px solid rgba(22,163,74,0.1)', boxShadow: '0 2px 12px rgba(22,163,74,0.06)' }}>
                    <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: m.color }}>{m.val}</div>
                    <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4, fontWeight: 500 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('approach-sec') ? 'visible' : ''}`} style={{ position: 'relative' }}>
              <div className="img-card" style={{ height: 540, boxShadow: '0 40px 80px rgba(22,163,74,0.18)', position: 'relative' }}>
                <img
                  src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sustainability approach"
                />
                <div className="img-card-overlay" />
              </div>
              {/* Eco badge */}
              <div style={{ position: 'absolute', top: 24, right: -16, width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg,#16A34A,#4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(22,163,74,0.45)', flexDirection: 'column', zIndex: 10 }}>
                <Leaf size={24} color="white" />
                <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 4, letterSpacing: '0.05em' }}>ECO</span>
              </div>
              <div className="float-tag">
                <div className="float-tag-icon"><Recycle size={18} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>Lorem Circular</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Dolor economy</div>
                </div>
              </div>
              {/* Accent box */}
              <div style={{ position: 'absolute', top: -24, left: -24, width: 130, height: 130, borderRadius: 20, background: 'linear-gradient(135deg,rgba(22,163,74,0.12),rgba(30,58,138,0.06))', zIndex: -1, border: '1px solid rgba(22,163,74,0.15)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PILLARS ─── */}
      <section className="section-pad diagonal-top diagonal-bottom" style={{ background: 'linear-gradient(160deg,#050f05 0%,#0a1628 100%)', position: 'relative', overflow: 'hidden' }} id="pillars-sec" data-animate>
        <div className="noise-overlay" />
        <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
              <span className="section-label-dot" style={{ background: '#4ade80' }} />
              Lorem Pillars
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('pillars-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Our <em style={{ color: '#4ade80' }}>Ipsum Dolor</em> Pillars
            </h2>
            <p className={`reveal reveal-delay-1 ${visibleSections.has('pillars-sec') ? 'visible' : ''}`}
              style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {[
              { icon: <Recycle size={26} />, accentCol: '#4ade80', title: 'Lorem Circular', desc: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', bg: 'rgba(22,163,74,0.08)', num: '01' },
              { icon: <Zap size={26} />, accentCol: '#60a5fa', title: 'Ipsum Clean Energy', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', bg: 'rgba(30,58,138,0.08)', num: '02' },
              { icon: <Droplets size={26} />, accentCol: '#67e8f9', title: 'Amet Water Care', desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.', bg: 'rgba(6,182,212,0.08)', num: '03' },
              { icon: <TreePine size={26} />, accentCol: '#4ade80', title: 'Dolor Reforest', desc: 'Excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim id est laborum lorem.', bg: 'rgba(22,163,74,0.08)', num: '04' },
              { icon: <Wind size={26} />, accentCol: '#a78bfa', title: 'Elit Carbon', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna.', bg: 'rgba(139,92,246,0.08)', num: '05' },
              { icon: <Sun size={26} />, accentCol: '#fbbf24', title: 'Consectetur Solar', desc: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor lorem.', bg: 'rgba(251,191,36,0.08)', num: '06' },
            ].map((p, i) => (
              <div key={i} className={`pillar-card reveal reveal-delay-${(i % 4) + 1} ${visibleSections.has('pillars-sec') ? 'visible' : ''}`}>
                <div className="pc-content">
                  <div className="pc-num" style={{ position: 'absolute', top: 20, right: 24, fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 56, color: 'rgba(22,163,74,0.07)', lineHeight: 1, transition: 'color 0.3s', zIndex: 0, pointerEvents: 'none' }}>{p.num}</div>
                  <div className="pc-icon-wrap" style={{ width: 58, height: 58, borderRadius: 14, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, color: p.accentCol, transition: 'background 0.4s', position: 'relative', zIndex: 1 }}>
                    {p.icon}
                  </div>
                  <h3 className="pc-title font-display" style={{ fontSize: 18, fontWeight: 700, color: '#1E3A8A', marginBottom: 12, transition: 'color 0.4s', position: 'relative', zIndex: 1 }}>{p.title}</h3>
                  <p className="pc-desc" style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.75, transition: 'color 0.4s', position: 'relative', zIndex: 1 }}>{p.desc}</p>
                  <div className="pc-link" style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: '#16A34A', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'color 0.4s', position: 'relative', zIndex: 1 }}>
                    Lorem More <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2030 COMMITMENTS ─── */}
      <section id="commitments" className="section-pad" style={{ background: 'white' }} data-animate>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'start' }}>
            <div className={`reveal ${visibleSections.has('commitments') ? 'visible' : ''}`}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Goals
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Ipsum Dolor<br />
                <em style={{ color: '#16A34A' }}>Commitments</em>
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 40 }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.
              </p>
              {/* Large image */}
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 320, boxShadow: '0 24px 60px rgba(22,163,74,0.15)' }}>
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Commitments"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(5,25,10,0.6) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20, color: 'white' }}>
                  <div className="font-display" style={{ fontSize: 26, fontWeight: 800 }}>2030</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Lorem Target Year</div>
                </div>
              </div>
            </div>

            {/* Goals accordion */}
            <div className={`reveal reveal-delay-2 ${visibleSections.has('commitments') ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {goals.map((g, i) => (
                <div key={i} className={`goal-tab ${activeGoal === i ? 'active-goal' : ''}`} onClick={() => setActiveGoal(i)}>
                  <div className="goal-tab-header">
                    <div className="goal-icon-wrap" style={{ background: activeGoal === i ? '' : 'rgba(22,163,74,0.08)', color: activeGoal === i ? 'white' : '#16A34A' }}>
                      {g.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 15 }}>{g.title}</div>
                      <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>Target: <strong style={{ color: '#16A34A' }}>{g.year}</strong></div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: activeGoal === i ? '#16A34A' : '#9ca3af' }}>{g.progress}%</div>
                    <ChevronRight size={16} color={activeGoal === i ? '#16A34A' : '#9ca3af'} style={{ transform: activeGoal === i ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
                  </div>
                  {activeGoal === i && (
                    <div className="goal-body">
                      <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, marginBottom: 14 }}>{g.desc}</p>
                      <div className="prog-track">
                        <div className="prog-fill" style={{ width: `${g.progress}%` }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#9ca3af', fontWeight: 600 }}>
                        <span style={{ color: '#16A34A' }}>{g.metric}</span>
                        <span>Lorem {g.year}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-pad grid-bg" style={{ background: '#f0fdf4' }} id="timeline-sec" data-animate>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 80, alignItems: 'start' }}>
            <div className={`reveal ${visibleSections.has('timeline-sec') ? 'visible' : ''}`}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Historia
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Our Ipsum<br />
                <em style={{ color: '#16A34A' }}>Green Journey</em>
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563' }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('timeline-sec') ? 'visible' : ''}`}>
              {[
                { year: '1994', title: 'Lorem Founded', desc: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.' },
                { year: '2005', title: 'Ipsum FSC Cert', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.' },
                { year: '2012', title: 'Amet ISO 14001', desc: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla.' },
                { year: '2018', title: 'Dolor Solar Farm', desc: 'Excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt mollit anim.' },
                { year: '2023', title: 'Lorem Net Zero Path', desc: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.' },
              ].map((t, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot">{t.year.slice(2)}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#16A34A', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{t.year}</div>
                    <h4 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: '#1E3A8A', marginBottom: 6 }}>{t.title}</h4>
                    <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="section-pad" style={{ background: 'white' }} id="certs-sec" data-animate>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Certifica
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('certs-sec') ? 'visible' : ''}`}
              style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Ipsum <em style={{ color: '#16A34A' }}>Certifications</em>
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 460, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
            {[
              { icon: <Shield size={28} />, name: 'ISO 14001', desc: 'Lorem ipsum dolor' },
              { icon: <Leaf size={28} />, name: 'FSC Certified', desc: 'Dolor sit amet' },
              { icon: <Recycle size={28} />, name: 'Lorem Recycled', desc: 'Consectetur adipiscing' },
              { icon: <TreePine size={28} />, name: 'Ipsum Forest', desc: 'Sed do eiusmod' },
              { icon: <Zap size={28} />, name: 'Amet Energy', desc: 'Tempor incididunt' },
              { icon: <Droplets size={28} />, name: 'Dolor Water', desc: 'Ut labore dolore' },
            ].map((c, i) => (
              <div key={i} className={`cert-card reveal reveal-delay-${(i % 4) + 1} ${visibleSections.has('certs-sec') ? 'visible' : ''}`}>
                <div className="cert-icon">
                  <span style={{ color: '#16A34A', transition: 'color 0.3s' }}>{c.icon}</span>
                </div>
                <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: '#1E3A8A', marginBottom: 6 }}>{c.name}</h4>
                <p style={{ fontSize: 13, color: '#9ca3af' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad cta-dark" id="sus-cta" data-animate>
        <div className="noise-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
            <Leaf size={12} style={{ color: '#4ade80' }} />
            Lorem Together
          </div>
          <h2 className={`font-display reveal ${visibleSections.has('sus-cta') ? 'visible' : ''}`}
            style={{ fontSize: 'clamp(30px,5vw,66px)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: 720, margin: '0 auto 24px' }}>
            Lorem Ipsum<br />
            <em style={{ background: 'linear-gradient(135deg,#4ade80,#16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dolor Viridis
            </em><br />
            Together
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 52px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">
              Lorem Partner With Us
              <ArrowRight size={18} />
            </Link>
            <Link href="/products" className="btn-ghost">
              Dolor Products
            </Link>
          </div>

          {/* Trust row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 72, flexWrap: 'wrap' }}>
            {[
              { icon: <Leaf size={20} />, label: 'Lorem Certified' },
              { icon: <Recycle size={20} />, label: 'Ipsum Circular' },
              { icon: <TreePine size={20} />, label: 'Dolor Forest' },
              { icon: <Shield size={20} />, label: 'Amet ISO' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80' }}>
                  {b.icon}
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}