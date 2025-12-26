
import React, { useState } from 'react';
import { Language } from '../App';

interface DownloadProps {
  lang: Language;
}

const Download: React.FC<DownloadProps> = ({ lang }) => {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const startDownload = (platform: string) => {
    if (downloading) return;
    setDownloading(platform);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloading(null), 1500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const t = {
    de: {
      badge: 'Software Distribution',
      title: 'AutoApply Intelligence herunterladen',
      desc: 'Wählen Sie Ihre Plattform. Unsere Desktop-Anwendung bietet die beste Performance und garantiert, dass Ihre Daten niemals Ihr lokales Gerät verlassen.',
      v: 'Aktuelle Version: 1.2.4 (Build 892)',
      requirements: 'Systemanforderungen: Min. 4GB RAM, 200MB Speicherplatz.',
      historyTitle: 'Versionsverlauf',
      platforms: [
        {
          id: 'macos',
          name: 'macOS',
          icon: <path d="M17.05 20.28c-.96 0-1.76-.36-2.4-.36-.63 0-1.4.36-2.3.36-1.5 0-3.1-1.2-4-2.8-1.5-2.7-.4-6.4 1.3-8.1.9-1.1 1.9-1.8 3-1.8.8 0 1.5.3 2.1.3.6 0 1.5-.4 2.4-.4.8 0 2.2.3 3.1 1.5-.1.1-1.8 1.1-1.8 3.1 0 2.4 2.1 3.2 2.1 3.3-.1.2-.3.6-.6 1-.5.7-1 1.4-1.9 1.4zM15 4c0-1.1.9-2 2-2s1.8 1 1.8 1.8-1.1 1.8-1.8 2.1c-.2.1-.5.1-.8.1-1.1 0-1.2-1-1.2-2z" />,
          details: 'M1/M2/M3 & Intel (Universal Binary)',
          cta: 'Download .dmg'
        },
        {
          id: 'windows',
          name: 'Windows',
          icon: <path d="M3 12l8-1.15V3.5L3 4.63v7.37zm9-8.62v7.43l9-1.3V3L12 3.38zM3 12.85V20.2l8 1.13V13l-8-.15zm9 8.28l9-1.28V13.1l-9-.12v8.15z" />,
          details: 'Windows 10, 11 (Architecture x64)',
          cta: 'Download .exe'
        },
        {
          id: 'linux',
          name: 'Linux',
          icon: <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31c3.85-1.02 6.69-4.52 6.69-8.69 0-4.97-4.03-9-9-9zm0 2c3.87 0 7 3.13 7 7 0 3.18-2.12 5.85-5.02 6.74L12 19.71l-1.98-1.98C7.12 16.85 5 14.18 5 11c0-3.87 3.13-7 7-7z" />,
          details: 'AppImage, .deb, .rpm Packages',
          cta: 'Download .AppImage'
        }
      ],
      history: [
        { v: 'v1.2.4', date: 'Gestern', note: 'Performance-Verbesserungen für StepStone.' },
        { v: 'v1.2.3', date: '02. Feb 2024', note: 'Xing Easy-Apply Support hinzugefügt.' },
        { v: 'v1.2.0', date: '20. Jan 2024', note: 'Major Release: Neues Mission Control Dashboard.' }
      ]
    },
    en: {
      badge: 'Software Distribution',
      title: 'Download AutoApply Intelligence',
      desc: 'Select your platform. Our desktop application provides the best performance and guarantees your data never leaves your local device.',
      v: 'Latest Version: 1.2.4 (Build 892)',
      requirements: 'System Requirements: Min. 4GB RAM, 200MB storage.',
      historyTitle: 'Version History',
      platforms: [
        {
          id: 'macos',
          name: 'macOS',
          icon: <path d="M17.05 20.28c-.96 0-1.76-.36-2.4-.36-.63 0-1.4.36-2.3.36-1.5 0-3.1-1.2-4-2.8-1.5-2.7-.4-6.4 1.3-8.1.9-1.1 1.9-1.8 3-1.8.8 0 1.5.3 2.1.3.6 0 1.5-.4 2.4-.4.8 0 2.2.3 3.1 1.5-.1.1-1.8 1.1-1.8 3.1 0 2.4 2.1 3.2 2.1 3.3-.1.2-.3.6-.6 1-.5.7-1 1.4-1.9 1.4zM15 4c0-1.1.9-2 2-2s1.8 1 1.8 1.8-1.1 1.8-1.8 2.1c-.2.1-.5.1-.8.1-1.1 0-1.2-1-1.2-2z" />,
          details: 'M1/M2/M3 & Intel (Universal Binary)',
          cta: 'Download .dmg'
        },
        {
          id: 'windows',
          name: 'Windows',
          icon: <path d="M3 12l8-1.15V3.5L3 4.63v7.37zm9-8.62v7.43l9-1.3V3L12 3.38zM3 12.85V20.2l8 1.13V13l-8-.15zm9 8.28l9-1.28V13.1l-9-.12v8.15z" />,
          details: 'Windows 10, 11 (Architecture x64)',
          cta: 'Download .exe'
        },
        {
          id: 'linux',
          name: 'Linux',
          icon: <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31c3.85-1.02 6.69-4.52 6.69-8.69 0-4.97-4.03-9-9-9zm0 2c3.87 0 7 3.13 7 7 0 3.18-2.12 5.85-5.02 6.74L12 19.71l-1.98-1.98C7.12 16.85 5 14.18 5 11c0-3.87 3.13-7 7-7z" />,
          details: 'AppImage, .deb, .rpm Packages',
          cta: 'Download .AppImage'
        }
      ],
      history: [
        { v: 'v1.2.4', date: 'Yesterday', note: 'Performance optimizations for StepStone.' },
        { v: 'v1.2.3', date: 'Feb 02, 2024', note: 'Added Xing Easy-Apply support.' },
        { v: 'v1.2.0', date: 'Jan 20, 2024', note: 'Major Release: New Mission Control Dashboard.' }
      ]
    }
  }[lang];

  return (
    <section className="py-32 bg-[#FCF9F4] relative overflow-hidden" id="download">
      {/* Visual background elements to make it feel like a "page" */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[600px] bg-white pointer-events-none -skew-y-3 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Sidebar / Info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-block bg-amber-500/10 px-3 py-1 rounded-full">{t.badge}</span>
              <h2 className="text-5xl font-black tracking-tight text-[#0A1128] mb-8 leading-[1.1]">{t.title}</h2>
              <p className="text-[#4A5568] text-xl leading-relaxed font-medium mb-8">{t.desc}</p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.v}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.requirements}</span>
                </div>
              </div>
            </div>

            {/* Version History Table */}
            <div className="p-6 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl shadow-slate-200/50">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">{t.historyTitle}</h4>
              <div className="space-y-6">
                {t.history.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1"></div>
                      {i < t.history.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1"></div>}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-black text-[#0A1128]">{h.v}</span>
                        <span className="text-[10px] font-bold text-slate-300">{h.date}</span>
                      </div>
                      <p className="text-[11px] font-medium text-slate-500 leading-normal">{h.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
            {t.platforms.map((p) => (
              <div
                key={p.id}
                className={`bg-white p-10 rounded-[32px] flex flex-col items-start border-2 transition-all relative group overflow-hidden ${downloading === p.id ? 'border-amber-500 ring-4 ring-amber-500/5' : 'border-slate-50 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-500/10'}`}
              >
                {/* Visual feedback for clicking */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 overflow-hidden">
                  {downloading === p.id && (
                    <div
                      className="h-full bg-amber-500 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>

                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-500">
                  <svg className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    {p.icon}
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-[#0A1128] mb-3">{p.name}</h3>
                <p className="text-sm text-slate-400 font-bold mb-10 leading-relaxed uppercase tracking-tight">{p.details}</p>

                <button
                  onClick={() => startDownload(p.id)}
                  disabled={!!downloading}
                  className={`mt-auto w-full py-4 px-6 rounded-2xl font-black text-sm tracking-tight transition-all flex items-center justify-center gap-3 ${downloading === p.id
                      ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/40 translate-y-[-2px]'
                      : 'bg-[#0A1128] text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-2xl'
                    }`}
                >
                  {downloading === p.id ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {progress < 100 ? `${Math.round(progress)}%` : 'Done!'}
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {p.cta}
                    </>
                  )}
                </button>

                {/* Aesthetic flare */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-amber-500/5 transition-colors pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-24 p-12 bg-[#0A1128] rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-slate-900/30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="space-y-4 relative z-10 max-w-xl">
            <h4 className="text-white text-3xl font-black tracking-tight">{lang === 'de' ? 'Unternehmen & Teams?' : 'Enterprise & Teams?'}</h4>
            <p className="text-slate-400 text-lg leading-relaxed">{lang === 'de' ? 'Verwalten Sie mehrere Profile? Wir bieten Multi-Agent-Lösungen für Headhunter und HR-Agenturen an.' : 'Managing multiple profiles? We offer multi-agent solutions for headhunters and HR agencies.'}</p>
          </div>
          <button className="bg-amber-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-amber-500/20 hover:bg-amber-400 hover:scale-105 transition-all shrink-0 relative z-10">
            {lang === 'de' ? 'Kontakt aufnehmen' : 'Contact Sales'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
