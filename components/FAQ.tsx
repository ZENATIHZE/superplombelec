'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'Qu’est-ce qu’une recherche de fuite non destructive ?',
    a: "C'est une méthode qui localise la fuite sans casser vos murs, sols ou plafonds. Nous utilisons caméra thermique infrarouge, gaz traceur (azote-hydrogène), corrélateur acoustique et caméra endoscopique pour un diagnostic millimétrique.",
  },
  {
    q: 'Combien coûte une recherche de fuite ?',
    a: "Le tarif dépend de la complexité, en général entre 250 € et 600 € TTC. Le devis est gratuit. Si votre assurance multirisque habitation prend en charge la recherche de fuite (convention CIDRE / IRSI), nous établissons un dossier directement avec elle.",
  },
  {
    q: 'Mon assurance prend-elle en charge la recherche de fuite ?',
    a: "Oui, dans la majorité des cas. La convention IRSI (Indemnisation et Recours des Sinistres Immeubles) couvre la recherche de fuite jusqu'à 5 000 € HT. Nous fournissons un rapport conforme aux exigences des assureurs.",
  },
  {
    q: 'Quel est le délai d’intervention ?',
    a: 'Nous intervenons sous 1 h en urgence en Île-de-France (départements 75, 92, 78, 95, 93, 94). Pour une intervention planifiée, comptez 24 à 48 h.',
  },
  {
    q: 'Quelles sont vos zones d’intervention ?',
    a: "Toute l'Île-de-France : Paris (75), Hauts-de-Seine (92), Yvelines (78), Val-d'Oise (95), Seine-Saint-Denis (93), Val-de-Marne (94), Essonne (91) et Seine-et-Marne (77).",
  },
  {
    q: 'Faut-il une intervention si je vois juste une trace humide ?',
    a: "Oui — une trace humide indique presque toujours une fuite active. Plus on intervient tôt, moins les dégâts (et leurs coûts) sont importants. Une simple consultation peut éviter un dégât des eaux sérieux.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-white">
      <div className="container-px max-w-3xl">
        <div className="text-center mb-10">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="h2 mt-2">Tout ce qu&apos;il faut savoir</h2>
        </div>
        <ul className="space-y-3">
          {FAQS.map((f, i) => (
            <li key={f.q} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-5 hover:bg-slate-50"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-brand-700">{f.q}</span>
                <span className={`text-brand-500 text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`} aria-hidden>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm">{f.a}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const FAQ_DATA = FAQS;
