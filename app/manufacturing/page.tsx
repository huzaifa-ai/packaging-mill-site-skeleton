"use client";

import Link from 'next/link';
import { Factory, Cog, CircleCheck as CheckCircle, ChartBar as BarChart3, Shield, Zap, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

export default function Manufacturing() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        .font-display { font-family: 'Playfair Display', serif; }

        .hero-bg-mfg {
          background-image: url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920');
          background-size: cover;
          background-position: center;
        }
        .hero-overlay { background: linear-gradient(135deg, rgba(10,20,60,0.93) 0%, rgba(15,40,20,0.75) 100%); }

        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px;
          background: rgba(22,163,74,0.1); border: 1px solid rgba(22,163,74,0.25);
          border-radius: 50px; font-size: 12px; font-weight: 700;
          color: #16A34A; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;
        }
        .section-label-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #16A34A;
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }

        .accent-line {
          width: 60px; height: 4px;
          background: linear-gradient(90deg, #16A34A, #4ade80);
          border-radius: 2px; margin: 20px 0;
        }

        .ticker-number {
          font-family: 'Playfair Display', serif; font-weight: 800;
          background: linear-gradient(135deg, #fff, #a5f3c0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Stat cards */
        .stat-hero-card {
          border-radius: 24px; padding: 44px 36px; text-align: center;
          position: relative; overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s;
        }
        .stat-hero-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(0,0,0,0.25) !important; }
        .stat-hero-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Machine card */
        .machine-card {
          background: white; border-radius: 20px; padding: 36px 28px;
          border: 1px solid rgba(30,58,138,0.07);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          position: relative; overflow: hidden;
        }
        .machine-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1E3A8A, #16A34A);
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
        }
        .machine-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(30,58,138,0.13); }
        .machine-card:hover::after { transform: scaleX(1); }

        .icon-wrap {
          width: 60px; height: 60px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          transition: all 0.3s;
        }
        .machine-card:hover .icon-wrap { transform: scale(1.1) rotate(-5deg); }

        /* QC steps */
        .qc-step {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s;
        }
        .qc-step:last-child { border-bottom: none; }
        .qc-step:hover { padding-left: 8px; }
        .qc-icon {
          width: 46px; height: 46px; border-radius: 12px;
          background: linear-gradient(135deg, #16A34A, #4ade80);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-shadow: 0 8px 24px rgba(22,163,74,0.35);
        }

        /* Gallery */
        .gallery-item {
          border-radius: 18px; overflow: hidden; position: relative;
          box-shadow: 0 8px 32px rgba(30,58,138,0.1);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .gallery-item::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10,20,60,0.6) 100%);
          opacity: 0; transition: opacity 0.4s;
        }
        .gallery-item:hover { transform: scale(1.03); box-shadow: 0 24px 60px rgba(30,58,138,0.2); }
        .gallery-item:hover::after { opacity: 1; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); display: block; }
        .gallery-item:hover img { transform: scale(1.08); }

        /* CTA section */
        .cta-section {
          background: linear-gradient(135deg, #0a1628 0%, #0f2010 100%);
          position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute;
          top: -50%; left: -20%; width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-section::after {
          content: ''; position: absolute;
          bottom: -50%; right: -20%; width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,58,138,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #16A34A, #15803d);
          color: white; font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 15px; letter-spacing: 0.03em;
          border-radius: 50px; text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 8px 32px rgba(22,163,74,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(22,163,74,0.45); }

        /* Noise overlay */
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
        }

        /* Grid bg */
        .grid-bg {
          background-image: linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Diagonal */
        .diagonal-top { clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%); margin-top: -3vw; padding-top: calc(3vw + 80px); }

        .section-pad { padding: 100px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

        /* Capacity bar */
        .cap-bar-wrap { margin-bottom: 20px; }
        .cap-bar-label { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px; }
        .cap-bar-track { height: 8px; background: rgba(30,58,138,0.1); border-radius: 4px; overflow: hidden; }
        .cap-bar-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, #1E3A8A, #16A34A); }

        /* Floating tag */
        .float-tag {
          position: absolute; bottom: 24px; left: 24px; z-index: 10;
          background: white; border-radius: 14px; padding: 14px 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          display: flex; align-items: center; gap: 12px;
        }
        .float-tag-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: linear-gradient(135deg, #1E3A8A, #16A34A);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }

        /* Marquee */
        .marquee-track { display: flex; gap: 60px; animation: marquee 30s linear infinite; white-space: nowrap; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-item {
          font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.15em;
          display: flex; align-items: center; gap: 28px; flex-shrink: 0;
        }
        .marquee-item::after { content: '◆'; color: #16A34A; font-size: 8px; }

        @media (max-width: 768px) {
          .container { padding: 0 20px; }
          .section-pad { padding: 60px 0; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="hero-bg-mfg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* Decorative rings */}
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.2)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '15%', right: '12%', width: 380, height: 380, borderRadius: '50%', border: '1px solid rgba(22,163,74,0.1)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white', maxWidth: 820, padding: '0 32px' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.4)' }}>
            <span className="section-label-dot" />
            Lorem Facilities
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(38px, 6vw, 76px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Lorem Ipsum<br />
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dolor Capabilities
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* Bottom wave shape */}
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
            ['Lorem Ipsum', 'Dolor Capacitas', 'Consectetur Tech', 'Adipiscing Quality', 'Sed Eiusmod Lines', 'Tempor Incididunt', 'Ut Labore', 'Magna Aliqua'].map((t, j) => (
              <span key={`${i}-${j}`} className="marquee-item">{t}</span>
            ))
          )}
        </div>
      </div>

      {/* ─── PRODUCTION CAPACITY ─── */}
      <section className="section-pad grid-bg" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Productio
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Lorem Ipsum <em style={{ color: '#16A34A' }}>Dolor</em> Capacity
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* 3 Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 80 }}>
            {[
              { icon: <BarChart3 size={36} />, num: '50M+', sub: 'Lorem Ipsum Meters', bg: 'linear-gradient(135deg, #1E3A8A 0%, #1e40af 100%)', shadow: 'rgba(30,58,138,0.35)' },
              { icon: <Factory size={36} />, num: '12', sub: 'Dolor Production Lines', bg: 'linear-gradient(135deg, #16A34A 0%, #15803d 100%)', shadow: 'rgba(22,163,74,0.35)' },
              { icon: <Zap size={36} />, num: '24/7', sub: 'Ipsum Operational Hours', bg: 'linear-gradient(135deg, #374151 0%, #111827 100%)', shadow: 'rgba(17,24,39,0.35)' },
            ].map((card, i) => (
              <div key={i} className="stat-hero-card" style={{ background: card.bg, boxShadow: `0 20px 60px ${card.shadow}`, color: 'white' }}>
                <div style={{ width: 72, height: 72, borderRadius: 18, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  {card.icon}
                </div>
                <div className="ticker-number" style={{ fontSize: 60, lineHeight: 1 }}>{card.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', marginTop: 12, fontWeight: 500, fontSize: 15 }}>{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Scale section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Scala
              </div>
              <h3 className="font-display" style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.15, marginBottom: 8, letterSpacing: '-0.02em' }}>
                Lorem Ipsum Dolor<br />
                <em style={{ color: '#16A34A' }}>Sit Amet Scale</em>
              </h3>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 40 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
              </p>
              {/* Capacity bars */}
              <div>
                {[
                  { label: 'Lorem Ipsum Capacity', val: '92%', pct: 92 },
                  { label: 'Dolor Efficiency Rate', val: '97%', pct: 97 },
                  { label: 'Amet Quality Score', val: '99%', pct: 99 },
                ].map((b, i) => (
                  <div key={i} className="cap-bar-wrap">
                    <div className="cap-bar-label"><span>{b.label}</span><span style={{ color: '#16A34A' }}>{b.val}</span></div>
                    <div className="cap-bar-track">
                      <div className="cap-bar-fill" style={{ width: b.pct + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', height: 480, boxShadow: '0 40px 80px rgba(30,58,138,0.15)' }}>
                <img
                  src="https://images.pexels.com/photos/1267362/pexels-photo-1267362.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Production capacity"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="float-tag">
                <div className="float-tag-icon"><BarChart3 size={18} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>Lorem Ipsum</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Dolor sit amet</div>
                </div>
              </div>
              {/* Accent */}
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: 20, background: 'linear-gradient(135deg, rgba(22,163,74,0.15), rgba(30,58,138,0.1))', zIndex: -1, border: '1px solid rgba(22,163,74,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MACHINERY ─── */}
      <section className="section-pad diagonal-top" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Machina
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Ipsum <em style={{ color: '#16A34A' }}>Dolor</em> Technology
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { icon: <Cog size={26} />, color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)', title: 'Lorem Corrugators', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.' },
              { icon: <Factory size={26} />, color: '#16A34A', bg: 'rgba(22,163,74,0.08)', title: 'Dolor Flexographic', desc: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.' },
              { icon: <Zap size={26} />, color: '#374151', bg: 'rgba(55,65,81,0.08)', title: 'Ipsum Die-Cutting', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.' },
              { icon: <CheckCircle size={26} />, color: '#1E3A8A', bg: 'rgba(30,58,138,0.08)', title: 'Amet Folder-Gluers', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
              { icon: <BarChart3 size={26} />, color: '#16A34A', bg: 'rgba(22,163,74,0.08)', title: 'Elit Inspection', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.' },
              { icon: <Shield size={26} />, color: '#374151', bg: 'rgba(55,65,81,0.08)', title: 'Lorem Compression', desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            ].map((card, i) => (
              <div key={i} className="machine-card">
                <div className="icon-wrap" style={{ background: card.bg, color: card.color }}>
                  {card.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: '#1E3A8A', marginBottom: 12 }}>{card.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.75 }}>{card.desc}</p>
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: card.color, fontSize: 12, fontWeight: 600 }}>
                  Lorem more <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITY CONTROL ─── */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2010 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="noise-overlay" />
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
                <Shield size={12} />
                Lorem Qualitas
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Lorem Ipsum<br />
                <em style={{ color: '#4ade80' }}>Dolor Control</em><br />
                Process
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 40 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { title: 'Lorem Material Inspection', desc: 'Consectetur adipiscing elit all materials tested for lorem ipsum dolor sit amet quality consistency and compliance.' },
                  { title: 'Dolor In-Line Monitoring', desc: 'Sed do eiusmod tempor continuous monitoring throughout dolor sit amet using automated sensors and inspections.' },
                  { title: 'Ipsum Final Testing', desc: 'Lorem ipsum comprehensive testing including amet consectetur adipiscing elit burst strength and moisture resistance.' },
                  { title: 'Amet Traceability System', desc: 'Ut labore et dolore magna complete documentation and lorem ipsum dolor tracking system full traceability.' },
                ].map((step, i) => (
                  <div key={i} className="qc-step">
                    <div className="qc-icon">
                      <CheckCircle size={20} color="white" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: 'white', marginBottom: 6 }}>{step.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', height: 560, boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img
                  src="https://images.pexels.com/photos/5691598/pexels-photo-5691598.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality control"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Shield badge */}
              <div style={{ position: 'absolute', top: 24, right: -16, width: 88, height: 88, borderRadius: '50%', background: 'linear-gradient(135deg, #1E3A8A, #16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(30,58,138,0.4)', flexDirection: 'column', zIndex: 10 }}>
                <Shield size={22} color="white" />
                <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 4, letterSpacing: '0.05em' }}>ISO</span>
              </div>
              <div className="float-tag">
                <div className="float-tag-icon"><CheckCircle size={18} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 14 }}>Dolor Approved</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Lorem certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>
              <span className="section-label-dot" />
              Lorem Galeria
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Lorem Ipsum <em style={{ color: '#16A34A' }}>Dolor</em> Gallery
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 20 }}>
            <div className="gallery-item" style={{ height: 320, gridColumn: '1 / 2', gridRow: '1 / 2' }}>
              <img src="https://images.pexels.com/photos/6028170/pexels-photo-6028170.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Factory floor" />
            </div>
            <div className="gallery-item" style={{ height: 320, gridColumn: '2 / 3', gridRow: '1 / 2' }}>
              <img src="https://images.pexels.com/photos/1267358/pexels-photo-1267358.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Production line" />
            </div>
            <div className="gallery-item" style={{ height: 660, gridColumn: '3 / 4', gridRow: '1 / 3' }}>
              <img src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Packaging materials" style={{ height: '100%' }} />
            </div>
            <div className="gallery-item" style={{ height: 320, gridColumn: '1 / 2', gridRow: '2 / 3' }}>
              <img src="https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Corrugated boxes" />
            </div>
            <div className="gallery-item" style={{ height: 320, gridColumn: '2 / 3', gridRow: '2 / 3' }}>
              <img src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Warehouse" />
            </div>
          </div>

          {/* Last wide image */}
          <div className="gallery-item" style={{ height: 280, marginTop: 20 }}>
            <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Finished products" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad cta-section">
        <div className="noise-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
            <span className="section-label-dot" style={{ background: '#4ade80' }} />
            Lorem Contactus
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(30px, 5vw, 64px)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 720, margin: '0 auto 24px' }}>
            Lorem Ipsum Dolor<br />
            <em style={{ background: 'linear-gradient(135deg, #4ade80, #16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Solutio Amet
            </em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 48px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">
              Lorem Ipsum Dolor
              <ArrowRight size={18} />
            </Link>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', border: '2px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
              Amet Home
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 72, flexWrap: 'wrap' }}>
            {['ISO 9001', 'Lorem Cert', 'Ipsum Award', 'Dolor Badge'].map((badge, i) => (
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