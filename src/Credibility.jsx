import React from 'react'
import { useWaitlistCount, useReveal } from './lib'

// Block 4 — Credibility (one line)
export default function Credibility({ tweaks, responseCount }) {
  const count = useWaitlistCount(responseCount);
  const ref = useReveal();
  return (
    <section ref={ref.ref} data-screen-label="06 Credibility" className="editorial editorial-bg" style={{
      position: 'relative', padding: '120px 0 120px', textAlign: 'center', overflow: 'hidden',
    }}>
      <div className="grain grain-soft" />
      <div className="container-narrow" style={{ position: 'relative', zIndex: 1 }}>
        <div className="display" style={{
          fontSize: 'clamp(26px, 3.4vw, 44px)',
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease',
        }}>
          <span className="mono" style={{
            color: 'var(--gold)', fontSize: 'inherit',
            fontFamily: 'var(--mono)',
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '0.02em',
            textTransform: 'none',
            display: 'inline-flex', alignItems: 'baseline', gap: 10,
          }}>
            <span className="pulse" style={{
              width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)',
              alignSelf: 'center', boxShadow: '0 0 12px var(--gold)',
            }} />
            {count}
          </span>{' '}
          verified students already on the list.{' '}
          <em style={{ color: 'var(--cream-dim)', fontStyle: 'italic' }}>Updated now.</em>
        </div>
        <div className="mono mono-sm" style={{
          marginTop: 32, color: 'var(--cream-quiet)', display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap',
          opacity: ref.visible ? 1 : 0, transition: 'opacity 1s ease .3s',
        }}>
          <span>Whitelisted</span>
          <span>NSU</span>
          <span>·</span>
          <span>DU</span>
          <span>·</span>
          <span>BRAC</span>
          <span>·</span>
          <span>IUT</span>
          <span>·</span>
          <span>BAUET</span>
        </div>
      </div>
    </section>
  );
}
