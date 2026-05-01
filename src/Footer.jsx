import React from 'react'
import { useDhakaTime, useCounter } from './lib'
import { Mark } from './Hero'

// Block 6 — editorial footer
export default function Footer({ tweaks }) {
  const { full } = useDhakaTime();
  const count = useCounter({ start: 247, speedSec: tweaks.counterSpeed });
  return (
    <footer className="editorial" data-screen-label="08 Footer" style={{
      position: 'relative', borderTop: '1px solid var(--rule)',
      padding: '64px 0 28px',
    }}>
      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr auto', gap: 48, alignItems: 'start',
      }}>
        <div>
          <Mark />
          <div className="mono mono-sm" style={{ color: 'var(--cream-dim)', marginTop: 18 }}>
            Troyva Technologies · Dhaka, Bangladesh
          </div>
          <div className="mono mono-sm" style={{ color: 'var(--cream-quiet)', marginTop: 8, fontVariantNumeric: 'tabular-nums' }}>
            <span style={{ color: 'var(--gold-soft)' }}>{full}</span> · local
          </div>
        </div>

        <FooterCol title="Platform" links={['Verified Identity', 'Community', 'Safety', 'Universities']} />
        <FooterCol title="Company" links={['About', 'Founders', 'Press', 'Contact']} />
        <FooterCol title="Legal" links={['Privacy', 'Terms', 'Community Guidelines', 'Data Policy']} />

        <div className="mono mono-sm" style={{ color: 'var(--cream-dim)', textAlign: 'right' }}>
          <div>Waitlist</div>
          <div style={{ color: 'var(--gold)', fontVariantNumeric: 'tabular-nums', fontSize: 14, marginTop: 4 }}>{count}</div>
          <div style={{ marginTop: 4 }}>updated now</div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 56 }}>
        <div className="rule" />
        <div className="mono mono-sm" style={{
          marginTop: 22, color: 'var(--cream-quiet)', textAlign: 'center', opacity: 0.7,
        }}>
          © 2026 Troyva · Built for the world's students · Founded April 2026
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mono mono-sm" style={{ color: 'var(--cream-quiet)', marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) => (
          <li key={l}>
            <a href="#" style={{
              color: 'var(--cream-dim)', textDecoration: 'none', fontSize: 13,
              transition: 'color .2s',
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cream)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream-dim)'}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
