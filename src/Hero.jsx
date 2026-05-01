import React from 'react'
import troyvaLogoIcon from '../assets/troyva-logo-icon-white.png'

export default function Hero() {
  return (
    <section data-screen-label="01 Hero" style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      isolation: 'isolate',
      color: 'var(--cream)',
      background: 'var(--navy)',
    }}>
      <div className="atmos-hero" />
      <div className="grain" />

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(0,0,0,.55) 100%)'
      }} />
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 240,
        background: 'linear-gradient(180deg, transparent, var(--base) 95%)', pointerEvents: 'none'
      }} />

      {/* Top bar */}
      <div className="container" style={{
        position: 'relative', zIndex: 2, paddingTop: 28, paddingBottom: 28,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Mark />
        <nav style={{ display: 'flex', gap: 28 }}>
          <a className="link-quiet" href="#product">Product</a>
          <a className="link-quiet" href="#community">Community</a>
          <a className="link-quiet" href="#safety">Safety</a>
          <a className="link-quiet" href="#waitlist">Waitlist</a>
        </nav>
      </div>

      {/* Hero content */}
      <div className="container" style={{
        position: 'relative', zIndex: 2,
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 24,
        paddingBottom: 64,
      }}>
        {/* Eyebrow */}
        <div style={{ opacity: 0, animation: 'fadeIn 1s ease 100ms forwards' }}>
          <div className="mono" style={{ color: 'var(--cream-dim)', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--gold)', boxShadow: '0 0 12px var(--gold)',
            }} className="pulse" />
            Now in early access · Dhaka
          </div>
        </div>

        {/* Headline — spans inlined, no inner component, avoids animation reset on re-render */}
        <h1 className="display" style={{
          margin: '24px 0 0',
          fontSize: 'clamp(48px, 8.4vw, 132px)',
          lineHeight: 0.96,
          letterSpacing: '-0.025em',
          maxWidth: '15ch',
        }}>
          <span style={{ display: 'block', opacity: 0, animation: 'fadeIn 1.4s ease 400ms forwards' }}>
            Every campus has a gate.
          </span>
          <span style={{ display: 'block', opacity: 0, animation: 'fadeIn 1.4s ease 1000ms forwards' }}>
            Yours opens today.
          </span>
          <span style={{ display: 'block', opacity: 0, fontStyle: 'italic', color: 'var(--gold)', animation: 'fadeIn 1.4s ease 1600ms forwards' }}>
            Troyva is what's on the other side.
          </span>
        </h1>

        <p style={{
          marginTop: 36,
          fontFamily: 'var(--body)',
          fontSize: 17,
          lineHeight: 1.55,
          color: 'var(--cream-dim)',
          maxWidth: 480,
          opacity: 0,
          animation: 'fadeIn 1.4s ease 2400ms forwards',
        }}>
          The verified campus operating system. Built for who you're about to become.
        </p>

        <div style={{
          marginTop: 40, display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap',
          opacity: 0, animation: 'fadeIn 1.4s ease 3000ms forwards',
        }}>
          <a href="#waitlist" className="btn-glass">
            Request Access
            <Arrow />
          </a>
          <a href="#product" className="link-quiet">Skip to the product →</a>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 64, opacity: 0, animation: 'fadeIn 1s ease 3800ms forwards' }}>
          <div className="scroll-hint">
            <span className="mono" style={{ color: 'var(--cream-dim)' }}>Scroll</span>
            <span className="line" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Mark() {
  return (
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--cream)' }}>
      <img src={troyvaLogoIcon} alt="" aria-hidden="true" style={{ height: 32, width: 'auto' }} />
      <span className="display" style={{ fontSize: 22, letterSpacing: '0.01em' }}>Troyva</span>
    </a>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
