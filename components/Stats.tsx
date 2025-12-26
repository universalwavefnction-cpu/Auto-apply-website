
import React from 'react';
import { Language } from '../App';

interface StatsProps {
  lang: Language;
}

const Stats: React.FC<StatsProps> = ({ lang }) => {
  const t = {
    de: {
      time: 'Zeit gespart',
      interviews: 'Mehr Interviews',
      apps: 'Bewerbungen / Tag',
      agent: 'Aktiver Agent'
    },
    en: {
      time: 'Time saved',
      interviews: 'More interviews',
      apps: 'Applications / Day',
      agent: 'Active Agent'
    }
  }[lang];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-5xl font-bold text-slate-900 tracking-tighter">85%</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.time}</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-amber-500 tracking-tighter">4.2x</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.interviews}</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-slate-900 tracking-tighter">95-100</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.apps}</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-bold text-slate-900 tracking-tighter">24/7</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.agent}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
