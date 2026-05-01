import React from 'react'
import { useReveal } from './lib'

// Block 3 — Three pillars
// 3.1 Verified identity (editorial), 3.2 TroyShield (cinematic), 3.3 Real campus (editorial)

export default function Pillars({ tweaks }) {
  return (
    <div id="product">
      <PillarVerified />
      <PillarTroyShield tweaks={tweaks} />
      <PillarRealCampus />
    </div>
  );
}

// ── 3.1 Verified ─────────────────────────────────────────────────────
function PillarVerified() {
  const ref = useReveal();
  return (
    <section ref={ref.ref} data-screen-label="03 Pillar — Verified" className="editorial editorial-bg" style={{
      position: 'relative', padding: '160px 0 160px', overflow: 'hidden',
    }}>
      <div className="grain grain-soft" />
      <div className="container" style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center',
      }}>
        <div>
          <div className="mono" style={{ color: 'var(--cream-dim)', marginBottom: 28 }}>
            The first promise · 01
          </div>
          <h3 className="display" style={{
            margin: 0,
            fontSize: 'clamp(34px, 4.4vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            textWrap: 'balance',
            opacity: ref.visible ? 1 : 0,
            transform: ref.visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity .9s ease, transform .9s ease',
          }}>
            On most apps, anyone can be anyone.{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              Here, you earn your name.
            </em>
          </h3>
          <p style={{
            marginTop: 36, maxWidth: 520, color: 'var(--cream-dim)',
            fontSize: 16, lineHeight: 1.7,
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .3s',
          }}>
            Every account on Troyva is verified against your university email — the same one your institution already trusts. No strangers in your feed. No catfishing. No scams. Just your campus, confirmed.
          </p>
        </div>

        {/* Stamp graphic — treated as a graphic accent */}
        <div style={{ position: 'relative', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ParchmentCard visible={ref.visible} />
          {/* Featured-video-style approach card overlay */}
          <div className="liquid-glass" style={{
            position: 'absolute', right: -72, bottom: 8, maxWidth: 240,
            borderRadius: 18, padding: '18px 20px',
            opacity: ref.visible ? 1 : 0, transform: ref.visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s ease .5s',
          }}>
            <div className="mono mono-sm" style={{ color: 'var(--cream-quiet)' }}>The first promise</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: 'var(--cream)' }}>
              One identity, anchored to the institution that already knows you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParchmentCard({ visible }) {
  return (
    <div style={{
      position: 'relative', width: 380, height: 420,
      transform: visible ? 'rotate(-2deg) translateY(0)' : 'rotate(-2deg) translateY(20px)',
      opacity: visible ? 1 : 0,
      transition: 'all 1.2s cubic-bezier(.2,.7,.2,1) .2s',
    }}>
      {/* Card */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(20,22,26,.95), rgba(10,12,16,.95))',
        border: '1px solid var(--rule)',
        boxShadow: '0 30px 80px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.04)',
        padding: '36px 28px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div>
          <div className="mono" style={{ color: 'var(--gold-soft)', fontSize: 9 }}>
            Student Identity Document
          </div>
          <div style={{ height: 1, background: 'var(--rule)', margin: '14px 0 22px' }} />
          <div style={{ display: 'flex', gap: 18 }}>
            {/* avatar placeholder */}
            <div style={{
              width: 72, height: 90,
              background: 'linear-gradient(135deg, rgba(201,164,90,.25), rgba(80,60,40,.4))',
              border: '1px solid var(--rule)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', left: '50%', top: 18, width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(201,164,90,.3)', transform: 'translateX(-50%)',
              }} />
              <div style={{
                position: 'absolute', left: '50%', top: 50, width: 50, height: 30, borderRadius: '50% 50% 0 0',
                background: 'rgba(201,164,90,.3)', transform: 'translateX(-50%)',
              }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div>
                <div className="mono-sm mono" style={{ color: 'var(--cream-quiet)' }}>Name</div>
                <div className="display" style={{ fontSize: 19, marginTop: 2 }}>Tahmid Rahman</div>
              </div>
              <div>
                <div className="mono-sm mono" style={{ color: 'var(--cream-quiet)' }}>Institution</div>
                <div style={{ fontSize: 13, marginTop: 2 }}>North South University</div>
              </div>
              <div>
                <div className="mono-sm mono" style={{ color: 'var(--cream-quiet)' }}>Cohort</div>
                <div style={{ fontSize: 13, marginTop: 2 }}>CSE · 2027</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="mono" style={{ color: 'var(--cream-quiet)', fontSize: 9 }}>
            ISSUED · 04.2026
          </div>
          <div className="stamp">
            <CheckMark />
            Verified by your university
          </div>
        </div>
      </div>
      {/* Tab edge */}
      <div style={{
        position: 'absolute', top: 14, right: -8, width: 16, height: 56,
        background: 'rgba(201,164,90,.15)', borderLeft: '1px solid var(--gold-soft)',
      }} />
    </div>
  );
}

function CheckMark() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── 3.2 TroyShield (cinematic) ───────────────────────────────────────
function PillarTroyShield({ tweaks }) {
  const ref = useReveal();
  const rubyOpacity = { low: 0.4, medium: 0.75, high: 1.1 }[tweaks.rubyIntensity] || 0.75;
  return (
    <section id="safety" ref={ref.ref} data-screen-label="04 Pillar — TroyShield" style={{
      position: 'relative', minHeight: '100vh',
      padding: '180px 0 200px', overflow: 'hidden',
      background: 'var(--ink)',
    }}>
      <div className="atmos-shield" style={{ opacity: rubyOpacity }} />
      <div className="grain" />
      {/* Top + bottom seams to merge with editorial */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 0, height: 200,
        background: 'linear-gradient(180deg, var(--base), transparent)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 200,
        background: 'linear-gradient(0deg, var(--base), transparent)', pointerEvents: 'none'
      }} />

      <div className="container" style={{
        position: 'relative', zIndex: 2,
        display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 96, alignItems: 'center'
      }}>
        <div>
          <div className="mono" style={{ color: 'var(--gold)', marginBottom: 32 }}>
            TroyShield · the peak
          </div>
          <h3 className="display" style={{
            margin: 0,
            fontSize: 'clamp(44px, 7vw, 110px)',
            lineHeight: 0.96,
            letterSpacing: '-0.025em',
            opacity: ref.visible ? 1 : 0,
            transform: ref.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1.1s cubic-bezier(.2,.7,.2,1)',
          }}>
            <span style={{ display: 'block' }}>The walk home</span>
            <span style={{ display: 'block' }}>shouldn't be</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--gold)' }}>the hard part.</span>
          </h3>
          <p style={{
            marginTop: 36, maxWidth: 520,
            fontSize: 16, lineHeight: 1.7, color: 'var(--cream-dim)',
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .4s',
          }}>
            Safety isn't a feature on Troyva. It's the foundation. One tap shares your live location with your trusted circle, alerts the nearest Campus Guardian, and starts a 30-second recording. Full shutdown when you arrive. Privacy-first, always.
          </p>
          <div className="mono" style={{
            color: 'var(--gold)', marginTop: 36,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .8s',
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold-soft)' }} />
            Built privacy-first
          </div>
          {/* Strategy/Craft-style tag chip pair */}
          <div style={{
            marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap',
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease 1s',
          }}>
            {['Live location · trusted circle', 'Campus Guardian alert', '30-second recording', 'Auto-shutdown'].map((c) => (
              <span key={c} className="liquid-glass" style={{
                padding: '7px 12px', borderRadius: 999, fontSize: 11,
                color: 'var(--cream-dim)', fontFamily: 'var(--mono)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: 540, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldDevice visible={ref.visible} />
        </div>
      </div>
    </section>
  );
}

function ShieldDevice({ visible }) {
  const [seconds, setSeconds] = React.useState(30);
  React.useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setSeconds((s) => (s <= 1 ? 30 : s - 1)), 1000);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div className="liquid-glass" style={{
      width: 320, height: 540, borderRadius: 42,
      padding: 28,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(.98)',
      opacity: visible ? 1 : 0,
      transition: 'all 1.2s cubic-bezier(.2,.7,.2,1) .2s',
      display: 'flex', flexDirection: 'column', gap: 24,
    }}>
      {/* Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="mono" style={{ color: 'var(--cream-dim)', fontSize: 9 }}>TROYSHIELD</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ruby)', boxShadow: '0 0 10px var(--ruby)' }} />
          <span className="mono" style={{ fontSize: 9, color: 'var(--ruby-soft)' }}>LIVE</span>
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{
        position: 'relative', flex: 1, borderRadius: 18, overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 60%, rgba(184,51,61,.18), transparent 60%), linear-gradient(135deg, #0A1018, #06090E)',
        border: '1px solid rgba(255,255,255,.06)',
      }}>
        {/* faux streets */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 260 320" preserveAspectRatio="none">
          <g stroke="rgba(230,226,210,.08)" strokeWidth="1" fill="none">
            <path d="M0 80 Q130 40 260 90" />
            <path d="M0 160 Q120 200 260 150" />
            <path d="M0 240 L260 220" />
            <path d="M60 0 Q40 160 80 320" />
            <path d="M180 0 Q220 160 200 320" />
          </g>
          <g stroke="rgba(201,164,90,.5)" strokeWidth="1.5" strokeDasharray="3 4" fill="none">
            <path d="M40 280 Q90 220 130 180 Q170 140 220 60" />
          </g>
        </svg>
        {/* live dot */}
        <div style={{
          position: 'absolute', left: '32%', top: '74%', width: 14, height: 14, borderRadius: '50%',
          background: 'var(--ruby)', boxShadow: '0 0 0 4px rgba(184,51,61,.25), 0 0 24px var(--ruby)',
        }} className="pulse" />
        {/* destination */}
        <div style={{
          position: 'absolute', right: '20%', top: '14%', width: 10, height: 10, borderRadius: '50%',
          background: 'var(--gold)', boxShadow: '0 0 16px var(--gold)',
        }} />
        {/* label */}
        <div style={{ position: 'absolute', left: 16, top: 16 }}>
          <div className="mono" style={{ fontSize: 9, color: 'var(--cream-dim)' }}>SHARING WITH</div>
          <div style={{ fontSize: 13, marginTop: 4 }}>Trusted circle · 4</div>
        </div>
      </div>

      {/* Recording bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px', borderRadius: 14, border: '1px solid var(--rule)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ruby)' }} />
          <span className="mono" style={{ fontSize: 9, color: 'var(--cream-dim)' }}>RECORDING</span>
        </div>
        <span className="mono" style={{ color: 'var(--gold)', fontVariantNumeric: 'tabular-nums' }}>00:{String(seconds).padStart(2, '0')}</span>
      </div>

      <button className="btn-glass" style={{ justifyContent: 'center', borderColor: 'rgba(184,51,61,.45)', color: 'var(--gold)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ruby)' }} />
        Shield Active · End when home
      </button>
    </div>
  );
}

// ── 3.3 Real campus ──────────────────────────────────────────────────
function PillarRealCampus() {
  const ref = useReveal();
  return (
    <section id="community" ref={ref.ref} data-screen-label="05 Pillar — Real campus" className="editorial editorial-bg" style={{
      position: 'relative', padding: '180px 0 160px', overflow: 'hidden',
    }}>
      <div className="grain grain-soft" />
      <div className="container" style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center'
      }}>

        <div style={{ order: 1 }}>
          <CampusBoard visible={ref.visible} />
        </div>

        <div style={{ order: 2 }}>
          <div className="mono" style={{ color: 'var(--cream-dim)', marginBottom: 28 }}>
            Your campus, online · 02
          </div>
          <h3 className="display" style={{
            margin: 0,
            fontSize: 'clamp(34px, 4.4vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            textWrap: 'balance',
            opacity: ref.visible ? 1 : 0,
            transform: ref.visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 1s ease',
          }}>
            Everything that should have been on Discord.{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              With names attached.
            </em>
          </h3>
          <p style={{
            marginTop: 36, maxWidth: 520, color: 'var(--cream-dim)',
            fontSize: 16, lineHeight: 1.7,
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .3s',
          }}>
            Study groups linked to your actual courses. AI-matched friends and study partners — no swiping, no dating mechanics. A verified student marketplace with zero scams. Live timetables, peer notes, and a campus bulletin that's actually about your campus.
          </p>
          <div className="mono" style={{
            color: 'var(--gold)', marginTop: 36,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .6s',
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--gold-soft)' }} />
            No bots. No strangers. Ever.
          </div>
        </div>
      </div>
    </section>
  );
}

function CampusBoard({ visible }) {
  const items = [
    { tag: 'Study group · CSE 327', title: 'Algorithms · midterm prep', who: '6 verified · NSU', accent: 'var(--gold)' },
    { tag: 'Marketplace', title: 'Wacom Intuos S — barely used', who: '৳ 4,200 · IUT', accent: 'var(--cream)' },
    { tag: 'Match · Study partner', title: 'Looking for: Linear Algebra', who: 'AI-matched · 3 today', accent: 'var(--cream)' },
    { tag: 'Bulletin', title: 'Free shuttle · Bashundhara → Banani', who: 'Posted by DU senate', accent: 'var(--cream)' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%', maxWidth: 460 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          padding: '20px 22px',
          border: '1px solid var(--rule)',
          background: 'rgba(255,255,255,.015)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: `all .8s cubic-bezier(.2,.7,.2,1) ${i * 110}ms`,
          display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 16, alignItems: 'center',
        }}>
          <div style={{ width: 6, height: 36, background: it.accent, opacity: .6 }} />
          <div>
            <div className="mono" style={{ color: 'var(--cream-quiet)', fontSize: 9 }}>{it.tag}</div>
            <div className="display" style={{ fontSize: 19, marginTop: 4, lineHeight: 1.2 }}>{it.title}</div>
            <div style={{ fontSize: 12, color: 'var(--cream-dim)', marginTop: 4 }}>{it.who}</div>
          </div>
          <div style={{
            width: 22, height: 22, borderRadius: '50%',
            border: '1px solid var(--gold-soft)', color: 'var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
          }}>✓</div>
        </div>
      ))}
    </div>
  );
}
