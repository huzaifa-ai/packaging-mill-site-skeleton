'use client';

import Link from 'next/link';
import { ArrowRight, Package, Leaf, Factory, Boxes, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(Array.from(prev).concat(entry.target.id)));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        body {
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .font-display { font-family: 'Playfair Display', serif; }

        /* Hero */
        .hero-bg {
          background-image: url('https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1920');
          background-size: cover;
          background-position: center;
          transform: scale(1.1) translateY(calc(var(--scroll, 0px) * 0.3));
          transition: transform 0.05s linear;
        }

        .hero-overlay {
          background: linear-gradient(135deg, rgba(10,20,60,0.92) 0%, rgba(20,60,30,0.7) 100%);
        }

        /* Animated underline */
        .fancy-underline {
          position: relative;
          display: inline-block;
        }
        .fancy-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #16A34A, #4ade80);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fancy-underline:hover::after { transform: scaleX(1); }

        /* Stat number animation */
        .stat-card {
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(22,163,74,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .stat-card:hover::before { opacity: 1; }

        /* Product card */
        .product-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .product-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1E3A8A 0%, #16A34A 100%);
          opacity: 0;
          transition: opacity 0.4s;
          z-index: 0;
        }
        .product-card:hover::before { opacity: 1; }
        .product-card:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(30,58,138,0.25); }
        .product-card .card-content { position: relative; z-index: 1; transition: color 0.4s; }
        .product-card:hover .card-content h3,
        .product-card:hover .card-content p { color: white; }
        .product-card:hover .icon-wrap { background: rgba(255,255,255,0.2); }
        .product-card:hover .icon-wrap svg { color: white !important; }

        .icon-wrap {
          transition: background 0.4s;
        }

        /* Diagonal divider */
        .diagonal-top {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
          margin-top: -3vw;
          padding-top: calc(3vw + 80px);
        }
        .diagonal-bottom {
          clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
          padding-bottom: calc(3vw + 80px);
        }

        /* Scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* Number ticker */
        .ticker-number {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          background: linear-gradient(135deg, #1E3A8A, #16A34A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Input styles */
        .form-input {
          width: 100%;
          padding: 14px 18px;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          transition: all 0.3s;
          background: #fafafa;
          color: #1f2937;
        }
        .form-input:focus {
          border-color: #1E3A8A;
          background: white;
          box-shadow: 0 0 0 4px rgba(30,58,138,0.08);
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* CTA button */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #16A34A, #15803d);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.03em;
          border-radius: 50px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 32px rgba(22,163,74,0.35);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(22,163,74,0.45);
        }
        .btn-primary:hover::before { opacity: 1; }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border: 2px solid white;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-outline:hover {
          background: white;
          color: #1E3A8A;
        }

        /* Section label */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(22,163,74,0.1);
          border: 1px solid rgba(22,163,74,0.25);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          color: #16A34A;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }
        .section-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #16A34A;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* Horizontal rule accent */
        .accent-line {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #16A34A, #4ade80);
          border-radius: 2px;
          margin: 20px 0;
        }

        /* Image overlay card */
        .img-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }
        .img-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10,20,60,0.5) 100%);
          pointer-events: none;
        }

        /* Floating badge */
        .floating-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          z-index: 10;
          background: white;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .floating-badge-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1E3A8A, #16A34A);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        /* Testimonial / feature row */
        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(55,65,81,0.1);
        }
        .feature-row:last-child { border-bottom: none; }
        .feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1E3A8A10, #16A34A20);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #16A34A;
        }

        /* Noise texture overlay */
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        /* Grid pattern bg */
        .grid-bg {
          background-image: linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Smooth scrollbar */
        html { scroll-behavior: smooth; }

        /* Section spacing */
        .section-pad { padding: 100px 0; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

        @media (max-width: 768px) {
          .container { padding: 0 20px; }
          .section-pad { padding: 60px 0; }
        }

        /* Marquee */
        .marquee-track {
          display: flex;
          gap: 60px;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-item {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: flex;
          align-items: center;
          gap: 30px;
          flex-shrink: 0;
        }
        .marquee-item::after {
          content: '◆';
          color: #16A34A;
          font-size: 8px;
        }

        /* Checklist */
        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 0;
        }
        .check-dot {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: linear-gradient(135deg, #16A34A, #4ade80);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div
          className="hero-bg"
          style={{ position: 'absolute', inset: 0, zIndex: 0, '--scroll': `${scrollY}px` } as React.CSSProperties}
        />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
        <div className="noise-overlay" style={{ zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: 'white', maxWidth: 900, padding: '0 32px' }}>
          <div className="section-label" style={{ margin: '0 auto 28px', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.4)' }}>
            <span className="section-label-dot" />
            Lorem Ipsum Dolor Sit
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, letterSpacing: '-0.02em' }}>
            Lorem Ipsum<br />
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #16A34A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dolor Solutio
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto 44px', fontWeight: 300 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/manufacturing" className="btn-primary">
              Lorem Ipsum
              <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className="btn-outline">
              Dolor Sit Amet
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <ChevronDown size={16} style={{ animation: 'bounce 2s infinite' }} />
        </div>

        <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(6px)} }`}</style>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div style={{ background: '#0f1f4a', padding: '18px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur', 'Adipiscing Elit', 'Sed Do Eiusmod', 'Tempor Incididunt', 'Ut Labore', 'Dolore Magna'].map((t, j) => (
              <span key={`${i}-${j}`} className="marquee-item">{t}</span>
            ))
          )}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section className="section-pad grid-bg" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {[
              { num: '30+', label: 'Lorem Ipsum Anni', sub: 'Dolor experientia' },
              { num: '50M+', label: 'Sq. Meter Output', sub: 'Adipiscing annually' },
              { num: '500+', label: 'Elit Clients', sub: 'Consectetur partners' },
              { num: '99%', label: 'Satisfaction Rate', sub: 'Sed eiusmod quality' },
            ].map((s, i) => (
              <div key={i} className="stat-card" style={{ padding: '40px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(30,58,138,0.08)' : 'none' }}>
                <div className="ticker-number" style={{ fontSize: 56, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontWeight: 700, color: '#1E3A8A', marginTop: 10, fontSize: 15, letterSpacing: '0.02em' }}>{s.label}</div>
                <div style={{ color: '#6b7280', fontSize: 13, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section-pad" style={{ background: '#f8fafc' }} id="about-section" data-animate>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('about-section') ? 'visible' : ''}`}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Nostrum
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
                Consectetur Adipiscing<br />
                <em style={{ fontStyle: 'italic', color: '#16A34A' }}>Elit Eiusmod</em>
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 36 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {['Nostrud exercitation ullamco laboris nisi', 'Ut enim ad minim veniam quis consequat', 'Duis aute irure dolor reprehenderit'].map((item, i) => (
                  <div key={i} className="feature-row">
                    <div className="feature-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`reveal reveal-delay-2 ${visibleSections.has('about-section') ? 'visible' : ''}`} style={{ position: 'relative' }}>
              <div className="img-card" style={{ height: 520, boxShadow: '0 40px 80px rgba(30,58,138,0.18)' }}>
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Corrugated packaging"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Floating badge */}
              <div className="floating-badge">
                <div className="floating-badge-icon">
                  <Package size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 15 }}>Lorem Ipsum</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Dolor sit amet</div>
                </div>
              </div>
              {/* Accent box */}
              <div style={{ position: 'absolute', top: -24, right: -24, width: 140, height: 140, background: 'linear-gradient(135deg, #16A34A20, #1E3A8A10)', borderRadius: 20, zIndex: -1, border: '1px solid rgba(22,163,74,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="section-pad diagonal-top diagonal-bottom" style={{ background: '#1E3A8A', position: 'relative' }} id="products-section" data-animate>
        <div className="noise-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ margin: '0 auto 20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}>
              <span className="section-label-dot" style={{ background: '#4ade80' }} />
              Lorem Productum
            </div>
            <h2 className={`font-display reveal ${visibleSections.has('products-section') ? 'visible' : ''}`} style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', maxWidth: 560, margin: '0 auto 16px' }}>
              Nostrum Dolor Sit<br />Amet <em style={{ color: '#4ade80' }}>Consectetur</em>
            </h2>
            <p className={`reveal reveal-delay-1 ${visibleSections.has('products-section') ? 'visible' : ''}`} style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {[
              { icon: <Package size={28} />, color: '#1E3A8A', accentColor: '#60a5fa', title: 'Lorem Containers', desc: 'Durable ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.' },
              { icon: <Boxes size={28} />, color: '#16A34A', accentColor: '#4ade80', title: 'Dolor Packaging', desc: 'Tailored amet consectetur solutions with custom tempor incididunt ut labore dolore.' },
              { icon: <Factory size={28} />, color: '#374151', accentColor: '#9ca3af', title: 'Ipsum Industrial', desc: 'Heavy-duty lorem dolor solutions for amet consectetur adipiscing elit incididunt.' },
              { icon: <Package size={28} />, color: '#16A34A', accentColor: '#4ade80', title: 'Elit FMCG', desc: 'High-volume consectetur solutions optimized for lorem ipsum dolor sit amet magna.' },
            ].map((card, i) => (
              <div
                key={i}
                className={`product-card reveal reveal-delay-${i + 1} ${visibleSections.has('products-section') ? 'visible' : ''}`}
                style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '36px 28px', cursor: 'default' }}
              >
                <div className="card-content">
                  <div className="icon-wrap" style={{ width: 60, height: 60, borderRadius: 14, background: `rgba(255,255,255,0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: card.accentColor }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 12, fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{card.desc}</p>
                  <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 6, color: card.accentColor, fontSize: 13, fontWeight: 600 }}>
                    Lorem More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANUFACTURING ─── */}
      <section className="section-pad" style={{ background: 'white' }} id="mfg-section" data-animate>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('mfg-section') ? 'visible' : ''}`} style={{ position: 'relative', order: 1 }}>
              <div className="img-card" style={{ height: 560, boxShadow: '0 40px 80px rgba(30,58,138,0.15)' }}>
                <img
                  src="https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Manufacturing facility"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="floating-badge" style={{ bottom: 24, left: 24, right: 'auto' }}>
                <div className="floating-badge-icon">
                  <Factory size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 15 }}>Dolor Sit</div>
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2 }}>Amet consectetur</div>
                </div>
              </div>
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('mfg-section') ? 'visible' : ''}`} style={{ order: 2 }}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Capabilities
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Advanced Ipsum<br />
                <em style={{ color: '#16A34A' }}>Dolor Capabilities</em>
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 36 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
                {[['50M+', 'Sq. Meters'], ['200+', 'Dolor Clients'], ['15+', 'Countries'], ['24/7', 'Lorem Uptime']].map(([n, l], i) => (
                  <div key={i} style={{ padding: '20px', background: 'linear-gradient(135deg, #f0f4ff, #f0fdf4)', borderRadius: 14, border: '1px solid rgba(30,58,138,0.08)' }}>
                    <div className="font-display" style={{ fontSize: 30, fontWeight: 800, color: '#1E3A8A' }}>{n}</div>
                    <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 500, marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <Link href="/manufacturing" className="btn-primary" style={{ textDecoration: 'none' }}>
                Explore Lorem Ipsum
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY ─── */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg, #0f2010 0%, #0a1628 100%)', position: 'relative', overflow: 'hidden' }} id="sustain-section" data-animate>
        <div className="noise-overlay" />
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'center' }}>
            <div className={`reveal ${visibleSections.has('sustain-section') ? 'visible' : ''}`}>
              <div className="section-label" style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', color: '#4ade80' }}>
                <Leaf size={12} />
                Lorem Sustainability
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Committed to<br />
                <em style={{ color: '#4ade80' }}>Dolor Ipsum</em><br />
                Responsibility
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 36 }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {['100% lorem recyclable materials ipsum dolor', 'Renewable consectetur resource-based production', 'Energy-efficient amet manufacturing processes'].map((item, i) => (
                  <div key={i} className="check-item">
                    <div className="check-dot">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`reveal reveal-delay-2 ${visibleSections.has('sustain-section') ? 'visible' : ''}`} style={{ position: 'relative' }}>
              <div className="img-card" style={{ height: 520, boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img
                  src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sustainable packaging"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Circular badge */}
              <div style={{ position: 'absolute', top: 24, right: -20, width: 90, height: 90, borderRadius: '50%', background: 'linear-gradient(135deg, #16A34A, #4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(22,163,74,0.4)', flexDirection: 'column', zIndex: 10 }}>
                <Leaf size={24} color="white" />
                <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 4, textAlign: 'center', letterSpacing: '0.05em' }}>ECO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="section-pad grid-bg" style={{ background: '#f8fafc' }} data-animate>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'start' }}>
            {/* Left info */}
            <div className={`reveal ${visibleSections.has('contact') ? 'visible' : ''}`}>
              <div className="section-label">
                <span className="section-label-dot" />
                Lorem Contact
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 800, color: '#1E3A8A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Lorem Ipsum<br />
                <em style={{ color: '#16A34A' }}>Dolor Sit</em>
              </h2>
              <div className="accent-line" />
              <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4b5563', marginBottom: 48 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { label: 'Lorem Address', value: '123 Dolor Sit, Amet, Consectetur 12345' },
                  { label: 'Ipsum Phone', value: '+1 (234) 567-890' },
                  { label: 'Dolor Email', value: 'lorem@ipsumdolor.com' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</span>
                    <span style={{ fontSize: 15, color: '#374151' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className={`reveal reveal-delay-2 ${visibleSections.has('contact') ? 'visible' : ''}`}>
              <div style={{ background: 'white', borderRadius: 24, boxShadow: '0 24px 64px rgba(30,58,138,0.1)', padding: '48px 40px', border: '1px solid rgba(30,58,138,0.06)' }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#1E3A8A', marginBottom: 32 }}>
                  Lorem Ipsum Dolor
                </h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 24 }}>
                    <label className="form-label" htmlFor="name">Lorem Name</label>
                    <input type="text" id="name" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Ipsum dolor..." required />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label className="form-label" htmlFor="email">Dolor Email</label>
                    <input type="email" id="email" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="lorem@ipsum.com" required />
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <label className="form-label" htmlFor="message">Ipsum Message</label>
                    <textarea id="message" rows={5} className="form-input" style={{ resize: 'none' }} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Lorem ipsum dolor sit amet..." required />
                  </div>
                  <button
                    type="submit"
                    style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #1E3A8A, #1e40af)', color: 'white', border: 'none', borderRadius: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, cursor: 'pointer', letterSpacing: '0.02em', transition: 'all 0.3s', boxShadow: '0 8px 32px rgba(30,58,138,0.3)' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    Lorem Ipsum Mittere
                  </button>
                  {submitted && (
                    <div style={{ marginTop: 16, padding: '14px 20px', background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.25)', borderRadius: 10 }}>
                      <p style={{ color: '#16A34A', textAlign: 'center', fontWeight: 600, fontSize: 14 }}>
                        ✓ Lorem ipsum! Dolor sit amet successfully.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}