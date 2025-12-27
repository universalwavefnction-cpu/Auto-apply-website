
import React from 'react';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = {
    de: {
      desc: 'Die Zukunft der Jobsuche in Deutschland. Automatisierte Bewerbungsprozesse mit künstlicher Intelligenz.',
      product: 'Produkt',
      how: 'Funktionsweise',
      plat: 'Plattformen',
      price: 'Preise',
      api: 'API',
      legal: 'Rechtliches',
      imp: 'Impressum',
      privacy: 'Datenschutz',
      tos: 'AGB',
      cookies: 'Cookie-Richtlinien',
      madeIn: 'MADE IN GERMANY.'
    },
    en: {
      desc: 'The future of job searching in Germany. Automated application processes with artificial intelligence.',
      product: 'Product',
      how: 'How it works',
      plat: 'Platforms',
      price: 'Pricing',
      api: 'API',
      legal: 'Legal',
      imp: 'Imprint',
      privacy: 'Privacy Policy',
      tos: 'Terms of Service',
      cookies: 'Cookie Policy',
      madeIn: 'MADE IN GERMANY.'
    }
  }[lang];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-1 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">AutoApply Intelligence</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              {t.desc}
            </p>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2025 AUTOAPPLY INTELLIGENCE GMBH. {t.madeIn}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
