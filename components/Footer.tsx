
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
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
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
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">{t.product}</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.how}</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.plat}</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.price}</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.api}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">{t.legal}</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.imp}</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.tos}</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">{t.cookies}</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2024 AUTOAPPLY INTELLIGENCE GMBH. {t.madeIn}</p>
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
