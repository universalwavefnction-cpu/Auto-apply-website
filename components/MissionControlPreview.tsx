
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../App';

interface MissionControlPreviewProps {
  lang: Language;
}

type ViewMode = 'log' | 'video';

const MissionControlPreview: React.FC<MissionControlPreviewProps> = ({ lang }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('log');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = {
    de: {
      title: 'Mission Control für Ihre Karriere',
      desc: 'Behalten Sie die volle Kontrolle. Wechseln Sie zwischen dem technischen Log-Feed und der Video-Live-Ansicht Ihrer automatisierten Bewerbungen.',
      items: [
        'Live Video-Übertragung',
        'Detaillierte Prozess-Logs',
        'Privacy-First Verschlüsselung',
        'Zero-Latency Überwachung'
      ],
      logLabel: 'DAEMON-LOG',
      videoLabel: 'VIDEO-WALKTHROUGH',
      viewLabel: 'ANSICHT WÄHLEN'
    },
    en: {
      title: 'Mission Control for your career',
      desc: 'Stay in full control. Switch between the technical log feed and a live video view of your automated applications.',
      items: [
        'Live Video Feed',
        'Detailed Process Logs',
        'Privacy-First Encryption',
        'Zero-Latency Monitoring'
      ],
      logLabel: 'DAEMON-LOG',
      videoLabel: 'VIDEO-WALKTHROUGH',
      viewLabel: 'SELECT VIEW'
    }
  }[lang];

  const initialLogs = [
    { time: '20:22:26', status: 'SYSTEM', msg: 'Profile match found: 98.4%' },
    { time: '20:22:20', status: 'SYSTEM', msg: 'Secure Vault: Local handshake complete.' },
    { time: '20:22:16', status: 'SYSTEM', msg: 'Submission successful via LinkedIn EasyApply' },
    { time: '20:22:12', status: 'SYSTEM', msg: 'Submission successful via LinkedIn EasyApply' },
    { time: '20:21:35', status: 'SYSTEM', msg: 'Submission successful via LinkedIn EasyApply' },
    { time: '20:18:35', status: 'SYSTEM', msg: 'No sensitive data transmitted to cloud.' },
    { time: '20:17:35', status: 'SYSTEM', msg: 'Auto-generating personalized cover letter...' },
    { time: '20:16:29', status: 'SYSTEM', msg: 'No sensitive data transmitted to cloud.' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">{t.title}</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t.desc}
              </p>
            </div>
            <ul className="space-y-4">
              {t.items.map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            {/* Terminal Window as per screenshot */}
            <div className="bg-[#050505] rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col h-[580px] relative">
              
              {/* Terminal Header */}
              <div className="bg-[#0A0A0A] border-b border-white/5 px-6 py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-white/40 ml-4">
                    <span>WORKSPACE</span>
                    <span>/</span>
                    <span>DASHBOARD</span>
                    <span>/</span>
                    <div className="relative inline-block" ref={dropdownRef}>
                      <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`flex items-center gap-1.5 transition-colors hover:text-white ${isDropdownOpen ? 'text-white' : 'text-white/60'}`}
                      >
                        {viewMode === 'log' ? t.logLabel : t.videoLabel}
                        <svg className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-3 w-56 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-white/10">
                           <div className="px-4 py-3 text-[9px] text-white/30 border-b border-white/5 mb-1 tracking-widest">{t.viewLabel}</div>
                           <button 
                             onClick={() => { setViewMode('log'); setIsDropdownOpen(false); }}
                             className={`w-full px-4 py-3.5 flex items-center gap-3 hover:bg-white/5 transition-colors text-left text-[10px] font-bold tracking-widest ${viewMode === 'log' ? 'text-amber-500' : 'text-white/70'}`}
                           >
                             <div className={`w-1.5 h-1.5 rounded-full ${viewMode === 'log' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-transparent border border-white/20'}`}></div>
                             {t.logLabel}
                           </button>
                           <button 
                             onClick={() => { setViewMode('video'); setIsDropdownOpen(false); }}
                             className={`w-full px-4 py-3.5 flex items-center gap-3 hover:bg-white/5 transition-colors text-left text-[10px] font-bold tracking-widest ${viewMode === 'video' ? 'text-amber-500' : 'text-white/70'}`}
                           >
                             <div className={`w-1.5 h-1.5 rounded-full ${viewMode === 'video' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-transparent border border-white/20'}`}></div>
                             {t.videoLabel}
                           </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                  <span className="text-[11px] font-mono font-bold text-[#27C93F] uppercase tracking-tighter">PRIVACY SECURE</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex-1 relative overflow-hidden bg-black">
                {viewMode === 'log' ? (
                  <div className="absolute inset-0 p-8 font-mono text-[14px] leading-8 overflow-y-auto custom-scrollbar">
                    {initialLogs.map((log, idx) => (
                      <div key={idx} className="flex gap-8 group mb-2">
                        <span className="text-white/20 w-18 shrink-0 tabular-nums">{log.time}</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#1E293B]/80 text-[#60A5FA] border border-[#334155] h-fit mt-1.5 uppercase tracking-wider shrink-0 min-w-[64px] text-center">
                          {log.status}
                        </span>
                        <span className="text-[#E2E8F0] tracking-tight group-hover:text-white transition-colors">
                          {log.msg}
                        </span>
                      </div>
                    ))}
                    <div className="mt-6 text-white/20 animate-pulse font-bold tracking-widest h-6 text-lg">_</div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8 animate-in fade-in duration-500 bg-[#020202]">
                    <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/10 bg-[#080808] group/video">
                       {/* Mock Video Feed */}
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none z-10"></div>
                       <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                         <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center animate-pulse border border-amber-500/40">
                               <svg className="w-10 h-10 text-amber-500 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                            </div>
                            <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
                         </div>
                         <div className="space-y-2 text-center">
                            <p className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-[0.3em]">AWAITING AGENT STREAM</p>
                            <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">ENCRYPTED P2P CHANNEL 01</p>
                         </div>
                       </div>
                       
                       {/* Overlay UI */}
                       <div className="absolute top-6 left-6 right-6 h-10 bg-[#151515]/90 backdrop-blur-md rounded-lg flex items-center px-4 gap-3 border border-white/10 z-20">
                          <div className="flex gap-1.5">
                             <div className="w-2 h-2 rounded-full bg-white/10"></div>
                             <div className="w-2 h-2 rounded-full bg-white/10"></div>
                          </div>
                          <div className="flex-1 h-5 bg-white/5 rounded-md text-[9px] text-white/40 flex items-center px-3 font-mono truncate border border-white/5 tracking-tight">
                             https://www.stepstone.de/jobs/software-engineer/berlin?q=auto-matching
                          </div>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#0A0A0A] px-8 py-5 flex items-center justify-between border-t border-white/5 text-[11px] font-mono shrink-0">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 font-medium tracking-tight">StepStone</span>
                    <div className="w-24 h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-amber-500 w-[70%] rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]"></div>
                    </div>
                    <span className="text-amber-500 font-bold uppercase tracking-widest">LIVE</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 font-medium tracking-tight">LinkedIn</span>
                    <div className="w-24 h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-blue-500 w-[100%] rounded-full opacity-40"></div>
                    </div>
                    <span className="text-blue-500/50 font-bold uppercase tracking-widest">IDLE</span>
                  </div>
                </div>
                
                <button className="flex items-center gap-2.5 px-4 py-2 bg-[#00FF9C]/5 border border-[#00FF9C]/20 rounded-lg hover:bg-[#00FF9C]/10 transition-all group">
                   <svg className="w-4 h-4 text-[#00FF9C] transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                   <span className="text-[#00FF9C] font-bold uppercase tracking-widest text-[10px]">LOCAL VAULT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default MissionControlPreview;
