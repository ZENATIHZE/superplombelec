export default function TrustBar() {
  // Note : pas de "garantie décennale" car nous faisons du diagnostic, pas des travaux.
  // Notre activité est couverte par notre Responsabilité Civile Professionnelle.
  const items = [
    { label: 'Diagnostic certifié', sub: 'Conforme NF EN 13160' },
    { label: 'Devis gratuit 24 h', sub: 'Sans engagement' },
    { label: 'Rapport assurance', sub: 'Accepté par tous les assureurs' },
    { label: 'Paiement après diagnostic', sub: 'Sécurisé' },
  ];
  return (
    <section aria-label="Garanties" className="bg-brand-700 text-white">
      <div className="container-px py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((it) => (
          <div key={it.label}>
            <div className="text-accent-300 mb-1 text-2xl">✓</div>
            <div className="font-semibold text-sm">{it.label}</div>
            <div className="text-xs text-brand-100 mt-0.5">{it.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
