import React from 'react'
import { BlurWords } from './lib'

// Block 2 — single-line value proposition (editorial register entry)
export default function ValueProp() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} data-screen-label="02 Value Prop" className="editorial editorial-bg" style={{
      position: 'relative',
      padding: '200px 0 220px',
      textAlign: 'center',
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(ellipse at top, rgba(75,33,56,0.28) 0%, transparent 70%)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, var(--base) 0%, rgba(6,6,8,.55) 35%, rgba(6,6,8,.55) 65%, var(--base) 100%)',
      }} />
      <div className="grain grain-soft" />
      <div className="container-narrow" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mono mono-sm" style={{
          color: 'var(--cream-quiet)', marginBottom: 40,
          opacity: visible ? 1 : 0, transition: 'opacity 1s ease',
        }}>— What Troyva is —</div>
        <h2 className="display" style={{
          margin: 0,
          fontSize: 'clamp(38px, 6vw, 88px)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--cream)',
          textWrap: 'balance',
        }}>
          {visible ? (
            <BlurWords text="Your first day on campus, infinitely extended." perWord={90} delay={120} />
          ) : (
            <span style={{ opacity: 0 }}>Your first day on campus, infinitely extended.</span>
          )}
        </h2>
        <div className="mono" style={{
          marginTop: 56, color: 'var(--cream-quiet)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 1.4s ease 1.2s',
        }}>
          A verified community of students. Nothing else.
        </div>
      </div>
    </section>
  );
}
