import React from 'react'
import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSlider, TweakToggle } from './tweaks-panel'
import Hero from './Hero'
import ValueProp from './ValueProp'
import Pillars from './Pillars'
import Credibility from './Credibility'
import Conversion from './Conversion'
import Footer from './Footer'

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cinematicBase": "obsidian",
  "goldHue": "antique",
  "rubyIntensity": "medium",
  "heroReveal": "blur",
  "grainOpacity": 18,
  "displaySerif": "instrument",
  "showTicker": true,
  "counterSpeed": 18,
  "bodyFont": "inter"
}/*EDITMODE-END*/;

const BASE_MAP = {
  obsidian: { ink: '#060608', heroBg: '#18061A' },
  midnight: { ink: '#000000', heroBg: '#0B040E' },
  aubergine:{ ink: '#0A0309', heroBg: '#251320' },
};
const GOLD_MAP = {
  antique:    { gold: '#C9A84C', soft: 'rgba(201,168,76,.72)' },
  champagne:  { gold: '#D9C07A', soft: 'rgba(217,192,122,.72)' },
  brass:      { gold: '#B8923A', soft: 'rgba(184,146,58,.72)' },
};
const SERIF_MAP = {
  instrument: '"Instrument Serif", "EB Garamond", serif',
  fraunces: '"Fraunces", "EB Garamond", serif',
  garamond: '"EB Garamond", "Instrument Serif", serif',
};
const BODY_MAP = {
  inter: '"Inter", ui-sans-serif, system-ui, sans-serif',
  almarai: '"Almarai", "Inter", ui-sans-serif, sans-serif',
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to CSS variables
  React.useEffect(() => {
    const r = document.documentElement.style;
    const base = BASE_MAP[t.cinematicBase] || BASE_MAP.obsidian;
    const gold = GOLD_MAP[t.goldHue] || GOLD_MAP.antique;
    r.setProperty('--base', base.ink);
    r.setProperty('--ink', base.ink);
    r.setProperty('--surface', base.heroBg);
    r.setProperty('--navy', base.heroBg);
    r.setProperty('--gold', gold.gold);
    r.setProperty('--gold-soft', gold.soft);
    r.setProperty('--display', SERIF_MAP[t.displaySerif] || SERIF_MAP.instrument);
    r.setProperty('--body', BODY_MAP[t.bodyFont] || BODY_MAP.inter);
    r.setProperty('--grain-opacity', String(t.grainOpacity / 100));
  }, [t]);

  return (
    <>
      <Hero tweaks={t} />
      <div className="seam" />
      <ValueProp />
      <Pillars tweaks={t} />
      <Credibility tweaks={t} />
      <Conversion tweaks={t} />
      <Footer tweaks={t} />

      <TweaksPanel title="Troyva · Tweaks">
        <TweakSection label="Atmosphere" />
        <TweakRadio label="Cinematic base" value={t.cinematicBase}
          options={[{value:'obsidian',label:'Obsidian'},{value:'midnight',label:'Midnight'},{value:'aubergine',label:'Aubergine'}]}
          onChange={(v) => setTweak('cinematicBase', v)} />
        <TweakRadio label="Gold hue" value={t.goldHue}
          options={[{value:'antique',label:'Antique'},{value:'champagne',label:'Champ.'},{value:'brass',label:'Brass'}]}
          onChange={(v) => setTweak('goldHue', v)} />
        <TweakRadio label="Ruby on TroyShield" value={t.rubyIntensity}
          options={[{value:'low',label:'Low'},{value:'medium',label:'Med'},{value:'high',label:'High'}]}
          onChange={(v) => setTweak('rubyIntensity', v)} />
        <TweakSlider label="Grain / noise" value={t.grainOpacity} min={0} max={50} unit="%"
          onChange={(v) => setTweak('grainOpacity', v)} />

        <TweakSection label="Type" />
        <TweakRadio label="Display serif" value={t.displaySerif}
          options={[{value:'instrument',label:'Instr.'},{value:'fraunces',label:'Fraunces'},{value:'garamond',label:'Garamond'}]}
          onChange={(v) => setTweak('displaySerif', v)} />
        <TweakRadio label="Body" value={t.bodyFont}
          options={[{value:'inter',label:'Inter'},{value:'almarai',label:'Almarai'}]}
          onChange={(v) => setTweak('bodyFont', v)} />

        <TweakSection label="Hero" />
        <TweakRadio label="Reveal" value={t.heroReveal}
          options={[{value:'blur',label:'Blur'},{value:'wipe',label:'Wipe'},{value:'morph',label:'Morph'}]}
          onChange={(v) => setTweak('heroReveal', v)} />
        <TweakToggle label="Live ticker" value={t.showTicker}
          onChange={(v) => setTweak('showTicker', v)} />
        <TweakSlider label="Counter speed" value={t.counterSpeed} min={3} max={60} unit="s"
          onChange={(v) => setTweak('counterSpeed', v)} />
      </TweaksPanel>
    </>
  );
}
