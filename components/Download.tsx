
import React, { useState } from 'react';
import { Language } from '../App';

interface DownloadProps {
  lang: Language;
}

const Download: React.FC<DownloadProps> = ({ lang }) => {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const startDownload = (platform: string) => {
    if (platform === 'install-guide') {
      document.getElementById('install-guide-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // GitHub Releases download URLs
    const baseUrl = 'https://github.com/universalwavefnction-cpu/Auto-apply-website/releases/download/v1.2.4';
    const files: Record<string, string> = {
      macos: `${baseUrl}/AutoApply-1.2.4-arm64.dmg`,
      windows: `${baseUrl}/AutoApply.Setup.1.2.4.exe`,
      linux: `${baseUrl}/AutoApply-1.2.4-arm64.AppImage`
    };

    const url = files[platform];
    if (url) {
      window.open(url, '_blank');
    }
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
          icon: <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />,
          details: 'M1/M2/M3 & Intel (Universal Binary)',
          cta: 'Download .dmg'
        },
        {
          id: 'windows',
          name: 'Windows',
          icon: <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />,
          details: 'Windows 10, 11 (Architecture x64)',
          cta: 'Download .exe'
        },
        {
          id: 'linux',
          name: 'Linux',
          icon: <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.36-.462-.549-.643-.306-.294-.673-.533-.864-.686-.053-.046-.116-.135-.051-.069a2.348 2.348 0 01.347-.672c.212-.263.372-.543.372-.839 0-.135-.057-.234-.082-.333-.043-.2-.043-.401-.043-.468l-.003-.003c.145-.401.55-.867.55-.867s.543-.532.543-.667a.424.424 0 00-.158-.468c-.1-.067-.225-.116-.359-.149a1.633 1.633 0 01-.309-.134c-.172-.129-.372-.386-.543-.659-.138-.226-.235-.4-.381-.4-.049 0-.108.022-.159.067-.205.179-.339.533-.678.733-.17.099-.399.2-.66.2-.26 0-.432-.1-.601-.2-.169-.1-.301-.2-.505-.2-.169 0-.351.091-.459.199-.303.266-.419.533-.759.733-.34.2-.798.134-1.047.2-.065.016-.134.067-.155.134-.027.067-.027.134-.027.2v.003c.015.138.043.268.086.4-.207.199-.52.465-.863.665-.348.199-.695.4-1.03.6-.334.2-.67.4-.909.601a2.392 2.392 0 00-.543.6c-.2.2-.2.535-.2.802v.003c.003.133.05.267.164.397.108.135.293.268.54.401.47.265 1.047.399 1.047.399h.057c.098.4.318.81.67 1.202.348.4.877.733 1.628.933h-.003.003c.015.134.033.267.055.4v.003c.065.4.179.802.46 1.134.284.335.727.6 1.528.6h.003c.257 0 .686-.134.95-.334.267-.2.417-.468.417-.468s-.112.33-.199.668c-.08.333-.135.668-.112.93.033.4.231.668.484.866.257.2.601.267.943.2h.003c.4-.067.8-.334 1.2-.934.4-.601.8-1.468 1.025-2.868.015-.098.027-.2.043-.334.183.135.333.2.4.2h.003c.2 0 .334-.067.4-.135.2-.2.131-.534-.068-.801-.199-.268-.533-.535-.866-.869-.334-.334-.67-.668-.869-1.002-.2-.335-.267-.669-.2-1.003.065-.333.199-.6.445-.935.243-.335.577-.735 1.01-1.335.4-.601.777-1.334 1.01-2.135.236-.802.334-1.669.201-2.537-.134-.867-.4-1.734-.869-2.535-.466-.802-1.133-1.535-2.002-2.069-.867-.535-1.935-.869-3.203-.869h-.003zm-.552 1.535c.067-.2.133-.4.267-.534.133-.135.333-.2.533-.269.4-.135.869-.2 1.002-.067.135.133.002.4-.198.668-.2.267-.534.534-.801.6-.199.068-.465.068-.6-.066-.133-.131-.2-.265-.203-.332zM8.004 6.936c.527 0 .998.133 1.398.467.4.335.733.802.999 1.469.267.668.4 1.402.4 2.136v.333c-.065.665-.065 1.267-.065 1.8-.002.535-.002 1.002-.134 1.469-.135.467-.334.867-.6 1.2-.267.335-.601.6-1.002.8-.4.2-.867.268-1.401.268h-.132c-.534 0-1.002-.134-1.402-.334-.4-.2-.733-.467-1-.801-.267-.335-.466-.735-.6-1.202-.133-.465-.133-.933-.133-1.466v-1.8c-.002-.735.131-1.469.398-2.137.267-.667.6-1.134 1-1.469.4-.334.867-.467 1.336-.533z" />,
          details: 'AppImage, .deb, .rpm Packages',
          cta: 'Download .AppImage'
        },
        {
          id: 'install-guide',
          name: 'Installations-Hilfe',
          icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />, // Info icon
          details: 'Anleitung für macOS & Windows',
          cta: 'Nach unten scrollen'
        }
      ],
      install: {
        title: 'Installationshinweise',
        note: 'Da wir unsere Software häufig aktualisieren, kann es zu Sicherheitswarnungen kommen. Das ist bei neuen Apps normal.',
        mac: {
          title: 'Für macOS Nutzer',
          subtitle: 'Bei Meldung "Entwickler kann nicht verifiziert werden":',
          steps: [
            'App-Icon NICHT doppelklicken',
            'Rechtsklick (oder Ctrl+Klick) auf die App',
            'Wählen Sie "Öffnen" im Menü',
            'Im Fenster erneut auf "Öffnen" klicken'
          ],
          note: 'Nur beim ersten Start notwendig.'
        },
        win: {
          title: 'Für Windows Nutzer',
          subtitle: 'Bei Meldung "Der Computer wurde durch Windows geschützt":',
          steps: [
            'Klicken Sie auf "Weitere Informationen"',
            'Klicken Sie auf "Trotzdem ausführen"'
          ],
          note: 'Die App ist sicher und virengeprüft.'
        }
      },
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
          icon: <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />,
          details: 'M1/M2/M3 & Intel (Universal Binary)',
          cta: 'Download .dmg'
        },
        {
          id: 'windows',
          name: 'Windows',
          icon: <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />,
          details: 'Windows 10, 11 (Architecture x64)',
          cta: 'Download .exe'
        },
        {
          id: 'linux',
          name: 'Linux',
          icon: <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.36-.462-.549-.643-.306-.294-.673-.533-.864-.686-.053-.046-.116-.135-.051-.069a2.348 2.348 0 01.347-.672c.212-.263.372-.543.372-.839 0-.135-.057-.234-.082-.333-.043-.2-.043-.401-.043-.468l-.003-.003c.145-.401.55-.867.55-.867s.543-.532.543-.667a.424.424 0 00-.158-.468c-.1-.067-.225-.116-.359-.149a1.633 1.633 0 01-.309-.134c-.172-.129-.372-.386-.543-.659-.138-.226-.235-.4-.381-.4-.049 0-.108.022-.159.067-.205.179-.339.533-.678.733-.17.099-.399.2-.66.2-.26 0-.432-.1-.601-.2-.169-.1-.301-.2-.505-.2-.169 0-.351.091-.459.199-.303.266-.419.533-.759.733-.34.2-.798.134-1.047.2-.065.016-.134.067-.155.134-.027.067-.027.134-.027.2v.003c.015.138.043.268.086.4-.207.199-.52.465-.863.665-.348.199-.695.4-1.03.6-.334.2-.67.4-.909.601a2.392 2.392 0 00-.543.6c-.2.2-.2.535-.2.802v.003c.003.133.05.267.164.397.108.135.293.268.54.401.47.265 1.047.399 1.047.399h.057c.098.4.318.81.67 1.202.348.4.877.733 1.628.933h-.003.003c.015.134.033.267.055.4v.003c.065.4.179.802.46 1.134.284.335.727.6 1.528.6h.003c.257 0 .686-.134.95-.334.267-.2.417-.468.417-.468s-.112.33-.199.668c-.08.333-.135.668-.112.93.033.4.231.668.484.866.257.2.601.267.943.2h.003c.4-.067.8-.334 1.2-.934.4-.601.8-1.468 1.025-2.868.015-.098.027-.2.043-.334.183.135.333.2.4.2h.003c.2 0 .334-.067.4-.135.2-.2.131-.534-.068-.801-.199-.268-.533-.535-.866-.869-.334-.334-.67-.668-.869-1.002-.2-.335-.267-.669-.2-1.003.065-.333.199-.6.445-.935.243-.335.577-.735 1.01-1.335.4-.601.777-1.334 1.01-2.135.236-.802.334-1.669.201-2.537-.134-.867-.4-1.734-.869-2.535-.466-.802-1.133-1.535-2.002-2.069-.867-.535-1.935-.869-3.203-.869h-.003zm-.552 1.535c.067-.2.133-.4.267-.534.133-.135.333-.2.533-.269.4-.135.869-.2 1.002-.067.135.133.002.4-.198.668-.2.267-.534.534-.801.6-.199.068-.465.068-.6-.066-.133-.131-.2-.265-.203-.332zM8.004 6.936c.527 0 .998.133 1.398.467.4.335.733.802.999 1.469.267.668.4 1.402.4 2.136v.333c-.065.665-.065 1.267-.065 1.8-.002.535-.002 1.002-.134 1.469-.135.467-.334.867-.6 1.2-.267.335-.601.6-1.002.8-.4.2-.867.268-1.401.268h-.132c-.534 0-1.002-.134-1.402-.334-.4-.2-.733-.467-1-.801-.267-.335-.466-.735-.6-1.202-.133-.465-.133-.933-.133-1.466v-1.8c-.002-.735.131-1.469.398-2.137.267-.667.6-1.134 1-1.469.4-.334.867-.467 1.336-.533z" />,
          details: 'AppImage, .deb, .rpm Packages',
          cta: 'Download .AppImage'
        },
        {
          id: 'install-guide',
          name: 'Installation Guide',
          icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />, // Info icon
          details: 'Guide for macOS & Windows',
          cta: 'Scroll Down'
        }
      ],
      install: {
        title: 'Installation Guide',
        note: 'Since we update frequently, you might see a security warning. This is normal for brand new applications.',
        mac: {
          title: 'For macOS Users',
          subtitle: 'If you see "App cannot be opened...":',
          steps: [
            "Don't double-click the icon",
            "Right-Click (or Ctrl+Click) the app",
            "Select 'Open' from the menu",
            "Click 'Open' in the popup"
          ],
          note: 'Only needed for the first launch.'
        },
        win: {
          title: 'For Windows Users',
          subtitle: 'If you see "Windows protected your PC":',
          steps: [
            'Click "More info"',
            'Click "Run anyway"'
          ],
          note: 'The app is safe and virus-free.'
        }
      },
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
            </div>

            {/* Removed Version History Table */}
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
                  className="mt-auto w-full py-4 px-6 rounded-2xl font-black text-sm tracking-tight transition-all flex items-center justify-center gap-3 bg-[#0A1128] text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-2xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {p.cta}
                </button>

                {/* Aesthetic flare */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-amber-500/5 transition-colors pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mt-20 border-t border-slate-200 pt-16" id="install-guide-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-black text-[#0A1128] mb-4">{t.install.title}</h3>
            <p className="text-slate-500 font-medium">{t.install.note}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* macOS Guide */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1128]">{t.install.mac.title}</h4>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Security Bypass</p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-100">
                <p className="text-sm text-amber-800 font-medium">"{t.install.mac.subtitle}"</p>
              </div>

              <ol className="space-y-3 mb-6">
                {t.install.mac.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="shrink-0 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wide text-center">{t.install.mac.note}</p>
            </div>

            {/* Windows Guide */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1128]">{t.install.win.title}</h4>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">SmartScreen</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
                <p className="text-sm text-blue-800 font-medium">"{t.install.win.subtitle}"</p>
              </div>

              <ol className="space-y-3 mb-6">
                {t.install.win.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="shrink-0 w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wide text-center">{t.install.win.note}</p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-24 p-12 bg-[#0A1128] rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-slate-900/30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="space-y-4 relative z-10 max-w-xl">
            <h4 className="text-white text-3xl font-black tracking-tight">{lang === 'de' ? 'Fragen?' : 'Questions?'}</h4>
            <p className="text-slate-400 text-lg leading-relaxed">{lang === 'de' ? 'Haben Sie Fragen oder benötigen Sie Hilfe? Wir sind für Sie da und helfen Ihnen gerne weiter.' : 'Have questions or need help? We are here for you and happy to assist.'}</p>
          </div>
          <button className="bg-amber-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-amber-500/20 hover:bg-amber-400 hover:scale-105 transition-all shrink-0 relative z-10">
            {lang === 'de' ? 'Kontakt aufnehmen' : 'Contact Us'}
          </button>
        </div>
      </div>
    </section >
  );
};

export default Download;
