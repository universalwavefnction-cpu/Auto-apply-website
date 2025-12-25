
import React from 'react';
import { Language } from '../App';

interface PlatformsProps {
  lang: Language;
}

const Platforms: React.FC<PlatformsProps> = ({ lang }) => {
  const platforms = [
    { name: 'StepStone', color: 'bg-[#FF9B00]', icon: 'S', active: true },
    { name: 'LinkedIn', color: 'bg-[#0077B5]', icon: 'L', active: true },
    { name: 'Xing', color: 'bg-[#006567]', icon: 'X', active: true },
    { name: 'Indeed', color: 'bg-[#2164f3]', icon: 'i', active: false },
    { name: 'Direct Web Forms', color: 'bg-slate-700', icon: 'W', active: false },
  ];

  // Fix: Restructured translation object so it correctly returns an object with title and soon properties when indexed by lang
  const t = {
    de: {
      title: 'Integrationen für den DACH-Markt',
      soon: 'Demnächst'
    },
    en: {
      title: 'Integrations for the DACH market',
      soon: 'Soon'
    }
  }[lang];

  return (
    <section className="py-20 border-y border-slate-100 bg-white" id="platforms">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">{t.title}</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all">
          {platforms.map((p) => (
            <div key={p.name} className={`flex items-center gap-4 transition-all group ${!p.active ? 'opacity-40' : 'opacity-80 hover:opacity-100 hover:scale-105'}`}>
               <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-current/10 relative`}>
                 {p.icon}
                 {!p.active && (
                   <span className="absolute -top-2 -right-4 bg-amber-500 text-[8px] px-1.5 py-0.5 rounded-full text-white font-black uppercase tracking-tighter ring-2 ring-white">
                     {t.soon}
                   </span>
                 )}
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-black tracking-tight text-[#0A1128]">{p.name}</span>
                 {!p.active && <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.soon}</span>}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;