import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MissionControlPreview from './components/MissionControlPreview';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Download from './components/Download';

export type Language = 'de' | 'en';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('de');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    de: {
      ctaTitle: 'Bereit für Ihren nächsten Karriereschritt?',
      ctaDesc: 'Schließen Sie sich hunderten Fachkräften an, die ihre Jobsuche bereits automatisiert haben.',
      ctaStart: 'Kostenlos Starten',
      ctaDemo: 'Demo anfordern'
    },
    en: {
      ctaTitle: 'Ready for your next career move?',
      ctaDesc: 'Join hundreds of professionals who have already automated their job search.',
      ctaStart: 'Start for Free',
      ctaDemo: 'Request Demo'
    }
  }[lang];

  return (
    <div className="min-h-screen gradient-bg text-slate-900 scroll-smooth">
      <Navbar scrolled={scrolled} lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Download lang={lang} />
        <MissionControlPreview lang={lang} />
        <Features lang={lang} />
        <Stats lang={lang} />
        <section className="py-24 bg-[#111] text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#download" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20">
                {t.ctaStart}
              </a>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold transition-all">
                {t.ctaDemo}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;