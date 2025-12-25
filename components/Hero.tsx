import React from 'react';
import { Language } from '../App';
import DashboardMock from './DashboardMock';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const platforms = [
    { name: 'StepStone', color: 'bg-[#FF9B00]', icon: 'S', active: true },
    { name: 'LinkedIn', color: 'bg-[#0077B5]', icon: 'L', active: true },
    { name: 'Xing', color: 'bg-[#006567]', icon: 'X', active: true },
    { name: 'Indeed', color: 'bg-[#2164f3]', icon: 'i', active: false },
    { name: 'Forms', color: 'bg-slate-700', icon: 'W', active: false },
  ];

  const t = {
    de: {
      titlePart1: 'Ihre Jobsuche auf ',
      titlePart2: 'Autopilot.',
      desc: 'AutoApply Intelligence bewirbt Sie automatisch. Präzise, diskret und 24/7.',
      privacyNote: '🔒 Ihre Daten verlassen nie Ihr Gerät. Lokale Speicherung garantiert.',
      cta: 'Jetzt Mission starten',
      social: 'Erfolgreiche Bewerber',
      integrationLabel: 'Unterstützte Netzwerke & Integrationen:',
      soon: 'Bald'
    },
    en: {
      titlePart1: 'Your job search on ',
      titlePart2: 'Autopilot.',
      desc: 'AutoApply Intelligence automatically applies for you. Precise, discreet, and 24/7.',
      privacyNote: '🔒 Your data never leaves your device. Guaranteed local storage.',
      cta: 'Start Mission Now',
      social: 'Successful applicants',
      integrationLabel: 'Supported networks & integrations:',
      soon: 'Soon'
    }
  }[lang];

  return (
    <section className="pt-28 pb-32 px-6 overflow-hidden bg-[#FCF9F4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-[#0A1128] leading-[1.05] tracking-tight">
              {t.titlePart1}<br />
              <span className="text-[#F59E0B]">{t.titlePart2}</span>
            </h1>
            
            <div className="space-y-5">
              <p className="text-lg text-[#4A5568] leading-relaxed max-w-lg font-medium">
                {t.desc}
              </p>
              <p className="text-sm font-bold text-[#10B981] flex items-center gap-2">
                <span className="text-base">🔒</span> {t.privacyNote.replace('🔒 ', '')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#download" className="bg-[#F59E0B] text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center">
                {t.cta}
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-200" alt="User" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna" className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-200" alt="User" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark" className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-200" alt="User" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#F1F5F9] flex items-center justify-center text-[10px] font-black text-[#64748B] shadow-sm">
                    +1.2k
                  </div>
                </div>
                <span className="text-xs font-bold text-[#94A3B8]">{t.social}</span>
              </div>
            </div>
          </div>

          {/* Realistic High-Fidelity Laptop Mockup */}
          <div className="lg:col-span-7 relative group perspective-2000 flex justify-center lg:justify-end">
            <div className="absolute -inset-20 bg-amber-500/5 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
            
            <div className="relative transition-all duration-1000 transform group-hover:rotate-y-[-3deg] group-hover:rotate-x-[1deg] w-full max-w-[720px]">
              {/* LID (Screen) */}
              <div className="relative mx-auto w-full bg-[#222] rounded-t-3xl p-2.5 border border-white/10 overflow-hidden ring-1 ring-white/5">
                <div className="relative bg-black rounded-t-2xl overflow-hidden aspect-[16/10] border border-white/5">
                  <DashboardMock />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.85)] pointer-events-none"></div>
                </div>
              </div>

              {/* BASE */}
              <div className="relative w-[112%] -left-[6%] h-6 bg-gradient-to-b from-[#333] via-[#1a1a1a] to-[#050505] rounded-b-2xl border-x border-b border-white/10">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-white/10"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/40 rounded-b-lg border border-white/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Row */}
        <div className="pt-10 border-t border-slate-200/50">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">{t.integrationLabel}</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {platforms.map((p) => (
              <div key={p.name} className={`flex items-center gap-3 transition-all ${!p.active ? 'opacity-30' : 'opacity-60 hover:opacity-100'}`}>
                 <div className={`w-8 h-8 ${p.color} rounded-lg flex items-center justify-center text-white font-black text-sm relative`}>
                   {p.icon}
                   {!p.active && (
                     <span className="absolute -top-1.5 -right-2 bg-amber-500 text-[6px] px-1 py-0.5 rounded-full text-white font-black uppercase tracking-tighter ring-1 ring-white">
                       {t.soon}
                     </span>
                   )}
                 </div>
                 <span className="text-sm font-black tracking-tight text-[#0A1128]">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .perspective-2000 { perspective: 2000px; }
      `}</style>
    </section>
  );
};

export default Hero;