import React from 'react'

export function useDhakaTime() {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  // Dhaka is UTC+6
  const utc = t.getTime() + t.getTimezoneOffset() * 60000;
  const d = new Date(utc + 6 * 3600 * 1000);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  return { hh, mm, ss, full: `${hh}:${mm}:${ss}` };
}

export function useCounter({ start = 247, speedSec = 18, enabled = true }) {
  const [n, setN] = React.useState(start);
  React.useEffect(() => {
    if (!enabled) return;
    const id = setInterval(() => {
      setN((x) => x + 1);
    }, speedSec * 1000);
    return () => clearInterval(id);
  }, [speedSec, enabled]);
  return n;
}

export function useReveal(threshold = 0.25) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// Word-by-word blur reveal
export function BlurWords({ text, delay = 0, gold = false, italic = false, perWord = 70, as = 'span' }) {
  const Tag = as;
  const str = Array.isArray(text) ? text.join('') : String(text ?? '');
  const words = str.split(' ');
  return (
    <Tag style={{ display: 'inline' }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            opacity: 0,
            animation: `blurUp 0.9s cubic-bezier(.2,.7,.2,1) ${delay + i * perWord}ms forwards`,
            color: gold ? 'var(--gold)' : undefined,
            fontStyle: italic ? 'italic' : undefined,
            marginRight: '0.28em',
          }}
        >{w}</span>
      ))}
    </Tag>
  );
}

// Wipe-up reveal (curtain)
export function WipeLine({ children, delay = 0, italic = false, gold = false }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden' }}>
      <span style={{
        display: 'inline-block',
        animation: `wipeUp 0.9s cubic-bezier(.2,.7,.2,1) ${delay}ms both`,
        color: gold ? 'var(--gold)' : undefined,
        fontStyle: italic ? 'italic' : undefined,
      }}>{children}</span>
    </span>
  );
}

// Type-then-morph (mono → display)
export function TypeMorph({ text, delay = 0, italic = false, gold = false }) {
  const [phase, setPhase] = React.useState(0); // 0 typing, 1 morphed
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const startT = setTimeout(() => {
      let i = 0;
      const tick = () => {
        i++;
        setCount(i);
        if (i < text.length) raf = setTimeout(tick, 28);
        else setTimeout(() => setPhase(1), 240);
      };
      tick();
    }, delay);
    return () => { clearTimeout(startT); clearTimeout(raf); };
  }, [text, delay]);
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: phase === 0 ? 'var(--mono)' : 'var(--display)',
      fontStyle: phase === 1 && italic ? 'italic' : 'normal',
      color: phase === 1 && gold ? 'var(--gold)' : 'var(--cream)',
      transition: 'font-family 0.4s, color 0.5s, font-style 0.4s, letter-spacing 0.5s',
      letterSpacing: phase === 0 ? '0.04em' : '-0.01em',
      textTransform: phase === 0 ? 'uppercase' : 'none',
      fontSize: phase === 0 ? '0.92em' : '1em',
    }}>
      {phase === 0 ? text.slice(0, count) : text}
      {phase === 0 && count < text.length && (
        <span style={{ borderLeft: '2px solid var(--gold)', marginLeft: 2, animation: 'pulseDot 1s infinite' }}>&nbsp;</span>
      )}
    </span>
  );
}
