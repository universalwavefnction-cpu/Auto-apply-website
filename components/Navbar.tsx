import React from 'react';
import { Language } from '../App';

interface NavbarProps {
  scrolled: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, lang, setLang }) => {
  const t = {
    de: {
      features: 'Features',
      download: 'Download',
      pricing: 'Preise',
      about: 'Über uns',
      start: 'Get Started'
    },
    en: {
      features: 'Features',
      download: 'Download',
      pricing: 'Pricing',
      about: 'About Us',
      start: 'Get Started'
    }
  }[lang];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center shadow-lg shadow-amber-500/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight">AutoApply</span>
            <span className="block text-[10px] text-amber-600 font-bold uppercase leading-none tracking-widest">Intelligence</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-amber-600 transition-colors">{t.features}</a>
          <a href="#download" className="hover:text-amber-600 transition-colors">{t.download}</a>
          <a href="#pricing" className="hover:text-amber-600 transition-colors">{t.pricing}</a>
          <a href="#about" className="hover:text-amber-600 transition-colors">{t.about}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setLang('de')}
              className={`px-2 py-1 text-[10px] font-bold rounded ${lang === 'de' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded ${lang === 'en' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>
          <a href="#download" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all">
            {t.start}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;