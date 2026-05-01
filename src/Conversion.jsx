import React from 'react'
import { useReveal } from './lib'
import { Arrow } from './Hero'
import { submitEmail } from './formbricks'

// Block 5 — Conversion
export default function Conversion({ tweaks, onSubmitSuccess }) {
  const ref = useReveal();
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const v = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setError('Use your institutional email.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await submitEmail(v);
      setSubmitted(true);
      onSubmitSuccess?.();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" ref={ref.ref} data-screen-label="07 Conversion" className="editorial editorial-bg" style={{
      position: 'relative', padding: '200px 0 180px', textAlign: 'center', overflow: 'hidden',
    }}>
      <div className="grain grain-soft" />
      <div className="container-narrow" style={{ position: 'relative', zIndex: 1 }}>
        <h3 className="display" style={{
          margin: 0,
          fontSize: 'clamp(48px, 7vw, 110px)',
          lineHeight: 1, letterSpacing: '-0.025em',
          opacity: ref.visible ? 1 : 0, transform: ref.visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 1s ease',
        }}>
          Your campus, <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>elevated.</em>
        </h3>
        <p style={{
          marginTop: 36, fontSize: 17, lineHeight: 1.6, color: 'var(--cream-dim)',
          maxWidth: 560, margin: '36px auto 0',
          opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .3s',
        }}>
          Join the waitlist. Be among the first when Troyva launches at your university. Institutional email required.
        </p>

        {!submitted ? (
          <form onSubmit={submit} style={{
            marginTop: 56, maxWidth: 480, margin: '56px auto 0',
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .5s',
          }}>
            {/* Asme-style liquid-glass pill */}
            <div className="liquid-glass" style={{
              borderRadius: 999, padding: '8px 8px 8px 24px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <input
                type="email"
                required
                placeholder="your.name@university.edu.bd"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'transparent', border: 0, outline: 'none',
                  color: 'var(--cream)', fontFamily: 'var(--body)', fontSize: 15,
                  padding: '10px 0',
                }}
              />
              <button type="submit" aria-label="Request Access" disabled={loading} style={{
                background: 'linear-gradient(180deg, #C73A45 0%, #9C2832 100%)',
                width: 44, height: 44, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,180,170,.3)', cursor: loading ? 'wait' : 'pointer',
                color: '#FFF1E8', opacity: loading ? 0.7 : 1,
                boxShadow: '0 8px 24px rgba(184,51,61,.4), inset 0 1px 1px rgba(255,255,255,.25)',
                transition: 'transform .25s ease',
              }} onMouseEnter={(e)=>{ if (!loading) e.currentTarget.style.transform='scale(1.06)'; }}
                 onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}>
                <Arrow />
              </button>
            </div>
            <button type="submit" className="btn-glass" style={{
              marginTop: 18, padding: '14px 26px', justifyContent: 'center',
              fontSize: 10,
            }}>
              Request Access
            </button>
            {error && <div className="mono mono-sm" style={{ color: '#E8A0A8', marginTop: 16 }}>{error}</div>}
          </form>
        ) : (
          <div style={{
            marginTop: 56, maxWidth: 460, margin: '56px auto 0',
            padding: '28px 24px',
            border: '1px solid var(--gold-soft)',
            background: 'rgba(201,164,90,.04)',
          }}>
            <div className="mono" style={{ color: 'var(--gold)' }}>You're on the list.</div>
            <div style={{ marginTop: 10, color: 'var(--cream-dim)', fontSize: 14 }}>
              We'll write to <strong style={{ color: 'var(--cream)' }}>{email}</strong> when Troyva opens at your campus.
            </div>
          </div>
        )}

        <div className="mono mono-sm" style={{ marginTop: 28, color: 'var(--cream-quiet)' }}>
          Your data is never sold · ever
        </div>

        {/* Roadmap */}
        <div style={{ marginTop: 120, maxWidth: 720, margin: '120px auto 0' }}>
          <div className="gold-rule" style={{ marginBottom: 28 }} />
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24,
          }}>
            {[
              { label: 'Dhaka · Fall 2026', active: true },
              { label: 'India · 2027', active: false },
              { label: 'Southeast Asia · 2028', active: false },
            ].map((r, i) => (
              <div key={i} className="mono mono-sm" style={{
                color: r.active ? 'var(--gold)' : 'rgba(182,159,124,.6)',
                opacity: r.active ? 1 : 0.6,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}>
                {r.active && <span className="pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />}
                {r.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
