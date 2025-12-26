import React from 'react';
import { Language } from '../App';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = {
    de: {
      badge: 'Pre-Launch Angebot',
      title: 'Starten Sie jetzt zum Sonderpreis',
      desc: 'Sichern Sie sich unseren exklusiven Pilot-Tarif. Begrenzte Verfügbarkeit.',
      weekly: '/ Woche',
      planName: 'Pilot',
      planDesc: 'Voller Zugang während der Pre-Launch Phase',
      features: [
        'Unbegrenzte Bewerbungen',
        'KI Integration',
        'Alle Plattformen (StepStone, LinkedIn, Xing)',
        'Headless-Modus (bewirbt sich ohne geöffnetes Fenster)',
        'Detaillierte Analytics',
        'Frühzugang zu neuen Features'
      ],
      cta: 'Jetzt starten',
      note: 'Keine versteckten Kosten. Jederzeit kündbar.'
    },
    en: {
      badge: 'Pre-Launch Offer',
      title: 'Get started at a special price',
      desc: 'Secure our exclusive Pilot plan. Limited availability.',
      weekly: '/ week',
      planName: 'Pilot',
      planDesc: 'Full access during the pre-launch phase',
      features: [
        'Unlimited Applications',
        'AI Integration',
        'All Platforms (StepStone, LinkedIn, Xing)',
        'Headless Mode (applies without window open)',
        'Detailed Analytics',
        'Early access to new features'
      ],
      cta: 'Get Started',
      note: 'No hidden fees. Cancel anytime.'
    }
  }[lang];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-amber-500/10 text-amber-600 font-black uppercase tracking-widest text-[10px] px-4 py-2 rounded-full mb-6">{t.badge}</span>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">{t.title}</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Single Centered Pricing Card */}
        <div className="flex justify-center">
          <div className="relative bg-white rounded-[32px] p-10 md:p-12 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 max-w-md w-full">
            {/* Pre-launch badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-[10px] uppercase font-black tracking-widest px-5 py-2 rounded-full shadow-lg shadow-amber-500/30">
              Pre-Launch
            </div>

            <div className="text-center mb-10">
              <h4 className="text-2xl font-black text-slate-900 mb-4">{t.planName}</h4>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl font-black text-amber-500">6€</span>
                <span className="text-slate-500 font-bold text-lg">{t.weekly}</span>
              </div>
              <p className="text-slate-500 text-sm">{t.planDesc}</p>
            </div>

            <div className="space-y-4 mb-10">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/14A8wI3Kb9aH15l6uW5sA00'}
              className="w-full py-4 rounded-2xl font-black text-base bg-amber-500 text-white hover:bg-amber-600 shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-100"
            >
              {t.cta}
            </button>

            <p className="text-center text-xs text-slate-400 mt-6 font-medium">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
