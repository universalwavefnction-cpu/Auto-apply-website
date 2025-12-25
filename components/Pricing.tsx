import React from 'react';
import { Language } from '../App';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = {
    de: {
      badge: 'Investieren Sie in Ihre Zukunft',
      title: 'Transparente, faire Preise',
      desc: 'Wählen Sie das Paket, das am besten zu Ihren Karrierezielen passt. Jederzeit kündbar.',
      monthly: '/ Monat',
      popular: 'Beliebt',
      plans: [
        {
          name: 'Starter',
          price: '0€',
          desc: 'Perfekt zum Ausprobieren',
          features: [
            '3 Bewerbungen / Tag',
            'Basis-KI Anschreiben',
            'LinkedIn Integration',
            'Community Support'
          ],
          cta: 'Kostenlos starten',
          variant: 'basic'
        },
        {
          name: 'Pro',
          price: '29€',
          desc: 'Der Turbolader für Ihre Jobsuche',
          features: [
            'Unbegrenzte Bewerbungen',
            'Premium-KI (GPT-4) Anschreiben',
            'Alle Plattformen (StepStone, Xing, etc.)',
            'Priority Email Support',
            'Detaillierte Analytics'
          ],
          cta: 'Pro testen',
          variant: 'popular'
        },
        {
          name: 'Ultimate',
          price: '99€',
          desc: 'Alles inklusive + Hands-on Service',
          features: [
            'Alles in Pro',
            'Persönlicher Success Manager',
            'CV-Review durch Experten',
            'Interview-Coaching Session',
            'Headhunter-Datenbank Zugang'
          ],
          cta: 'Jetzt upgraden',
          variant: 'basic'
        }
      ]
    },
    en: {
      badge: 'Invest in your future',
      title: 'Transparent, fair pricing',
      desc: 'Choose the plan that fits your career goals best. Cancel anytime.',
      monthly: '/ month',
      popular: 'Popular',
      plans: [
        {
          name: 'Starter',
          price: '0€',
          desc: 'Perfect to get started',
          features: [
            '3 Applications / Day',
            'Basic AI Cover Letters',
            'LinkedIn Integration',
            'Community Support'
          ],
          cta: 'Start for Free',
          variant: 'basic'
        },
        {
          name: 'Pro',
          price: '29€',
          desc: 'Turbocharge your job search',
          features: [
            'Unlimited Applications',
            'Premium AI (GPT-4) Cover Letters',
            'All Platforms (StepStone, Xing, etc.)',
            'Priority Email Support',
            'Detailed Analytics'
          ],
          cta: 'Try Pro',
          variant: 'popular'
        },
        {
          name: 'Ultimate',
          price: '99€',
          desc: 'All inclusive + Hands-on Service',
          features: [
            'Everything in Pro',
            'Personal Success Manager',
            'Expert CV Review',
            'Interview Coaching Session',
            'Headhunter Database Access'
          ],
          cta: 'Upgrade Now',
          variant: 'basic'
        }
      ]
    }
  }[lang];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">{t.badge}</h2>
          <h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">{t.title}</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {t.plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-3xl p-8 border hover:border-amber-200 transition-all group ${
                plan.variant === 'popular' 
                  ? 'border-amber-500 shadow-2xl shadow-amber-500/10 scale-105 z-10' 
                  : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/50'
              }`}
            >
              {plan.variant === 'popular' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-[10px] uppercase font-black tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                  {t.popular}
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">{t.monthly}</span>
                </div>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 shrink-0 ${plan.variant === 'popular' ? 'text-amber-500' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                plan.variant === 'popular'
                  ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/30'
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
