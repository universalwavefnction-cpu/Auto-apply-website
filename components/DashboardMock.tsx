
import React from 'react';

const DashboardMock: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#050505] text-white font-sans overflow-hidden flex flex-col text-[8px] md:text-[10px]">
      {/* Top Header */}
      <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-[#0A0A0A]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 mr-2">
            <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className="text-white/20 font-bold uppercase tracking-[0.2em] text-[8px]">Workspace</span>
          <span className="text-white/10">/</span>
          <span className="font-bold uppercase tracking-[0.2em] text-[8px] text-white/60">Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#27C93F]/20 bg-[#27C93F]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse"></div>
            <span className="text-[7px] font-bold text-[#27C93F] uppercase tracking-widest">Active Stealth</span>
          </div>
          <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center font-black text-black text-[10px]">AD</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-40 border-r border-white/5 p-6 space-y-8 hidden sm:block shrink-0 bg-[#080808]">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-amber-500">
              <div className="w-5 h-5 rounded-md border border-amber-500/30 flex items-center justify-center bg-amber-500/10">
                <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
              </div>
              <span className="font-bold tracking-tight">Mission Control</span>
            </div>
            <div className="flex items-center gap-3 text-white/30 hover:text-white/50 transition-colors cursor-pointer group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeWidth="2.5"/></svg>
              <span className="font-semibold">Applications</span>
            </div>
            <div className="flex items-center gap-3 text-white/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" strokeLinecap="round" strokeWidth="2.5"/></svg>
              <span className="font-semibold">Agents</span>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <span className="text-[7px] font-black text-white/10 uppercase tracking-[0.3em]">Neural Targets</span>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-md">
                 <span className="text-amber-500 font-bold text-[7px] uppercase">StepStone</span>
                 <div className="w-1 h-1 rounded-full bg-amber-500"></div>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 bg-white/[0.02] border border-white/5 rounded-md">
                 <span className="text-white/40 font-bold text-[7px] uppercase">LinkedIn</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 bg-white/[0.02] border border-white/5 rounded-md opacity-40">
                 <span className="text-white/20 font-bold text-[7px] uppercase">Indeed</span>
                 <span className="text-[5px] text-white/10 uppercase font-black">Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 p-8 overflow-hidden flex flex-col gap-8 bg-black">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: 'Live Applications', val: '42', p: '+12%', color: 'text-amber-500' },
              { label: 'Match Rating', val: '98.4%', p: '+0.2%', color: 'text-white' },
              { label: 'Time Optimized', val: '24h', p: 'MAX', color: 'text-white' },
              { label: 'Active Vaults', val: '3', p: 'SEC', color: 'text-[#27C93F]' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 p-4 rounded-xl space-y-2 relative group hover:border-white/10 transition-colors">
                <span className="text-white/20 uppercase font-black text-[7px] tracking-[0.2em]">{stat.label}</span>
                <p className={`text-2xl font-black tracking-tighter ${stat.color}`}>{stat.val}</p>
                <div className="absolute top-4 right-4 text-[7px] font-black bg-white/5 px-1.5 py-0.5 rounded text-white/40">{stat.p}</div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-amber-500/10 rounded-md">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeWidth="2.5"/></svg>
                </div>
                <span className="uppercase font-black tracking-[0.2em] text-[9px] text-white/60">Success Velocity</span>
              </div>
              <div className="flex gap-1.5 bg-white/5 p-1 rounded-lg">
                <div className="px-2.5 py-1 bg-amber-500 text-black font-black rounded-md text-[7px]">7D</div>
                <div className="px-2.5 py-1 text-white/20 font-black rounded-md text-[7px]">1M</div>
              </div>
            </div>
            
            <div className="flex-1 relative mt-4">
              <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                <path d="M0 100 C 40 80, 80 120, 120 40 C 160 0, 200 80, 240 60 C 280 40, 320 100, 360 80 L 400 90 V 120 H 0 Z" fill="url(#mainGradient)" />
                <path d="M0 100 C 40 80, 80 120, 120 40 C 160 0, 200 80, 240 60 C 280 40, 320 100, 360 80 L 400 90" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="mainGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex justify-between items-end pb-2 px-2 text-white/10 font-mono text-[7px] uppercase tracking-widest border-b border-white/5">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Daemon Log Sidebar (Hidden on mobile) */}
        <div className="w-56 border-l border-white/5 p-6 shrink-0 hidden lg:flex flex-col gap-6 bg-[#080808]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-black">_</span>
              <span className="uppercase font-black tracking-[0.2em] text-[8px] text-white/40">Audit Log</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10">
              <div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-[6px] text-amber-500 font-black uppercase">Live</span>
            </div>
          </div>
          <div className="flex-1 font-mono text-[7px] space-y-4 overflow-y-auto custom-scrollbar pr-2">
             <div className="space-y-1">
                <span className="text-white/10 block uppercase font-bold tracking-tighter">20:42:01</span>
                <span className="text-white/60 leading-relaxed">Checking for new StepStone listings matching 'Senior Product Design'...</span>
             </div>
             <div className="space-y-1">
                <span className="text-white/10 block uppercase font-bold tracking-tighter">20:42:05</span>
                <span className="text-[#27C93F] leading-relaxed">Match Found: 98% Compatibility.</span>
             </div>
             <div className="space-y-1">
                <span className="text-white/10 block uppercase font-bold tracking-tighter">20:42:08</span>
                <span className="text-amber-500 leading-relaxed">Initializing Stealth Application Handshake...</span>
             </div>
             <div className="pt-2 animate-pulse text-white/20">█</div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default DashboardMock;
