import React, { useState } from 'react';
import { Language } from '../App';

interface FAQProps {
    lang: Language;
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const t = {
        de: {
            title: 'Häufig gestellte Fragen',
            questions: [
                {
                    q: 'Werden meine Daten wirklich lokal gespeichert?',
                    a: 'Ja, zu 100%. AutoApply Intelligence läuft als native App auf Ihrem Gerät. Es gibt keine zentrale Datenbank, die Ihre Passwörter oder Bewerbungsunterlagen speichert. Alles bleibt bei Ihnen.'
                },
                {
                    q: 'Kann ich die KI-Anschreiben bearbeiten?',
                    a: 'Absolut. Der "Review-Mode" erlaubt es Ihnen, jedes Anschreiben vor dem Absenden zu überprüfen und anzupassen. Sie haben immer die volle Kontrolle.'
                },
                {
                    q: 'Funktioniert das auch für englische Jobs?',
                    a: 'Ja, unsere KI erkennt automatisch die Sprache der Stellenausschreibung und verfasst das Anschreiben entsprechend in Deutsch oder Englisch.'
                },
                {
                    q: 'Gibt es eine Geld-zurück-Garantie?',
                    a: 'Ja, Sie können AutoApply Intelligence 14 Tage lang risikofrei testen. Wenn Sie nicht zufrieden sind, erhalten Sie Ihr Geld zurück. Ohne Fragen.'
                },
                {
                    q: 'Wie viele Bewerbungen kann ich pro Tag senden?',
                    a: 'Technisch gesehen unbegrenzt. Wir empfehlen jedoch aus Sicherheitsgründen (Spam-Schutz der Plattformen) maximal 50-100 Bewerbungen pro Tag.'
                }
            ]
        },
        en: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    q: 'Is my data really stored locally?',
                    a: 'Yes, 100%. AutoApply Intelligence runs as a native app on your device. There is no central database storing your passwords or application documents. Everything stays with you.'
                },
                {
                    q: 'Can I edit the AI cover letters?',
                    a: 'Absolutely. "Review Mode" allows you to check and adjust every cover letter before sending. You always have full control.'
                },
                {
                    q: 'Does it work for English jobs too?',
                    a: 'Yes, our AI automatically detects the language of the job listing and writes the cover letter in German or English accordingly.'
                },
                {
                    q: 'Is there a money-back guarantee?',
                    a: 'Yes, you can try AutoApply Intelligence risk-free for 14 days. If you are not satisfied, you get your money back. No questions asked.'
                },
                {
                    q: 'How many applications can I send per day?',
                    a: 'Technically unlimited. However, for safety reasons (platform spam protection), we recommend a maximum of 50-100 applications per day.'
                }
            ]
        }
    }[lang];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-12 text-center">{t.title}</h2>

                <div className="space-y-4">
                    {t.questions.map((item, i) => (
                        <div
                            key={i}
                            className="border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-amber-200"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between bg-slate-50 hover:bg-white transition-colors"
                            >
                                <span className="font-bold text-slate-900">{item.q}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 py-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
