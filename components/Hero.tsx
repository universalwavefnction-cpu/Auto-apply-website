import React, { useState, useRef } from 'react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
                <div className="relative bg-black rounded-t-2xl overflow-hidden aspect-[16/10] border border-white/5 group/video">
                  {/* Demo Video Player */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/demo-poster.png"
                    onClick={togglePlay}
                  >
                    <source src="/demo.mp4" type="video/mp4" />
                    <source src="/demo.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-10">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all shadow-lg"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all shadow-lg"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Center Play Button (when paused) */}
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                      onClick={togglePlay}
                    >
                      <div className="w-20 h-20 rounded-full bg-amber-500/90 backdrop-blur-sm flex items-center justify-center text-white shadow-2xl shadow-amber-500/30 hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

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