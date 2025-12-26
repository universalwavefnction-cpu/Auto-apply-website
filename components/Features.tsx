
import React from 'react';
import { Language } from '../App';

interface FeaturesProps {
  lang: Language;
}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = {
    de: {
      badge: 'Warum AutoApply?',
      title: 'Automatisierung auf Experten-Niveau',
      desc: 'Vergessen Sie mühsame Formulare. Unsere KI übernimmt die Schwerarbeit, während Sie sich auf die Vorbereitung Ihrer Vorstellungsgespräche konzentrieren.',
      features: [
        {
          title: 'Lokale Datenspeicherung',
          desc: 'Höchster Datenschutz: Ihre Zugangsdaten und CV-Details werden ausschließlich verschlüsselt auf Ihrem lokalen Gerät gespeichert.'
        },
        {
          title: 'KI-Formularausfüllung',
          desc: 'Beantwortet Bewerbungsfragen automatisch mit KI – basierend auf Ihrem hinterlegten Profil.'
        },
        {
          title: 'Automatisierte Bewerbungen',
          desc: 'Klickt automatisch auf "Bewerben" und füllt alle notwendigen Formularfelder präzise aus.'
        },
        {
          title: 'Firmen-Blacklist',
          desc: 'Überspringen Sie bestimmte Unternehmen automatisch – inklusive Ihres aktuellen Arbeitgebers.'
        },
        {
          title: 'Xing & LinkedIn integration',
          desc: 'Native Unterstützung der größten deutschsprachigen Karrierenetzwerke.'
        },
        {
          title: 'Headless-Modus',
          desc: 'Bewirbt sich im Hintergrund, ohne ein Browserfenster zu öffnen – arbeiten Sie ungestört weiter.'
        }
      ]
    },
    en: {
      badge: 'Why AutoApply?',
      title: 'Expert-Level Automation',
      desc: 'Forget tedious forms. Our AI takes care of the heavy lifting, so you can focus on preparing for your interviews.',
      features: [
        {
          title: 'Local Data Storage',
          desc: 'Maximum privacy: Your credentials and CV details are stored exclusively encrypted on your local device.'
        },
        {
          title: 'AI Form Filling',
          desc: 'Automatically answers application questions with AI – based on your stored profile.'
        },
        {
          title: 'Automated Applications',
          desc: 'Automatically clicks "Apply" and fills in all required form fields with precision.'
        },
        {
          title: 'Company Blacklist',
          desc: 'Automatically skip specific companies – including your current employer.'
        },
        {
          title: 'Xing & LinkedIn Integration',
          desc: 'Native support for the largest German-speaking career networks.'
        },
        {
          title: 'Headless Mode',
          desc: 'Applies in the background without opening a browser window – continue working undisturbed.'
        }
      ]
    }
  }[lang];

  const icons = [
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  ];

  return (
    <section className="py-24 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">{t.badge}</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-6">{t.title}</h3>
          <p className="text-slate-600 text-lg">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors mb-6">
                {icons[i]}
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
